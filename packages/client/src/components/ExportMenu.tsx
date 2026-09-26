import { useState } from "react";
import { Download, FileSpreadsheet, FileText, Loader2, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

interface ExportMenuProps {
  onCsv: () => void;
  onPdf: () => void;
  busy?: boolean;
  disabled?: boolean;
  className?: string;
}

/** Shared "Export" dropdown UI (CSV + PDF). Presentational — callers wire the handlers. */
export function ExportMenu({ onCsv, onPdf, busy, disabled, className }: ExportMenuProps) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const pick = (fn: () => void) => {
    setOpen(false);
    fn();
  };
  return (
    <div className={`relative ${className ?? ""}`}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        disabled={disabled || busy}
        className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 disabled:opacity-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
      >
        {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}
        {t("common.export")}
        <ChevronDown className="h-3.5 w-3.5" />
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute right-0 z-20 mt-2 w-48 overflow-hidden rounded-xl border border-slate-200 !bg-white p-1.5 shadow-xl shadow-slate-950/10 dark:border-slate-700 dark:!bg-slate-900">
            <button
              type="button"
              onClick={() => pick(onCsv)}
              className="flex w-full items-center gap-2 rounded-lg bg-white px-3 py-2.5 text-left text-sm font-semibold !text-slate-700 hover:!bg-slate-50 hover:!text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-500 dark:bg-slate-900 dark:!text-slate-200 dark:hover:!bg-slate-800"
            >
              <FileSpreadsheet className="h-4 w-4 text-green-600" /> {t("common.exportCsv")}
            </button>
            <button
              type="button"
              onClick={() => pick(onPdf)}
              className="flex w-full items-center gap-2 rounded-lg bg-white px-3 py-2.5 text-left text-sm font-semibold !text-slate-700 hover:!bg-slate-50 hover:!text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-500 dark:bg-slate-900 dark:!text-slate-200 dark:hover:!bg-slate-800"
            >
              <FileText className="h-4 w-4 text-red-600" /> {t("common.exportPdf")}
            </button>
          </div>
        </>
      )}
    </div>
  );
}