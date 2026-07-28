import React from 'react';

interface WelcomeSectionProps {
  onOpenStory: () => void;
}

export const WelcomeSection: React.FC<WelcomeSectionProps> = ({ onOpenStory }) => {
  return (
    <section className="py-16 sm:py-24 bg-[#f7f9fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-12 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-5xl text-[#002a8f] mb-6 font-bold">
              Welcome to AGS
            </h2>
            <p className="font-body-md sm:font-body-lg text-base sm:text-lg text-[#444652] mb-8 leading-relaxed">
              At Arqam Grammar Schools, we believe in nurturing the whole child. Our environment is designed to inspire curiosity, foster resilience, and build a strong foundation for lifelong learning. With a blend of tradition and innovation, we prepare students not just for academic success, but to become thoughtful leaders of tomorrow.
            </p>
            <button
              onClick={onOpenStory}
              className="bg-[#002a8f] text-white px-8 py-3.5 rounded-full font-label-md text-sm sm:text-base inline-block shadow-md hover:shadow-lg hover:-translate-y-1 btn-fill-red transition-all duration-300 w-full sm:w-auto text-center font-semibold cursor-pointer"
            >
              Read Our Story
            </button>
          </div>
          <div className="order-1 lg:order-2 rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] sm:aspect-auto">
            <img
              src="https://arqamgrammarschools.edu.pk/storage/images/IZXfc3WFbhjxNdVNcTUczPyND5sqJvs6z0VVVTr4.jpg"
              alt="Arqam Grammar School main building"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

