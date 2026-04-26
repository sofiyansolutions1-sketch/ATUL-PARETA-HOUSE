import { motion } from 'motion/react';
import { Send, Phone, Mail } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function InquiryForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [roomType, setRoomType] = useState('Single Occupancy');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate processing
    setTimeout(() => {
      setStatus('sent');
      
      // WhatsApp Redirection
      const adminPhone = "919799911501";
      const message = `*New Inquiry for Atul Pareta House*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Room:* ${roomType}%0A%0A_Sent from website Inquiry Form_`;
      const whatsappUrl = `https://wa.me/${adminPhone}?text=${message}`;
      
      window.open(whatsappUrl, '_blank');
      
      setTimeout(() => {
        setStatus('idle');
        setName('');
        setPhone('');
      }, 3000);
    }, 1000);
  };

  return (
    <div id="contact">
      <h2 className="text-xl font-extrabold text-stone-900 mb-2">Book Your Room</h2>
      <p className="text-stone-500 text-sm mb-6">आज ही अपना कमरा बुक करें और Kota में एक comfortable stay का अनुभव लें!</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          required
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="w-full bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors text-sm"
        />
        <input 
          required
          type="tel" 
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone number"
          className="w-full bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors text-sm"
        />
        <select 
          value={roomType}
          onChange={(e) => setRoomType(e.target.value)}
          className="w-full bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors text-sm appearance-none"
        >
          <option>Single Occupancy</option>
          <option>Double Sharing</option>
        </select>
        
        <motion.button
          whileTap={{ scale: 0.98 }}
          disabled={status !== 'idle'}
          className={`w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all ${
            status === 'sent' ? 'bg-green-600 text-white' : 'bg-primary text-white'
          }`}
        >
          {status === 'idle' && (
            <>
              Submit Inquiry <Send size={16} />
            </>
          )}
          {status === 'sending' && (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          )}
          {status === 'sent' && (
            <>
              Thank You! We'll call you.
            </>
          )}
        </motion.button>
      </form>

      <div className="mt-8 pt-8 border-t border-stone-100 flex justify-around">
        <a href="tel:+919799911501" className="flex flex-col items-center gap-2">
          <div className="w-10 h-10 bg-green-50 text-green-600 rounded-full flex items-center justify-center">
            <Phone size={18} />
          </div>
          <span className="text-[10px] font-bold text-stone-400 uppercase">Primary</span>
        </a>
        <a href="tel:+919587974718" className="flex flex-col items-center gap-2">
          <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
            <Phone size={18} />
          </div>
          <span className="text-[10px] font-bold text-stone-400 uppercase">Secondary</span>
        </a>
      </div>
    </div>
  );
}
