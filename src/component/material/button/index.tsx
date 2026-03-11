import { cn } from "@/utils";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

export function PrimaryButton({ children, className = "" }: ButtonProps) {
  return (
    <button className={cn("bg-primary-hover cursor-pointer leading-[100%] hover:bg-primary-hover/80 transition-all cursor-pointer duration-300 ease-in-out font-tomato center rounded-[8px] sm:rounded-[12.4px] text-[#85F0AE] px-4 py-2 text-[26.32px]! hover:scale-[1.02] active:scale-[0.98]", { [className]: !!className })}>
      <div>
        {children}
      </div>
    </button>
  )
}

export function SecondaryButton({ children, className = "" }: ButtonProps) {
  return (
    <button className={cn("bg-[#292929]  cursor-pointer leading-[100%] hover:bg-[#292929]/80 transition-all duration-300 ease-in-out font-tomato center rounded-[8px] sm:rounded-[12.4px] text-white px-4 py-2 text-[26.32px]! hover:scale-[1.02] active:scale-[0.98]", { [className]: !!className })}>
      <div>
        {children}
      </div>
    </button>
  )
}