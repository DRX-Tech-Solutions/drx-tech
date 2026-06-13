"use client";

import { Users, Palette, TrendingUp, Headphones } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { differentials } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Users,
  Palette,
  TrendingUp,
  HeadphonesIcon: Headphones,
};

const gradients = [
  "from-blue-500 to-primary",
  "from-violet-500 to-purple-600",
  "from-emerald-500 to-teal-600",
  "from-amber-500 to-orange-500",
];

export default function Differentials() {
  return (
    <section
      className="section-padding bg-dark relative overflow-hidden"
      aria-label="Nossos diferenciais"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <AnimatedSection>
            <span className="section-label text-primary">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              Por que nos escolher
            </span>
            <h2 className="section-title text-3xl lg:text-4xl xl:text-5xl text-white mb-6 text-balance">
              Mais do que um site,{" "}
              <span className="text-primary">uma parceria estratégica</span>
            </h2>
            <p className="text-gray-light text-lg leading-relaxed mb-8">
              Não somos uma fábrica de sites. Somos parceiros estratégicos que entendem
              seu negócio e entregam soluções que realmente funcionam para seus objetivos.
            </p>

            {/* Mini stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "15 dias", label: "Prazo médio de entrega" },
                { value: "24/7", label: "Monitoramento do site" },
                { value: "100%", label: "Personalizado para você" },
                { value: "0", label: "Templates genéricos" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-dark-800 border border-white/5 rounded-xl p-4"
                >
                  <div className="font-display font-bold text-white text-2xl mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-light text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Right: Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {differentials.map((diff, i) => {
              const Icon = iconMap[diff.icon];
              return (
                <AnimatedSection key={diff.title} delay={i * 0.1}>
                  <div className="group bg-dark-800 border border-white/10 hover:border-primary/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-glow cursor-default">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${gradients[i]} rounded-xl flex items-center justify-center mb-4 shadow-lg`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-display font-bold text-white text-base mb-2">
                      {diff.title}
                    </h3>
                    <p className="text-gray-light text-sm leading-relaxed">{diff.description}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
