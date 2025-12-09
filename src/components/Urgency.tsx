import { Check, X, ThumbsUp, Ban } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Urgency = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-white py-16 px-2 sm:px-4 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2D3D] mb-6">
            Cada Dia Sem Estudar Está Atrasando a Sua CNH e Custando Mais Dinheiro
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {/* Esse método é para quem */}
            <div className="bg-white rounded-2xl border-2 border-[#4FA3FF] p-6 shadow-lg text-left">
              <div className="flex items-start gap-3 mb-4">
                <ThumbsUp className="w-6 h-6 text-[#FFD700] flex-shrink-0 mt-1" />
                <h3 className="text-xl font-bold text-[#1F2D3D]">
                  Esse método é para quem:
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#4FA3FF] flex-shrink-0 mt-0.5" />
                  <span className="text-[#1F2D3D]">Quer rapidez</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#4FA3FF] flex-shrink-0 mt-0.5" />
                  <span className="text-[#1F2D3D]">Quer praticidade</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#4FA3FF] flex-shrink-0 mt-0.5" />
                  <span className="text-[#1F2D3D]">Quer economizar</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#4FA3FF] flex-shrink-0 mt-0.5" />
                  <span className="text-[#1F2D3D]">Quer organização</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#4FA3FF] flex-shrink-0 mt-0.5" />
                  <span className="text-[#1F2D3D]">Quer aprender antes de dirigir</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#4FA3FF] flex-shrink-0 mt-0.5" />
                  <span className="text-[#1F2D3D]">Quer suporte via WhatsApp e IA</span>
                </li>
              </ul>
            </div>

            {/* Esse método não é para quem */}
            <div className="bg-white rounded-2xl border-2 border-[#FF6B6B] p-6 shadow-lg text-left">
              <div className="flex items-start gap-3 mb-4">
                <Ban className="w-6 h-6 text-[#FF6B6B] flex-shrink-0 mt-1" />
                <h3 className="text-xl font-bold text-[#1F2D3D]">
                  Esse método não é para quem:
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-[#FF6B6B] flex-shrink-0 mt-0.5" />
                  <span className="text-[#1F2D3D]">Não pretende estudar nem alguns minutos por dia</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-[#FF6B6B] flex-shrink-0 mt-0.5" />
                  <span className="text-[#1F2D3D]">Prefere conteúdos soltos e desorganizados</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-[#FF6B6B] flex-shrink-0 mt-0.5" />
                  <span className="text-[#1F2D3D]">Faz questão de seguir o processo tradicional</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-[#FF6B6B] flex-shrink-0 mt-0.5" />
                  <span className="text-[#1F2D3D]">Não gosta de materiais guiados</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-[#FF6B6B] flex-shrink-0 mt-0.5" />
                  <span className="text-[#1F2D3D]">Não vê necessidade de se preparar antes da prova</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button className="bg-[#FF7A3D] hover:bg-[#FF6A2D] text-white font-semibold text-lg px-10 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-pulse">
            QUERO COMEÇAR AGORA E NÃO PERDER MAIS TEMPO
          </button>
        </div>

        <p className="text-center text-sm text-[#A7B2C2] mt-4">
          Acesso imediato ao Protocolo + bônus essenciais
        </p>
      </div>
    </section>
  );
};
