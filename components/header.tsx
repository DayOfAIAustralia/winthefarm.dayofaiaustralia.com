"use client";

import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { SiteLink } from "@/components/site-link";
import { cn } from "@/lib/utils";
import { COMPETITION_NAME, REGISTER_URL } from "@/lib/competition";

const allNavLinks = [
  { href: "/how-to-play", text: "How to play" },
  { href: "/timeline", text: "Timeline" },
  { href: "/setting", text: "Story" },
  { href: "/rules", text: "Rules" },
  { href: "/learning", text: "Learning & ethics" },
  { href: "/about", text: "About us" },
  { href: "/scoring", text: "Scoring" },
];

const linkClassName =
  "inline-flex flex-row items-center whitespace-nowrap rounded-md px-3 py-2 text-sm font-bold uppercase text-gray-900 transition-colors hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 aria-[current=page]:bg-amber-50 aria-[current=page]:text-red-700 data-[active=true]:bg-amber-50 data-[active=true]:text-red-700";

export function Header() {
  const pathname = usePathname();
  const [desktopMenu, setDesktopMenu] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileButtonRef = useRef<HTMLButtonElement>(null);
  const closeMenus = () => {
    setDesktopMenu("");
    setMobileOpen(false);
  };

  useEffect(() => {
    const onPopState = () => {
      setDesktopMenu("");
      setMobileOpen(false);
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  return (
    <Collapsible open={mobileOpen} onOpenChange={setMobileOpen} asChild>
      <header
        className="sticky top-0 z-50 shrink-0 bg-white shadow-sm"
        onKeyDown={(event) => {
          if (event.key === "Escape" && mobileOpen) {
            setMobileOpen(false);
            mobileButtonRef.current?.focus();
          }
        }}
      >
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
              <NavigationMenu
                aria-label="Main navigation"
                viewport={false}
                value={desktopMenu}
                onValueChange={setDesktopMenu}
              >
                <NavigationMenuList>
                  {allNavLinks.map((link, index) => (
                    <NavigationMenuItem
                      key={link.href}
                      className={index < 2 ? undefined : index < 4 ? "hidden lg:block" : "hidden xl:block"}
                    >
                      <NavigationMenuLink asChild active={pathname === link.href} className={linkClassName}>
                        <SiteLink href={link.href} onNavigate={closeMenus}>
                          {link.text}
                        </SiteLink>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                  <NavigationMenuItem value="more" className="xl:hidden">
                    <NavigationMenuTrigger className={cn(linkClassName, "gap-1")}>
                      More
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="right-0 left-auto w-56 rounded-lg border-gray-200 bg-white p-2 shadow-lg md:w-56">
                      <ul>
                        {allNavLinks.slice(2).map((link, index) => (
                          <li key={link.href} className={index < 2 ? "lg:hidden" : undefined}>
                            <NavigationMenuLink asChild active={pathname === link.href} className={cn(linkClassName, "w-full")}>
                              <SiteLink href={link.href} onNavigate={closeMenus}>
                                {link.text}
                              </SiteLink>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <Button asChild className="rounded-none bg-[#FDC300] font-bold text-black hover:bg-yellow-500">
                <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer">REGISTER NOW</a>
              </Button>
            </div>

            <CollapsibleTrigger asChild>
              <Button
                ref={mobileButtonRef}
                type="button"
                variant="ghost"
                size="icon-lg"
                className="rounded-sm focus-visible:outline-2 focus-visible:outline-amber-500 md:hidden [&_svg]:size-6"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
              >
                {mobileOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
              </Button>
            </CollapsibleTrigger>
          </div>
        </div>

        <CollapsibleContent asChild>
          <nav aria-label="Mobile navigation" className="absolute inset-x-0 top-full max-h-[calc(100dvh-82px)] overflow-y-auto border-t border-b border-gray-200 bg-white px-4 py-4 shadow-md md:hidden">
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
        </CollapsibleContent>
      </header>
    </Collapsible>
  );
}
