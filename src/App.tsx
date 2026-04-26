import Header from './components/Header';
import Hero from './components/Hero';
import ServiceGrid from './components/ServiceGrid';
import RoomCategories from './components/RoomCategories';
import Gallery from './components/Gallery';
import LocationSection from './components/LocationSection';
import About from './components/About';
import InquiryForm from './components/InquiryForm';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-bg-light pb-8">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[100] origin-left"
        style={{ scaleX }}
      />

      <Header />
      
      <main className="max-w-md mx-auto">
        <Hero />
        <ServiceGrid />
        <RoomCategories />
        <Gallery />
        <LocationSection />
        
        {/* Native-style sections */}
        <section className="px-4 py-8 bg-white mt-4 rounded-[40px] shadow-sm mb-4">
          <About />
        </section>

        <section className="px-4 py-8 bg-white mt-4 rounded-[40px] shadow-sm">
          <InquiryForm />
        </section>

        <Footer />
      </main>

      <FloatingActions />
    </div>
  );
}
