import { Check, Star } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const basicFeatures = [
  'Aulas Teóricas',
  'Mapas Mentais',
  'Audiobook',
  'Vídeos (IA)',
  'Guia de Direção',
  'Testes Interativos',
  'Slides',
  'Suporte via WhatsApp',
];

const completeFeatures = [
  ...basicFeatures,
  'Agente IA Exclusivo',
];

export const Pricing = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-white py-16 px-4 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2D3D] mb-4">
            Escolha o Plano Ideal Para Tirar Sua CNH de Forma Rápida e Sem Burocracia
          </h2>
          <p className="text-lg md:text-xl text-[#2D7DD2] max-w-3xl mx-auto">
            Os dois planos entregam tudo que você precisa. A diferença está no suporte e no bônus exclusivo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          <div className="bg-[#F5F8FA] rounded-2xl border border-[#4FA3FF] p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-[#1F2D3D] mb-2">Plano Básico</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-[#2D7DD2]">R$ 19,90</span>
            </div>

            <p className="text-[#2D7DD2] mb-6">Você recebe:</p>

            <ul className="space-y-3 mb-8">
              {basicFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#4FA3FF] flex-shrink-0 mt-0.5" />
                  <span className="text-[#1F2D3D]">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full bg-[#FF7A3D] hover:bg-[#FF6A2D] text-white font-semibold text-lg px-6 py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 animate-pulse">
              QUERO O PLANO BÁSICO: R$ 19,90
            </button>

            <p className="text-center text-sm text-[#A7B2C2] mt-4">
              Acesso imediato à versão essencial
            </p>
          </div>

          <div className="bg-white rounded-2xl border-2 border-[#2D7DD2] p-8 shadow-2xl transition-all duration-300 hover:shadow-3xl hover:-translate-y-2 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF7A3D] text-white font-bold px-6 py-2 rounded-full shadow-lg flex items-center gap-2">
              <Star className="w-4 h-4 fill-current" />
              MAIS VENDIDO
            </div>

            <h3 className="text-2xl font-bold text-[#1F2D3D] mb-2 mt-4">Plano Completo</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-[#2D7DD2]">R$ 27,90</span>
            </div>

            <div className="bg-[#E8F3FF] rounded-lg p-3 mb-6">
              <p className="text-[#2D7DD2] font-semibold text-center">
                Inclui tudo do Básico + Agente IA
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              {completeFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#2D7DD2] flex-shrink-0 mt-0.5" />
                  <span className="text-[#1F2D3D] font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full bg-[#FF7A3D] hover:bg-[#FF6A2D] text-white font-bold text-xl px-6 py-5 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-pulse">
              QUERO O PLANO COMPLETO: R$ 27,90
            </button>

            <p className="text-center text-sm text-[#A7B2C2] mt-4">
              Acesso imediato + Bônus Exclusivo
            </p>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto bg-[#F5F8FA] rounded-xl p-8">
          <p className="text-lg text-[#1F2D3D] leading-relaxed">
            <span className="font-bold">Compare:</span> Uma autoescola tradicional cobra entre R$ 2.000 e R$ 3.500 por um curso completo. Com o Protocolo CNH, você tem acesso a todo o conhecimento necessário por menos de R$ 30, e estuda no seu ritmo, quando e onde quiser.
          </p>
        </div>
      </div>
    </section>
  );
};
