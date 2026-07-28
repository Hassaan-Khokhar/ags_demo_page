import React from 'react';
import { FACULTY } from '../data/schoolData';
import { FacultyMember } from '../types';

interface FacultyShowcaseProps {
  onSelectFaculty: (faculty: FacultyMember) => void;
}

export const FacultyShowcase: React.FC<FacultyShowcaseProps> = ({
  onSelectFaculty,
}) => {
  return (
    <section className="py-10 sm:py-14 bg-[#f7f9fb]" id="faculty">
      <div className="max-w-7xl mx-auto px-4 sm:px-12 md:px-16">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-headline-lg text-3xl sm:text-4xl text-[#002a8f] mb-4 font-bold">
            Meet Our Faculty
          </h2>
          <p className="font-body-md text-base text-[#444652]">
            Exceptional educators committed to your child's success.
          </p>
        </div>

        <div className="flex overflow-x-auto pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 md:grid md:grid-cols-4 gap-6 no-scrollbar snap-x snap-mandatory">
          {FACULTY.map((member) => (
            <div
              key={member.id}
              onClick={() => onSelectFaculty(member)}
              className="relative rounded-3xl overflow-hidden group aspect-[3/4] min-w-[260px] w-[75vw] md:w-auto md:min-w-0 snap-center shadow-lg cursor-pointer transform transition-transform duration-500 hover:-translate-y-2"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002a8f]/90 via-[#002a8f]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 w-full text-center">
                  <h4 className="font-headline-sm text-lg sm:text-xl text-white mb-1 font-bold">
                    {member.name}
                  </h4>
                  <p className="font-body-sm text-xs sm:text-sm text-white/90">
                    {member.role}
                  </p>
                  <span className="mt-2 inline-block text-[11px] font-label-md text-white/80 bg-white/20 backdrop-blur px-3 py-1 rounded-full">
                    View Profile
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
