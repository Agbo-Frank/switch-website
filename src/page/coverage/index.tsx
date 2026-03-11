import { PrimaryButton } from "@/component/material/button";
import Container from "@/component/material/container";
import { SectionDescription, SectionTitle } from "@/component/material/section";
import COUNTRIES from "./data";
import { cn } from "@/utils";
import Hero from "@/component/material/hero";

export default function Coverage() {
  return (
    <>
      <Hero
        title="Convert deposits to over 30+ currencies"
        description="Settle payouts to 100+ countries across 30 local currencies globally in few seconds."
        primaryBtnText="Book a demo"
        secondaryBtnText="Get started"
        className="bg-[url('/src/assets/image/bg/world.png')] bg-cover h-fit bg-center bg-no-repeat"
      />
      <Container contentClassName="px-0 bg-surface-elevated">
        <div className="w-full max-w-[945px] py-10 sm:py-[65px] flex flex-col lg:flex-row items-start justify-between gap-2 sm:gap-8 mx-auto px-4 lg:px-0">
          <SectionTitle className="max-w-[482px] text-center sm:text-left w-full">Skip the high fees and bad rates.</SectionTitle>
          <div className="flex flex-col items-center sm:items-start gap-6 sm:gap-[26.27px] w-full max-w-[376px] lg:w-[376px] mx-auto sm:mx-0">
            <SectionDescription className="text-center sm:text-left w-full">
              Everything you need to send and collect stablecoins.
            </SectionDescription>
            <div className="w-full sm:w-auto">
              <PrimaryButton className="w-full sm:w-auto h-12 sm:h-[73px] px-6 sm:px-10">
                <span className="text-lg sm:text-[26.76px]! font-regular leading-[100%] font-tomato">Book a demo</span>
              </PrimaryButton>
            </div>
          </div>
        </div>
      </Container>

      {
        COUNTRIES.map(({ region, countries }, i) => (
          <Container key={i} contentClassName={cn(i % 2 === 0 && i !== 0 ? "bg-surface-elevated" : "")}>
            <div className="w-full max-w-[980px] py-10 sm:py-[70px] flex flex-col lg:flex-row items-start justify-between sm:gap-8 gap-2 mx-auto px-4 lg:px-0">
              <div className="space-y-4 sm:space-y-[17px] w-full max-w-[394px]">
                <SectionTitle>{region}</SectionTitle>
                <SectionDescription>Send payouts to any of these supported countries.</SectionDescription>
              </div>
              <div className="grid grid-cols-3 gap-[8.76px]">
                {
                  countries.map(({ name, flag }, j) => (
                    <div key={j} className="flex items-center gap-2 sm:gap-[8.57px] pl-0 p-3 sm:p-[17.51px] min-h-[69px]">
                      <img src={flag} className="w-8 h-8 sm:w-[41px] sm:h-auto object-contain shrink-0" alt="" />
                      <span className="text-base sm:text-[24.96px]! leading-[100%] truncate">{name}</span>
                    </div>
                  ))
                }
              </div>
            </div>
          </Container>
        ))
      }
    </>
  )
}