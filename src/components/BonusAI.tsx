import { Bot, Check } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const features = [
  'Explica qualquer conteúdo da prova teórica',
  'Responde dúvidas imediatamente',
  'Acelera revisão antes da prova',
  'Ajuda a corrigir erros comuns',
  'Funciona 24h',
  'Utilize em qualquer lugar',
  'É como ter um instrutor particular',
];

export const BonusAI = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-[#E8F3FF] py-16 px-4 md:py-24">
      <div className="max-w-5xl mx-auto">
        <div
          ref={ref}
          className={`bg-white rounded-3xl border-2 border-[#2D7DD2] shadow-2xl p-8 md:p-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
        >
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-[#4FA3FF] to-[#2D7DD2] rounded-2xl flex items-center justify-center animate-float shadow-xl">
                <Bot className="w-12 h-12 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 bg-[#FF7A3D] text-white text-xs font-bold px-3 py-1 rounded-full">
                NOVO
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2D3D]">
                Bônus Exclusivo: Seu Próprio Agente de IA Para Ajudar Nos Estudos
              </h2>
              <p className="text-lg md:text-xl text-[#2D7DD2] max-w-3xl mx-auto">
                Além do Protocolo CNH completo, você recebe acesso a um Agente de IA treinado para explicar conteúdos, tirar dúvidas e acelerar seu aprendizado.
              </p>
            </div>

            <div className="w-full max-w-2xl">
              <h3 className="text-xl font-bold text-[#1F2D3D] mb-6 flex items-center justify-center gap-2">
                <Bot className="w-6 h-6 text-[#4FA3FF]" />
                O que esse Agente faz por você:
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 text-left">
                    <Check className="w-6 h-6 text-[#4FA3FF] flex-shrink-0 mt-0.5" />
                    <span className="text-[#1F2D3D]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#F5F8FA] rounded-xl p-6 max-w-3xl">
              <p className="text-lg text-[#1F2D3D] font-semibold">
                Esse bônus sozinho já valeria mais do que o valor do protocolo inteiro, mas hoje vem incluso sem custo adicional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
