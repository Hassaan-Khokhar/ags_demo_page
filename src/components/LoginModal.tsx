import React, { useState } from 'react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [portal, setPortal] = useState<'parent' | 'student' | 'staff'>('parent');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoggedIn(true);
  };

  const handleReset = () => {
    setLoggedIn(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative animate-fade-in-up">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 bg-gray-100 rounded-full w-9 h-9 flex items-center justify-center cursor-pointer"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        {!loggedIn ? (
          <div>
            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-full bg-[#002a8f]/10 text-[#002a8f] flex items-center justify-center mx-auto mb-3">
                <span className="material-symbols-outlined text-[28px]">lock</span>
              </div>
              <h3 className="font-headline-md text-2xl text-[#002a8f] font-bold">
                Arqam Portal Login
              </h3>
              <p className="font-body-sm text-xs text-[#444652]">
                Access attendance, grades, fee receipts, and school updates
              </p>
            </div>

            {/* Portal Type Switcher */}
            <div className="grid grid-cols-3 gap-1 bg-[#f7f9fb] p-1 rounded-2xl mb-6 border border-gray-200">
              <button
                type="button"
                onClick={() => setPortal('parent')}
                className={`py-2 text-xs font-label-md rounded-xl transition-all cursor-pointer ${
                  portal === 'parent'
                    ? 'bg-[#002a8f] text-white shadow'
                    : 'text-gray-600 hover:text-[#002a8f]'
                }`}
              >
                Parent
              </button>
              <button
                type="button"
                onClick={() => setPortal('student')}
                className={`py-2 text-xs font-label-md rounded-xl transition-all cursor-pointer ${
                  portal === 'student'
                    ? 'bg-[#002a8f] text-white shadow'
                    : 'text-gray-600 hover:text-[#002a8f]'
                }`}
              >
                Student
              </button>
              <button
                type="button"
                onClick={() => setPortal('staff')}
                className={`py-2 text-xs font-label-md rounded-xl transition-all cursor-pointer ${
                  portal === 'staff'
                    ? 'bg-[#002a8f] text-white shadow'
                    : 'text-gray-600 hover:text-[#002a8f]'
                }`}
              >
                Staff
              </button>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-label-md text-gray-700 mb-1">
                  {portal === 'parent'
                    ? 'Parent CNIC / Registered Email'
                    : portal === 'student'
                    ? 'Student ID Number (e.g. ARQ-1042)'
                    : 'Staff Email Address'}
                </label>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter credential..."
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#002a8f] text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-label-md text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#002a8f] text-sm"
                />
              </div>

              <div className="flex justify-between items-center text-xs">
                <label className="flex items-center gap-1.5 text-gray-600 cursor-pointer">
                  <input type="checkbox" className="rounded text-[#002a8f]" />
                  Remember me
                </label>
                <button
                  type="button"
                  onClick={() => alert('Password reset instructions sent to your registered email.')}
                  className="text-[#002a8f] hover:underline"
                >
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                className="w-full bg-[#002a8f] text-white py-3 rounded-full font-label-md text-sm font-semibold btn-fill-red transition-colors cursor-pointer mt-2"
              >
                Sign In to {portal.charAt(0).toUpperCase() + portal.slice(1)} Portal
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-[36px]">verified_user</span>
            </div>
            <h3 className="font-headline-md text-2xl text-[#002a8f] font-bold">
              Welcome Back!
            </h3>
            <p className="font-body-md text-sm text-[#444652] leading-relaxed">
              Successfully authenticated as <span className="font-bold text-[#002a8f]">{username || 'User'}</span>. Redirecting to your Arqam Portal Dashboard...
            </p>
            <button
              onClick={handleReset}
              className="bg-[#002a8f] text-white px-8 py-2.5 rounded-full font-label-md text-sm font-semibold btn-fill-red transition-colors cursor-pointer mt-4"
            >
              Continue to Dashboard
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

