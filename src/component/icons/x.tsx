import * as React from "react";
import { type IconProps } from "./types";
import { cn } from "@/utils";

const XIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, size = 16, ...props }, ref) => (
    <svg
      ref={ref}
      className={cn("size-4", className)}
      width={size}
      height={size}
      viewBox="0 0 34 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M10.9978 0.251221L18.8409 11.1923L19.028 11.4531L19.2366 11.2108L28.7361 0.251221H32.3096L20.7764 13.5603L20.6445 13.7106L20.761 13.8701L33.4322 31.5501H22.9204L15.0773 20.609L14.8902 20.3483L14.6816 20.5906L5.18212 31.5501H1.61179L13.1449 18.241L13.2737 18.0907L13.1572 17.9312L0.489136 0.251221H10.9978ZM5.98575 3.32773L24.2179 28.7682L24.2946 28.8725H28.2177L27.9324 28.4736L9.70028 3.03327L9.62361 2.92899H5.7005L5.98575 3.32773Z" fill="url(#paint0_linear_1_930)" stroke="url(#paint1_linear_1_930)" stroke-width="0.502549" />
      <defs>
        <linearGradient id="paint0_linear_1_930" x1="16.9594" y1="-0.000305168" x2="16.9594" y2="31.8017" gradientUnits="userSpaceOnUse">
          <stop stop-color="#52525B" />
          <stop offset="1" stop-color="#71717A" />
        </linearGradient>
        <linearGradient id="paint1_linear_1_930" x1="16.9594" y1="-0.000305168" x2="16.9594" y2="31.8017" gradientUnits="userSpaceOnUse">
          <stop stop-color="#18181B" />
          <stop offset="1" stop-color="#52525B" />
        </linearGradient>
      </defs>
    </svg>
  )
);

XIcon.displayName = "XIcon";

export { XIcon };