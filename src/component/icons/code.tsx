import * as React from "react";
import { type IconProps } from "./types";
import { cn } from "@/utils";

const CodeIcon = React.forwardRef<SVGSVGElement, IconProps>(({ className, size = 16, ...props }, ref) => (
  <svg
    ref={ref}
    className={cn("size-4", className)}
    width={size}
    height={size}
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.2153 11.6747L4.37793 17.512L10.2153 23.3494"
      stroke="currentColor"
      strokeWidth="2.18901"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24.8087 11.6747L30.6461 17.512L24.8087 23.3494"
      stroke="currentColor"
      strokeWidth="2.18901"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.4306 5.83734L14.5933 29.1867"
      stroke="currentColor"
      strokeWidth="2.18901"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
);

CodeIcon.displayName = "CodeIcon";
export { CodeIcon };