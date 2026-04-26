import { motion } from 'motion/react';
import { User, Users, UsersRound, IndianRupee, MapPin } from 'lucide-react';

const rooms = [
  {
    type: 'Single Occupancy',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800&h=600',
    price: '12,000',
    amenities: ['Premium Bed', 'Study Table', 'AC', 'Attached Washroom'],
    icon: User
  },
  {
    type: 'Double Sharing',
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=800&h=600',
    price: '8,500',
    amenities: ['Comfortable Beds', 'Reading Lamp', 'AC', 'Shared Balcony'],
    icon: Users
  },
  {
    type: 'Triple Sharing',
    image: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45?auto=format&fit=crop&q=80&w=801&h=600',
    price: '6,500',
    amenities: ['Private Lockers', 'Common Area', 'Food Included'],
    icon: UsersRound
  }
];

export default function Rooms() {
  return (
    <section id="rooms" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-xs uppercase tracking-[0.2em] font-bold text-accent mb-4 block"
            >
              Accommodation
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-serif font-bold text-stone-900"
            >
              Explore Our <span className="italic">Room Types</span>
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-2 text-stone-500 font-medium"
          >
            <MapPin size={18} />
            Lucknow, Uttar Pradesh
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rooms.map((room, i) => (
            <motion.div
              key={room.type}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm group hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.type}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full flex items-center gap-1 font-bold text-primary shadow-sm">
                  <IndianRupee size={14} />
                  <span>{room.price}</span>
                  <span className="text-[10px] text-stone-500 font-normal ml-0.5">/ month</span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4 text-accent font-semibold">
                  <room.icon size={18} />
                  <span className="uppercase text-xs tracking-wider">{room.type}</span>
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4 text-stone-800">{room.type}</h3>
                <ul className="space-y-3 mb-8">
                  {room.amenities.map(item => (
                    <li key={item} className="flex items-center gap-2 text-stone-500 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full py-4 bg-primary text-white font-semibold rounded-2xl hover:bg-primary-light transition-all shadow-md active:scale-95"
                >
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
