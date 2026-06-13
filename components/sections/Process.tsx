"use client";

import { Search, FileText, Code2, Zap } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { processSteps } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Search,
  FileText,
  Code2,
  Zap,
};

export default function Process() {
  return (
    <section
      id="processo"
      className="section-padding bg-gray-50"
      aria-label="Nosso processo de trabalho"
    >
      <div className="container-custom">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="section-label">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            Como trabalhamos
          </span>
          <h2 className="section-title text-3xl lg:text-4xl xl:text-5xl text-dark mb-4 text-balance">
            Do briefing ao lançamento,{" "}
            <span className="gradient-text">sem surpresas</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Um processo estruturado e transparente garante entregas no prazo,
            dentro do escopo e superando expectativas.
          </p>
        </AnimatedSection>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connector line — desktop */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {processSteps.map((step, i) => {
              const Icon = iconMap[step.icon];
              return (
                <AnimatedSection key={step.step} delay={i * 0.12}>
                  <div className="relative text-center group">
                    {/* Step indicator */}
                    <div className="flex flex-col items-center mb-6">
                      <div className="relative">
                        <div className="w-20 h-20 bg-white border-2 border-primary/20 group-hover:border-primary rounded-2xl flex items-center justify-center transition-all duration-300 shadow-card group-hover:shadow-glow">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-7 h-7 bg-primary rounded-lg flex items-center justify-center shadow-glow">
                          <span className="text-white text-xs font-bold">{step.step}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="font-display font-bold text-dark text-xl mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray text-sm leading-relaxed">{step.description}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>

        {/* Bottom note */}
        <AnimatedSection delay={0.5} className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-white border border-gray-200 rounded-2xl px-6 py-4 shadow-card">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-dark text-sm">Projetos entregues em média em 15 dias</p>
              <p className="text-gray text-xs">Do primeiro contato ao site no ar</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
