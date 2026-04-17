import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { useLocation } from "wouter";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const STEPS = [
  {
    question: "Who is this stairlift for?",
    options: ["For me", "For my parent", "For my spouse", "For another family member"],
  },
  {
    question: "What kind of staircase is it?",
    options: ["Straight staircase", "Curved staircase", "Outdoor staircase", "Not sure or more than one staircase"],
  },
  {
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
  const [answers, setAnswers] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [form, setForm] = useState({ firstName: "", phone: "", email: "", zip: "" });
  const [, navigate] = useLocation();
  const { toast } = useToast();

  const mutation = useMutation({
    mutationFn: (data: typeof form & { answers: string[] }) =>
      apiRequest("POST", "/api/leads", {
        full_name: data.firstName,
        phone: data.phone,
        email: data.email,
        postal_code: data.zip,
        answers: data.answers,
      }),
    onSuccess: () => {
      navigate("/thank-you");
    },
    onError: () => {
      toast({
        title: "Something went wrong",
        description: "Please call us directly at 678-909-9558.",
        variant: "destructive",
      });
    },
  });

  const handleOptionClick = (option: string) => {
    setSelected(option);
    setTimeout(() => {
      setAnswers((prev) => [...prev, option]);
      setSelected(null);
      setStep((s) => s + 1);
    }, 180);
  };

  const submitForm = () => {
    if (!form.firstName || !form.phone || !form.zip) return;
    mutation.mutate({ ...form, answers });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitForm();
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
                    onClick={() => handleOptionClick(option)}
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

            {/* Card */}
            <div className="w-full max-w-[480px] bg-white rounded-2xl border border-[#e0e0e0] shadow-sm px-5 pt-5 pb-5">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xs font-semibold text-[#0c3254] font-['Inter',Helvetica] whitespace-nowrap">
                  Step {TOTAL_STEPS}/{TOTAL_STEPS}
                </span>
                <div className="flex-1 h-[3px] bg-[#0c3254] rounded-full" />
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div>
                  <label className={labelClass}>First Name</label>
                  <input type="text" placeholder="Abel" value={form.firstName} onChange={(e) => setForm((f) => ({ ...f, firstName: e.target.value }))} required data-testid="input-firstname" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Phone Number</label>
                  <input type="tel" placeholder="(555) 000-0000" value={form.phone} onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))} required data-testid="input-phone" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Email Address</label>
                  <input type="email" placeholder="you@example.com" value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} data-testid="input-email" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>ZIP Code</label>
                  <input type="text" placeholder="00000" value={form.zip} onChange={(e) => setForm((f) => ({ ...f, zip: e.target.value }))} required data-testid="input-zip" className={inputClass} />
                </div>
              </form>
            </div>

            {/* Submit button outside card */}
            <div className="w-full max-w-[320px] mt-4">
              <button
                onClick={submitForm}
                disabled={mutation.isPending}
                data-testid="button-submit-quote"
                className="w-full py-4 bg-[#0c3254] rounded-full font-semibold text-white text-xs tracking-widest uppercase font-['Inter',Helvetica] hover:bg-[#0a2a47] transition-colors disabled:opacity-60"
              >
                {mutation.isPending ? "Sending..." : "GET MY RECOMMENDATION"}
              </button>
            </div>
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
