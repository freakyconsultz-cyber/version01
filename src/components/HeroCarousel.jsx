
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const defaultSlides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1703767593023-46da0bf7ea67', // Chardham
    title: 'Coz Every Journey Is A Dream',
    subtitle: 'Discover the unseen beauty of India with premium comfort',
    localWord: 'यात्रा (Journey)',
    isGeneric: true
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1696223094612-c237206ec9f4', // Brij Darshan
    title: 'Brij Darshan',
    subtitle: 'Experience the land of Radha Krishna',
    localWord: 'प्रेम (Love)' 
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1677868818231-b5e09bcfc5e3', // Jaipur
    title: 'Royal Jaipur',
    subtitle: 'The Pink City awaits you',
    localWord: 'पधारो (Welcome)'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1459100652174-45f3b5ca9d04', // Kerala
    title: 'Kerala Backwaters',
    subtitle: 'God\'s own country',
    localWord: 'സുഖം (Comfort)'
  }
];

function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const slides = defaultSlides; // Use internal constant to avoid prop drilling issues for now

  useEffect(() => {
    if (!slides || slides.length === 0) return;
    
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides]);

  if (!slides || slides.length === 0) {
    return <div className="h-[85vh] w-full bg-gray-900 flex items-center justify-center text-white">Loading...</div>;
  }

  // Safe access
  const currentSlide = slides[current] || slides[0];

  return (
    <div className="relative h-[85vh] w-full overflow-hidden rounded-b-3xl shadow-2xl bg-gray-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          {currentSlide.image && (
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${currentSlide.image})` }}
              role="img"
              aria-label={currentSlide.title}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#b8336a]/80 via-black/40 to-black/10 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-4 mt-[-4rem]">
        <motion.div
          key={`text-${current}`}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {currentSlide.localWord && (
            <span 
              className="block text-xl md:text-3xl font-light tracking-[0.2em] mb-4 text-pink-200 uppercase"
              style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
            >
              {currentSlide.localWord}
            </span>
          )}
          <h1 className={`font-bold font-serif mb-6 tracking-tight drop-shadow-2xl ${currentSlide.isGeneric ? 'text-5xl md:text-8xl' : 'text-5xl md:text-8xl'}`}>
            {currentSlide.title || 'Welcome'}
          </h1>
          {currentSlide.subtitle && (
            <p className="text-lg md:text-2xl font-light opacity-90 max-w-3xl mx-auto leading-relaxed">
              {currentSlide.subtitle}
            </p>
          )}
        </motion.div>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-28 left-0 right-0 flex justify-center space-x-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === current ? 'w-10 bg-[#b8336a]' : 'w-2 bg-white/50 hover:bg-white'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroCarousel;
