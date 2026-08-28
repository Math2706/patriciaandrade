import React, { useState, useEffect } from 'react';
import { CLINIC_INFO } from '../data/content';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Lifting Sem Cortes', href: '#lifting-conceito' },
    { label: 'Procedimentos', href: '#procedimentos' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Depoimentos', href: '#depoimentos' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-matte-gold/20 py-3.5'
          : 'bg-canvas/95 backdrop-blur-md border-b border-matte-gold/15 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo (Clean Editorial Typography - No Graphic CRBM Badge) */}
        <a href="#inicio" className="flex flex-col text-left group">
          <span className="text-sm sm:text-base font-bold tracking-wider text-graphite uppercase transition-colors group-hover:text-matte-gold duration-200">
            DRA. PATRÍCIA ANDRADE
          </span>
          <span className="text-[9px] sm:text-[10px] tracking-ultra-wide uppercase text-matte-gold font-medium">
            Lifting Facial & Harmonização
          </span>
        </a>

        {/* Desktop Navigation (Harmonious & Even Spacing) */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[11px] xl:text-xs tracking-wider uppercase font-medium text-graphite/80 hover:text-matte-gold transition-colors duration-200 py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Header Action Button (Refined Boutique Pill with Balanced Spacing) */}
        <div className="hidden sm:flex items-center">
          <a
            href={CLINIC_INFO.links.headerCTA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-graphite text-white hover:bg-matte-gold hover:text-graphite border border-transparent hover:border-matte-gold/40 transition-all duration-300 shadow-sm group"
          >
            <span>Agendar Avaliação</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-matte-gold group-hover:text-graphite transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex sm:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menu de navegação"
            className="p-1.5 rounded-lg text-graphite hover:text-matte-gold transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-matte-gold/20 px-6 py-5 space-y-4 shadow-lg animate-fadeIn">
          <nav className="flex flex-col space-y-2.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[11px] uppercase tracking-widest font-medium text-graphite py-2 border-b border-neutral-100 hover:text-matte-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <a
              href={CLINIC_INFO.links.headerCTA}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-graphite text-white hover:bg-matte-gold hover:text-graphite transition-all duration-300 shadow-sm"
            >
              <span>Agendar Avaliação</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-matte-gold" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
