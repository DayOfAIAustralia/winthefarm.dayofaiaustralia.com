"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, type ComponentProps } from "react";

const sectionPaths: Record<string, string> = {
  "/how-to-play": "how-to-play",
  "/timeline": "timeline",
};

function scrollToSection(id: string) {
  const frame = requestAnimationFrame(() => {
    document.getElementById(id)?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
      block: "start",
    });
  });

  return () => cancelAnimationFrame(frame);
}

// Also handles direct visits, refreshes and browser Back/Forward navigation.
export function HomeSectionScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const section = sectionPaths[pathname];
    if (section) return scrollToSection(section);
  }, [pathname]);

  return null;
}

type SiteLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
};

export function SiteLink({ href, onClick, onNavigate, scroll, ...props }: SiteLinkProps) {
  const section = sectionPaths[href];

  return (
    <Link
      {...props}
      href={href}
      scroll={section ? false : scroll}
      onNavigate={onNavigate}
      onClick={(event) => {
        onClick?.(event);
        if (
          event.defaultPrevented || event.button !== 0 || event.metaKey ||
          event.ctrlKey || event.shiftKey || event.altKey ||
          (props.target && props.target !== "_self")
        ) return;

        // These routes share the homepage. Keep it mounted when only changing sections.
        // Handle section clicks before route navigation, including repeat clicks.
        const pathname = window.location.pathname;
        if (section && (pathname === "/" || sectionPaths[pathname])) {
          onNavigate?.(event);
          if (event.defaultPrevented) return;
          event.preventDefault();
          if (pathname !== href) {
            window.history.pushState(null, "", href);
          } else {
            scrollToSection(section);
          }
        }
      }}
    />
  );
}
