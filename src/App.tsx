/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { UrgencyHeader } from './components/UrgencyHeader';
import { HeroHeadline } from './components/HeroHeadline';
import { PainBlock } from './components/PainBlock';
import { MechanismUpsell } from './components/MechanismUpsell';
import { CourseCurriculum } from './components/CourseCurriculum';
import { ComparisonSection } from './components/ComparisonSection';
import { OfferPriceBlock } from './components/OfferPriceBlock';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FinalCTA } from './components/FinalCTA';
import { CheckoutModal } from './components/CheckoutModal';
import { ExitIntentModal } from './components/ExitIntentModal';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isExitIntentOpen, setIsExitIntentOpen] = useState(false);
  const [declinedOrderState, setDeclinedOrderState] = useState(false);

  const handleOpenCheckout = () => {
    setIsExitIntentOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleDeclineClick = () => {
    setIsExitIntentOpen(true);
  };

  const handleConfirmDecline = () => {
    setIsExitIntentOpen(false);
    setDeclinedOrderState(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (declinedOrderState) {
    return (
      <main className="min-h-screen bg-[#5B2A86] text-white flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white text-slate-800 rounded-3xl p-6 sm:p-8 text-center shadow-2xl border border-purple-200">
          <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
            📦
          </div>
          <h1 className="text-2xl font-black text-[#5B2A86] mb-2">
            Pedido dos Moldes Confirmado!
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed mb-6">
            Você optou por continuar sem o treinamento de montagem profissional. O link dos seus arquivos digitais de moldes foi enviado para seu e-mail cadastrado.
          </p>

          <div className="bg-purple-50 rounded-xl p-4 text-xs text-slate-700 text-left mb-6 border border-purple-100">
            <p className="font-bold text-[#5B2A86] mb-1">Dica importante:</p>
            <p>Faça o download dos moldes em um computador e descompacte o arquivo .zip para visualizar os arquivos em PDF, SVG e DXF.</p>
          </div>

          <button
            onClick={() => setDeclinedOrderState(false)}
            className="text-xs text-[#EC4899] hover:text-[#db2777] font-semibold underline cursor-pointer"
          >
            ← Voltar para a página de oferta
          </button>
        </div>
      </main>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#5B2A86] text-slate-900 font-sans selection:bg-[#EC4899] selection:text-white">
      {/* Top Bar / DOBRA 01: Urgência e Interrupção de Padrão */}
      <UrgencyHeader onCtaClick={handleOpenCheckout} />

      <main className="flex-1">
        {/* DOBRA 02 (Headline Principal) + DOBRA 03 (Subheadline / Promessa) */}
        <HeroHeadline onCtaClick={handleOpenCheckout} />

        {/* DOBRA 04: Bloco de Dor */}
        <PainBlock />

        {/* DOBRA 05: Mecanismo / Apresentação do Upsell */}
        <MechanismUpsell />

        {/* DOBRA 06: O Que Vem Dentro */}
        <CourseCurriculum />

        {/* DOBRA 07: Comparação Sem / Com */}
        <ComparisonSection onCtaClick={handleOpenCheckout} />

        {/* DOBRA 08 (Oferta / Preço) + DOBRA 09 (Botão de Compra "LIBERAR ACESSO") */}
        <OfferPriceBlock onCtaClick={handleOpenCheckout} />

        {/* DOBRA 10: Garantia */}
        <GuaranteeSection />

        {/* DOBRA 11 (CTA Final) + DOBRA 12 (Recusa) */}
        <FinalCTA
          onAccept={handleOpenCheckout}
          onDecline={handleDeclineClick}
        />
      </main>

      {/* Footer Minimalista */}
      <footer className="bg-[#291040] text-purple-200/70 py-8 px-4 text-center text-xs border-t border-purple-900/50">
        <div className="max-w-4xl mx-auto space-y-2">
          <p className="font-semibold text-purple-100">
            Método Montagem Perfeita · Papelaria Personalizada de Alto Padrão
          </p>
          <p className="text-[11px] text-purple-300/60">
            Todos os direitos reservados. Este produto não garante a obtenção de resultados sem a dedicação e prática das técnicas ensinadas.
          </p>
          <div className="flex items-center justify-center gap-4 text-[11px] text-purple-300/80 pt-2">
            <span>Termos de Uso</span>
            <span>·</span>
            <span>Políticas de Privacidade</span>
            <span>·</span>
            <span>Suporte ao Aluno</span>
          </div>
        </div>
      </footer>

      {/* Modais Interativos */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />

      <ExitIntentModal
        isOpen={isExitIntentOpen}
        onClose={() => setIsExitIntentOpen(false)}
        onAccept={handleOpenCheckout}
        onConfirmDecline={handleConfirmDecline}
      />
    </div>
  );
}
