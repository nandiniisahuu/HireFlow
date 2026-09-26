import { useState, useEffect } from "react";
import { Outlet, Navigate, NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Briefcase,
  Users,
  Calendar,
  FileText,
  UserPlus,
  Gift,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  X,
  ClipboardList,
  ClipboardCheck,
  Brain,
  Mic,
  Globe,
  Inbox,
  Workflow,
  ChevronRight,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { isLoggedIn, getUser, useAuthStore } from "@/lib/auth-store";
import { cn, getInitials } from "@/lib/utils";
import { BackToDashboard } from "@/components/BackToDashboard";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ConfirmDialog } from "@/components/ConfirmDialog";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { isAdminRole, canAccessRecruit } from "@/lib/roles";

interface NavItem {
  to: string;
  labelKey: string;
  icon: any;
  adminOnly?: boolean;
  badge?: "beta" | "new";
}

interface NavGroup {
  titleKey?: string;
  items: NavItem[];
}

const NAV_GROUPS: NavGroup[] = [
  {
    titleKey: "nav.groups.overview",
    items: [
      { to: "/dashboard", labelKey: "nav.dashboard", icon: LayoutDashboard },
      {
        to: "/analytics",
        labelKey: "nav.analytics",
        icon: BarChart3,
        adminOnly: true,
      },
    ],
  },
  {
    titleKey: "nav.groups.jobs",
    items: [
      {
        to: "/jobs",
        labelKey: "nav.jobPostings",
        icon: Briefcase,
        adminOnly: true,
      },
      {
        to: "/career-page",
        labelKey: "nav.careerPage",
        icon: Globe,
        adminOnly: true,
      },
    ],
  },
  {
    titleKey: "nav.groups.people",
    items: [
      {
        to: "/candidates",
        labelKey: "nav.candidates",
        icon: Users,
        adminOnly: true,
      },
      {
        to: "/applications",
        labelKey: "nav.applications",
        icon: Inbox,
        adminOnly: true,
      },
      { to: "/referrals", labelKey: "nav.referrals", icon: Gift },
    ],
  },
  {
    titleKey: "nav.groups.interviews",
    items: [
      { to: "/interviews", labelKey: "nav.interviews", icon: Calendar },
      {
        to: "/ai-interviews",
        labelKey: "nav.aiInterviews",
        icon: Mic,
        adminOnly: true,
        badge: "new",
      },
      {
        to: "/scoring",
        labelKey: "nav.aiScoring",
        icon: Brain,
        adminOnly: true,
        badge: "beta",
      },
    ],
  },
  {
    titleKey: "nav.groups.hiring",
    items: [
      {
        to: "/offers",
        labelKey: "nav.offers",
        icon: FileText,
        adminOnly: true,
      },
      {
        to: "/offers/my-approvals",
        labelKey: "nav.myApprovals",
        icon: ClipboardCheck,
        adminOnly: true,
      },
      {
        to: "/onboarding",
        labelKey: "nav.onboarding",
        icon: ClipboardList,
        adminOnly: true,
      },
    ],
  },
  {
    titleKey: "nav.groups.system",
    items: [
      {
        to: "/recruitment-operations",
        labelKey: "nav.operations",
        icon: Workflow,
        adminOnly: true,
      },
      {
        to: "/settings",
        labelKey: "nav.settings",
        icon: Settings,
        adminOnly: true,
      },
    ],
  },
];

export function DashboardLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [confirmLogout, setConfirmLogout] = useState(false);
  const location = useLocation();
  const logout = useAuthStore((s) => s.logout);
  const { t } = useTranslation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  if (!isLoggedIn()) return <Navigate to="/login" replace />;

  const user = getUser();
  const displayName = user ? `${user.firstName} ${user.lastName}` : "User";
  const roleLabel = canAccessRecruit(user) ? t("nav.admin") : t("nav.employee");

  function SidebarContent() {
    return (
      <aside className="hf-sidebar flex h-full min-h-0 w-[min(19rem,88vw)] flex-col border-r border-slate-200/80 bg-white/95 backdrop-blur-xl dark:border-slate-800 dark:bg-[#0d1528]/98 lg:w-72">
        <div className="flex h-[4.5rem] shrink-0 items-center gap-3 border-b border-slate-200/80 px-5 dark:border-slate-800">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-lg shadow-brand-600/20">
            <UserPlus className="h-5 w-5" />
            <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-400 dark:border-[#0d1528]" />
          </div>
          <div className="min-w-0">
            <p className="truncate text-base font-bold tracking-tight text-slate-950 dark:text-white">
              {t("brand")}
            </p>
            <p className="truncate text-[11px] font-medium text-slate-400">
              Recruiting workspace
            </p>
          </div>
        </div>

        <nav className="min-h-0 flex-1 overflow-y-auto scrollbar-thin px-3 py-5">
          <div className="space-y-5">
            {NAV_GROUPS.map((group) => {
              const items = group.items.filter(
                (item) => !(item.adminOnly && !canAccessRecruit(user)),
              );
              if (items.length === 0) return null;
              return (
                <div key={group.titleKey ?? "top"} className="space-y-1">
                  {group.titleKey && (
                    <p className="px-3 pb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400 dark:text-slate-500">
                      {t(group.titleKey)}
                    </p>
                  )}
                  {items.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      className={({ isActive }) =>
                        cn(
                          "group flex min-h-10 items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 text-sm font-medium transition-all duration-200",
                          isActive
                            ? "border-brand-100 bg-brand-50 text-brand-700 shadow-sm shadow-brand-500/5 dark:border-brand-500/20 dark:bg-brand-500/10 dark:text-brand-200"
                            : "text-slate-600 hover:border-slate-200 hover:bg-slate-50 hover:text-slate-950 dark:text-slate-300 dark:hover:border-slate-800 dark:hover:bg-slate-900/70 dark:hover:text-white",
                        )
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <span
                            className={cn(
                              "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors",
                              isActive
                                ? "bg-white text-brand-600 shadow-sm dark:bg-brand-500/15 dark:text-brand-300"
                                : "text-slate-400 group-hover:text-slate-600 dark:text-slate-500 dark:group-hover:text-slate-200",
                            )}
                          >
                            <item.icon className="h-[17px] w-[17px]" />
                          </span>
                          <span className="min-w-0 flex-1 truncate">
                            {t(item.labelKey)}
                          </span>
                          {item.badge && (
                            <span
                              className={cn(
                                "rounded-full px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider",
                                item.badge === "new"
                                  ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-300"
                                  : "bg-violet-50 text-violet-600 dark:bg-violet-400/10 dark:text-violet-300",
                              )}
                            >
                              {t(`nav.badges.${item.badge}`)}
                            </span>
                          )}
                          <ChevronRight
                            className={cn(
                              "h-3.5 w-3.5 shrink-0 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-50",
                              isActive && "opacity-50",
                            )}
                          />
                        </>
                      )}
                    </NavLink>
                  ))}
                </div>
              );
            })}
          </div>
        </nav>

        <div className="border-t border-slate-200/80 p-3 dark:border-slate-800">
          <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-3 dark:border-slate-800 dark:bg-slate-900/60">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-sm font-bold text-brand-700 dark:bg-brand-500/15 dark:text-brand-200">
                {getInitials(displayName)}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-slate-900 dark:text-white">
                  {displayName}
                </p>
                <p className="truncate text-xs text-slate-500 dark:text-slate-400">
                  {roleLabel}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setConfirmLogout(true)}
                aria-label={t("nav.logout")}
                title={t("nav.logout")}
                className="icon-button rounded-xl text-slate-400 hover:bg-white hover:text-red-500 dark:hover:bg-slate-800"
              >
                <LogOut className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </aside>
    );
  }

  return (
    <div className="fixed inset-0 flex min-h-0 overflow-hidden bg-slate-50 text-slate-950 dark:bg-[#080f1e] dark:text-slate-100">
      <a
        href="#main-content"
        className="sr-only z-[100] rounded-md bg-white px-4 py-2 font-medium text-gray-900 shadow focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to main content
      </a>

      <div className="hidden lg:block">
        <SidebarContent />
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Close navigation"
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="fixed left-0 top-0 z-50 h-full shadow-2xl">
            <SidebarContent />
          </div>
        </div>
      )}

      <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
        <header className="relative z-20 flex h-[4.5rem] shrink-0 items-center gap-3 border-b border-slate-200/80 bg-white/90 px-3 backdrop-blur-xl sm:px-5 lg:px-7 dark:border-slate-800 dark:bg-[#0b1427]/90">
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation"
            className="icon-button rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
          <div className="min-w-0">
            <BackToDashboard />
          </div>
          <div className="flex-1" />
          <div className="flex min-w-0 items-center gap-1.5 sm:gap-2.5">
            <div className="hidden min-[400px]:block">
              <LanguageSwitcher />
            </div>
            <ThemeToggle />
            <div className="mx-1 hidden h-7 w-px bg-slate-200 dark:bg-slate-800 min-[430px]:block" />
            <div className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-xs font-bold text-brand-700 dark:bg-brand-500/15 dark:text-brand-200 min-[430px]:flex">
              {getInitials(displayName)}
            </div>
            <div className="hidden min-w-0 md:block">
              <p className="max-w-40 truncate text-sm font-semibold text-slate-800 dark:text-slate-100">
                {displayName}
              </p>
              <p className="text-[11px] text-slate-400">{roleLabel}</p>
            </div>
          </div>
        </header>

        <main
          id="main-content"
          tabIndex={-1}
          className="min-h-0 min-w-0 flex-1 overflow-y-auto overflow-x-hidden scrollbar-thin bg-slate-50/80 p-3 sm:p-5 lg:p-7 dark:bg-[#080f1e]"
        >
          <ErrorBoundary key={location.pathname}>
            <Outlet />
          </ErrorBoundary>
        </main>
      </div>

      <ConfirmDialog
        open={confirmLogout}
        title={t("nav.logoutConfirmTitle")}
        message={t("nav.logoutConfirmMessage")}
        confirmLabel={t("nav.logout")}
        variant="danger"
        onConfirm={() => {
          setConfirmLogout(false);
          logout();
        }}
        onCancel={() => setConfirmLogout(false)}
      />
    </div>
  );
}
