import { useState, useRef, useEffect } from 'react';
import { MapPin, Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const SUGGESTIONS = [
  'Single Sharing Room',
  'Double Sharing Room',
  'High Speed WiFi',
  'Air Conditioning (AC)',
  'Laundry Service',
  'RO Water',
  'CCTV Security',
  'Attached Washroom',
  'Mess Facility',
  'Indra Colony PG'
];

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const filteredSuggestions = SUGGESTIONS.filter(item => 
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-primary text-white pt-4 pb-4 px-4 sticky top-0 z-50">
      <div className="max-w-md mx-auto">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-xl font-black tracking-tighter text-white">ATUL PARETA HOUSE</h1>
        </div>

        {/* Location Row */}
        <div className="flex items-center mb-4">
          <a 
            href="https://www.google.com/maps/search/?api=1&query=Atul+Pareta+House+Indra+Colony+Vigyan+Nagar+Kota"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <MapPin size={14} fill="white" className="text-secondary" />
            <p className="text-[10px] text-white/80 font-bold uppercase tracking-wider">
              Indra Colony, vigyan nagar, Kota
            </p>
          </a>
        </div>

        {/* Search Bar with Suggestions */}
        <div className="relative" ref={searchRef}>
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">
            <Search size={18} />
          </div>
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setShowSuggestions(true);
            }}
            onFocus={() => setShowSuggestions(true)}
            placeholder="Search rooms, facilities..."
            className="w-full bg-white/10 border border-white/10 rounded-2xl py-3 pl-12 pr-10 outline-none focus:bg-white/20 transition-all placeholder:text-white/40 text-sm"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
            >
              <X size={16} />
            </button>
          )}

          {/* Suggestions Dropdown */}
          <AnimatePresence>
            {showSuggestions && searchQuery.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl overflow-hidden z-50 py-1 border border-stone-100"
              >
                {filteredSuggestions.length > 0 ? (
                  filteredSuggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSearchQuery(suggestion);
                        setShowSuggestions(false);
                      }}
                      className="w-full text-left px-4 py-3 text-sm text-stone-700 hover:bg-stone-50 flex items-center gap-3 active:bg-stone-100 transition-colors"
                    >
                      <Search size={14} className="text-stone-400" />
                      {suggestion}
                    </button>
                  ))
                ) : (
                  <div className="px-4 py-4 text-sm text-stone-400 italic">
                    No results found for "{searchQuery}"
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
