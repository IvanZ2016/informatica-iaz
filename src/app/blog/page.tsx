import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog de Tecnología para Negocios | Informática IAZ",
  description: "Descubre artículos, guías y consejos sobre tecnología, desarrollo web, sistemas de gestión y soporte IT para hacer crecer tu empresa.",
};

const posts = [
  {
    title: "5 señales de que tu negocio necesita soporte técnico",
    description: "Conoce los síntomas claros de que tu infraestructura tecnológica está fallando y cómo un equipo de soporte IT puede ahorrarte miles de dólares.",
    slug: "senales-necesitas-soporte-tecnico",
    date: "15 Oct, 2024",
    category: "Soporte IT"
  },
  {
    title: "Cómo elegir un sistema de gestión (ERP) para tu Pyme",
    description: "Una guía paso a paso para evitar errores costosos al contratar o desarrollar un sistema de gestión a medida.",
    slug: "como-elegir-sistema-de-gestion",
    date: "22 Sep, 2024",
    category: "Software"
  },
  {
    title: "Ventajas de tener una página web profesional",
    description: "Por qué tener solo redes sociales no es suficiente. El impacto de una web rápida y optimizada en tus ventas.",
    slug: "ventajas-pagina-web-profesional",
    date: "05 Ago, 2024",
    category: "Desarrollo Web"
  }
];

export default function BlogIndex() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Blog de <span className="text-primary">Tecnología y Negocios</span>
        </h1>
        <p className="text-xl text-gray-400 mb-12">
          Insights, estrategias y consejos prácticos para dueños de negocios y tomadores de decisiones.
        </p>

        <div className="space-y-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <article className="p-8 rounded-2xl bg-card border border-white/5 group-hover:border-primary/50 transition-colors shadow-lg">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {post.description}
                </p>
                <div className="flex items-center text-primary font-medium text-sm">
                  Leer artículo <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
