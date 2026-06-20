import Image from "next/image";
import { Hammer, Shirt, Coffee } from "lucide-react";

const examples = [
  {
    title: "Ferretería",
    description: "Catálogo de productos, consultas por WhatsApp y secciones por rubro (herramientas, pinturas, electricidad).",
    icon: Hammer,
    accentText: "text-amber-400",
    accentBg: "bg-amber-500/20",
    image: "/images/web-ferreteria-mockup.png",
    alt: "Ejemplo de página web para ferretería en computadora y celular",
  },
  {
    title: "Indumentaria",
    description: "Tienda online con colecciones, filtros por talle y diseño visual orientado a conversión.",
    icon: Shirt,
    accentText: "text-rose-400",
    accentBg: "bg-rose-500/20",
    image: "/images/web-indumentaria-mockup.png",
    alt: "Ejemplo de página web para tienda de indumentaria en computadora y celular",
  },
  {
    title: "Cafetería & Bar",
    description: "Carta digital, reservas online, horarios y galería para atraer clientes locales.",
    icon: Coffee,
    accentText: "text-amber-300",
    accentBg: "bg-amber-700/20",
    image: "/images/web-cafeteria-mockup.png",
    alt: "Ejemplo de página web para cafetería y bar en computadora y celular",
  },
];

export default function WebExamplesShowcase() {
  return (
    <section className="mb-16">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
          Ejemplos de <span className="text-primary">Páginas Web</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Diseños responsivos adaptados a distintos rubros. Cada proyecto se ve perfecto en computadora y celular.
        </p>
      </div>

      <div className="space-y-10">
        {examples.map((example) => {
          const Icon = example.icon;
          return (
            <div
              key={example.title}
              className="bg-card/50 border border-white/5 rounded-2xl p-6 md:p-8 hover:border-white/10 transition-colors"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`p-3 rounded-xl ${example.accentBg}`}>
                  <Icon className={`w-6 h-6 ${example.accentText}`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{example.title}</h3>
                  <p className="text-gray-400 text-sm">{example.description}</p>
                </div>
              </div>

              <div className="relative w-full aspect-[16/10] rounded-xl border border-white/10 overflow-hidden bg-black/40 group">
                <Image
                  src={example.image}
                  alt={example.alt}
                  fill
                  className="object-contain group-hover:scale-[1.01] transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 896px"
                />
                <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/60 rounded-full text-xs text-gray-400 border border-white/10 backdrop-blur-md">
                  Computadora y celular
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
