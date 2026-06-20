import { Hammer, Shirt, Coffee, Monitor, Smartphone } from "lucide-react";

const examples = [
  {
    title: "Ferretería",
    description: "Catálogo de productos, consultas por WhatsApp y secciones por rubro (herramientas, pinturas, electricidad).",
    icon: Hammer,
    accent: "from-amber-500 to-orange-600",
    accentText: "text-amber-400",
    accentBg: "bg-amber-500/20",
    brand: "Ferretería El Tornillo",
    tagline: "Todo para tu obra y hogar",
    cta: "Ver catálogo",
    nav: ["Inicio", "Productos", "Ofertas", "Contacto"],
    items: ["Herramientas", "Pinturas", "Electricidad", "Plomería"],
  },
  {
    title: "Indumentaria",
    description: "Tienda online con colecciones, filtros por talle y diseño visual orientado a conversión.",
    icon: Shirt,
    accent: "from-rose-500 to-fuchsia-600",
    accentText: "text-rose-400",
    accentBg: "bg-rose-500/20",
    brand: "Moda Urbana",
    tagline: "Nueva colección temporada",
    cta: "Comprar ahora",
    nav: ["Inicio", "Mujer", "Hombre", "Sale"],
    items: ["Remeras", "Pantalones", "Accesorios", "Calzado"],
  },
  {
    title: "Cafetería & Bar",
    description: "Carta digital, reservas online, horarios y galería para atraer clientes locales.",
    icon: Coffee,
    accent: "from-amber-700 to-yellow-900",
    accentText: "text-amber-300",
    accentBg: "bg-amber-700/20",
    brand: "Café & Bar La Esquina",
    tagline: "Café de especialidad y tragos artesanales",
    cta: "Reservar mesa",
    nav: ["Inicio", "Carta", "Eventos", "Reservas"],
    items: ["Cafés", "Brunch", "Cócteles", "Postres"],
  },
];

function BrowserMockup({
  brand,
  tagline,
  cta,
  nav,
  items,
  accent,
}: Pick<(typeof examples)[0], "brand" | "tagline" | "cta" | "nav" | "items" | "accent">) {
  return (
    <div className="rounded-xl border border-white/10 bg-[#0a0f1a] overflow-hidden shadow-2xl">
      <div className="flex items-center gap-1.5 px-3 py-2 bg-white/5 border-b border-white/10">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
        <div className="flex-1 mx-2 h-5 rounded-md bg-white/5 border border-white/10 flex items-center px-2">
          <span className="text-[8px] text-gray-500 truncate">www.{brand.toLowerCase().replace(/\s+/g, "")}.com</span>
        </div>
      </div>
      <div className="p-3 space-y-3">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[10px] font-bold text-white truncate">{brand}</span>
          <div className="hidden sm:flex gap-2">
            {nav.map((item) => (
              <span key={item} className="text-[7px] text-gray-500">{item}</span>
            ))}
          </div>
        </div>
        <div className={`rounded-lg bg-gradient-to-r ${accent} p-3`}>
          <p className="text-[9px] font-bold text-white leading-tight">{tagline}</p>
          <div className="mt-2 inline-block px-2 py-1 rounded bg-white/20 text-[7px] font-semibold text-white">
            {cta}
          </div>
        </div>
        <div className="grid grid-cols-4 gap-1.5">
          {items.map((item) => (
            <div key={item} className="rounded bg-white/5 border border-white/5 p-1.5 text-center">
              <div className="w-full aspect-square rounded bg-white/10 mb-1" />
              <span className="text-[6px] text-gray-400 leading-none block">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PhoneMockup({
  brand,
  tagline,
  cta,
  items,
  accent,
}: Pick<(typeof examples)[0], "brand" | "tagline" | "cta" | "items" | "accent">) {
  return (
    <div className="w-[88px] sm:w-[100px] shrink-0 rounded-[1.25rem] border-2 border-white/15 bg-[#0a0f1a] overflow-hidden shadow-2xl">
      <div className="h-4 bg-white/5 flex justify-center items-end pb-0.5">
        <div className="w-8 h-1 rounded-full bg-white/20" />
      </div>
      <div className="p-2 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[6px] font-bold text-white truncate max-w-[60px]">{brand.split(" ")[0]}</span>
          <div className="flex flex-col gap-0.5">
            <span className="w-3 h-0.5 bg-gray-500 rounded" />
            <span className="w-3 h-0.5 bg-gray-500 rounded" />
            <span className="w-3 h-0.5 bg-gray-500 rounded" />
          </div>
        </div>
        <div className={`rounded-md bg-gradient-to-b ${accent} p-2 min-h-[52px] flex flex-col justify-end`}>
          <p className="text-[5px] font-bold text-white leading-tight">{tagline}</p>
          <div className="mt-1 inline-block self-start px-1.5 py-0.5 rounded bg-white/20 text-[5px] text-white">
            {cta}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-1">
          {items.slice(0, 4).map((item) => (
            <div key={item} className="rounded bg-white/5 p-1">
              <div className="w-full aspect-square rounded bg-white/10 mb-0.5" />
              <span className="text-[4px] text-gray-500 block truncate">{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="h-3 flex justify-center items-start pt-0.5">
        <div className="w-6 h-1 rounded-full bg-white/20" />
      </div>
    </div>
  );
}

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

              <div className="flex flex-col lg:flex-row items-end gap-6 lg:gap-8">
                <div className="flex-1 w-full">
                  <div className="flex items-center gap-2 mb-3">
                    <Monitor className="w-4 h-4 text-gray-500" />
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Vista en computadora</span>
                  </div>
                  <BrowserMockup
                    brand={example.brand}
                    tagline={example.tagline}
                    cta={example.cta}
                    nav={example.nav}
                    items={example.items}
                    accent={example.accent}
                  />
                </div>

                <div className="flex flex-col items-center lg:items-start">
                  <div className="flex items-center gap-2 mb-3">
                    <Smartphone className="w-4 h-4 text-gray-500" />
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Vista en celular</span>
                  </div>
                  <PhoneMockup
                    brand={example.brand}
                    tagline={example.tagline}
                    cta={example.cta}
                    items={example.items}
                    accent={example.accent}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
