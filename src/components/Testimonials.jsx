import React from 'react';
import { TESTIMONIALS } from '../data/content';
import { Star, Sparkles, Quote } from 'lucide-react';

export const Testimonials = () => {
  return (
    <section id="depoimentos" className="bg-white py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-matte-gold/40 text-graphite text-xs font-semibold tracking-wider uppercase bg-matte-gold/15">
            <Sparkles className="w-3.5 h-3.5 text-matte-gold-600" />
            <span>RELATOS REAIS & EXPERIÊNCIAS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-graphite">
            A Satisfação de se <span className="text-matte-gold font-semibold">Reconhecer no Espelho</span>
          </h2>

          <p className="text-base sm:text-lg text-graphite-600 font-normal leading-relaxed">
            Depoimentos de pacientes que transformaram sua autoestima através da sutileza, elegância e segurança dos nossos procedimentos.
          </p>
        </div>

        {/* Testimonials 3-Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, index) => (
            <div
              key={index}
              className="bg-canvas border border-matte-gold/30 rounded-2xl p-8 flex flex-col justify-between hover:border-matte-gold hover:shadow-editorial-hover transition-all duration-300 relative group"
            >
              <div>
                {/* 5 Golden Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-matte-gold text-matte-gold"
                      />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-matte-gold/30 group-hover:text-matte-gold transition-colors duration-300" />
                </div>

                {/* Quote Text */}
                <blockquote className="text-sm text-graphite-700 leading-relaxed italic mb-6">
                  "{item.quote}"
                </blockquote>
              </div>

              {/* Author & Treatment Info */}
              <div className="pt-6 border-t border-matte-gold/20">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-graphite tracking-tight uppercase">
                      {item.author}
                    </h4>
                    <p className="text-xs text-graphite-500">
                      {item.age} • {item.location}
                    </p>
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider bg-white px-2.5 py-1 rounded-full border border-matte-gold/30 text-matte-gold-800">
                    Verificada
                  </span>
                </div>
                <p className="text-[11px] font-medium text-matte-gold-700 mt-2">
                  Protocolo: {item.treatment}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
