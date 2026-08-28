import React from 'react';
import { PROCEDURES } from '../data/content';
import { Sparkles, Check, ArrowRight, Layers, Heart, Zap } from 'lucide-react';

export const ProceduresGrid = () => {
  const procedureIcons = {
    'lifting-full-face': Sparkles,
    'bioestimulacao': Layers,
    'labial': Heart,
    'botox': Zap,
  };

  return (
    <section id="procedimentos" className="bg-canvas py-20 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-matte-gold/40 text-graphite text-xs font-semibold tracking-wider uppercase bg-matte-gold/15">
            <Sparkles className="w-3.5 h-3.5 text-matte-gold-600" />
            <span>CARDÁPIO DE PROCEDIMENTOS ESSENCIAIS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-graphite">
            Tratamentos Exclusivos & <span className="text-matte-gold font-semibold">Personalizados</span>
          </h2>

          <p className="text-sm sm:text-base text-graphite-600 font-normal leading-relaxed">
            Protocolos de alta performance clínica planejados para restaurar a sustentação, o colágeno e a harmonia facial sem exageros.
          </p>
        </div>

        {/* Streamlined 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCEDURES.map((item) => {
            const Icon = procedureIcons[item.id] || Sparkles;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-matte-gold/25 p-6 flex flex-col justify-between hover:border-matte-gold hover:shadow-editorial-hover transition-all duration-300 group"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-canvas border border-matte-gold/30 flex items-center justify-center text-matte-gold-700 group-hover:bg-matte-gold group-hover:text-graphite transition-all duration-300 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-matte-gold/15 text-graphite border border-matte-gold/30">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg font-bold text-graphite tracking-tight mb-1 group-hover:text-matte-gold-700 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[11px] font-semibold text-matte-gold-600 uppercase tracking-wider mb-3">
                    {item.subtitle}
                  </p>

                  {/* Concise Description */}
                  <p className="text-xs text-graphite-600 leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* Highlights Checklist */}
                  <ul className="space-y-2 mb-6 border-t border-neutral-100 pt-3.5">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2 text-[11px] text-graphite-600">
                        <Check className="w-3.5 h-3.5 text-matte-gold-600 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct WhatsApp Action Button */}
                <div className="pt-2 border-t border-neutral-100">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl text-[11px] font-semibold uppercase tracking-wider bg-canvas hover:bg-matte-gold text-graphite border border-matte-gold/30 hover:border-matte-gold transition-all duration-200 group/btn"
                  >
                    <span>Agendar no WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" />
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
