import { MessageCircle, Shield, FileText } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#1F2D3D] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6">
          <h3 className="text-2xl font-bold">Protocolo CNH: Guia Teórico + Prático Completo</h3>

          {/* WhatsApp Support Button - Highlighted */}
          <div className="mb-6">
            <a
              href="https://wa.me/5561995103399?text=Gostaria%20de%20entender%20mais%20sobre%20os%20materiais%20ou%20o%20novo%20b%C3%B4nus%20de%20voc%C3%AAs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-transparent border-2 border-[#25D366] hover:bg-[#25D366]/10 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-pulse"
            >
              <MessageCircle className="w-5 h-5 text-[#25D366]" />
              Suporte via WhatsApp
            </a>
          </div>

          {/* Other Links */}
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <a
              href="#privacidade"
              className="flex items-center gap-2 hover:text-[#4FA3FF] transition-colors duration-200"
            >
              <Shield className="w-4 h-4" />
              Política de Privacidade
            </a>
            <a
              href="#termos"
              className="flex items-center gap-2 hover:text-[#4FA3FF] transition-colors duration-200"
            >
              <FileText className="w-4 h-4" />
              Termos de Uso
            </a>
            <a
              href="#reembolso"
              className="flex items-center gap-2 hover:text-[#4FA3FF] transition-colors duration-200"
            >
              <Shield className="w-4 h-4" />
              Direito de Reembolso
            </a>
          </div>

          <div className="pt-6 border-t border-[#2D7DD2]/30">
            <p className="text-sm text-[#A7B2C2]">
              © {new Date().getFullYear()} Protocolo CNH. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
