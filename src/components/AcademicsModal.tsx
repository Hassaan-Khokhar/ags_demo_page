import React, { useState } from 'react';
import { ACADEMIC_PROGRAMS } from '../data/schoolData';

interface AcademicsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenApply: () => void;
}

export const AcademicsModal: React.FC<AcademicsModalProps> = ({
  isOpen,
  onClose,
  onOpenApply,
}) => {
  const [selectedProgram, setSelectedProgram] = useState(ACADEMIC_PROGRAMS[0]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl p-6 sm:p-10 max-w-3xl w-full shadow-2xl relative my-8 animate-fade-in-up">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 bg-gray-100 rounded-full w-9 h-9 flex items-center justify-center cursor-pointer"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-[#002a8f]/10 text-[#002a8f] flex items-center justify-center">
            <span className="material-symbols-outlined text-[24px]">menu_book</span>
          </div>
          <div>
            <h3 className="font-headline-lg text-2xl sm:text-3xl text-[#002a8f] font-bold">
              Academics & Curriculum
            </h3>
            <p className="font-body-sm text-xs text-[#444652]">
              Explore our structured educational pathways from Pre-School to A-Levels
            </p>
          </div>
        </div>

        {/* Tab Headers */}
        <div className="grid grid-cols-3 gap-2 bg-[#f7f9fb] p-1.5 rounded-2xl mb-6 border border-gray-200">
          {ACADEMIC_PROGRAMS.map((program) => (
            <button
              key={program.id}
              onClick={() => setSelectedProgram(program)}
              className={`py-2.5 px-3 rounded-xl font-label-md text-xs sm:text-sm transition-all cursor-pointer ${
                selectedProgram.id === program.id
                  ? 'bg-[#002a8f] text-white shadow-md font-bold'
                  : 'text-gray-600 hover:text-[#002a8f]'
              }`}
            >
              {program.title.split(' ')[0]} Program
            </button>
          ))}
        </div>

        {/* Active Program Details */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-gray-100 pb-4">
            <div>
              <h4 className="font-headline-md text-xl sm:text-2xl text-[#002a8f] font-bold">
                {selectedProgram.title}
              </h4>
              <p className="font-body-sm text-xs text-[#E50000] font-bold">
                Target Age / Level: {selectedProgram.grades}
              </p>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenApply();
              }}
              className="bg-[#E50000] text-white text-xs px-5 py-2.5 rounded-full font-label-md font-bold hover:bg-[#bc0100] transition-colors cursor-pointer"
            >
              Apply for this Grade
            </button>
          </div>

          <p className="font-body-md text-sm sm:text-base text-[#444652] leading-relaxed">
            {selectedProgram.description}
          </p>

          <div>
            <h5 className="font-headline-sm text-sm text-[#002a8f] font-bold uppercase tracking-wider mb-3">
              Core Subjects & Modules
            </h5>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {selectedProgram.subjects.map((sub, idx) => (
                <div
                  key={idx}
                  className="bg-[#f7f9fb] border border-gray-200 p-3 rounded-xl text-xs font-semibold text-[#191c1e] text-center"
                >
                  {sub}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h5 className="font-headline-sm text-sm text-[#002a8f] font-bold uppercase tracking-wider mb-3">
              Program Highlights
            </h5>
            <ul className="space-y-2 text-xs sm:text-sm text-[#444652]">
              {selectedProgram.features.map((feat, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#E50000] text-base">
                    check_circle
                  </span>
                  {feat}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-gray-100 flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-100 text-gray-700 px-6 py-2.5 rounded-full font-label-md text-sm font-semibold hover:bg-gray-200 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
