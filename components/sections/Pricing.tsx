"use client";

import { CheckCircle2, ArrowRight, Sparkles, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";

const plans = [
  {
    id: "landing",
    subtitle: "Ideal para começar",
    name: "Landing Page",
    price: "A partir de",
    highlight: false,
    description:
      "Página única de alta conversão para captar leads, divulgar um serviço ou lançar um produto.",
    features: [
      "Design exclusivo e responsivo",
      "Até 6 seções personalizadas",
      "Formulário de contato",
      "SEO básico configurado",
      "Integração com WhatsApp",
      "Entrega em até 7 dias",
    ],
    cta: "Solicitar orçamento",
  },
  {
    id: "site",
    subtitle: "Mais popular",
    name: "Website Profissional",
    price: "A partir de",
    highlight: true,
    description:
      "Site completo para empresas que querem transmitir credibilidade e gerar resultados online.",
    features: [
      "Design premium personalizado",
      "Até 8 páginas completas",
      "Blog integrado (opcional)",
      "SEO avançado",
      "Analytics e relatórios",
      "Integração com redes sociais",
      "Suporte por 30 dias",
      "Entrega em até 15 dias",
    ],
    cta: "Quero este plano",
  },
  {
    id: "completo",
    subtitle: "Solução completa",
    name: "Presença Digital",
    price: "Sob consulta",
    highlight: false,
    description:
      "Solução digital completa com site, hospedagem, manutenção mensal e suporte contínuo.",
    features: [
      "Tudo do plano Website",
      "Hospedagem gerenciada",
      "Manutenção mensal inclusa",
      "Atualizações de conteúdo",
      "Relatório mensal de performance",
      "Suporte prioritário",
      "Consultoria estratégica",
    ],
    cta: "Falar com especialista",
  },
];

export default function Pricing() {
  return (
    <section
      id="planos"
      className="section-padding bg-gray-50"
      aria-label="Planos e preços"
    >
      <div className="container-custom">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="section-label">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            Investimento
          </span>
          <h2 className="section-title text-3xl lg:text-4xl xl:text-5xl text-dark mb-4 text-balance">
            Soluções para cada momento do seu negócio
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Cada projeto é único. Receba uma proposta personalizada sem compromisso
            — respondemos em até 24 horas úteis.
          </p>
        </AnimatedSection>

        {/* Pricing Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {plans.map((plan, i) => (
            <AnimatedSection key={plan.id} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                  plan.highlight
                    ? "bg-dark border-2 border-primary shadow-glow-lg"
                    : "bg-white border border-gray-200 shadow-card hover:shadow-card-hover"
                }`}
              >
                {/* Popular badge */}
                {plan.highlight && (
                  <div className="bg-primary text-white text-xs font-bold text-center py-2.5 px-4 flex items-center justify-center gap-1.5 tracking-wide">
                    <Sparkles className="w-3.5 h-3.5" />
                    MAIS POPULAR
                  </div>
                )}

                <div className="p-7">
                  {/* Plan header */}
                  <div className="mb-6">
                    <span
                      className={`text-xs font-bold uppercase tracking-widest ${
                        plan.highlight ? "text-primary" : "text-gray"
                      }`}
                    >
                      {plan.subtitle}
                    </span>
                    <h3
                      className={`font-display font-bold text-2xl mt-1 mb-3 ${
                        plan.highlight ? "text-white" : "text-dark"
                      }`}
                    >
                      {plan.name}
                    </h3>

                    {/* Price — sem valor fixo */}
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className={`text-sm font-medium ${
                          plan.highlight ? "text-white/60" : "text-gray"
                        }`}
                      >
                        {plan.price}
                      </span>
                      {plan.price !== "Sob consulta" && (
                        <span className="inline-flex items-center gap-1 bg-primary/10 text-primary text-xs font-semibold px-2.5 py-1 rounded-full">
                          <MessageCircle className="w-3 h-3" />
                          Orçamento gratuito
                        </span>
                      )}
                    </div>

                    <p
                      className={`text-sm leading-relaxed ${
                        plan.highlight ? "text-gray-light" : "text-gray"
                      }`}
                    >
                      {plan.description}
                    </p>
                  </div>

                  {/* Divider */}
                  <div
                    className={`h-px mb-6 ${
                      plan.highlight ? "bg-white/10" : "bg-gray-200"
                    }`}
                  />

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle2
                          className={`w-4 h-4 flex-shrink-0 ${
                            plan.highlight ? "text-primary" : "text-emerald-500"
                          }`}
                        />
                        <span
                          className={`text-sm ${
                            plan.highlight ? "text-gray-light" : "text-gray"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="#contato"
                    className={`w-full flex items-center justify-center gap-2 font-semibold py-3.5 px-6 rounded-xl transition-all duration-200 ${
                      plan.highlight
                        ? "bg-primary hover:bg-primary-dark text-white shadow-glow hover:shadow-glow-lg"
                        : "bg-gray-100 hover:bg-primary hover:text-white text-dark"
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Footer note */}
        <AnimatedSection delay={0.4} className="text-center mt-10">
          <p className="text-gray text-sm">
            Todos os projetos incluem{" "}
            <strong className="text-dark">suporte técnico</strong>,{" "}
            <strong className="text-dark">SSL gratuito</strong> e{" "}
            <strong className="text-dark">design responsivo</strong>.
            Tem um projeto diferente?{" "}
            <a href="#contato" className="text-primary font-semibold hover:underline">
              Fale com a gente.
            </a>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
