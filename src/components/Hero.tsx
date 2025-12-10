import { Shield, Zap, MessageCircle, Bot } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#F5F8FA] pt-0 pb-16 md:pb-24">
      {/* Hero Image with Gradient Mask */}
      <img
        src="/Hero.jpg"
        alt="Hero Background"
        className="w-full h-full object-cover mx-auto block relative z-0"
        style={{
          maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10 -mt-8 md:-mt-12">
        <div className="space-y-8 max-w-4xl mx-auto">
          <div className="space-y-6 animate-fadeInUp text-center px-2">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#1F2D3D] leading-tight break-words">
              AUTOESCOLA FICOU PARA O PASSADO!
            </h1>

            <p className="text-lg md:text-xl text-[#2D7DD2] leading-relaxed">
              Com a nova resolução adotada pelo CONTRAN, você não precisa mais de uma autoescola para fazer as provas e adquirir sua CNH. Com isso, preparamos materiais com todos os conteúdos para a prova teórica destrinchados e um guia prático para sua experiência ao volante ser a mais tranquila possível. Um caminho simples e direto para quem quer conquistar a sua CNH economizando até mais que R$2.000
            </p>
          </div>

          <div className="space-y-6 text-center">
            <a
              href="#bonus-ai"
              className="w-full md:w-auto bg-[#FF7A3D] hover:bg-[#FF6A2D] text-white font-semibold text-lg px-8 py-5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-pulse text-center inline-block"
            >
              QUERO CONQUISTAR MINHA CNH AGORA POR R$27,90
            </a>

            <p className="text-sm text-[#A7B2C2]">
              Acesso imediato ao Protocolo + bônus essenciais + 30 dias de garantia
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
              <div className="flex flex-col items-center text-center space-y-2">
                <Shield className="w-8 h-8 text-[#4FA3FF]" />
                <span className="text-xs text-[#1F2D3D] font-medium">Acesso vitalício</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <Zap className="w-8 h-8 text-[#4FA3FF]" />
                <span className="text-xs text-[#1F2D3D] font-medium">Entrega imediata</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <MessageCircle className="w-8 h-8 text-[#4FA3FF]" />
                <span className="text-xs text-[#1F2D3D] font-medium">Suporte via WhatsApp</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <Bot className="w-8 h-8 text-[#4FA3FF]" />
                <span className="text-xs text-[#1F2D3D] font-medium">Estude com Agente IA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
