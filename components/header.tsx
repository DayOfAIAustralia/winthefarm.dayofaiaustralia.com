"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { cn } from "@/lib/utils";

// Navigation Links
const allNavLinks = [
  { href: "/#how-to-play", text: "How to play" },
  { href: "/#timeline", text: "Timeline" },
  { href: "/setting", text: "Setting" },
  { href: "/rules", text: "Rules" },
  { href: "/ethics", text: "Ethics" },
  { href: "/about", text: "About us" },
  { href: "/pedagogy", text: "Pedagogy"}
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visibleLinksCount, setVisibleLinksCount] = useState(allNavLinks.length);
  const [moreOpen, setMoreOpen] = useState(false);

  const navContainerRef = useRef<HTMLDivElement>(null);
  const linkItemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const registerBtnRef = useRef<HTMLDivElement>(null);
  const moreRef = useRef<HTMLDivElement>(null);
  const firstMoreItemRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!moreRef.current) return;
      if (!moreRef.current.contains(e.target as Node)) setMoreOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMoreOpen(false);
    };
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  // Width Calculation
  useEffect(() => {
    const measure = () => linkItemRefs.current.map((el) => el?.offsetWidth ?? 0);

    const update = (containerEl: Element | null) => {
      if (!containerEl) return;

      const linkWidths = measure();
      if (linkWidths.some((w) => w === 0)) return;

      const containerWidth = (containerEl as HTMLElement).clientWidth;
      const registerBtnWidth = registerBtnRef.current?.offsetWidth ?? 0;
      const moreMenuTriggerWidth = 100;

      let current = registerBtnWidth;
      let count = 0;

      for (const w of linkWidths) {
        if (current + w < containerWidth) {
          current += w;
          count++;
        } else {
          if (current + moreMenuTriggerWidth > containerWidth) {
            count = Math.max(0, count - 1);
          }
          break;
        }
      }

      setVisibleLinksCount(count);
    };

    const ro = new ResizeObserver((entries) => {
      update(entries[0]?.target ?? null);
    });

    if (navContainerRef.current) ro.observe(navContainerRef.current);

    const onFonts = () => update(navContainerRef.current);
    if ((document as any).fonts?.ready) {
      (document as any).fonts.ready.then(onFonts).catch(() => {});
    } else {
      setTimeout(onFonts, 250);
    }

    // Initial measure
    update(navContainerRef.current);

    return () => ro.disconnect();
  }, []);

  const visibleLinks = allNavLinks.slice(0, visibleLinksCount);
  const hiddenLinks = allNavLinks.slice(visibleLinksCount);
  const hasHidden = hiddenLinks.length > 0;

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="absolute top-[-9999px] left-[-9999px] opacity-0 pointer-events-none">
        <ul className="flex items-center space-x-2 font-sans">
          {allNavLinks.map((link, index) => (
            <li
              key={link.href}
              ref={(el) => {
                linkItemRefs.current[index] = el;
              }}
              className="font-bold uppercase px-4 py-2"
            >
              {link.text}
            </li>
          ))}
        </ul>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between gap-3">
          <Link
            href="/"
            className="flex-shrink-0 flex items-center space-x-4 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/logos/dayofai.webp"
              alt="Day of AI Australia"
              width={50}
              height={50}
              className="object-contain"
            />
            <h1 className="text-2xl font-bold text-gray-900 font-dm-serif">
              Win the Farm
            </h1>
          </Link>

          <div
            ref={navContainerRef}
            className="hidden md:flex flex-grow justify-end items-center gap-2"
          >
            <nav className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {visibleLinks.map((link) => (
                    <NavigationMenuItem key={link.href}>
                      <Link href={link.href} legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "font-bold uppercase"
                          )}
                        >
                          {link.text}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  ))}

                  {/* "More" popover */}
                  {hasHidden && (
                    <NavigationMenuItem asChild>
                      <div className="relative" ref={moreRef}>
                        <button
                          type="button"
                          aria-haspopup="menu"
                          aria-expanded={moreOpen}
                          aria-controls="more-menu"
                          onClick={() => {
                            setMoreOpen((s) => !s);
                            setTimeout(() => firstMoreItemRef.current?.focus(), 0);
                          }}
                          onKeyDown={(e) => {
                            if (e.key === "ArrowDown") {
                              e.preventDefault();
                              setMoreOpen(true);
                              setTimeout(() => firstMoreItemRef.current?.focus(), 0);
                            }
                          }}
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "font-bold uppercase inline-flex items-center"
                          )}
                        >
                          More
                          <ChevronDown
                            className={cn(
                              "ml-2 h-4 w-4 transition-transform duration-200",
                              moreOpen && "rotate-180"
                            )}
                            aria-hidden="true"
                          />
                        </button>

                        {moreOpen && (
                          <div
                            id="more-menu"
                            role="menu"
                            className="absolute right-0 mt-2 w-[250px] rounded-md border bg-white shadow-lg focus:outline-none"
                          >
                            <ul className="grid gap-1 p-2">
                              {hiddenLinks.map((link, idx) => (
                                <li key={link.href} role="none">
                                  <Link
                                    href={link.href}
                                    role="menuitem"
                                    ref={idx === 0 ? firstMoreItemRef : undefined}
                                    className="block rounded-md px-3 py-2 text-sm uppercase font-bold hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
                                    onClick={() => setMoreOpen(false)}
                                  >
                                    {link.text}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </NavigationMenuItem>
                  )}
                </NavigationMenuList>
              </NavigationMenu>
            </nav>

            <div ref={registerBtnRef} className="pl-3 shrink-0">
              <a
                href="https://dayofaiaustralia.com/register-2025/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="font-bold text-black rounded-none bg-[#FDC300] hover:bg-yellow-500">
                  REGISTER NOW
                </Button>
              </a>
            </div>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4 font-sans uppercase">
              {allNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-bold hover:text-red-600 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.text}
                </Link>
              ))}
              <a
                href="https://dayofaiaustralia.com/register-2025/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4"
              >
                <Button className="font-bold text-black rounded-none bg-[#FDC300] hover:bg-yellow-500 w-full">
                  REGISTER NOW
                </Button>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
