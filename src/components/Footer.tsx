import { motion } from 'motion/react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-400 py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-accent rounded flex items-center justify-center text-white font-serif text-lg font-bold">
                A
              </div>
              <span className="text-xl font-serif font-bold tracking-tight text-white">Atul Pareta House</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Dedicated student housing in Kota. Providing a secure, home-like environment 
              for aspiring students since 2014.
            </p>
          </div>

          <div>
            <h4 className="text-white font-serif font-bold mb-6 uppercase text-xs tracking-[0.2em]">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Room Types</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Facilities</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif font-bold mb-6 uppercase text-xs tracking-[0.2em]">Our Address</h4>
            <ul className="space-y-4 text-sm">
              <li>House No. D-69, Indra Colony,</li>
              <li>Vigyan Nagar Kota, Rajasthan</li>
              <li>Pin-324005</li>
              <li>Contact: 9799911501</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif font-bold mb-6 uppercase text-xs tracking-[0.2em]">Newsletter</h4>
            <p className="text-sm mb-6">Get updates on room availability and special offers.</p>
            <div className="flex gap-2 p-1 bg-white/5 rounded-xl border border-white/10">
              <input 
                type="email" 
                placeholder="Your email"
                className="bg-transparent border-none outline-none px-4 py-2 text-sm w-full"
              />
              <button className="bg-accent text-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider">Join</button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-medium tracking-wide">
            © {currentYear} Elite Stay PG Accommodation. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-[0.2em] text-stone-500">
            <span>Built for Tomorrow</span>
            <span>Premium Living</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
