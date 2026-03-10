import * as React from "react";
import { type IconProps } from "./types";
import { cn } from "@/utils";

const LinkedinIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, size = 16, ...props }, ref) => (
    <svg
      ref={ref}
      className={cn("size-4", className)}
      width={size}
      height={size}
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M7.27471 0.258545H27.6439C31.5197 0.258545 34.6599 3.40016 34.6599 7.27457V27.6438C34.6599 31.5184 31.5197 34.6599 27.6439 34.6599H7.27471C3.40033 34.6599 0.258667 31.518 0.258667 27.6438V7.27457C0.258667 3.40019 3.40033 0.258545 7.27471 0.258545ZM7.01579 27.9027H11.8973V11.3794H7.01579V27.9027ZM14.2907 27.9027H19.1723V19.4911C19.1723 17.3526 20.5317 16.2551 21.8341 16.2136C22.4902 16.193 23.145 16.4357 23.637 16.9619C24.1292 17.4882 24.4769 18.3176 24.4769 19.4911V27.9027H29.3585V17.8113C29.3585 15.8537 28.8345 14.3753 27.9944 13.3307C27.1546 12.287 26.014 11.6946 24.8148 11.4773C22.739 11.101 20.4411 11.8442 19.1723 13.3686V11.3794H14.2907V27.9027ZM9.45655 4.40123C7.90682 4.40158 6.65311 5.66969 6.65265 7.22721C6.65265 8.78511 7.90656 10.0529 9.45655 10.0532C11.0084 10.0532 12.2636 8.78521 12.2636 7.22721C12.2632 5.66949 11.0066 4.40123 9.45655 4.40123Z" fill="url(#paint0_linear_1_924)" stroke="url(#paint1_linear_1_924)" stroke-width="0.51733" />
      <defs>
        <linearGradient id="paint0_linear_1_924" x1="17.4596" y1="-0.000375507" x2="17.4596" y2="34.9195" gradientUnits="userSpaceOnUse">
          <stop stop-color="#52525B" />
          <stop offset="1" stop-color="#71717A" />
        </linearGradient>
        <linearGradient id="paint1_linear_1_924" x1="17.4596" y1="-0.000375507" x2="17.4596" y2="34.9195" gradientUnits="userSpaceOnUse">
          <stop stop-color="#18181B" />
          <stop offset="1" stop-color="#52525B" />
        </linearGradient>
      </defs>
    </svg>

  )
);

LinkedinIcon.displayName = "LinkedinIcon";

export { LinkedinIcon };
