import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = () => {
    const phoneNumber = '5561995103399';
    const message = 'Gostaria de entender mais sobre os materiais ou o novo bônus de vocês';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold px-6 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 animate-pulse flex items-center gap-3 group"
        >
            <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            <span className="hidden md:inline">Suporte via WhatsApp</span>
        </a>
    );
};
