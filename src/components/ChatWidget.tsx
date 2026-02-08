"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Minimize2, Bot } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "./Button";

interface Message {
    id: string;
    text: string;
    sender: "user" | "bot";
    timestamp: Date;
}

const INITIAL_MESSAGE: Message = {
    id: "welcome",
    text: "¡Hola! Soy el asistente virtual de Informática IAZ. ¿En qué puedo ayudarte hoy?",
    sender: "bot",
    timestamp: new Date(),
};

const KEYWORD_RESPONSES: Record<string, string> = {
    "software": "Desarrollamos software a medida para gestionar tu negocio. Incluye sistemas de stock, facturación, CRMs y más. ¿Te gustaría agendar una demo?",
    "medida": "El software a medida se adapta 100% a tus procesos, a diferencia de los enlatados. Es escalable y seguro.",
    "web": "Hacemos diseño web profesional: sitios corporativos, landing pages y e-commerce. Todo optimizado para SEO y móviles.",
    "pagina": "Hacemos diseño web profesional: sitios corporativos, landing pages y e-commerce. Todo optimizado para SEO y móviles.",
    "páginas": "Hacemos diseño web profesional: sitios corporativos, landing pages y e-commerce. Todo optimizado para SEO y móviles.",
    "soporte": "Brindamos soporte técnico para PCs, notebooks y redes. Realizamos mantenimiento preventivo y reparaciones.",
    "técnico": "Brindamos soporte técnico para PCs, notebooks y redes. Realizamos mantenimiento preventivo y reparaciones.",
    "precio": "Los precios varían según el alcance del proyecto. Para un presupuesto exacto, por favor contáctanos por WhatsApp detallando tu necesidad.",
    "costo": "Los precios varían según el alcance del proyecto. Para un presupuesto exacto, por favor contáctanos por WhatsApp detallando tu necesidad.",
    "presupuesto": "Los precios varían según el alcance del proyecto. Para un presupuesto exacto, por favor contáctanos por WhatsApp detallando tu necesidad.",
    "contacto": "Puedes contactarnos directamente por WhatsApp usando el botón verde de la web, o al email contacto@informaticaiaz.com",
    "hola": "¡Hola! ¿Cómo estás? ¿En qué servicio estás interesado: Software, Web o Soporte?",
    "buenos": "¡Hola! ¿Cómo estás? ¿En qué servicio estás interesado: Software, Web o Soporte?",
    "gracias": "¡De nada! Si tienes más dudas, aquí estoy. También puedes hablar con un humano por WhatsApp.",
};

const DEFAULT_RESPONSE = "Entiendo. Para brindarte una mejor atención sobre ese tema, te sugiero contactar a un especialista humano por WhatsApp.";

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping, isOpen]);

    const handleSendMessage = async () => {
        if (!inputValue.trim()) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            text: inputValue,
            sender: "user",
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMsg]);
        setInputValue("");
        setIsTyping(true);

        // Simulate network delay and "thinking"
        setTimeout(() => {
            const lowerInput = userMsg.text.toLowerCase();
            let responseText = DEFAULT_RESPONSE;

            // Simple keyword matching
            const foundKeyword = Object.keys(KEYWORD_RESPONSES).find(key => lowerInput.includes(key));
            if (foundKeyword) {
                responseText = KEYWORD_RESPONSES[foundKeyword];
            }

            const botMsg: Message = {
                id: (Date.now() + 1).toString(),
                text: responseText,
                sender: "bot",
                timestamp: new Date(),
            };

            setMessages((prev) => [...prev, botMsg]);
            setIsTyping(false);
        }, 1000 + Math.random() * 1000); // 1-2s delay
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            handleSendMessage();
        }
    };

    return (
        <>
            <AnimatePresence>
                {/* Chat Trigger Button */}
                {!isOpen && (
                    <motion.button
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        onClick={() => { setIsOpen(true); setIsMinimized(false); }}
                        className="fixed bottom-6 right-24 z-50 p-4 bg-primary text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors group"
                        aria-label="Chatbot"
                    >
                        <Bot className="w-6 h-6" />
                        <span className="absolute right-full mr-4 bg-white text-black px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none top-1/2 -translate-y-1/2">
                            Asistente Virtual
                        </span>
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            height: isMinimized ? "auto" : "500px"
                        }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        className={`fixed bottom-24 right-6 w-80 md:w-96 bg-card border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50 ${isMinimized ? "h-auto" : "h-[500px]"}`}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 bg-primary/10 border-b border-white/5">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-primary/20 rounded-full">
                                    <Bot className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-sm">Asistente IAZ</h3>
                                    <span className="flex items-center text-xs text-green-400">
                                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1 animate-pulse" />
                                        En línea
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setIsMinimized(!isMinimized)}
                                    className="p-1 hover:bg-white/10 rounded text-gray-400 hover:text-white transition-colors"
                                >
                                    <Minimize2 className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-1 hover:bg-white/10 rounded text-gray-400 hover:text-white transition-colors"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Messages Area - Only visible if not minimized */}
                        {!isMinimized && (
                            <>
                                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#0a0f1e] scrollbar-thin scrollbar-thumb-white/10">
                                    {messages.map((msg) => (
                                        <div
                                            key={msg.id}
                                            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                                        >
                                            <div
                                                className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${msg.sender === "user"
                                                        ? "bg-primary text-white rounded-tr-sm"
                                                        : "bg-white/10 text-gray-200 rounded-tl-sm border border-white/5"
                                                    }`}
                                            >
                                                {msg.text}
                                            </div>
                                        </div>
                                    ))}
                                    {isTyping && (
                                        <div className="flex justify-start">
                                            <div className="bg-white/10 p-3 rounded-2xl rounded-tl-sm border border-white/5 flex gap-1 items-center">
                                                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                                                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                                                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                                            </div>
                                        </div>
                                    )}
                                    <div ref={messagesEndRef} />
                                </div>

                                {/* Input Area */}
                                <div className="p-3 border-t border-white/10 bg-card">
                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            value={inputValue}
                                            onChange={(e) => setInputValue(e.target.value)}
                                            onKeyDown={handleKeyDown}
                                            placeholder="Escribe tu consulta..."
                                            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-primary/50 placeholder:text-gray-500"
                                        />
                                        <button
                                            onClick={handleSendMessage}
                                            disabled={!inputValue.trim() || isTyping}
                                            className="p-2 bg-primary rounded-xl text-white hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            <Send className="w-5 h-5" />
                                        </button>
                                    </div>
                                    <p className="text-[10px] text-center text-gray-600 mt-2">
                                        IAZ Bot puede cometer errores. Para consultas complejas usa WhatsApp.
                                    </p>
                                </div>
                            </>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
