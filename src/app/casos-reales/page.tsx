import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Quote, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
    title: "Casos Reales | Informática IAZ",
    description: "Conocé experiencias reales de clientes que implementaron nuestros sistemas.",
};

export default function CasosRealesPage() {
    const caseStudies = [
        {
            name: "Jorge Benitez",
            image: "/images/caso1.png",
            testimonial: "Gracias a Informática IAZ pude tener el control de asistencia de mis estudiantes, además de llevar un registro de las actividades y valoraciones de cada uno.",
        },
        {
            name: "Maximiliano Borghi",
            image: "/images/caso2.png",
            testimonial: "Antes trabajábamos de forma desorganizada, con planillas y registros manuales que nos hacían perder tiempo y cometer errores. Gracias a Informática IAZ, hoy podemos gestionar y optimizar los servicios de telecomunicaciones de manera simple y eficiente. Organizamos clientes, servicios técnicos y tareas pendientes en un solo sistema adaptado 100% a nuestra empresa. Ahora tenemos control total y trabajamos con mayor profesionalismo.",
        }
    ];

    return (
        <div className="min-h-screen bg-background py-20 px-4 md:px-8">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none -z-10" />

            <div className="max-w-6xl mx-auto">
                <header className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
                        Casos <span className="text-primary">Reales</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
                        Historias reales de clientes que confiaron en Informática IAZ
                    </p>
                </header>

                <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                    {caseStudies.map((caseStudy, index) => (
                        <div
                            key={index}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl shadow-2xl p-8 md:p-12 relative overflow-hidden group hover:border-primary/50 transition-all duration-500 animate-in fade-in slide-in-from-bottom-8 duration-1000"
                            style={{ animationDelay: `${(index + 1) * 200}ms` }}
                        >
                            {/* Decorative Quote Icons */}
                            <Quote className="absolute top-8 left-8 w-12 h-12 text-primary/20 -z-10 group-hover:text-primary/40 transition-colors duration-500" />
                            <Quote className="absolute bottom-8 right-8 w-12 h-12 text-primary/20 -z-10 rotate-180 group-hover:text-primary/40 transition-colors duration-500" />

                            <div className="flex flex-col items-center text-center h-full">
                                <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/50 transition-all duration-500 p-1">
                                    <Image
                                        src={caseStudy.image}
                                        alt={caseStudy.name}
                                        fill
                                        className="object-cover rounded-full"
                                    />
                                </div>

                                <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                                    {caseStudy.name}
                                </h2>

                                <p className="text-lg text-gray-300 italic leading-relaxed mb-auto pb-8">
                                    "{caseStudy.testimonial}"
                                </p>

                                <Link
                                    href="https://wa.me/541159383308"
                                    target="_blank"
                                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary/30 mt-auto"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    Quiero un sistema similar
                                </Link>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
}
