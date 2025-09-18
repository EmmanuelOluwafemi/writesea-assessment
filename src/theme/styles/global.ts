// src/theme/styles/global.ts
export const globalCss = {
  body: {
    fontFamily: "body",
    bg: "white",
    color: "black",
    lineHeight: "normal",
  },
  "*::placeholder": {
    color: "text.muted",
    opacity: 1,
  },
  "*, *::before, *::after": {
    borderColor: "border.default",
    wordWrap: "break-word",
  },
  // Focus styles
  "*:focus-visible": {
    outline: "2px solid",
    outlineColor: "primary.solid",
    outlineOffset: "2px",
  },
};
