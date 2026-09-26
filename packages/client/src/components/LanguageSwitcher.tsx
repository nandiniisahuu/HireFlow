import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Globe, Check } from "lucide-react";
import { LANGUAGES } from "@/i18n";
import { cn } from "@/lib/utils";

/**
 * Language picker for the app chrome. Lists each language by its own name
 * (endonym) and switches the active language via i18next (persisted to
 * localStorage; Arabic flips the layout to RTL).
 */
export function LanguageSwitcher() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const active = (i18n.language || "en").split("-")[0];

  // Close on outside click / Escape.
  useEffect(() => {
    if (!open) return;
    function onDown(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function choose(code: string) {
    i18n.changeLanguage(code);
    setOpen(false);
  }

  const activeLanguage = LANGUAGES.find((l) => l.code === active) ?? LANGUAGES[0];

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        title={t("nav.changeLanguage")}
        aria-label={t("nav.changeLanguage")}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="inline-flex h-9 items-center gap-1.5 rounded-xl border border-transparent px-2.5 text-sm font-semibold text-slate-500 hover:border-slate-200 hover:bg-slate-50 hover:text-slate-800 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:bg-slate-800 dark:hover:text-white"
      >
        <Globe className="h-4 w-4" />
        <span className="hidden text-xs font-medium sm:inline">{activeLanguage.flag}</span>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute end-0 z-50 mt-2 min-w-[11rem] overflow-hidden rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl shadow-slate-950/10 dark:border-slate-700 dark:bg-slate-900"
        >
          {LANGUAGES.map((lng) => (
            <li key={lng.code}>
              <button
                type="button"
                role="option"
                aria-selected={active === lng.code}
                dir={lng.dir}
                onClick={() => choose(lng.code)}
                className={cn(
                  "flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800",
                  active === lng.code && "bg-brand-50 font-semibold text-brand-700",
                )}
              >
                <span className="w-6 text-center text-xs font-bold text-gray-400">{lng.flag}</span>
                <span className="flex-1 text-start">{lng.label}</span>
                {active === lng.code && <Check className="h-4 w-4 text-brand-600" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}