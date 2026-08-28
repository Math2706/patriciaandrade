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
    { label: 'Lifting Não Cirúrgico', href: '#lifting-conceito' },
    { label: 'Procedimentos', href: '#procedimentos' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Sobre a Especialista', href: '#sobre' },
    { label: 'Depoimentos', href: '#depoimentos' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-matte-gold/20 py-3.5'
          : 'bg-canvas/90 backdrop-blur-sm border-b border-graphite/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-bold tracking-wider text-graphite uppercase transition-colors group-hover:text-matte-gold duration-200">
              DRA. PATRÍCIA ANDRADE
            </span>
            <span className="text-[10px] tracking-ultra-wide uppercase text-matte-gold font-medium">
              Lifting Facial & Harmonização
            </span>
          </div>
          <span className="hidden md:inline-flex px-2 py-0.5 text-[9px] uppercase tracking-widest font-semibold bg-matte-gold/15 text-graphite rounded border border-matte-gold/30">
            CRBM 35884
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs tracking-wider uppercase font-medium text-graphite/80 hover:text-matte-gold transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Header Action Button */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href={CLINIC_INFO.links.headerCTA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-graphite text-white hover:bg-matte-gold hover:text-graphite transition-all duration-300 shadow-sm group"
          >
            <span>Agendar Avaliação</span>
            <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex sm:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menu de navegação"
            className="p-2 rounded-lg text-graphite hover:text-matte-gold transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-matte-gold/20 px-6 py-6 space-y-4 shadow-lg animate-fadeIn">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs uppercase tracking-widest font-medium text-graphite py-2 border-b border-neutral-100 hover:text-matte-gold transition-colors"
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
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-graphite text-white hover:bg-matte-gold hover:text-graphite transition-all duration-300 shadow-md"
            >
              <span>Agendar Avaliação</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
