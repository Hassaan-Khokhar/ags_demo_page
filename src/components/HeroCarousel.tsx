import React, { useState, useEffect } from 'react';
import { HERO_SLIDES } from '../data/schoolData';

interface HeroCarouselProps {
  onOpenAcademics: () => void;
  onOpenTour: () => void;
  onOpenApply: () => void;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({
  onOpenAcademics,
  onOpenTour,
  onOpenApply,
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlideIndex];

  return (
    <section className="relative min-h-[70vh] sm:min-h-[85vh] w-full overflow-hidden bg-[#eceef0]" id="hero-carousel">
      {/* Background Slides */}
      {HERO_SLIDES.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlideIndex ? 'opacity-100 z-20 pointer-events-auto' : 'opacity-0 z-10 pointer-events-none'
          }`}
        >
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-black/45 z-10"></div>
          <div
            className={`absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] ease-out ${
              index === currentSlideIndex ? 'scale-105' : 'scale-100'
            }`}
            style={{ backgroundImage: `url('${item.image}')` }}
          ></div>

          {/* Slide Content */}
          <div className="relative z-20 h-full flex flex-col justify-center px-4 sm:px-12 md:px-16 max-w-7xl mx-auto py-12 sm:py-20">
            <div className="max-w-3xl">
              <span className="inline-block py-1.5 px-4 rounded-full bg-[#002a8f]/90 backdrop-blur text-white font-label-md text-xs sm:text-sm mb-6 shadow-blue-tint tracking-wide">
                {item.badge}
              </span>
              <h1 className="font-headline-xl text-3xl sm:text-5xl md:text-[64px] md:leading-[72px] text-white mb-6 drop-shadow-lg font-bold">
                {item.titleLine1}
                <br />
                Shaping the <span className="text-[#E50000]">{item.titleHighlight}</span>
              </h1>
              <p className="font-body-md sm:font-body-lg text-base sm:text-lg text-white/90 mb-8 max-w-xl drop-shadow-md leading-relaxed">
                {item.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={index === 1 ? onOpenApply : onOpenAcademics}
                  className="bg-[#002a8f] text-white px-8 py-3.5 rounded-full font-label-md text-sm sm:text-base text-center shadow-lg hover:-translate-y-1 btn-fill-red transition-all duration-300 font-semibold cursor-pointer"
                >
                  {item.ctaPrimaryText}
                </button>
                <button
                  onClick={onOpenTour}
                  className="bg-transparent border-2 border-white text-white px-8 py-3.5 rounded-full font-label-md text-sm sm:text-base text-center hover:bg-white hover:text-[#002a8f] transition-all duration-300 font-semibold cursor-pointer"
                >
                  {item.ctaSecondaryText}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Indicators / Progress Bar */}
      <div className="absolute bottom-8 left-0 w-full z-30 px-4 sm:px-12 md:px-16">
        <div className="max-w-7xl mx-auto flex gap-3">
          {HERO_SLIDES.map((_, idx) => (
            <div
              key={idx}
              onClick={() => setCurrentSlideIndex(idx)}
              className="h-1.5 flex-1 bg-white/30 rounded-full overflow-hidden backdrop-blur cursor-pointer hover:bg-white/50 transition-colors"
              title={`Go to slide ${idx + 1}`}
            >
              <div
                className={`h-full bg-white transition-all duration-300 ${
                  idx === currentSlideIndex ? 'w-full' : idx < currentSlideIndex ? 'w-full opacity-60' : 'w-0'
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

