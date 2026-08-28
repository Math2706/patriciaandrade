import React from 'react';
import { CLINIC_INFO, LIFTING_PILLARS } from '../data/content';
import { ArrowRight, Compass, Activity, Smile, Sparkles } from 'lucide-react';

export const LiftingConcept = () => {
  const icons = [Compass, Activity, Smile];

  return (
    <section id="lifting-conceito" className="bg-white py-20 lg:py-28 relative overflow-hidden">
      {/* Subtle architectural background accents */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute right-0 top-0 w-72 h-72 rounded-full bg-matte-gold/5 blur-3xl" />
        <div className="absolute left-0 bottom-0 w-72 h-72 rounded-full bg-champagne-soft/30 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-matte-gold/40 text-graphite text-xs font-semibold tracking-wider uppercase bg-matte-gold/15">
            <Sparkles className="w-3.5 h-3.5 text-matte-gold-600" />
            <span>MÉTODO EXCLUSIVO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-graphite">
            O Conceito do <span className="text-matte-gold font-semibold">Lifting Facial Sem Cortes</span>
          </h2>

          <p className="text-base sm:text-lg text-graphite-600 font-normal leading-relaxed">
            Esqueça as técnicas invasivas e o repouso doloroso. O reposicionamento tecidual moderno combina biofísica, sustentação tridimensional e bioestímulo profundo para restaurar a firmeza e o contorno da sua juventude.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {LIFTING_PILLARS.map((pillar, index) => {
            const Icon = icons[index] || Compass;
            return (
              <div
                key={pillar.step}
                className="bg-canvas border border-matte-gold/30 rounded-2xl p-8 flex flex-col justify-between hover:border-matte-gold hover:shadow-editorial-hover transition-all duration-300 relative group"
              >
                <div>
                  {/* Step & Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-matte-gold/40 group-hover:text-matte-gold transition-colors duration-300 font-mono">
                      {pillar.step}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-white border border-matte-gold/30 text-graphite">
                      {pillar.tag}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="w-12 h-12 rounded-xl bg-white border border-matte-gold/30 flex items-center justify-center text-matte-gold-700 mb-6 shadow-sm group-hover:scale-105 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-graphite tracking-tight mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-graphite-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-matte-gold/15 flex items-center gap-2 text-xs font-semibold text-matte-gold-700 tracking-wider uppercase">
                  <span>Pilar Anatômico {pillar.step}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contextual WhatsApp CTA Banner */}
        <div className="max-w-4xl mx-auto bg-canvas border border-matte-gold/30 rounded-2xl p-8 sm:p-10 text-center space-y-6 shadow-sm">
          <h3 className="text-xl sm:text-2xl font-bold text-graphite tracking-tight">
            Descubra se o Lifting Facial Não Cirúrgico é o protocolo ideal para o seu rosto
          </h3>
          <p className="text-sm sm:text-base text-graphite-600 max-w-2xl mx-auto">
            Em uma avaliação individual com a Dra. Patrícia Andrade, analisamos detalhadamente a espessura da pele, a perda de sustentação e seus objetivos para desenhar um plano sob medida.
          </p>
          <div className="pt-2">
            <a
              href={CLINIC_INFO.links.liftingCTA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wider bg-graphite text-white hover:bg-matte-gold hover:text-graphite transition-all duration-300 shadow-md group"
            >
              <span>Quero entender o Lifting Não Cirúrgico no WhatsApp</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
