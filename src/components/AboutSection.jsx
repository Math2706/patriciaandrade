import React from 'react';
import { CLINIC_INFO, DIFFERENTIALS } from '../data/content';
import { ShieldCheck, MapPin, ArrowRight } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="sobre" className="bg-canvas py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bio & Authority Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Biography & Credentials */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-matte-gold/40 text-graphite text-xs font-semibold tracking-wider uppercase bg-matte-gold/15">
              <span>AUTORIDADE CLÍNICA</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-graphite">
              Dra. Patrícia Andrade
            </h2>

            <p className="text-xs uppercase tracking-widest font-semibold text-matte-gold-700">
              Biomédica Esteta • CRBM 35884 • Especialista em Harmonização Facial
            </p>

            <div className="space-y-4 text-sm sm:text-base text-graphite-600 leading-relaxed">
              <p>
                Dedicada exclusivamente à arte e à ciência do rejuvenescimento facial não cirúrgico, a <strong className="font-semibold text-graphite">Dra. Patrícia Andrade</strong> construiu sua trajetória fundamentada no rigor anatômico, na ética médica e na busca obstinada por resultados naturais.
              </p>
              <p>
                Com atendimento privativo nas cidades de <strong className="font-semibold text-graphite">Alphaville (Barueri) e Osasco - SP</strong>, seu consultório foi concebido para oferecer uma experiência de acolhimento único, longe da pressa de clínicas convencionais. Cada plano de tratamento é desenhado sob medida após diagnóstico tridimensional das proporções faciais.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-graphite bg-white px-4 py-2 rounded-full border border-matte-gold/30">
                <ShieldCheck className="w-4 h-4 text-matte-gold-600" />
                <span>Registro Oficial CRBM 35884</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-graphite bg-white px-4 py-2 rounded-full border border-matte-gold/30">
                <MapPin className="w-4 h-4 text-matte-gold-600" />
                <span>Alphaville & Osasco - SP</span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href={CLINIC_INFO.links.heroPrimary}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-wider bg-graphite text-white hover:bg-matte-gold hover:text-graphite transition-all duration-300 shadow-md group"
              >
                <span>Conhecer Atendimento Privativo</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: 4 Clinical Differentials */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {DIFFERENTIALS.map((diff, index) => (
              <div
                key={index}
                className="bg-white border border-matte-gold/20 rounded-2xl p-6 hover:border-matte-gold transition-all duration-300 hover:shadow-editorial shadow-sm"
              >
                <div className="w-8 h-8 rounded-full bg-matte-gold/15 border border-matte-gold/30 flex items-center justify-center text-matte-gold-700 mb-4 font-bold text-xs">
                  0{index + 1}
                </div>
                <h4 className="text-sm font-bold text-graphite tracking-tight uppercase mb-2">
                  {diff.title}
                </h4>
                <p className="text-xs text-graphite-600 leading-relaxed">
                  {diff.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
