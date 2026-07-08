"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { ArrowLeft, CheckCircle, AlertCircle, Loader2, Paperclip, X } from "lucide-react";
import { useTranslations } from "next-intl";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";

function CandidatureForm() {
  const t = useTranslations("talents");
  const searchParams = useSearchParams();
  const posteParam = searchParams.get("poste") ?? "";

  const [fields, setFields] = useState({
    nom: "",
    email: "",
    telephone: "",
    poste: posteParam,
    experience: "",
    motivation: "",
  });
  const [cv, setCv] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (posteParam) setFields((f) => ({ ...f, poste: posteParam }));
  }, [posteParam]);

  function set(key: keyof typeof fields) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFields((f) => ({ ...f, [key]: e.target.value }));
  }

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] ?? null;
    setCv(file);
  }

  function removeFile() {
    setCv(null);
    if (fileRef.current) fileRef.current.value = "";
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const formData = new FormData();
      Object.entries(fields).forEach(([k, v]) => formData.append(k, v));
      if (cv) formData.append("cv", cv);

      const res = await fetch("/api/candidature", {
        method: "POST",
        body: formData,
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-sm border border-green-100 bg-green-50 px-8 py-16 text-center">
        <CheckCircle size={44} className="text-green-500" />
        <h3 className="font-serif-display text-xl font-semibold text-brand-ink">
          {t("successTitle")}
        </h3>
        <p className="max-w-sm text-sm text-brand-ink-light">
          {t("successDesc")}
        </p>
        <Link
          href="/talents/opportunites"
          className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-orange hover:underline"
        >
          <ArrowLeft size={14} />
          {t("seeOpportunities")}
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {status === "error" && (
        <div className="flex items-center gap-2 rounded-sm border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600">
          <AlertCircle size={16} className="shrink-0" />
          {t("errorMsg")}
        </div>
      )}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-brand-ink">
            {t("fieldName")}
          </label>
          <input
            type="text"
            required
            value={fields.nom}
            onChange={set("nom")}
            placeholder={t("placeholderName")}
            className="mt-1.5 w-full rounded-sm border border-black/10 px-3 py-2.5 text-sm outline-none placeholder:text-brand-ink-light/50 focus:border-brand-orange"
          />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-brand-ink">
            {t("fieldEmail")}
          </label>
          <input
            type="email"
            required
            value={fields.email}
            onChange={set("email")}
            placeholder={t("placeholderEmail")}
            className="mt-1.5 w-full rounded-sm border border-black/10 px-3 py-2.5 text-sm outline-none placeholder:text-brand-ink-light/50 focus:border-brand-orange"
          />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-brand-ink">
            {t("fieldPhone")}
          </label>
          <input
            type="tel"
            value={fields.telephone}
            onChange={set("telephone")}
            placeholder={t("placeholderPhone")}
            className="mt-1.5 w-full rounded-sm border border-black/10 px-3 py-2.5 text-sm outline-none placeholder:text-brand-ink-light/50 focus:border-brand-orange"
          />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-brand-ink">
            {t("fieldPosition")}
          </label>
          <input
            type="text"
            value={fields.poste}
            onChange={set("poste")}
            placeholder={t("placeholderPosition")}
            className="mt-1.5 w-full rounded-sm border border-black/10 px-3 py-2.5 text-sm outline-none placeholder:text-brand-ink-light/50 focus:border-brand-orange"
          />
        </div>
      </div>

      <div>
        <label className="text-xs font-semibold uppercase tracking-wide text-brand-ink">
          {t("fieldExperience")}
        </label>
        <input
          type="text"
          value={fields.experience}
          onChange={set("experience")}
          placeholder={t("placeholderExperience")}
          className="mt-1.5 w-full rounded-sm border border-black/10 px-3 py-2.5 text-sm outline-none placeholder:text-brand-ink-light/50 focus:border-brand-orange"
        />
      </div>

      <div>
        <label className="text-xs font-semibold uppercase tracking-wide text-brand-ink">
          {t("fieldMotivation")}
        </label>
        <textarea
          rows={7}
          required
          value={fields.motivation}
          onChange={set("motivation")}
          placeholder={t("placeholderMotivation")}
          className="mt-1.5 w-full resize-none rounded-sm border border-black/10 px-3 py-2.5 text-sm outline-none placeholder:text-brand-ink-light/50 focus:border-brand-orange"
        />
      </div>

      {/* CV upload */}
      <div>
        <label className="text-xs font-semibold uppercase tracking-wide text-brand-ink">
          {t("fieldCv")}
        </label>
        <div className="mt-1.5">
          {cv ? (
            <div className="flex items-center gap-3 rounded-sm border border-brand-orange/30 bg-brand-orange/5 px-4 py-3">
              <Paperclip size={15} className="shrink-0 text-brand-orange" />
              <span className="flex-1 truncate text-sm text-brand-ink">{cv.name}</span>
              <span className="shrink-0 text-[11px] text-brand-ink-light">
                {(cv.size / 1024 / 1024).toFixed(1)} Mo
              </span>
              <button
                type="button"
                onClick={removeFile}
                className="shrink-0 rounded-full p-0.5 text-brand-ink-light hover:text-brand-ink"
              >
                <X size={14} />
              </button>
            </div>
          ) : (
            <label className="flex cursor-pointer items-center gap-3 rounded-sm border border-dashed border-black/20 px-4 py-4 transition-colors hover:border-brand-orange hover:bg-brand-orange/5">
              <Paperclip size={15} className="shrink-0 text-brand-ink-light" />
              <span className="text-sm text-brand-ink-light">
                {t("cvAttach")}
              </span>
              <input
                ref={fileRef}
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFile}
                className="hidden"
              />
            </label>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center gap-2 rounded-sm bg-brand-orange px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-orange-dark disabled:opacity-60"
      >
        {status === "loading" && <Loader2 size={15} className="animate-spin" />}
        {status === "loading" ? t("submittingLabel") : t("btnSubmit")}
      </button>
    </form>
  );
}

export default function CandidaturePage() {
  const t = useTranslations("talents");
  const tc = useTranslations("common");

  const whyItems = [t("why1"), t("why2"), t("why3"), t("why4"), t("why5")];

  return (
    <>
      <PageHero
        eyebrow={t("applicationEyebrow")}
        title={t("applicationTitle")}
        description={t("applicationDesc")}
        breadcrumbs={[
          { label: tc("home"), href: "/" },
          { label: t("eyebrow"), href: "/talents" },
          { label: t("applicationTitle") },
        ]}
        photo="/H Talents 1.png"
        objectPosition="50% 30%"
        overlayClass="from-brand-ink/92 via-brand-ink/70 to-brand-ink/30"
      />

      <section className="bg-[#f7f7f8] py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_2fr]">

            {/* Sidebar */}
            <div>
              <Link
                href="/talents/opportunites"
                className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-orange hover:underline"
              >
                <ArrowLeft size={14} />
                {t("seeOffers")}
              </Link>
              <h2 className="font-serif-display text-xl font-semibold text-brand-ink">
                {t("whyJoinTitle")}
              </h2>
              <div className="mt-4 h-0.5 w-10 bg-brand-orange" />
              <ul className="mt-6 space-y-4 text-sm text-brand-ink-light">
                {whyItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Form */}
            <div className="rounded-sm border border-black/10 bg-white p-8 sm:p-10">
              <h2 className="font-serif-display text-xl font-semibold text-brand-ink">
                {t("formTitle")}
              </h2>
              <p className="mt-2 text-sm text-brand-ink-light">
                {t("formDesc")}
              </p>
              <div className="mt-8">
                <Suspense fallback={null}>
                  <CandidatureForm />
                </Suspense>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
