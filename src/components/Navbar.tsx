import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const menuItems = [
    { label: t('about'), href: '#about' },
    { label: t('gallery'), href: '#gallery' },
    { label: t('menu'), href: '#menu' },
  ];

  const contactInfo = {
    address: 'Sığacık, 128. Sk. No:22, 35460 Seferihisar/İzmir',
    phone: '+905332059873',
    instagram: 'https://instagram.com/cigani.sigacik',
    hours: '17:00 - 01:00',
  };

  const handleMenuToggle = () => setMenuOpen((open) => !open);
  const handleMenuClose = () => setMenuOpen(false);

  const handleContactToggle = () => setContactOpen((open) => !open);
  const handleContactClose = () => setContactOpen(false);

  const handleMenuItemClick = (href: string) => {
    setMenuOpen(false);
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'tr' ? 'en' : 'tr');
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-warm-gray-200">
        <div className="container-custom relative flex items-center justify-center h-20 md:h-24">
          {/* Menu Icon (left) */}
          <button
            className="absolute left-0 flex items-center justify-center h-full px-4 focus:outline-none"
            onClick={handleMenuToggle}
            aria-label="Menüyü Aç"
          >
            <svg className="w-8 h-8 text-warm-gray-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Language Toggle (left of logo) */}
          <button
            className="absolute left-16 flex items-center justify-center h-full px-2 focus:outline-none"
            onClick={toggleLanguage}
            aria-label="Dil Değiştir"
          >
            <span className="text-sm font-medium text-warm-gray-800">
              {language === 'tr' ? 'EN' : 'TR'}
            </span>
          </button>

          {/* Centered Logo */}
          <img
            src="/images/logo.png"
            alt="Cigani Restaurant Logo"
            className="h-12 md:h-16 w-auto object-contain mx-auto"
            style={{ maxHeight: '64px', background: 'transparent' }}
          />

          {/* Contact Icon (right) */}
          <button
            className="absolute right-0 flex items-center justify-center h-full px-4 focus:outline-none"
            onClick={handleContactToggle}
            aria-label="İletişim Menüsü"
          >
            <svg className="w-8 h-8 text-warm-gray-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4.5M16 7l-4 4-4-4" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Side Menu Overlay */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-50 transition-opacity duration-300"
            onClick={handleMenuClose}
          ></div>
          <aside className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 flex flex-col p-8 animate-slide-in">
            <button
              className="self-end mb-8 text-warm-gray-700 hover:text-warm-gray-900 text-2xl focus:outline-none"
              onClick={handleMenuClose}
              aria-label="Menüyü Kapat"
            >
              &times;
            </button>
            <nav className="flex flex-col gap-6 mt-4">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleMenuItemClick(item.href)}
                  className="text-lg font-serif text-warm-gray-800 hover:text-warm-gray-600 transition-colors text-left"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </aside>
          <style>{`
            @keyframes slide-in {
              from { transform: translateX(-100%); }
              to { transform: translateX(0); }
            }
            .animate-slide-in {
              animation: slide-in 0.3s cubic-bezier(0.4,0,0.2,1) both;
            }
          `}</style>
        </>
      )}

      {/* Contact Side Menu Overlay */}
      {contactOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-50 transition-opacity duration-300"
            onClick={handleContactClose}
          ></div>
          <aside className="fixed top-0 right-0 h-full w-96 bg-white shadow-lg z-50 flex flex-col p-8 animate-slide-in-right overflow-y-auto">
            <button
              className="self-end mb-8 text-warm-gray-700 hover:text-warm-gray-900 text-2xl focus:outline-none"
              onClick={handleContactClose}
              aria-label="İletişim Menüsünü Kapat"
            >
              &times;
            </button>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-serif font-medium text-warm-gray-800 mb-2">{t('address')}</h3>
                <p className="text-warm-gray-600">{contactInfo.address}</p>
              </div>
              <div>
                <h3 className="text-xl font-serif font-medium text-warm-gray-800 mb-2">{t('phone')}</h3>
                <p className="text-warm-gray-600">{contactInfo.phone}</p>
              </div>
              <div>
                <h3 className="text-xl font-serif font-medium text-warm-gray-800 mb-2">{t('instagram')}</h3>
                <a
                  href={contactInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-warm-gray-600 hover:text-warm-gray-800 transition-colors duration-300"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  @cigani_restaurant
                </a>
              </div>
              <div>
                <h3 className="text-xl font-serif font-medium text-warm-gray-800 mb-2">{t('workingHours')}</h3>
                <p className="text-warm-gray-600">{contactInfo.hours}</p>
              </div>
              <div>
                <h3 className="text-xl font-serif font-medium text-warm-gray-800 mb-4">{t('reservationTitle')}</h3>
                <form 
                  action="https://formsubmit.co/info@boii.com.tr" 
                  method="POST"
                  className="space-y-4"
                >
                  {/* Hidden fields */}
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_subject" value="Yeni Rezervasyon Talebi" />
                  
                  {/* Name field */}
                  <div>
                    <label className="block text-sm font-medium text-warm-gray-700 mb-1">
                      {t('name')} *
                    </label>
                    <input
                      type="text"
                      name="isim"
                      required
                      className="w-full px-3 py-2 border border-warm-gray-300 focus:border-warm-gray-500 focus:outline-none rounded"
                      placeholder={t('namePlaceholder')}
                    />
                  </div>
                  
                  {/* Email field */}
                  <div>
                    <label className="block text-sm font-medium text-warm-gray-700 mb-1">
                      {t('email')} *
                    </label>
                    <input
                      type="email"
                      name="eposta"
                      required
                      className="w-full px-3 py-2 border border-warm-gray-300 focus:border-warm-gray-500 focus:outline-none rounded"
                      placeholder={t('emailPlaceholder')}
                    />
                  </div>
                  
                  {/* Phone field */}
                  <div>
                    <label className="block text-sm font-medium text-warm-gray-700 mb-1">
                      {t('phoneNumber')} *
                    </label>
                    <input
                      type="tel"
                      name="telefon"
                      required
                      className="w-full px-3 py-2 border border-warm-gray-300 focus:border-warm-gray-500 focus:outline-none rounded"
                      placeholder={t('phonePlaceholder')}
                    />
                  </div>
                  
                  {/* Number of guests field */}
                  <div>
                    <label className="block text-sm font-medium text-warm-gray-700 mb-1">
                      {t('guests')} *
                    </label>
                    <input
                      type="text"
                      name="kisi_sayisi"
                      required
                      className="w-full px-3 py-2 border border-warm-gray-300 focus:border-warm-gray-500 focus:outline-none rounded"
                      placeholder={t('guestsPlaceholder')}
                    />
                  </div>
                  
                  {/* Date field */}
                  <div>
                    <label className="block text-sm font-medium text-warm-gray-700 mb-1">
                      {t('date')} *
                    </label>
                    <input
                      type="date"
                      name="tarih"
                      required
                      className="w-full px-3 py-2 border border-warm-gray-300 focus:border-warm-gray-500 focus:outline-none rounded"
                    />
                  </div>
                  
                  {/* Time field */}
                  <div>
                    <label className="block text-sm font-medium text-warm-gray-700 mb-1">
                      {t('time')} *
                    </label>
                    <select
                      name="saat"
                      required
                      className="w-full px-3 py-2 border border-warm-gray-300 focus:border-warm-gray-500 focus:outline-none rounded"
                    >
                      <option value="">{t('timeSelectPlaceholder')}</option>
                      {/* Assuming translations object is defined elsewhere or will be added */}
                      {/* For now, using a placeholder or a simple array if translations is not available */}
                      {/* This part needs to be properly integrated with translations */}
                      {/* Example: translations[language]?.timeOptions || [] */}
                      <option value="17:00">17:00</option>
                      <option value="17:30">17:30</option>
                      <option value="18:00">18:00</option>
                      <option value="18:30">18:30</option>
                      <option value="19:00">19:00</option>
                      <option value="19:30">19:30</option>
                      <option value="20:00">20:00</option>
                      <option value="20:30">20:30</option>
                      <option value="21:00">21:00</option>
                      <option value="21:30">21:30</option>
                      <option value="22:00">22:00</option>
                    </select>
                  </div>
                  
                  {/* Notes field */}
                  <div>
                    <label className="block text-sm font-medium text-warm-gray-700 mb-1">
                      {t('notes')}
                    </label>
                    <textarea
                      name="notlar"
                      rows={3}
                      className="w-full px-3 py-2 border border-warm-gray-300 focus:border-warm-gray-500 focus:outline-none rounded resize-none"
                      placeholder={t('notesPlaceholder')}
                    />
                  </div>
                  
                  {/* Submit button */}
                  <button
                    type="submit"
                    className="w-full bg-warm-gray-800 text-white py-3 px-4 rounded hover:bg-warm-gray-700 transition-colors duration-300 font-medium"
                  >
                    {t('submit')}
                  </button>
                </form>
              </div>
            </div>
          </aside>
          <style>{`
            @keyframes slide-in {
              from { transform: translateX(-100%); }
              to { transform: translateX(0); }
            }
            .animate-slide-in {
              animation: slide-in 0.3s cubic-bezier(0.4,0,0.2,1) both;
            }
            @keyframes slide-in-right {
              from { transform: translateX(100%); }
              to { transform: translateX(0); }
            }
            .animate-slide-in-right {
              animation: slide-in-right 0.3s cubic-bezier(0.4,0,0.2,1) both;
            }
          `}</style>
        </>
      )}
    </>
  );
};

export default Navbar; 