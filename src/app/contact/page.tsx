import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contacto | Informática IAZ",
    description: "Contáctanos para consultas, presupuestos o soporte técnico. Estamos para ayudarte.",
};

export default function ContactPage() {
    return (
        <section className="min-h-screen py-20 px-4">
            <div className="max-w-screen-xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        <span className="text-primary">Contáctanos</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Estamos listos para transformar tus ideas en realidad. Escríbenos y comencemos a trabajar juntos.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Info */}
                    <div className="space-y-8 bg-white/5 p-8 rounded-2xl border border-white/10">
                        <h2 className="text-2xl font-bold text-white mb-4">Información de Contacto</h2>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <Phone className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white">Teléfono / WhatsApp</h3>
                                <p className="text-gray-400">+54 1159383308</p>
                                <p className="text-sm text-gray-500 mt-1">Lunes a Viernes, 9:00 - 18:00 Hs</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <Mail className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white">Email</h3>
                                <p className="text-gray-400">ivanzavala231@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <MapPin className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white">Ubicación</h3>
                                <p className="text-gray-400">Buenos Aires, Argentina</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="w-full">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
}
