import { Home, LayoutGrid, Heart, User } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

const tabs = [
  { id: 'home', icon: Home, label: 'ELITE' },
  { id: 'rooms', icon: LayoutGrid, label: 'Rooms' },
  { id: 'fav', icon: Heart, label: 'Saved' },
  { id: 'account', icon: User, label: 'Account' },
];

export default function BottomNav() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-stone-200 safe-area-bottom z-50">
      <div className="max-w-md mx-auto flex justify-around items-center py-2 px-2">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="flex flex-col items-center gap-1 flex-1 py-1 relative"
            >
              <div className={`transition-colors duration-200 ${isActive ? 'text-primary' : 'text-stone-400'}`}>
                <tab.icon size={22} fill={isActive ? 'currentColor' : 'none'} strokeWidth={isActive ? 2.5 : 2} />
              </div>
              <span className={`text-[10px] font-bold uppercase transition-colors duration-200 ${isActive ? 'text-primary' : 'text-stone-400'}`}>
                {tab.label}
              </span>
              {isActive && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute -top-2 w-1 h-1 bg-primary rounded-full"
                />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
