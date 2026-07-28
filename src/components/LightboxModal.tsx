import React from 'react';
import { GalleryItem } from '../types';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-gray-300 bg-white/10 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer z-50"
      >
        <span className="material-symbols-outlined text-2xl">close</span>
      </button>

      <div className="max-w-4xl w-full flex flex-col items-center">
        <div className="rounded-2xl overflow-hidden shadow-2xl max-h-[80vh] border border-white/10">
          <img
            src={item.image}
            alt={item.title}
            className="max-h-[75vh] w-auto object-contain"
          />
        </div>
        <div className="mt-4 text-center">
          <span className="text-[#E50000] font-label-md text-xs uppercase tracking-widest font-bold">
            {item.category}
          </span>
          <h3 className="font-headline-md text-xl sm:text-2xl text-white font-semibold mt-1">
            {item.title}
          </h3>
        </div>
      </div>
    </div>
  );
};
