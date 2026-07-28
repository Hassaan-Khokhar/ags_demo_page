import React from 'react';
import { DIRECTOR_DATA } from '../data/schoolData';

interface DirectorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DirectorModal: React.FC<DirectorModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl p-6 sm:p-10 max-w-2xl w-full shadow-2xl relative my-8 animate-fade-in-up">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 bg-gray-100 rounded-full w-9 h-9 flex items-center justify-center cursor-pointer"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6 pb-6 border-b border-gray-100">
          <img
            src={DIRECTOR_DATA.image}
            alt={DIRECTOR_DATA.name}
            className="w-24 h-32 object-cover rounded-2xl shadow-md border-2 border-[#002a8f]"
          />
          <div>
            <h3 className="font-headline-lg text-2xl text-[#002a8f] font-bold">
              {DIRECTOR_DATA.name}
            </h3>
            <p className="font-body-sm text-xs text-[#E50000] font-bold tracking-widest uppercase mb-3">
              {DIRECTOR_DATA.role}
            </p>
            <p className="font-body-sm text-xs text-gray-500 italic">
              "Dedicated to academic excellence & ethical leadership since 1998."
            </p>
          </div>
        </div>

        <div className="space-y-4 font-body-md text-sm text-[#191c1e] leading-relaxed whitespace-pre-line">
          {DIRECTOR_DATA.fullMessage}
        </div>

        <div className="mt-8 pt-4 border-t border-gray-100 flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#002a8f] text-white px-8 py-2.5 rounded-full font-label-md text-sm font-semibold btn-fill-red transition-colors cursor-pointer"
          >
            Close Message
          </button>
        </div>
      </div>
    </div>
  );
};

