import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ProjectCarousel from "@/components/ProjectCarousel";
import ContactForm from "@/components/ContactForm";
import Button from "@/components/Button";
import TrustSection from "@/components/TrustSection";
import { Code, Globe, Monitor, Shield, CheckCircle, MessageCircle, TrendingUp, Zap, Clock } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const services = [
    {
      title: "Sistemas a Medida",
      description: "Automatiza procesos repetitivos y obtén control total de tu negocio con software diseñado específicamente para tus necesidades.",
      icon: <Code className="w-8 h-8 text-primary group-hover:text-white transition-colors" />,
      href: "/servicios/sistemas-a-medida"
    },
    {
      title: "Desarrollo Web Premium",
      description: "Páginas web ultrarrápidas y optimizadas para SEO que convierten a tus visitantes ocasionales en clientes leales.",
      icon: <Globe className="w-8 h-8 text-primary group-hover:text-white transition-colors" />,
      href: "/servicios/desarrollo-web"
    },
    {
      title: "Soporte Técnico IT",
      description: "Prevén caídas del sistema y pérdida de datos. Mantenimiento proactivo para que tu equipo nunca deje de trabajar.",
      icon: <Monitor className="w-8 h-8 text-primary group-hover:text-white transition-colors" />,
      href: "/servicios/soporte-tecnico"
    },
  ];

  return (
    <div className="flex flex-col gap-0 pb-20">
      <Hero />
      <TrustSection />

      {/* Services Section */}
      <section id="services" className="container mx-auto px-4 md:px-6 py-24 scroll-mt-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Soluciones que <span className="text-primary">Escalan tu Negocio</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            No vendemos horas de programación; entregamos resultados medibles. Conoce cómo nuestras soluciones tecnológicas pueden aumentar tu rentabilidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>

      {/* Strategic Carousel Section */}
      <section id="projects" className="bg-white/5 py-24 border-y border-white/5">
        <ProjectCarousel />
      </section>

      {/* About / PAS Section */}
      <section id="about" className="relative py-24 bg-background scroll-mt-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Deja de perder dinero por <span className="text-secondary">fallas tecnológicas</span>
              </h2>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  <span className="text-white font-semibold">El problema:</span> Procesos manuales, sistemas lentos o caídas inesperadas de red no solo causan dolores de cabeza, sino que te cuestan clientes y ventas reales todos los días.
                </p>
                <p>
                  <span className="text-white font-semibold">La solución:</span> En <strong>Informática IAZ</strong> actuamos como tu departamento de tecnología externo. Evaluamos tus cuellos de botella y desarrollamos la infraestructura o el software necesario para que tu negocio opere en piloto automático.
                </p>
              </div>
              <ul className="space-y-4 my-8">
                {[
                  "Ahorro de hasta 20 horas semanales en tareas manuales.",
                  "Sitios web optimizados que captan leads 24/7.",
                  "Seguridad de datos garantizada y soporte inmediato.",
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-400 font-medium">
                    <CheckCircle className="w-5 h-5 text-secondary mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="#contact">
                <Button variant="secondary" className="shadow-lg shadow-secondary/20 group">
                  Agenda una Auditoría Gratuita
                </Button>
              </Link>
            </div>
            <div className="relative mt-8 md:mt-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 blur-3xl rounded-full" />
              <div className="relative z-10 p-8 rounded-2xl bg-card border border-white/10 shadow-2xl flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Mayor Rentabilidad</h3>
                    <p className="text-sm text-gray-400">Automatiza procesos y reduce costos operativos drásticamente.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/20 rounded-lg">
                    <Shield className="w-8 h-8 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Seguridad Total</h3>
                    <p className="text-sm text-gray-400">Tus datos y los de tus clientes protegidos bajo estándares internacionales.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/20 rounded-lg">
                    <Zap className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Implementación Rápida</h3>
                    <p className="text-sm text-gray-400">Desarrollo ágil para que veas el retorno de tu inversión en semanas, no meses.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 md:px-6 mt-12 mb-20 scroll-mt-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            ¿Listo para dar el <span className="text-primary">siguiente paso</span>?
          </h2>
          <p className="text-gray-400 text-lg">
            Completa el formulario o agenda una llamada rápida. Evaluaremos tu situación sin compromiso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <ContactForm />

          <div className="flex flex-col justify-center h-full space-y-8">
            <div className="p-8 rounded-2xl bg-card border border-white/10 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-4">Soporte Inmediato</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Entendemos que el tiempo es dinero. Nuestro equipo está preparado para responder a tus consultas técnicas o comerciales en tiempo récord.
              </p>

              <Link href="https://wa.me/5491159383308?text=Hola,%20me%20gustaría%20recibir%20asesoría%20sobre%20sus%20servicios" target="_blank" className="block">
                <Button size="lg" className="w-full gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-[0_0_15px_rgba(37,211,102,0.4)] hover:shadow-[0_0_25px_rgba(37,211,102,0.6)] border-transparent">
                  <MessageCircle className="w-6 h-6" />
                  Hablar con un Experto por WhatsApp
                </Button>
              </Link>
            </div>

            <div className="p-8 rounded-2xl bg-primary/5 border border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-primary mb-2 text-lg">Horarios de Atención</h4>
                <p className="text-gray-400">Lunes a Viernes: 9:00 - 18:00</p>
                <p className="text-gray-400">Sábados: 9:00 - 13:00</p>
              </div>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Clock className="w-8 h-8 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
