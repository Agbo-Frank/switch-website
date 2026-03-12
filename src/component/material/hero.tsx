import Container from "./container";
import { PrimaryButton, SecondaryButton } from "./button";
import { cn } from "@/utils";

interface HeroProps {
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  primaryBtnText: string;
  secondaryBtnText: string;
  className?: string;
}

export default function Hero({
  title,
  description,
  primaryBtnText = "Book a demo",
  secondaryBtnText = "Get started",
  className = ""
}: HeroProps) {
  return (
    <Container className={cn("bg-[url('/src/assets/image/bg/1.png')] bg-cover h-fit bg-center bg-no-repeat", { [className]: !!className })}>
      <div className="center min-h-[calc(100vh-15rem)] sm:min-h-[calc(100vh-120px)] py-10 sm:py-0">
        <div className="space-y-8 sm:space-y-[52.54px] px-2">
          <div className="text-center space-y-2 sm:space-y-[13px]">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[87.56px] leading-tight lg:leading-[100.69px] font-semibold w-full max-w-[911px] mx-auto animate-hero-enter"
              style={{ animationDelay: "0ms" }}
            >
              {title}
            </h1>
            <p
              className="text-lg sm:text-2xl md:text-3xl lg:text-[45.34px] text-white/40 leading-tight sm:leading-[100%] block w-full max-w-[934px] mx-auto animate-hero-enter"
              style={{ animationDelay: "150ms" }}
            >
              {description}
            </p>
          </div>
          <div
            className="flex flex-col sm:flex-row center gap-3 sm:gap-[17.51px] min-h-[73px] animate-hero-enter"
            style={{ animationDelay: "300ms" }}
          >
            <PrimaryButton className="w-full sm:w-auto h-12 sm:h-[73px] px-6 sm:px-10">
              <span className="text-lg sm:text-[26.76px]! font-regular leading-[100%] font-tomato">{primaryBtnText}</span>
            </PrimaryButton>
            <SecondaryButton className="w-full sm:w-auto h-12 sm:h-[73px] px-6 sm:px-10">
              <span className="text-lg sm:text-[26.76px]! font-regular leading-[100%] font-tomato">{secondaryBtnText}</span>
            </SecondaryButton>
          </div>
        </div>
      </div>
    </Container>
  )
}