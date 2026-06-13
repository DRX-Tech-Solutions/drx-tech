"use client";

import { Code2, Zap, Search, MousePointerClick, HeadphonesIcon, Layers } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const differentials = [
  {
    icon: Layers,
    title: "Desenvolvimento sob medida",
    description: "Cada projeto é construído do zero para refletir a identidade e os objetivos únicos do seu negócio. Sem templates genéricos.",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    icon: Code2,
    title: "Código limpo e escalável",
    description: "Escrevemos código de qualidade, organizado e preparado para crescer junto com o seu negócio sem retrabalho.",
    color: "bg-violet-500/10 text-violet-500",
  },
  {
    icon: Zap,
    title: "Performance otimizada",
    description: "Sites rápidos, leves e otimizados para carregar em menos de 2 segundos em qualquer dispositivo.",
    color: "bg-amber-500/10 text-amber-500",
  },
  {
    icon: Search,
    title: "SEO desde o início",
    description: "A otimização para mecanismos de busca é implementada desde a estrutura do código, não como um complemento.",
    color: "bg-emerald-500/10 text-emerald-500",
  },
  {
    icon: MousePointerClick,
    title: "Design focado em conversão",
    description: "Cada elemento visual e cada CTA é pensado estrategicamente para transformar visitantes em clientes.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: HeadphonesIcon,
    title: "Suporte após a entrega",
    description: "Não desaparecemos após o lançamento. Estamos disponíveis para dúvidas, ajustes e evoluções do projeto.",
    color: "bg-rose-500/10 text-rose-500",
  },
];

export default function Differentials() {
  return (
    <section
      className="section-padding bg-dark relative overflow-hidden"
      aria-label="Por que escolher a DRX Tech Solutions"
    >
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container-custom relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="section-label text-primary">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            Nossos diferenciais
          </span>
          <h2 className="section-title text-3xl lg:text-4xl xl:text-5xl text-white mb-4 text-balance">
            Por que escolher a{" "}
            <span className="text-primary">DRX Tech Solutions?</span>
          </h2>
          <p className="section-subtitle text-gray-light max-w-2xl mx-auto">
            Não somos uma fábrica de sites. Somos parceiros estratégicos comprometidos
            com a qualidade, a performance e o crescimento do seu negócio.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {differentials.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.08}>
              <div className="group bg-dark-800 border border-white/10 hover:border-primary/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-glow cursor-default h-full">
                <div className={`w-11 h-11 ${item.color} rounded-xl flex items-center justify-center mb-4`}>
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-white text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-light text-sm leading-relaxed">{item.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
