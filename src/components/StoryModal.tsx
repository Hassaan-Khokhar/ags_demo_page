import React from 'react';

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({ isOpen, onClose }) => {
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

        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
          <div className="w-12 h-12 rounded-full bg-[#002a8f]/10 text-[#002a8f] flex items-center justify-center">
            <span className="material-symbols-outlined text-[30px]">history_edu</span>
          </div>
          <div>
            <h3 className="font-headline-lg text-2xl sm:text-3xl text-[#002a8f] font-bold">
              The Story of Arqam
            </h3>
            <p className="font-body-sm text-xs text-[#E50000] font-bold">
              Founded 1998 — 28 Years of Shaping Leaders
            </p>
          </div>
        </div>

        <div className="space-y-4 font-body-md text-sm text-[#191c1e] leading-relaxed">
          <p>
            Founded in 1998 with a visionary commitment to holistic education, Arqam Grammar Schools started as a single campus dedicated to combining academic rigor with moral integrity.
          </p>
          <p>
            Over the past quarter-century, Arqam has grown into an institution housing over 5,000 alumni across Pakistan, the Middle East, Europe, and North America. Our graduates serve as doctors, software engineers, entrepreneurs, diplomats, and creative pioneers.
          </p>

          <div className="bg-[#f7f9fb] p-5 rounded-2xl border border-gray-200 my-4 space-y-3">
            <h4 className="font-headline-sm text-sm text-[#002a8f] font-bold uppercase tracking-wider">
              Our 3 Pillars of Education
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-white p-3 rounded-xl shadow-sm text-center">
                <span className="material-symbols-outlined text-[#002a8f] text-2xl mb-1">psychology</span>
                <div className="font-bold text-xs text-[#002a8f]">Intellectual Rigor</div>
                <div className="text-[11px] text-gray-500">STEM, Logic & Research</div>
              </div>
              <div className="bg-white p-3 rounded-xl shadow-sm text-center">
                <span className="material-symbols-outlined text-[#E50000] text-2xl mb-1">diversity_3</span>
                <div className="font-bold text-xs text-[#E50000]">Moral Integrity</div>
                <div className="text-[11px] text-gray-500">Ethics, Empathy & Civic Duty</div>
              </div>
              <div className="bg-white p-3 rounded-xl shadow-sm text-center">
                <span className="material-symbols-outlined text-[#002a8f] text-2xl mb-1">military_tech</span>
                <div className="font-bold text-xs text-[#002a8f]">Global Vision</div>
                <div className="text-[11px] text-gray-500">Leadership & Innovation</div>
              </div>
            </div>
          </div>

          <p>
            We remain committed to continuous innovation, offering smart digital classrooms, robotics laboratories, and individualized university career counseling.
          </p>
        </div>

        <div className="mt-8 pt-4 border-t border-gray-100 flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#002a8f] text-white px-8 py-2.5 rounded-full font-label-md text-sm font-semibold btn-fill-red transition-colors cursor-pointer"
          >
            Close Story
          </button>
        </div>
      </div>
    </div>
  );
};

