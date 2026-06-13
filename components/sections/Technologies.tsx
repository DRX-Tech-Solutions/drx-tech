"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";

const technologies = [
  {
    name: "React",
    description: "Interfaces modernas e altamente interativas.",
    icon: (
      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{background:"#20232a"}}>
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#61DAFB">
          <circle cx="12" cy="12" r="2.5"/>
          <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1.2"/>
          <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(60 12 12)"/>
          <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(120 12 12)"/>
        </svg>
      </div>
    ),
    color: "border-gray-200 hover:border-gray-300",
    bg: "bg-gray-50",
  },
  {
    name: "Next.js",
    description: "Performance, SEO e escalabilidade em produção.",
    icon: (
      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{background:"#000"}}>
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="white">
          <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747C23.24 4.595 20.033.809 15.684.092c-.775-.124-1.655-.175-2.112-.092zm3.868 7.461a.404.404 0 0 1 .208.232c.018.06.023 1.368.018 4.304l-.008 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.412.412 0 0 1 .2-.24c.096-.047.13-.051.527-.051.385 0 .433.005.522.033z"/>
        </svg>
      </div>
    ),
    color: "border-gray-200 hover:border-gray-300",
    bg: "bg-gray-50",
  },
  {
    name: "TypeScript",
    description: "Código mais seguro, confiável e escalável.",
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10 flex-shrink-0">
        <rect width="40" height="40" rx="10" fill="#3178C6"/>
        <text x="20" y="26" textAnchor="middle" fill="white" fontSize="14" fontWeight="900" fontFamily="monospace" letterSpacing="-0.5">TS</text>
      </svg>
    ),
    color: "border-gray-200 hover:border-gray-300",
    bg: "bg-gray-50",
  },
  {
    name: "JavaScript",
    description: "A linguagem que move a web moderna.",
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10 flex-shrink-0">
        <rect width="40" height="40" rx="10" fill="#F7DF1E"/>
        <text x="20" y="26" textAnchor="middle" fill="#000" fontSize="14" fontWeight="900" fontFamily="monospace" letterSpacing="-1">JS</text>
      </svg>
    ),
    color: "border-gray-200 hover:border-gray-300",
    bg: "bg-gray-50",
  },
  {
    name: "Tailwind CSS",
    description: "Design moderno, consistente e responsivo.",
    icon: (
      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{background:"#0ea5e9"}}>
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="white">
          <path d="M12 6C9.33 6 7.67 7.33 7 10c1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C13.37 10.8 14.38 12 16.5 12c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.13 7.2 14.12 6 12 6zm-4.5 6C4.83 12 3.17 13.33 2.5 16c1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C8.87 16.8 9.88 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.63 13.2 9.62 12 7.5 12z"/>
        </svg>
      </div>
    ),
    color: "border-gray-200 hover:border-gray-300",
    bg: "bg-gray-50",
  },
  {
    name: "Vercel",
    description: "Hospedagem rápida, global e otimizada.",
    icon: (
      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{background:"#000"}}>
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="white">
          <path d="M24 22.525H0l12-21.05 12 21.05z"/>
        </svg>
      </div>
    ),
    color: "border-gray-200 hover:border-gray-300",
    bg: "bg-gray-50",
  },
  {
    name: "Bootstrap",
    description: "Componentes responsivos prontos para produção.",
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10 flex-shrink-0">
        <rect width="40" height="40" rx="10" fill="#7952B3"/>
        <text x="20" y="27" textAnchor="middle" fill="white" fontSize="20" fontWeight="900" fontFamily="serif" fontStyle="italic">B</text>
      </svg>
    ),
    color: "border-gray-200 hover:border-gray-300",
    bg: "bg-gray-50",
  },
  {
    name: "SEO",
    description: "Visibilidade real no Google desde o primeiro dia.",
    icon: (
      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{background:"#2563eb"}}>
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.35-4.35"/>
        </svg>
      </div>
    ),
    color: "border-gray-200 hover:border-gray-300",
    bg: "bg-gray-50",
  },
];

export default function Technologies() {
  return (
    <section
      className="section-padding bg-white"
      aria-label="Tecnologias que utilizamos"
    >
      <div className="container-custom">
        <AnimatedSection className="text-center mb-16">
          <span className="section-label">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            Stack tecnológico
          </span>
          <h2 className="section-title text-3xl lg:text-4xl xl:text-5xl text-dark mb-4 text-balance">
            Tecnologias modernas para{" "}
            <span className="gradient-text">resultados reais</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Utilizamos ferramentas modernas para criar sites rápidos, escaláveis
            e preparados para o crescimento do seu negócio.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {technologies.map((tech, i) => (
            <AnimatedSection key={tech.name} delay={i * 0.06}>
              <div
                className={`group ${tech.bg} border ${tech.color} rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 cursor-default h-full`}
              >
                <div className="mb-4">{tech.icon}</div>
                <h3 className="font-display font-bold text-dark text-base mb-1.5">
                  {tech.name}
                </h3>
                <p className="text-gray text-sm leading-relaxed">{tech.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
