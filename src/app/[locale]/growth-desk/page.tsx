import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ArrowRight, ExternalLink } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Container from "@/components/Container";

const tabIcons = ["📊", "⚖️", "📈", "💧", "📉", "📋", "📁", "✅"];
const tabNums = ["01", "02", "03", "04", "05", "06", "07", "08"];

const ratios = [
  { label: "Liquidité générale", value: "1,42×", ok: true, pct: 57, thr: 40, sub: "Actif circulant / Passif circ. — seuil ≥ 1× · En bonne santé" },
  { label: "Taux CP / Actif", value: "16,3%", ok: false, pct: 20, thr: 25, sub: "Capitaux propres / Total actif — seuil ≥ 20% · À surveiller" },
  { label: "Marge nette", value: "6,5%", ok: true, pct: 54, thr: 0, sub: "Résultat net / CA — seuil ≥ 0% · Bénéficiaire" },
  { label: "Délai clients (DSO)", value: "80 jours", ok: false, pct: 66, thr: 50, sub: "Délai recouvrement moyen — seuil ≤ 60 j · Recouvrement à améliorer" },
];

const fiscalCardEmojis = ["📋", "🔍", "⚠️"];
const fiscalCardBgs = ["bg-green-500/20", "bg-red-500/18", "bg-brand-orange/18"];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "growthDesk" });
  return { title: "Growth Desk", description: t("heroDesc") };
}

export default async function GrowthDeskPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "growthDesk" });

  const tabs = t.raw("tabs") as { title: string; desc: string }[];
  const fiscalCards = t.raw("fiscalCards") as { title: string; desc: string }[];
  const exportPoints = t.raw("exportPoints") as { title: string; desc: string }[];

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-brand-ink text-white">
        <Image
          src="/H Growth Desk.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-ink/92 via-brand-ink/75 to-brand-ink/50" />
        <Container className="relative grid grid-cols-1 items-end gap-16 py-20 sm:py-24 lg:grid-cols-2 lg:gap-20">
          {/* Left */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-orange/35 bg-brand-orange/15 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
              <span className="text-[10px] font-bold uppercase tracking-[0.5px] text-orange-300">
                {t("heroBadge")}
              </span>
            </div>

            <h1 className="font-serif-display text-4xl font-semibold leading-[1.1] sm:text-5xl">
              {t("heroTitle")}{" "}
              <span className="text-brand-orange">{t("heroHighlight")}</span>
            </h1>

            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-white/60">
              {t("heroDesc")}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://growth-desk.mashiniassocies.com/client"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-sm bg-brand-orange px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-orange-dark"
              >
                {t("clientLogin")}
                <ExternalLink size={14} />
              </a>
              <Link
                href="#contenu"
                className="inline-flex items-center gap-2 rounded-sm border border-white/20 px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:border-white/40 hover:bg-white/5"
              >
                {t("seeContent")}
              </Link>
            </div>
          </div>

          {/* Browser mockup — SYSCOHADA demo data stays in French */}
          <div className="hidden overflow-hidden rounded-t-lg border border-white/10 bg-white/5 lg:block">
            <div className="flex items-center gap-1.5 border-b border-white/[0.07] bg-white/[0.07] px-4 py-2.5">
              <span className="h-2 w-2 rounded-full bg-red-400" />
              <span className="h-2 w-2 rounded-full bg-yellow-400" />
              <span className="h-2 w-2 rounded-full bg-green-400" />
              <span className="ml-2 flex-1 rounded bg-white/[0.06] px-3 py-1 text-[8px] text-white/30">
                Growth DESK – Votre Entreprise – Exercice 2026 · CONFIDENTIEL
              </span>
            </div>
            <div className="flex overflow-x-hidden border-b border-white/[0.06] bg-white/[0.04]">
              {["📊 Vue d'ensemble", "⚖ Bilan", "📈 Résultat", "💧 Tréso.", "📉 Ratios", "📁 Fiscal", "✅ Conformité"].map((tb, i) => (
                <div
                  key={tb}
                  className={`shrink-0 border-b-2 px-3 py-2 text-[8px] font-medium whitespace-nowrap ${
                    i === 1
                      ? "border-brand-orange text-brand-orange"
                      : "border-transparent text-white/35"
                  }`}
                >
                  {tb}
                </div>
              ))}
            </div>
            <div className="p-3.5">
              <div className="mb-2.5 grid grid-cols-4 gap-1.5">
                {[
                  { l: "Chiffre d'affaires", v: "284,5 M", g: false },
                  { l: "Résultat net", v: "+18,4 M", g: true },
                  { l: "Total Actif", v: "295,8 M", g: false },
                  { l: "Bilan", v: "✓ Équilibré", g: true },
                ].map((k) => (
                  <div key={k.l} className="rounded bg-white/[0.06] px-2 py-1.5">
                    <div className="text-[7px] text-white/30">{k.l}</div>
                    <div className={`text-[12px] font-bold ${k.g ? "text-green-400" : "text-white"}`}>{k.v}</div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                {[
                  {
                    title: "ACTIF", total: "295 760",
                    rows: [
                      ["Actif immobilisé net", "64 797", false],
                      ["Dépréciations stocks (−)", "−14 200", true],
                      ["Créances nettes", "153 663", false],
                      ["Dépréciations créances (−)", "−31 677", true],
                      ["Trésorerie active", "24 100", false],
                    ],
                  },
                  {
                    title: "PASSIF", total: "295 760",
                    rows: [
                      ["Capitaux propres", "180 840", false],
                      ["Résultat exercice", "18 400", false],
                      ["Dettes long terme", "61 317", false],
                      ["Passif circulant", "26 985", false],
                      ["Trésorerie passive", "8 218", false],
                    ],
                  },
                ].map((col) => (
                  <div key={col.title} className="overflow-hidden rounded bg-white/[0.04]">
                    <div className="flex justify-between bg-white/[0.07] px-2.5 py-1.5">
                      <span className="text-[7px] font-bold text-white/50">{col.title}</span>
                      <span className="text-[7px] font-bold text-brand-orange">{col.total}</span>
                    </div>
                    {col.rows.map(([label, val, neg]) => (
                      <div key={String(label)} className="flex justify-between border-b border-white/[0.03] px-2.5 py-[3px]">
                        <span className="text-[7px] text-white/45">{String(label)}</span>
                        <span className={`text-[7px] font-medium ${neg ? "text-red-400" : "text-white"}`}>{String(val)}</span>
                      </div>
                    ))}
                    <div className="flex justify-between bg-brand-orange/20 px-2.5 py-1.5">
                      <span className="text-[8px] font-bold text-white">TOTAL {col.title}</span>
                      <span className="text-[8px] font-bold text-white">{col.total}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── STATS BAND ── */}
      <section className="bg-[#1e2b4a] text-white">
        <Container>
          <div className="grid grid-cols-2 divide-x divide-white/[0.08] sm:grid-cols-4">
            {[
              { n: "8", sup: "+", l: t("stat1") },
              { n: "100", sup: "%", l: t("stat2") },
              { n: "N/N", sup: "-1", l: t("stat3") },
              { n: "∞", sup: "", l: t("stat4") },
            ].map((s) => (
              <div key={s.l} className="py-6 text-center">
                <div className="font-serif-display text-3xl font-semibold">
                  {s.n}
                  <span className="text-brand-orange">{s.sup}</span>
                </div>
                <div className="mt-1 text-[11px] text-white/40">{s.l}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 8 ONGLETS ── */}
      <section className="bg-[#f8fafc] py-20 sm:py-24" id="contenu">
        <Container>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">
            {t("tabsEyebrow")}
          </p>
          <h2 className="mt-3 font-serif-display text-3xl font-semibold text-brand-ink sm:text-[2.1rem]">
            {t("tabsTitle")}
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-brand-ink-light sm:text-base">
            {t("tabsDesc")}
          </p>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {tabs.map((tab, i) => (
              <div
                key={tab.title}
                className="group rounded-sm border border-black/10 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-orange/40 hover:shadow-sm"
              >
                <div className="text-2xl">{tabIcons[i]}</div>
                <div className="mt-3 text-[9px] font-bold uppercase tracking-[0.5px] text-brand-orange">
                  {t("tabPrefix")} {tabNums[i]}
                </div>
                <h3 className="mt-1.5 font-serif-display text-[15px] font-semibold text-brand-ink">
                  {tab.title}
                </h3>
                <p className="mt-2 text-[12px] leading-relaxed text-brand-ink-light">
                  {tab.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── DRILL-DOWN ── */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">
                {t("drillEyebrow")}
              </p>
              <h2 className="mt-3 font-serif-display text-3xl font-semibold text-brand-ink sm:text-[2.1rem]">
                {t("drillTitle")}
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-brand-ink-light sm:text-base">
                {t("drillDesc")}
              </p>
              <div className="mt-8 flex flex-col gap-4">
                {[t("drillStep1"), t("drillStep2"), t("drillStep3")].map((step, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-orange text-[11px] font-bold text-white">
                      {i + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-brand-ink-light">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Drill-down mock — SYSCOHADA demo data stays in French */}
            <div className="overflow-hidden rounded-sm bg-brand-ink text-white">
              <div className="flex justify-between bg-white/[0.08] px-4 py-2 text-[8px] font-bold uppercase tracking-[0.3px] text-white/50">
                <span>Actif circulant — Créances</span>
                <span className="text-brand-orange">153 663</span>
              </div>
              <div className="border-b border-white/[0.04] bg-brand-orange/10 px-4 py-1.5 text-[8px] font-bold uppercase tracking-[0.3px] text-brand-orange">
                Actif circulant — Créances
              </div>
              {[
                { label: "▶ Fournisseurs débiteurs", val: "2 184", indent: false, highlight: false, neg: false },
                { label: "▼ Clients", val: "185 340", indent: false, highlight: true, neg: false },
                { label: "411100 — Clients ordinaires", val: "102 450", indent: true, highlight: false, neg: false },
                { label: "▼ 411200 — Sté Minière SARL", val: "82 890", indent: true, highlight: true, neg: false },
              ].map((r) => (
                <div
                  key={r.label}
                  className={`flex justify-between border-b border-white/[0.04] px-4 py-1.5 text-[8px] ${
                    r.highlight ? "bg-brand-orange/[0.07]" : ""
                  } ${r.indent ? "pl-8 text-white/45" : "text-white/60"}`}
                >
                  <span className={r.highlight ? "text-brand-orange" : ""}>{r.label}</span>
                  <span className="font-medium text-white">{r.val}</span>
                </div>
              ))}
              <div className="border-b border-white/[0.02] bg-white/[0.02] px-12 py-1 text-[7px] text-white/28 flex justify-between">
                <span>01/03/26 — Fact. 2026-042</span><span className="text-white/55">82 890</span>
              </div>
              <div className="border-b border-white/[0.04] pl-8 pr-4 py-1.5 text-[8px] text-white/45 flex justify-between">
                <span>416200 — Créances douteuses</span><span className="text-white font-medium">31 677</span>
              </div>
              <div className="border-b border-white/[0.04] px-4 py-1.5 text-[8px] text-red-400 flex justify-between">
                <span>▶ Dépréciations créances (−)</span><span>−31 677</span>
              </div>
              <div className="bg-white/[0.06] px-4 py-2 text-[9px] font-bold text-white flex justify-between">
                <span>Total créances (net)</span><span>153 663</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── FISCAL ── */}
      <section className="bg-brand-ink py-20 text-white sm:py-24">
        <Container>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-300">
            {t("fiscalEyebrow")}
          </p>
          <h2 className="mt-3 font-serif-display text-3xl font-semibold sm:text-[2.1rem]">
            {t("fiscalTitle")}
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/50">
            {t("fiscalDesc")}
          </p>

          <div className="mt-12 grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
            {/* Feature cards */}
            <div className="space-y-4">
              {fiscalCards.map((c, i) => (
                <div key={c.title} className="flex gap-4 rounded-sm border border-white/10 bg-white/[0.07] p-5">
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-xl ${fiscalCardBgs[i]}`}>
                    {fiscalCardEmojis[i]}
                  </div>
                  <div>
                    <h3 className="font-serif-display text-[15px] font-semibold text-white">{c.title}</h3>
                    <p className="mt-1 text-[11px] leading-relaxed text-white/40">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Fiscal mock — SYSCOHADA demo data stays in French */}
            <div className="overflow-hidden rounded-sm border border-white/[0.08] bg-white/[0.05]">
              <div className="bg-white/[0.07] px-4 py-2 text-[8px] font-bold uppercase tracking-[0.3px] text-white/40">
                Contrôles fiscaux
              </div>
              <div className="flex items-center gap-3 border-b border-white/[0.04] px-4 py-2.5 text-[9px]">
                <span className="font-mono text-[8px] text-white/25 min-w-[36px]">C-001</span>
                <span className="flex-1 font-semibold text-white/65">DGI — Contrôle TVA 2024</span>
                <span className="rounded bg-red-500/20 px-2 py-0.5 text-[8px] font-bold text-red-400">En cours</span>
              </div>
              <div className="flex flex-wrap gap-1.5 border-b border-white/[0.04] px-4 py-2">
                <span className="rounded bg-white/[0.08] px-2 py-0.5 text-[8px] text-white/45">✓ Note d&apos;observation</span>
                <span className="rounded bg-brand-orange/22 px-2 py-0.5 text-[8px] text-orange-300">⚠ Avis redressement&nbsp;: 8 400 000</span>
                <span className="rounded bg-red-500/20 px-2 py-0.5 text-[8px] text-red-300">📬 AMR reçu</span>
                <span className="rounded bg-green-500/20 px-2 py-0.5 text-[8px] text-green-300">💳 Paiement enregistré</span>
              </div>
              <div className="flex items-center gap-3 border-b border-white/[0.04] px-4 py-2.5 text-[9px]">
                <span className="font-mono text-[8px] text-white/25 min-w-[36px]">C-002</span>
                <span className="flex-1 font-semibold text-white/65">CNSS — Cotisations</span>
                <span className="rounded bg-red-500/20 px-2 py-0.5 text-[8px] font-bold text-red-400">Urgent</span>
              </div>
              <div className="flex flex-wrap gap-1.5 border-b border-white/[0.04] px-4 py-2">
                <span className="rounded bg-brand-orange/22 px-2 py-0.5 text-[8px] text-orange-300">⚠ Avis de redressement</span>
                <span className="rounded bg-purple-500/20 px-2 py-0.5 text-[8px] text-purple-300">⚖ Contestation en cours</span>
              </div>
              <div className="bg-white/[0.07] px-4 py-2 text-[8px] font-bold uppercase tracking-[0.3px] text-white/40 mt-1">
                Prochaines déclarations
              </div>
              {[
                { id: "D-018", label: "TVA Mensuelle — Mars 2026", badge: "✓ Traité", ok: true },
                { id: "D-019", label: "CNSS — Cotisations T1 2026", badge: "7 jours", urgent: true },
                { id: "D-020", label: "IS — Acompte provisionnel", badge: "En attente", pending: true },
              ].map((d) => (
                <div key={d.id} className="flex items-center gap-3 border-b border-white/[0.04] px-4 py-2 text-[9px]">
                  <span className="font-mono text-[8px] text-white/25 min-w-[36px]">{d.id}</span>
                  <span className="flex-1 text-white/65">{d.label}</span>
                  <span className={`rounded px-2 py-0.5 text-[8px] font-bold ${
                    d.ok ? "bg-green-500/20 text-green-300" :
                    d.urgent ? "bg-red-500/20 text-red-400" :
                    "bg-white/[0.08] text-white/40"
                  }`}>{d.badge}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── CONFORMITÉ ── */}
      <section className="bg-[#f8fafc] py-20 sm:py-24">
        <Container>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">
            {t("conformEyebrow")}
          </p>
          <h2 className="mt-3 font-serif-display text-3xl font-semibold text-brand-ink sm:text-[2.1rem]">
            {t("conformTitle")}
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-brand-ink-light sm:text-base">
            {t("conformDesc")}
          </p>

          {/* Conformité mock — SYSCOHADA demo data stays in French */}
          <div className="mt-10 overflow-hidden rounded-sm border border-black/10 bg-white">
            <div className="flex items-center gap-6 bg-brand-ink px-6 py-5 text-white">
              <div className="font-serif-display text-4xl font-semibold text-green-400">78%</div>
              <div className="flex-1">
                <div className="text-sm font-semibold text-white">14 obligations conformes sur 18 applicables</div>
                <div className="mt-2 h-1.5 rounded-full bg-white/15">
                  <div className="h-full w-[78%] rounded-full bg-green-400" />
                </div>
              </div>
              <div className="text-right text-[10px] text-white/40">18 obligations<br />au total · 2 non applicables</div>
            </div>
            <div className="border-l-4 border-brand-orange bg-[#FFF3EE] px-5 py-2 text-[9px] font-bold uppercase tracking-[0.5px] text-brand-orange">
              Direction Générale des Impôts (DGI)
            </div>
            {[
              { label: "Déclaration TVA mensuelle", period: "Mensuel", status: "ok", date: "31/03/2026", proof: true },
              { label: "Dépôt états financiers — Ministère Économie", period: "Annuel", status: "ko", date: null, proof: false },
              { label: "Patente professionnelle", period: "Annuel", status: "ok", date: "15/01/2026", proof: true },
            ].map((r) => (
              <div key={r.label} className="flex flex-wrap items-center gap-3 border-b border-black/[0.06] px-5 py-3 text-[12px]">
                <span className="flex-1 font-semibold text-brand-ink">{r.label}</span>
                <span className="rounded bg-[#FFF3EE] px-2 py-0.5 text-[8px] font-bold text-brand-orange">{r.period}</span>
                <span className={`rounded px-2.5 py-0.5 text-[9px] font-bold ${r.status === "ok" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-600"}`}>
                  {r.status === "ok" ? "✓ Conforme" : "✗ En attente"}
                </span>
                {r.date && <span className="text-[10px] text-brand-ink-light">{r.date}</span>}
                {r.proof && <span className="text-[10px] text-brand-orange">📄 Preuve</span>}
              </div>
            ))}
            <div className="border-l-4 border-brand-orange bg-[#FFF3EE] px-5 py-2 text-[9px] font-bold uppercase tracking-[0.5px] text-brand-orange">
              CNSS — Sécurité sociale
            </div>
            {[
              { label: "Cotisations sociales trimestrielles", period: "Trimestriel", status: "ok", date: "31/03/2026", proof: true },
              { label: "Déclaration annuelle de salaires", period: "Annuel", status: "na", date: null, proof: false },
            ].map((r) => (
              <div key={r.label} className="flex flex-wrap items-center gap-3 border-b border-black/[0.06] px-5 py-3 text-[12px]">
                <span className="flex-1 font-semibold text-brand-ink">{r.label}</span>
                <span className="rounded bg-[#FFF3EE] px-2 py-0.5 text-[8px] font-bold text-brand-orange">{r.period}</span>
                <span className={`rounded px-2.5 py-0.5 text-[9px] font-bold ${r.status === "ok" ? "bg-green-50 text-green-700" : "bg-[#f8fafc] text-brand-ink-light"}`}>
                  {r.status === "ok" ? "✓ Conforme" : "N/A"}
                </span>
                {r.date && <span className="text-[10px] text-brand-ink-light">{r.date}</span>}
                {r.proof && <span className="text-[10px] text-brand-orange">💳 Paiement + 📄</span>}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── RATIOS ── */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">
                {t("ratiosEyebrow")}
              </p>
              <h2 className="mt-3 font-serif-display text-3xl font-semibold text-brand-ink sm:text-[2.1rem]">
                {t("ratiosTitle")}
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-brand-ink-light sm:text-base">
                {t("ratiosDesc")}
              </p>
            </div>

            {/* Ratios mock — SYSCOHADA labels stay in French */}
            <div className="space-y-4">
              {ratios.map((r) => (
                <div key={r.label} className="rounded-sm bg-[#f8fafc] p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] font-semibold text-brand-ink">{r.label}</span>
                    <span className={`text-lg font-extrabold ${r.ok ? "text-green-600" : "text-amber-600"}`}>
                      {r.value}
                    </span>
                  </div>
                  <div className="relative mt-2.5 h-1.5 rounded-full bg-black/[0.08]">
                    <div
                      className={`h-full rounded-full ${r.ok ? "bg-green-500" : "bg-amber-500"}`}
                      style={{ width: `${r.pct}%` }}
                    />
                    {r.thr > 0 && (
                      <div
                        className="absolute -top-0.5 h-2.5 w-0.5 rounded-full bg-brand-ink"
                        style={{ left: `${r.thr}%` }}
                      />
                    )}
                  </div>
                  <div className="mt-1.5 text-[10px] text-brand-ink-light">{r.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── EXPORT ── */}
      <section className="bg-[#FFF3EE] py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">
                {t("exportEyebrow")}
              </p>
              <h2 className="mt-3 font-serif-display text-3xl font-semibold text-brand-ink sm:text-[2.1rem]">
                {t("exportTitle")}
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-brand-ink-light sm:text-base">
                {t("exportDesc")}
              </p>
              <div className="mt-8 space-y-5">
                {exportPoints.map((p) => (
                  <div key={p.title} className="flex items-start gap-4">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-orange text-[11px] font-bold text-white">
                      ✓
                    </span>
                    <div>
                      <h4 className="text-[13px] font-bold text-brand-ink">{p.title}</h4>
                      <p className="mt-0.5 text-[12px] text-brand-ink-light">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual — SYSCOHADA demo labels stay in French */}
            <div className="rounded-sm bg-brand-ink p-6 text-white">
              <div className="mb-5 flex items-center gap-4">
                <div>
                  <div className="font-serif-display text-[15px] font-semibold tracking-wide">MASHINI</div>
                  <div className="text-[9px] text-white/40 tracking-[0.3px]">&amp; ASSOCIÉS</div>
                </div>
                <div className="ml-2">
                  <div className="font-serif-display text-[14px] font-semibold text-white">
                    Votre rapport Growth Desk
                  </div>
                  <div className="text-[9px] text-white/40">Exercice 2026 · CONFIDENTIEL</div>
                </div>
              </div>
              <div className="mb-3 flex flex-wrap gap-1.5">
                {["📊 Vue d'ensemble", "⚖ Bilan", "📈 Résultat", "💧 Tréso.", "📉 Ratios", "📋 B. Âgées", "📁 Fiscal", "✅ Conformité"].map((tb, i) => (
                  <span
                    key={tb}
                    className={`rounded-full px-2.5 py-0.5 text-[8px] font-semibold ${
                      i === 0
                        ? "bg-brand-orange text-white"
                        : "bg-white/10 text-white/45"
                    }`}
                  >
                    {tb}
                  </span>
                ))}
              </div>
              <div className="rounded-sm bg-white/[0.06] p-4">
                <div className="grid grid-cols-2 gap-2 mb-3">
                  {[
                    { l: "Chiffre d'affaires", v: "284,5 M", g: false },
                    { l: "Résultat net", v: "+18,4 M", g: true },
                    { l: "EBE", v: "42,1 M", g: false },
                    { l: "Trésorerie nette", v: "−8,2 M", r: true },
                  ].map((k) => (
                    <div key={k.l} className="rounded bg-white/[0.07] px-3 py-2">
                      <div className="text-[7px] text-white/30">{k.l}</div>
                      <div className={`text-[13px] font-bold ${"r" in k && k.r ? "text-red-400" : k.g ? "text-green-400" : "text-white"}`}>{k.v}</div>
                    </div>
                  ))}
                </div>
                <div className="rounded bg-white/[0.07] p-3">
                  <div className="mb-1.5 text-[7px] font-bold text-white/35">Conformité administrative</div>
                  <div className="flex items-center gap-3">
                    <span className="font-serif-display text-[22px] font-semibold text-green-400">78%</span>
                    <div className="flex-1 h-1.5 rounded-full bg-white/12">
                      <div className="h-full w-[78%] rounded-full bg-green-400" />
                    </div>
                    <span className="text-[9px] text-white/30">14/18</span>
                  </div>
                </div>
                <div className="mt-3 text-center text-[8px] text-white/20">
                  Établi par Cabinet MASHINI &amp; Associés · Growth Desk Portail
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className="bg-brand-ink py-20 text-center text-white sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl">
            <div className="mx-auto mb-8 flex w-fit items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-orange">
                <span className="font-serif-display text-3xl font-bold text-white">M</span>
              </div>
              <div className="text-left">
                <div className="font-serif-display text-2xl font-semibold tracking-wide">MASHINI</div>
                <div className="text-[11px] text-white/45 tracking-[0.5px]">&amp; ASSOCIÉS</div>
              </div>
            </div>

            <h2 className="font-serif-display text-3xl font-semibold sm:text-4xl">
              {t("ctaTitle")}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-white/50">
              {t("ctaDesc")}
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="https://growth-desk.mashiniassocies.com/client"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-sm bg-brand-orange px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-orange-dark"
              >
                {t("ctaLogin")}
                <ExternalLink size={15} />
              </a>
              <a
                href="mailto:joel.mashini@mashiniassocies.com?subject=Rapport Growth Desk"
                className="inline-flex items-center gap-2 rounded-sm border border-white/20 px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:border-white/40 hover:bg-white/5"
              >
                {t("ctaContact")}
                <ArrowRight size={15} />
              </a>
            </div>

            <p className="mt-8 text-[11px] text-white/20">
              {t("ctaFooter")}
            </p>
            <p className="mt-2 text-[11px] text-white/30">
              <a href="mailto:joel.mashini@mashiniassocies.com" className="hover:text-white/60">
                joel.mashini@mashiniassocies.com
              </a>
              {" · "}{t("ctaCity")}
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
