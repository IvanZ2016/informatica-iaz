import { Metadata } from "next";
import Button from "@/components/Button";
import Link from "next/link";
import { Globe, CheckCircle, Zap, Layout } from "lucide-react";

export const metadata: Metadata = {
  title: "Desarrollo Web Profesional | Páginas que Venden | Informática IAZ",
  description: "Diseño y desarrollo web a medida. Landing pages, e-commerce y sitios corporativos ultra rápidos, optimizados para SEO y conversión.",
  openGraph: {
    title: "Desarrollo de Páginas Web Premium",
    description: "Multiplica tus ventas online con un sitio web diseñado estratégicamente para tu negocio.",
  }
};

export default function DesarrolloWeb() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Desarrollo Web de Alta Conversión
        </h1>
        <p className="text-xl text-gray-400 mb-12">
          No creamos "folletos digitales". Desarrollamos herramientas de ventas 24/7 diseñadas para atraer tráfico orgánico y convertir visitantes en clientes reales.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-card p-8 rounded-2xl border border-white/5">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Layout className="text-secondary" /> El Problema Común
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-red-400" /> Sitios web lentos que espantan clientes.</li>
              <li className="flex gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-red-400" /> Diseños que no se adaptan a celulares.</li>
              <li className="flex gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-red-400" /> Falta de visibilidad en Google (mal SEO).</li>
              <li className="flex gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-red-400" /> Diseños bonitos pero que no generan consultas.</li>
            </ul>
          </div>
          
          <div className="bg-card p-8 rounded-2xl border border-white/5">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Zap className="text-accent" /> Nuestra Solución
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-accent" /> Velocidad de carga extrema (Next.js/React).</li>
              <li className="flex gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-accent" /> Arquitectura SEO nativa para posicionarte en Google.</li>
              <li className="flex gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-accent" /> Diseño UX/UI orientado a cerrar ventas (CRO).</li>
              <li className="flex gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-accent" /> Análisis de datos e integración con CRM.</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">¿Quieres modernizar tu presencia digital?</h2>
          <p className="text-gray-300 mb-6">Agenda una asesoría para evaluar el rediseño o creación de tu nuevo sitio web.</p>
          <Link href="/contact">
            <Button size="lg" className="w-full sm:w-auto shadow-lg">Pedir Presupuesto Web</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
