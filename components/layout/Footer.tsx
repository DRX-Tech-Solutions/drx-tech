import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Instagram, Linkedin, Github, ArrowRight } from "lucide-react";
import { navItems } from "@/lib/data";
import CurrentYear from "@/components/ui/CurrentYear";

export default function Footer() {

  return (
    <footer className="bg-dark text-white">
      {/* Main Footer */}
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 w-fit block" aria-label="DRX Tech Solutions - Home">
              <Image
                src="/logo-drx-dark.svg"
                alt="DRX Tech Solutions"
                width={180}
                height={40}
                priority
              />
            </Link>
            <p className="text-gray-light text-sm leading-relaxed max-w-sm mb-6">
              Desenvolvemos websites profissionais para empresas que querem crescer online.
              Design moderno, performance e foco em resultados reais.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Instagram, href: "https://www.instagram.com/drxtechsolutions/", label: "Instagram" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Github, href: "#", label: "GitHub" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-dark-800 hover:bg-primary border border-dark-700 hover:border-primary flex items-center justify-center transition-all duration-200"
                >
                  <Icon className="w-4 h-4 text-gray-light" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-white text-sm mb-4">Navegação</h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-gray-light hover:text-white text-sm transition-colors duration-150 flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white text-sm mb-4">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contato@drxtechsolutions.com.br"
                  className="text-gray-light hover:text-white text-sm transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  contato@drxtech.com.br
                </a>
              </li>
              <li>
                <a
                  href="tel:13213673340"
                  className="text-gray-light hover:text-white text-sm transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  (321) 367-3340
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-light text-sm">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                Orlando, FL — USA
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark-800">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-light text-xs">
            © <CurrentYear /> DRX Tech Solutions. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-light hover:text-white text-xs transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-light hover:text-white text-xs transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
