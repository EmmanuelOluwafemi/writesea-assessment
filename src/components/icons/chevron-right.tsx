import React from "react";

type IconProps = React.SVGProps<SVGSVGElement>;

export const ChevronRightIcon: React.FC<IconProps> = (props) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_50_55)">
        <path
          d="M8 0.833008C11.958 0.833008 15.167 4.04196 15.167 8C15.167 11.958 11.958 15.167 8 15.167C4.04196 15.167 0.833008 11.958 0.833008 8C0.833008 4.04196 4.04196 0.833008 8 0.833008ZM7.52539 4.92285C7.29847 4.6329 6.87882 4.58168 6.58887 4.80859C6.29926 5.0355 6.248 5.4543 6.47461 5.74414L8.24023 8L6.47461 10.2559C6.24798 10.5457 6.29927 10.9645 6.58887 11.1914C6.87882 11.4183 7.29847 11.3671 7.52539 11.0771L9.45508 8.61133C9.73671 8.25146 9.73672 7.74854 9.45508 7.38867L7.52539 4.92285Z"
          fill="#1E212C"
        />
      </g>
      <defs>
        <clipPath id="clip0_50_55">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
