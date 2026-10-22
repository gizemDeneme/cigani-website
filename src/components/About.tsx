import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-padding bg-warm-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-warm-gray-800 mb-8">
            {t('aboutTitle')}
          </h2>
          <div className="prose prose-lg mx-auto text-warm-gray-600">
            <p className="text-lg leading-relaxed">
              {t('aboutText1')}
            </p>
            <p className="text-lg leading-relaxed mt-6">
              {t('aboutText2')}
            </p>
            <p className="text-lg leading-relaxed mt-6">
              {t('aboutText3')}
            </p>
            <p className="text-lg leading-relaxed mt-6 font-serif font-semibold text-warm-gray-800">
              {t('aboutText4')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 