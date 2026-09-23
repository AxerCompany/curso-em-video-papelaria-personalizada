import React from 'react';
import { ShieldCheck, Award, RefreshCw, CheckCircle } from 'lucide-react';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="w-full bg-[#5B2A86] text-white py-14 px-4 border-t border-purple-900/60">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-purple-900/90 to-[#4a1c72] rounded-3xl p-6 sm:p-10 border-2 border-pink-400/40 shadow-2xl relative overflow-hidden">
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 relative z-10">
            {/* Guarantee Badge Seal */}
            <div className="shrink-0 relative">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-tr from-[#EC4899] to-[#7B3DB8] p-1 shadow-xl flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-[#3d185e] border-2 border-pink-300/40 flex flex-col items-center justify-center text-center p-2">
                  <ShieldCheck className="w-8 h-8 text-[#F472B6] mb-1" />
                  <span className="text-[11px] uppercase tracking-wider font-extrabold text-pink-200 leading-none">
                    Garantia
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-white font-mono leading-none my-0.5">
                    7 DIAS
                  </span>
                  <span className="text-[9px] uppercase tracking-wider text-pink-300 font-bold leading-none">
                    100% Blindada
                  </span>
                </div>
              </div>
            </div>

            {/* DOBRA 10 Copy */}
            <div className="text-center sm:text-left space-y-3">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-pink-300 bg-white/10 px-3 py-1 rounded-full border border-pink-500/20">
                <Award className="w-3.5 h-3.5 text-[#F472B6]" />
                Risco Zero Para Você
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-snug text-balance">
                Se você não vender como uma profissional depois de assistir às aulas, devolvemos seu dinheiro.
              </h3>

              <p className="text-xs sm:text-sm text-purple-100/90 leading-relaxed text-balance">
                Acesse o curso agora, assista a todas as aulas de montagem, baixe os guias de cola e aplique as técnicas nas suas caixinhas. Se por qualquer razão você sentir que não aprendeu ou que não teve retorno, basta enviar uma mensagem e nós reembolsamos 100% do seu valor imediatamente. Sem letras miúdas.
              </p>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-1 text-xs text-pink-200">
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-[#F472B6]" />
                  Reembolso direto e rápido
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-[#F472B6]" />
                  Sem perguntas incômodas
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-[#F472B6]" />
                  Garantido pelo Código do Consumidor
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
