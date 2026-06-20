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

                <div className="mt-20">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl font-bold text-white mb-4">Nuestro Stack Tecnológico</h3>
                        <p className="text-gray-400">Herramientas y plataformas de primer nivel con las que construimos y escalamos tu negocio.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        {/* Columna 1 */}
                        <div className="bg-card/30 p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors">
                            <h4 className="text-primary font-bold text-lg mb-6 flex items-center gap-2">
                                <span className="w-8 h-px bg-primary/50"></span>
                                Soporte e Infraestructura
                            </h4>
                            <ul className="space-y-3">
                                {["Windows Server", "Linux", "Microsoft 365", "Google Workspace", "Proxmox VE", "VMware", "MikroTik", "Ubiquiti UniFi", "pfSense", "Docker"].map((tech) => (
                                    <li key={tech} className="text-gray-300 flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-secondary/50"></div>
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Columna 2 */}
                        <div className="bg-card/30 p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors">
                            <h4 className="text-primary font-bold text-lg mb-6 flex items-center gap-2">
                                <span className="w-8 h-px bg-primary/50"></span>
                                Desarrollo Web
                            </h4>
                            <ul className="space-y-3">
                                {["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Node.js", "PHP", "MySQL", "PostgreSQL", "Vercel"].map((tech) => (
                                    <li key={tech} className="text-gray-300 flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-secondary/50"></div>
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Columna 3 */}
                        <div className="bg-card/30 p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors">
                            <h4 className="text-primary font-bold text-lg mb-6 flex items-center gap-2">
                                <span className="w-8 h-px bg-primary/50"></span>
                                Sistemas y Automatización
                            </h4>
                            <ul className="space-y-3">
                                {["Laravel", "PHP", "Python", "MySQL", "PostgreSQL", "Docker", "Git", "GitHub", "REST API", "Google Analytics", "Meta Pixel", "WhatsApp Business"].map((tech) => (
                                    <li key={tech} className="text-gray-300 flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-secondary/50"></div>
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
