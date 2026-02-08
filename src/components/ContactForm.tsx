"use client";

import { useState } from "react";
import Button from "./Button";
import { Send } from "lucide-react";

export default function ContactForm() {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.target as HTMLFormElement);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            message: formData.get("message"),
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || "Error al enviar el mensaje");
            }

            alert("¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.");
            (e.target as HTMLFormElement).reset();
        } catch (error) {
            alert(error instanceof Error ? error.message : "Ocurrió un error inesperado.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-md mx-auto p-8 rounded-2xl bg-card border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-secondary" />

            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                Envíanos un mensaje
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Nombre</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        placeholder="Tu nombre"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        placeholder="tu@email.com"
                    />
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-1">Teléfono (Opcional)</label>
                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        placeholder="+54 9 11 ..."
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Mensaje</label>
                    <textarea
                        name="message"
                        id="message"
                        required
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                        placeholder="¿En qué podemos ayudarte?"
                    />
                </div>

                <Button
                    type="submit"
                    disabled={loading}
                    className="w-full gap-2 mt-2"
                >
                    {loading ? "Enviando..." : (
                        <>
                            Enviar Mensaje <Send className="w-4 h-4" />
                        </>
                    )}
                </Button>
            </form>
        </div>
    );
}
