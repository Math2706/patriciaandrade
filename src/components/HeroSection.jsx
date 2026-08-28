import React from 'react';
import { CLINIC_INFO } from '../data/content';
import { ShieldCheck, MapPin, Sparkles, ArrowRight, Instagram, CheckCircle2 } from 'lucide-react';
import draPatriciaImg from '../assets/dra-patricia.jpg';

export const HeroSection = () => {
  return (
    <section id="inicio" className="relative bg-canvas pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden">
      {/* Background Architectural Accent Lines */}
      <div className="absolute top-0 right-0 w-1/3 h-full border-l border-matte-gold/10 pointer-events-none hidden lg:block" />
      <div className="absolute bottom-12 left-0 w-1/4 h-px bg-gradient-to-r from-matte-gold/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: High-Desire Editorial Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 text-left">
            
            {/* Overline Badge */}
            <div className="inline-flex items-center self-start gap-2.5 px-4 py-1.5 rounded-full border border-matte-gold/40 text-graphite text-xs font-semibold tracking-wider uppercase bg-matte-gold/15 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-matte-gold-600" />
              <span>REFERÊNCIA EM LIFTING FACIAL NÃO CIRÚRGICO</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight text-graphite leading-[1.15]">
              Resultados <span className="text-matte-gold font-semibold italic">naturais</span> para mulheres que querem se <span className="text-matte-gold font-semibold">reconhecer no espelho</span>.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-graphite-600 font-normal leading-relaxed max-w-2xl">
              Protocolos avançados de reposicionamento tecidual e sustentação facial planejados pela <strong className="font-semibold text-graphite">Dra. Patrícia Andrade</strong> para rejuvenescer sua expressão sem cortes, sem dor e sem transformar quem você é.
            </p>

            {/* CTAs Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              {/* Primary CTA (WhatsApp) */}
              <a
                href={CLINIC_INFO.links.heroPrimary}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wider bg-matte-gold text-graphite hover:brightness-110 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 group"
              >
                <span>AGENDAR MINHA AVALIAÇÃO</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
              </a>

              {/* Secondary CTA (Instagram) */}
              <a
                href={CLINIC_INFO.links.heroInstagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full text-sm font-semibold uppercase tracking-wider border border-graphite/20 text-graphite hover:bg-white hover:border-matte-gold/50 transition-all duration-300 shadow-sm"
              >
                <Instagram className="w-4 h-4 text-matte-gold-600" />
                <span>Acompanhar no Instagram</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-matte-gold/20 flex flex-wrap items-center gap-6 text-xs text-graphite-600">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-matte-gold-600 shrink-0" />
                <span className="font-medium">CRBM 35884 • Biomédica Esteta</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-matte-gold-600 shrink-0" />
                <span className="font-medium">Lifting 100% Sem Cirurgia</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-matte-gold-600 shrink-0" />
                <span className="font-medium">Alphaville & Osasco - SP</span>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Portrait Frame */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Outer Decorative Architectural Border */}
              <div className="absolute -inset-3 border border-matte-gold/30 rounded-3xl -rotate-1 pointer-events-none hidden sm:block" />
              
              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden bg-white shadow-2xl border-2 border-matte-gold/40">
                <img
                  src={draPatriciaImg}
                  alt="Dra. Patrícia Andrade - Biomédica Esteta e Especialista em Harmonização Facial"
                  className="w-full h-auto aspect-[4/5] object-cover object-center transform transition-transform duration-700 hover:scale-105"
                  loading="eager"
                />

                {/* Gradient vignette at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-graphite/60 via-transparent to-transparent pointer-events-none" />

                {/* Floating Bottom Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-matte-gold/30 shadow-lg text-left">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-sm font-bold text-graphite tracking-tight uppercase">
                        Dra. Patrícia Andrade
                      </h2>
                      <p className="text-[11px] text-graphite-600 font-medium tracking-wide">
                        Especialista em Harmonização & Lifting Facial
                      </p>
                    </div>
                    <span className="px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase bg-matte-gold/20 text-graphite rounded-full border border-matte-gold/40">
                      CRBM 35884
                    </span>
                  </div>
                </div>

              </div>

              {/* Floating Floating Accent Badge */}
              <div className="absolute -top-4 -left-4 bg-graphite text-white px-4 py-2 rounded-full border border-matte-gold/40 shadow-xl hidden sm:flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-matte-gold" />
                <span className="text-[11px] uppercase tracking-wider font-medium">
                  Atendimento Privativo
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
