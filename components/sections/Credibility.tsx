"use client";

import { Palette, Zap, Smartphone, Target } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const credibilityCards = [
  {
    icon: Palette,
    title: "Design Profissional",
    description:
      "Interfaces que impressionam. Cada detalhe visual é pensado para transmitir a identidade e os valores da sua marca.",
    color: "bg-violet-500/10 text-violet-500",
    border: "hover:border-violet-500/30",
  },
  {
    icon: Zap,
    title: "Alta Performance",
    description:
      "Sites ultrarrápidos com pontuação máxima no Google PageSpeed. Carregamento abaixo de 2 segundos em qualquer dispositivo.",
    color: "bg-amber-500/10 text-amber-500",
    border: "hover:border-amber-500/30",
  },
  {
    icon: Smartphone,
    title: "100% Responsivo",
    description:
      "Experiência perfeita em smartphones, tablets e desktops. Mais de 60% das visitas vêm de dispositivos móveis.",
    color: "bg-emerald-500/10 text-emerald-500",
    border: "hover:border-emerald-500/30",
  },
  {
    icon: Target,
    title: "Foco em Conversão",
    description:
      "Estrutura pensada para transformar visitantes em clientes. CTA estratégico, UX intuitivo e jornada de compra otimizada.",
    color: "bg-primary/10 text-primary",
    border: "hover:border-primary/30",
  },
];

export default function Credibility() {
  return (
    <section className="section-padding bg-white" aria-label="Por que ter um site profissional">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Text */}
          <div>
            <AnimatedSection>
              <span className="section-label">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                Por que isso importa
              </span>
              <h2 className="section-title text-3xl lg:text-4xl xl:text-5xl mb-6 text-balance">
                Sua empresa merece uma{" "}
                <span className="gradient-text">presença digital profissional.</span>
              </h2>
              <div className="space-y-4 text-gray leading-relaxed">
                <p>
                  Em um mercado cada vez mais digital, seu website é o principal cartão de visitas
                  da sua empresa. Antes de ligar, seus clientes pesquisam. Antes de comprar, eles
                  visitam o seu site.
                </p>
                <p>
                  Um site desatualizado, lento ou mal projetado passa a mensagem errada — e você
                  perde clientes sem nem saber. Um site profissional, por outro lado, gera confiança,
                  atrai leads qualificados e trabalha por você 24 horas por dia, 7 dias por semana.
                </p>
                <p className="font-medium text-dark">
                  A DRX Tech Solutions cria experiências digitais que convertem visitantes em
                  clientes reais para o seu negócio.
                </p>
              </div>
            </AnimatedSection>

            {/* Social proof */}
            <AnimatedSection delay={0.2} className="mt-8">
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
                <div className="flex -space-x-2">
                  {["C", "M", "R", "A"].map((letter, i) => (
                    <div
                      key={i}
                      className="w-9 h-9 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center border-2 border-white"
                    >
                      {letter}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-0.5">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-amber-400 text-sm">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-gray">
                    <strong className="text-dark">Empresas</strong> que investiram em presença
                    digital profissional
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {credibilityCards.map((card, i) => (
              <AnimatedSection key={card.title} delay={i * 0.1}>
                <div
                  className={`bg-white border border-gray-200 ${card.border} rounded-2xl p-6 hover:shadow-card-hover transition-all duration-300 group cursor-default`}
                >
                  <div
                    className={`w-11 h-11 ${card.color} rounded-xl flex items-center justify-center mb-4`}
                  >
                    <card.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-dark text-base mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray text-sm leading-relaxed">{card.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
