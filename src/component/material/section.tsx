import { cn } from "@/utils";
import type { PropsWithChildren } from "react";

interface SectionTextProps extends PropsWithChildren {
  className?: string;
}

export function SectionTitle({ children, className = "" }: SectionTextProps) {
  return (
    <p className={cn("text-[49px] leading-[100%] font-tomato", { [className]: !!className })}>{children}</p>
  )
}

export function SectionDescription({ children, className = "" }: SectionTextProps) {
  return (
    <p className={cn("text-[29px] leading-[100%] font-tomato text-white/40", { [className]: !!className })}>{children}</p>
  )
}