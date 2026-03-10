import * as React from "react";
import { type IconProps } from "./types";
import { cn } from "@/utils";

const LightIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, size = 16, ...props }, ref) => (
    <svg
      ref={ref}
      className={cn("size-4", className)}
      width={size}
      height={size * (17 / 14)}
      viewBox="0 0 14 17"
      fill="none" xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.36966 0.656746V6.53058H12.4044L5.69142 15.7609V9.88705H0.656708L7.36966 0.656746Z"
        stroke="currentColor"
        strokeWidth="1.3134"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>

  )
);

LightIcon.displayName = "LightIcon";

export { LightIcon };
