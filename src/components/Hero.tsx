import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background image with high opacity for original photo look */}
      <div className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center bg-no-repeat opacity-90"></div>

      {/* Lighter overlay for better image visibility and text readability */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* Content overlay */}
      <div className="relative z-20 text-center w-full">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light mb-6 tracking-wide drop-shadow-lg text-warm-gray-50">
          Yalın. Taze. Ege.
        </h2>
        <p className="text-lg md:text-xl font-light max-w-2xl mx-auto px-4 drop-shadow text-warm-gray-100 mb-2">
          Ege'nin bereketli topraklarından sofralarınıza
        </p>
        {/* #sadecehisset hashtag removed */}
      </div>
    </section>
  );
};

export default Hero; 