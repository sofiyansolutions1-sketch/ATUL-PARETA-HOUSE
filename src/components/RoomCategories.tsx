import { motion } from 'motion/react';
import { IndianRupee, Star, MapPin } from 'lucide-react';

const rooms = [
  {
    id: 1,
    name: 'Single Sharing Room',
    price: '3,500',
    rating: '4.8',
    reviews: '124',
    image: 'https://iili.io/B6bp4mQ.png',
    location: 'Indra Colony, Kota'
  },
  {
    id: 2,
    name: 'Double Sharing Room',
    price: '3,500',
    rating: '4.9',
    reviews: '86',
    image: 'https://iili.io/B6bbSn9.png',
    location: 'Indra Colony, Kota'
  }
];

export default function RoomCategories() {
  return (
    <section className="px-4 py-8">
      <div className="max-w-md mx-auto">
        <div className="flex justify-between items-end mb-6">
          <h2 className="text-xl font-extrabold text-stone-900">Available Rooms</h2>
          <button className="text-primary text-xs font-bold uppercase tracking-wider">Starting ₹3,500</button>
        </div>

        <div className="space-y-6">
          {rooms.map((room, i) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-100 flex p-3 gap-4"
            >
              <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between py-1">
                <div>
                  <h3 className="font-bold text-stone-900 text-sm mb-1">{room.name}</h3>
                  <div className="flex items-center gap-1 text-[10px] text-stone-400 mb-1">
                    <MapPin size={10} />
                    <span>{room.location}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-stone-900 font-extrabold">
                    <IndianRupee size={12} />
                    <span>{room.price}</span>
                    <span className="text-[10px] text-stone-400 font-normal ml-1">onwards</span>
                  </div>
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-primary text-white text-[10px] font-extrabold py-1.5 px-3 rounded-lg uppercase shadow-sm"
                  >
                    Inquire
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
