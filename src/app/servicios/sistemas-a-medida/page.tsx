import { Metadata } from "next";
import Button from "@/components/Button";
import Link from "next/link";
import { Code, CheckCircle, Database, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Sistemas de Gestión a Medida para Pymes | Informática IAZ",
  description: "Desarrollo de software a medida, sistemas de gestión (ERP) y CRMs para automatizar tu negocio y escalar tus operaciones.",
  openGraph: {
    title: "Software y Sistemas de Gestión a Medida",
    description: "Deja de usar Excel para todo. Centraliza y automatiza tu empresa con nuestro software.",
  }
};

export default function SistemasAMedida() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Sistemas a Medida que <span className="text-primary">Multiplican Resultados</span>
        </h1>
        <p className="text-xl text-gray-400 mb-12">
          Desarrollamos el software exacto que tu empresa necesita. Sin licencias costosas por usuario, sin funciones innecesarias. 100% adaptado a tus flujos de trabajo.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-card p-8 rounded-2xl border border-white/5">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Database className="text-secondary" /> Tu Negocio Sin Software
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-red-400" /> Horas perdidas pasando datos entre planillas de Excel.</li>
              <li className="flex gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-red-400" /> Pérdida de control del inventario y ventas.</li>
              <li className="flex gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-red-400" /> Información descentralizada e insegura.</li>
              <li className="flex gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-red-400" /> Dificultad para tomar decisiones basadas en datos.</li>
            </ul>
          </div>
          
          <div className="bg-card p-8 rounded-2xl border border-white/5">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Code className="text-primary" /> Con Informática IAZ
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-primary" /> Todo tu negocio centralizado en un solo lugar.</li>
              <li className="flex gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-primary" /> Automatización de facturación, stock y reportes.</li>
              <li className="flex gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-primary" /> Acceso seguro desde cualquier dispositivo (Cloud).</li>
              <li className="flex gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-primary" /> Escalabilidad ilimitada: el software crece contigo.</li>
            </ul>
          </div>
        </div>

        <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 text-center">
          <Lock className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-4">¿Preparado para escalar?</h2>
          <p className="text-gray-300 mb-6">Contáctanos para entender los cuellos de botella de tu empresa y armar un plan de acción.</p>
          <Link href="/contact">
            <Button size="lg" className="w-full sm:w-auto shadow-lg">Solicitar Asesoría Gratuita</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
