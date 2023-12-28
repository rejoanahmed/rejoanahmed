'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

let tabs = [
  { id: 'home', label: 'Home' },
  { id: 'work', label: 'Work' },
  { id: 'showcase', label: 'Showcase' },
  { id: 'devlog', label: 'Devlog' },
  { id: 'community', label: 'Community' }
];

function AnimatedTabs() {
  let [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="z-10 flex space-x-1 rounded-md bg-slate-200 px-3 py-2">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`${
            activeTab === tab.id ? '' : 'hover:text-slate-900/60'
          } relative rounded-full px-3 py-1.5 text-sm font-medium text-slate-800 outline-sky-400 transition focus-visible:outline-2 dark:text-black`}
          style={{
            WebkitTapHighlightColor: 'transparent'
          }}
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-white mix-blend-difference"
              style={{ borderRadius: 9999 }}
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default AnimatedTabs;
