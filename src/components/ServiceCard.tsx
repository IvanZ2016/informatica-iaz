"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ServiceCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    href?: string;
}

export default function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
    const CardContent = (
        <motion.div 
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group relative p-8 rounded-2xl bg-card border border-white/5 hover:border-primary/50 transition-colors duration-300 overflow-hidden cursor-pointer shadow-lg h-full flex flex-col"
        >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex flex-col items-start h-full flex-grow">
                <div className="p-3 mb-6 rounded-lg bg-white/5 group-hover:bg-primary/20 transition-colors">
                    {icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors">{title}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors flex-grow">{description}</p>
                
                <div className="mt-6 flex items-center text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 mt-auto">
                    Saber más <span className="ml-2">→</span>
                </div>
            </div>
        </motion.div>
    );

    return href ? (
        <Link href={href} className="block h-full">
            {CardContent}
        </Link>
    ) : CardContent;
}
