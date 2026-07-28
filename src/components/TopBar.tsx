import React from 'react';

interface TopBarProps {
  onOpenApply: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onOpenApply }) => {
  return (
    <div className="bg-[#002a8f] text-white font-label-md text-xs sm:text-[13px] py-2 px-4 sm:px-12 md:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-50 relative border-b border-white/10">
      <div className="flex items-center space-x-4 mb-1.5 sm:mb-0">
        <a
          href="tel:+15551234567"
          className="flex items-center gap-1.5 hover:text-white/80 transition-colors"
        >
          <span className="material-symbols-outlined text-[14px] sm:text-[16px]">call</span>
          +1 (555) 123-4567
        </a>
        <a
          href="mailto:info@arqamgrammar.edu"
          className="hidden sm:flex items-center gap-1.5 hover:text-white/80 transition-colors"
        >
          <span className="material-symbols-outlined text-[16px]">mail</span>
          info@arqamgrammar.edu
        </a>
      </div>
      <div className="flex items-center">
        <button
          onClick={onOpenApply}
          className="bg-[#E50000] px-3 py-1 rounded-full text-white animate-pulse text-[11px] sm:text-[13px] font-bold tracking-wide hover:opacity-90 transition-opacity shadow-sm cursor-pointer"
        >
          Admissions 2026-2027 Open
        </button>
      </div>
    </div>
  );
};
