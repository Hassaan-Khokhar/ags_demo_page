import React from 'react';
import { GALLERY_ITEMS } from '../data/schoolData';
import { GalleryItem } from '../types';

interface CampusLifeGalleryProps {
  onSelectImage: (item: GalleryItem) => void;
}

export const CampusLifeGallery: React.FC<CampusLifeGalleryProps> = ({
  onSelectImage,
}) => {
  return (
    <section className="py-16 sm:py-24 bg-[#f7f9fb]" id="campus-life">
      <div className="max-w-7xl mx-auto px-4 sm:px-12 md:px-16">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-headline-lg text-3xl sm:text-4xl text-[#002a8f] mb-4 font-bold">
            Campus Life
          </h2>
          <p className="font-body-md text-base text-[#444652]">
            A glimpse into the vibrant daily life at Arqam.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectImage(item)}
              className="break-inside-avoid relative rounded-2xl overflow-hidden group cursor-pointer shadow-md transform transition-all duration-300 hover:shadow-xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#002a8f]/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                <span className="material-symbols-outlined text-white text-[36px] drop-shadow-md mb-2">
                  open_in_full
                </span>
                <span className="text-white font-label-md text-xs uppercase tracking-wider bg-black/30 px-3 py-1 rounded-full mb-1">
                  {item.category}
                </span>
                <p className="text-white font-headline-sm text-sm font-semibold max-w-xs drop-shadow">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
