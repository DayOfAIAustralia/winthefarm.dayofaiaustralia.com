'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';

export default function GTMAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastPage = useRef<string | null>(null);

  useEffect(() => {
    const query = searchParams.toString();
    const url = query ? `${pathname}?${query}` : pathname;
    if (lastPage.current === url) return;
    lastPage.current = url;

    // Queue the initial pageview even when the GTM script has not loaded yet.
    window.dataLayer ??= [];
    window.dataLayer.push({ event: 'pageview', page: url });
  }, [pathname, searchParams]);

  return null;
}
