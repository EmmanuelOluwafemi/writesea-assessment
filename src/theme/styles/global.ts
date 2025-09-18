import { defineGlobalStyles } from "@chakra-ui/react";

export const globalCss = defineGlobalStyles({
  body: {
    fontFamily: "body",
    bg: "white",
    color: "black",
    lineHeight: "normal",
  },
  "*, *::before, *::after": {
    borderColor: "border.default",
    wordWrap: "break-word",
  },
  "*:focus-visible": {
    outline: "2px solid",
    outlineColor: "primary.solid",
    outlineOffset: "2px",
  },
});
