import { motion } from 'motion/react';
import { MessageCircle, Phone } from 'lucide-react';

export default function FloatingActions() {
  return (
    <div className="fixed bottom-24 right-6 z-[100] flex flex-col gap-4">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/919799911501?text=Hi, I am interested in Atul Pareta House. Can I get more details?"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl transition-transform"
        aria-label="WhatsApp"
      >
        <MessageCircle size={30} fill="currentColor" />
      </motion.a>

      {/* Call Button */}
      <motion.a
        href="tel:+919799911501"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl transition-transform"
        aria-label="Call Now"
      >
        <Phone size={28} />
      </motion.a>
    </div>
  );
}
