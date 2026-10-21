export function HelpBanner() {
  return (
    <div className="bg-[#FDC300] text-black">
      <p className="mx-auto max-w-screen-xl px-4 py-1.5 text-center text-xs font-bold tracking-wide sm:px-6 sm:text-sm lg:px-8">
        Need help? Email{" "}
        <a
          href="mailto:hello@dayofaiaustralia.com"
          className="normal-case underline decoration-black/40 underline-offset-2 hover:decoration-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          hello@dayofaiaustralia.com
        </a>
      </p>
    </div>
  );
}
