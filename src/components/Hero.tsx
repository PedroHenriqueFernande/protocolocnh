import { Shield, Zap, MessageCircle, Bot, Play } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="bg-[#F5F8FA] py-16 px-4 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-8 max-w-4xl mx-auto">
          <div className="space-y-6 animate-fadeInUp text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2D3D] leading-tight">
              AUTOESCOLA FICOU PARA O PASSADO! ADQUIRA TODO CONTEÚDO TEÓRICO E PRÁTICO PARA FINALMENTE CONSEGUIR SUA CNH
            </h1>

            <p className="text-lg md:text-xl text-[#2D7DD2] leading-relaxed">
              Com a nova resolução adotada pelo CONTRAN, você não precisa mais de uma autoescola para passar na sua CNH. Com isso, preparamos materiais com todos os conteúdos para a prova teórica destrinchados e um guia prático para sua primeira experiência ao volante. Um caminho simples e direto para quem quer conquistar a sua CNH economizando até mais que R$2.000
            </p>
          </div>

          <div className="animate-fadeInUp animation-delay-200 flex flex-col items-center space-y-4">
            {/* Blue pulsating header */}
            <div className="w-full max-w-[280px] bg-gradient-to-r from-[#4FA3FF] to-[#2D7DD2] rounded-lg py-3 px-6 animate-pulse">
              <p className="text-center text-white font-semibold text-sm">
                Assista ao vídeo e veja como funciona
              </p>
            </div>

            {/* VSL Container */}
            <div className="bg-white rounded-2xl shadow-2xl p-4 border border-[#D9E2EC] w-full max-w-[280px]">
              <div className="w-full" style={{ aspectRatio: '9/16' }}>
                <div className="w-full h-full bg-gradient-to-br from-[#4FA3FF] to-[#2D7DD2] rounded-xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <button className="relative z-10 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300">
                    <Play className="w-10 h-10 text-[#2D7DD2] ml-1" fill="currentColor" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 text-center">
            <button className="w-full md:w-auto bg-[#FF7A3D] hover:bg-[#FF6A2D] text-white font-semibold text-lg px-8 py-5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-pulse">
              QUERO CONQUISTAR MINHA CNH AGORA POR R$27,90
            </button>

            <p className="text-sm text-[#A7B2C2]">
              Acesso imediato ao Protocolo + bônus essenciais
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
