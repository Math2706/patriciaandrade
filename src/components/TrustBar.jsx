import React from 'react';
import { Award, Shield, UserCheck, Sparkles } from 'lucide-react';

export const TrustBar = () => {
  const points = [
    {
      icon: Award,
      title: "Biomédica Esteta",
      subtitle: "Registro CRBM 35884"
    },
    {
      icon: UserCheck,
      title: "Atendimento Privativo",
      subtitle: "Alphaville & Osasco - SP"
    },
    {
      icon: Sparkles,
      title: "Lifting Sem Cortes",
      subtitle: "Preservação da Identidade"
    },
    {
      icon: Shield,
      title: "Produtos Padrão Ouro",
      subtitle: "100% Certificados ANVISA"
    }
  ];

  return (
    <section className="bg-white border-y border-matte-gold/20 py-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {points.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3.5 p-3 rounded-xl hover:bg-canvas transition-colors duration-200"
              >
                <div className="w-10 h-10 rounded-full bg-matte-gold/15 border border-matte-gold/30 flex items-center justify-center shrink-0 text-matte-gold-700">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <h4 className="text-xs sm:text-sm font-bold text-graphite tracking-tight uppercase">
                    {item.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-graphite-500 font-normal">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
