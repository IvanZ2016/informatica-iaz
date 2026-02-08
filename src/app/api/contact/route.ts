import { NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";
import { getDb } from "@/lib/db";

const contactSchema = z.object({
    name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
    email: z.string().email("Email inválido"),
    message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
    phone: z.string().optional(),
});

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const validation = contactSchema.safeParse(body);

        if (!validation.success) {
            return NextResponse.json(
                { error: "Datos inválidos", details: validation.error.format() },
                { status: 400 }
            );
        }

        const { name, email, message, phone } = validation.data;
        let dbSuccess = false;
        let emailSuccess = false;

        // 1. Try Database Insertion
        try {
            const db = await getDb();
            // Check if table exists, if not create it (auto-migration for dev convenience)
            await db.query(`
                CREATE TABLE IF NOT EXISTS contacts (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    name VARCHAR(255) NOT NULL,
                    email VARCHAR(255) NOT NULL,
                    phone VARCHAR(50),
                    message TEXT NOT NULL,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                )
            `);

            await db.query(
                "INSERT INTO contacts (name, email, phone, message) VALUES (?, ?, ?, ?)",
                [name, email, phone || null, message]
            );
            dbSuccess = true;
        } catch (dbError) {
            console.error("Database Error:", dbError);
            // We continue to try sending email even if DB fails
        }

        // 2. Try Sending Email
        try {
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS,
                },
            });

            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: "ivanzavala231@gmail.com",
                subject: `Nueva consulta de ${name}`,
                html: `
                    <h3>Has recibido un nuevo mensaje desde tu web:</h3>
                    <p><strong>Nombre:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Teléfono:</strong> ${phone || "No especificado"}</p>
                    <p><strong>Mensaje:</strong></p>
                    <p>${message}</p>
                `,
            };

            await transporter.sendMail(mailOptions);
            emailSuccess = true;
        } catch (emailError) {
            console.error("Email Error:", emailError);
        }

        // 3. Determine Final Response
        if (!dbSuccess && !emailSuccess) {
            return NextResponse.json(
                { error: "Error interno: No se pudo guardar ni enviar el mensaje. Verifique la conexión a la base de datos y la configuración de correo." },
                { status: 500 }
            );
        }

        return NextResponse.json({
            success: true,
            message: "Proceso completado",
            details: {
                database: dbSuccess ? "Guardado" : "Error al guardar",
                email: emailSuccess ? "Enviado" : "Error al enviar"
            }
        });

    } catch (error) {
        console.error("API Critical Error:", error);
        return NextResponse.json(
            { error: "Error interno del servidor" },
            { status: 500 }
        );
    }
}
