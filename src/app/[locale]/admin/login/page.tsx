"use client";

import ButtonL from "@/components/common/buttonL";
import Input from "@/components/common/input";
import SpanL from "@/components/common/spanL";
import { auth } from "@/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useTranslations } from "next-intl";
import { useState } from "react";
import toast from "react-hot-toast";

export default function AdminLogin() {
  const t = useTranslations();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const idToken = await user.getIdToken();

      await fetch("/api/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: idToken }),
      });

      window.location.href = "/admin/dashboard";
    } catch {
      toast.error(t("Admin.Login.errorMessage"));
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full min-h-screen flex flex-col px-[42%] gap-5 pb-10 items-center justify-center bg-primary/10"
    >
      <SpanL className="text-2xl mb-5 text-primary">Admin.Login.title</SpanL>
      <Input name={"email"} label={"Admin.Login.email"} />
      <Input name={"password"} label={"Admin.Login.password"} password />
      <ButtonL
        type="submit"
        disabled={loading}
        className="bg-primary text-background px-8 py-1 rounded-3xl"
      >
        Admin.Login.submit
      </ButtonL>
    </form>
  );
}
