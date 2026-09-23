import React, { useState } from 'react';
import { X, Lock, ShieldCheck, CheckCircle2, QrCode, CreditCard, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'form' | 'processing' | 'success'>('form');
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('processing');
    setTimeout(() => {
      setStep('success');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-purple-200">
        {/* Header Bar */}
        <div className="bg-[#5B2A86] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#F472B6]" />
            <h3 className="text-lg font-bold">Liberar Acesso Imediato</h3>
          </div>
          <button
            onClick={onClose}
            className="text-purple-200 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {step === 'form' && (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Product summary strip */}
              <div className="bg-purple-50 rounded-xl p-3.5 border border-purple-200/70 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-[#5B2A86] uppercase tracking-wide">
                    Upsell Exclusivo
                  </p>
                  <p className="text-sm font-semibold text-slate-800">
                    Curso Método Montagem Perfeita + Todos os Bônus
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-400 line-through">R$ 197</p>
                  <p className="text-lg font-black text-[#5B2A86] font-mono">R$ 67,00</p>
                </div>
              </div>

              {/* Payment method selector */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1.5">
                  Forma de Pagamento Preferida:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('pix')}
                    className={`p-3 rounded-xl border-2 text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      paymentMethod === 'pix'
                        ? 'border-[#EC4899] bg-pink-50 text-[#5B2A86]'
                        : 'border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <QrCode className="w-4 h-4 text-[#EC4899]" />
                    <span>PIX Instantâneo</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 rounded-xl border-2 text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      paymentMethod === 'card'
                        ? 'border-[#EC4899] bg-pink-50 text-[#5B2A86]'
                        : 'border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <CreditCard className="w-4 h-4 text-[#EC4899]" />
                    <span>Cartão de Crédito</span>
                  </button>
                </div>
              </div>

              {/* Input fields */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Seu Nome Completo:
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Maria Silva"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#EC4899] focus:border-transparent"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  E-mail para Receber o Acesso às Aulas:
                </label>
                <input
                  type="email"
                  required
                  placeholder="seuemail@exemplo.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#EC4899] focus:border-transparent"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  WhatsApp (Para Suporte e Grupo de Alunas):
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(DDD) 99999-9999"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#EC4899] focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 bg-[#EC4899] hover:bg-[#db2777] text-white font-extrabold text-base py-3.5 px-4 rounded-xl shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>CONFIRMAR E LIBERAR ACESSO (R$ 67)</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <div className="flex items-center justify-center gap-3 text-[11px] text-slate-500 pt-1">
                <span className="flex items-center gap-1">
                  <Lock className="w-3 h-3 text-emerald-600" /> Ambiente Criptografado
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" /> Garantia de 7 Dias
                </span>
              </div>
            </form>
          )}

          {step === 'processing' && (
            <div className="py-12 text-center space-y-4">
              <div className="w-14 h-14 border-4 border-[#EC4899] border-t-transparent rounded-full animate-spin mx-auto" />
              <h4 className="text-lg font-bold text-[#5B2A86]">
                Processando seu acesso com desconto...
              </h4>
              <p className="text-xs text-slate-500">
                Vinculando seu curso ao pacote de moldes adquirido.
              </p>
            </div>
          )}

          {step === 'success' && (
            <div className="text-center py-4 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h4 className="text-2xl font-extrabold text-[#5B2A86]">
                Parabéns! Acesso Liberado! 🎉
              </h4>

              <p className="text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
                Olá <strong>{formData.name || 'Artesã'}</strong>, seus dados foram registrados e o link de acesso foi enviado para <strong>{formData.email || 'seu e-mail'}</strong>.
              </p>

              <div className="bg-purple-50 border border-purple-200 rounded-2xl p-4 text-left space-y-2 text-xs text-slate-700">
                <p className="font-bold text-[#5B2A86]">Próximos passos imediatos:</p>
                <p>1. Verifique sua caixa de entrada (e pasta de spam) para criar sua senha da plataforma.</p>
                <p>2. Assista primeiro ao <strong>Módulo 1: Fundamentos</strong> antes de cortar seus primeiros moldes.</p>
                <p>3. Entre no grupo VIP de alunas para tirar dúvidas com as instrutoras.</p>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/5511999999999?text=Ol%C3%A1%2C%20acabei%20de%20adquirir%20o%20M%C3%A9todo%20Montagem%20Perfeita%20e%20gostaria%20de%20entrar%20no%20grupo%20VIP!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl text-sm transition-colors cursor-pointer shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Acessar Grupo VIP de Alunas no WhatsApp</span>
                </a>
              </div>

              <button
                onClick={onClose}
                className="text-xs text-slate-500 hover:text-slate-700 underline pt-2 block mx-auto cursor-pointer"
              >
                Fechar janela
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
