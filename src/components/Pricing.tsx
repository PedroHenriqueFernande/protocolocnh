import { useState, useEffect } from 'react';
import { Check, Star, Clock } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const basicFeatures = [
  'Aulas Teóricas',
  'Mapas Mentais',
  'Audiobook',
  'Guia de Direção',
  'Testes Interativos',
  'Slides',
  'Suporte via WhatsApp',
];

const completeFeatures = [
  ...basicFeatures,
  'Chat IA treinado para te instruir e ajudar nas dúvidas',
  'Acesso às futuras atualizações para moto',
];

const CountdownTimer = () => {
  const [time, setTime] = useState({
    hours: 2,
    minutes: 45,
    seconds: 37
  });

  const [dateStr, setDateStr] = useState('');

  useEffect(() => {
    // Set dynamic date
    const today = new Date();
    const day = today.getDate().toString().padStart(2, '0');
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    setDateStr(`${day}/${month}`);

    const timer = setInterval(() => {
      setTime(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return prev;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="mt-6 mb-4 mx-auto w-full max-w-[340px]">
      <div className="bg-gradient-to-b from-[#2D7DD2] via-[#1e3a8a] to-[#0f172a] rounded-xl p-[2px] shadow-xl relative overflow-hidden group">
        {/* Metallic Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 z-20 pointer-events-none" />

        <div className="bg-gradient-to-b from-[#172554] to-[#0f172a] rounded-[10px] p-4 flex flex-col items-center justify-center relative z-10 border border-[#2D7DD2]/30">
          <div className="flex items-center gap-2 mb-3">
            <Clock className="w-5 h-5 text-[#FF7A3D] animate-pulse" />
            <span className="text-[#FF7A3D] text-xs md:text-sm font-bold uppercase tracking-wider">
              Essa Oferta Acaba Dia {dateStr}
            </span>
          </div>

          <div className="flex items-center justify-center gap-2 text-white font-mono text-2xl md:text-3xl font-bold tracking-widest leading-none w-full">
            <div className="bg-[#0f172a] px-3 py-2 rounded-lg text-[#FF7A3D] border border-[#2D7DD2]/50 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] min-w-[60px] flex justify-center backdrop-blur-sm">
              {formatNumber(time.hours)}
            </div>
            <span className="text-[#475569] text-xl mb-1">:</span>
            <div className="bg-[#0f172a] px-3 py-2 rounded-lg text-[#FF7A3D] border border-[#2D7DD2]/50 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] min-w-[60px] flex justify-center backdrop-blur-sm">
              {formatNumber(time.minutes)}
            </div>
            <span className="text-[#475569] text-xl mb-1">:</span>
            <div className="bg-[#0f172a] px-3 py-2 rounded-lg text-[#FF7A3D] border border-[#2D7DD2]/50 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] min-w-[60px] flex justify-center backdrop-blur-sm">
              {formatNumber(time.seconds)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export const Pricing = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-white py-16 px-2 sm:px-4 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2D3D] mb-4">
            Escolha o Acesso Ideal para Tirar Sua CNH de Forma Rápida e Sem Burocracia
          </h2>
          <p className="text-lg md:text-xl text-[#2D7DD2] max-w-3xl mx-auto">
            Os dois planos entregam tudo que você precisa, com acesso vitalício e imediato. A diferença está no bônus exclusivo que facilitará seus estudos e acelerará seu aprendizado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12 px-4">
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
              Acesso imediato à versão essencial + 30 dias de garantia
            </p>
          </div>

          <div className="bg-white rounded-2xl border-2 border-[#2D7DD2] p-8 shadow-2xl transition-all duration-300 hover:shadow-3xl hover:-translate-y-2 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF7A3D] text-white font-bold px-6 py-2 rounded-full shadow-lg flex items-center gap-2">
              <Star className="w-4 h-4 fill-current" />
              MAIS VENDIDO
            </div>

            <CountdownTimer />

            <h3 className="text-2xl font-bold text-[#1F2D3D] mb-2 mt-4">Plano Completo</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-[#2D7DD2]">R$ 27,90</span>
            </div>

            <div className="bg-[#E8F3FF] rounded-lg p-3 mb-6">
              <p className="text-[#2D7DD2] font-semibold text-center">
                Inclui tudo do Básico <br />+ Agente IA Exclusivo + 30 dias de garantia
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
              Acesso imediato + Bônus Exclusivo + 30 dias de garantia
            </p>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto bg-[#F5F8FA] rounded-xl p-8">
          <p className="text-lg text-[#1F2D3D] leading-relaxed">
            Uma autoescola tradicional cobra entre R$ 2.000 e R$ 3.500 pelo processo completo, mas isso é coisa do passado. Com o Protocolo CNH, você tem acesso a todo o conhecimento necessário por menos de R$ 30, e estuda no seu ritmo, quando e onde quiser e recebe aprendizados de como dirigir um carro.
          </p>
        </div>
      </div>
    </section>
  );
};
