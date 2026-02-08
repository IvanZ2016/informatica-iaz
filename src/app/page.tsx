import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ProjectCarousel from "@/components/ProjectCarousel";
import ContactForm from "@/components/ContactForm";
import Button from "@/components/Button";
import { Code, Globe, Monitor, Shield, CheckCircle, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const services = [
    {
      title: "Software a Medida",
      description: "Desarrollo de aplicaciones personalizadas para optimizar la gestión de tu negocio. Soluciones escalables y seguras.",
      icon: Code,
    },
    {
      title: "Desarrollo Web",
      description: "Diseño de páginas web modernas, corporativas y tiendas online. Presencia digital profesional con enfoque en SEO.",
      icon: Globe,
    },
    {
      title: "Soporte Técnico",
      description: "Mantenimiento preventivo y correctivo de PC y redes. Diagnóstico preciso y solución rápida de problemas.",
      icon: Monitor,
    },
  ];

  return (
    <div className="flex flex-col gap-20 pb-20">
      <Hero />

      {/* Services Section */}
      <section id="services" className="container mx-auto px-4 md:px-6 scroll-mt-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Nuestros <span className="text-primary">Servicios</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ofrecemos soluciones tecnológicas integrales adaptadas a las necesidades específicas de tu empresa o proyecto personal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>

      {/* Strategic Carousel Section */}
      <section id="projects" className="bg-white/5 py-20 border-y border-white/5">
        <ProjectCarousel />
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 bg-white/5 border-y border-white/5 scroll-mt-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Sobre <span className="text-secondary">Nosotros</span>
              </h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                En <span className="text-white font-bold">Informática IAZ</span>, nos dedicamos a brindar soluciones tecnológicas que impulsan el crecimiento.
                Con años de experiencia en el sector, combinamos conocimientos técnicos avanzados con un enfoque práctico para resolver problemas reales.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Atención personalizada y asesoramiento experto",
                  "Soluciones rápidas y efectivas",
                  "Compromiso con la calidad y la seguridad",
                  "Actualización constante en nuevas tecnologías"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-400">
                    <CheckCircle className="w-5 h-5 text-secondary mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="#contact">
                <Button variant="secondary">Conocer más</Button>
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 blur-3xl rounded-full" />
              <div className="relative z-10 p-8 rounded-2xl bg-card border border-white/10">
                <Shield className="w-16 h-16 text-secondary mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Confianza y Profesionalismo</h3>
                <p className="text-gray-400">
                  Tu seguridad y satisfacción son nuestra prioridad. Trabajamos con transparencia y profesionalismo en cada proyecto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 md:px-6 mb-20 scroll-mt-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Contáctanos
          </h2>
          <p className="text-gray-400">
            ¿Tienes un proyecto en mente o necesitas soporte? Escríbenos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <ContactForm />

          <div className="flex flex-col justify-center h-full space-y-8">
            <div className="p-6 rounded-2xl bg-card border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Información de Contacto</h3>
              <p className="text-gray-400 mb-6">
                Estamos disponibles para atender tus consultas a través de nuestros canales digitales.
              </p>

              <Link href="https://wa.me/YOUR_NUMBER" target="_blank" className="block">
                <Button size="lg" className="w-full gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-[0_0_15px_rgba(37,211,102,0.4)] hover:shadow-[0_0_25px_rgba(37,211,102,0.6)] border-transparent">
                  <MessageCircle className="w-6 h-6" />
                  Chat en WhatsApp
                </Button>
              </Link>
            </div>

            <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
              <h4 className="font-bold text-primary mb-2">Horarios de Atención</h4>
              <p className="text-gray-400">Lunes a Viernes: 9:00 - 18:00</p>
              <p className="text-gray-400">Sábados: 9:00 - 13:00</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
