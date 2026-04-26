import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

const banners = [
  {
    id: 0,
    title: 'Atul Pareta House - Your Study Home',
    subtitle: 'Walking distance to all major coachings in Kota',
    image: 'https://iili.io/B6bfNd7.png',
  },
  { id: 1, title: 'Premium Facilities', subtitle: 'Clean and hygienic environment', image: 'https://iili.io/B6b63qQ.png' },
  { id: 2, title: 'Comfortable Rooms', subtitle: 'Peaceful stay for focused study', image: 'https://iili.io/B6b60Is.png' },
  { id: 3, title: 'Student Life', subtitle: 'Prime location in Indra Colony', image: 'https://iili.io/B6b6ZZJ.png' },
  { id: 4, title: 'Safety First', subtitle: '24/7 water and electricity supply', image: 'https://iili.io/B6bPAZb.png' },
  { id: 5, title: 'Shared Living', subtitle: 'Affordable and cozy dormitory options', image: 'https://iili.io/B6bsJXs.png' },
  { id: 6, title: 'Common Areas', subtitle: 'RO water and water geyser available', image: 'https://iili.io/B6bsQje.png' },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="px-4 py-4 bg-white overflow-hidden">
      <div className="max-w-md mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative rounded-2xl overflow-hidden aspect-[2/1] shadow-md border border-stone-100 bg-stone-100"
        >
          <AnimatePresence mode="wait">
            <motion.img 
              key={banners[currentIndex].id}
              src={banners[currentIndex].image} 
              alt={banners[currentIndex].title}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>
          
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent flex flex-col justify-center p-4">
            <motion.h2 
              key={`title-${currentIndex}`}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-white font-bold text-lg leading-tight mb-1 max-w-[180px]"
            >
              {banners[currentIndex].title}
            </motion.h2>
            <motion.p 
              key={`subtitle-${currentIndex}`}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 0.8 }}
              className="text-white text-[10px] mb-3 max-w-[150px]"
            >
              {banners[currentIndex].subtitle}
            </motion.p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-stone-900 text-[10px] font-bold py-1.5 px-3 rounded-lg w-fit uppercase tracking-wider shadow-lg active:scale-95 transition-transform"
            >
              Book Now
            </button>
          </div>

          {/* Progress Indicators */}
          <div className="absolute bottom-3 right-4 flex gap-1">
            {banners.map((_, i) => (
              <div 
                key={i}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === currentIndex ? 'w-4 bg-white' : 'w-1 bg-white/40'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
