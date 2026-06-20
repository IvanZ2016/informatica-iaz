"use client";

import { motion } from "framer-motion";
import { CheckCircle, Clock, Users, Building } from "lucide-react";

export default function TrustSection() {
    const stats = [
        { id: 1, label: "Proyectos Exitosos", value: "+50", icon: CheckCircle },
        { id: 2, label: "Equipos Asistidos", value: "+100", icon: Users },
        { id: 3, label: "Tiempo de Respuesta", value: "< 24hs", icon: Clock },
        { id: 4, label: "Clientes Activos", value: "30+", icon: Building },
    ];

    return (
        <section className="py-16 bg-white/5 border-y border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-10">
                    <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                        Prueba Social
                    </p>
                    <h2 className="text-2xl md:text-4xl font-bold text-white">
                        Resultados que hablan por nosotros
                    </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div 
                                key={stat.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex flex-col items-center p-6 bg-card/50 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors shadow-lg"
                            >
                                <Icon className="w-8 h-8 text-primary mb-4" />
                                <span className="text-3xl font-bold text-white mb-2 text-glow">{stat.value}</span>
                                <span className="text-sm text-gray-400 text-center">{stat.label}</span>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-400 mb-6 font-medium">Tecnologías con las que escalamos negocios:</p>
                    <div className="flex flex-wrap justify-center gap-8 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        <span className="text-xl font-bold font-mono text-white">React.js</span>
                        <span className="text-xl font-bold font-mono text-white">Next.js</span>
                        <span className="text-xl font-bold font-mono text-white">Tailwind</span>
                        <span className="text-xl font-bold font-mono text-white">Node.js</span>
                        <span className="text-xl font-bold font-mono text-white">TypeScript</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
