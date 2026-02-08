"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function WhatsAppButton() {
    const [isVisible, setIsVisible] = useState(false);

    // Show button after scrolling down a bit
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const phoneNumber = "5491159383308"; // Replace with real number
    const message = encodeURIComponent("Hola, quiero consultar por servicios informáticos");

    return (
        <Link
            href={`https://wa.me/${phoneNumber}?text=${message}`}
            target="_blank"
            className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300 group ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                }`}
            aria-label="Contactar por WhatsApp"
        >
            <MessageCircle className="w-8 h-8 text-white fill-white" />
            <span className="absolute right-full mr-4 bg-white text-black px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
                ¡Contáctanos!
            </span>
        </Link>
    );
}
