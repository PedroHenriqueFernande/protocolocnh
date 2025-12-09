import { ChevronLeft, ChevronRight, BookOpen, Brain, Headphones, Video, Car, FileText, Monitor } from 'lucide-react';
import { useCarousel } from '../hooks/useCarousel';
import { useScrollReveal } from '../hooks/useScrollReveal';

const slides = [
  {
    icon: BookOpen,
    title: 'Guias Teoricos (Visual e Direto ao Ponto)',
    description: 'Entenda tudo o que cai na prova de forma clara e sem enrolacao.',
  },
  {
    icon: Brain,
    title: 'Mapas Mentais Completos',
    description: 'Os principais temas destrinchados para voce memorizar rapido.',
  },
  {
    icon: Headphones,
    title: 'Audiobook para Estudar em Qualquer Lugar',
    description: 'Aprenda enquanto trabalha, caminha, treina ou esta no onibus.',
  },
  {
    icon: Video,
    title: 'Video para Revisao',
    description: 'Explicacoes objetivas dos pontos mais cobrados no exame.',
  },
  {
    icon: Car,
    title: 'Guia Ilustrado para Iniciantes',
    description: 'Aprenda passo a passo como entrar no carro, ajustar tudo e comecar a dirigir.',
  },
  {
    icon: FileText,
    title: 'Simulados para Treinar e Fixar',
    description: 'Questoes parecidas com as da prova para voce chegar confiante.',
  },
  {
    icon: Monitor,
    title: 'Slides Organizados para Estudo e Revisao',
    description: 'Conteudo limpo, visual e facil de revisar antes da prova.',
  },
];

export const DemoCarousel = () => {
  const { currentSlide, nextSlide, prevSlide, goToSlide } = useCarousel(slides.length);
  const { ref, isVisible } = useScrollReveal();

  const Icon = slides[currentSlide].icon;

  return (
    <section ref={ref} className="bg-white py-16 px-2 sm:px-4 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2D3D] mb-4">
            Veja Como o Protocolo CNH Funciona na Prática
          </h2>
          <p className="text-lg md:text-xl text-[#2D7DD2] max-w-3xl mx-auto">
            Uma solução completa, simples e organizada, com conteúdos teóricos e práticos explicados de forma visual, rápida e direta.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto mt-48 md:mt-64">
          {/* Floating Image Section for Slides 0 and 1 */}
          {(currentSlide === 0 || currentSlide === 1 || currentSlide === 2 || currentSlide === 3 || currentSlide === 4 || currentSlide === 5 || currentSlide === 6) && (
            <div
              className="absolute -top-32 md:-top-40 left-1/2 -translate-x-1/2 w-[95%] md:w-[95%] h-48 md:h-56 z-20 transition-transform duration-300 cursor-pointer hover:scale-[1.02] active:scale-105"
            >
              {currentSlide === 0 && (
                <img
                  src="/unnamed.png"
                  alt="Guia Rápido"
                  className="w-full h-full object-contain rounded-xl shadow-2xl bg-white"
                />
              )}
              {currentSlide === 1 && (
                <div className="w-full h-full relative rounded-xl shadow-2xl overflow-hidden">
                  <img
                    src="/mapa%20mental.png"
                    alt="Mapas Mentais"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              {currentSlide === 2 && (
                <div className="w-full h-full relative rounded-xl shadow-2xl overflow-hidden bg-white">
                  <img
                    src="/Guia%20CNH%20Sem%20Autoescola.png"
                    alt="Audiobooks"
                    className="w-full h-full object-cover object-bottom"
                  />
                </div>
              )}
              {currentSlide === 3 && (
                <div className="w-full h-full relative rounded-xl shadow-2xl overflow-hidden">
                  <img
                    src="/WhatsApp%20Image%202025-12-09%20at%2017.20.31.jpeg"
                    alt="Vídeos para revisão"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              {currentSlide === 4 && (
                <div className="w-full h-full relative rounded-xl shadow-2xl overflow-hidden">
                  <img
                    src="/Screenshot_2.png"
                    alt="Guia ilustrado"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              {currentSlide === 5 && (
                <div className="w-full h-full relative rounded-xl shadow-2xl overflow-hidden">
                  <img
                    src="/Screenshot_3.png"
                    alt="Simulados"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              {currentSlide === 6 && (
                <div className="w-full h-full relative rounded-xl shadow-2xl overflow-hidden">
                  <img
                    src="/WhatsApp%20Image%202025-12-09%20at%2017.31.12.jpeg"
                    alt="Sistemas do veiculo"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          )}

          <div className="bg-[#F5F8FA] rounded-2xl border border-[#D9E2EC] shadow-lg relative overflow-visible flex flex-col z-10">

            {/* Content Section - Added significant top padding for slides with images to prevent overlap */}
            <div className={`p-8 md:p-12 flex flex-col items-center text-center space-y-6 ${(currentSlide === 0 || currentSlide === 1 || currentSlide === 2 || currentSlide === 3 || currentSlide === 4 || currentSlide === 5 || currentSlide === 6) ? 'pt-16 md:pt-24' : ''}`}>
              <div className="w-24 h-24 bg-gradient-to-br from-[#4FA3FF] to-[#2D7DD2] rounded-2xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300 shadow-md">
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
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#F5F8FA] transition-all hover:scale-110 z-30"
          >
            <ChevronLeft className="w-6 h-6 text-[#2D7DD2]" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#F5F8FA] transition-all hover:scale-110 z-30"
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
