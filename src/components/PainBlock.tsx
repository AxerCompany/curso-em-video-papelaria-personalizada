import React from 'react';
import { XCircle, Trash2, Scissors, Ban, Frown, TrendingDown } from 'lucide-react';

export const PainBlock: React.FC = () => {
  const painPoints = [
    {
      icon: Scissors,
      title: 'Vincos rachados e papel fotográfico rasgado',
      desc: 'Usar a ferramenta errada para marcar a dobra faz o papel fotográfico caro quebrar na linha de vinco, deixando o acabamento horrível.',
    },
    {
      icon: Ban,
      title: 'Cola que escorre e mancha toda a caixinha',
      desc: 'Sem saber a quantidade e o tipo correto de cola, o papel enruga, vaza cola nas laterais e a peça parece feita por criança.',
    },
    {
      icon: Trash2,
      title: 'Horas perdidas tentando adivinhar onde dobrar',
      desc: 'Os moldes vêm com dezenas de linhas de encaixe. Sem o vídeo mostrando a sequência certa, você monta do avesso e tem que jogar fora.',
    },
    {
      icon: Frown,
      title: 'Laços de cetim murchos e sem volume',
      desc: 'O laço é a alma da caixinha de luxo. Tentar fazer na mão sem a técnica de ateliê resulta em nós frouxos que o cliente rejeita.',
    },
    {
      icon: TrendingDown,
      title: 'Medo e vergonha de cobrar pelo seu trabalho',
      desc: 'Quando você sabe que a montagem não ficou perfeita, você tem vergonha de postar, cobra barato demais ou simplesmente desiste.',
    },
  ];

  return (
    <section className="w-full bg-[#F8F8F8] text-slate-800 py-16 px-4 border-y border-purple-200/50">
      <div className="max-w-4xl mx-auto">
        {/* DOBRA 04 Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#EC4899] bg-pink-100 px-3 py-1 rounded-full mb-3">
            <XCircle className="w-4 h-4 text-[#EC4899]" />
            Alerta para Iniciantes
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#5B2A86] tracking-tight leading-tight mb-4 text-balance">
            A maioria das pessoas que tenta montar sozinha erra tudo, desperdiça material e desiste da papelaria personalizada
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed text-balance">
            E se você tentar sem essas aulas, pode acontecer a mesma coisa com você.
          </p>
        </div>

        {/* Real Pain Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-8">
          {painPoints.slice(0, 4).map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 border border-red-200/80 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-red-50 border border-red-200 flex items-center justify-center shrink-0 text-red-600">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-red-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Big Alert Highlight Box */}
        <div className="bg-white rounded-2xl p-6 border-2 border-red-300 shadow-sm flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center shrink-0 text-red-600 text-2xl font-bold">
            💸
          </div>
          <div>
            <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
              O prejuízo de tentar sozinha é muito mais caro do que R$ 67
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Um pacote de 50 folhas de papel fotográfico 180g + tinta de impressora + fitas custa em média R$ 90 a R$ 120. Se você errar 3 ou 4 tentativas, já jogou fora mais do que o valor inteiro deste treinamento!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
