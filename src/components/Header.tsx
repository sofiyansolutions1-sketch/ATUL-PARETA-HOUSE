import { MapPin, Menu, Search } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-primary text-white pt-4 pb-4 px-4 sticky top-0 z-50">
      <div className="max-w-md mx-auto">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-xl font-black tracking-tighter text-white">ATUL PARETA HOUSE</h1>
          <button className="bg-white/20 p-2 rounded-xl backdrop-blur-sm">
            <Menu size={20} />
          </button>
        </div>

        {/* Location Row */}
        <div className="flex justify-between items-center mb-4">
          <a 
            href="https://www.google.com/maps/search/?api=1&query=Atul+Pareta+House+Indra+Colony+Kota"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <MapPin size={14} fill="white" className="text-secondary" />
            <div>
              <p className="text-[10px] text-white/80 font-bold uppercase tracking-wider">Indra Colony, Kota</p>
            </div>
          </a>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">
            <Search size={18} />
          </div>
          <input 
            type="text" 
            placeholder="Search rooms, facilities..."
            className="w-full bg-white/10 border border-white/10 rounded-2xl py-3 pl-12 pr-4 outline-none focus:bg-white/20 transition-all placeholder:text-white/40 text-sm"
          />
        </div>
      </div>
    </header>
  );
}
