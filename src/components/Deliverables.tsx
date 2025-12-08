import { ChevronLeft, ChevronRight, BookOpen, Brain, Headphones, Video, Car, FileText, Monitor, MessageCircle } from 'lucide-react';
import { useCarousel } from '../hooks/useCarousel';
import { useScrollReveal } from '../hooks/useScrollReveal';

const deliverables = [
  {
    icon: BookOpen,
    title: 'Aulas Teóricas',
    description: 'Conteúdo completo e organizado de todos os temas que caem na prova teórica.',
  },
  {
    icon: Brain,
    title: 'Mapas Mentais',
    description: 'Visualização clara dos principais conceitos para memorização rápida.',
  },
  {
    icon: Headphones,
    title: 'Audiobook',
    description: 'Aprenda em qualquer lugar: no trânsito, academia ou caminhada.',
  },
  {
    icon: Video,
    title: 'Vídeos com IA',
    description: 'Explicações em vídeo dos tópicos mais importantes da prova.',
  },
  {
    icon: Car,
    title: 'Guia Prático',
    description: 'Instruções passo a passo para sua primeira vez ao volante.',
  },
  {
    icon: FileText,
    title: 'Testes Interativos',
    description: 'Simulados realistas para você treinar e chegar confiante na prova.',
  },
  {
    icon: Monitor,
    title: 'Slides',
    description: 'Material visual organizado para estudo e revisão eficiente.',
  },
  {
    icon: MessageCircle,
    title: 'Suporte Via WhatsApp',
    description: 'Tire suas dúvidas rapidamente com nossa equipe de suporte.',
  },
];

export const Deliverables = () => {
  const { currentSlide, nextSlide, prevSlide, goToSlide } = useCarousel(deliverables.length);
  const { ref, isVisible } = useScrollReveal();

  const Icon = deliverables[currentSlide].icon;

  return (
    <section ref={ref} className="bg-[#F5F8FA] py-16 px-4 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2D3D] mb-4">
            Tudo Que Você Vai Receber
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border-2 border-[#4FA3FF] shadow-xl p-8 md:p-12">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-32 h-32 bg-gradient-to-br from-[#4FA3FF] to-[#2D7DD2] rounded-2xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300 shadow-lg">
                <Icon className="w-16 h-16 text-white" />
              </div>

              <div className="space-y-2">
                <div className="text-sm font-semibold text-[#4FA3FF]">
                  {currentSlide + 1} de {deliverables.length}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#1F2D3D]">
                  {deliverables[currentSlide].title}
                </h3>
              </div>

              <p className="text-lg text-[#2D7DD2] max-w-2xl">
                {deliverables[currentSlide].description}
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
          {deliverables.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'w-8 bg-[#2D7DD2]' : 'w-2 bg-[#D9E2EC] hover:bg-[#4FA3FF]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
