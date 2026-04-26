import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <div>
      <h2 className="text-xl font-extrabold text-stone-900 mb-4">🌟 Why Choose Us?</h2>
      <p className="text-stone-500 text-sm leading-relaxed mb-6 italic">
        "आज ही अपना कमरा बुक करें और Kota में एक comfortable stay का अनुभव लें!"
      </p>

      <div className="grid grid-cols-1 gap-3 mb-6">
        {[
          'Safe & Student-Friendly Environment',
          'Prime Location (Coaching Hub के पास)',
          'Affordable & Comfortable Living',
          'Peaceful Stay with Basic Facilities',
          '2km from All Kota Coachings'
        ].map((item) => (
          <div key={item} className="flex items-center gap-2 text-stone-700 text-sm font-medium bg-stone-50 p-2 rounded-lg">
            <CheckCircle2 size={16} className="text-primary" />
            {item}
          </div>
        ))}
      </div>

      <div className="flex gap-4">
        <div className="flex-1 bg-primary text-white p-4 rounded-2xl text-center">
          <span className="text-2xl font-bold block">500+</span>
          <span className="text-[10px] uppercase font-bold opacity-80">Students</span>
        </div>
        <div className="flex-1 bg-accent text-white p-4 rounded-2xl text-center">
          <span className="text-2xl font-bold block">4.9</span>
          <span className="text-[10px] uppercase font-bold opacity-80">Avg. Rating</span>
        </div>
      </div>
    </div>
  );
}
