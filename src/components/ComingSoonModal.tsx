import React from 'react';
import { LOGO_URL } from '../data/schoolData';

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ComingSoonModal: React.FC<ComingSoonModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl p-6 sm:p-10 max-w-md w-full shadow-2xl relative my-8 animate-fade-in-up text-center border-t-8 border-[#002a8f]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 bg-gray-100 rounded-full w-9 h-9 flex items-center justify-center cursor-pointer"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="flex items-center justify-center gap-6 mx-auto mb-6 mt-2">
          <img src="/softage-logo.png" alt="Softage Lab Logo" className="h-16 w-auto object-contain" />
          <div className="h-10 w-px bg-gray-300"></div>
          <img src={LOGO_URL} alt="AGS Logo" className="h-16 w-auto object-contain" />
        </div>
        
        <h3 className="font-headline-lg text-2xl sm:text-3xl text-[#002a8f] font-bold mb-4">
          Site Under Production!
        </h3>
        
        <p className="font-body-md text-sm sm:text-base text-[#444652] leading-relaxed mb-8">
          This is a demo page by Softage Labs for AGS. The full functionality of this page will be built soon. Stay tuned!
        </p>

        <button
          onClick={onClose}
          className="w-full bg-[#E50000] text-white py-3.5 rounded-full font-label-md text-sm font-semibold btn-fill-blue transition-all shadow-md cursor-pointer"
        >
          Got it
        </button>
      </div>
    </div>
  );
};
