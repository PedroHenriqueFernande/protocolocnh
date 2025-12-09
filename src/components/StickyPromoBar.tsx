import { useState, useEffect } from 'react';

export const StickyPromoBar = () => {
    const [dateStr, setDateStr] = useState('');

    useEffect(() => {
        const today = new Date();
        const day = today.getDate().toString().padStart(2, '0');
        const month = (today.getMonth() + 1).toString().padStart(2, '0');
        setDateStr(`${day}/${month}`);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full z-[100] bg-[#1F2D3D]/55 backdrop-blur-sm py-2 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <p className="text-white font-medium text-sm md:text-base">
                    Esta Oferta acaba Dia <span className="font-bold text-[#FF7A3D]">{dateStr}</span>
                </p>
            </div>
        </div>
    );
};
