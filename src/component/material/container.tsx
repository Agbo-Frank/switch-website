import { cn } from "@/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
}

export default function Container({ children, className = "", contentClassName = "" }: ContainerProps) {
  return (
    <div className={cn("border-b w-full", className)}>
      <div className={cn("border-x px-5 w-full max-w-[1300px] mx-auto", { [contentClassName]: !!contentClassName })}>
        {children}
      </div>
    </div>
  )
}