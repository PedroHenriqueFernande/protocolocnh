import { ChevronLeft, ChevronRight, BookOpen, Brain, Headphones, Video, Car, FileText, Monitor, MessageCircle } from 'lucide-react';
import { useCarousel } from '../hooks/useCarousel';
import { useScrollReveal } from '../hooks/useScrollReveal';

const slides = [
  {
    icon: BookOpen,
    title: 'Aulas Teóricas (Visual e Direto ao Ponto)',
    description: 'Entenda tudo o que cai na prova de forma clara e sem enrolação.',
  },
  {
    icon: Brain,
    title: 'Mapas Mentais Completos',
    description: 'Os principais temas destrinchados para você memorizar rápido.',
  },
  {
    icon: Headphones,
    title: 'Audiobook para Estudar em Qualquer Lugar',
    description: 'Aprenda enquanto trabalha, caminha, treina ou está no ônibus.',
  },
  {
    icon: Video,
    title: 'Vídeos Curtos para Revisão Rápida',
    description: 'Explicações objetivas dos pontos mais cobrados no exame.',
  },
  {
    icon: Car,
    title: 'Guia Ilustrado para Iniciantes',
    description: 'Aprenda passo a passo como entrar no carro, ajustar tudo e começar a dirigir.',
  },
  {
    icon: FileText,
    title: 'Simulados para Treinar e Fixar',
    description: 'Questões parecidas com as da prova para você chegar confiante.',
  },
  {
    icon: Monitor,
    title: 'Slides Organizados para Estudo e Revisão',
    description: 'Conteúdo limpo, visual e fácil de revisar antes da prova.',
  },
  {
    icon: MessageCircle,
    title: 'Suporte Rápido pelo WhatsApp',
    description: 'Dúvidas durante o estudo? Basta chamar no WhatsApp.',
  },
];

export const DemoCarousel = () => {
  const { currentSlide, nextSlide, prevSlide, goToSlide } = useCarousel(slides.length);
  const { ref, isVisible } = useScrollReveal();

  const Icon = slides[currentSlide].icon;

  return (
    <section ref={ref} className="bg-white py-16 px-4 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2D3D] mb-4">
            Veja Como o Protocolo CNH Funciona na Prática
          </h2>
          <p className="text-lg md:text-xl text-[#2D7DD2] max-w-3xl mx-auto">
            Uma solução completa, simples e organizada, com conteúdos teóricos e práticos explicados de forma visual, rápida e direta.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-[#F5F8FA] rounded-2xl border border-[#D9E2EC] shadow-lg p-8 md:p-12">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-24 h-24 bg-gradient-to-br from-[#4FA3FF] to-[#2D7DD2] rounded-2xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                <Icon className="w-12 h-12 text-white" />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-[#1F2D3D]">
                {slides[currentSlide].title}
              </h3>

              <p className="text-lg text-[#2D7DD2] max-w-2xl">
                {slides[currentSlide].description}
              </p>
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#F5F8FA] transition-all hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-[#2D7DD2]" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#F5F8FA] transition-all hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-[#2D7DD2]" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'w-8 bg-[#2D7DD2]' : 'w-2 bg-[#D9E2EC] hover:bg-[#4FA3FF]'
                }`}
            />
          ))}
        </div>

        <p className="text-center text-lg text-[#1F2D3D] mt-12 font-medium max-w-3xl mx-auto">
          Tudo preparado para você aprender rápido, sem confusão, sem burocracia e sem depender da autoescola.
        </p>
      </div>
    </section>
  );
};
