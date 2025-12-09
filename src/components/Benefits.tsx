import { BookCheck, Clock, Brain, CarFront, AlertCircle, FolderKanban, MessageCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const benefits = [
  {
    icon: BookCheck,
    title: 'Você aprende exatamente o que cai na prova teórica',
    description: 'Conteúdo direto, sem enrolação, focado nos temas cobrados no exame.',
  },
  {
    icon: Clock,
    title: 'Você estuda do jeito que quiser e muito mais rápido',
    description: 'Vídeos, áudio, mapas mentais e resumos para estudar até no intervalo.',
  },
  {
    icon: Brain,
    title: 'Você entende o conteúdo sem quebrar a cabeça',
    description: 'Explicações simples, linguagem clara, mesmo para quem nunca estudou o assunto.',
  },
  {
    icon: CarFront,
    title: 'Você entra no carro sabendo o que fazer',
    description: 'Do ajuste do banco ao controle do carro, tudo passo a passo.',
  },
  {
    icon: AlertCircle,
    title: 'Você evita as pegadinhas que reprovam milhares de candidatos',
    description: 'Preparação completa para o que realmente derruba no exame.',
  },
  {
    icon: FolderKanban,
    title: 'Organização completa do início ao fim',
    description: 'A ordem ideal de estudo já está pronta para você seguir.',
  },
  {
    icon: MessageCircle,
    title: 'Suporte Via WhatsApp',
    description: 'Dúvidas sobre os materiais? Basta chamar no WhatsApp.',
  },
];

const BenefitCard = ({ benefit, index }: { benefit: typeof benefits[0]; index: number }) => {
  const { ref, isVisible } = useScrollReveal();
  const Icon = benefit.icon;

  return (
    <div
      ref={ref}
      className={`bg-white rounded-xl border border-[#E6EEF5] p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Icon className="w-12 h-12 text-[#4FA3FF] mb-4" />
      <h3 className="text-xl font-bold text-[#1F2D3D] mb-3">{benefit.title}</h3>
      <p className="text-[#2D7DD2]">{benefit.description}</p>
    </div>
  );
};

export const Benefits = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-white py-16 px-2 sm:px-4 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2D3D] mb-4">
            Por Que o Protocolo CNH É o Caminho Mais Simples Para Você Ser Aprovado
          </h2>
          <p className="text-lg md:text-xl text-[#2D7DD2] max-w-3xl mx-auto">
            O Protocolo CNH organiza tudo para acelerar sua aprovação e te ensinar o básico para dirigir com segurança.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} benefit={benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
