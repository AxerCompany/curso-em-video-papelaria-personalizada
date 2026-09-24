import React from 'react';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';

interface ComparisonSectionProps {
  onCtaClick: () => void;
}

export const ComparisonSection: React.FC<ComparisonSectionProps> = ({ onCtaClick }) => {
  const withoutCourse = [
    'Você provavelmente vai cortar errado',
    'Vai desperdiçar material',
    'Vai montar tudo feio',
    'Vai perder vendas',
    'Pode desistir da papelaria',
  ];

  const withCourse = [
    'Você vai montar perfeitamente',
    'Vai vender com facilidade',
    'Vai entregar como profissional',
    'Vai recuperar o valor investido rapidamente',
  ];

  return (
    <section className="w-full bg-[#5B2A86] text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-pink-300 bg-white/10 px-3 py-1 rounded-full mb-3 border border-pink-500/30">
            Comparativo Direto
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-2">
            A decisão que vai definir o futuro dos seus personalizados
          </h2>
          <p className="text-sm sm:text-base text-purple-200">
            Veja a diferença entre tentar na tentativa e erro versus ter o curso profissional nas mãos:
          </p>
        </div>

        {/* Side-by-Side Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mb-10">
          {/* SEM ESSE CURSO */}
          <div className="bg-[#481c6e] rounded-2xl p-6 sm:p-7 border border-red-500/30 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-red-300 font-extrabold text-lg sm:text-xl uppercase tracking-wide border-b border-red-500/20 pb-4 mb-5">
                <XCircle className="w-6 h-6 text-red-400 shrink-0" />
                <span>SEM ESSE CURSO:</span>
              </div>

              <ul className="space-y-4">
                {withoutCourse.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-red-400 font-bold text-base shrink-0">❌</span>
                    <span className="text-purple-100 font-medium text-sm sm:text-base leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-red-500/20 text-center">
              <span className="text-xs text-red-200 font-semibold bg-red-900/40 px-3 py-1.5 rounded-full inline-block">
                Resultado: Frustração e dinheiro perdido
              </span>
            </div>
          </div>

          {/* COM ESSE CURSO */}
          <div className="bg-gradient-to-b from-[#7B3DB8] to-[#5B2A86] rounded-2xl p-6 sm:p-7 border-2 border-[#EC4899] shadow-2xl relative flex flex-col justify-between">
            {/* Highlight ribbon */}
            <div className="absolute -top-3.5 right-6 bg-[#EC4899] text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-full shadow-md tracking-wider">
              Caminho Recomendado
            </div>

            <div>
              <div className="flex items-center gap-2 text-pink-200 font-extrabold text-lg sm:text-xl uppercase tracking-wide border-b border-pink-500/30 pb-4 mb-5">
                <CheckCircle2 className="w-6 h-6 text-[#F472B6] shrink-0" />
                <span>COM ESSE CURSO:</span>
              </div>

              <ul className="space-y-4">
                {withCourse.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-emerald-400 font-bold text-base shrink-0">✅</span>
                    <span className="text-white font-semibold text-sm sm:text-base leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-pink-500/30 text-center">
              <span className="text-xs text-pink-200 font-semibold bg-pink-900/50 px-3 py-1.5 rounded-full inline-block">
                Resultado: Encomendas pagas e elogios de clientes
              </span>
            </div>
          </div>
        </div>

        {/* Call to action anchor */}
        <div className="text-center">
          <button
            onClick={onCtaClick}
            className="inline-flex items-center gap-2 bg-[#EC4899] hover:bg-[#db2777] text-white font-extrabold text-base px-6 py-3.5 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>QUERO ESCOLHER O CAMINHO COM O CURSO</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
