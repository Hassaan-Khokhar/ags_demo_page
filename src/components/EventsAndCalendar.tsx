import React, { useState } from 'react';

export const EventsAndCalendar: React.FC = () => {
  const [calendarDownloaded, setCalendarDownloaded] = useState(false);
  const [hovered, setHovered] = useState<'none' | 'left' | 'right'>('none');

  const handleDownloadCalendar = (e: React.MouseEvent) => {
    e.preventDefault();
    setCalendarDownloaded(true);
    // Simulate instant schedule view/download modal or notification
    setTimeout(() => {
      alert('Academic Calendar 2024-2025 PDF generated and downloaded!');
    }, 200);
  };

  // Build the parent grid class based on which card is hovered
  const gridClass = [
    'grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 flipflop-grid',
    hovered === 'left' ? 'flipflop--left' : '',
    hovered === 'right' ? 'flipflop--right' : '',
  ].join(' ');

  return (
    <section className="py-10 sm:py-14 bg-[#f7f9fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-12 md:px-16">
        <div className={gridClass}>
          {/* Box 1: Upcoming Event */}
          <div
            className="flipflop-card flipflop-card--left bg-[#E50000] rounded-[2rem] p-8 md:p-12 flex flex-col justify-center text-white shadow-lg relative overflow-hidden min-h-[280px]"
            onMouseEnter={() => setHovered('left')}
            onMouseLeave={() => setHovered('none')}
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -mr-24 -mt-24 blur-3xl"></div>
            <div className="flex items-center justify-between mb-8 relative z-10">
              <span className="font-label-md uppercase tracking-wider text-white/90 text-xs sm:text-sm font-bold">
                Upcoming Event
              </span>
              <span className="w-3 h-3 rounded-full bg-white animate-pulse shadow-[0_0_12px_rgba(255,255,255,0.9)]"></span>
            </div>
            <h3 className="font-headline-lg text-2xl sm:text-3xl md:text-[32px] mb-4 relative z-10 leading-tight font-bold">
              Annual Science Fair 2024
            </h3>
            <p className="font-body-md text-sm sm:text-base text-white/90 mb-8 relative z-10 leading-relaxed max-w-md">
              Join us for an exhibition of student innovation, robotics prototypes, and creative research.
            </p>
            <div className="font-label-md text-xs sm:text-sm bg-black/20 inline-block px-5 py-2.5 rounded-full w-fit relative z-10 font-medium">
              Oct 15 - 18, Main Hall
            </div>
          </div>

          {/* Box 2: Academic Calendar */}
          <button
            onClick={handleDownloadCalendar}
            onMouseEnter={() => setHovered('right')}
            onMouseLeave={() => setHovered('none')}
            className="flipflop-card flipflop-card--right bg-[#002a8f] rounded-[2rem] p-8 md:p-12 flex flex-col justify-center text-left overflow-hidden relative shadow-lg min-h-[280px] cursor-pointer group"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -mr-24 -mt-24 blur-3xl transition-transform duration-700 group-hover:scale-150"></div>
            <div className="relative z-10 pr-16">
              <h3 className="font-headline-lg text-white mb-3 text-2xl sm:text-3xl md:text-[32px] font-bold">
                Academic Calendar
              </h3>
              <p className="font-body-md text-sm sm:text-base text-white/80 leading-relaxed">
                Download or view the official 2024-2025 school schedule, term dates, and examination timetables.
              </p>
            </div>
            <span className="material-symbols-outlined absolute right-8 bottom-8 text-[48px] text-white/40 hover:text-white transition-all duration-300 hover:-translate-y-2 hover:scale-110">
              download
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

