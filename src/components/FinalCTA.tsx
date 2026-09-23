import React from 'react';
import { ArrowRight, Lock, Clock, Sparkles } from 'lucide-react';

interface FinalCTAProps {
  onAccept: () => void;
  onDecline: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onAccept, onDecline }) => {
  return (
    <section className="w-full bg-gradient-to-b from-[#5B2A86] via-[#7B3DB8] to-[#3d185e] text-white py-16 px-4 text-center relative overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10">
        {/* DOBRA 11 — CTA FINAL */}
        <div className="space-y-4 mb-8">
          <div className="inline-flex items-center gap-2 bg-pink-500/20 border border-pink-400/40 text-pink-200 px-4 py-1 rounded-full text-xs sm:text-sm font-bold tracking-wide uppercase">
            <Sparkles className="w-4 h-4 text-[#F472B6]" />
            Última Oportunidade Nesta Sessão
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight text-balance">
            Não perca sua única chance de conseguir montar seus moldes do jeito certo.
          </h2>

          <p className="text-base sm:text-lg font-medium text-pink-100 max-w-2xl mx-auto leading-relaxed text-balance">
            Se você sair agora, pode acabar deixando seus moldes parados e jogando fora tudo que investiu.
          </p>

          <p className="text-sm sm:text-base font-extrabold text-[#F472B6] uppercase tracking-wide">
            Clique antes que seja tarde.
          </p>
        </div>

        {/* Big CTA Button */}
        <div className="max-w-md mx-auto mb-10">
          <button
            onClick={onAccept}
            className="w-full bg-[#EC4899] hover:bg-[#db2777] text-white font-black text-lg sm:text-xl py-4 sm:py-5 px-6 rounded-2xl shadow-2xl transition-all transform hover:-translate-y-1 active:translate-y-0 cursor-pointer animate-pulse-glow flex items-center justify-center gap-3"
          >
            <span>LIBERAR ACESSO POR APENAS R$ 67</span>
            <ArrowRight className="w-6 h-6" />
          </button>

          <div className="flex items-center justify-center gap-4 mt-3 text-xs text-purple-200">
            <span className="flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-emerald-400" /> Compra Segura
            </span>
            <span>·</span>
            <span>Acesso Instantâneo</span>
            <span>·</span>
            <span>Garantia de 7 Dias</span>
          </div>
        </div>

        {/* DOBRA 12 — RECUSA */}
        <div className="pt-6 border-t border-purple-800/60 max-w-lg mx-auto">
          <button
            type="button"
            onClick={onDecline}
            className="text-xs sm:text-sm text-purple-300 hover:text-purple-100 underline underline-offset-4 transition-colors font-medium cursor-pointer p-2 opacity-80 hover:opacity-100"
          >
            Não, obrigada. Prefiro tentar sozinha e correr o risco de errar tudo.
          </button>
        </div>
      </div>
    </section>
  );
};
