"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle2, TrendingUp, Globe, Zap } from "lucide-react";

const floatingCards = [
  {
    icon: TrendingUp,
    label: "+287% em leads",
    sub: "DRX Cleaning",
    color: "bg-emerald-500",
    position: "top-1/4 -left-4 lg:-left-8",
    delay: 0,
  },
  {
    icon: Globe,
    label: "Site no ar em 15 dias",
    sub: "DX Marcenaria",
    color: "bg-primary",
    position: "top-1/3 -right-4 lg:-right-8",
    delay: 0.3,
  },
  {
    icon: Zap,
    label: "Performance 98/100",
    sub: "Lighthouse Score",
    color: "bg-amber-500",
    position: "bottom-1/4 -left-2 lg:-left-6",
    delay: 0.6,
  },
];

const trustBadges = [
  "Design Responsivo",
  "SEO Otimizado",
  "Alta Performance",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-dark"
      aria-label="Hero"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid opacity-40" />

        {/* Radial gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />

        {/* Glow orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/8 rounded-full blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container-custom relative z-10 pt-24 pb-16 lg:pt-32 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary text-xs font-semibold px-4 py-2 rounded-full mb-6"
            >
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              Agência Digital Premium
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-balance mb-6"
            >
              Websites Profissionais para Empresas que Querem{" "}
              <span className="text-primary">Crescer</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-light text-lg lg:text-xl leading-relaxed mb-8 max-w-lg"
            >
              Ajudamos empresas a fortalecer sua presença digital através de websites
              modernos, rápidos e focados em resultados.
            </motion.p>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 text-xs text-gray-light bg-white/5 border border-white/10 px-3 py-1.5 rounded-full"
                >
                  <CheckCircle2 className="w-3 h-3 text-primary" />
                  {badge}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a href="#contato" className="btn-primary px-8 py-4 text-base">
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-3 text-white font-semibold px-6 py-4 rounded-lg border border-white/10 hover:border-white/30 transition-all duration-200 hover:bg-white/5"
              >
                <div className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center">
                  <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                </div>
                Ver Portfólio
              </a>
            </motion.div>
          </div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Browser Mockup */}
            <div className="relative w-full max-w-lg">
              <div className="bg-dark-800 rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-4 py-3 bg-dark-700 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/70" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
                  </div>
                  <div className="flex-1 mx-4 bg-dark-800 rounded-md px-3 py-1 text-xs text-gray-light font-mono">
                    drxtech.com.br
                  </div>
                </div>

                {/* Mock website content */}
                <div className="p-6 space-y-4">
                  {/* Hero mock */}
                  <div className="bg-gradient-to-br from-primary/20 to-dark rounded-xl p-6 border border-white/5">
                    <div className="w-20 h-2.5 bg-white/20 rounded-full mb-3" />
                    <div className="w-32 h-2 bg-white/10 rounded-full mb-5" />
                    <div className="flex gap-2">
                      <div className="w-24 h-8 bg-primary rounded-lg" />
                      <div className="w-20 h-8 bg-white/10 rounded-lg" />
                    </div>
                  </div>

                  {/* Cards mock */}
                  <div className="grid grid-cols-3 gap-3">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/5">
                        <div className="w-8 h-8 bg-primary/20 rounded-lg mb-3" />
                        <div className="w-full h-2 bg-white/10 rounded-full mb-2" />
                        <div className="w-3/4 h-1.5 bg-white/5 rounded-full" />
                      </div>
                    ))}
                  </div>

                  {/* Text mock */}
                  <div className="space-y-2">
                    <div className="w-full h-1.5 bg-white/5 rounded-full" />
                    <div className="w-5/6 h-1.5 bg-white/5 rounded-full" />
                    <div className="w-4/6 h-1.5 bg-white/5 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              {floatingCards.map((card, i) => (
                <motion.div
                  key={i}
                  className={`absolute ${card.position} bg-dark-800 border border-white/10 rounded-xl px-4 py-3 flex items-center gap-3 shadow-xl backdrop-blur-sm z-10`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
                  transition={{
                    opacity: { delay: 0.6 + card.delay, duration: 0.4 },
                    scale: { delay: 0.6 + card.delay, duration: 0.4 },
                    y: { delay: card.delay, duration: 4, repeat: Infinity, ease: "easeInOut" },
                  }}
                >
                  <div className={`w-8 h-8 ${card.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <card.icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-white text-xs font-semibold">{card.label}</p>
                    <p className="text-gray-light text-[10px]">{card.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 lg:mt-20 pt-10 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {[
            { value: "50+", label: "Projetos entregues" },
            { value: "98%", label: "Clientes satisfeitos" },
            { value: "3x", label: "Mais leads gerados" },
            { value: "<2s", label: "Tempo de carregamento" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-bold text-white text-3xl lg:text-4xl">
                {stat.value}
              </div>
              <div className="text-gray-light text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>


    </section>
  );
}
