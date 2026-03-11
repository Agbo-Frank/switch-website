import * as React from "react";
import { type IconProps } from "./types";
import { cn } from "@/utils";

const CloseIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, size = 24, ...props }, ref) => (
    <svg
      ref={ref}
      className={cn("size-6", className)}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  )
);

CloseIcon.displayName = "CloseIcon";

export { CloseIcon };
