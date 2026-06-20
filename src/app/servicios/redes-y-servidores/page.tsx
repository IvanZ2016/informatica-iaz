import { Metadata } from "next";
import Button from "@/components/Button";
import Link from "next/link";
import { Server, CheckCircle, Wifi, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Redes, Servidores y Ciberseguridad | Informática IAZ",
  description: "Instalación y configuración de redes, servidores físicos y en la nube. Protege tu información con expertos en ciberseguridad.",
  openGraph: {
    title: "Infraestructura IT y Redes Corporativas",
    description: "Una red lenta te hace perder dinero. Optimizamos y aseguramos tu infraestructura técnica.",
  }
};

export default function RedesYServidores() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Infraestructura de Redes y Servidores
        </h1>
        <p className="text-xl text-gray-400 mb-12">
          Diseñamos, implementamos y mantenemos la columna vertebral tecnológica de tu empresa. Conexiones ultra rápidas, servidores estables y seguridad perimetral impenetrable.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-card p-8 rounded-2xl border border-white/5">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Wifi className="text-secondary" /> Nuestros Servicios
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-secondary" /> Diseño de cableado estructurado e inalámbrico.</li>
              <li className="flex gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-secondary" /> Configuración de servidores Windows y Linux.</li>
              <li className="flex gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-secondary" /> Migración de servidores locales a la Nube (Cloud).</li>
              <li className="flex gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-secondary" /> Optimización de velocidad y ancho de banda en oficinas.</li>
            </ul>
          </div>
          
          <div className="bg-card p-8 rounded-2xl border border-white/5">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <ShieldCheck className="text-primary" /> Ciberseguridad
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-primary" /> Implementación de Firewalls físicos y lógicos.</li>
              <li className="flex gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-primary" /> Sistemas de Backup automático y redundancia (Disaster Recovery).</li>
              <li className="flex gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-primary" /> Protección contra ataques de Ransomware y Malware.</li>
              <li className="flex gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-primary" /> VPNs seguras para trabajo remoto (Home Office).</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-secondary/20 to-primary/20 border border-secondary/30 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Asegura hoy el activo más valioso: tu información</h2>
          <p className="text-gray-300 mb-6">Contacta a nuestros especialistas para una auditoría de red y seguridad gratuita.</p>
          <Link href="/contact">
            <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-secondary/20 bg-secondary hover:bg-secondary/80 text-white">Solicitar Auditoría de Red</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
