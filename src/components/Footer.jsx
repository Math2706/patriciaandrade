import React from 'react';
import { CLINIC_INFO } from '../data/content';
import { Instagram, MessageCircle, MapPin, Shield, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-graphite text-white pt-16 pb-12 border-t border-matte-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10 text-left">
          
          {/* Brand & Specialty */}
          <div className="space-y-4">
            <div>
              <h3 className="text-base sm:text-lg font-bold tracking-wider text-white uppercase">
                DRA. PATRÍCIA ANDRADE
              </h3>
              <p className="text-xs text-matte-gold font-semibold tracking-wider uppercase mt-1">
                Lifting Facial & Harmonização
              </p>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Biomédica Esteta inscrita sob o <strong className="text-white font-medium">CRBM 35884</strong>. Especialista em procedimentos minimamente invasivos e sustentação tecidual não cirúrgica.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={CLINIC_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Oficial Dra. Patrícia Andrade"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-matte-gold hover:bg-matte-gold hover:text-graphite transition-all duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={CLINIC_INFO.links.heroPrimary}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Dra. Patrícia Andrade"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-matte-gold hover:bg-matte-gold hover:text-graphite transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Locations */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-matte-gold">
              Locais de Atendimento
            </h4>
            <div className="space-y-3">
              {CLINIC_INFO.locations.map((loc, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                  <MapPin className="w-4 h-4 text-matte-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">{loc.city}</span>
                    <span className="text-neutral-400 text-[11px]">{loc.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-matte-gold">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs text-neutral-300">
              <li>
                <a href="#inicio" className="hover:text-matte-gold transition-colors">Início</a>
              </li>
              <li>
                <a href="#lifting-conceito" className="hover:text-matte-gold transition-colors">Lifting Sem Cortes</a>
              </li>
              <li>
                <a href="#procedimentos" className="hover:text-matte-gold transition-colors">Cardápio de Procedimentos</a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-matte-gold transition-colors">Diferenciais Clínicos</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-matte-gold transition-colors">Sobre a Dra. Patrícia</a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-matte-gold transition-colors">Depoimentos</a>
              </li>
            </ul>
          </div>

          {/* Ethics & Legal */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-matte-gold">
              Compromisso Ético
            </h4>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-champagne-soft">
                <Shield className="w-4 h-4 text-matte-gold" />
                <span>Resolução CRBM</span>
              </div>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                Este site possui caráter informativo e educacional. Os resultados podem variar de acordo com as características biológicas e anatômicas individuais de cada paciente.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            <p>
              © {new Date().getFullYear()} Dra. Patrícia Andrade • Todos os direitos reservados • CRBM 35884.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-matte-gold hover:text-white transition-colors"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
