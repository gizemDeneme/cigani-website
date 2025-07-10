import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <>
      <Helmet>
        <title>Hikayemiz - Cigani Restaurant | Sığacık'ta Ege Lezzetleri</title>
        <meta name="description" content="Cigani Restaurant'ın hikayesi: Sığacık'ın kalbinde doğallık, sadelik ve lezzetin buluştuğu modern meyhane deneyimi. Ege'nin köklü mutfak kültürü." />
        <meta name="keywords" content="Cigani hikayesi, Sığacık restoran tarihi, Ege mutfağı geleneği, Sığacık meyhane kültürü, modern meyhane Sığacık, Cigani Restaurant hakkında" />
        <link rel="canonical" href="https://www.cigani.com.tr/hikayemiz" />
      </Helmet>
      <section id="about" className="section-padding bg-warm-gray-50">
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
                Gelin, soframıza katılın.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About; 