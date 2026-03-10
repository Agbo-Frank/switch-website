import React from "react";
import type { IconProps } from "./types";
import { cn } from "@/utils";

const BoxIcon = React.forwardRef<SVGSVGElement, IconProps>(({ className, size = 16, ...props }, ref) => (
  <svg
    ref={ref}
    className={cn("size-4", className)}
    width={size}
    height={size}
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.6215 13.4255V6.71254C17.6212 6.41824 17.5435 6.12919 17.3962 5.87439C17.2489 5.6196 17.0372 5.40801 16.7824 5.26086L10.9085 1.90439C10.6534 1.75709 10.364 1.67955 10.0694 1.67955C9.77481 1.67955 9.48541 1.75709 9.23028 1.90439L3.35645 5.26086C3.10158 5.40801 2.88989 5.6196 2.74261 5.87439C2.59532 6.12919 2.51764 6.41824 2.51733 6.71254V13.4255C2.51764 13.7198 2.59532 14.0088 2.74261 14.2636C2.88989 14.5184 3.10158 14.73 3.35645 14.8772L9.23028 18.2336C9.48541 18.3809 9.77481 18.4585 10.0694 18.4585C10.364 18.4585 10.6534 18.3809 10.9085 18.2336L16.7824 14.8772C17.0372 14.73 17.2489 14.5184 17.3962 14.2636C17.5435 14.0088 17.6212 13.7198 17.6215 13.4255Z"
      stroke="currentColor"
      strokeWidth="1.48852"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.74402 5.84007L10.0695 10.0776L17.395 5.84007"
      stroke="currentColor"
      strokeWidth="1.48852"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.0695 18.5277V10.0694"
      stroke="currentColor"
      strokeWidth="1.48852"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
);

BoxIcon.displayName = "BoxIcon";
export { BoxIcon };