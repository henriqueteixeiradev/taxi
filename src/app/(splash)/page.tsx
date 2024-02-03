"use client";

import { Logo } from "@/components/partials/Logo";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = "/login";
    }, 2000);
  }, []);

  return (
    <section className="flex justify-center items-center h-screen">
      <Logo />
    </section>
  );
}
