import React from 'react';
import { Zap, Lock, CreditCard, QrCode } from 'lucide-react';

interface OfferPriceBlockProps {
  onCtaClick: () => void;
}

export const OfferPriceBlock: React.FC<OfferPriceBlockProps> = ({ onCtaClick }) => {
  return (
    <section id="oferta" className="w-full bg-[#F8F8F8] text-slate-900 py-16 px-4 relative">
      <div className="max-w-4xl mx-auto">
        {/* DOBRA 08 Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#EC4899] bg-pink-100 px-3 py-1 rounded-full mb-3">
            <Zap className="w-4 h-4 text-[#EC4899]" />
            Condição Especial de 1 Clique
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#5B2A86] tracking-tight leading-tight mb-4 text-balance">
            Você já gastou dinheiro nos moldes.
          </h2>

          <p className="text-xl sm:text-2xl font-extrabold text-[#EC4899] mb-3 text-balance">
            Não jogue esse investimento fora por economizar apenas R$67.
          </p>

          <p className="text-base sm:text-lg font-bold text-slate-700 mb-1">
            Essa oferta nunca mais vai aparecer.
          </p>

          <p className="text-sm sm:text-base font-semibold text-red-600">
            Se sair agora, perde sua única chance.
          </p>
        </div>

        {/* The Main Offer Card */}
        <div className="bg-white rounded-3xl border-2 border-[#5B2A86] shadow-2xl overflow-hidden mb-8 relative">
          {/* Top banner strip */}
          <div className="bg-gradient-to-r from-[#5B2A86] via-[#7B3DB8] to-[#5B2A86] text-white p-4 text-center">
            <p className="text-xs sm:text-sm font-extrabold tracking-wider uppercase text-pink-200">
              ⚡ Oferta Exclusiva Para Quem Acabou de Comprar os Moldes
            </p>
          </div>

          <div className="p-6 sm:p-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Left Column: What you receive */}
              <div className="md:col-span-7 space-y-3.5">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#5B2A86]">
                  Método Montagem Perfeita de Personalizados
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Acesso imediato e vitalício a todas as videoaulas práticas em alta definição + suporte às dúvidas.
                </p>

                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-800">
                    <span className="w-5 h-5 rounded-full bg-pink-100 text-[#EC4899] flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                    <span>Módulo de produção na prática: montagem do zero sem erro</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-800">
                    <span className="w-5 h-5 rounded-full bg-pink-100 text-[#EC4899] flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                    <span>Como escolher impressoras, papéis e tintas certos</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-800">
                    <span className="w-5 h-5 rounded-full bg-pink-100 text-[#EC4899] flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                    <span>Materiais essenciais para começar sem gastar à toa</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-800">
                    <span className="w-5 h-5 rounded-full bg-pink-100 text-[#EC4899] flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                    <span>Divulgação e primeiros pedidos no WhatsApp</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-800">
                    <span className="w-5 h-5 rounded-full bg-pink-100 text-[#EC4899] flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                    <span>Precificação lucrativa: calcule custos e lucro sem achismo</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Pricing & Dobra 09 Button */}
              <div className="md:col-span-5 bg-[#F8F8F8] rounded-2xl p-6 border border-purple-100 text-center flex flex-col justify-center">
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-1">
                  Valor Normal do Curso:
                </p>
                <p className="text-base text-slate-400 line-through font-bold mb-1">
                  R$ 197,00
                </p>

                <div className="my-2">
                  <span className="text-xs font-extrabold uppercase text-[#EC4899] bg-pink-100 px-2.5 py-0.5 rounded-full">
                    Desconto Único de 66%
                  </span>
                  <div className="mt-2 flex items-baseline justify-center gap-1">
                    <span className="text-sm font-bold text-slate-600">Por apenas</span>
                    <span className="text-4xl sm:text-5xl font-black text-[#5B2A86] tracking-tight font-mono tabular-nums">
                      R$ 67
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    ou em até <strong>8x de R$ 9,68</strong> no cartão
                  </p>
                </div>

                {/* DOBRA 09 — BOTÃO DE COMPRA */}
                <button
                  onClick={onCtaClick}
                  className="w-full mt-4 bg-[#EC4899] hover:bg-[#db2777] text-white font-black text-lg sm:text-xl py-4 px-6 rounded-xl shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer animate-pulse-glow"
                >
                  LIBERAR ACESSO
                </button>

                <p className="text-[11px] text-slate-500 mt-2.5 flex items-center justify-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Acesso Imediato · Compra 100% Segura</span>
                </p>

                {/* Badges */}
                <div className="flex items-center justify-center gap-2 mt-4 pt-4 border-t border-slate-200 text-xs text-slate-600">
                  <span className="inline-flex items-center gap-1 font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    <QrCode className="w-3.5 h-3.5" /> Pix Instantâneo
                  </span>
                  <span className="inline-flex items-center gap-1 font-semibold text-purple-700 bg-purple-50 px-2 py-0.5 rounded">
                    <CreditCard className="w-3.5 h-3.5" /> Até 8x no Cartão
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
