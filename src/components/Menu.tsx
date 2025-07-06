import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const menuData = {
  tr: [
    {
      category: 'Başlarken',
      items: [
        'Fesleğenli Armola',
        'Kuru Domatesli Armola',
        'Mandalinalı Haydari',
        'Orman Meyveli Semizotu',
        'Yeşil Fava',
        'Acılı Atom',
        'Acılı Patlıcan Söğürme',
        'Koruk Ekşili Börülce',
        'Cigani Pembesi',
        'Kabaklı Enginar',
        'Karpuz Peynir',
        'Çiroz',
        'Hardallı Levrek Marin',
        'Hardallı Patates Salatası',
        'Mantar Turşusu',
        'Üzüm & Ceviz',
      ],
    },
    {
      category: 'Salatalar',
      items: [
        'Cigani Salata',
        'Roka Peynir',
      ],
    },
    {
      category: 'Paylaşımlı Sıcaklar',
      items: [
        'Kalamar Tava',
        'Karides Güveç',
        'Izgara Ahtapot Bacağı',
        'Kremalı Otlu Levrek',
        'Ballı Kadayıflı Tulum Sarma',
        'Kuru Etli Paçanga',
        'Deniz Mahsüllü Bohça',
        'Cigani Umami Güveç',
        'Çilekli Acılı Marin',
        'Deniz Ürünlü Keşkek',
        'Karakılçık Tarhanası Püresinde Kokoreç',
      ],
    },
    {
      category: 'Bitirirken',
      items: [
        'Mandalina Dondurmalı İrmik',
      ],
    },
  ],
  en: [
    {
      category: 'To Start',
      items: [
        'Basil Armola',
        'Sun-Dried Tomato Armola',
        'Mandarin Haydari',
        'Wild Berry Purslane',
        'Green Fava',
        'Spicy Atom',
        'Spicy Roasted Eggplant',
        'Sour Grape Black-Eyed Peas',
        'Cigani Pink',
        'Zucchini Artichoke',
        'Watermelon Cheese',
        'Dried Fish',
        'Mustard Sea Bass Marin',
        'Mustard Potato Salad',
        'Mushroom Pickle',
        'Grape & Walnut',
      ],
    },
    {
      category: 'Salads',
      items: [
        'Cigani Salad',
        'Arugula & Cheese',
      ],
    },
    {
      category: 'Shared Hot Dishes',
      items: [
        'Fried Calamari',
        'Shrimp Casserole',
        'Grilled Octopus Leg',
        'Creamy Herbed Sea Bass',
        'Honey Shredded Pastry with Aged Cheese Wrap',
        'Dried Meat Pastry',
        'Seafood Pastry',
        'Cigani Umami Casserole',
        'Strawberry Spicy Marin',
        'Seafood Porridge',
        'Lamb Intestines in Black Wheat Tarhana Puree',
      ],
    },
    {
      category: 'To Finish',
      items: [
        'Mandarin Ice Cream Semolina',
      ],
    },
  ],
};

const Menu: React.FC = () => {
  const { language, t } = useLanguage();
  const currentMenuData = menuData[language];

  return (
    <section id="menu" className="section-padding bg-[#b48c6e] relative overflow-hidden">
      {/* Cigani script logo at top right (removed) */}
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-serif font-medium text-white text-center mb-12 tracking-widest uppercase letter-spacing-[0.2em]">
          {t('menuTitle')}
        </h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left column: Başlarken & Salatalar */}
          <div>
            {/* Başlarken */}
            <div className="mb-12">
              <h3 className="text-lg md:text-xl font-serif font-semibold text-white tracking-widest uppercase mb-6 letter-spacing-[0.2em]">{currentMenuData[0].category.toUpperCase()}</h3>
              <ul className="space-y-2">
                {currentMenuData[0].items.map((item, idx) => (
                  <li key={item + idx} className="text-white text-base md:text-lg">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Salatalar */}
            <div className="mb-12">
              <h3 className="text-lg md:text-xl font-serif font-semibold text-white tracking-widest uppercase mb-6 letter-spacing-[0.2em]">{currentMenuData[1].category.toUpperCase()}</h3>
              <ul className="space-y-2">
                {currentMenuData[1].items.map((item, idx) => (
                  <li key={item + idx} className="text-white text-base md:text-lg">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Right column: Paylaşımlı Sıcaklar (in a soft box) & Bitirirken */}
          <div>
            {/* Paylaşımlı Sıcaklar */}
            <div className="mb-12">
              <div className="bg-[#e2cdb3]/80 rounded-lg p-8 shadow-md">
                <h3 className="text-lg md:text-xl font-serif font-semibold text-[#a97c50] tracking-widest uppercase mb-6 text-center letter-spacing-[0.2em]">{currentMenuData[2].category.toUpperCase()}</h3>
                <ul className="space-y-2">
                  {currentMenuData[2].items.map((item, idx) => (
                    <li key={item + idx} className="text-[#a97c50] text-base md:text-lg text-center">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Bitirirken */}
            <div className="mb-12">
              <h3 className="text-lg md:text-xl font-serif font-semibold text-white tracking-widest uppercase mb-6 text-center letter-spacing-[0.2em]">{currentMenuData[3].category.toUpperCase()}</h3>
              <ul className="space-y-2 text-center">
                {currentMenuData[3].items.map((item, idx) => (
                  <li key={item + idx} className="text-white text-base md:text-lg">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu; 