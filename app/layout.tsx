import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "23 Cursos por R$ 197 — Oferta de Aniversário | Doug Academy",
  description:
    "Hoje é aniversário do Doug. Por isso, toda a plataforma Doug Academy — 23 cursos de 3D, IA, freela e muito mais — por R$ 197. Só até meia-noite.",
  openGraph: {
    title: "23 Cursos por R$ 197 — Oferta de Aniversário",
    description: "Toda a plataforma Doug Academy por R$ 197. Válido só hoje, 20 de junho.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${geist.variable} h-full`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
