import { cn } from "@/utils";
import type { PropsWithChildren } from "react";

interface SectionTextProps extends PropsWithChildren {
  className?: string;
}

export function SectionTitle({ children, className = "" }: SectionTextProps) {
  return (
    <p
      className={cn(
        "text-2xl sm:text-4xl md:text-[40px] lg:text-[49px] leading-[100%] font-tomato text-center md:text-left",
        { [className]: !!className }
      )}
    >
      {children}
    </p>
  );
}

export function SectionDescription({ children, className = "" }: SectionTextProps) {
  return (
    <p
      className={cn(
        "text-base sm:text-xl md:text-[24px] lg:text-[29px] leading-[100%] font-tomato text-white/40 text-center md:text-left",
        { [className]: !!className }
      )}
    >
      {children}
    </p>
  );
}