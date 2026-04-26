import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

const galleryImages = [
  { id: 1, url: 'https://iili.io/B6b63qQ.png', alt: 'Room View 1' },
  { id: 2, url: 'https://iili.io/B6b60Is.png', alt: 'Room View 2' },
  { id: 3, url: 'https://iili.io/B6b6ZZJ.png', alt: 'Facility View' },
  { id: 4, url: 'https://iili.io/B6bPAZb.png', alt: 'Entrance View' },
  { id: 5, url: 'https://iili.io/B6bsJXs.png', alt: 'Dorm View' },
  { id: 6, url: 'https://iili.io/B6bsQje.png', alt: 'Common Area' },
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="px-4 py-8 bg-white mt-4 rounded-t-[40px] shadow-sm">
      <div className="max-w-md mx-auto">
        <h2 className="text-xl font-extrabold text-stone-900 mb-6">Property Gallery</h2>
        
        <div className="relative aspect-video rounded-3xl overflow-hidden bg-stone-100 shadow-inner">
          <AnimatePresence mode="wait">
            <motion.img
              key={galleryImages[currentIndex].id}
              src={galleryImages[currentIndex].url}
              alt={galleryImages[currentIndex].alt}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {galleryImages.map((_, i) => (
              <div 
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === currentIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
        
        <p className="text-center text-[10px] text-stone-400 font-bold uppercase tracking-widest mt-4">
          Real images of Atul Pareta House
        </p>
      </div>
    </section>
  );
}
