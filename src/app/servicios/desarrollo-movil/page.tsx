import { Metadata } from "next";
import Button from "@/components/Button";
import Link from "next/link";
import { Smartphone, CheckCircle, Zap, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Desarrollo de Aplicaciones Móviles | Informática IAZ",
  description: "Desarrollamos apps nativas e híbridas para iOS y Android. Transforma tu negocio con una aplicación móvil a medida.",
  openGraph: {
    title: "Desarrollo Móvil Profesional | Informática IAZ",
    description: "Apps nativas e híbridas para iOS y Android con diseño premium y rendimiento superior.",
  }
};

export default function DesarrolloMovil() {
  return (
    <div className="container mx-auto px-4 md:px-6 pt-32 pb-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Aplicaciones Móviles a <span className="text-primary">Medida</span>
        </h1>
        <p className="text-xl text-gray-400 mb-12">
          Llevamos tu negocio al bolsillo de tus clientes. Desarrollamos apps nativas e híbridas para iOS y Android con foco en experiencia de usuario, rendimiento y escalabilidad.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-card p-8 rounded-2xl border border-white/5">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Smartphone className="text-secondary" /> ¿Qué podemos desarrollar?
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Apps de gestión interna para tu equipo.</li>
              <li className="flex gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Catálogos digitales y e-commerce móvil.</li>
              <li className="flex gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Apps de delivery, turnos y reservas.</li>
              <li className="flex gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Integración con sistemas existentes (ERP, CRM).</li>
            </ul>
          </div>

          <div className="bg-card p-8 rounded-2xl border border-white/5">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Zap className="text-accent" /> Ventajas de nuestra plataforma
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> Una sola base de código para iOS y Android.</li>
              <li className="flex gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> Diseño nativo y experiencia de usuario premium.</li>
              <li className="flex gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> Notificaciones push y funciones offline.</li>
              <li className="flex gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> Publicación en App Store y Google Play.</li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: <Smartphone className="w-8 h-8 text-primary" />, title: "iOS & Android", desc: "Compatibilidad total con ambas plataformas." },
            { icon: <Zap className="w-8 h-8 text-accent" />, title: "Alto Rendimiento", desc: "Apps rápidas, fluidas y optimizadas." },
            { icon: <Shield className="w-8 h-8 text-secondary" />, title: "Seguridad", desc: "Autenticación y cifrado de datos integrados." },
          ].map((item, i) => (
            <div key={i} className="bg-card/50 p-6 rounded-xl border border-white/5 text-center">
              <div className="flex justify-center mb-3">{item.icon}</div>
              <h4 className="text-white font-bold mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">¿Tenés una idea en mente?</h2>
          <p className="text-gray-300 mb-6">Contanos tu proyecto y te asesoramos sin compromiso sobre la mejor tecnología para llevarlo a cabo.</p>
          <Link href="/contact">
            <Button size="lg" className="w-full sm:w-auto shadow-lg">Solicitar Asesoría Gratuita</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
