import React from 'react';
import { COMPARATIVE_MATRIX, CLINIC_INFO } from '../data/content';
import { Check, X, Sparkles, ArrowRight } from 'lucide-react';

export const ComparativeMatrix = () => {
  return (
    <section id="diferenciais" className="bg-graphite py-20 lg:py-28 text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-matte-gold/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-matte-gold/40 text-champagne-soft text-xs font-semibold tracking-wider uppercase bg-white/5">
            <Sparkles className="w-3.5 h-3.5 text-matte-gold" />
            <span>POSICIONAMENTO DE VALOR</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Nossa Filosofia vs. <span className="text-matte-gold">Mercado Convencional</span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed">
            Entenda por que tantas mulheres escolhem o método da Dra. Patrícia Andrade para rejuvenescer com sofisticação e total discrição.
          </p>
        </div>

        {/* Comparison Table / Cards */}
        <div className="max-w-5xl mx-auto bg-[#242220] border border-matte-gold/30 rounded-2xl overflow-hidden shadow-2xl">
          
          {/* Table Header (Desktop) */}
          <div className="hidden md:grid md:grid-cols-12 bg-[#1B1A19] border-b border-matte-gold/20 p-6 text-xs font-bold uppercase tracking-wider">
            <div className="col-span-4 text-neutral-400">Critério de Avaliação</div>
            <div className="col-span-4 text-neutral-400 pl-4">Mercado Convencional</div>
            <div className="col-span-4 text-matte-gold pl-4 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Dra. Patrícia Andrade</span>
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-matte-gold/10">
            {COMPARATIVE_MATRIX.map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-12 p-6 md:p-6 gap-4 md:gap-0 items-center hover:bg-white/[0.02] transition-colors"
              >
                {/* Criterion */}
                <div className="md:col-span-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-matte-gold md:text-white">
                    {row.criterion}
                  </span>
                </div>

                {/* Conventional Market */}
                <div className="md:col-span-4 md:pl-4 flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-red-950/60 border border-red-500/30 flex items-center justify-center shrink-0 text-red-400 mt-0.5">
                    <X className="w-3 h-3" />
                  </div>
                  <span className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {row.conventional}
                  </span>
                </div>

                {/* Dra. Patricia Andrade */}
                <div className="md:col-span-4 md:pl-4 flex items-start gap-2.5 bg-matte-gold/10 p-3 md:p-0 rounded-xl md:rounded-none border border-matte-gold/20 md:border-none">
                  <div className="w-5 h-5 rounded-full bg-matte-gold/30 border border-matte-gold flex items-center justify-center shrink-0 text-matte-gold mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-champagne-soft font-medium leading-relaxed">
                    {row.patricia}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Table Strip */}
          <div className="bg-[#1B1A19] p-6 text-center border-t border-matte-gold/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-neutral-300">
              Quer uma experiência segura, refinada e 100% individualizada?
            </p>
            <a
              href={CLINIC_INFO.links.headerCTA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-matte-gold text-graphite hover:brightness-110 transition-all duration-200"
            >
              <span>Agendar Avaliação Privativa</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
