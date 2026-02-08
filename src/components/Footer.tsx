import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-black/40 border-t border-white/10 mt-auto">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <Image
                            src="/logo.png"
                            alt="Informática IAZ Logo"
                            width={40}
                            height={40}
                            className="object-contain"
                        />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                            Informática <span className="text-primary">IAZ</span>
                        </span>
                    </div>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-400 sm:mb-0">
                        <li>
                            <a href="/services" className="hover:text-primary me-4 md:me-6 transition-colors">Servicios</a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:text-primary transition-colors">Contacto</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-800 sm:mx-auto lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center">
                    © {new Date().getFullYear()} <span className="text-primary">Informática IAZ™</span>. Todos los derechos reservados.
                </span>
            </div>
        </footer>
    );
}
