import React from 'react';
import { AlertTriangle, X, ShieldAlert, ArrowRight } from 'lucide-react';

interface ExitIntentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept: () => void;
  onConfirmDecline: () => void;
}

export const ExitIntentModal: React.FC<ExitIntentModalProps> = ({
  isOpen,
  onClose,
  onAccept,
  onConfirmDecline,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-red-400">
        {/* Urgent Warning Header */}
        <div className="bg-red-600 text-white p-4 text-center relative">
          <div className="flex items-center justify-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-300 animate-pulse" />
            <span className="text-sm font-black uppercase tracking-wider">
              Espere! Último Aviso
            </span>
          </div>
          <button
            onClick={onClose}
            className="absolute top-3.5 right-3.5 text-white/80 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 text-center space-y-4">
          <div className="w-14 h-14 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto">
            <ShieldAlert className="w-8 h-8" />
          </div>

          <h3 className="text-xl font-extrabold text-[#5B2A86] leading-snug">
            Tem certeza que deseja tentar montar tudo sozinha?
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Ao recusar agora, você perde o desconto exclusivo de <strong>R$ 130</strong> e não terá acesso ao passo a passo das 6 caixas mais vendidas, nem à técnica do vinco perfeito.
          </p>

          <div className="bg-amber-50 rounded-xl p-3 border border-amber-200 text-xs text-amber-900 text-left space-y-1">
            <p className="font-bold">Ao sair desta página sem o curso:</p>
            <p>• Você corre o risco de desperdiçar papéis fotográficos e fitas caras.</p>
            <p>• Essa oferta de R$ 67 nunca mais será exibida para sua conta.</p>
          </div>

          <div className="pt-2 space-y-2.5">
            <button
              type="button"
              onClick={onAccept}
              className="w-full bg-[#EC4899] hover:bg-[#db2777] text-white font-extrabold text-base py-3.5 px-4 rounded-xl shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 animate-pulse"
            >
              <span>SIM, QUERO O CURSO POR R$ 67</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onConfirmDecline}
              className="text-xs text-slate-400 hover:text-slate-600 underline transition-colors cursor-pointer block mx-auto py-1"
            >
              Confirmar recusa e continuar apenas com os moldes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
