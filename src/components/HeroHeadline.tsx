import React from 'react';
import { Play, Sparkles, Check, ArrowDown } from 'lucide-react';
import heroMockupImg from '../assets/images/curso_mockup_hero_1790170030347.jpg';

interface HeroHeadlineProps {
  onCtaClick: () => void;
}

export const HeroHeadline: React.FC<HeroHeadlineProps> = ({ onCtaClick }) => {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#5B2A86] to-[#7B3DB8] text-white pt-6 pb-16 px-4 overflow-hidden">
      {/* Soft background accents */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          {/* DOBRA 02 — HEADLINE PRINCIPAL */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight leading-[1.15] text-white mb-5 text-balance">
            Sem esse curso, seus moldes podem virar{' '}
            <span className="text-[#F472B6] underline decoration-wavy decoration-pink-400/60 underline-offset-8">
              dinheiro jogado fora.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-purple-100 font-normal leading-relaxed text-balance">
            Se você não aprender a montar do jeito certo agora, pode acabar errando, desperdiçando material e desistindo antes mesmo de vender.
          </p>
        </div>

        {/* Visual Mockup Carrier (Tablet + Finished Boxes) */}
        <div className="relative max-w-4xl mx-auto mt-4 group">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-pink-400/40 bg-purple-950">
            <img
              src={heroMockupImg}
              alt="Mockup do Curso de Montagem Perfeita de Papelaria Personalizada"
              className="w-full h-auto object-cover max-h-[520px] transition-transform duration-700 group-hover:scale-[1.01]"
              referrerPolicy="no-referrer"
              onError={(e) => {
                // Fallback container in case image fails to load
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            {/* Overlay badge with sneak-peek highlight */}
            <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto bg-[#3d185e]/90 backdrop-blur-md border border-pink-400/30 rounded-xl p-3 sm:p-4 text-left max-w-md shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#EC4899] flex items-center justify-center shrink-0 shadow-md">
                  <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-pink-300 uppercase tracking-wide">Aulas Práticas em Vídeo HD</p>
                  <p className="text-sm font-semibold text-white">Ângulo superior em 1ª pessoa: veja exatamente onde colar e dobrar</p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Value Micro-Points under Mockup */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-3.5 flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-[#EC4899]/30 border border-[#EC4899] flex items-center justify-center shrink-0">
                <Check className="w-4 h-4 text-[#F472B6]" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-purple-100">Não precisa de máquina de corte cara</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-3.5 flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-[#EC4899]/30 border border-[#EC4899] flex items-center justify-center shrink-0">
                <Check className="w-4 h-4 text-[#F472B6]" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-purple-100">Corte com tesoura ou estilete comum</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-3.5 flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-[#EC4899]/30 border border-[#EC4899] flex items-center justify-center shrink-0">
                <Check className="w-4 h-4 text-[#F472B6]" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-purple-100">Passo a passo à prova de erros</span>
            </div>
          </div>

          {/* DOBRA 03 — SUBHEADLINE / PROMESSA (Posicionado acima do botão de compra) */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-pink-400/30 shadow-xl my-8 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-pink-300 mb-2">
              <Sparkles className="w-4 h-4 text-[#F472B6]" />
              Promessa Garantida
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-snug mb-2.5 text-balance">
              Com essas aulas, você vai montar personalizados profissionais mesmo que nunca tenha feito papelaria na vida.
            </h2>
            <p className="text-sm sm:text-base font-semibold text-pink-200">
              Depois de assistir, você vai conseguir montar e vender sem erro.
            </p>
          </div>

          {/* Fast Anchor Action */}
          <div className="text-center mt-6">
            <button
              onClick={onCtaClick}
              className="inline-flex items-center gap-2 bg-[#EC4899] hover:bg-[#db2777] text-white font-extrabold text-base sm:text-lg px-8 py-4 rounded-xl shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer animate-pulse-glow"
            >
              <span>QUERO APRENDER A MONTAR DO JEITO CERTO</span>
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </button>
            <p className="text-xs text-purple-200 mt-2">
              Adicione ao seu pedido com apenas 1 clique por R$ 67
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
