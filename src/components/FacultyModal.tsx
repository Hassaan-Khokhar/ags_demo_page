import React from 'react';
import { FacultyMember } from '../types';

interface FacultyModalProps {
  faculty: FacultyMember | null;
  onClose: () => void;
}

export const FacultyModal: React.FC<FacultyModalProps> = ({ faculty, onClose }) => {
  if (!faculty) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative my-8 animate-fade-in-up">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 bg-gray-100 rounded-full w-9 h-9 flex items-center justify-center cursor-pointer"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="text-center mb-6">
          <img
            src={faculty.image}
            alt={faculty.name}
            className="w-28 h-36 object-cover rounded-2xl mx-auto mb-4 shadow-lg border-2 border-[#002a8f]"
          />
          <h3 className="font-headline-md text-2xl text-[#002a8f] font-bold">
            {faculty.name}
          </h3>
          <p className="font-body-sm text-sm text-[#E50000] font-semibold">
            {faculty.role}
          </p>
        </div>

        <div className="space-y-3 bg-[#f7f9fb] p-4 rounded-2xl border border-gray-100 mb-6 text-sm">
          <div>
            <span className="font-bold text-[#002a8f]">Education: </span>
            <span className="text-[#444652]">{faculty.education}</span>
          </div>
          <div>
            <span className="font-bold text-[#002a8f]">Experience: </span>
            <span className="text-[#444652]">{faculty.experience}</span>
          </div>
          <div>
            <span className="font-bold text-[#002a8f]">Specialization: </span>
            <span className="text-[#444652]">{faculty.bio}</span>
          </div>
        </div>

        <div className="flex gap-3">
          <a
            href={`mailto:${faculty.email}`}
            className="w-full bg-[#002a8f] text-white py-3 rounded-full font-label-md text-sm font-semibold flex items-center justify-center gap-2 btn-fill-red transition-colors"
          >
            <span className="material-symbols-outlined text-sm">mail</span>
            Contact {faculty.name.split(' ')[0]}
          </a>
        </div>
      </div>
    </div>
  );
};

