import React, { useState } from 'react';

interface TourModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TourModal: React.FC<TourModalProps> = ({ isOpen, onClose }) => {
  const [booked, setBooked] = useState(false);
  const [tourData, setTourData] = useState({
    parentName: '',
    phone: '',
    email: '',
    date: '',
    timeSlot: '10:00 AM - 11:30 AM',
    gradeOfInterest: 'High School / O-Levels',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBooked(true);
  };

  const handleDone = () => {
    setBooked(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative my-8 animate-fade-in-up">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 bg-gray-100 rounded-full w-9 h-9 flex items-center justify-center cursor-pointer"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        {!booked ? (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#002a8f]/10 flex items-center justify-center text-[#002a8f]">
                <span className="material-symbols-outlined text-[24px]">calendar_month</span>
              </div>
              <div>
                <h3 className="font-headline-md text-2xl text-[#002a8f] font-bold">
                  Schedule Campus Tour
                </h3>
                <p className="font-body-sm text-xs text-[#444652]">
                  Guided walkthrough of Arqam Grammar Schools
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-label-md text-gray-700 mb-1">
                  Parent / Guardian Name *
                </label>
                <input
                  type="text"
                  required
                  value={tourData.parentName}
                  onChange={(e) =>
                    setTourData({ ...tourData, parentName: e.target.value })
                  }
                  placeholder="e.g. Dr. Salman Khan"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#002a8f] text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-label-md text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={tourData.phone}
                    onChange={(e) =>
                      setTourData({ ...tourData, phone: e.target.value })
                    }
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#002a8f] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-label-md text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={tourData.email}
                    onChange={(e) =>
                      setTourData({ ...tourData, email: e.target.value })
                    }
                    placeholder="parent@example.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#002a8f] text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-label-md text-gray-700 mb-1">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={tourData.date}
                    onChange={(e) =>
                      setTourData({ ...tourData, date: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#002a8f] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-label-md text-gray-700 mb-1">
                    Time Slot
                  </label>
                  <select
                    value={tourData.timeSlot}
                    onChange={(e) =>
                      setTourData({ ...tourData, timeSlot: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#002a8f] text-sm bg-white"
                  >
                    <option>09:00 AM - 10:30 AM</option>
                    <option>10:00 AM - 11:30 AM</option>
                    <option>01:00 PM - 02:30 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-label-md text-gray-700 mb-1">
                  Grade Level of Interest
                </label>
                <select
                  value={tourData.gradeOfInterest}
                  onChange={(e) =>
                    setTourData({ ...tourData, gradeOfInterest: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#002a8f] text-sm bg-white"
                >
                  <option>Pre-School Foundation</option>
                  <option>Middle School (Grades 6-8)</option>
                  <option>High School / O-Levels</option>
                  <option>A-Levels & Advanced Studies</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-[#002a8f] text-white py-3.5 rounded-full font-label-md text-sm font-semibold btn-fill-red transition-all shadow-md cursor-pointer mt-2"
              >
                Confirm Tour Booking
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-blue-100 text-[#002a8f] flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-[36px]">event_available</span>
            </div>
            <h3 className="font-headline-md text-2xl text-[#002a8f] font-bold">
              Campus Tour Confirmed!
            </h3>
            <p className="font-body-md text-sm text-[#444652] max-w-md mx-auto leading-relaxed">
              We look forward to hosting you on <span className="font-semibold text-[#002a8f]">{tourData.date || 'your selected date'}</span> at <span className="font-semibold">{tourData.timeSlot}</span>. A calendar invitation has been sent to <span className="font-semibold">{tourData.email}</span>.
            </p>
            <button
              onClick={handleDone}
              className="bg-[#002a8f] text-white px-8 py-3 rounded-full font-label-md text-sm font-semibold btn-fill-red transition-colors cursor-pointer mt-4"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

