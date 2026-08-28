import React from 'react';
import { CLINIC_INFO } from '../data/content';
import { ArrowRight, Sparkles } from 'lucide-react';

export const TopAnnouncementBar = () => {
  return (
    <aside aria-label="Aviso de Atendimento" className="bg-graphite text-champagne-soft border-b border-matte-gold/20 py-2.5 px-4 text-xs font-medium tracking-widest uppercase transition-all duration-300">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-matte-gold animate-pulse inline-block"></span>
          <span>
            ATENDIMENTO PRIVATIVO EM ALPHAVILLE & OSASCO - SP • {CLINIC_INFO.crbm} • VAGAS LIMITADAS
          </span>
        </div>
        <a
          href={CLINIC_INFO.links.announcement}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-matte-gold hover:text-white font-semibold transition-colors duration-200 group"
        >
          <span>Consultar Agenda</span>
          <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-200" />
        </a>
      </div>
    </aside>
  );
};
