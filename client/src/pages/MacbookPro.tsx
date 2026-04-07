import { Label } from "@/components/ui/label";

// Form fields data
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

// Star icons for Google Rating
const stars = [1, 2, 3, 4, 5];

export const MacbookPro = (): JSX.Element => {
  return (
    <div className="bg-white overflow-hidden w-full min-w-[1922px] min-h-[1231px] relative">
      {/* Top announcement bar */}
      <div className="absolute w-full top-0 left-0 h-[78px] bg-[#0c3254]" />
      <div className="absolute top-[27px] left-[calc(50.00%_-_462px)] w-[923px] h-[25px] flex items-center justify-center [font-family:'Inter',Helvetica] font-normal text-white text-[18.4px] text-center tracking-[1.84px] leading-[24.6px] whitespace-nowrap">
        LOCAL STAIRLIFT SPECIALISTS | NO-PRESSURE, EVER | FAST INSTALLATION
        AVAILABLE
      </div>

      {/* Header bar background */}
      <div className="absolute top-[81px] left-0 w-[1922px] h-[168px] bg-[#f3f3f3]" />

      {/* Call Now button in header */}
      <div className="absolute top-[131px] left-[1255px] w-[313px] h-[67px]">
        <div className="absolute top-0 left-0 w-[311px] h-[67px] rounded-[82.16px] border-[0.82px] border-solid border-[#0c3254]" />
        <div className="absolute top-5 left-[30px] w-[251px] h-7 flex items-center justify-center [font-family:'Inter',Helvetica] font-semibold text-[#0c3254] text-[16.4px] text-center tracking-[0] leading-[28.2px] whitespace-nowrap">
          CALL NOW 678-909-9558
        </div>
      </div>

      {/* Get Free Quote button in header */}
      <div className="absolute top-[131px] left-[1578px] w-[262px] h-[68px]">
        <div className="w-[260px] h-[68px] bg-[#0c3254] rounded-[82.16px] border-[0.82px] border-solid absolute top-0 left-0" />
        <div className="absolute top-[22px] left-5 w-[220px] h-6 flex items-center justify-center [font-family:'Inter',Helvetica] font-semibold text-[#f3f3f3] text-[16.4px] text-center tracking-[0] leading-[28.2px] whitespace-nowrap">
          GET YOUR FREE QUOTE
        </div>
      </div>

      {/* Logo */}
      <img
        className="absolute top-[137px] left-[209px] w-[204px] h-14 object-cover"
        alt="Homepronewlogo"
        src="/figmaAssets/homepronewlogo-1920w-1.png"
      />

      {/* Hero background image */}
      <img
        className="absolute top-[248px] left-0 w-[1922px] h-[983px]"
        alt="Screenshot"
        src="/figmaAssets/screenshot-2026-04-02-at-11-53-42-am-1.png"
      />

      {/* Dark overlay */}
      <div className="absolute top-[248px] left-0 w-[1920px] h-[1036px] bg-[#00000070]" />

      {/* Quote form card */}
      <div className="flex flex-col w-[calc(100%_-_1363px)] items-start gap-[9.27px] p-[37.1px] top-[419px] left-[1178px] bg-white border-[1.16px] border-solid border-[#c3c6d64c] absolute rounded-[18.55px]">
        {/* Card shadow overlay */}
        <div className="w-full h-[calc(100%_+_1px)] top-0 left-0 bg-[#ffffff01] shadow-[0px_27.82px_46.37px_-11.59px_#1a1c1c0d] absolute rounded-[18.55px]" />

        {/* Form title */}
        <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
          <div className="self-stretch [font-family:'Poppins',Helvetica] font-semibold text-[#0c3254] text-[27.8px] leading-[37.1px] relative flex items-center justify-center mt-[-1.16px] text-center tracking-[0]">
            Get Your Free Quote
          </div>
        </div>

        {/* Form subtitle */}
        <div className="items-start self-stretch w-full flex-[0_0_auto] flex flex-col relative">
          <div className="relative flex items-center justify-center w-[486px] mt-[-1.16px] mr-[-3.85px] [font-family:'Inter',Helvetica] font-normal text-[#434654] text-xl text-center tracking-[0] leading-[23.2px]">
            Enter your details and a mobility specialist will contact you
            shortly.
          </div>
        </div>

        {/* Form fields */}
        <div className="flex flex-col items-start gap-[18.55px] pt-[18.55px] pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]">
          {formFields.map((field) => (
            <div
              key={field.id}
              className="flex flex-col items-start gap-[4.64px] relative self-stretch w-full flex-[0_0_auto]"
            >
              <Label
                htmlFor={field.id}
                className="relative flex items-center self-stretch mt-[-1.16px] [font-family:'Inter',Helvetica] font-normal text-[#434654] text-[13.9px] tracking-[0.70px] leading-[18.5px]"
              >
                {field.label}
              </Label>
              <div className="flex items-start justify-center px-[13.91px] py-[16.23px] relative self-stretch w-full flex-[0_0_auto] bg-[#eeeeee] rounded-[9.27px] overflow-hidden">
                <div className="items-start flex-1 grow flex flex-col relative">
                  <span className="relative flex items-center self-stretch mt-[-1.16px] [font-family:'Inter',Helvetica] font-normal text-gray-500 text-[18.5px] tracking-[0] leading-[normal]">
                    {field.placeholder}
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* Submit button */}
          <div className="flex items-center justify-center px-0 py-[18.55px] relative self-stretch w-full flex-[0_0_auto] bg-[#00328c] rounded-[11592.25px]">
            <div className="absolute w-full h-[calc(100%_-_1px)] top-0 left-0 bg-[#eb5c44] rounded-[11592.25px] shadow-[0px_2.32px_4.64px_-2.32px_#0000001a,0px_4.64px_6.96px_-1.16px_#0000001a]" />
            <div className="w-[315px] h-8 [font-family:'Inter',Helvetica] font-bold text-white text-[20.9px] leading-[32.5px] whitespace-nowrap relative flex items-center justify-center mt-[-1.16px] text-center tracking-[0]">
              GET YOUR FREE QUOTE
            </div>
          </div>
        </div>

        {/* Privacy note */}
        <div className="items-center pt-[9.27px] pb-0 px-0 self-stretch w-full flex-[0_0_auto] flex flex-col relative">
          <div className="relative flex items-center justify-center w-[270.6px] h-[17.39px] mt-[-1.16px] [font-family:'Inter',Helvetica] font-normal italic text-[#434654] text-[11.6px] text-center tracking-[0] leading-[17.4px] whitespace-nowrap">
            No-pressure guarantee. We respect your privacy.
          </div>
        </div>
      </div>

      {/* Hero description text */}
      <div className="absolute top-[691px] left-[174px] w-[730px] h-[115px] flex items-center [font-family:'Inter',Helvetica] font-normal text-white text-[23.5px] tracking-[0] leading-[38.1px]">
        If the stairs have cut off part of your home, talk to a real local
        stairlift specialist today. We&apos;ll help you understand your options
        and find the right next step.
      </div>

      {/* Hero headline */}
      <div className="absolute top-[399px] left-[170px] w-[734px] [font-family:'Sofia_Pro-SemiBold',Helvetica] font-semibold text-white text-[79px] tracking-[0] leading-[normal]">
        The Stairs Shouldn&apos;t Decide Whether You Stay in Your Home.
      </div>

      {/* Google Rating badge */}
      <div className="inline-flex flex-col items-start justify-center absolute top-[967px] left-[174px] bg-white rounded-[7.39px] overflow-hidden shadow-[18.47px_12.93px_36.93px_#00000014,-3.69px_-1.85px_14.77px_#00000014]">
        {/* Green top bar */}
        <div className="relative self-stretch w-full h-[3.69px] bg-[#34a853]" />

        <div className="inline-flex items-center justify-center gap-[11.08px] px-[22.16px] py-[14.77px] relative flex-[0_0_auto]">
          <img
            className="relative w-[57.71px] h-[57.71px]"
            alt="Group"
            src="/figmaAssets/group-3.png"
          />

          <div className="inline-flex flex-col items-start gap-[7.39px] relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-0.46px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-dark-grey text-[14.8px] text-center tracking-[0] leading-[14.8px] whitespace-nowrap">
              Google Rating
            </div>

            <div className="inline-flex items-center gap-[14.77px] relative flex-[0_0_auto]">
              <div className="relative w-fit [font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold text-[#fea500] text-[22.2px] text-center tracking-[0] leading-[22.2px] whitespace-nowrap">
                4.9
              </div>

              {/* Stars */}
              <div className="inline-flex items-center justify-center relative flex-[0_0_auto]">
                {stars.map((star) => (
                  <div key={star} className="relative w-[25.85px] h-[25.85px]">
                    <img
                      className="absolute w-full h-full top-[4.45%] left-[6.51%]"
                      alt="Star"
                      src="/figmaAssets/star-1.svg"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="relative w-fit [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-grey text-[11.1px] text-center tracking-[0] leading-[normal]">
              See all our reviews
            </div>
          </div>
        </div>
      </div>

      {/* Call Now CTA button */}
      <div className="absolute top-[837px] left-[167px] w-[380px] h-[82px]">
        <div className="w-[378px] h-[82px] bg-[#eb5c44] rounded-[100px] absolute top-0 left-0" />
        <div className="absolute top-6 left-9 w-[306px] h-[34px] flex items-center justify-center [font-family:'Inter',Helvetica] font-semibold text-white text-xl text-center tracking-[0] leading-[34.4px] whitespace-nowrap">
          CALL NOW 678-909-9558
        </div>
      </div>
    </div>
  );
};
