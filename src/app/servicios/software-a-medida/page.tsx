import React from "react";
import Button from "@/components/Button";
import Link from "next/link";
import { ArrowRight, CheckCircle, Code, Settings, Server, BarChart, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function SoftwareAMedidaPage() {
    return (
        <main className="min-h-screen bg-background text-foreground pt-24 pb-12">

            {/* Hero Section */}
            <section className="relative px-4 mb-20">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/2 animate-slide-in-left">
                        <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-semibold mb-6">
                            Soluciones Personalizadas
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-glow">
                            Software a <span className="text-primary">Medida</span>
                        </h1>
                        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
                            Transformamos tus procesos manuales en sistemas digitales eficientes.
                            Diseñamos herramientas exclusivas que se adaptan a tu negocio, y no al revés.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="https://wa.me/5491159383308?text=Hola,%20me%20interesa%20un%20software%20a%20medida" target="_blank">
                                <Button size="lg" className="w-full sm:w-auto gap-2 text-lg">
                                    Solicitar Presupuesto
                                    <ArrowRight className="w-5 h-5" />
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl animate-fade-in group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-cyan-500/20 z-10" />
                        <Image
                            src="/images/software a medida.jpg"
                            alt="Software a Medida Dashboard"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-card/30 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
                        ¿Por qué elegir <span className="text-secondary">Software a Medida</span>?
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Settings,
                                title: "Adaptación Total",
                                desc: "El sistema se ajusta 100% a tu flujo de trabajo actual, sin funciones innecesarias."
                            },
                            {
                                icon: BarChart,
                                title: "Reportes en Tiempo Real",
                                desc: "Toma decisiones basadas en datos actualizados al instante sobre ventas, stock y más."
                            },
                            {
                                icon: Server,
                                title: "Escalabilidad",
                                desc: "Tu software crece junto con tu empresa. Agrega módulos según lo necesites."
                            },
                            {
                                icon: ShieldCheck,
                                title: "Seguridad Avanzada",
                                desc: "Protección de datos empresariales con estándares modernos de gestión de usuarios."
                            },
                            {
                                icon: Code,
                                title: "Integración",
                                desc: "Conectamos tu nuevo sistema con herramientas que ya usas (AFIP, MercadoPago, etc)."
                            },
                            {
                                icon: CheckCircle,
                                title: "Propiedad del Código",
                                desc: "A diferencia de un alquiler (SaaS), el software es un activo de tu empresa."
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-card p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors group">
                                <item.icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-gray-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ideal For Section */}
            <section className="py-20 px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-gradient-to-r from-blue-900/40 to-slate-900/40 border border-blue-500/30 rounded-3xl p-8 md:p-12 text-center">
                        <h2 className="text-3xl font-bold mb-6">¿Para quién es ideal?</h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-3xl mx-auto">
                            {[
                                "PyMEs que usan Excel para todo y necesitan orden.",
                                "Empresas con procesos únicos que los enlatados no resuelven.",
                                "Negocios que buscan automatizar facturación y stock.",
                                "Startups que necesitan un MVP robusto y escalable."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-lg text-gray-300">
                                    <CheckCircle className="w-6 h-6 text-secondary shrink-0 mt-1" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-12">
                            <p className="text-gray-400 mb-6">¿Te identificas con alguno de estos casos?</p>
                            <Link href="https://wa.me/5491159383308?text=Hola,%20quisiera%20asesoramiento%20sobre%20software%20a%20medida" target="_blank">
                                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                                    Hablar con un Especialista
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
