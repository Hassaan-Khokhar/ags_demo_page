import React from 'react';
import { LOGO_URL } from '../data/schoolData';

interface FooterProps {
  onOpenApply: () => void;
  onOpenAcademics: () => void;
  onOpenTour: () => void;
  onOpenStory: () => void;
  onOpenComingSoon: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenApply,
  onOpenAcademics,
  onOpenTour,
  onOpenStory,
  onOpenComingSoon,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2d354a] text-[#969eb7] w-full rounded-t-3xl sm:rounded-t-[3rem] border-t border-white/10 mt-0" id="footer">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 sm:gap-8 px-4 sm:px-12 md:px-16 py-16 max-w-7xl mx-auto">
        {/* Column 1: Brand & Social */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col pr-0 sm:pr-8">
          <a href="#" onClick={scrollToTop} className="mb-6 flex items-center w-fit">
            <img
              src={LOGO_URL}
              alt="Arqam Grammar Schools Logo"
              className="h-14 sm:h-16 w-auto object-contain bg-white p-2 rounded-xl"
            />
          </a>
          <p className="font-body-sm text-sm text-[#969eb7] mb-8 max-w-sm leading-relaxed">
            Dedicated to nurturing excellence, integrity, and leadership since 1998. We provide a strong foundation for lifelong learning.
          </p>
          <div className="flex space-x-3">
            <a
              href="#"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#E50000] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#E50000] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a
              href="#"
              aria-label="X"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#E50000] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#E50000] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#E50000] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="col-span-1 flex flex-col">
          <h4 className="font-headline-sm text-lg text-white mb-6 font-semibold">
            Academics
          </h4>
          <ul className="space-y-3 font-body-sm text-sm">
            <li>
              <button onClick={onOpenAcademics} className="hover:text-white transition-colors hover:underline text-left cursor-pointer">
                Pre-School
              </button>
            </li>
            <li>
              <button onClick={onOpenAcademics} className="hover:text-white transition-colors hover:underline text-left cursor-pointer">
                Middle School
              </button>
            </li>
            <li>
              <button onClick={onOpenAcademics} className="hover:text-white transition-colors hover:underline text-left cursor-pointer">
                High School
              </button>
            </li>
            <li>
              <button onClick={onOpenAcademics} className="hover:text-white transition-colors hover:underline text-left cursor-pointer">
                Curriculum Framework
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Admissions */}
        <div className="col-span-1 flex flex-col">
          <h4 className="font-headline-sm text-lg text-white mb-6 font-semibold">
            Admissions
          </h4>
          <ul className="space-y-3 font-body-sm text-sm">
            <li>
              <button onClick={onOpenApply} className="hover:text-white transition-colors hover:underline text-left cursor-pointer font-bold text-[#E50000]">
                Apply Online
              </button>
            </li>
            <li>
              <button onClick={onOpenComingSoon} className="hover:text-white transition-colors hover:underline text-left cursor-pointer">
                Fee Structure
              </button>
            </li>
            <li>
              <button onClick={onOpenComingSoon} className="hover:text-white transition-colors hover:underline text-left cursor-pointer">
                Scholarships
              </button>
            </li>
            <li>
              <button onClick={onOpenTour} className="hover:text-white transition-colors hover:underline text-left cursor-pointer">
                Book a Tour
              </button>
            </li>
          </ul>
        </div>

        {/* Column 4: Legal & Info */}
        <div className="col-span-1 flex flex-col">
          <h4 className="font-headline-sm text-lg text-white mb-6 font-semibold">
            Legal & Info
          </h4>
          <ul className="space-y-3 font-body-sm text-sm">
            <li>
              <button onClick={onOpenStory} className="hover:text-white transition-colors hover:underline text-left cursor-pointer">
                About Arqam
              </button>
            </li>
            <li>
              <button onClick={onOpenComingSoon} className="hover:text-white transition-colors hover:underline text-left cursor-pointer">
                Privacy Policy
              </button>
            </li>
            <li>
              <button onClick={onOpenComingSoon} className="hover:text-white transition-colors hover:underline text-left cursor-pointer">
                Terms of Service
              </button>
            </li>
            <li>
              <button onClick={onOpenComingSoon} className="hover:text-white transition-colors hover:underline text-left cursor-pointer">
                Alumni
              </button>
            </li>
            <li>
              <button onClick={onOpenComingSoon} className="hover:text-white transition-colors hover:underline text-left cursor-pointer">
                Careers
              </button>
            </li>
          </ul>
        </div>

        {/* Column 5: Our Campuses */}
        <div className="col-span-1 flex flex-col">
          <h4 className="font-headline-sm text-lg text-white mb-6 font-semibold">
            Our Campuses
          </h4>
          <ul className="space-y-4 font-body-sm text-sm">
            <li className="flex flex-col gap-1">
              <span className="font-semibold text-white">Midh Ranjha Campus</span>
              <span className="text-[#969eb7] leading-relaxed">Arqam Grammar School, A-1 Nawazabad, Midh Ranjha, Sargodha</span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="font-semibold text-white">Kot Momin Campus</span>
              <span className="text-[#969eb7] leading-relaxed">Arqam Grammer School, Kot Momin Campus, Kot Momin, Sargodha</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Bottom */}
      <div className="border-t border-white/10 py-8 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-12 md:px-16 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="font-body-sm text-xs sm:text-sm text-[#969eb7]">
            © 2026 Arqam Grammar Schools. A Project of Arqam Educational Welfare Society. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-white bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-colors cursor-pointer"
          >
            Back to Top
            <span className="material-symbols-outlined text-sm">arrow_upward</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
