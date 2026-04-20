import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePageTitle } from "@/hooks/use-page-title";

const stats = [
  { value: "27,000+", label: "Customers Served" },
  { value: "8,000+", label: "Zip Codes" },
  { value: "4.9/5", label: "Star Rating" },
  { value: "1,000+", label: "Genuine Reviews" },
];

const reviews = [
  {
    name: "Lindie Dordal",
    text: "I normally don't give Google reviews unless I receive 5 star service. We purchased our stairlift two years ago and it has been life-changing! Rhonda has treated us like family and has followed up making sure we are comfortable with our purchase, and staying safe in our home. Excellent customer service! I highly recommend Home Pro Mobility and Rhonda to anyone looking for a stairlift in the future.",
  },
  {
    name: "Allen Smith",
    text: "Had Emmanuel from HomePro Mobility come out today. Amazing young man. One of the nicest people you will ever meet. Really knows everything about their product and how to get you the best plan for your situation. Emmanuel made this whole process so much easier than I had imagined it would be. Thanks for all your help. This is going to make life for my wife so much easier and safer.",
  },
  {
    name: "Rodney Sanders",
    text: "Ben Schaefer did an outstanding job and made the whole process easy from start to finish. He was professional, knowledgeable, and took the time to explain everything clearly. You can tell he genuinely cares about doing the job right and making sure his customers are comfortable and confident with their mobility solutions. The installation was smooth, and he paid close attention to detail. I highly recommend Ben at HomePro Mobility to anyone looking for reliable service and a trustworthy professional.",
  },
];

export const ThankYou = (): JSX.Element => {
  usePageTitle("Thank You | HomePro Stairlifts");
  const reviewSliderRef = useRef<HTMLDivElement>(null);
  const scrollReview = (direction: "left" | "right") => {
    const slider = reviewSliderRef.current;
    if (!slider) return;
    const cardWidth = slider.querySelector("div")?.offsetWidth || 300;
    const gap = 16;
    slider.scrollBy({ left: direction === "left" ? -(cardWidth + gap) : cardWidth + gap, behavior: "smooth" });
  };

  return (
    <div className="bg-[#f9f9f9] w-full min-h-screen flex flex-col overflow-x-hidden">
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
          <div className="w-full max-w-3xl mx-auto px-4 md:px-8 pt-16 md:pt-24 pb-16 md:pb-24 flex flex-col items-center text-center gap-5">
            <h1 className="font-bold text-[#0c3254] text-4xl sm:text-5xl md:text-[52px] leading-tight font-['Sofia_Pro-SemiBold',Helvetica] md:whitespace-nowrap">
              Thanks, your answers are in.
            </h1>
            <p className="text-[#333] text-sm sm:text-base leading-relaxed font-normal font-['Inter',Helvetica] max-w-xl">
              A local Home Pro Mobility specialist will review your information and reach out shortly to help with the next step.
            </p>
            <p className="text-[#333] text-sm sm:text-base font-bold font-['Inter',Helvetica]">
              Please keep your phone nearby.
            </p>
            <p className="text-[#333] text-sm sm:text-base font-normal font-['Inter',Helvetica]">
              If you'd rather speak with someone now, you can also call:
            </p>
            <a href="tel:+16789099558" data-testid="link-call-hero" className="px-8 py-3.5 border border-[#0c3254] rounded-full font-semibold text-[#0c3254] text-sm tracking-[2px] uppercase font-['Inter',Helvetica] hover:bg-[#0c3254] hover:text-white transition-colors cursor-pointer whitespace-nowrap">
              CALL NOW 678-909-9558
            </a>
          </div>
        </section>

        <section className="w-full bg-[#f3f3f3] py-10 md:py-14 px-4" data-testid="section-stats">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1.5" data-testid={`stat-${stat.label.toLowerCase().replace(/\s/g, '-')}`}>
                <span className="font-extrabold text-[#0c3254] text-3xl sm:text-4xl md:text-[45px] font-['Plus_Jakarta_Sans',Helvetica]">{stat.value}</span>
                <span className="text-[#434654] text-sm md:text-base tracking-[2px] uppercase text-center font-['Inter',Helvetica]">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="w-full bg-white py-14 md:py-20 px-4 md:px-12" data-testid="section-reviews">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <div>
                <h2 className="font-semibold text-[#1a1c1c] text-xl md:text-2xl font-['Inter',Helvetica] mb-2">Customer reviews on Google</h2>
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map((s) => (
                      <svg key={s} className="w-5 h-5 text-[#f5a623]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                  <span className="text-[#434654] text-sm md:text-base font-['Inter',Helvetica]">4.9 rating of 710 reviews</span>
                </div>
              </div>
            </div>
            <div className="hidden md:grid md:grid-cols-3 gap-6">
              {reviews.map((review, i) => (
                <div key={i} className="bg-[#f9f9f9] rounded-2xl p-6 md:p-8 border border-[#eee]" data-testid={`card-review-${i}`}>
                  <div className="flex gap-0.5 mb-4">
                    {[1,2,3,4,5].map((s) => (
                      <svg key={s} className="w-5 h-5 text-[#f5a623]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                  <img src="/figmaAssets/google-icon.png" alt="Google" className="w-6 h-6 mb-4" />
                  <p className="text-[#434654] text-sm md:text-base font-['Inter',Helvetica] leading-relaxed mb-6">
                    {review.text}
                  </p>
                  <p className="font-semibold text-[#1a1c1c] text-sm font-['Inter',Helvetica]">{review.name}</p>
                </div>
              ))}
            </div>
            <div className="md:hidden">
              <div ref={reviewSliderRef} className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 scrollbar-hide">
                {reviews.map((review, i) => (
                  <div key={i} className="bg-[#f9f9f9] rounded-2xl p-6 border border-[#eee] snap-center flex-shrink-0 w-[85vw]" data-testid={`card-review-mobile-${i}`}>
                    <div className="flex gap-0.5 mb-4">
                      {[1,2,3,4,5].map((s) => (
                        <svg key={s} className="w-5 h-5 text-[#f5a623]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      ))}
                    </div>
                    <img src="/figmaAssets/google-icon.png" alt="Google" className="w-6 h-6 mb-4" />
                    <p className="text-[#434654] text-sm font-['Inter',Helvetica] leading-relaxed mb-6">
                      {review.text}
                    </p>
                    <p className="font-semibold text-[#1a1c1c] text-sm font-['Inter',Helvetica]">{review.name}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-4 pt-2">
                <button onClick={() => scrollReview("left")} className="w-10 h-10 rounded-full border border-[#0c3254] flex items-center justify-center hover:bg-[#0c3254] hover:text-white transition-colors text-[#0c3254]" data-testid="button-review-prev" aria-label="Previous review">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={() => scrollReview("right")} className="w-10 h-10 rounded-full border border-[#0c3254] flex items-center justify-center hover:bg-[#0c3254] hover:text-white transition-colors text-[#0c3254]" data-testid="button-review-next" aria-label="Next review">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full bg-[#f8fafc] border-t border-[#e2e8f0] py-10 md:py-14 px-4" data-testid="footer">
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
