import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t, language } = useLanguage();
  
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background image with high opacity for original photo look */}
      <div className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center bg-no-repeat opacity-90"></div>

      {/* Lighter overlay for better image visibility and text readability */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* Content overlay */}
      <div className="relative z-20 text-center w-full">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-warm-gray-50 drop-shadow-xl">
          {language === 'tr' ? 'Sığacık\'ta Akşam Yemeği için Modern ve Samimi Bir Meyhane: Cigani' : 'A Modern and Intimate Tavern for Dinner in Sığacık: Cigani'}
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-warm-gray-50 drop-shadow">
          {language === 'tr' ? 'Günlük Hazırlanan Ege Mezeleri' : 'Daily Prepared Aegean Mezes'}
        </h2>
        <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-warm-gray-50 drop-shadow">
          {language === 'tr' ? 'Paylaşmaya Uygun Tabaklar, Şık Sofralar' : 'Plates for Sharing, Elegant Tables'}
        </h2>
        <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-warm-gray-50 drop-shadow">
          {language === 'tr' ? 'Yerel Malzemeler, Zarif Sunumlar' : 'Local Ingredients, Elegant Presentations'}
        </h2>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-warm-gray-50 drop-shadow">
          {language === 'tr' ? 'Ulaşım ve Rezervasyon Bilgileri' : 'Transportation and Reservation Information'}
        </h2>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light mb-6 tracking-wide drop-shadow-lg text-warm-gray-50">
          {language === 'tr' ? 'Yalın. Taze. Ege.' : 'Simple. Fresh. Aegean.'}
        </h2>
        <p className="text-lg md:text-xl font-light max-w-2xl mx-auto px-4 drop-shadow text-warm-gray-100 mb-2">
          {language === 'tr' ? 'Ege\'nin bereketli topraklarından sofralarınıza' : 'From the fertile lands of the Aegean to your tables'}
        </p>
      </div>
    </section>
  );
};

export default Hero; 