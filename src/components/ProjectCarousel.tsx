"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Monitor, Globe, Server, ArrowRight } from "lucide-react";
import Button from "@/components/Button";
import Link from "next/link";
import Image from "next/image";

const slides = [
    {
        id: 1,
        title: "Software a Medida",
        description: "Impulsa tu negocio con soluciones personalizadas. Desde CRMs hasta sistemas de gestión integral.",
        benefits: ["Automatización de procesos", "Reportes en tiempo real", "Escalabilidad total"],
        icon: Monitor,
        image: "/images/software a medida.jpg",
        color: "from-blue-500/20 to-cyan-500/20",
        borderColor: "border-cyan-500/50",
        buttonLink: "https://wa.me/5491159383308?text=Hola,%20me%20interesa%20un%20software%20a%20medida",
    },
    {
        id: 2,
        title: "Desarrollo de Páginas Web",
        description: "Sitios web modernos que convierten visitantes en clientes. Diseño responsivo y optimizado para SEO.",
        benefits: ["Diseño 100% Responsivo", "Optimización SEO", "Velocidad de carga"],
        icon: Globe,
        image: "/images/desarrolo web.png",
        color: "from-purple-500/20 to-pink-500/20",
        borderColor: "border-pink-500/50",
        buttonLink: "https://wa.me/5491159383308?text=Hola,%20quisiera%20una%20página%20web",
    },
    {
        id: 3,
        title: "Soporte Técnico IT",
        description: "Mantén tu infraestructura operativa. Diagnóstico, reparación y mantenimiento de equipos.",
        benefits: ["Soporte Remoto y On-site", "Mantenimiento Preventivo", "Seguridad de Datos"],
        icon: Server,
        image: "/images/soporte it.png",
        color: "from-green-500/20 to-emerald-500/20",
        borderColor: "border-green-500/50",
        buttonLink: "https://wa.me/5491159383308?text=Hola,%20necesito%20soporte%20técnico",
    },
];

export default function ProjectCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on("select", onSelect);
    }, [emblaApi, onSelect]);

    return (
        <div className="relative max-w-7xl mx-auto px-4 py-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    Nuestros <span className="text-secondary">Proyectos</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Explora ejemplos de cómo transformamos la visión de nuestros clientes en realidad tecnológica.
                </p>
            </div>

            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {slides.map((slide) => (
                        <div className="flex-[0_0_100%] min-w-0 md:flex-[0_0_80%] lg:flex-[0_0_60%] px-4" key={slide.id}>
                            <div className={`relative h-full bg-card/50 backdrop-blur-sm border ${slide.borderColor} rounded-3xl overflow-hidden p-8 md:p-12 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] group`}>

                                {/* Background Glow */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${slide.color} opacity-20 group-hover:opacity-30 transition-opacity`} />

                                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                                    {/* Image Container */}
                                    <div className="w-full md:w-1/2 flex items-center justify-center aspect-video bg-black/40 rounded-xl border border-white/10 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                                        <div className={`absolute inset-0 bg-gradient-to-tr ${slide.color} opacity-10`} />

                                        <Image
                                            src={slide.image}
                                            alt={slide.title}
                                            fill
                                            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                        />

                                        {/* Gradient Overlay for text readability if needed */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                                        <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/60 rounded-full text-xs text-gray-400 border border-white/10 backdrop-blur-md z-10">
                                            Ejemplo Real
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="w-full md:w-1/2 flex flex-col gap-4 text-left">
                                        <h3 className="text-3xl font-bold text-white mb-2">{slide.title}</h3>
                                        <p className="text-gray-300 leading-relaxed mb-4">{slide.description}</p>

                                        <ul className="space-y-2 mb-6">
                                            {slide.benefits.map((benefit, i) => (
                                                <li key={i} className="flex items-center text-gray-400 text-sm">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-2" />
                                                    {benefit}
                                                </li>
                                            ))}
                                        </ul>

                                        <Link href={slide.buttonLink} target="_blank">
                                            <Button className="w-full md:w-auto gap-2 group/btn">
                                                Consultar ahora
                                                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
                <button
                    className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all disabled:opacity-50"
                    onClick={scrollPrev}
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all disabled:opacity-50"
                    onClick={scrollNext}
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === selectedIndex ? "bg-secondary w-8" : "bg-gray-600 hover:bg-gray-500"
                            }`}
                        onClick={() => emblaApi?.scrollTo(index)}
                    />
                ))}
            </div>
        </div >
    );
}
