"use server"
import { signIn } from "@/auth";

export const loginWithProvidesService = async (
  provide: "google",
) => {
  await signIn(provide, {
    redirectTo: "/dashboard",
  });
};