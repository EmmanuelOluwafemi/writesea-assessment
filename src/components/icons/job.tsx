import React from "react";

import type { IconProps } from "@/types";

export const JobIcon: React.FC<IconProps> = (props) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.25 8.25L2.36466 10.6702C2.48785 13.2514 2.54945 14.542 3.41914 15.3335C4.28882 16.125 5.64537 16.125 8.35847 16.125H9.64153C12.3546 16.125 13.7112 16.125 14.5809 15.3335C15.4506 14.542 15.5121 13.2514 15.6353 10.6702L15.75 8.25"
        stroke="#101419"
        strokeWidth="1.40625"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.13539 7.83229C3.40986 10.2558 6.2844 11.25 9 11.25C11.7156 11.25 14.5901 10.2558 15.8646 7.83229C16.473 6.67542 16.0123 4.5 14.514 4.5H3.486C1.98767 4.5 1.52702 6.67542 2.13539 7.83229Z"
        stroke="#101419"
        strokeWidth="1.40625"
      />
      <path
        d="M9 8.25H9.00674"
        stroke="#101419"
        strokeWidth="1.875"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 4.5L11.9338 4.2682C11.6038 3.11317 11.4388 2.53565 11.0459 2.20533C10.6531 1.875 10.1313 1.875 9.08772 1.875H8.91228C7.8687 1.875 7.3469 1.875 6.95407 2.20533C6.56124 2.53565 6.39624 3.11317 6.06623 4.2682L6 4.5"
        stroke="#101419"
        strokeWidth="1.40625"
      />
    </svg>
  );
};
