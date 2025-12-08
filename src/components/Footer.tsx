import { MessageCircle, Shield, FileText } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#1F2D3D] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6">
          <h3 className="text-2xl font-bold">Protocolo CNH: Guia Teórico + Prático Completo</h3>

          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <a
              href="#suporte"
              className="flex items-center gap-2 hover:text-[#4FA3FF] transition-colors duration-200"
            >
              <MessageCircle className="w-4 h-4" />
              Suporte via WhatsApp
            </a>
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
