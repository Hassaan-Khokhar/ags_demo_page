import React, { useState } from 'react';
import { FACULTY, ACADEMIC_PROGRAMS, GALLERY_ITEMS } from '../data/schoolData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectFaculty: (faculty: any) => void;
  onOpenAcademics: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectFaculty,
  onOpenAcademics,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filteredFaculty = FACULTY.filter(
    (f) =>
      f.name.toLowerCase().includes(query.toLowerCase()) ||
      f.role.toLowerCase().includes(query.toLowerCase())
  );

  const filteredPrograms = ACADEMIC_PROGRAMS.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.description.toLowerCase().includes(query.toLowerCase())
  );

  const filteredGallery = GALLERY_ITEMS.filter(
    (g) =>
      g.title.toLowerCase().includes(query.toLowerCase()) ||
      g.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-20 px-4">
      <div className="bg-white rounded-3xl p-6 max-w-xl w-full shadow-2xl relative animate-fade-in-up max-h-[80vh] flex flex-col">
        <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
          <span className="material-symbols-outlined text-[#002a8f] text-[28px]">search</span>
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search faculty, programs, admissions, events..."
            className="w-full text-base sm:text-lg focus:outline-none text-[#191c1e] font-body-md"
          />
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 bg-gray-100 rounded-full p-1.5 cursor-pointer"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        <div className="overflow-y-auto mt-4 space-y-4 pr-1 text-sm">
          {query.trim() === '' ? (
            <div className="text-gray-400 text-center py-8">
              Type keywords like <span className="font-semibold text-[#002a8f]">"Science"</span>, <span className="font-semibold text-[#002a8f]">"Jenkins"</span>, or <span className="font-semibold text-[#002a8f]">"Pre-School"</span> to search...
            </div>
          ) : (
            <>
              {/* Faculty Results */}
              {filteredFaculty.length > 0 && (
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-[#002a8f] mb-2">
                    Faculty
                  </h4>
                  <div className="space-y-2">
                    {filteredFaculty.map((f) => (
                      <div
                        key={f.id}
                        onClick={() => {
                          onClose();
                          onSelectFaculty(f);
                        }}
                        className="p-3 bg-[#f7f9fb] hover:bg-[#002a8f]/10 rounded-xl flex items-center justify-between cursor-pointer"
                      >
                        <div className="font-medium text-[#191c1e]">{f.name}</div>
                        <div className="text-xs text-[#E50000]">{f.role}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Programs Results */}
              {filteredPrograms.length > 0 && (
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-[#002a8f] mb-2">
                    Academic Programs
                  </h4>
                  <div className="space-y-2">
                    {filteredPrograms.map((p) => (
                      <div
                        key={p.id}
                        onClick={() => {
                          onClose();
                          onOpenAcademics();
                        }}
                        className="p-3 bg-[#f7f9fb] hover:bg-[#002a8f]/10 rounded-xl flex items-center justify-between cursor-pointer"
                      >
                        <div className="font-medium text-[#191c1e]">{p.title}</div>
                        <div className="text-xs text-[#002a8f]">{p.grades}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Gallery Results */}
              {filteredGallery.length > 0 && (
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-[#002a8f] mb-2">
                    Campus Life
                  </h4>
                  <div className="space-y-2">
                    {filteredGallery.map((g) => (
                      <div
                        key={g.id}
                        onClick={onClose}
                        className="p-3 bg-[#f7f9fb] hover:bg-[#002a8f]/10 rounded-xl flex items-center justify-between cursor-pointer"
                      >
                        <div className="font-medium text-[#191c1e]">{g.title}</div>
                        <div className="text-xs text-gray-500">{g.category}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {filteredFaculty.length === 0 &&
                filteredPrograms.length === 0 &&
                filteredGallery.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    No search results found for "<span className="font-semibold">{query}</span>". Try searching for "Science", "Math", or "Admissions".
                  </div>
                )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
