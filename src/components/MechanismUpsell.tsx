import React from 'react';
import { Users, Sparkles, CheckCircle2, ShieldCheck, Heart, Star } from 'lucide-react';
import alunaArtisanImg from '../assets/images/aluna_montagem_artesao_1790170051449.jpg';

export const MechanismUpsell: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'O Vinco Invisível & Cirúrgico',
      desc: 'Aprenda a pressão e a ferramenta caseira exata para marcar o papel fotográfico ou offset sem romper as fibras nem trincar a arte impressa.',
    },
    {
      num: '02',
      title: 'Colagem de Alta Fixação Sem Sujeira',
      desc: 'O segredo da quantidade de cola de silicone e fita dupla face para que a caixa não descole com o peso do doce e nunca vaze.',
    },
    {
      num: '03',
      title: 'Estruturação & Laços Impecáveis',
      desc: 'O truque simples com os dedos para o laço de cetim ficar armado, reto e com acabamento de ateliê de alta renda.',
    },
  ];

  return (
    <section className="w-full bg-[#5B2A86] text-white py-16 px-4 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-pink-300 bg-white/10 px-3 py-1 rounded-full mb-3 border border-pink-500/30">
            <Sparkles className="w-4 h-4 text-[#F472B6]" />
            Curso Validado na Prática
          </div>

          {/* DOBRA 05 Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4 text-balance">
            Esse curso já fez mais de{' '}
            <span className="text-[#F472B6]">1.000 mulheres faturarem</span> com papelaria personalizada do zero e sem experiencia nenhuma.
          </h2>

          {/* DOBRA 05 Sub-statement */}
          <p className="text-base sm:text-xl font-medium text-pink-200 leading-relaxed text-balance">
            Agora você também pode usar o mesmo passo a passo para começar a vender ainda essa semana.
          </p>
        </div>

        {/* Proof & Mechanism Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Visual Showcase (Hands-on craft demonstration) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-pink-400/40 bg-purple-950 group">
              <img
                src={alunaArtisanImg}
                alt="Aluna artesã montando personalizados com acabamento profissional"
                className="w-full h-auto object-cover max-h-[440px] transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <div className="flex items-center gap-1 text-amber-400 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-white ml-1">4.9/5 de avaliação</span>
                </div>
                <p className="text-sm font-bold text-white">
                  "Eu quase chorei na minha primeira caixinha antes do curso... Depois que vi a técnica do vinco, montei 20 caixas num sábado e vendi na segunda!"
                </p>
                <p className="text-xs text-pink-300 mt-1 font-medium">
                  Juliana M. · Aluna de Curitiba/PR
                </p>
              </div>
            </div>

            {/* Quick stats ribbon */}
            <div className="grid grid-cols-3 gap-2 mt-4 text-center">
              <div className="bg-white/10 rounded-xl p-2.5 border border-white/10">
                <p className="text-lg sm:text-xl font-bold text-[#F472B6] font-mono tabular-nums">+1.000</p>
                <p className="text-[11px] text-purple-200">Alunas Ativas</p>
              </div>
              <div className="bg-white/10 rounded-xl p-2.5 border border-white/10">
                <p className="text-lg sm:text-xl font-bold text-[#F472B6] font-mono tabular-nums">100%</p>
                <p className="text-[11px] text-purple-200">Em Vídeo Prático</p>
              </div>
              <div className="bg-white/10 rounded-xl p-2.5 border border-white/10">
                <p className="text-lg sm:text-xl font-bold text-[#F472B6] font-mono tabular-nums">7 Dias</p>
                <p className="text-[11px] text-purple-200">Para Começar a Vender</p>
              </div>
            </div>
          </div>

          {/* Mechanism explanation points */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Por que esse curso funciona mesmo sem talento prévio?
            </h3>
            <p className="text-sm text-purple-200 leading-relaxed mb-4">
              Montar papelaria personalizada não é dom ou sorte artística. É pura sequência geométrica e mecânica correta. Quando você assiste na sua tela o movimento exato das mãos, o cérebro reproduz instantaneamente.
            </p>

            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white/10 hover:bg-white/15 transition-colors rounded-xl p-4 sm:p-5 border border-white/15 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-[#EC4899] text-white font-mono font-extrabold flex items-center justify-center shrink-0 shadow-md">
                  {step.num}
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white mb-1">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-purple-100 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
