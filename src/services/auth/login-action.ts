import { signIn } from "@/auth";

export const loginWithProvidesService = async (
  provide: "google" | "github",
) => {
  await signIn(provide, {
    redirectTo: "Dashboard",
  });
};