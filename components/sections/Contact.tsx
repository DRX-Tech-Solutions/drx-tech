"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { cn } from "@/lib/utils";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const initialForm: FormData = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const services = [
  "Desenvolvimento de Website",
  "Landing Page",
  "Hospedagem",
  "Manutenção",
  "Solução Digital Completa",
  "Outro",
];

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Replace with your Formspree endpoint: https://formspree.io/f/YOUR_ID
      // Or use Resend API: https://resend.com
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus("success");
        setForm(initialForm);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass = (name: keyof FormData) =>
    cn(
      "w-full bg-gray-50 border rounded-xl px-4 py-3 text-dark text-sm placeholder-gray transition-all duration-150 outline-none",
      "focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/10",
      "border-gray-200 hover:border-gray-300"
    );

  return (
    <section
      id="contato"
      className="section-padding bg-gray-50"
      aria-label="Formulário de contato"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Info */}
          <AnimatedSection direction="left">
            <span className="section-label">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              Entre em contato
            </span>
            <h2 className="section-title text-3xl lg:text-4xl xl:text-5xl text-dark mb-6 text-balance">
              Vamos construir algo{" "}
              <span className="gradient-text">incrível juntos?</span>
            </h2>
            <p className="text-gray leading-relaxed mb-10">
              Preencha o formulário e nossa equipe entrará em contato em até{" "}
              <strong className="text-dark">24 horas úteis</strong> com uma proposta
              personalizada para o seu negócio.
            </p>

            {/* Contact details */}
            <div className="space-y-5 mb-10">
              {[
                {
                  icon: Mail,
                  label: "E-mail",
                  value: "contato@drxtech.com.br",
                  href: "mailto:contato@drxtech.com.br",
                },
                {
                  icon: Phone,
                  label: "Telefone",
                  value: "(321) 367-3340",
                  href: "tel:13213673340",
                },
                {
                  icon: MapPin,
                  label: "Localização",
                  value: "Orlando, FL — USA",
                  href: null,
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-gray font-medium mb-0.5">{item.label}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-dark font-medium text-sm hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-dark font-medium text-sm">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/13213673340?text=Olá! Tenho interesse em desenvolver um website para minha empresa."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chamar no WhatsApp
            </a>
          </AnimatedSection>

          {/* Right: Form */}
          <AnimatedSection direction="right">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-card p-7 lg:p-8">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h3 className="font-display font-bold text-dark text-xl mb-2">
                    Mensagem enviada!
                  </h3>
                  <p className="text-gray text-sm max-w-xs">
                    Nossa equipe entrará em contato em até 24 horas úteis com sua proposta.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-primary font-semibold text-sm hover:underline"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h3 className="font-display font-bold text-dark text-lg mb-6">
                    Solicitar orçamento gratuito
                  </h3>

                  <div className="space-y-4">
                    {/* Row 1 */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-xs font-semibold text-dark mb-1.5">
                          Nome completo *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder="João Silva"
                          value={form.name}
                          onChange={handleChange}
                          className={inputClass("name")}
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-xs font-semibold text-dark mb-1.5">
                          Empresa
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          placeholder="Sua empresa"
                          value={form.company}
                          onChange={handleChange}
                          className={inputClass("company")}
                        />
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-xs font-semibold text-dark mb-1.5">
                          E-mail *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="joao@empresa.com"
                          value={form.email}
                          onChange={handleChange}
                          className={inputClass("email")}
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-xs font-semibold text-dark mb-1.5">
                          Telefone / WhatsApp
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+1 (999) 999-9999"
                          value={form.phone}
                          onChange={handleChange}
                          className={inputClass("phone")}
                        />
                      </div>
                    </div>

                    {/* Service Select */}
                    <div>
                      <label htmlFor="service" className="block text-xs font-semibold text-dark mb-1.5">
                        Serviço de interesse
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className={cn(inputClass("service"), "cursor-pointer")}
                      >
                        <option value="">Selecione um serviço</option>
                        {services.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-xs font-semibold text-dark mb-1.5">
                        Conte-nos sobre seu projeto *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        placeholder="Descreva seu negócio, seus objetivos e o que espera do projeto..."
                        value={form.message}
                        onChange={handleChange}
                        className={cn(inputClass("message"), "resize-none")}
                      />
                    </div>

                    {/* Error message */}
                    {status === "error" && (
                      <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        Ocorreu um erro. Tente novamente ou entre em contato via WhatsApp.
                      </div>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full btn-primary justify-center py-4 text-base disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          Enviar mensagem
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-gray">
                      Ao enviar, você concorda com nossa{" "}
                      <a href="#" className="text-primary hover:underline">
                        Política de Privacidade
                      </a>
                      .
                    </p>
                  </div>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
