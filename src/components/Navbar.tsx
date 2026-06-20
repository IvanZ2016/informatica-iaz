"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Inicio", href: "/" },
        { name: "Servicios", href: "/services" },
        { name: "Casos Reales", href: "/casos-reales" },
        { name: "Demo", href: "/demo" },
        { name: "Nosotros", href: "/#about" }, // Keep About on home for now or create a page if needed
        { name: "Contacto", href: "/contact" },
    ];

    return (
        <nav className="fixed w-full z-50 top-0 start-0 border-b border-white/10 bg-background/80 backdrop-blur-md">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2">
                <Link href="/" className="flex items-center group">
                    <div className="relative flex items-center justify-start w-40 md:w-48 transition-transform">
                        <Image
                            src="/logo.png"
                            alt="Informática IAZ Logo"
                            width={400}
                            height={120}
                            className="object-contain w-full h-auto scale-[1.3] md:scale-[1.6] origin-left drop-shadow-xl group-hover:scale-[1.35] md:group-hover:scale-[1.65] transition-transform duration-300"
                            priority
                        />
                    </div>
                </Link>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-primary"
                    aria-controls="navbar-sticky"
                    aria-expanded={isOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
                <div
                    className={clsx(
                        "items-center justify-between w-full md:flex md:w-auto md:order-1 transition-all duration-300 ease-in-out",
                        isOpen ? "block" : "hidden"
                    )}
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-white/10 rounded-lg bg-white/5 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className="block py-2 px-3 text-gray-300 rounded hover:bg-white/10 md:hover:bg-transparent md:hover:text-primary md:p-0 transition-colors"
                                    onClick={() => setIsOpen(false)} // Close menu on click
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
