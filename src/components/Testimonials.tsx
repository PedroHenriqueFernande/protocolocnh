import { Quote } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const testimonials = [
    {
        name: 'Maria Silva',
        age: 23,
        city: 'São Paulo, SP',
        text: 'Consegui passar na prova teórica de primeira! Os mapas mentais e o audiobook me ajudaram muito a estudar no ônibus indo para o trabalho. Em 2 meses já estava com minha CNH na mão.',
        rating: 5,
    },
    {
        name: 'João Pedro',
        age: 19,
        city: 'Rio de Janeiro, RJ',
        text: 'Eu tinha muito medo de reprovar, mas o protocolo me deixou super preparado. As aulas teóricas são muito claras e os testes interativos me deram confiança. Passei com 0 erros!',
        rating: 5,
    },
    {
        name: 'Ana Carolina',
        age: 28,
        city: 'Belo Horizonte, MG',
        text: 'Economizei muito tempo e dinheiro! Estudei no meu ritmo e o guia prático me ajudou demais nas primeiras aulas de direção. Recomendo para todos que querem tirar a CNH sem estresse.',
        rating: 5,
    },
];

const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) => {
    const { ref, isVisible } = useScrollReveal();

    return (
        <div
            ref={ref}
            className={`bg-white rounded-2xl border border-[#E6EEF5] p-6 shadow-lg hover:shadow-xl transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            style={{ transitionDelay: `${index * 150}ms` }}
        >
            <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#4FA3FF] to-[#2D7DD2] rounded-full flex items-center justify-center flex-shrink-0">
                    <Quote className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                    <h4 className="text-lg font-bold text-[#1F2D3D]">{testimonial.name}</h4>
                    <p className="text-sm text-[#2D7DD2]">
                        {testimonial.age} anos • {testimonial.city}
                    </p>
                </div>
            </div>

            <p className="text-[#1F2D3D] leading-relaxed mb-4">"{testimonial.text}"</p>

            <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-[#FFD700] text-xl">★</span>
                ))}
            </div>
        </div>
    );
};

export const Testimonials = () => {
    const { ref, isVisible } = useScrollReveal();

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
                        Essas pessoas adquiriram nossos materiais de estudo antes mesmo de disponibilizarmos nosso agente exclusivo, e mesmo assim conseguiram suas aprovações.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};
