import { Metadata } from "next";
import Button from "@/components/Button";
import Link from "next/link";
import { Database, CheckCircle, Cloud, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Base de Datos & Cloud | Informática IAZ",
  description: "Gestión, migración y optimización de bases de datos. Soluciones en la nube con AWS, Google Cloud y Azure para empresas y pymes.",
  openGraph: {
    title: "Soluciones Cloud y Base de Datos | Informática IAZ",
    description: "Migrá tu infraestructura a la nube y optimizá tus bases de datos para escalar sin límites.",
  }
};

export default function BaseDeDatosCloud() {
  return (
    <div className="container mx-auto px-4 md:px-6 pt-32 pb-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Base de Datos <span className="text-primary">&amp; Cloud</span>
        </h1>
        <p className="text-xl text-gray-400 mb-12">
          Diseñamos, migramos y optimizamos tu infraestructura de datos y servicios en la nube para que tu negocio opere sin interrupciones, con velocidad y seguridad garantizada.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-card p-8 rounded-2xl border border-white/5">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Database className="text-secondary" /> Bases de Datos
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Diseño y modelado de esquemas eficientes.</li>
              <li className="flex gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Optimización de consultas y rendimiento.</li>
              <li className="flex gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Migraciones seguras entre motores (MySQL, PostgreSQL, etc.).</li>
              <li className="flex gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Backups automáticos y recuperación ante desastres.</li>
            </ul>
          </div>

          <div className="bg-card p-8 rounded-2xl border border-white/5">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Cloud className="text-accent" /> Infraestructura Cloud
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> Migración a AWS, Google Cloud o Azure.</li>
              <li className="flex gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> Configuración de servidores y contenedores (Docker).</li>
              <li className="flex gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> Alta disponibilidad y escalado automático.</li>
              <li className="flex gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> Monitoreo 24/7 de infraestructura crítica.</li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: <Database className="w-8 h-8 text-primary" />, title: "MySQL & PostgreSQL", desc: "Bases de datos relacionales de alto rendimiento." },
            { icon: <Cloud className="w-8 h-8 text-accent" />, title: "AWS / GCP / Azure", desc: "Las 3 grandes nubes, según tu necesidad." },
            { icon: <Lock className="w-8 h-8 text-secondary" />, title: "Seguridad Total", desc: "Cifrado, accesos controlados y auditoría." },
          ].map((item, i) => (
            <div key={i} className="bg-card/50 p-6 rounded-xl border border-white/5 text-center">
              <div className="flex justify-center mb-3">{item.icon}</div>
              <h4 className="text-white font-bold mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">¿Necesitás escalar tu infraestructura?</h2>
          <p className="text-gray-300 mb-6">Analizamos tu situación actual y te proponemos la solución más eficiente y económica para tu negocio.</p>
          <Link href="/contact">
            <Button size="lg" className="w-full sm:w-auto shadow-lg">Solicitar Asesoría Gratuita</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
