import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
}

export default function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
    return (
        <div className="group relative p-8 rounded-2xl bg-card border border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 overflow-hidden">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex flex-col items-start">
                <div className="p-3 mb-6 rounded-lg bg-white/5 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors">{title}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{description}</p>
            </div>
        </div>
    );
}
