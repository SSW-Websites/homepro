import { useState } from "react";
import { ChevronRight } from "lucide-react";

const STEPS = [
  {
    name: "who_is_this_stairlift_for",
    question: "Who is this stairlift for?",
    options: ["For me", "For my parent", "For my spouse", "For another family member"],
  },
  {
    name: "kind_of_staircase",
    question: "What kind of staircase is it?",
    options: ["Straight staircase", "Curved staircase", "Outdoor staircase", "Not sure or more than one staircase"],
  },
  {
    name: "how_soon_to_solve",
    question: "How soon are you hoping to solve this?",
    options: ["As soon as possible", "In the next few weeks", "Just researching for now", "Not sure yet"],
  },
];

const TOTAL_STEPS = STEPS.length + 1;

const inputClass =
  "w-full border border-[#d1d5db] rounded-lg px-3 py-2.5 text-sm text-[#1a1c1c] font-['Inter',Helvetica] focus:outline-none focus:border-[#0c3254] bg-white placeholder:text-[#9ca3af]";

const labelClass =
  "block text-[#434654] text-[10px] tracking-widest uppercase font-['Inter',Helvetica] mb-1";

export default function HomeStep1() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [selected, setSelected] = useState<string | null>(null);

  const handleOptionClick = (optionName: string, option: string) => {
    setSelected(option);
    setTimeout(() => {
      setAnswers((prev) => ({ ...prev, [optionName]: option }));
      setSelected(null);
      setStep((s) => s + 1);
    }, 180);
  };

  const isContactStep = step === STEPS.length;
  const currentStep = STEPS[step];
  const stepLabel = `Step ${step + 1}/${TOTAL_STEPS}`;

  return (
    <div className="bg-[#f9f9f9] w-full min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full">
        <div className="w-full bg-[#0c3254] py-3 px-4">
          <p className="text-white text-center text-xs sm:text-sm tracking-[1.84px] leading-snug font-normal font-['Inter',Helvetica]">
            LOCAL STAIRLIFT SPECIALISTS | NO-PRESSURE, EVER | FAST INSTALLATION AVAILABLE
          </p>
        </div>
        <nav className="w-full bg-[#f3f3f3] px-4">
          <div className="flex items-center justify-center py-5">
            <a href="/">
              <img className="h-12 object-contain" alt="HomePro Stairlifts logo" src="/figmaAssets/homepronewlogo-1920w-1.png" />
            </a>
          </div>
        </nav>
      </header>

      {/* Main */}
      <main className="flex flex-col items-center px-4 pt-16 pb-20">
        {!isContactStep ? (
          <>
            <h1 className="font-bold text-[#0c3254] text-4xl md:text-5xl text-center font-['Inter',Helvetica] mb-8 tracking-tight">
              {currentStep.question}
            </h1>

            {/* Card */}
            <div className="w-full max-w-[320px] bg-white rounded-2xl border border-[#e0e0e0] shadow-sm px-5 pt-5 pb-5">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold text-[#0c3254] font-['Inter',Helvetica] whitespace-nowrap">
                  {stepLabel}
                </span>
                <div className="flex-1 flex items-center gap-1">
                  <div className="h-[3px] w-8 bg-[#0c3254] rounded-full" />
                  <div className="flex-1 h-[3px] bg-[#d1d5db] rounded-full" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                {currentStep.options.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => handleOptionClick(currentStep.name, option)}
                    data-testid={`option-${option.toLowerCase().replace(/\s/g, "-").replace(/[^a-z0-9-]/g, "")}`}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg border text-left transition-colors font-['Inter',Helvetica] text-sm font-normal
                      ${selected === option
                        ? "bg-[#0c3254] border-[#0c3254] text-white"
                        : "bg-white border-[#d1d5db] text-[#1a1c1c] hover:border-[#0c3254]"
                      }`}
                  >
                    <span>{option}</span>
                    <ChevronRight className={`w-4 h-4 flex-shrink-0 ${selected === option ? "text-white" : "text-[#9ca3af]"}`} />
                  </button>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            <h1 className="font-bold text-[#0c3254] text-4xl md:text-5xl text-center font-['Inter',Helvetica] mb-8 tracking-tight max-w-2xl">
              Where should we send your recommendation?
            </h1>

            <form action="/api/leads" method="POST" className="w-full flex flex-col items-center">
              {/* Hidden inputs with the answers from previous steps */}
              {STEPS.map((s) => (
                <input key={s.name} type="hidden" name={s.name} value={answers[s.name] || ""} />
              ))}

              {/* Card */}
              <div className="w-full max-w-[480px] bg-white rounded-2xl border border-[#e0e0e0] shadow-sm px-5 pt-5 pb-5">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-xs font-semibold text-[#0c3254] font-['Inter',Helvetica] whitespace-nowrap">
                    Step {TOTAL_STEPS}/{TOTAL_STEPS}
                  </span>
                  <div className="flex-1 h-[3px] bg-[#0c3254] rounded-full" />
                </div>

                <div className="flex flex-col gap-3">
                  <div>
                    <label className={labelClass}>First Name</label>
                    <input type="text" name="full_name" placeholder="Abel" required data-testid="input-firstname" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Phone Number</label>
                    <input type="tel" name="phone" placeholder="(555) 000-0000" required data-testid="input-phone" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Email Address</label>
                    <input type="email" name="email" placeholder="you@example.com" data-testid="input-email" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>ZIP Code</label>
                    <input type="text" name="postal_code" placeholder="00000" required data-testid="input-zip" className={inputClass} />
                  </div>
                </div>
              </div>

              {/* Submit button outside card */}
              <div className="w-full max-w-[320px] mt-4">
                <input
                  type="submit"
                  value="GET MY RECOMMENDATION"
                  data-testid="button-submit-quote"
                  className="w-full py-4 bg-[#0c3254] rounded-full font-semibold text-white text-xs tracking-widest uppercase font-['Inter',Helvetica] hover:bg-[#0a2a47] transition-colors cursor-pointer"
                />
              </div>
            </form>
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="w-full bg-[#f8fafc] border-t border-[#e2e8f0] py-10 md:py-14 px-4" data-testid="footer">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[#64748b] text-sm md:text-base font-['Inter',Helvetica] leading-relaxed">
            &copy; 2026 HomePro Mobility Solutions. All rights reserved. Licensed &amp; Insured.
          </p>
        </div>
      </footer>
    </div>
  );
}
