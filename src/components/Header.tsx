import React, { useState } from 'react';
import { LOGO_URL } from '../data/schoolData';

interface HeaderProps {
  onOpenApply: () => void;
  onOpenLogin: () => void;
  onOpenAcademics: () => void;
  onOpenTour: () => void;
  onOpenStory: () => void;
  onOpenCareers: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenApply,
  onOpenLogin,
  onOpenAcademics,
  onOpenTour,
  onOpenStory,
  onOpenCareers,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <>
      <header className="bg-white/95 dark:bg-[#eceef0]/95 backdrop-blur-xl shadow-sm sticky top-0 w-full z-40 border-b border-[#c5c5d4]/20 transition-all duration-300">
        <div className="flex justify-between items-center px-4 sm:px-12 md:px-16 py-3 sm:py-3.5 max-w-7xl mx-auto">
          {/* Brand Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center group">
              <img
                src={LOGO_URL}
                alt="Arqam Grammar Schools Logo"
                className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </a>
          </div>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 font-label-md text-sm text-[#444652]">
            {/* Academics Dropdown */}
            <div className="relative group">
              <button
                onClick={onOpenAcademics}
                className="hover:text-[#002a8f] transition-colors py-2 flex items-center gap-1 cursor-pointer font-medium"
              >
                Academics
                <span className="material-symbols-outlined text-[18px]">expand_more</span>
              </button>
              <div className="absolute top-full left-0 w-52 bg-white rounded-xl shadow-xl border border-gray-100 py-2 hidden group-hover:block transition-all opacity-0 group-hover:opacity-100 z-50">
                <button
                  onClick={onOpenAcademics}
                  className="w-full text-left px-4 py-2.5 text-sm hover:bg-[#f7f9fb] text-[#191c1e] hover:text-[#002a8f] transition-colors"
                >
                  Pre-School Foundation
                </button>
                <button
                  onClick={onOpenAcademics}
                  className="w-full text-left px-4 py-2.5 text-sm hover:bg-[#f7f9fb] text-[#191c1e] hover:text-[#002a8f] transition-colors"
                >
                  Middle School Curriculum
                </button>
                <button
                  onClick={onOpenAcademics}
                  className="w-full text-left px-4 py-2.5 text-sm hover:bg-[#f7f9fb] text-[#191c1e] hover:text-[#002a8f] transition-colors"
                >
                  High School & O/A Levels
                </button>
              </div>
            </div>

            {/* Admissions Dropdown */}
            <div className="relative group">
              <button
                onClick={onOpenApply}
                className="hover:text-[#002a8f] transition-colors py-2 flex items-center gap-1 cursor-pointer font-medium"
              >
                Admissions
                <span className="material-symbols-outlined text-[18px]">expand_more</span>
              </button>
              <div className="absolute top-full left-0 w-52 bg-white rounded-xl shadow-xl border border-gray-100 py-2 hidden group-hover:block transition-all opacity-0 group-hover:opacity-100 z-50">
                <button
                  onClick={onOpenApply}
                  className="w-full text-left px-4 py-2.5 text-sm hover:bg-[#f7f9fb] text-[#191c1e] hover:text-[#002a8f] transition-colors font-medium text-[#E50000]"
                >
                  Apply Online (2026-27)
                </button>
                <button
                  onClick={onOpenTour}
                  className="w-full text-left px-4 py-2.5 text-sm hover:bg-[#f7f9fb] text-[#191c1e] hover:text-[#002a8f] transition-colors"
                >
                  Schedule Campus Tour
                </button>
              </div>
            </div>

            {/* Campus Life */}
            <a
              href="#campus-life"
              className="hover:text-[#002a8f] transition-colors py-2 flex items-center gap-1 font-medium"
            >
              Campus Life
            </a>

            {/* About Us */}
            <button
              onClick={onOpenStory}
              className="hover:text-[#002a8f] transition-colors py-2 font-medium cursor-pointer"
            >
              About Us
            </button>

            {/* Careers */}
            <button
              onClick={onOpenCareers}
              className="hover:text-[#002a8f] transition-colors py-2 font-medium cursor-pointer"
            >
              Careers
            </button>

            {/* Contact */}
            <a
              href="#footer"
              className="hover:text-[#002a8f] transition-colors py-2 font-medium"
            >
              Contact
            </a>
          </nav>

          {/* Trailing Actions */}
          <div className="flex items-center space-x-3 sm:space-x-4">

            <button
              onClick={onOpenLogin}
              className="hidden sm:block text-[#002a8f] font-label-md text-sm px-4 py-2 hover:bg-[#002a8f]/10 rounded-full transition-colors cursor-pointer"
            >
              Login
            </button>
            <button
              onClick={onOpenApply}
              className="hidden sm:inline-block bg-[#E50000] text-white px-6 py-2 rounded-full font-label-md text-sm btn-fill-blue shadow-md hover:shadow-lg active:scale-95 cursor-pointer font-bold tracking-wide"
            >
              Apply Now
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[#002a8f] p-2 bg-[#002a8f]/10 rounded-full cursor-pointer focus:outline-none"
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-200 px-6 py-6 shadow-xl space-y-4 animate-fade-in-up">
            <div className="flex flex-col space-y-3 font-label-md text-base text-[#191c1e]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAcademics();
                }}
                className="text-left py-2 border-b border-gray-100 flex justify-between items-center text-[#002a8f] font-semibold"
              >
                Academics & Curriculum
                <span className="material-symbols-outlined text-[20px]">chevron_right</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenApply();
                }}
                className="text-left py-2 border-b border-gray-100 flex justify-between items-center text-[#E50000] font-bold"
              >
                Online Admissions 2026-27
                <span className="material-symbols-outlined text-[20px]">chevron_right</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTour();
                }}
                className="text-left py-2 border-b border-gray-100 flex justify-between items-center"
              >
                Schedule Campus Tour
                <span className="material-symbols-outlined text-[20px]">chevron_right</span>
              </button>
              <a
                href="#campus-life"
                onClick={() => setMobileMenuOpen(false)}
                className="text-left py-2 border-b border-gray-100 flex justify-between items-center"
              >
                Campus Life
                <span className="material-symbols-outlined text-[20px]">chevron_right</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenStory();
                }}
                className="text-left py-2 border-b border-gray-100 flex justify-between items-center"
              >
                About Arqam
                <span className="material-symbols-outlined text-[20px]">chevron_right</span>
              </button>
            </div>

            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLogin();
                }}
                className="w-full text-center border-2 border-[#002a8f] text-[#002a8f] py-2.5 rounded-full font-label-md text-sm font-semibold"
              >
                Portal Login
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenApply();
                }}
                className="w-full text-center bg-[#E50000] text-white py-3 rounded-full font-label-md text-sm font-bold shadow-md"
              >
                Apply Now
              </button>
            </div>
          </div>
        )}
      </header>

    </>
  );
};
