import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { getActiveTheme, toggleTheme, type Theme } from "@/lib/theme";
import { useTranslation } from "react-i18next";

export function ThemeToggle() {
  const { t } = useTranslation();
  const [theme, setTheme] = useState<Theme>(getActiveTheme());

  return (
    <button
      type="button"
      onClick={() => setTheme(toggleTheme())}
      title={t(theme === "dark" ? "common.switchLightMode" : "common.switchDarkMode")}
      aria-label={t("nav.toggleTheme")}
      className="icon-button rounded-xl text-slate-500 hover:bg-slate-100 hover:text-slate-800 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
    >
      {theme === "dark" ? <Sun className="h-5 w-5" aria-hidden="true" /> : <Moon className="h-5 w-5" aria-hidden="true" />}
    </button>
  );
}