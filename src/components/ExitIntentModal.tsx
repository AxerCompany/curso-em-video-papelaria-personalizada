import React from 'react';
import { AlertCircle, X, Check, Lock, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface ExitIntentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmDecline: () => void;
}

const DOWNSELL_CHECKOUT_URL = 'https://pay.wiapy.com/6ab46e19e6f8b4da027e83e1';
const DECLINE_REDIRECT_URL = 'https://upsell-papelaria.vercel.app/';

export const ExitIntentModal: React.FC<ExitIntentModalProps> = ({
  isOpen,
  onClose,
  onConfirmDecline,
}) => {
  if (!isOpen) return null;

  const handleRefusalClick = () => {
    // Preserve any existing query parameters (like wiapy_sell or tracking tokens)
    let redirectUrl = DECLINE_REDIRECT_URL;
    try {
      if (window.location.search) {
        const currentParams = new URLSearchParams(window.location.search);
        const targetUrlObj = new URL(DECLINE_REDIRECT_URL);
        currentParams.forEach((value, key) => {
          targetUrlObj.searchParams.set(key, value);
        });
        redirectUrl = targetUrlObj.toString();
      }
    } catch {
      redirectUrl = DECLINE_REDIRECT_URL;
    }

    if (onConfirmDecline) {
      onConfirmDecline();
    }

    window.location.href = redirectUrl;
  };

  const handleAcceptDownsell = () => {
    // Preserve wiapy_sell token if present in URL
    let targetUrl = DOWNSELL_CHECKOUT_URL;
    try {
      const searchParams = new URLSearchParams(window.location.search);
      const wiapySell = searchParams.get('wiapy_sell');
      if (wiapySell) {
        targetUrl = `${DOWNSELL_CHECKOUT_URL}?wiapy_sell=${encodeURIComponent(wiapySell)}`;
      }
    } catch {
      targetUrl = DOWNSELL_CHECKOUT_URL;
    }
    window.location.href = targetUrl;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-pink-400 my-auto animate-scaleUp">
        {/* Top Emergency Strip */}
        <div className="bg-gradient-to-r from-[#5B2A86] via-[#EC4899] to-[#5B2A86] text-white py-3 px-4 text-center relative">
          <div className="flex items-center justify-center gap-1.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider">
            <AlertCircle className="w-4 h-4 text-amber-300 animate-pulse shrink-0" />
            <span>Espere! Última Chance Antes de Sair</span>
          </div>
          <button
            onClick={onClose}
            className="absolute top-2.5 right-3 text-white/80 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 sm:p-7 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-300 text-emerald-800 text-[11px] sm:text-xs font-black uppercase px-3 py-1 rounded-full mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            SUPER DESCONTO RELÂMPAGO LIBERADO
          </div>

          {/* Headline */}
          <h3 className="text-xl sm:text-2xl font-black text-[#5B2A86] leading-tight mb-2 text-balance">
            Eu não quero que seus moldes fiquem parados por falta de um passo a passo.
          </h3>

          {/* Justification Copy */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 text-balance">
            Você já gastou dinheiro adquirindo os moldes digitais. Se sair agora tentando montar no improviso, você corre o risco de estragar folhas fotográficas caras, errar nas dobras e passar horas frustrada.
          </p>

          {/* Strong Value Contrast Pricing Box */}
          <div className="bg-gradient-to-br from-purple-50 via-pink-50/40 to-purple-50 rounded-2xl p-4 sm:p-5 border-2 border-purple-200 mb-5 relative">
            {/* Price Strikethrough Progression */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 pt-1 pb-2">
              <div className="flex items-center gap-1.5 text-slate-400">
                <span className="text-xs uppercase font-semibold">Catálogo:</span>
                <span className="text-sm font-bold line-through">R$ 197,00</span>
              </div>
              <div className="hidden sm:block text-slate-300">→</div>
              <div className="flex items-center gap-1.5 text-red-500">
                <span className="text-xs uppercase font-semibold">Desta página:</span>
                <span className="text-sm font-bold line-through">R$ 67,00</span>
              </div>
            </div>

            {/* Final Target Downsell Price */}
            <div className="mt-1 pt-2 border-t border-purple-200/80">
              <p className="text-xs font-extrabold uppercase text-[#5B2A86] tracking-wide mb-1">
                Leve o Treinamento Completo Por:
              </p>
              <div className="flex items-baseline justify-center gap-1.5">
                <span className="text-sm font-bold text-slate-600">Apenas</span>
                <span className="text-4xl sm:text-5xl font-black text-emerald-600 tracking-tight font-mono tabular-nums">
                  R$ 47,00
                </span>
                <span className="text-xs font-bold text-slate-500">à vista</span>
              </div>
              <p className="text-xs text-slate-600 mt-1 font-medium">
                ou em até <strong>5x de R$ 10,22</strong> no cartão
              </p>
            </div>
          </div>

          {/* What is included check-list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left text-xs text-slate-700 mb-5 bg-white p-3 rounded-xl border border-slate-200">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 font-black" />
              <span>Aulas em vídeo completas</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 font-black" />
              <span>Técnica do Vinco Sem Trincar</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 font-black" />
              <span>Colagem sem marcas ou vazamento</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 font-black" />
              <span>Precificação simples sem prejuízo</span>
            </div>
          </div>

          {/* Action CTA Button */}
          <div className="space-y-3">
            <button
              type="button"
              onClick={handleAcceptDownsell}
              className="w-full bg-[#00d769] hover:bg-[#00b85a] text-white font-black text-base sm:text-lg py-4 px-5 rounded-2xl shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>SIM! QUERO APROVEITAR POR R$ 47 AGORA</span>
              <ArrowRight className="w-5 h-5 shrink-0" />
            </button>

            {/* Security Guarantee Pills */}
            <div className="flex items-center justify-center gap-3 text-[11px] text-slate-500 font-medium">
              <span className="flex items-center gap-1">
                <Lock className="w-3.5 h-3.5 text-emerald-600" /> Compra 100% Segura
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-purple-600" /> Garantia de 7 Dias
              </span>
              <span>·</span>
              <span>Acesso Imediato</span>
            </div>

            {/* Refusal Confirmation */}
            <div className="pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={handleRefusalClick}
                className="text-[11px] sm:text-xs text-slate-400 hover:text-red-500 underline underline-offset-2 transition-colors cursor-pointer p-1 font-medium"
              >
                Não, prefiro abrir mão do desconto de R$ 47 e correr o risco de errar na montagem sozinha.
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
