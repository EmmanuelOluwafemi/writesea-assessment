export const spacing = {
  0: { value: "0" },
  1: { value: "0.25rem" },
  2: { value: "0.5rem" },
  3: { value: "0.75rem" },
  4: { value: "1rem" },
  5: { value: "1.25rem" },
  6: { value: "1.5rem" },
  8: { value: "2rem" },
  10: { value: "2.5rem" },
  12: { value: "3rem" },
  16: { value: "4rem" },
  20: { value: "5rem" },
  24: { value: "6rem" },
  32: { value: "8rem" },
  // Named spacing
  xs: { value: "0.5rem" },
  sm: { value: "1rem" },
  md: { value: "1.5rem" },
  lg: { value: "2rem" },
  xl: { value: "3rem" },
  "2xl": { value: "4rem" },
};

export const sizes = {
  ...spacing,
  prose: { value: "65ch" },
  container: {
    sm: { value: "640px" },
    md: { value: "768px" },
    lg: { value: "1024px" },
    xl: { value: "1280px" },
  },
};
