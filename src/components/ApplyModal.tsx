import React, { useState } from 'react';

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ApplyModal: React.FC<ApplyModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    studentName: '',
    dob: '',
    grade: 'Grade 1',
    parentName: '',
    email: '',
    phone: '',
    previousSchool: '',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-xl w-full shadow-2xl relative my-8 animate-fade-in-up">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 bg-gray-100 rounded-full w-9 h-9 flex items-center justify-center cursor-pointer"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#E50000]/10 flex items-center justify-center text-[#E50000]">
                <span className="material-symbols-outlined text-[24px]">school</span>
              </div>
              <div>
                <h3 className="font-headline-md text-2xl text-[#002a8f] font-bold">
                  Online Admission Application
                </h3>
                <p className="font-body-sm text-xs text-[#444652]">
                  Academic Session 2026-2027
                </p>
              </div>
            </div>

            {/* Step Indicators */}
            <div className="flex items-center gap-2 mb-6">
              <div
                className={`h-2 flex-1 rounded-full ${
                  step >= 1 ? 'bg-[#002a8f]' : 'bg-gray-200'
                }`}
              ></div>
              <div
                className={`h-2 flex-1 rounded-full ${
                  step >= 2 ? 'bg-[#002a8f]' : 'bg-gray-200'
                }`}
              ></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {step === 1 ? (
                <>
                  <div>
                    <label className="block text-xs font-label-md text-gray-700 mb-1">
                      Student Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.studentName}
                      onChange={(e) =>
                        setFormData({ ...formData, studentName: e.target.value })
                      }
                      placeholder="e.g. Ayan Ahmed"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#002a8f] text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-label-md text-gray-700 mb-1">
                        Date of Birth *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.dob}
                        onChange={(e) =>
                          setFormData({ ...formData, dob: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#002a8f] text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-label-md text-gray-700 mb-1">
                        Applying For Grade *
                      </label>
                      <select
                        value={formData.grade}
                        onChange={(e) =>
                          setFormData({ ...formData, grade: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#002a8f] text-sm bg-white"
                      >
                        <option>Pre-School / Kindergarten</option>
                        <option>Grade 1</option>
                        <option>Grade 2</option>
                        <option>Grade 3</option>
                        <option>Grade 4</option>
                        <option>Grade 5</option>
                        <option>Grade 6</option>
                        <option>Grade 7</option>
                        <option>Grade 8</option>
                        <option>High School / O-Levels</option>
                        <option>A-Levels</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-label-md text-gray-700 mb-1">
                      Previous School Attended
                    </label>
                    <input
                      type="text"
                      value={formData.previousSchool}
                      onChange={(e) =>
                        setFormData({ ...formData, previousSchool: e.target.value })
                      }
                      placeholder="e.g. St. Joseph Elementary School"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#002a8f] text-sm"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      if (!formData.studentName || !formData.dob) {
                        alert('Please fill out student name and birth date');
                        return;
                      }
                      setStep(2);
                    }}
                    className="w-full bg-[#002a8f] text-white py-3 rounded-full font-label-md text-sm font-semibold mt-4 btn-fill-red transition-colors cursor-pointer"
                  >
                    Next: Guardian Information &rarr;
                  </button>
                </>
              ) : (
                <>
                  <div>
                    <label className="block text-xs font-label-md text-gray-700 mb-1">
                      Parent / Guardian Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.parentName}
                      onChange={(e) =>
                        setFormData({ ...formData, parentName: e.target.value })
                      }
                      placeholder="e.g. Tariq Ahmed"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#002a8f] text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-label-md text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="parent@example.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#002a8f] text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-label-md text-gray-700 mb-1">
                        Phone / Whatsapp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#002a8f] text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-label-md text-gray-700 mb-1">
                      Additional Notes or Questions
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.value })
                      }
                      placeholder="Specify any sports interests, scholarship inquiries, or medical considerations..."
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#002a8f] text-sm"
                    ></textarea>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="w-1/3 bg-gray-100 text-gray-700 py-3 rounded-full font-label-md text-sm font-semibold hover:bg-gray-200 transition-colors cursor-pointer"
                    >
                      &larr; Back
                    </button>
                    <button
                      type="submit"
                      className="w-2/3 bg-[#E50000] text-white py-3 rounded-full font-label-md text-sm font-bold hover:bg-[#bc0100] transition-colors shadow-md cursor-pointer"
                    >
                      Submit Application
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-[36px]">check_circle</span>
            </div>
            <h3 className="font-headline-md text-2xl text-[#002a8f] font-bold">
              Application Received!
            </h3>
            <p className="font-body-md text-sm text-[#444652] max-w-md mx-auto leading-relaxed">
              Thank you for applying to Arqam Grammar Schools. Application ID:{' '}
              <span className="font-bold text-[#002a8f]">ARQ-2026-{(Math.floor(Math.random() * 90000) + 10000)}</span>. Our admissions officer will contact you within 24 hours at <span className="font-semibold">{formData.email}</span> to schedule the baseline assessment test.
            </p>
            <button
              onClick={handleReset}
              className="bg-[#002a8f] text-white px-8 py-3 rounded-full font-label-md text-sm font-semibold btn-fill-red transition-colors cursor-pointer mt-4"
            >
              Done & Return
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

