import type { ReactNode } from "react";

export const pageLayoutClassName = "mx-auto w-full max-w-6xl px-6 py-14 sm:py-20 lg:px-8";

type PageHeadingProps = {
  children: ReactNode;
  description?: ReactNode;
  as?: "h1" | "h2";
  id?: string;
  align?: "left" | "center";
};

export function PageHeading({ children, description, as: Heading = "h1", id, align = "left" }: PageHeadingProps) {
  const centered = align === "center";
  return (
    <div data-slot="page-heading" className={`mb-10 sm:mb-12 ${centered ? "text-center" : "text-left"}`}>
      <Heading id={id} className="text-4xl font-normal leading-tight tracking-tight text-gray-900 sm:text-5xl">
        {children}
      </Heading>
      {description && (
        <p className={`mt-4 max-w-3xl text-lg leading-8 text-gray-600 ${centered ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
}
