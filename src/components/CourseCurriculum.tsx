import React, { useState } from 'react';
import { BookOpen, Sparkles, ChevronDown, Gift } from 'lucide-react';
import luxoFavorsImg from '../assets/images/personalizados_luxo_1790170041322.jpg';

export const CourseCurriculum: React.FC = () => {
  const [activeModule, setActiveModule] = useState<number | null>(null);

  const modules = [
    {
      id: 1,
      numberPrefix: '01',
      title: 'MÓDULO 01 — PRODUÇÃO NA PRÁTICA: COMO MONTAR LEMBRANCINHAS BONITAS MESMO COMEÇANDO DO ZERO',
      badge: 'Prática de Ateliê',
      summary: 'Passo a passo visual e prático para cortar, vincar e colar seus personalizados sem errar nem amassar.',
      lessons: [
        'Como interpretar as linhas de vinco e corte dos moldes sem confundir nada',
        'Técnica do vinco suave: dobre o papel com acabamento perfeito sem trincar a arte',
        'Montagem guiada em vídeo das peças mais pedidas pelas mamães e decoradoras',
        'Acabamentos e laços que dão sustentação e valorizam cada lembrancinha',
      ],
    },
    {
      id: 2,
      numberPrefix: '02',
      title: 'MÓDULO 02 — VENDAS NA PAPELARIA: COMO DIVULGAR, ATENDER E CONSEGUIR OS PRIMEIROS PEDIDOS',
      badge: 'Vendas & Clientes',
      summary: 'Estratégias práticas no WhatsApp e Instagram para transformar seus moldes em encomendas pagas.',
      lessons: [
        'Como fotografar seus personalizados com a luz natural do seu quarto ou sala',
        'Roteiro de atendimento no WhatsApp para passar confiança e fechar pedidos no mesmo dia',
        'Como divulgar para vizinhos, escolas, amigos e grupos locais para vender rápido',
        'Prazos de produção e como combinar entrega e sinal de 50% sem levar calote',
      ],
    },
    {
      id: 3,
      numberPrefix: '03',
      title: 'MÓDULO 03 — IMPRESSÃO SEM COMPLICAÇÃO: COMO ESCOLHER E USAR IMPRESSORAS DO JEITO CERTO',
      badge: 'Qualidade Gráfica',
      summary: 'Configurações fáceis para cores vivas, alinhamento exato e zero folhas borradas.',
      lessons: [
        'Qual modelo de impressora comum comprar ou como usar a que você já tem em casa',
        'Configurações simples no computador/celular para cores vibrantes e sem falhas',
        'Como evitar marcas de rolete, borrões e desalinhamento na hora de puxar o papel',
        'Manutenção preventiva para sua impressora durar anos trabalhando perfeitamente',
      ],
    },
    {
      id: 4,
      numberPrefix: '04',
      title: 'MÓDULO 04 — MATERIAIS ESSENCIAIS: O QUE COMPRAR PARA COMEÇAR SEM GASTAR ERRADO',
      badge: 'Zero Desperdício',
      summary: 'A lista exata do que realmente precisa para iniciar sem gastar dinheiro em ferramentas desnecessárias.',
      lessons: [
        'Ferramentas básicas indispensáveis: tesouras, réguas, bases de corte e boleadores',
        'Tipos de colas certas: quando usar silicone líquida, cola pano, fita banana ou cola quente',
        'Fitas de cetim, pedrarias e apliques que encantam e têm baixo custo',
        'O que NÃO comprar no início para economizar seu dinheiro e investir no que traz retorno',
      ],
    },
    {
      id: 5,
      numberPrefix: '05',
      title: 'MÓDULO 05 — TINTAS E PAPÉIS: COMO ESCOLHER OS INSUMOS CERTOS PARA UM ACABAMENTO MAIS BONITO',
      badge: 'Acabamento Perfeito',
      summary: 'Gramaturas, papéis fotográficos, offset e tipos de tintas para caixas firmes que duram.',
      lessons: [
        'Guia de papéis: Offset 180g vs. Fotográfico Glossy/Matte vs. Papéis Especiais',
        'Qual gramatura ideal para a caixinha não ficar mole e aguentar o peso dos doces',
        'Tintas corantes vs. pigmentadas: durabilidade, desbotamento e fidelidade de cor',
        'Como armazenar seus papéis para evitar umidade, ondulação e perda de material',
      ],
    },
    {
      id: 6,
      numberPrefix: '06',
      title: 'MÓDULO 06 — PRECIFICAÇÃO LUCRATIVA: COMO CALCULAR PREÇOS, CUSTOS E LUCRO SEM FICAR NO ACHISMO',
      badge: 'Lucro Garantido',
      summary: 'Calcule o custo por folha, tempo e margem de lucro para nunca pagar para trabalhar.',
      lessons: [
        'Como calcular centavo por centavo o custo de papel, tinta, cola e fita de cada peça',
        'Como colocar valor na sua mão de obra sem medo de ouvir "está caro"',
        'Cálculo de kits e combos de festas para aumentar o valor de cada pedido',
        'Tabela simples de precificação para preencher em 2 minutos e passar o orçamento na hora',
      ],
    },
  ];

  return (
    <section className="w-full bg-[#F8F8F8] text-slate-900 py-16 px-4 border-t border-purple-200/50">
      <div className="max-w-5xl mx-auto">
        {/* DOBRA 06 Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#EC4899] bg-pink-100 px-3 py-1 rounded-full mb-3">
            <BookOpen className="w-4 h-4 text-[#EC4899]" />
            Grade Completa das Aulas
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#5B2A86] tracking-tight leading-tight mb-4 text-balance">
            Dentro do curso você vai aprender tudo que precisa para vender personalizados todos os dias, montar como profissional e nunca mais ficar perdida.
          </h2>

          <p className="text-base text-slate-600 font-normal leading-relaxed text-balance">
            Cada aula foi gravada com foco prático, direto ao ponto, para você assistir no celular ou computador enquanto monta suas primeiras peças.
          </p>
        </div>

        {/* Top Feature Showcase Banner with luxury favors image */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-purple-200 shadow-md mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-5 rounded-xl overflow-hidden shadow-sm border border-purple-100">
              <img
                src={luxoFavorsImg}
                alt="Personalizados montados profissionalmente"
                className="w-full h-auto object-cover max-h-[300px]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-1 text-xs font-bold text-[#EC4899] uppercase tracking-wide mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#EC4899]" />
                O Que Você Será Capaz de Fazer
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#5B2A86] mb-3">
                Do corte da folha até a entrega da encomenda
              </h3>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                Você nunca mais vai olhar para um arquivo de molde e pensar: <em>"Meu Deus, onde dobra isso?"</em>. Você terá em mãos o guia visual completo para montar qualquer molde de papelaria que existir.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm font-medium text-slate-700">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-pink-100 text-[#EC4899] flex items-center justify-center text-xs font-bold">✓</span>
                  <span>Montagem rápida e padronizada</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-pink-100 text-[#EC4899] flex items-center justify-center text-xs font-bold">✓</span>
                  <span>Zero desperdício de papel e fita</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-pink-100 text-[#EC4899] flex items-center justify-center text-xs font-bold">✓</span>
                  <span>Segurança total para cobrar bem</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-pink-100 text-[#EC4899] flex items-center justify-center text-xs font-bold">✓</span>
                  <span>Clientes encantados e fidelizados</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modules Accordion Cards */}
        <div className="space-y-3.5 mb-8">
          {modules.map((mod) => {
            const isOpen = activeModule === mod.id;
            return (
              <div
                key={mod.id}
                className="bg-white rounded-xl border border-purple-200/80 shadow-sm overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setActiveModule(isOpen ? null : mod.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-purple-50/40 transition-colors cursor-pointer"
                >
                  <div className="flex items-start sm:items-center gap-3.5">
                    <span className="w-8 h-8 rounded-lg bg-[#5B2A86] text-white flex items-center justify-center font-bold text-sm shrink-0 mt-0.5 sm:mt-0 font-mono">
                      {mod.numberPrefix}
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                          {mod.title}
                        </h4>
                        <span className="text-[11px] font-semibold text-[#EC4899] bg-pink-50 border border-pink-200 px-2 py-0.5 rounded-full">
                          {mod.badge}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-500">
                        {mod.summary}
                      </p>
                    </div>
                  </div>
                  <div className="shrink-0 text-slate-400">
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#EC4899]' : ''}`} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-2 border-t border-purple-100 bg-purple-50/20">
                    <p className="text-xs font-bold uppercase text-purple-900 tracking-wider mb-2.5">
                      Aulas práticas inclusas neste módulo:
                    </p>
                    <ul className="space-y-2">
                      {mod.lessons.map((lesson, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#EC4899] mt-1.5 shrink-0" />
                          <span>{lesson}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* 2 Exclusive Bonuses */}
        <div className="bg-gradient-to-r from-purple-900 to-[#5B2A86] rounded-2xl p-6 sm:p-7 text-white shadow-xl">
          <div className="flex items-center gap-2 text-pink-300 font-bold uppercase tracking-wider text-xs mb-3">
            <Gift className="w-4 h-4 text-[#F472B6]" />
            Bônus Especiais Inclusos Sem Custo Extra
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/10 rounded-xl p-4 border border-white/10">
              <span className="text-xs font-mono font-bold text-[#F472B6] bg-pink-900/50 px-2 py-0.5 rounded">BÔNUS 01</span>
              <h5 className="font-bold text-white text-base mt-2 mb-1">Guia Rápido Anti-Erros (PDF)</h5>
              <p className="text-xs text-purple-100 leading-relaxed">
                Tabela visual de consulta imediata para ter na sua bancada: tipo de papel × gramatura × tipo de cola recomendada.
              </p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 border border-white/10">
              <span className="text-xs font-mono font-bold text-[#F472B6] bg-pink-900/50 px-2 py-0.5 rounded">BÔNUS 02</span>
              <h5 className="font-bold text-white text-base mt-2 mb-1">Lista de Fornecedores Secretos</h5>
              <p className="text-xs text-purple-100 leading-relaxed">
                Onde comprar papéis fotográficos, fitas de cetim e strass no atacado com frete rápido e preço até 40% menor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
