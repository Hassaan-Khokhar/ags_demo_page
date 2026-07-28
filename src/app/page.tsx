"use client";

import React, { useState } from 'react';
import { TopBar } from '../components/TopBar';
import { Header } from '../components/Header';
import { HeroCarousel } from '../components/HeroCarousel';
import { StatsRow } from '../components/StatsRow';
import { WelcomeSection } from '../components/WelcomeSection';
import { AdvantageSection } from '../components/AdvantageSection';
import { DirectorMessage } from '../components/DirectorMessage';
import { FacultyShowcase } from '../components/FacultyShowcase';
import { CampusLifeGallery } from '../components/CampusLifeGallery';
import { EventsAndCalendar } from '../components/EventsAndCalendar';
import { Footer } from '../components/Footer';

// Modals
import { DirectorModal } from '../components/DirectorModal';
import { FacultyModal } from '../components/FacultyModal';
import { LightboxModal } from '../components/LightboxModal';
import { ComingSoonModal } from '../components/ComingSoonModal';

import { FacultyMember, GalleryItem } from '../types';

export default function Page() {
  const [comingSoonOpen, setComingSoonOpen] = useState(false);
  const [directorOpen, setDirectorOpen] = useState(false);

  const [selectedFaculty, setSelectedFaculty] = useState<FacultyMember | null>(null);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);

  return (
    <div className="min-h-screen bg-[#f7f9fb] text-[#191c1e] font-body flex flex-col selection:bg-[#002a8f] selection:text-white">
      {/* TopBar */}
      <div className="w-full relative z-50">
        <TopBar onOpenApply={() => setComingSoonOpen(true)} />
      </div>

      <Header
        onOpenApply={() => setComingSoonOpen(true)}
        onOpenLogin={() => setComingSoonOpen(true)}
        onOpenAcademics={() => setComingSoonOpen(true)}
        onOpenTour={() => setComingSoonOpen(true)}
        onOpenStory={() => setComingSoonOpen(true)}
        onOpenCareers={() => setComingSoonOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Carousel */}
        <HeroCarousel
          onOpenAcademics={() => setComingSoonOpen(true)}
          onOpenTour={() => setComingSoonOpen(true)}
          onOpenApply={() => setComingSoonOpen(true)}
        />

        {/* 2. Interactive Stats Bar */}
        <StatsRow />

        {/* 3. Welcome Section */}
        <WelcomeSection onOpenStory={() => setComingSoonOpen(true)} />

        {/* 4. The Arqam Advantage Cards */}
        <AdvantageSection />

        {/* 5. Director's Message */}
        <DirectorMessage onOpenDirectorModal={() => setDirectorOpen(true)} />

        {/* 6. Faculty Showcase */}
        <FacultyShowcase onSelectFaculty={(fac) => setSelectedFaculty(fac)} />

        {/* 7. Campus Life Gallery */}
        <CampusLifeGallery onSelectImage={(item) => setSelectedGalleryItem(item)} />

        {/* 8. Events & Calendar */}
        <EventsAndCalendar />
      </main>

      <Footer
        onOpenApply={() => setComingSoonOpen(true)}
        onOpenAcademics={() => setComingSoonOpen(true)}
        onOpenTour={() => setComingSoonOpen(true)}
        onOpenStory={() => setComingSoonOpen(true)}
        onOpenComingSoon={() => setComingSoonOpen(true)}
      />

      {/* Interactive Application Modals */}
      <ComingSoonModal isOpen={comingSoonOpen} onClose={() => setComingSoonOpen(false)} />
      <DirectorModal isOpen={directorOpen} onClose={() => setDirectorOpen(false)} />
      <FacultyModal faculty={selectedFaculty} onClose={() => setSelectedFaculty(null)} />
      <LightboxModal item={selectedGalleryItem} onClose={() => setSelectedGalleryItem(null)} />
    </div>
  );
}
