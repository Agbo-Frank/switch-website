import Container from "@/component/material/container";
import logo from "@/assets/logo/with-text.png";
import { GithubIcon, LinkedinIcon, XIcon } from "@/component/icons";
import { SectionDescription, SectionTitle } from "@/component/material/section";
import { PrimaryButton, SecondaryButton } from "@/component/material/button";

export default function Footer() {
  return (
    <>
      <Container contentClassName="px-0 bg-surface-elevated">
        <div className="center py-10 sm:py-[70px] px-4">
          <div className="w-full max-w-[733px] flex flex-col gap-8 sm:gap-[35.02px] text-center mx-auto">
            <div className="space-y-3 sm:space-y-[13px]">
              <SectionTitle className="text-center!">No barriers. No limits. Max speed</SectionTitle>
              <SectionDescription className="text-center!">Everything you need to collect and payout stablecoins</SectionDescription>
            </div>
            <div className="flex flex-col md:flex-row center gap-3 md:gap-[17.51px] md:h-[72px] w-full md:w-auto">
              <PrimaryButton className="w-full h-14 md:h-full px-6 md:px-10">
                <span className="text-[18px] sm:text-[26.76px]! font-regular leading-[100%] font-tomato">Book a demo</span>
              </PrimaryButton>
              <SecondaryButton className="w-full h-14 md:h-full px-6 md:px-10">
                <span className="text-[18px] sm:text-[26.76px]! font-regular sm:leading-[100%] font-tomato">View documentation</span>
              </SecondaryButton>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div className="w-full max-w-[1100px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-6 py-8 md:py-[44px]">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-[26.27px] text-center sm:text-left w-fit">
            <img src={logo} alt="Switch" className="w-auto h-7 sm:h-[33px]" />
            <div className="hidden sm:block w-px h-[50px] border-r border-white/20 shrink-0" />
            <div className="block sm:hidden w-12 h-px border-t border-white/20 shrink-0" />
            <span className="text-white/30 text-xl sm:text-2xl md:text-[35.02px] font-tomato leading-[100%]">
              Stablecoin account for global businesses
            </span>
          </div>
          <div className="flex items-center gap-4 sm:gap-5 shrink-0">
            <LinkedinIcon className="size-6 sm:size-[34.4px]" />
            <GithubIcon className="size-6 sm:size-[34.4px]" />
            <XIcon className="size-6 sm:size-[34.4px]" />
          </div>
        </div>
      </Container>
      <Container className="border-b-0">
        <div className="w-full max-w-[1100px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-4 py-6 sm:py-[38px]">
          <span className="text-white/40 text-sm sm:text-[30px] font-tomato leading-[100%] order-2 sm:order-1">
            ©2026 - Switch Labs Inc.
          </span>
          <ul className="flex flex-wrap items-center justify-center sm:justify-end gap-4 sm:gap-[26px] text-white/40 text-sm sm:text-[30px] font-tomato order-1 sm:order-2">
            <li><a href="#" className="hover:text-white/60 transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white/60 transition-colors">AML Policy</a></li>
          </ul>
        </div>
      </Container>
    </>
  );
}