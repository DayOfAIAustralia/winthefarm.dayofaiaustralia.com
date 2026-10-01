"use client";

import { useEffect, useState } from "react";
import ShadowHtml from "@/components/shadow-html";
import { Card } from "@/components/ui/card";
import { PageHeading, pageLayoutClassName } from "@/components/page-heading";

export default function RulesPage() {
  const [termsHtml, setTermsHtml] = useState("");

  useEffect(() => {
    fetch("/terms.html")
      .then((res) => res.text())
      .then(setTermsHtml);
  }, []);

  return (
    <div className="flex-1 bg-gray-50 flex flex-col">
      <main className={pageLayoutClassName}>
        <PageHeading>Competition Terms &amp; Conditions</PageHeading>
        <div className="max-w-4xl">
          <Card className="gap-0 bg-white rounded-lg shadow-sm border p-5 sm:p-8">
            <ShadowHtml html={termsHtml} />
          </Card>
        </div>
      </main>
    </div>
  );
}
