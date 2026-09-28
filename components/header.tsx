"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { SiteLink } from "@/components/site-link";
import { cn } from "@/lib/utils";
import { COMPETITION_NAME, REGISTER_URL } from "@/lib/competition";

const allNavLinks = [
  { href: "/how-to-play", text: "How to play" },
  { href: "/timeline", text: "Timeline" },
  { href: "/setting", text: "Setting" },
  { href: "/rules", text: "Rules" },
  { href: "/learning", text: "Learning & ethics" },
  { href: "/about", text: "About us" },
  { href: "/scoring", text: "Scoring" },
];

const linkClassName =
  "inline-flex items-center whitespace-nowrap rounded-md px-3 py-2 text-sm font-bold uppercase text-gray-900 transition-colors hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 aria-[current=page]:bg-amber-50 aria-[current=page]:text-red-700";

export function Header() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<"more" | "mobile" | null>(null);
  const moreRef = useRef<HTMLDivElement>(null);
  const moreButtonRef = useRef<HTMLButtonElement>(null);
  const mobileButtonRef = useRef<HTMLButtonElement>(null);
  const closeMenus = () => setOpenMenu(null);

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
        setOpenMenu((current) => current === "more" ? null : current);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (openMenu === "more") moreButtonRef.current?.focus();
      if (openMenu === "mobile") mobileButtonRef.current?.focus();
      setOpenMenu(null);
    };
    const onPopState = () => setOpenMenu(null);
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("popstate", onPopState);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("popstate", onPopState);
    };
  }, [openMenu]);

  useEffect(() => {
    if (openMenu !== "more") return;
    const frame = requestAnimationFrame(() => {
      const firstLink = [...(moreRef.current?.querySelectorAll<HTMLAnchorElement>("a") ?? [])]
        .find((link) => link.getClientRects().length > 0);
      firstLink?.focus();
    });
    return () => cancelAnimationFrame(frame);
  }, [openMenu]);

  return (
    <header className="sticky top-0 z-50 shrink-0 bg-white shadow-sm">
      <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          <Link
            href="/"
            onNavigate={closeMenus}
            className="flex shrink-0 items-center gap-4 rounded-sm transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500"
            aria-label={`${COMPETITION_NAME} home`}
          >
            <Image
              src="/logos/dayofai.webp"
              alt="Day of AI Australia"
              width={50}
              height={50}
              className="h-[50px] w-[50px] object-contain"
              preload
            />
            <span className="font-dm-serif text-2xl font-bold text-gray-900">
              {COMPETITION_NAME}
            </span>
          </Link>

          <div className="hidden items-center gap-4 md:flex">
            <nav aria-label="Main navigation">
              <ul className="flex items-center gap-1">
                {allNavLinks.map((link, index) => (
                  <li
                    key={link.href}
                    className={index < 2 ? undefined : index < 4 ? "hidden lg:block" : "hidden xl:block"}
                  >
                    <SiteLink
                      href={link.href}
                      aria-current={pathname === link.href ? "page" : undefined}
                      className={linkClassName}
                      onNavigate={closeMenus}
                    >
                      {link.text}
                    </SiteLink>
                  </li>
                ))}
                <li className="xl:hidden">
                  <div className="relative" ref={moreRef}>
                    <button
                      ref={moreButtonRef}
                      type="button"
                      aria-expanded={openMenu === "more"}
                      aria-controls="more-navigation"
                      onClick={() => setOpenMenu(openMenu === "more" ? null : "more")}
                      onKeyDown={(event) => {
                        if (event.key === "ArrowDown") {
                          event.preventDefault();
                          setOpenMenu("more");
                        }
                      }}
                      className={cn(linkClassName, "gap-1")}
                    >
                      More
                      <ChevronDown className={cn("h-4 w-4", openMenu === "more" && "rotate-180")} aria-hidden="true" />
                    </button>
                    {openMenu === "more" && (
                      <ul id="more-navigation" className="absolute right-0 top-full mt-2 w-56 rounded-lg border border-gray-200 bg-white p-2 shadow-lg">
                        {allNavLinks.slice(2).map((link, index) => (
                          <li key={link.href} className={index < 2 ? "lg:hidden" : undefined}>
                            <SiteLink
                              href={link.href}
                              aria-current={pathname === link.href ? "page" : undefined}
                              className={cn(linkClassName, "w-full")}
                              onNavigate={closeMenus}
                            >
                              {link.text}
                            </SiteLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              </ul>
            </nav>
            <Button asChild className="rounded-none bg-[#FDC300] font-bold text-black hover:bg-yellow-500">
              <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer">REGISTER NOW</a>
            </Button>
          </div>

          <button
            ref={mobileButtonRef}
            type="button"
            className="rounded-sm p-2 focus-visible:outline-2 focus-visible:outline-amber-500 md:hidden"
            onClick={() => setOpenMenu(openMenu === "mobile" ? null : "mobile")}
            aria-label={openMenu === "mobile" ? "Close menu" : "Open menu"}
            aria-expanded={openMenu === "mobile"}
            aria-controls="mobile-navigation"
          >
            {openMenu === "mobile" ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      {openMenu === "mobile" && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="absolute inset-x-0 top-full max-h-[calc(100dvh-82px)] overflow-y-auto border-t border-b border-gray-200 bg-white px-4 py-4 shadow-md md:hidden">
          <ul className="space-y-1">
            {allNavLinks.map((link) => (
              <li key={link.href}>
                <SiteLink
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className={cn(linkClassName, "w-full py-3")}
                  onNavigate={closeMenus}
                >
                  {link.text}
                </SiteLink>
              </li>
            ))}
          </ul>
          <Button asChild className="mt-4 w-full rounded-none bg-[#FDC300] font-bold text-black hover:bg-yellow-500">
            <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer">REGISTER NOW</a>
          </Button>
        </nav>
      )}
    </header>
  );
}
