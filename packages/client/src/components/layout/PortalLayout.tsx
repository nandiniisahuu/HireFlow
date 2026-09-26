import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function PortalLayout() {
  const { t } = useTranslation();
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900 dark:bg-[#080f1e] dark:text-slate-100">
      {/* Header */}
      <header className="border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-xl dark:border-slate-800 dark:bg-[#0d1528]/90">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-600 text-white font-bold text-sm shadow-lg shadow-brand-600/20">
              E
            </div>
            <div>
              <span className="text-base font-bold tracking-tight text-slate-950 dark:text-white">
                {t("components.portalLayout.title")}
              </span>
            </div>
          </div>
          <nav className="flex items-center gap-1 text-sm">
            <a
              href="/portal"
              className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              {t("components.portalLayout.requestAccess")}
            </a>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8 sm:px-6 lg:py-10">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-7 dark:border-slate-800 dark:bg-[#0d1528]">
        <div className="mx-auto max-w-5xl px-4 text-center text-xs font-medium text-slate-400">
          {t("components.portalLayout.poweredBy")}
        </div>
      </footer>
    </div>
  );
}