import React from 'react';

const About: React.FC = () => {
  return (
    <section className="section-padding bg-warm-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-warm-gray-800 mb-8">
            Hakkımızda
          </h2>
          <div className="prose prose-lg mx-auto text-warm-gray-600">
            <p className="text-lg leading-relaxed">
              Cigani Restaurant, Sığacık’ın kalbinde; doğallığın, sadeliğin ve lezzetin zarif bir uyumla buluştuğu bir restoran olarak doğdu. Her gün taze toplanan yerel malzemelerle hazırladığımız menümüzde, Ege’nin köklü mutfak kültürünü çağdaş dokunuşlarla yeniden yorumluyoruz.
            </p>
            <p className="text-lg leading-relaxed mt-6">
              Burada her tabak, toprağa ve mevsime duyulan saygıyla hazırlanır. Geleneksel tarifler modern sunumlarla yeniden hayat bulurken, misafirlerimize sadece bir yemek değil; dingin, zarif ve samimi bir deneyim sunmayı amaçlıyoruz.
            </p>
            <p className="text-lg leading-relaxed mt-6">
              Cigani’de masa paylaşılır, zaman yavaş akar. Sohbet uzar, kadehler dostluğa kalkar.<br/>
              Burası sadece yemek yenen değil, yaşanılan bir yerdir.
            </p>
            <p className="text-lg leading-relaxed mt-6 font-serif font-semibold text-warm-gray-800">
              Gelin, soframıza katılın.<br/>
              #sadecehisset
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 