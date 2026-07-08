"use client";

import { useState } from "react";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";

type ProfileKey = "entreprises" | "filiales" | "investisseurs" | "partenaires";
const profileKeys: ProfileKey[] = ["entreprises", "filiales", "investisseurs", "partenaires"];

export default function ContactForm() {
  const t = useTranslations("contact");
  const [active, setActive] = useState<ProfileKey>("entreprises");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [fields, setFields] = useState({
    nom: "", email: "", extra: "", telephone: "", sujet: "", message: "",
  });

  const profiles = profileKeys.map((key) => ({
    key,
    label: t(`profiles${key.charAt(0).toUpperCase() + key.slice(1)}Label` as never),
    intro: t(`profiles${key.charAt(0).toUpperCase() + key.slice(1)}Intro` as never),
  }));

  const profile = profiles.find((p) => p.key === active)!;

  const extraLabel = t(`extra${active.charAt(0).toUpperCase() + active.slice(1)}Label` as never);
  const extraPlaceholder = t(`extra${active.charAt(0).toUpperCase() + active.slice(1)}Placeholder` as never);

  function set(key: keyof typeof fields) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFields((f) => ({ ...f, [key]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, profil: profile.label }),
      });
      if (res.ok) {
        setStatus("success");
        setFields({ nom: "", email: "", extra: "", telephone: "", sujet: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-sm border border-green-100 bg-green-50 px-8 py-14 text-center">
        <CheckCircle size={40} className="text-green-500" />
        <h3 className="font-serif-display text-lg font-semibold text-brand-ink">
          {t("successTitle")}
        </h3>
        <p className="text-sm text-brand-ink-light">{t("successDesc")}</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-semibold text-brand-orange hover:underline"
        >
          {t("successAgain")}
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-wrap gap-2 border-b border-black/10">
        {profiles.map((p) => (
          <button
            key={p.key}
            type="button"
            onClick={() => setActive(p.key)}
            className={`border-b-2 px-4 py-3 text-sm font-semibold uppercase tracking-wide transition-colors ${
              active === p.key
                ? "border-brand-orange text-brand-orange"
                : "border-transparent text-brand-ink-light hover:text-brand-ink"
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      <p className="mt-5 text-sm text-brand-ink-light">{profile.intro}</p>

      {status === "error" && (
        <div className="mt-5 flex items-center gap-2 rounded-sm border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600">
          <AlertCircle size={16} className="shrink-0" />
          {t("errorMsg")}
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label className="text-xs font-semibold uppercase tracking-wide text-brand-ink">
            {t("fieldNom")}
          </label>
          <input
            type="text" required value={fields.nom} onChange={set("nom")}
            className="mt-1.5 w-full rounded-sm border border-black/10 px-3 py-2.5 text-sm outline-none placeholder:text-brand-ink-light/60 focus:border-brand-orange"
            placeholder={t("fieldNomPlaceholder")}
          />
        </div>
        <div className="sm:col-span-1">
          <label className="text-xs font-semibold uppercase tracking-wide text-brand-ink">
            {t("fieldEmail")}
          </label>
          <input
            type="email" required value={fields.email} onChange={set("email")}
            className="mt-1.5 w-full rounded-sm border border-black/10 px-3 py-2.5 text-sm outline-none placeholder:text-brand-ink-light/60 focus:border-brand-orange"
            placeholder={t("fieldEmailPlaceholder")}
          />
        </div>
        <div className="sm:col-span-1">
          <label className="text-xs font-semibold uppercase tracking-wide text-brand-ink">
            {extraLabel}
          </label>
          <input
            type="text" value={fields.extra} onChange={set("extra")}
            className="mt-1.5 w-full rounded-sm border border-black/10 px-3 py-2.5 text-sm outline-none placeholder:text-brand-ink-light/60 focus:border-brand-orange"
            placeholder={extraPlaceholder}
          />
        </div>
        <div className="sm:col-span-1">
          <label className="text-xs font-semibold uppercase tracking-wide text-brand-ink">
            {t("fieldTelephone")}
          </label>
          <input
            type="tel" value={fields.telephone} onChange={set("telephone")}
            className="mt-1.5 w-full rounded-sm border border-black/10 px-3 py-2.5 text-sm outline-none placeholder:text-brand-ink-light/60 focus:border-brand-orange"
            placeholder="+243 …"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="text-xs font-semibold uppercase tracking-wide text-brand-ink">
            {t("fieldSujet")}
          </label>
          <input
            type="text" value={fields.sujet} onChange={set("sujet")}
            className="mt-1.5 w-full rounded-sm border border-black/10 px-3 py-2.5 text-sm outline-none placeholder:text-brand-ink-light/60 focus:border-brand-orange"
            placeholder={t("fieldSujetPlaceholder")}
          />
        </div>
        <div className="sm:col-span-2">
          <label className="text-xs font-semibold uppercase tracking-wide text-brand-ink">
            {t("fieldMessage")}
          </label>
          <textarea
            rows={5} required value={fields.message} onChange={set("message")}
            className="mt-1.5 w-full resize-none rounded-sm border border-black/10 px-3 py-2.5 text-sm outline-none placeholder:text-brand-ink-light/60 focus:border-brand-orange"
            placeholder={t("fieldMessagePlaceholder")}
          />
        </div>
        <div className="sm:col-span-2">
          <button
            type="submit" disabled={status === "loading"}
            className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-brand-orange px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-orange-dark disabled:opacity-60 sm:w-auto"
          >
            {status === "loading" && <Loader2 size={15} className="animate-spin" />}
            {status === "loading" ? t("submittingLabel") : t("submitLabel")}
          </button>
        </div>
      </form>
    </div>
  );
}
