import React from "react";
import Button from "@/components/Button";
import Link from "next/link";
import { ArrowRight, Globe, Smartphone, Zap, Search, Layout, MousePointerClick } from "lucide-react";
import Image from "next/image";

export default function DesarrolloWebPage() {
    return (
        <main className="min-h-screen bg-background text-foreground pt-24 pb-12">

            {/* Hero Section */}
            <section className="relative px-4 mb-20">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/2 animate-slide-in-left">
                        <div className="inline-block px-4 py-2 bg-pink-500/10 border border-pink-500/20 rounded-full text-pink-400 text-sm font-semibold mb-6">
                            Presencia Digital
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-glow">
                            Desarrollo <span className="text-pink-500">Web</span>
                        </h1>
                        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
                            No solo hacemos sitios bonitos. Creamos experiencias digitales de alto impacto que posicionan tu marca
                            y convierten visitantes en clientes fieles.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="https://wa.me/5491159383308?text=Hola,%20quisiera%20cotizar%20una%20web" target="_blank">
                                <Button size="lg" className="w-full sm:w-auto gap-2 text-lg bg-pink-600 hover:bg-pink-700 shadow-pink-500/50">
                                    Cotizar mi Web
                                    <ArrowRight className="w-5 h-5" />
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl animate-fade-in group">
                        <div className="absolute inset-0 bg-gradient-to-bl from-pink-600/20 to-purple-500/20 z-10" />
                        <Image
                            src="/images/desarrolo web.png"
                            alt="Desarrollo Web Moderno"
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
                        Potencia tu <span className="text-pink-500">Imagen Online</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Smartphone,
                                title: "100% Responsive",
                                desc: "Tu sitio se verá perfecto en celulares, tablets y computadoras de escritorio."
                            },
                            {
                                icon: Search,
                                title: "Optimización SEO",
                                desc: "Estructura optimizada para que Google indexe tu sitio y te encuentren más rápido."
                            },
                            {
                                icon: Zap,
                                title: "Ultra Rápido",
                                desc: "Optimizamos imágenes y código para tiempos de carga mínimos. Nadie quiere esperar."
                            },
                            {
                                icon: Layout,
                                title: "UX / UI Moderno",
                                desc: "Diseños intuitivos que guían al usuario hacia la compra o contacto."
                            },
                            {
                                icon: Globe,
                                title: "Dominio Propio",
                                desc: "Te ayudamos a configurar tu .com o .com.ar para dar profesionalismo."
                            },
                            {
                                icon: MousePointerClick,
                                title: "Autoadministrable",
                                desc: "Opcional: Paneles sencillos para que cargues tus productos o novedades."
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-card p-8 rounded-2xl border border-white/5 hover:border-pink-500/50 transition-colors group">
                                <item.icon className="w-12 h-12 text-pink-500 mb-6 group-hover:scale-110 transition-transform" />
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
                    <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 border border-pink-500/30 rounded-3xl p-8 md:p-12 text-center">
                        <h2 className="text-3xl font-bold mb-6">¿Para quién es ideal?</h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-3xl mx-auto">
                            {[
                                "Emprendedores que quieren lanzar su marca.",
                                "Comercios que buscan vender online (E-commerce).",
                                "Empresas que necesitan renovar su imagen institucional.",
                                "Profesionales (abogados, contadores) que buscan presencia."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-lg text-gray-300">
                                    <Zap className="w-6 h-6 text-pink-400 shrink-0 mt-1" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-12">
                            <p className="text-gray-400 mb-6">¿Listo para destacar en internet?</p>
                            <Link href="https://wa.me/5491159383308?text=Hola,%20me%20gustaría%20tener%20mi%20propia%20web" target="_blank">
                                <Button variant="primary" size="lg" className="w-full sm:w-auto bg-pink-600 hover:bg-pink-700 shadow-pink-500/50 border-transparent">
                                    Empezar Proyecto
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
