import React, { useState } from 'react';
import { ADVANTAGES } from '../data/schoolData';
import { AdvantageCard } from '../types';

export const AdvantageSection: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<AdvantageCard | null>(null);

  return (
    <section className="py-10 sm:py-14 bg-[#f7f9fb]" id="advantages">
      <div className="max-w-7xl mx-auto px-4 sm:px-12 md:px-16">
        <div className="text-center mb-8 sm:mb-12 max-w-2xl mx-auto">
          <h2 className="font-headline-lg text-3xl sm:text-4xl text-[#002a8f] mb-4 font-bold">
            The AGS Advantage
          </h2>
          <p className="font-body-md text-base text-[#444652]">
            We combine rigorous academics with character building to develop well-rounded future leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {ADVANTAGES.map((card) => {
            const isSecondary = card.colorTheme === 'secondary';
            return (
              <div
                key={card.id}
                onClick={() => setSelectedCard(card)}
                className="bg-white rounded-3xl p-8 shadow-blue-tint hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border border-[#c5c5d4]/20 flex flex-col items-start group cursor-pointer relative overflow-hidden"
              >
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 transition-colors duration-300 ${
                    isSecondary
                      ? 'bg-[#E50000]/10 group-hover:bg-[#E50000]'
                      : 'bg-[#002a8f]/10 group-hover:bg-[#002a8f]'
                  }`}
                >
                  <span
                    className={`material-symbols-outlined transition-colors text-[28px] ${
                      isSecondary
                        ? 'text-[#E50000] group-hover:text-white'
                        : 'text-[#002a8f] group-hover:text-white'
                    }`}
                  >
                    {card.icon}
                  </span>
                </div>
                <h3 className="font-headline-sm text-xl sm:text-2xl text-[#002a8f] mb-3 font-semibold">
                  {card.title}
                </h3>
                <p className="font-body-sm text-sm sm:text-base text-[#444652] flex-grow leading-relaxed mb-4">
                  {card.description}
                </p>
                <div className="text-[#002a8f] font-label-md text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Advantage Modal */}
      {selectedCard && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative animate-fade-in-up">
            <button
              onClick={() => setSelectedCard(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 bg-gray-100 rounded-full w-9 h-9 flex items-center justify-center cursor-pointer"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <div className="w-12 h-12 rounded-full bg-[#002a8f]/10 flex items-center justify-center mb-4 text-[#002a8f]">
              <span className="material-symbols-outlined text-[28px]">{selectedCard.icon}</span>
            </div>
            <h3 className="font-headline-md text-2xl text-[#002a8f] mb-3 font-bold">
              {selectedCard.title}
            </h3>
            <p className="font-body-md text-base text-[#444652] mb-4 leading-relaxed">
              {selectedCard.description}
            </p>
            <div className="bg-[#f7f9fb] p-4 rounded-2xl border border-gray-100 text-sm text-[#191c1e] leading-relaxed mb-6">
              {selectedCard.fullContent}
            </div>
            <button
              onClick={() => setSelectedCard(null)}
              className="w-full bg-[#002a8f] text-white py-3 rounded-full font-label-md text-sm font-semibold cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
