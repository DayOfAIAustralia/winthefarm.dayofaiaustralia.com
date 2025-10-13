'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const pageview = (url: string) => {
  if (typeof window.dataLayer !== 'undefined') {
    window.dataLayer.push({
      event: 'pageview',
      page: url,
    });
  }
};

export default function GTMAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + searchParams.toString();
    pageview(url);
  }, [pathname, searchParams]); // Fire effect on path or params change

  return null;
}