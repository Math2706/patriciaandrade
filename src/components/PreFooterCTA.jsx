import React from 'react';
import { CLINIC_INFO } from '../data/content';
import { ArrowRight, ShieldCheck, Sparkles, MapPin } from 'lucide-react';

export const PreFooterCTA = () => {
  return (
    <section className="w-full bg-matte-gold py-20 lg:py-24 text-graphite relative overflow-hidden">
      {/* Subtle geometric overlay lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-graphite" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-graphite" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        {/* Micro-Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-graphite text-white text-xs font-semibold tracking-wider uppercase shadow-md">
          <Sparkles className="w-3.5 h-3.5 text-matte-gold" />
          <span>ATENDIMENTO EXCLUSIVO & PRIVATIVO</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-graphite leading-tight">
          Pronta para voltar a se reconhecer e se amar diante do espelho?
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-graphite/90 font-medium max-w-3xl mx-auto leading-relaxed">
          Agende sua avaliação personalizada em Alphaville ou Osasco e planeje seu rejuvenescimento com a <strong className="font-bold text-graphite">Dra. Patrícia Andrade</strong>.
        </p>

        {/* Direct Action Button */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={CLINIC_INFO.links.preFooterCTA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-graphite text-white hover:bg-black font-semibold text-sm sm:text-base tracking-wider uppercase px-10 py-5 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 group"
          >
            <span>AGENDAR MINHA CONSULTA PRIVATIVA</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform duration-200 text-matte-gold" />
          </a>
        </div>

        {/* Trust Badges under CTA */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-graphite font-semibold">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-graphite" />
            <span>CRBM 35884</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-graphite" />
            <span>Alphaville & Osasco - SP</span>
          </div>
          <span>•</span>
          <span>Atendimento 100% Individualizado</span>
        </div>

      </div>
    </section>
  );
};
