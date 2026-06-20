"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Cake,
  CheckCircle2,
  Clock,
  Shield,
} from "lucide-react";

const CHECKOUT_URL = "https://payfast.greenn.com.br/9sfpy3h/offer/AZRXKp?ch_id=140313";
const MIDNIGHT = new Date("2026-06-21T00:00:00-03:00");

function useCountdown(target: Date) {
  const [mounted, setMounted] = useState(false);
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    setMounted(true);
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, target.getTime() - now.getTime());
  return {
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    mounted,
  };
}

function useFadeUp() {
  const reduce = useReducedMotion();
  return {
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 } as { opacity: number; y: number },
    viewport: { once: true, margin: "-80px" as const },
    transition: { duration: reduce ? 0 : 0.6 },
  };
}

const COURSES = [
  { name: "Web.IA", img: "/courses/c00.webp" },
  { name: "nexIA Image", img: "/courses/c01.webp" },
  { name: "Formação 3D PRO", img: "/courses/c02.webp" },
  { name: "Formação IAPRO.BLEND", img: "/courses/c03.webp" },
  { name: "Freela3D PRO", img: "/courses/c04.webp" },
  { name: "PS.Express", img: "/courses/c05.webp" },
  { name: "Gravação Imersão IA PRO", img: "/courses/c06.webp" },
  { name: "Modelos 3D PRO", img: "/courses/c07.webp" },
  { name: "Primeira Venda com IA em 7 Dias", img: "/courses/c08.webp" },
  { name: "MasterClass Prospecção e Precificação", img: "/courses/c09.webp" },
  { name: "Logo Express", img: "/courses/c10.webp" },
  { name: "ADSmaker by nexIA", img: "/courses/c11.webp" },
  { name: "Gravação Workshop IAPRO.BLEND", img: "/courses/c12.webp" },
  { name: "Bastidor Criativo", img: "/courses/c13.webp" },
  { name: "Workshop Imersão 3D+IA com Blender", img: "/courses/c14.webp" },
  { name: "500+ Prompts Ensaio Feminino e Masculino", img: "/courses/c15.webp" },
  { name: "500+ Prompts Produtos Variados", img: "/courses/c16.webp" },
  { name: "Seedance 2.0 — 50 Prompts de Vídeo", img: "/courses/c17.webp" },
  { name: "Gravação Workshop 3D+IA (16/05/26)", img: "/courses/c18.webp" },
  { name: "Nano Banana + Blender 3D", img: "/courses/c19.webp" },
  { name: "nexIA Video Studio + VEO 3.1", img: "/courses/c20.webp" },
  { name: "nexIA Retopology", img: "/courses/c21.webp" },
  { name: "Comece por aqui", img: "/courses/c22.webp" },
  { name: "Packing Skills — IAPRO.BLEND", img: "/courses/c23.webp" },
];

const FAQS = [
  {
    q: "É acesso a todos os 23 cursos de uma vez?",
    a: "Sim. Assim que o pagamento for confirmado você recebe acesso imediato à plataforma Doug Academy com todos os conteúdos disponíveis.",
  },
  {
    q: "Por quanto tempo tenho acesso?",
    a: "Acesso vitalício. Você não paga mais nada — o que entrar na plataforma hoje fica disponível para você para sempre.",
  },
  {
    q: "Posso parcelar?",
    a: "Sim, as condições de parcelamento estão disponíveis no checkout. À vista você garante o menor preço.",
  },
  {
    q: "Tenho garantia?",
    a: "7 dias. Se por qualquer motivo não gostar, devolvo 100% do seu dinheiro. Sem formulário. Sem ligação. Sem perguntas.",
  },
  {
    q: "Sou iniciante. Consigo acompanhar?",
    a: "Sim. A maioria dos cursos foi criada para quem está começando — incluindo Formação 3D PRO e Formação IA PRO, que partem do zero absoluto.",
  },
  {
    q: "Essa promoção volta?",
    a: "Não. Essa oferta existe uma única vez por ano — no meu aniversário. Amanhã o preço volta ao normal e essa página some.",
  },
];

export default function Page() {
  const fade = useFadeUp();
  const countdown = useCountdown(MIDNIGHT);

  return (
    <>
      {/* Barra vermelha de urgência */}
      <div className="fixed top-0 inset-x-0 z-[70] bg-red-600 text-white">
        <a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 px-4 py-2 hover:bg-red-700 transition-colors"
        >
          <span className="text-xs md:text-sm font-bold tracking-wide uppercase">
            🎂 Se você perder isso, você é mais louco que eu
          </span>
          <span
            className="hidden md:flex items-center gap-1 text-xs font-mono font-bold tabular-nums bg-red-800/60 px-2 py-0.5 rounded"
            aria-live="polite"
            suppressHydrationWarning
          >
            {countdown.mounted ? (
              <>
                {String(countdown.hours).padStart(2, "0")}h:
                {String(countdown.minutes).padStart(2, "0")}m:
                <span className="text-yellow-300">{String(countdown.seconds).padStart(2, "0")}s</span>
              </>
            ) : (
              <span className="opacity-0">--h:--m:--s</span>
            )}
          </span>
          <ArrowRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
        </a>
      </div>

      <main>
        {/* Hero */}
        <section className="relative pt-20 pb-24 md:pt-24 md:pb-32 overflow-hidden">
          {/* Imagem de fundo — portrait no mobile, landscape no desktop */}
          <div className="absolute inset-0 md:hidden">
            <Image
              src="/hero-portrait.webp"
              alt=""
              fill
              className="object-cover object-top"
              priority
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 hidden md:block">
            <Image
              src="/hero.webp"
              alt=""
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
          </div>
          {/* Overlay escuro progressivo */}
          <div className="absolute inset-0 bg-linear-to-r from-bg/95 via-bg/80 to-bg/50 md:to-bg/30" />
          <div className="absolute inset-0 bg-linear-to-b from-bg/20 via-transparent to-bg" />
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="birthday-glow absolute inset-0" />

          <div className="relative max-w-5xl mx-auto px-5">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 mb-8"
            >
              <Cake className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
              <span className="text-xs font-semibold text-accent tracking-widest uppercase">
                Loucura de Aniversário&nbsp;·&nbsp;20 de junho
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.02] mb-6 text-balance max-w-2xl"
            >
              Se você perder isso,{" "}
              <span className="text-gradient">você é mais louco que eu.</span>
            </motion.h1>

            {/* Subhead */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-lg md:text-xl text-ink-dim max-w-xl mb-10 leading-relaxed"
            >
              Toda a minha plataforma liberada. 3D, IA, freela, anúncios, prompts — por um preço
              que só existe hoje, dia 20/06/2026. No meu aniversário. Encerra à meia-noite.
            </motion.p>

            {/* CTA + trust */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col items-start gap-4"
            >
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-accent text-bg font-bold text-lg hover:bg-accent-dark transition-colors accent-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                Garantir por R$ 197
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </a>
              <div className="flex flex-wrap items-center gap-4 text-xs text-ink-dimmer">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                  Acesso imediato
                </span>
                <span className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                  Garantia 7 dias
                </span>
                <span className="flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                  23 cursos incluídos
                </span>
              </div>
            </motion.div>

            {/* Countdown */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-bg-card/90 backdrop-blur border border-white/10"
            >
              <Clock className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
              <span className="text-sm text-ink-dim">Oferta encerra em:</span>
              <div
                className="flex gap-1 font-mono font-bold tabular-nums text-sm"
                aria-live="polite"
                suppressHydrationWarning
              >
                {countdown.mounted ? (
                  <>
                    <span className="text-ink">{String(countdown.hours).padStart(2, "0")}h</span>
                    <span className="text-ink-dimmer" aria-hidden="true">:</span>
                    <span className="text-ink">{String(countdown.minutes).padStart(2, "0")}m</span>
                    <span className="text-ink-dimmer" aria-hidden="true">:</span>
                    <span className="text-accent">{String(countdown.seconds).padStart(2, "0")}s</span>
                  </>
                ) : (
                  <span className="opacity-0 text-ink">--h:--m:--s</span>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Courses */}
        <section className="py-20 md:py-28 bg-bg-soft">
          <div className="max-w-6xl mx-auto px-5">
            <motion.div {...fade} className="text-center mb-14">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-balance">
                O que você recebe{" "}
                <span className="text-gradient">hoje</span>
              </h2>
              <p className="text-ink-dim max-w-xl mx-auto">
                Cada um desses cursos vende separado por centenas de reais. Hoje, todos por R$ 197.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {COURSES.map((course, i) => (
                <motion.div
                  key={course.name}
                  {...fade}
                  transition={{ delay: i * 0.03, duration: 0.5 }}
                  className="bg-bg-card border border-white/8 rounded-xl overflow-hidden hover:border-accent/30 transition-colors group"
                >
                  <div className="relative aspect-video">
                    <Image
                      src={course.img}
                      alt={course.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </div>
                  <div className="px-3 py-2.5">
                    <h3 className="font-semibold text-xs text-ink leading-snug">{course.name}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-20 md:py-28">
          <div className="max-w-lg mx-auto px-5">
            <motion.div {...fade} className="text-center mb-10">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-balance">
                Uma oferta. Um preço. Hoje.
              </h2>
              <p className="text-ink-dim text-sm">
                Sem parcelas complicadas. Sem tier. Uma decisão.
              </p>
            </motion.div>

            <motion.div
              {...fade}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="bg-bg-card border-2 border-accent rounded-2xl p-8 md:p-10 accent-glow relative"
            >
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-bg text-xs font-bold uppercase tracking-wider whitespace-nowrap">
                🎂 Loucura de Aniversário
              </div>

              <div className="text-center pt-3">
                <p className="text-ink-dim text-sm mb-3">Acesso a toda a plataforma Doug Academy</p>
                <div className="flex items-end justify-center gap-1 mb-1">
                  <span className="text-2xl font-bold text-ink-dim self-start mt-3">R$</span>
                  <span className="text-8xl font-bold text-accent tabular-nums leading-none">197</span>
                </div>
                <p className="text-xs text-ink-dimmer mb-8">à vista · ou parcele no checkout</p>

                <ul className="text-left space-y-3 mb-8">
                  {[
                    "23 cursos com acesso vitalício",
                    "Novos conteúdos incluídos automaticamente",
                    "Acesso imediato após confirmação do pagamento",
                    "Garantia de 7 dias — 100% do dinheiro de volta",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-ink-dim">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href={CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 rounded-full bg-accent text-bg font-bold text-lg hover:bg-accent-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent mb-5"
                >
                  Quero tudo por R$ 197 →
                </a>

                <div
                  className="flex items-center justify-center gap-2 text-xs text-ink-dimmer"
                  aria-live="polite"
                  suppressHydrationWarning
                >
                  <Clock className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                  <span>Encerra em:</span>
                  {countdown.mounted ? (
                    <span className="font-mono font-semibold text-ink tabular-nums">
                      {String(countdown.hours).padStart(2, "0")}h:{String(countdown.minutes).padStart(2, "0")}m:{String(countdown.seconds).padStart(2, "0")}s
                    </span>
                  ) : (
                    <span className="opacity-0 font-mono text-ink">--:--:--</span>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Guarantee */}
        <section className="py-16 bg-bg-soft">
          <div className="max-w-lg mx-auto px-5 text-center">
            <motion.div {...fade}>
              <Shield className="w-12 h-12 text-accent mx-auto mb-5" aria-hidden="true" />
              <h2 className="text-2xl md:text-3xl font-bold mb-3">7 dias. Sem perguntas.</h2>
              <p className="text-ink-dim leading-relaxed text-sm md:text-base">
                Se você entrar, assistir às aulas e não gostar — me manda uma mensagem e devolvo
                100% do que você pagou.{" "}
                <em>Sem formulário. Sem ligação. Sem perguntas.</em>
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-28">
          <div className="max-w-2xl mx-auto px-5">
            <motion.div {...fade} className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Perguntas frequentes</h2>
            </motion.div>
            <div className="space-y-3">
              {FAQS.map((faq, i) => (
                <motion.details
                  key={i}
                  {...fade}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  className="group bg-bg-card border border-white/8 rounded-xl overflow-hidden hover:border-accent/30 transition-colors"
                >
                  <summary className="cursor-pointer px-6 py-5 flex items-center justify-between gap-4 list-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset">
                    <span className="font-semibold text-ink text-left text-sm">{faq.q}</span>
                    <span
                      className="text-accent text-2xl group-open:rotate-45 transition-transform shrink-0"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-5 text-ink-dim text-sm leading-relaxed">{faq.a}</div>
                </motion.details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 md:py-28 bg-bg-soft">
          <div className="max-w-2xl mx-auto px-5 text-center">
            <motion.div {...fade}>
              <p className="text-5xl mb-6" aria-hidden="true">🎂</p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-balance">
                Hoje até meia-noite.
                <br />
                <span className="text-gradient">Depois não tem mais.</span>
              </h2>
              <p className="text-ink-dim mb-8 leading-relaxed">
                Essa oferta existe por um motivo só: é meu aniversário. Amanhã o preço volta ao
                normal e essa página some. Se você chegou até aqui, você já sabe o que quer fazer.
              </p>
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-accent text-bg font-bold text-lg hover:bg-accent-dark transition-colors accent-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent mb-4"
              >
                Quero tudo por R$ 197
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </a>
              <p className="text-xs text-ink-dimmer">
                Pagamento seguro · Acesso imediato · Garantia 7 dias sem perguntas
              </p>
              <p className="mt-8 text-sm text-ink-dim border-t border-white/5 pt-6">
                <strong className="text-ink">P.S.</strong> — Se você está pensando em "vejo depois":{" "}
                <em>depois não existe.</em> Às 00:00 essa página vira abóbora.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5">
        <p className="text-center text-xs text-ink-dimmer">
          © 2026 Doug Academy. Todos os direitos reservados.
        </p>
      </footer>

    </>
  );
}
