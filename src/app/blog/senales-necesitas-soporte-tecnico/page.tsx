import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "5 señales de que tu negocio necesita soporte técnico | Blog",
  description: "Conoce los síntomas claros de que tu infraestructura tecnológica está fallando y cómo un equipo de soporte IT puede ahorrarte miles de dólares.",
};

export default function BlogPost() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" className="inline-flex items-center text-primary hover:underline mb-8 text-sm font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" /> Volver al blog
        </Link>
        
        <article className="prose prose-invert prose-primary max-w-none">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            5 señales de que tu negocio necesita soporte técnico urgente
          </h1>
          
          <div className="flex items-center gap-4 text-gray-400 text-sm mb-12 border-b border-white/10 pb-8">
            <span>15 Oct, 2024</span>
            <span>•</span>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full uppercase tracking-wider text-xs font-semibold">Soporte IT</span>
          </div>

          <div className="text-gray-300 text-lg leading-relaxed space-y-6">
            <p>
              Muchos dueños de negocios ven el <strong>soporte técnico</strong> como un gasto, hasta que ocurre una catástrofe. La pérdida de datos, las redes lentas y los virus no solo son molestias; son fugas silenciosas de dinero y productividad.
            </p>
            <p>
              Aquí te presentamos 5 señales inequívocas de que es momento de externalizar tu departamento de IT.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">1. Internet y red interna excesivamente lentos</h2>
            <p>
              Si tus empleados tardan minutos en abrir un archivo compartido o si la conexión a internet se cae a diario, estás perdiendo horas de trabajo cada semana. Esto suele ser un problema de configuración de red o de hardware obsoleto.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">2. Ausencia de un sistema de Backups automatizado</h2>
            <p>
              ¿Qué pasaría si hoy un ransomware cifra todas tus computadoras? Si la respuesta es "perderíamos todo", estás en riesgo crítico. Un soporte técnico profesional garantiza políticas de Disaster Recovery y backups en la nube.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">3. Empleados asumiendo el rol de "técnicos"</h2>
            <p>
              ¿Tu mejor vendedor está tratando de arreglar la impresora o configurar el router? Cada minuto que tu equipo no hace su trabajo real, tu empresa pierde dinero.
            </p>
            
            <hr className="border-white/10 my-12" />

            <div className="bg-primary/10 border border-primary/20 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-2">¿Identificas alguna de estas señales en tu empresa?</h3>
              <p className="mb-4">En Informática IAZ ofrecemos mantenimiento preventivo y soporte técnico para pymes. Déjanos evaluar tu infraestructura sin costo.</p>
              <Link href="/contact" className="text-primary font-bold hover:underline">
                Contactar a un asesor ahora →
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
