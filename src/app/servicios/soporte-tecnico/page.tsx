import { Metadata } from "next";
import Button from "@/components/Button";
import Link from "next/link";
import { Monitor, CheckCircle, Shield, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Soporte Técnico IT para Empresas en [CIUDAD]",
  description: "Servicio de soporte técnico proactivo, mantenimiento de equipos y redes para empresas y pymes en [CIUDAD]. Resolvemos emergencias en menos de 24 horas.",
  openGraph: {
    title: "Soporte Técnico Especializado | Informática IAZ",
    description: "Soporte preventivo y correctivo para que tu empresa nunca deje de operar.",
  }
};

export default function SoporteTecnico() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Soporte Técnico IT en <span className="text-primary">[CIUDAD]</span>
        </h1>
        <p className="text-xl text-gray-400 mb-12">
          Garantizamos la continuidad operativa de tu negocio mediante mantenimiento preventivo, corrección rápida de fallos y seguridad de datos avanzada.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-card p-8 rounded-2xl border border-white/5">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Monitor className="text-secondary" /> Problemas que Resolvemos
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-red-400" /> Caídas inesperadas de red o servidores.</li>
              <li className="flex gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-red-400" /> Lentitud en equipos de trabajo que reducen productividad.</li>
              <li className="flex gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-red-400" /> Pérdida de datos por falta de respaldos (backups).</li>
              <li className="flex gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-red-400" /> Virus, ransomware y brechas de seguridad.</li>
            </ul>
          </div>
          
          <div className="bg-card p-8 rounded-2xl border border-white/5">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Shield className="text-primary" /> Beneficios
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-primary" /> Diagnóstico y resolución remota inmediata.</li>
              <li className="flex gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-primary" /> Soporte in-situ rápido en [CIUDAD].</li>
              <li className="flex gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-primary" /> Mantenimiento preventivo programado.</li>
              <li className="flex gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-primary" /> Monitoreo 24/7 de tus servidores críticos.</li>
            </ul>
          </div>
        </div>

        <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 text-center">
          <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-4">¿Emergencia Técnica?</h2>
          <p className="text-gray-300 mb-6">Nuestro equipo está listo para restaurar tu operatividad ahora mismo.</p>
          <Link href="https://wa.me/5491159383308" target="_blank">
            <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-primary/20">Solicitar Asistencia Urgente</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
