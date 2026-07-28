import React from 'react';
import { DIRECTOR_DATA } from '../data/schoolData';

interface DirectorMessageProps {
  onOpenDirectorModal: () => void;
}

export const DirectorMessage: React.FC<DirectorMessageProps> = ({
  onOpenDirectorModal,
}) => {
  return (
    <section className="py-10 sm:py-14 bg-[#f7f9fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-12 md:px-16">
        <div className="bg-white rounded-[2rem] p-8 md:p-12 lg:p-16 shadow-blue-tint border border-[#c5c5d4]/10 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="w-full lg:w-1/3 flex-shrink-0">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[3/4] max-w-sm mx-auto lg:max-w-none">
              <img
                src={DIRECTOR_DATA.image}
                alt={DIRECTOR_DATA.name}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
          <div className="w-full lg:w-2/3 flex flex-col justify-center text-center lg:text-left">
            <div className="mb-6">
              <h4 className="font-headline-lg text-2xl sm:text-3xl lg:text-4xl text-[#002a8f] mb-1 font-bold">
                {DIRECTOR_DATA.name}
              </h4>
              <p className="font-body-md text-xs sm:text-sm text-[#444652] font-semibold tracking-widest uppercase">
                {DIRECTOR_DATA.role}
              </p>
            </div>
            <blockquote className="font-body-lg text-lg sm:text-2xl text-[#191c1e] mb-8 border-t-4 border-b-4 lg:border-t-0 lg:border-b-0 lg:border-l-4 border-[#E50000] py-6 lg:py-2 lg:pl-8 italic leading-relaxed">
              {DIRECTOR_DATA.quote}
            </blockquote>
            <button
              onClick={onOpenDirectorModal}
              className="text-[#002a8f] font-label-md text-sm sm:text-base flex items-center justify-center lg:justify-start gap-2 hover:gap-3 transition-all duration-300 w-fit mx-auto lg:mx-0 bg-[#002a8f]/5 px-6 py-3 rounded-full hover:bg-[#002a8f]/10 font-bold cursor-pointer"
            >
              Read Full Message{' '}
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
