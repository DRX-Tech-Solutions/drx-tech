import type { NavItem, Service, Project, Plan, ProcessStep } from "@/types";

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Processo", href: "#processo" },
  { label: "Contato", href: "#contato" },
];

export const services: Service[] = [
  {
    id: "websites",
    icon: "Monitor",
    title: "Desenvolvimento de Websites",
    description:
      "Sites institucionais modernos, rápidos e otimizados para SEO. Criamos experiências digitais que convertem visitantes em clientes.",
    features: ["Design responsivo", "SEO otimizado", "Alta performance", "CMS integrado"],
    highlight: false,
  },
  {
    id: "landing-pages",
    icon: "Rocket",
    title: "Landing Pages",
    description:
      "Páginas de alta conversão desenvolvidas com foco em captura de leads e vendas. Cada elemento pensado para maximizar resultados.",
    features: ["A/B Testing ready", "Formulários integrados", "Analytics", "CRO otimizado"],
    highlight: true,
  },
  {
    id: "hospedagem",
    icon: "Server",
    title: "Hospedagem",
    description:
      "Infraestrutura confiável com uptime garantido, SSL gratuito, backups automáticos e suporte técnico especializado.",
    features: ["99.9% uptime", "SSL gratuito", "Backups diários", "CDN global"],
    highlight: false,
  },
  {
    id: "manutencao",
    icon: "Wrench",
    title: "Manutenção",
    description:
      "Mantenha seu site sempre atualizado, seguro e funcionando perfeitamente. Monitoramento contínuo e atualizações regulares.",
    features: ["Monitoramento 24/7", "Updates regulares", "Segurança", "Relatórios mensais"],
    highlight: false,
  },
  {
    id: "solucoes-digitais",
    icon: "Layers",
    title: "Soluções Digitais",
    description:
      "Estratégias e ferramentas digitais personalizadas para o crescimento do seu negócio. Integração, automação e presença online.",
    features: ["Estratégia digital", "Integrações", "E-commerce", "Consultoria"],
    highlight: false,
  },
  {
    id: "automacoes-ia",
    icon: "Cpu",
    title: "Automações com IA",
    description:
      "Em breve: soluções inteligentes com Inteligência Artificial para automatizar processos e elevar a eficiência do seu negócio.",
    features: ["Chatbots IA", "Automação de processos", "Análise preditiva", "Em breve"],
    highlight: false,
  },
];

export const projects: Project[] = [
  {
    id: "drx-cleaning",
    name: "DRX Cleaning",
    description:
      "Website institucional para empresa de limpeza profissional. Design limpo com foco em transmitir confiança e capturar orçamentos online.",
    category: "Website Institucional",
    tags: ["Next.js", "Tailwind", "SEO"],
    image: "/drx-cleaning.webp",
    url: "#",
  },
  {
    id: "protagonize",
    name: "Protagonize",
    description:
      "Plataforma digital para mentor de desenvolvimento pessoal e profissional. Landing page de alta conversão com captação de leads.",
    category: "Landing Page",
    tags: ["React", "Framer Motion", "CRO"],
    image: "/protagonize.webp",
    url: "#",
  },
  {
    id: "dx-marcenaria",
    name: "DX Marcenaria",
    description:
      "Site premium para marcenaria especializada em móveis planejados. Portfólio visual com galeria de projetos e formulário de orçamento.",
    category: "Portfólio & Orçamento",
    tags: ["Next.js", "Gallery", "WhatsApp"],
    image: "/dx-marcenaria.webp",
    url: "#",
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Descoberta",
    description:
      "Entendemos profundamente seu negócio, público-alvo, objetivos e concorrência para criar uma estratégia digital precisa.",
    icon: "Search",
  },
  {
    step: 2,
    title: "Planejamento",
    description:
      "Criamos wireframes, definimos a arquitetura da informação e planejamos cada detalhe do projeto antes de desenvolver.",
    icon: "FileText",
  },
  {
    step: 3,
    title: "Desenvolvimento",
    description:
      "Codificamos com as melhores práticas: código limpo, performance máxima, responsividade e SEO técnico desde a base.",
    icon: "Code2",
  },
  {
    step: 4,
    title: "Lançamento",
    description:
      "Testes rigorosos, deploy otimizado e acompanhamento pós-lançamento. Seu site no ar com suporte garantido.",
    icon: "Zap",
  },
];

export const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    subtitle: "Landing Page",
    price: "A partir de",
    description: "Ideal para validar seu negócio online com uma página de alta conversão.",
    features: [
      "Landing Page completa",
      "Design responsivo",
      "Formulário de contato",
      "SEO básico",
      "SSL gratuito",
      "30 dias de suporte",
      "Entrega em 7 dias",
    ],
    highlight: false,
    cta: "Solicitar orçamento",
  },
  {
    id: "business",
    name: "Business",
    subtitle: "Website Empresarial",
    price: "A partir de",
    description: "Solução completa para empresas que buscam autoridade e presença digital forte.",
    features: [
      "Site completo até 8 páginas",
      "Design premium exclusivo",
      "SEO avançado",
      "Blog/Notícias",
      "Painel de administração",
      "Hospedagem 1 ano inclusa",
      "Relatórios mensais",
      "90 dias de suporte",
      "Entrega em 15 dias",
    ],
    highlight: true,
    cta: "Quero este plano",
  },
  {
    id: "premium",
    name: "Premium",
    subtitle: "Solução Completa",
    price: "Sob consulta",
    description: "Para negócios que exigem o máximo em tecnologia, design e estratégia digital.",
    features: [
      "Projeto personalizado",
      "E-commerce ou aplicação web",
      "Integrações avançadas",
      "Automações digitais",
      "Estratégia de conteúdo",
      "Analytics avançado",
      "Hospedagem premium",
      "Suporte prioritário",
      "Prazo sob medida",
    ],
    highlight: false,
    cta: "Falar com especialista",
  },
];

export const stats = [
  { value: "50+", label: "Projetos entregues", description: "Websites e landing pages" },
  { value: "98%", label: "Clientes satisfeitos", description: "Taxa de aprovação" },
  { value: "3x", label: "Mais leads", description: "Média dos nossos clientes" },
  { value: "<2s", label: "Tempo de carga", description: "Performance garantida" },
];

export const differentials = [
  {
    icon: "Users",
    title: "Atendimento Personalizado",
    description:
      "Cada projeto é único. Trabalhamos de perto com você para entender suas necessidades e entregar exatamente o que seu negócio precisa.",
  },
  {
    icon: "Palette",
    title: "Design Profissional",
    description:
      "Criamos interfaces visualmente impactantes que representam sua marca com autoridade e transmitem confiança ao visitante.",
  },
  {
    icon: "TrendingUp",
    title: "Foco em Resultados",
    description:
      "Desenvolvemos com mentalidade de conversão. Cada elemento é pensado para transformar visitantes em clientes reais.",
  },
  {
    icon: "HeadphonesIcon",
    title: "Suporte Contínuo",
    description:
      "Não abandonamos você após o lançamento. Estamos disponíveis para manutenções, dúvidas e evoluções do projeto.",
  },
];
