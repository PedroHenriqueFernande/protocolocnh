import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Testimonials = () => {
    const { ref, isVisible } = useScrollReveal();
    const [currentIndex, setCurrentIndex] = useState(0);

    const slide1Images = ['/d1.png', '/d2.png', '/d3.png'];
    const slide2Images = ['/d4.png'];

    const totalSlides = 2;

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    return (
        <section className="bg-[#F5F8FA] py-16 px-2 sm:px-4 md:py-24">
            <div className="max-w-7xl mx-auto">
                <div
                    ref={ref}
                    className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2D3D] mb-4">
                        Veja quem já conseguiu sua CNH
                    </h2>
                    <p className="text-lg md:text-xl text-[#2D7DD2] max-w-4xl mx-auto">
                        Essas pessoas adquiriram nossos materiais de estudo junto com o agente IA e conseguiram suas aprovações.
                    </p>
                </div>

                <div className="relative group px-4 md:px-16">
                    {/* Content Area */}
                    <div className={`transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        {currentIndex === 0 ? (
                            // Slide 1: Grid of 3 images
                            <div className="grid gap-2 sm:gap-3 max-w-lg mx-auto transition-opacity duration-500 ease-in-out">
                                {slide1Images.map((imgSrc, index) => (
                                    <div
                                        key={`slide1-${index}`}
                                        className="transform transition-all duration-500 hover:scale-105"
                                    >
                                        <img
                                            src={imgSrc}
                                            alt={`Depoimento ${index + 1}`}
                                            className="w-full h-auto shadow-lg border border-[#E6EEF5]"
                                        />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            // Slide 2: Single centered image
                            <div className="max-w-5xl mx-auto">
                                <div className="transform transition-all duration-500">
                                    <div className="relative aspect-[3/4] sm:aspect-auto">
                                        <img
                                            src={slide2Images[0]}
                                            alt="Depoimento Extra"
                                            className="w-full h-auto shadow-xl border-2 border-white"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#2D7DD2] p-3 rounded-full shadow-lg transition-all duration-300 transform border border-[#E6EEF5] hover:scale-110 z-10"
                        aria-label="Anterior"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={next}
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#2D7DD2] p-3 rounded-full shadow-lg transition-all duration-300 transform border border-[#E6EEF5] hover:scale-110 z-10"
                        aria-label="Próximo"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-8">
                        {[0, 1].map((index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-[#2D7DD2] w-6' : 'bg-[#CBD5E0] hover:bg-[#A0AEC0]'
                                    }`}
                                aria-label={`Ir para slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
