import { useRef } from "react";
import { usePageTitle } from "@/hooks/use-page-title";

export const Disqualify = (): JSX.Element => {
  usePageTitle("Other Options | HomePro Stairlifts");
  const quoteFormRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-[#f9f9f9] w-full overflow-x-hidden">
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="w-full bg-[#0c3254] py-4 px-4" data-testid="announcement-bar">
          <p className="text-white text-center text-xs sm:text-sm md:text-lg tracking-[1.84px] leading-snug font-normal font-['Inter',Helvetica]">
            LOCAL STAIRLIFT SPECIALISTS | NO-PRESSURE, EVER | FAST INSTALLATION AVAILABLE
          </p>
        </div>
        <nav className="w-full bg-[#f3f3f3] px-4 md:px-12" data-testid="nav-bar">
          <div className="flex items-center justify-center py-4 md:py-6">
            <img className="h-12 md:h-14 object-contain" alt="HomePro Stairlifts logo" src="/figmaAssets/homepronewlogo-1920w-1.png" />
          </div>
        </nav>
      </header>

      <div className="h-[120px] md:h-[130px]" aria-hidden="true" />

      <main>
        <section className="relative w-full bg-[#f9f9f9]" data-testid="section-hero">
          <div ref={quoteFormRef} className="w-full max-w-3xl mx-auto px-4 md:px-8 pt-16 md:pt-24 pb-16 md:pb-24 flex flex-col items-center text-center gap-5">
            <h1 className="font-bold text-[#0c3254] text-4xl sm:text-5xl md:text-[52px] leading-tight font-['Sofia_Pro-SemiBold',Helvetica]">
              I'm sorry, at the moment you don't qualify for our services.
            </h1>
            <p className="text-[#333] text-sm sm:text-base font-normal font-['Inter',Helvetica]">
              If you think we made a mistake, or rather speak with someone now, call us:
            </p>
            <a href="tel:+16789099558" data-testid="link-call-hero" className="px-8 py-3.5 border border-[#0c3254] rounded-full font-semibold text-[#0c3254] text-sm tracking-[2px] uppercase font-['Inter',Helvetica] hover:bg-[#0c3254] hover:text-white transition-colors cursor-pointer whitespace-nowrap">
              CALL NOW 678-909-9558
            </a>
          </div>
        </section>
      </main>

      <footer className="w-full bg-[#f8fafc] border-t border-[#e2e8f0] py-6 md:py-8 px-4" data-testid="footer">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[#64748b] text-sm md:text-base font-['Inter',Helvetica] leading-relaxed">
            &copy; 2026 HomePro Mobility Solutions. All rights reserved. Licensed &amp; Insured.
          </p>
          <a href="https://homepromobility.com/privacy-policy/" target="_blank" rel="noopener noreferrer" data-testid="link-privacy-policy" className="inline-block mt-2 text-[#64748b] text-sm md:text-base font-['Inter',Helvetica] underline hover:text-[#0c3254] transition-colors">
            Privacy Policy
          </a>
        </div>
      </footer>
    </div>
  );
};
