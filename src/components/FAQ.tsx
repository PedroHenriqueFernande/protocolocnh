import { useState } from 'react';
import { ChevronDown, Shield } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const faqs = [
  {
    question: '➤ 1. Isso funciona mesmo sem autoescola?',
    answer: 'Sim. A nova lei permite tirar a CNH sem autoescola, desde que você estude e esteja preparado. O Protocolo CNH organiza esse caminho de forma simples e prática.',
  },
  {
    question: '➤ 2. Vou receber tudo na hora?',
    answer: 'Sim. Assim que o pagamento é aprovado, o acesso chega imediatamente no seu e-mail.',
  },
  {
    question: '➤ 3. É difícil estudar sozinho?',
    answer: 'Não, desde que você tenha um método claro. O protocolo já te dá o passo a passo para estudar e revisar rápido, sem confusão.',
  },
  {
    question: '➤ 4. O Agente de IA ajuda de verdade?',
    answer: 'Sim. Ele responde dúvidas sobre o conteúdo da prova, reforça explicações e acelera sua preparação. É como ter um mini-instrutor disponível 24h.',
  },
  {
    question: '➤ 5. Serve para quem nunca dirigiu?',
    answer: 'Sim. O guia prático mostra exatamente como dar seus primeiros passos no carro com segurança.',
  },
  {
    question: '➤ 6. E se eu não gostar do conteúdo?',
    answer: 'Você tem 30 dias de garantia total para pedir reembolso, sem justificativa.',
  },
  {
    question: '➤ 7. Funciona no celular?',
    answer: 'Sim. Todos os materiais podem ser acessados do celular, tablet ou computador.',
  },
  {
    question: '➤ 8. O suporte via WhatsApp é rápido?',
    answer: 'Sim. Você recebe atendimento direto para dúvidas sobre os materiais.',
  },
];

const FAQItem = ({ faq }: { faq: typeof faqs[0] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#E6EEF5] last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 px-4 text-left hover:bg-[#F5F8FA] transition-colors duration-200"
      >
        <span className="text-lg font-semibold text-[#1F2D3D] pr-4">{faq.question}</span>
        <ChevronDown
          className={`w-6 h-6 text-[#4FA3FF] flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
            }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="px-4 pb-5 bg-[#F5F8FA]">
          <p className="text-[#2D7DD2]">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
};

export const FAQ = () => {
  const { ref, isVisible } = useScrollReveal();
  const { ref: ref2, isVisible: isVisible2 } = useScrollReveal();

  return (
    <section className="bg-[#F5F8FA] py-16 px-4 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <div className="bg-white rounded-2xl border-2 border-[#4FA3FF] shadow-xl p-8 md:p-12">
            <div className="w-20 h-20 bg-gradient-to-br from-[#4FA3FF] to-[#2D7DD2] rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2D3D] mb-4">
              Garantia de 30 Dias Para Testar Sem Risco
            </h2>
            <p className="text-lg text-[#2D7DD2] leading-relaxed">
              30 dias para testar tudo.
              <br />
              Se não gostar, devolvemos 100% do seu dinheiro.
            </p>
          </div>
        </div>

        <div
          ref={ref2}
          className={`max-w-4xl mx-auto transition-all duration-700 ${isVisible2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-[#1F2D3D] text-center mb-8">
            Perguntas Frequentes
          </h3>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
