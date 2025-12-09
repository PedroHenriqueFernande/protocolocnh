import { XCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const painPoints = [
    'Estudar sozinho é confuso e você não sabe por onde começar',
    'Medo real de reprovar na prova teórica',
    'Falta de tempo para estudar com calma',
    'Não sente que tem confiança em dirigir um carro',
    'Evitar burocracia e o caminho lento da autoescola',
    'Não faz sentido pagar valores abusivos por aulas',
];

const PainPointCard = ({ point, index }: { point: string; index: number }) => {
    const { ref, isVisible } = useScrollReveal();

    return (
        <div
            ref={ref}
            className={`bg-white rounded-xl border border-[#FF6B6B] p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <XCircle className="w-12 h-12 text-[#FF6B6B] mb-4" />
            <p className="text-[#1F2D3D] font-medium leading-relaxed">{point}</p>
        </div>
    );
};

export const IdealForYou = () => {
    const { ref, isVisible } = useScrollReveal();

    return (
        <section className="bg-white py-16 px-4 md:py-24">
            <div className="max-w-7xl mx-auto">
                <div
                    ref={ref}
                    className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2D3D] mb-6">
                        Ideal Para Você Que Quer Tirar a CNH Sem Complicação
                    </h2>
                    <p className="text-lg md:text-xl text-[#2D7DD2] max-w-3xl mx-auto leading-relaxed">
                        Se alguma dessas situações te descreve, este protocolo foi feito para você:
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {painPoints.map((point, index) => (
                        <PainPointCard key={index} point={point} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};
