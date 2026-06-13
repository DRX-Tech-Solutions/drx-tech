"use client";

import { ExternalLink, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { projects } from "@/lib/data";

const projectImages = [
  "/drx-cleaning.webp",
  "/protagonize.webp",
  "/dx-marcenaria.webp",
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="section-padding bg-white"
      aria-label="Portfólio de projetos"
    >
      <div className="container-custom">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="section-label">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            Nossos projetos
          </span>
          <h2 className="section-title text-3xl lg:text-4xl xl:text-5xl text-dark mb-4 text-balance">
            Resultados que falam por si
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Cada projeto é uma parceria estratégica. Veja como transformamos a presença
            digital de empresas como a sua.
          </p>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            return (
              <AnimatedSection key={project.id} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
                >
                  {/* Image */}
                  <div className="overflow-hidden rounded-t-2xl">
                    <Image
                      src={projectImages[i % projectImages.length]}
                      alt={project.name}
                      width={600}
                      height={340}
                      className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="px-5 pb-5">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <span className="text-xs font-medium text-primary bg-primary-100 px-2.5 py-1 rounded-full">
                          {project.category}
                        </span>
                      </div>
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-gray-100 hover:bg-primary rounded-lg flex items-center justify-center transition-colors group/link"
                          aria-label={`Visitar ${project.name}`}
                        >
                          <ExternalLink className="w-3.5 h-3.5 text-gray group-hover/link:text-white" />
                        </a>
                      )}
                    </div>

                    <h3 className="font-display font-bold text-dark text-lg mb-2">
                      {project.name}
                    </h3>
                    <p className="text-gray text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-medium text-gray bg-gray-100 px-2.5 py-1 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* CTA */}
        <AnimatedSection delay={0.4} className="text-center mt-12">
          <a href="#contato" className="btn-ghost text-primary font-semibold group">
            Quer seu projeto aqui? Fale conosco
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
