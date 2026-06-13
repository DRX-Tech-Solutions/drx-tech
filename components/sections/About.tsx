"use client";

import { Zap, Award, Globe, Heart } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const values = [
  { icon: Award, title: "Excelência", description: "Código de qualidade em cada projeto" },
  { icon: Globe, title: "Inovação", description: "Tecnologias modernas e atualizadas" },
  { icon: Heart, title: "Dedicação", description: "Comprometimento total com o cliente" },
  { icon: Zap, title: "Agilidade", description: "Entregas no prazo, sempre" },
];

export default function About() {
  return (
    <section
      id="sobre"
      className="section-padding bg-white"
      aria-label="Sobre a DRX Tech Solutions"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Visual */}
          <AnimatedSection direction="left">
            <div className="relative">
              {/* Main card */}
              <div className="bg-dark rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-20" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" strokeWidth={2.5} />
                    </div>
                    <div>
                      <div className="text-white font-display font-bold text-sm">DRX Tech Solutions</div>
                      <div className="text-gray-light text-xs">Agência Digital Premium</div>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {[
                      { label: "Performance", value: 98, color: "bg-primary" },
                      { label: "SEO Score", value: 95, color: "bg-emerald-500" },
                      { label: "Acessibilidade", value: 92, color: "bg-amber-500" },
                    ].map((metric) => (
                      <div key={metric.label}>
                        <div className="flex justify-between text-xs text-gray-light mb-1.5">
                          <span>{metric.label}</span>
                          <span className="font-semibold text-white">{metric.value}/100</span>
                        </div>
                        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${metric.color} rounded-full`}
                            style={{ width: `${metric.value}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { value: "50+", label: "Projetos" },
                      { value: "3 anos", label: "Experiência" },
                      { value: "100%", label: "Satisfação" },
                      { value: "24/7", label: "Suporte" },
                    ].map((item) => (
                      <div key={item.label} className="bg-white/5 rounded-xl p-4 text-center">
                        <div className="font-display font-bold text-white text-xl">{item.value}</div>
                        <div className="text-gray-light text-xs">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-primary text-white rounded-2xl px-5 py-3 shadow-glow-lg">
                <div className="text-2xl font-display font-bold">98%</div>
                <div className="text-xs text-white/80">clientes satisfeitos</div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Text */}
          <AnimatedSection direction="right">
            <span className="section-label">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              Nossa história
            </span>
            <h2 className="section-title text-3xl lg:text-4xl xl:text-5xl text-dark mb-6 text-balance">
              Tecnologia com foco em{" "}
              <span className="gradient-text">crescimento.</span>
            </h2>
            <div className="space-y-4 text-gray leading-relaxed mb-8">
              <p>
                A DRX Tech Solutions nasceu com uma missão clara: tornar acessível a
                pequenas e médias empresas o nível de qualidade digital que grandes
                corporações possuem.
              </p>
              <p>
                Somos especialistas em transformar negócios locais — de empresas de limpeza
                a marcenarias, de consultores a mentores — em referências digitais dentro
                dos seus mercados.
              </p>
              <p>
                Combinamos design de alta qualidade, tecnologia de ponta e estratégia de
                conversão para criar websites que não são apenas bonitos, mas que geram
                resultados mensuráveis para o seu negócio.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-3">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 border border-gray-200"
                >
                  <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-dark text-sm">{value.title}</div>
                    <div className="text-gray text-xs">{value.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
