"use client";

import {
  Monitor,
  Rocket,
  Server,
  Wrench,
  Layers,
  Cpu,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { services } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Monitor,
  Rocket,
  Server,
  Wrench,
  Layers,
  Cpu,
};

export default function Services() {
  return (
    <section
      id="servicos"
      className="section-padding bg-dark relative overflow-hidden"
      aria-label="Nossos serviços"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="section-label text-primary">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            O que fazemos
          </span>
          <h2 className="section-title text-3xl lg:text-4xl xl:text-5xl text-white mb-4 text-balance">
            Soluções digitais para o crescimento do seu negócio
          </h2>
          <p className="section-subtitle text-gray-light max-w-2xl mx-auto">
            Do planejamento ao lançamento, entregamos soluções completas que posicionam
            sua empresa na vanguarda digital.
          </p>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <AnimatedSection key={service.id} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className={`relative rounded-2xl p-6 border transition-all duration-300 cursor-default h-full ${
                    service.highlight
                      ? "bg-primary border-primary/50 shadow-glow"
                      : "bg-dark-800 border-white/10 hover:border-primary/30 hover:shadow-glow"
                  }`}
                >
                  {service.highlight && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/20 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                        Popular
                      </span>
                    </div>
                  )}

                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                      service.highlight ? "bg-white/20" : "bg-primary/10"
                    }`}
                  >
                    <Icon
                      className={`w-6 h-6 ${service.highlight ? "text-white" : "text-primary"}`}
                    />
                  </div>

                  {/* Content */}
                  <h3
                    className={`font-display font-bold text-lg mb-3 ${
                      service.highlight ? "text-white" : "text-white"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed mb-5 ${
                      service.highlight ? "text-white/80" : "text-gray-light"
                    }`}
                  >
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <CheckCircle2
                          className={`w-3.5 h-3.5 flex-shrink-0 ${
                            service.highlight ? "text-white/70" : "text-primary"
                          }`}
                        />
                        <span
                          className={`text-xs ${
                            service.highlight ? "text-white/80" : "text-gray-light"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* CTA */}
        <AnimatedSection delay={0.4} className="text-center mt-12">
          <a href="#contato" className="btn-primary px-8 py-4 text-base">
            Falar com um especialista
            <ArrowRight className="w-5 h-5" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
