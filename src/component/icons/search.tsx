import * as React from "react";
import { type IconProps } from "./types";
import { cn } from "@/utils";

const SearchIcon = React.forwardRef<SVGSVGElement, IconProps>(({ className, size = 16, ...props }, ref) => (
  <svg
    ref={ref}
    className={cn("size-4", className)}
    width={size}
    height={size}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.02631 13.8637C11.2502 13.8637 13.8637 11.2502 13.8637 8.02635C13.8637 4.80247 11.2502 2.189 8.02631 2.189C4.80243 2.189 2.18896 4.80247 2.18896 8.02635C2.18896 11.2502 4.80243 13.8637 8.02631 13.8637Z"
      stroke="currentColor"
      strokeWidth="1.45934"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.3231 15.323L12.1855 12.1855"
      stroke="currentColor"
      strokeWidth="1.45934"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>

)
);

SearchIcon.displayName = "SearchIcon";
export { SearchIcon };
