import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  metadataBase: new URL("https://drxtechsolutions.com.br"),
  title: {
    default: "DRX Tech Solutions | Websites Profissionais para Empresas",
    template: "%s | DRX Tech Solutions",
  },
  description:
    "Desenvolvemos websites profissionais, landing pages e soluções digitais para pequenas e médias empresas que querem crescer online. Design moderno, performance e foco em resultados.",
  keywords: [
    "desenvolvimento de websites",
    "landing pages",
    "sites profissionais",
    "hospedagem",
    "manutenção de sites",
    "soluções digitais",
    "agência digital",
    "sites para empresas",
    "DRX Tech Solutions",
  ],
  authors: [{ name: "DRX Tech Solutions" }],
  creator: "DRX Tech Solutions",
  publisher: "DRX Tech Solutions",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://drxtechsolutions.com.br",
    siteName: "DRX Tech Solutions",
    title: "DRX Tech Solutions | Websites Profissionais para Empresas",
    description:
      "Desenvolvemos websites profissionais, landing pages e soluções digitais para empresas que querem crescer online.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DRX Tech Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DRX Tech Solutions | Websites Profissionais para Empresas",
    description:
      "Desenvolvemos websites profissionais, landing pages e soluções digitais para empresas que querem crescer online.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#2563EB",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="font-sans antialiased bg-white text-dark" suppressHydrationWarning>{children}</body>
    </html>
  );
}
