import React from 'react';
import { STATS } from '../data/schoolData';

export const StatsRow: React.FC = () => {
  return (
    <section className="bg-[#002a8f] py-8 sm:py-12 relative z-20 shadow-blue-tint text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-12 md:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 md:gap-8 divide-x-0 md:divide-x divide-white/20">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className={`text-center px-2 sm:px-4 ${
                idx === 1 ? 'border-l border-white/20 md:border-none' : ''
              } ${idx >= 2 ? 'border-t md:border-t-0 border-white/20 pt-6 md:pt-0' : ''} ${
                idx === 3 ? 'border-l md:border-l-0 border-white/20' : ''
              }`}
            >
              <div className="font-headline-xl text-3xl sm:text-5xl md:text-[48px] text-white mb-1 sm:mb-2 flex items-center justify-center font-extrabold tracking-tight">
                {stat.number}
                <span className="text-[#E50000]">{stat.suffix}</span>
              </div>
              <div className="font-label-md text-[10px] sm:text-xs text-white/80 uppercase tracking-widest font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
