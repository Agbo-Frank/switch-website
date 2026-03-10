import * as React from "react";
import { type IconProps } from "./types";
import { cn } from "@/utils";

const RefreshIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, size = 16, ...props }, ref) => (
    <svg
      ref={ref}
      className={cn("size-4", className)}
      width={size}
      height={size}
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.83075 15.323C3.83075 12.2751 5.04154 9.35198 7.19676 7.19676C9.35198 5.04154 12.2751 3.83075 15.323 3.83075C18.5358 3.84284 21.6196 5.09646 23.9295 7.32951L26.8153 10.2153"
        stroke="currentColor"
        strokeWidth="2.18901"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.8156 3.83075V10.2153H20.431"
        stroke="currentColor"
        strokeWidth="2.18901"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.8153 15.3231C26.8153 18.371 25.6045 21.2941 23.4493 23.4493C21.2941 25.6045 18.371 26.8153 15.323 26.8153C12.1102 26.8033 9.0265 25.5496 6.71659 23.3166L3.83075 20.4307"
        stroke="currentColor"
        strokeWidth="2.18901"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.83075 26.8156V20.431H10.2153"
        stroke="currentColor"
        strokeWidth="2.18901"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
);

RefreshIcon.displayName = "RefreshIcon";

export { RefreshIcon };