import { motion } from 'motion/react';
import { MapPin, Navigation } from 'lucide-react';

export default function LocationSection() {
  const mapUrl = "https://www.google.com/maps/search/?api=1&query=Atul+Pareta+House+Indra+Colony+Kota";

  return (
    <section className="px-4 py-8 bg-white mt-4 rounded-[40px] shadow-sm mb-4">
      <div className="max-w-md mx-auto">
        <h2 className="text-xl font-extrabold text-stone-900 mb-2">Find Us</h2>
        <p className="text-stone-500 text-sm mb-6">Located in the prime student hub of Kota, everything you need is just a walk away.</p>
        
        <div className="bg-stone-50 rounded-3xl p-6 border border-stone-100 flex flex-col gap-4">
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-2xl">
              <MapPin className="text-primary" size={24} />
            </div>
            <div>
              <h3 className="font-bold text-stone-900 text-lg">Indra Colony</h3>
              <p className="text-stone-500 text-sm">Vigyan Nagar, Kota, Rajasthan 324005</p>
            </div>
          </div>

          <motion.a 
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-stone-900 text-white py-4 rounded-2xl flex items-center justify-center gap-2 font-bold shadow-lg shadow-stone-200"
          >
            <Navigation size={18} />
            Get Direct Directions
          </motion.a>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="bg-stone-50 p-4 rounded-2xl border border-stone-100">
            <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest mb-1">Coaching Hub</p>
            <p className="font-bold text-stone-700 text-sm">2km Radius</p>
          </div>
          <div className="bg-stone-50 p-4 rounded-2xl border border-stone-100">
            <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest mb-1">Railway Station</p>
            <p className="font-bold text-stone-700 text-sm">4.5km away</p>
          </div>
        </div>
      </div>
    </section>
  );
}
