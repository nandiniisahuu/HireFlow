import { useMutation } from "@tanstack/react-query";
import { apiPost } from "./client";

// ---------------------------------------------------------------------------
// Auth
// ---------------------------------------------------------------------------
export function useLogin() {
  return useMutation({
    mutationFn: (data: { email: string; password: string }) =>
      apiPost<any>("/auth/login", data),
  });
}

export function useRegister() {
  return useMutation({
    mutationFn: (data: {
      orgName: string;
      firstName: string;
      lastName: string;
      email: string;
      password: string;
      country?: string;
    }) => apiPost<any>("/auth/register", data),
  });
}