import * as React from "react";
import { type IconProps } from "./types";
import { cn } from "@/utils";

const DocsIcon = React.forwardRef<SVGSVGElement, IconProps>(({ className, size = 16, ...props }, ref) => (
  <svg
    ref={ref}
    className={cn("size-4", className)}
    width={size}
    height={size}
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clip-path="url(#clip0_1_967)">
      <path d="M10.0513 1.38664H4.15926C3.79157 1.38664 3.43894 1.5327 3.17895 1.7927C2.91895 2.05269 2.77289 2.40532 2.77289 2.77301V13.864C2.77289 14.2317 2.91895 14.5843 3.17895 14.8443C3.43894 15.1043 3.79157 15.2503 4.15926 15.2503H12.4775C12.8452 15.2503 13.1978 15.1043 13.4578 14.8443C13.7178 14.5843 13.8638 14.2317 13.8638 13.864V5.19916L10.0513 1.38664Z" stroke="white" stroke-width="1.05072" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M9.70447 1.38664V5.54575H13.8636" stroke="currentColor" stroke-width="1.05072" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M5.54535 9.01114H6.93172" stroke="currentColor" stroke-width="1.05072" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M5.54535 11.7844H6.93172" stroke="currentColor" stroke-width="1.05072" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M9.70447 9.01114H11.0908" stroke="currentColor" stroke-width="1.05072" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M9.70447 11.7844H11.0908" stroke="currentColor" stroke-width="1.05072" stroke-linecap="round" stroke-linejoin="round" />
    </g>
    <defs>
      <clipPath id="clip0_1_967">
        <rect width="16.6364" height="16.6364" fill="white" />
      </clipPath>
    </defs>
  </svg>
)
);

DocsIcon.displayName = "DocsIcon";
export { DocsIcon };