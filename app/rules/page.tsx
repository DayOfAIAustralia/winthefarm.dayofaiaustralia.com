"use client";

import { useEffect, useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import ShadowHtml from "@/components/shadow-html";

export default function RulesPage() {
  const [termsHtml, setTermsHtml] = useState("");

  useEffect(() => {
    fetch("/terms.html")
      .then((res) => res.text())
      .then(setTermsHtml);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Competition Terms & Conditions
            </h1>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-8">
            <ShadowHtml html={termsHtml} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
