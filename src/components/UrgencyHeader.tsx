import React, { useState, useEffect } from 'react';
import { Clock, CheckCircle2 } from 'lucide-react';

interface UrgencyHeaderProps {
  onCtaClick: () => void;
}

export const UrgencyHeader: React.FC<UrgencyHeaderProps> = ({ onCtaClick }) => {
  // 10 minutes countdown timer
  const [timeLeft, setTimeLeft] = useState<number>(10 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const seconds = (timeLeft % 60).toString().padStart(2, '0');

  return (
    <header className="w-full bg-[#3d185e] border-b border-purple-900/60 shadow-lg text-white">
      {/* Top Warning Announcement Bar */}
      <div className="bg-gradient-to-r from-[#EC4899] via-[#db2777] to-[#EC4899] py-2 px-4 text-center text-xs sm:text-sm font-bold tracking-wide uppercase shadow-sm flex items-center justify-center gap-2">
        <span className="inline-block w-2.5 h-2.5 rounded-full bg-white animate-ping" />
        <span>Atenção: Seu pedido dos moldes está 90% concluído. Não atualize esta página.</span>
        <span className="hidden md:inline bg-black/20 px-2 py-0.5 rounded text-white font-mono tabular-nums">
          Expira em {minutes}:{seconds}
        </span>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-4 sm:py-6">
        {/* Progress Step Indicator */}
        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-2 sm:gap-3 max-w-2xl mx-auto mb-5 text-[11px] sm:text-xs md:text-sm">
          <div className="flex items-center gap-1.5 text-pink-300 font-medium opacity-90">
            <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F472B6] shrink-0" />
            <span>Papelaria Descomplicada comprado e entregue no e-mail</span>
          </div>
          <div className="hidden sm:block h-0.5 w-6 sm:w-10 bg-pink-500/40" />
          <div className="flex items-center gap-1.5 font-bold text-white bg-purple-900/80 px-2.5 py-1 rounded-md border border-pink-500/40 shadow-sm shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#EC4899] animate-pulse" />
            <span>2. Oportunidade Única</span>
          </div>
          <div className="hidden sm:block h-0.5 w-6 sm:w-10 bg-purple-800" />
          <div className="flex items-center gap-1.5 text-purple-300/70 font-medium shrink-0">
            <span className="w-3.5 h-3.5 rounded-full border border-purple-500/40 flex items-center justify-center text-[10px]">3</span>
            <span>Acesso Final</span>
          </div>
        </div>

        {/* DOBRA 01 — URGÊNCIA / INTERRUPÇÃO DE PADRÃO */}
        <div className="bg-[#5B2A86]/90 rounded-2xl border border-pink-500/30 p-5 sm:p-6 shadow-2xl relative overflow-hidden backdrop-blur-sm">
          <div className="absolute -right-16 -top-16 w-48 h-48 bg-pink-500/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight mb-2.5 text-balance">
              ⚠️ PARE AGORA.
            </h2>

            <p className="text-sm sm:text-base md:text-lg font-medium text-pink-100 leading-relaxed mb-2 text-balance">
              Se você sair dessa página, talvez nunca consiga montar seus personalizados do jeito certo.
            </p>

            <p className="text-xs sm:text-sm text-purple-200/90 leading-relaxed text-balance">
              Essa é sua única chance de acessar o curso que vai te impedir de desperdiçar os moldes que acabou de comprar.
            </p>

            {/* Live Clock Strip */}
            <div className="mt-4 inline-flex items-center gap-2 text-xs text-pink-200/90 bg-black/25 px-3.5 py-1 rounded-full border border-pink-500/20">
              <Clock className="w-3.5 h-3.5 text-[#F472B6]" />
              <span>Esta oportunidade especial encerra em: </span>
              <span className="font-mono font-bold text-white tracking-wider tabular-nums">{minutes}:{seconds}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
