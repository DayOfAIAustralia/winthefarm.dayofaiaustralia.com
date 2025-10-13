// types/gtm.d.ts

declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}

export {};