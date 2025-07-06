import React from 'react';
import { menuData } from '../data/menuData';

const Menu: React.FC = () => {
  return (
    <section className="section-padding bg-warm-gray-50">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-serif font-medium text-warm-gray-800 text-center mb-12">
          Menü
        </h2>
        <div className="max-w-4xl mx-auto">
          {menuData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12 last:mb-0">
              <h3 className="text-2xl font-serif font-medium text-warm-gray-700 mb-8 text-center">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex justify-between items-start border-b border-warm-gray-200 pb-4 last:border-b-0"
                  >
                    <div className="flex-1">
                      <h4 className="text-lg font-medium text-warm-gray-800 mb-1">
                        {item.name}
                      </h4>
                      <p className="text-warm-gray-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                    <span className="text-lg font-medium text-warm-gray-800 ml-4">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-warm-gray-600 text-sm">
            Menü mevsimsel değişikliklere tabidir. Güncel menü için lütfen iletişime geçin.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Menu; 