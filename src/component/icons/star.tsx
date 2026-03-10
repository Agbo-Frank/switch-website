import * as React from "react";
import { type IconProps } from "./types";
import { cn } from "@/utils";

const StarIcon = React.forwardRef<SVGSVGElement, IconProps>(({ className, size = 16, ...props }, ref) => (
  <svg
    ref={ref}
    className={cn("size-4", className)}
    width={size}
    height={size}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.29669 0.729668L5.90157 4.97123C5.83017 5.18831 5.70878 5.38559 5.54719 5.54719C5.3856 5.70878 5.18832 5.83016 4.97124 5.90156L0.729675 7.29668L4.97124 8.69181C5.18832 8.76321 5.3856 8.88459 5.54719 9.04618C5.70878 9.20777 5.83017 9.40506 5.90157 9.62214L7.29669 13.8637L8.69182 9.62214C8.76322 9.40506 8.8846 9.20777 9.04619 9.04618C9.20778 8.88459 9.40506 8.76321 9.62215 8.69181L13.8637 7.29668L9.62215 5.90156C9.40506 5.83016 9.20778 5.70878 9.04619 5.54719C8.8846 5.38559 8.76322 5.18831 8.69182 4.97123L7.29669 0.729668Z"
      stroke="currentColor"
      strokeWidth="1.45934"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
);

StarIcon.displayName = "StarIcon";
export { StarIcon };