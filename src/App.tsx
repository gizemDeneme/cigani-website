import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Menu from './components/Menu';

function App() {
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
