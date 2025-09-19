type IconProps = React.SVGProps<SVGSVGElement>;

export const QuestionIcon = (props: IconProps) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clip-path="url(#clip0_10_366)">
      <circle cx="9" cy="9" r="7.5" stroke="#1E212C" stroke-width="1.40625" />
      <path
        d="M7.5 6.75C7.5 5.92157 8.17157 5.25 9 5.25C9.82843 5.25 10.5 5.92157 10.5 6.75C10.5 7.04861 10.4127 7.32685 10.2623 7.56059C9.81406 8.25725 9 8.92157 9 9.75V10.125"
        stroke="#1E212C"
        stroke-width="1.40625"
        stroke-linecap="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.994 12.75H9.00073H8.994Z"
        fill="#101419"
      />
      <path
        d="M8.994 12.75H9.00073"
        stroke="#1E212C"
        stroke-width="1.875"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_10_366">
        <rect width="18" height="18" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
