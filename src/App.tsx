import React, { useEffect } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Menu from './components/Menu';

function App() {
  useEffect(() => {
    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "name": "Cigani Restaurant",
      "description": "Sığacık'ta Ege'nin bereketli topraklarından ilham alan gastronomi deneyimi",
      "url": "https://www.cigani.com.tr",
      "telephone": "+905332059873",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Sığacık, 128. Sk. No:22",
        "addressLocality": "Seferihisar",
        "addressRegion": "İzmir",
        "postalCode": "35460",
        "addressCountry": "TR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "38.1833",
        "longitude": "27.0667"
      },
      "openingHours": "Mo-Su 17:00-01:00",
      "servesCuisine": ["Turkish", "Aegean", "Mediterranean"],
      "priceRange": "₺₺",
      "image": "https://www.cigani.com.tr/images/hero.jpg",
      "sameAs": [
        "https://www.instagram.com/cigani.sigacik"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <LanguageProvider>
      <div className="App">
        <Navbar />
        <Hero />
        <About />
        <Gallery />
        <Menu />
      </div>
    </LanguageProvider>
  );
}

export default App;
