import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { language } = useLanguage();
  
  return (
    <section className="bg-[#8a6a48] pt-32 pb-12 md:pt-36 md:pb-16">
      <div className="text-center w-full">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light mb-6 tracking-wide drop-shadow-lg text-warm-gray-50">
          {language === 'tr' ? 'Yalın. Taze. Ege.' : 'Simple. Fresh. Aegean.'}
        </h1>
        <p className="text-lg md:text-xl font-light max-w-2xl mx-auto px-4 drop-shadow text-warm-gray-100 mb-2">
          {language === 'tr' ? 'Ege\'nin bereketli topraklarından sofralarınıza' : 'From the fertile lands of the Aegean to your tables'}
        </p>
      </div>
    </section>
  );
};

export default Hero; 