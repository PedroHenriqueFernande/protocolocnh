import { X, Check } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const pains = [
  'Estudar sozinho é confuso e você não sabe por onde começar',
  'Medo real de reprovar na prova teórica',
  'Falta de tempo para estudar com calma',
  'Insegurança de entrar no carro pela primeira vez',
  'Evitar a burocracia e o caminho lento da autoescola',
  'Não faz sentido pagar valores abusivos por aulas',
];

const forWho = [
  'Quer rapidez',
  'Quer praticidade',
  'Quer economizar',
  'Quer organização',
  'Quer aprender antes de dirigir',
  'Quer suporte via WhatsApp e IA',
];

const notForWho = [
  'Não pretende reservar nem alguns minutos por dia para estudar',
  'Prefere conteúdos soltos e desorganizados ao invés de um método claro',
  'Faz questão de seguir o processo tradicional',
  'Não gosta de materiais guiados ou estruturados',
  'Não vê necessidade de se preparar antes da prova',
];

export const ForWho = () => {
  const { ref, isVisible } = useScrollReveal();
  const { ref: ref2, isVisible: isVisible2 } = useScrollReveal();

  return (
    <section className="bg-[#F5F8FA] py-16 px-4 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2D3D] mb-4">
            Ideal Para Você Que Quer Tirar a CNH Sem Complicação
          </h2>
          <p className="text-lg md:text-xl text-[#2D7DD2] max-w-3xl mx-auto">
            Se alguma dessas situações faz parte da sua realidade, você vai se identificar com este protocolo:
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4 mb-12">
          {pains.map((pain, index) => (
            <div
              key={index}
              className={`flex items-start gap-3 bg-white rounded-lg p-4 border border-[#E6EEF5] shadow-sm transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
              <span className="text-[#1F2D3D]">{pain}</span>
            </div>
          ))}
        </div>

        <div ref={ref2} className="grid md:grid-cols-2 gap-8">
          <div
            className={`bg-white rounded-2xl border-2 border-[#4FA3FF] p-8 shadow-lg transition-all duration-700 ${isVisible2 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
          >
            <h3 className="text-2xl font-bold text-[#1F2D3D] mb-6 flex items-center gap-2">
              <span className="text-2xl">👉</span> Esse método é para quem:
            </h3>
            <ul className="space-y-4">
              {forWho.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-[#4FA3FF] flex-shrink-0 mt-0.5" />
                  <span className="text-[#1F2D3D]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`bg-white rounded-2xl border-2 border-[#A7B2C2] p-8 shadow-lg transition-all duration-700 ${isVisible2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
          >
            <h3 className="text-2xl font-bold text-[#1F2D3D] mb-6 flex items-center gap-2">
              <span className="text-2xl">🚫</span> Esse método não é para quem:
            </h3>
            <ul className="space-y-4">
              {notForWho.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-[#1F2D3D]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
