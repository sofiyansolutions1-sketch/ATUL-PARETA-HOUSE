import { motion } from 'motion/react';
import { Wifi, Utensils, ShieldCheck, AirVent, WashingMachine, Coffee, Tv, Zap } from 'lucide-react';

const amenities = [
  { icon: Wifi, title: 'High Speed Wifi', desc: 'Unlimited data for studies and entertainment.' },
  { icon: Utensils, title: 'Healthy Meals', desc: 'Delicious home-cooked food served 3 times a day.' },
  { icon: ShieldCheck, title: '24/7 Security', desc: 'CCTV surveillance and professional guards.' },
  { icon: AirVent, title: 'Air Conditioning', desc: 'Stay cool and focused in our AC rooms.' },
  { icon: WashingMachine, title: 'Laundry Service', desc: 'Hassle-free washing and cleaning for your clothes.' },
  { icon: Coffee, title: 'Pure Water', desc: 'Unlimited safe drinking water with RO purification.' },
  { icon: Tv, title: 'Entertainment', desc: 'Common area with LED TV and board games.' },
  { icon: Zap, title: 'Power Backup', desc: '24/7 electricity with generator support.' },
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs uppercase tracking-[0.2em] font-bold text-accent mb-4 block"
          >
            Premium Features
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6 text-stone-900"
          >
            Everything You Need for a <span className="italic">Perfect Stay</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-stone-500 text-lg"
          >
            We provide all the essential services to make sure you can focus on what matters most.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {amenities.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 bg-stone-50 rounded-2xl flex items-center justify-center text-primary mb-6 transition-all group-hover:bg-primary group-hover:text-white group-hover:rotate-6 shadow-sm">
                <item.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl font-bold mb-2 text-stone-900">{item.title}</h3>
              <p className="text-sm text-stone-500 leading-relaxed font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
