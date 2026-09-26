import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Briefcase, Eye, EyeOff, Loader2 } from "lucide-react";
import { useRegister } from "@/api/hooks";
import { useAuthStore } from "@/lib/auth-store";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const featureKeys = [
  "auth.featureJobPostings",
  "auth.featureApplicantTracking",
  "auth.featureInterviewScheduling",
  "auth.featureResumeParsing",
  "auth.featureOfferManagement",
  "auth.featureOnboarding",
  "auth.featureAiScoring",
  "auth.featureAnalytics",
];

export function SignupPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const registerMutation = useRegister();
  const login = useAuthStore((s) => s.login);

  const [orgName, setOrgName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      const res = await registerMutation.mutateAsync({
        orgName,
        firstName,
        lastName,
        email,
        password,
        country: country || undefined,
      });

      if (res.success) {
        login(res.data.user, res.data.tokens);
        toast.success("Account created successfully");
        navigate("/dashboard");
      } else {
        toast.error(res.error?.message || "Registration failed");
      }
    } catch (err: any) {
      toast.error(err.response?.data?.error?.message || "Registration failed");
    }
  }

  const inputClass =
    "mt-1 block w-full rounded-lg border border-[#302b52] bg-[#0d0b25] px-3 py-2.5 text-sm text-white placeholder:text-slate-500 shadow-none outline-none transition focus:border-[#8b5cf6] focus:ring-2 focus:ring-[#7c3aed]/20";

  const labelClass = "block text-xs font-medium text-slate-200";

  return (
    <div className="flex min-h-screen bg-[#edeeF0]">
      <div className="absolute end-4 top-4 z-20">
        <LanguageSwitcher />
      </div>

      {/* Brand panel */}
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center bg-[#0c0a20] px-12 py-16">
        <div className="w-full max-w-md text-white">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#3e3955] shadow-none">
              <Briefcase className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">HireFlow</span>
          </div>

          <h1 className="text-3xl font-bold leading-tight tracking-tight">
            Build your hiring workspace
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-6 text-slate-300">
            Create your organization account and manage jobs, applicants,
            interviews, offers, and recruitment workflows — all in one place.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-4">
            {featureKeys.map((feature) => (
              <div key={feature} className="flex items-center gap-2 text-sm">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#a78bfa]" />
                <span className="text-slate-300">{t(feature)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Signup panel */}
      <div className="flex w-full lg:w-1/2 items-center justify-center px-4 py-16 sm:px-8">
        <div className="w-full max-w-md">
          <div className="mb-6 flex items-center justify-center gap-3 lg:hidden">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#3e3955]">
              <Briefcase className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-[#17142f]">HireFlow</span>
          </div>

          <div className="rounded-xl border border-[#2b2844] bg-[#171431] p-6 shadow-[0_18px_45px_rgba(20,16,50,0.18)] sm:p-7">
            <h2 className="text-xl font-bold text-white">
              Create your account
            </h2>
            <p className="mt-1 text-xs text-slate-400">
              Set up your organization to get started.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
              <div>
                <label htmlFor="orgName" className={labelClass}>
                  Organization Name
                </label>
                <input
                  id="orgName"
                  type="text"
                  value={orgName}
                  onChange={(e) => setOrgName(e.target.value)}
                  required
                  className={inputClass}
                />
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className={labelClass}>
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className={labelClass}>
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className={labelClass}>
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="password" className={labelClass}>
                  Password
                </label>
                <div className="relative mt-1">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={8}
                    className={`${inputClass} pr-10`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-slate-200"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
                <p className="mt-1 text-[11px] text-slate-500">
                  Minimum 8 characters
                </p>
              </div>

              <div>
                <label htmlFor="country" className={labelClass}>
                  Country
                </label>
                <input
                  id="country"
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  placeholder="India"
                  className={inputClass}
                />
              </div>

              <button
                type="submit"
                disabled={registerMutation.isPending}
                className="mt-1 flex w-full items-center justify-center gap-2 rounded-lg bg-[#7c00f5] px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-950/25 transition hover:bg-[#8b16ff] focus:outline-none focus:ring-2 focus:ring-purple-400/40 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {registerMutation.isPending ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Creating account...
                  </>
                ) : (
                  "Create Account"
                )}
              </button>
            </form>

            <p className="mt-5 text-center text-xs text-slate-400">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-[#a78bfa] transition hover:text-white"
              >
                Sign in
              </Link>
            </p>
          </div>

          <p className="mt-5 text-center text-[11px] text-slate-500">
            {t("auth.ecosystemNote")}
          </p>
        </div>
      </div>
    </div>
  );
}
