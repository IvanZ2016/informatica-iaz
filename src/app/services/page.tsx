import ServiceCard from "@/components/ServiceCard";
import { Code, Layout, Shield, Smartphone, Server, Database } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Servicios | Informática IAZ",
    description: "Explora nuestros servicios de desarrollo de software, diseño web y soporte técnico especializado.",
};

export default function ServicesPage() {
    const services = [
        {
            title: "Desarrollo de Software",
            description: "Creación de aplicaciones a medida para optimizar los procesos de tu negocio. Software de gestión, CRMs y ERPs personalizados.",
            icon: Code,
        },
        {
            title: "Diseño Web Profesional",
            description: "Sitios web modernos, responsivos y optimizados para SEO. Desde landing pages hasta e-commerce completos.",
            icon: Layout,
        },
        {
            title: "Soporte Técnico IT",
            description: "Mantenimiento preventivo y correctivo de equipos informáticos. Redes, hardware y software.",
            icon: Shield,
        },
        {
            title: "Desarrollo Móvil",
            description: "Aplicaciones nativas e híbridas para iOS y Android. Lleva tu negocio al bolsillo de tus clientes.",
            icon: Smartphone,
        },
        {
            title: "Infraestructura & Redes",
            description: "Diseño e implementación de redes corporativas. Servidores, cableado estructurado y seguridad perimetral.",
            icon: Server,
        },
        {
            title: "Base de Datos & Cloud",
            description: "Gestión, migración y optimización de bases de datos. Soluciones en la nube (AWS, Google Cloud, Azure).",
            icon: Database,
        },
    ];

    return (
        <section className="min-h-screen py-20 px-4">
            <div className="max-w-screen-xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Nuestros <span className="text-primary">Servicios</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Soluciones tecnológicas integrales diseñadas para impulsar el crecimiento y la eficiencia de tu empresa.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
}
