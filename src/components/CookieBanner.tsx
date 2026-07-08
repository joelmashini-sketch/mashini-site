"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const STORAGE_KEY = "mashini_cookie_consent";

export default function CookieBanner() {
  const t = useTranslations("cookies");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-brand-ink/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-4 px-4 py-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <p className="flex-1 text-sm text-white/75 leading-relaxed">
          {t("banner")}{" "}
          <Link
            href="/politique-cookies"
            className="underline underline-offset-2 hover:text-white transition-colors"
          >
            {t("learnMore")}
          </Link>
        </p>
        <div className="flex shrink-0 items-center gap-3">
          <button
            onClick={accept}
            className="rounded-sm bg-brand-orange px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-orange-dark"
          >
            {t("accept")}
          </button>
          <button
            onClick={accept}
            aria-label="Fermer"
            className="text-white/50 hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
