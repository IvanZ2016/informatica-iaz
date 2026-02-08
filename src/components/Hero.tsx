import Link from "next/link";
import Button from "./Button";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse-glow" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[128px] animate-pulse-glow delay-1000" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
            </div>

            <div className="container relative z-10 px-4 md:px-6 text-center">
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-8 animate-float">
                    <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                    Innovación y Seguridad
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white mb-6 text-glow">
                    Soluciones <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">Informáticas</span>
                    <br /> Profesionales
                </h1>

                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl mb-10 leading-relaxed">
                    Software a medida, páginas web de alto impacto y soporte técnico especializado.
                    Transformamos tus ideas en realidad digital.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="https://wa.me/5491159383308" target="_blank">
                        <Button size="lg" className="w-full sm:w-auto gap-2 group">
                            <MessageCircle className="w-5 h-5" />
                            Contáctanos por WhatsApp
                        </Button>
                    </Link>
                    <Link href="/services">
                        <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2">
                            Ver Servicios
                            <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
