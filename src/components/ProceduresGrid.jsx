import React from 'react';
import { PROCEDURES } from '../data/content';
import { Sparkles, Check, ArrowRight, ShieldCheck, Heart, Eye, Zap, Layers } from 'lucide-react';

export const ProceduresGrid = () => {
  const procedureIcons = {
    'lifting-full-face': Sparkles,
    'bioestimulacao': Layers,
    'labial': Heart,
    'olheiras': Eye,
    'botox': Zap,
    'mandibula': ShieldCheck,
  };

  return (
    <section id="procedimentos" className="bg-canvas py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-matte-gold/40 text-graphite text-xs font-semibold tracking-wider uppercase bg-matte-gold/15">
            <Sparkles className="w-3.5 h-3.5 text-matte-gold-600" />
            <span>CARDÁPIO DE PROCEDIMENTOS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-graphite">
            Tratamentos Exclusivos & <span className="text-matte-gold font-semibold">Personalizados</span>
          </h2>

          <p className="text-base sm:text-lg text-graphite-600 font-normal leading-relaxed">
            Cada protocolo é minuciosamente planejado respeitando as proporções únicas da sua anatomia, priorizando discrição, rejuvenescimento e durabilidade.
          </p>
        </div>

        {/* Procedures 6-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROCEDURES.map((item) => {
            const Icon = procedureIcons[item.id] || Sparkles;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-matte-gold/20 p-8 flex flex-col justify-between hover:border-matte-gold hover:shadow-editorial-hover transition-all duration-300 group"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-canvas border border-matte-gold/30 flex items-center justify-center text-matte-gold-700 group-hover:bg-matte-gold group-hover:text-graphite transition-all duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-matte-gold/15 text-graphite border border-matte-gold/30">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-graphite tracking-tight mb-1 group-hover:text-matte-gold-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-matte-gold-600 uppercase tracking-wider mb-4">
                    {item.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-graphite-600 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Highlights Checklist */}
                  <ul className="space-y-2.5 mb-8 border-t border-neutral-100 pt-4">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-graphite-600">
                        <Check className="w-3.5 h-3.5 text-matte-gold-600 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* WhatsApp Action Button */}
                <div className="pt-2 border-t border-neutral-100">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-between px-5 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider bg-canvas hover:bg-matte-gold text-graphite border border-matte-gold/30 hover:border-matte-gold transition-all duration-200 group/btn"
                  >
                    <span>Agendar Procedimento</span>
                    <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
