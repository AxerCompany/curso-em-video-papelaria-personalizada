import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

interface StickyBottomBarProps {
  onCtaClick: () => void;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({ onCtaClick }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar only after scrolling down 400px
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <aside
      aria-label="Barra de adesão rápida"
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#3d185e]/95 backdrop-blur-md border-t border-pink-500/40 shadow-2xl py-2 px-3 sm:px-6 transition-all duration-300 transform translate-y-0"
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-3">
        {/* Left info */}
        <div className="flex items-center gap-2 text-white">
          <div className="hidden sm:flex w-8 h-8 rounded-lg bg-[#EC4899] items-center justify-center shrink-0">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="text-xs sm:text-sm font-bold text-white truncate">
              Curso Montagem Perfeita
            </p>
            <p className="text-[10px] sm:text-xs text-pink-300 font-semibold">
              De <span className="line-through text-purple-300">R$ 197</span> por apenas{' '}
              <strong className="text-white font-mono font-bold text-xs sm:text-sm">R$ 67,00</strong>
            </p>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={onCtaClick}
          className="bg-[#EC4899] hover:bg-[#db2777] text-white font-black text-xs sm:text-sm py-2 sm:py-2.5 px-4 sm:px-6 rounded-xl shadow-lg transition-all transform active:scale-95 whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
        >
          <span>LIBERAR ACESSO</span>
          <ArrowRight className="w-4 h-4 hidden sm:inline" />
        </button>
      </div>
    </aside>
  );
};
