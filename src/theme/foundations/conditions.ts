export const conditions = {
  // Theme conditions
  light: "[data-theme=light] &",
  dark: "[data-theme=dark] &",

  // Responsive conditions
  mobile: "@media (max-width: 767px)",
  tablet: "@media (min-width: 768px) and (max-width: 1023px)",
  desktop: "@media (min-width: 1024px)",

  // Interactive conditions
  groupHover: ".group:hover &",
  groupFocus: ".group:focus &",
  groupActive: ".group:active &",

  // Accessibility conditions
  motionReduce: "@media (prefers-reduced-motion: reduce)",
  highContrast: "@media (prefers-contrast: high)",
};
