import { Label } from "@/components/ui/label";
import { useRef } from "react";

const formFields = [
  { id: "fullName", label: "FULL NAME", placeholder: "John Doe", type: "text" },
  {
    id: "phoneNumber",
    label: "PHONE NUMBER",
    placeholder: "(555) 000-0000",
    type: "tel",
  },
  { id: "zipCode", label: "ZIP CODE", placeholder: "30301", type: "text" },
];

const stars = [1, 2, 3, 4, 5];

export const MacbookPro = (): JSX.Element => {
  const quoteFormRef = useRef<HTMLDivElement>(null);

  const scrollToQuoteForm = () => {
    quoteFormRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white overflow-hidden w-full min-h-screen flex flex-col">
      <header>
        <div className="w-full bg-[#0c3254] py-4 px-4">
          <p className="text-white text-center text-sm md:text-lg tracking-[1.84px] leading-snug font-normal font-['Inter',Helvetica]">
            LOCAL STAIRLIFT SPECIALISTS | NO-PRESSURE, EVER | FAST INSTALLATION AVAILABLE
          </p>
        </div>

        <nav className="w-full bg-[#f3f3f3] py-6 md:py-8 px-4 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <img
            className="h-12 md:h-14 object-contain"
            alt="HomePro Stairlifts logo"
            src="/figmaAssets/homepronewlogo-1920w-1.png"
          />
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a
              href="tel:6789099558"
              className="flex items-center justify-center px-8 py-3 rounded-full border border-[#0c3254] font-semibold text-[#0c3254] text-sm md:text-base tracking-wide font-['Inter',Helvetica] hover:bg-[#0c3254] hover:text-white transition-colors cursor-pointer whitespace-nowrap"
            >
              CALL NOW 678-909-9558
            </a>
            <button
              onClick={scrollToQuoteForm}
              className="flex items-center justify-center px-8 py-3 rounded-full bg-[#0c3254] font-semibold text-[#f3f3f3] text-sm md:text-base tracking-wide font-['Inter',Helvetica] hover:bg-[#0a2844] transition-colors cursor-pointer whitespace-nowrap"
            >
              GET YOUR FREE QUOTE
            </button>
          </div>
        </nav>
      </header>

      <main className="relative w-full flex-1">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt=""
          src="/figmaAssets/screenshot-2026-04-02-at-11-53-42-am-1.png"
        />
        <div className="absolute inset-0 bg-black/45" aria-hidden="true" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-12 py-12 md:py-20 flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          <section className="flex-1 flex flex-col gap-6 md:gap-8 max-w-2xl">
            <h1 className="font-semibold text-white text-4xl md:text-5xl lg:text-[64px] leading-tight font-['Sofia_Pro-SemiBold',Helvetica]">
              The Stairs Shouldn&apos;t Decide Whether You Stay in Your Home.
            </h1>

            <p className="text-white text-lg md:text-xl leading-relaxed font-normal font-['Inter',Helvetica] max-w-xl">
              If the stairs have cut off part of your home, talk to a real local
              stairlift specialist today. We&apos;ll help you understand your options
              and find the right next step.
            </p>

            <a
              href="tel:6789099558"
              className="inline-flex items-center justify-center w-fit px-10 py-5 bg-[#eb5c44] rounded-full font-semibold text-white text-lg md:text-xl tracking-wide font-['Inter',Helvetica] hover:bg-[#d4503b] transition-colors cursor-pointer whitespace-nowrap"
            >
              CALL NOW 678-909-9558
            </a>

            <aside className="inline-flex flex-col items-start justify-center bg-white rounded-lg overflow-hidden shadow-lg w-fit" aria-label="Google customer rating">
              <div className="w-full h-1 bg-[#34a853]" aria-hidden="true" />
              <div className="flex items-center gap-3 px-5 py-4">
                <img
                  className="w-14 h-14"
                  alt="Google reviews icon"
                  src="/figmaAssets/group-3.png"
                />
                <div className="flex flex-col gap-1.5">
                  <span className="font-bold text-[--dark-grey] text-sm font-['Plus_Jakarta_Sans',Helvetica]">
                    Google Rating
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="font-extrabold text-[#fea500] text-xl font-['Plus_Jakarta_Sans',Helvetica]">
                      4.9
                    </span>
                    <div className="flex items-center" role="img" aria-label="4.9 out of 5 stars">
                      {stars.map((star) => (
                        <div key={star} className="w-6 h-6">
                          <img
                            className="w-full h-full"
                            alt=""
                            src="/figmaAssets/star-1.svg"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <span className="text-[--grey] text-xs font-['Plus_Jakarta_Sans',Helvetica]">
                    See all our reviews
                  </span>
                </div>
              </div>
            </aside>
          </section>

          <section
            ref={quoteFormRef}
            className="w-full lg:w-[480px] xl:w-[520px] flex-shrink-0 scroll-mt-8"
            aria-label="Free quote request form"
          >
            <div className="flex flex-col gap-3 p-8 md:p-9 bg-white rounded-2xl shadow-xl border border-[#c3c6d64c]">
              <h2 className="font-semibold text-[#0c3254] text-2xl md:text-[28px] leading-snug text-center font-['Poppins',Helvetica]">
                Get Your Free Quote
              </h2>

              <p className="text-[#434654] text-base md:text-lg text-center leading-snug font-['Inter',Helvetica]">
                Enter your details and a mobility specialist will contact you shortly.
              </p>

              <form className="flex flex-col gap-4 pt-4" onSubmit={(e) => e.preventDefault()}>
                {formFields.map((field) => (
                  <div key={field.id} className="flex flex-col gap-1">
                    <Label
                      htmlFor={field.id}
                      className="text-[#434654] text-sm tracking-wide font-['Inter',Helvetica]"
                    >
                      {field.label}
                    </Label>
                    <input
                      id={field.id}
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-4 bg-[#eeeeee] rounded-lg text-lg font-['Inter',Helvetica] text-gray-900 placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-[#0c3254]/30"
                    />
                  </div>
                ))}

                <button
                  type="submit"
                  className="w-full py-4 bg-[#eb5c44] rounded-full font-bold text-white text-lg md:text-xl shadow-md hover:bg-[#d4503b] transition-colors cursor-pointer font-['Inter',Helvetica]"
                >
                  GET YOUR FREE QUOTE
                </button>
              </form>

              <p className="text-center text-[#434654] text-xs italic pt-2 font-['Inter',Helvetica]">
                No-pressure guarantee. We respect your privacy.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
