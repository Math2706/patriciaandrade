import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/content';
import { MessageCircle, Sparkles } from 'lucide-react';

export const WhatsAppFloatingDock = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip / Speech bubble */}
      <a
        href={CLINIC_INFO.links.floatingWhatsApp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a equipe no WhatsApp"
        className="group relative flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white pl-4 pr-5 py-3.5 rounded-full shadow-2xl hover:shadow-emerald-600/40 transform hover:scale-105 transition-all duration-300 border border-white/20"
      >
        {/* Pulse ring indicator */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border border-white"></span>
        </span>

        <MessageCircle className="w-6 h-6 fill-white text-emerald-600" />
        
        <div className="flex flex-col text-left">
          <span className="text-[10px] uppercase tracking-wider text-emerald-100 font-semibold leading-none">
            Atendimento Online
          </span>
          <span className="text-xs font-bold text-white tracking-wide">
            Falar no WhatsApp
          </span>
        </div>
      </a>
    </div>
  );
};
