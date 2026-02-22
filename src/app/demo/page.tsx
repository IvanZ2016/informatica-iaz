import { Metadata } from "next";
import Button from "@/components/Button";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Demo del Sistema | Informática IAZ",
    description: "Mirá cómo funciona nuestro sistema a medida en acción.",
};

export default function DemoPage() {
    const phoneNumber = "5491159383308";
    const message = encodeURIComponent("Hola, vi la demo y me gustaría solicitar más información.");

    return (
        <section className="min-h-screen py-20 px-4 bg-background overflow-hidden relative">
            {/* Background elements for aesthetic */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

            <div className="max-w-4xl mx-auto relative z-10 text-center">
                <header className="mb-12">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
                        Demo del <span className="text-primary">Sistema</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                        Descubra las capacidades de nuestra solución tecnológica.
                        En este video le mostramos cómo optimizamos sus procesos con herramientas modernas y eficientes.
                    </p>
                </header>

                <div className="relative group mb-16">
                    {/* Glowing effect background for video */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

                    <div className="relative bg-card border border-card-border rounded-2xl overflow-hidden shadow-2xl">
                        <video
                            controls
                            className="w-full h-auto rounded-2xl"
                        >
                            <source src="/videos/demo.mp4" type="video/mp4" />
                            Tu navegador no soporta video HTML5.
                        </video>
                    </div>
                </div>

                <div className="bg-card/50 border border-card-border p-8 md:p-12 rounded-3xl backdrop-blur-sm shadow-xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        ¿Listo para llevar su negocio al siguiente nivel?
                    </h2>
                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Nuestros sistemas están diseñados para ser escalables, seguros y extremadamente fáciles de usar.
                        Potencie su productividad hoy mismo con Informática IAZ.
                    </p>
                    <Link
                        href={`https://wa.me/${phoneNumber}?text=${message}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button variant="secondary" size="lg" className="w-full md:w-auto">
                            Solicitar más información
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
