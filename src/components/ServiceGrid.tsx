import { motion } from 'motion/react';
import { User, Users, Coffee, ShieldCheck, Zap, Thermometer, Waves, MapPin } from 'lucide-react';

const services = [
  { icon: User, label: 'Single Room', color: 'bg-blue-50 text-blue-600' },
  { icon: Users, label: 'Double Sharing', color: 'bg-green-50 text-green-600' },
  { icon: Coffee, label: 'RO Water', color: 'bg-indigo-50 text-indigo-600' },
  { icon: Zap, label: 'Inverter Power', color: 'bg-yellow-50 text-yellow-600' },
  { icon: Thermometer, label: 'Water Geyser', color: 'bg-orange-50 text-orange-600' },
  { icon: Waves, label: '24h Water', color: 'bg-cyan-50 text-cyan-600' },
  { icon: ShieldCheck, label: 'Security', color: 'bg-slate-50 text-slate-600' },
  { icon: MapPin, label: 'Near Coachings', color: 'bg-red-50 text-red-600' },
];

export default function ServiceGrid() {
  return (
    <section className="bg-white px-4 py-8 rounded-b-[40px] shadow-sm mb-4">
      <div className="max-w-md mx-auto">
        <h2 className="text-xl font-extrabold text-stone-900 mb-6">Explore our facilities</h2>
        <div className="grid grid-cols-4 gap-y-8 gap-x-4">
          {services.map((service, i) => (
            <motion.button
              key={service.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-2 group"
            >
              <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center transition-transform group-active:scale-90 shadow-sm`}>
                <service.icon size={26} strokeWidth={1.5} />
              </div>
              <span className="text-[11px] font-bold text-stone-600 text-center leading-tight">
                {service.label}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
