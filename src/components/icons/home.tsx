import React from "react";

type IconProps = React.SVGProps<SVGSVGElement>;

export const HomeIcon: React.FC<IconProps> = (props) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_10_253)">
        <path
          d="M11.25 12.75C10.6504 13.2168 9.86268 13.5 9 13.5C8.13732 13.5 7.34964 13.2168 6.75 12.75"
          stroke="currentColor"
          strokeWidth="1.40625"
          strokeLinecap="round"
        />
        <path
          d="M1.76354 9.91009C1.49878 8.18718 1.3664 7.32573 1.69212 6.56203C2.01785 5.79834 2.74052 5.27582 4.18585 4.2308L5.26574 3.45C7.06372 2.15 7.96271 1.5 9 1.5C10.0373 1.5 10.9363 2.15 12.7343 3.45L13.8141 4.2308C15.2595 5.27582 15.9821 5.79834 16.3079 6.56203C16.6336 7.32573 16.5012 8.18718 16.2365 9.91009L16.0107 11.3793C15.6353 13.8217 15.4477 15.0429 14.5717 15.7714C13.6958 16.5 12.4152 16.5 9.85411 16.5H8.14589C5.58475 16.5 4.30418 16.5 3.42825 15.7714C2.55232 15.0429 2.36465 13.8217 1.98932 11.3793L1.76354 9.91009Z"
          stroke="currentColor"
          strokeWidth="1.40625"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_10_253">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};