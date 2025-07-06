import React from 'react';
import { galleryData } from '../data/galleryData';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-serif font-medium text-warm-gray-800 text-center mb-12">
          Galeri
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryData.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden aspect-[4/3] bg-warm-gray-200"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery; 