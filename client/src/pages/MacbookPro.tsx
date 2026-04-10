import { Label } from "@/components/ui/label";
import { useRef } from "react";
import { Phone, ClipboardList, FileText, Wrench, HeadphonesIcon, ShieldCheck, ArrowRight } from "lucide-react";
import iconLocal from "@assets/Icon_(1)_1775843559607.png";
import iconBadge from "@assets/Icon_(2)_1775843559614.png";
import iconPeople from "@assets/Icon_(3)_1775843559614.png";
import iconWrench from "@assets/Icon_1775843559614.png";

const formFields = [
  { id: "fullName", label: "FULL NAME", placeholder: "John Doe", type: "text" },
  { id: "phoneNumber", label: "PHONE NUMBER", placeholder: "(555) 000-0000", type: "tel" },
  { id: "zipCode", label: "ZIP CODE", placeholder: "30301", type: "text" },
];

const stars = [1, 2, 3, 4, 5];

const stats = [
  { value: "27,000+", label: "Customers Served" },
  { value: "8,000+", label: "Zip Codes" },
  { value: "4.9/5", label: "Star Rating" },
  { value: "1,000+", label: "Genuine Reviews" },
];

const trustFeatures = [
  { icon: iconPeople, title: "Local team", desc: "Not a franchise, but your neighbors who care." },
  { icon: iconBadge, title: "Harmar Specialists", desc: "Installing only the industry gold-standard." },
  { icon: iconWrench, title: "Expert Installation", desc: "Factory-trained technicians for every job." },
  { icon: iconLocal, title: "Ongoing Support", desc: "We're here for the life of your lift." },
];

const roadmapSteps = [
  { icon: Phone, title: "1. Phone Consultation", desc: "A quick chat to understand your staircase layout and mobility goals." },
  { icon: ClipboardList, title: "2. Recommendations", desc: "We provide personalized options that fit your home and budget perfectly." },
  { icon: FileText, title: "3. Same-Day Quote", desc: "No waiting. Know exactly what it costs with no hidden fees later." },
  { icon: Wrench, title: "4. Expert Installation", desc: "Our local technicians install most lifts in just a few hours with zero mess." },
  { icon: HeadphonesIcon, title: "5. Ongoing Support", desc: "We're just a phone call away for any maintenance or questions." },
  { icon: ShieldCheck, title: "6. Lifetime Warranty", desc: "Peace of mind guaranteed for as long as you own your stairlift." },
];

const faqs = [
  {
    q: "How much does a stairlift actually cost?",
    a: "Cost varies by your staircase type (straight vs. curved). We provide transparent, all-in pricing with no hidden fees during your free visit.",
  },
  {
    q: "Does Medicare cover stairlifts?",
    a: "Typically, standard Medicare does not cover stairlifts, as they are considered home modifications. However, we can discuss various payment options and local programs that might help.",
  },
  {
    q: "What if I'm not ready to commit?",
    a: "That is perfectly fine. Our goal is to provide you with the information you need. We'll leave you with a quote and a brochure, and you can call us when you're ready.",
  },
  {
    q: "Will it look like a medical facility in my home?",
    a: "Absolutely not. Modern stairlifts are designed to be elegant and discreet, with slim profiles and colors that complement your home's decor.",
  },
];

export const MacbookPro = (): JSX.Element => {
  const quoteFormRef = useRef<HTMLDivElement>(null);

  const scrollToQuoteForm = () => {
    quoteFormRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#f9f9f9] overflow-hidden w-full min-h-screen flex flex-col">
      <header>
        <div className="w-full bg-[#0c3254] py-4 px-4" data-testid="announcement-bar">
          <p className="text-white text-center text-xs sm:text-sm md:text-lg tracking-[1.84px] leading-snug font-normal font-['Inter',Helvetica]">
            LOCAL STAIRLIFT SPECIALISTS | NO-PRESSURE, EVER | FAST INSTALLATION AVAILABLE
          </p>
        </div>
        <nav className="w-full bg-[#f3f3f3] py-6 md:py-8 px-4 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4" data-testid="nav-bar">
          <img className="h-12 md:h-14 object-contain" alt="HomePro Stairlifts logo" src="/figmaAssets/homepronewlogo-1920w-1.png" />
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a href="tel:6789099558" data-testid="link-call-header" className="flex items-center justify-center px-8 py-3 rounded-full border border-[#0c3254] font-semibold text-[#0c3254] text-sm md:text-base tracking-wide font-['Inter',Helvetica] hover:bg-[#0c3254] hover:text-white transition-colors cursor-pointer whitespace-nowrap">
              CALL NOW 678-909-9558
            </a>
            <button onClick={scrollToQuoteForm} data-testid="button-quote-header" className="flex items-center justify-center px-8 py-3 rounded-full bg-[#0c3254] font-semibold text-[#f3f3f3] text-sm md:text-base tracking-wide font-['Inter',Helvetica] hover:bg-[#0a2844] transition-colors cursor-pointer whitespace-nowrap">
              GET YOUR FREE QUOTE
            </button>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative w-full" data-testid="section-hero">
          <img className="absolute inset-0 w-full h-full object-cover" alt="" src="/figmaAssets/screenshot-2026-04-02-at-11-53-42-am-1.png" />
          <div className="absolute inset-0 bg-black/45" aria-hidden="true" />
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-12 py-12 md:py-20 flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
            <div className="flex-1 flex flex-col gap-6 md:gap-8 max-w-2xl">
              <h1 className="font-semibold text-white text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-tight font-['Sofia_Pro-SemiBold',Helvetica]">
                The Stairs Shouldn&apos;t Decide Whether You Stay in Your Home.
              </h1>
              <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed font-normal font-['Inter',Helvetica] max-w-xl">
                If the stairs have cut off part of your home, talk to a real local stairlift specialist today. We&apos;ll help you understand your options and find the right next step.
              </p>
              <a href="tel:6789099558" data-testid="link-call-hero" className="inline-flex items-center justify-center w-fit px-8 sm:px-10 py-4 sm:py-5 bg-[#eb5c44] rounded-full font-semibold text-white text-base sm:text-lg md:text-xl tracking-wide font-['Inter',Helvetica] hover:bg-[#d4503b] transition-colors cursor-pointer whitespace-nowrap">
                CALL NOW 678-909-9558
              </a>
              <aside className="inline-flex flex-col items-start justify-center bg-white rounded-lg overflow-hidden shadow-lg w-fit" aria-label="Google customer rating">
                <div className="w-full h-1 bg-[#34a853]" aria-hidden="true" />
                <div className="flex items-center gap-3 px-5 py-4">
                  <img className="w-14 h-14" alt="Google reviews icon" src="/figmaAssets/group-3.png" />
                  <div className="flex flex-col gap-1.5">
                    <span className="font-bold text-[--dark-grey] text-sm font-['Plus_Jakarta_Sans',Helvetica]">Google Rating</span>
                    <div className="flex items-center gap-3">
                      <span className="font-extrabold text-[#fea500] text-xl font-['Plus_Jakarta_Sans',Helvetica]">4.9</span>
                      <div className="flex items-center" role="img" aria-label="4.9 out of 5 stars">
                        {stars.map((star) => (
                          <div key={star} className="w-6 h-6">
                            <img className="w-full h-full" alt="" src="/figmaAssets/star-1.svg" />
                          </div>
                        ))}
                      </div>
                    </div>
                    <span className="text-[--grey] text-xs font-['Plus_Jakarta_Sans',Helvetica]">See all our reviews</span>
                  </div>
                </div>
              </aside>
            </div>
            <div ref={quoteFormRef} className="w-full lg:w-[480px] xl:w-[520px] flex-shrink-0 scroll-mt-8" data-testid="section-quote-form">
              <div className="flex flex-col gap-3 p-8 md:p-9 bg-white rounded-2xl shadow-xl border border-[#c3c6d64c]">
                <h2 className="font-semibold text-[#0c3254] text-2xl md:text-[28px] leading-snug text-center font-['Poppins',Helvetica]">Get Your Free Quote</h2>
                <p className="text-[#434654] text-base md:text-lg text-center leading-snug font-['Inter',Helvetica]">Enter your details and a mobility specialist will contact you shortly.</p>
                <form className="flex flex-col gap-4 pt-4" onSubmit={(e) => e.preventDefault()}>
                  {formFields.map((field) => (
                    <div key={field.id} className="flex flex-col gap-1">
                      <Label htmlFor={field.id} className="text-[#434654] text-sm tracking-wide font-['Inter',Helvetica]">{field.label}</Label>
                      <input id={field.id} type={field.type} placeholder={field.placeholder} data-testid={`input-${field.id}`} className="w-full px-4 py-4 bg-[#eeeeee] rounded-lg text-lg font-['Inter',Helvetica] text-gray-900 placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-[#0c3254]/30" />
                    </div>
                  ))}
                  <button type="submit" data-testid="button-submit-quote" className="w-full py-4 bg-[#eb5c44] rounded-full font-bold text-white text-lg md:text-xl shadow-md hover:bg-[#d4503b] transition-colors cursor-pointer font-['Inter',Helvetica]">GET YOUR FREE QUOTE</button>
                </form>
                <p className="text-center text-[#434654] text-xs italic pt-2 font-['Inter',Helvetica]">No-pressure guarantee. We respect your privacy.</p>
              </div>
            </div>
          </div>
          <p className="relative z-10 text-center text-white text-sm sm:text-base md:text-xl font-['Inter',Helvetica] pb-8 px-4">Free In-Home Visit &nbsp;|&nbsp; Free Quote</p>
        </section>

        {/* Stats Section */}
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

        {/* Trust Section */}
        <section className="w-full bg-[#f9f9f9] py-14 md:py-20 px-4 md:px-12" data-testid="section-trust">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            <div className="flex-1 max-w-2xl">
              <h2 className="font-semibold text-[#0c3254] text-2xl sm:text-3xl md:text-[42px] leading-snug font-['Poppins',Helvetica] mb-6">
                Trusted by families who want a safer way to stay at home
              </h2>
              <p className="text-[#434654] text-base md:text-lg leading-relaxed font-['Inter',Helvetica] mb-8">
                We&apos;re a local team of licensed mobility specialists who do one thing well: help you figure out the safest, most practical solution for your unique home and needs. No corporate bureaucracy, just honest help.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                {trustFeatures.map((feat) => (
                  <div key={feat.title} className="flex gap-4 items-start">
                    <div className="w-8 flex-shrink-0 flex items-center justify-center mt-1">
                      <img src={feat.icon} alt="" className="w-full h-auto" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1a1c1c] text-lg font-['Plus_Jakarta_Sans',Helvetica]">{feat.title}</h3>
                      <p className="text-[#434654] text-sm md:text-base font-['Inter',Helvetica] leading-relaxed">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-[420px] xl:w-[480px] flex-shrink-0">
              <div className="bg-white border border-[#eee] rounded-2xl shadow-sm overflow-hidden p-6 md:p-8 flex flex-col gap-5">
                <div className="rounded-xl overflow-hidden aspect-video">
                  <img className="w-full h-full object-cover" alt="Stairlift installation by HomePro team" src="/figmaAssets/conversation-card.jpg" />
                </div>
                <h3 className="font-bold text-[#1a1c1c] text-xl md:text-2xl font-['Plus_Jakarta_Sans',Helvetica] pt-2">Start with a Conversation</h3>
                <p className="text-[#434654] text-sm md:text-base font-['Inter',Helvetica] leading-relaxed">No high-pressure sales. Just a local expert answering your questions.</p>
                <a href="tel:6789099558" data-testid="link-speak-expert" className="w-full py-4 bg-[#eb5c44] rounded-full font-semibold text-white text-base md:text-lg text-center hover:bg-[#d4503b] transition-colors cursor-pointer font-['Inter',Helvetica] block">
                  Speak to an Expert
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section className="w-full bg-[#0c3254] py-14 md:py-20 px-4 md:px-12" data-testid="section-roadmap">
          <div className="max-w-6xl mx-auto">
            <p className="text-[#f9f9f9] text-sm md:text-base tracking-[1.6px] uppercase text-center font-['Inter',Helvetica] mb-4">The Roadmap</p>
            <h2 className="font-semibold text-[#f9f9f9] text-2xl sm:text-3xl md:text-4xl text-center font-['Poppins',Helvetica] mb-10 md:mb-14">
              A simple, 6-step path to independence
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {roadmapSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="bg-white rounded-xl border-t-4 border-[#0c3254] p-6 md:p-8 shadow-md flex flex-col gap-3" data-testid={`step-${step.title.split('.')[0].trim()}`}>
                    <Icon className="w-7 h-7 text-[#0c3254]" />
                    <h3 className="text-[#1a1c1c] text-lg md:text-xl font-normal font-['Inter',Helvetica] pt-2">{step.title}</h3>
                    <p className="text-[#434654] text-sm font-['Inter',Helvetica] leading-relaxed">{step.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose HomePro Section */}
        <section className="w-full bg-white py-14 md:py-20 px-4 md:px-12" data-testid="section-why-choose">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            <div className="flex-1 max-w-xl">
              <h2 className="font-semibold text-[#00328c] text-2xl sm:text-3xl md:text-[36px] leading-tight font-['Poppins',Helvetica] mb-8">
                Why thousands of families choose HomePro Mobility
              </h2>
              <div className="flex flex-col gap-10">
                {[
                  { icon: "/figmaAssets/icon-local-team.png", title: "Local Team, Not a Call Center", desc: "When you call us, you speak to someone who knows your neighborhood and can be at your door within 24 hours." },
                  { icon: "/figmaAssets/icon-no-pressure.png", title: "No-Pressure Guidance", desc: "We provide the facts and the figures. You make the decision on your own timeline. No aggressive follow-ups." },
                  { icon: "/figmaAssets/icon-fast-path.png", title: "The Fast Path to Safety", desc: "From first call to full installation, we prioritize speed without sacrificing the quality of the fit." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-full bg-[rgba(0,50,140,0.1)] flex items-center justify-center flex-shrink-0">
                      <img src={item.icon} alt="" className="w-6 h-auto object-contain" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1a1c1c] text-lg md:text-xl font-['Inter',Helvetica] mb-2">{item.title}</h3>
                      <p className="text-[#434654] text-sm md:text-base font-['Inter',Helvetica] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 max-w-lg lg:max-w-none">
              <div className="rounded-xl overflow-hidden shadow-[0px_24px_40px_-10px_rgba(26,28,28,0.05)]">
                <img src="/figmaAssets/why-choose-stairlift.jpg" alt="Stairlift chair installed in a home" className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Google Reviews Section */}
        <section className="w-full bg-white pb-14 md:pb-20 px-4 md:px-12" data-testid="section-reviews">
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
                  <span className="text-[#434654] text-sm md:text-base font-['Inter',Helvetica]">5.0 rating of 710 reviews</span>
                </div>
              </div>
              <button
                onClick={() => quoteFormRef.current?.scrollIntoView({ behavior: "smooth" })}
                className="bg-[#0c3254] text-white font-semibold text-sm md:text-base px-8 py-3 rounded-full hover:bg-[#0a2a47] transition-colors uppercase tracking-wider font-['Inter',Helvetica]"
                data-testid="button-get-quote-reviews"
              >
                Get Your Free Quote
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1,2,3].map((i) => (
                <div key={i} className="bg-[#f9f9f9] rounded-2xl p-6 md:p-8 border border-[#eee]" data-testid={`card-review-${i}`}>
                  <div className="flex gap-0.5 mb-4">
                    {[1,2,3,4,5].map((s) => (
                      <svg key={s} className="w-5 h-5 text-[#f5a623]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                  <img src="/figmaAssets/google-icon.png" alt="Google" className="w-6 h-6 mb-4" />
                  <p className="text-[#434654] text-sm md:text-base font-['Inter',Helvetica] leading-relaxed mb-6">
                    The marketing campaign they created for us was outstanding, and we saw significant engagement. However, I wish they had provided more frequent updates during the process. Overall, great work! Highly recommended!
                  </p>
                  <div className="flex items-center gap-3">
                    <div>
                      <p className="font-semibold text-[#1a1c1c] text-sm font-['Inter',Helvetica]">Nathan Scott</p>
                      <p className="text-[#434654] text-xs font-['Inter',Helvetica]">CEO, Scott Enterprises</p>
                    </div>
                  </div>
                  <img src="/figmaAssets/reviewer-avatar.png" alt="Nathan Scott" className="w-8 h-8 rounded-full mt-3" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Showcase Section */}
        <section className="w-full bg-[#f3f3f3] py-14 md:py-20 px-4 md:px-12" data-testid="section-product-showcase">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
              <div>
                <h2 className="font-semibold text-[#0c3254] text-3xl sm:text-4xl md:text-5xl lg:text-[60px] tracking-tight font-['Poppins',Helvetica] leading-tight">
                  Engineered for Reliability
                </h2>
                <p className="text-[#424752] text-base md:text-xl font-['Public_Sans',Helvetica] mt-4">
                  Choose the lift that perfectly matches your home&apos;s architecture.
                </p>
              </div>
              <a href="#compare" className="flex items-center gap-2 text-[#0c3254] font-bold text-base md:text-lg font-['Manrope',Helvetica] hover:underline whitespace-nowrap" data-testid="link-view-models">
                View Models <ArrowRight className="w-5 h-4" />
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {["Straight Stairlift", "Curved Stairlift", "Outdoor Stairlift"].map((name) => (
                <div key={name} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#eee]" data-testid={`card-product-${name.toLowerCase().replace(/\s/g, '-')}`}>
                  <div className="aspect-[4/3] overflow-hidden">
                    <img className="w-full h-full object-cover" alt={`${name} installed in a home`} src="/figmaAssets/product-image.jpg" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-[#0c3254] text-xl font-['Plus_Jakarta_Sans',Helvetica] mb-2">{name}</h3>
                    <p className="text-[#434654] text-sm font-['Inter',Helvetica] leading-relaxed mb-4">Reliable, quiet operation designed for your comfort and safety.</p>
                    <a href="tel:6789099558" aria-label={`Learn more about ${name}`} data-testid={`link-learn-more-${name.toLowerCase().replace(/\s/g, '-')}`} className="text-[#0c3254] font-bold text-sm font-['Manrope',Helvetica] flex items-center gap-1 hover:underline">Learn More <ArrowRight className="w-4 h-3" /></a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full bg-[#f3f3f3] py-14 md:py-20 px-4 md:px-12" data-testid="section-faq">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-bold text-[#0c3254] text-2xl sm:text-3xl md:text-[45px] text-center font-['Plus_Jakarta_Sans',Helvetica] mb-10 md:mb-14">
              Clear Answers for Your Peace of Mind
            </h2>
            <div className="flex flex-col gap-6 md:gap-8">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-white rounded-2xl p-6 md:p-10" data-testid={`faq-${faqs.indexOf(faq)}`}>
                  <h3 className="font-semibold text-[#0c3254] text-lg md:text-xl font-['Inter',Helvetica] mb-2">{faq.q}</h3>
                  <p className="text-[#434654] text-sm md:text-base font-['Inter',Helvetica] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-[#1a1c1c] text-base md:text-xl font-['Inter',Helvetica] mt-10">Have more questions? We have the answers.</p>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="w-full bg-white py-16 md:py-24 px-4 md:px-12" data-testid="section-final-cta">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="font-extrabold text-[#0c3254] text-3xl sm:text-4xl md:text-5xl lg:text-[72px] leading-tight font-['Plus_Jakarta_Sans',Helvetica] mb-6 md:mb-8">
              You&apos;ve been thinking about this long enough. Let&apos;s figure it out together.
            </h2>
            <p className="text-[#434654] text-lg md:text-2xl lg:text-4xl font-['Inter',Helvetica] mb-8 md:mb-12">One phone call to see if your home can feel like home again.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-8">
              <a href="tel:6789099558" data-testid="link-call-final" className="w-full sm:w-auto px-10 md:px-16 py-4 md:py-5 bg-[#eb5c44] rounded-full font-semibold text-white text-lg md:text-2xl uppercase text-center shadow-lg hover:bg-[#d4503b] transition-colors cursor-pointer font-['Inter',Helvetica]">
                Call Now 678-909-9558
              </a>
              <button onClick={scrollToQuoteForm} data-testid="button-quote-final" className="w-full sm:w-auto px-10 md:px-16 py-4 md:py-5 border-2 border-[#0c3254] rounded-full font-semibold text-[#0c3254] text-lg md:text-2xl uppercase text-center hover:bg-[#0c3254] hover:text-white transition-colors cursor-pointer font-['Inter',Helvetica]">
                GET MY FREE QUOTE
              </button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5 text-[#434654] text-sm md:text-base tracking-[2px] uppercase font-['Inter',Helvetica]">
              <span>Fast Installation</span>
              <span className="w-2 h-2 bg-[#eb5c44] rounded-full" aria-hidden="true" />
              <span>Licensed &amp; Insured</span>
              <span className="w-2 h-2 bg-[#eb5c44] rounded-full" aria-hidden="true" />
              <span>Family Owned</span>
            </div>
          </div>
        </section>
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
};
