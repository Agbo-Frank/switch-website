import { PrimaryButton, SecondaryButton } from "@/component/material/button";
import Container from "@/component/material/container";
import { SectionDescription, SectionTitle } from "@/component/material/section";
import COUNTRIES from "./data";
import { cn } from "@/utils";

export default function Coverage() {
  return (
    <>
      <Container className={`bg-[url('/src/assets/image/bg/world.png')] bg-cover h-fit bg-center bg-no-repeat`}>
        <div
          className="center"
          style={{ height: "calc(100vh - 120px)" }}
        >
          <div className="space-y-[52.54px]">
            <div className="text-center space-y-[13px]">
              <h1 className="text-[87.56px] leading-[100.69px] font-semibold w-full max-w-[911px] mx-auto">
                Convert deposits to over 30+ currencies.
              </h1>
              <p className="text-[45.34px] text-white/40 leading-[100%] block w-full max-w-[934px] mx-auto">
                Settle payouts to 100+ countries across 30 local currencies globally in few seconds.
              </p>
            </div>
            <div className="center gap-[17.51px] h-[73px]">
              <PrimaryButton className="h-full w-fit px-10">
                <span className="text-[26.76px]! font-regular leading-[100%] font-tomato">Book a demo</span>
              </PrimaryButton>
              <SecondaryButton className="h-full w-fit px-10">
                <span className="text-[26.76px]! font-regular leading-[100%] font-tomato">Get started</span>
              </SecondaryButton>
            </div>
          </div>
        </div>
      </Container>
      <Container contentClassName="px-0 bg-surface-elevated">
        <div className="w-full max-w-[945px] py-[65px] flex items-start justify-between mx-auto">
          <SectionTitle className="max-w-[482px]">Skip the high fees and bad rates.</SectionTitle>
          <div className="flex flex-col gap-[26.27px] w-[376px]">
            <SectionDescription>
              Everything you need to send and collect stablecoins.
            </SectionDescription>
            <div>
              <PrimaryButton className="py-[17.51px] max-h-[67px] px-[40px] inline-flex">
                Book a demo
              </PrimaryButton>
            </div>
          </div>
        </div>
      </Container>

      {
        COUNTRIES.map(({ region, countries }, i) => (
          <Container key={i} contentClassName={cn(i % 2 === 0 ? "bg-surface-elevated px-0" : "")}>
            <div className="w-full max-w-[980px] py-[70px] flex items-start justify-between mx-auto">
              <div className="space-y-[17px] w-full max-w-[394px]">
                <SectionTitle>{region}</SectionTitle>
                <SectionDescription>Send payouts to any of these supported countries.</SectionDescription>
              </div>
              <div className="grid grid-cols-3 gap-[8.76px]">
                {
                  countries.map(({ name, flag }, i) => (
                    <div key={i} className="flex items-center gap-[8.57px] p-[17.51px] max-h-[69px]">
                      <img src={flag} className="w-[41px] h-auto bg-contain" alt="image" />
                      <span className="text-[24.96px]! leading-[100%]">{name}</span>
                    </div>
                  ))
                }
              </div>
            </div>
          </Container>
        ))
      }

      <Container contentClassName="px-0 bg-surface-elevated">
        <div className="center py-[70px]">
          <div className="w- full max-w-[733px] flex flex-col gap-[35.02px] text-center mx-auto">
            <div className="space- y-[13px]">
              <SectionTitle>No barriers. No limits. Max speed</SectionTitle>
              <SectionDescription>Everything you need to collect and payout stablecoins</SectionDescription>
            </div>
            <div className="center gap-[17.51px] h-[72px]">
              <PrimaryButton className="h-full w-fit px-10">
                <span className="text-[26.76px]! font-regular leading-[100%] font-tomato">Book a demo</span>
              </PrimaryButton>
              <SecondaryButton className="h-full w-fit px-10">
                <span className="text-[26.76px]! font-regular leading-[100%] font-tomato">View documentation</span>
              </SecondaryButton>
            </div>
          </div>
        </div>
      </Container >
    </>
  )
}