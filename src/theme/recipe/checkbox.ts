import { defineSlotRecipe } from "@chakra-ui/react";
import { checkboxAnatomy } from "@chakra-ui/react/anatomy"; // ensures slot names match the component

export const checkboxRecipe = defineSlotRecipe({
  className: "checkbox",
  slots: checkboxAnatomy.keys(), // use anatomy keys to avoid mismatches
  base: {
    root: {
      display: "inline-flex",
      alignItems: "center",
      gap: "2",
      cursor: "pointer",
    },
    // visual square that represents the box
    control: {
      w: "4",
      h: "4",
      rounded: "sm",
      borderWidth: "1", // token, not "1px"
      borderColor: "gray.300",
      bg: "white",
      cursor: "pointer",
      // style when checked — safe: use both _checked and attribute selector
      _checked: {
        bg: "primary.500",
        borderColor: "primary.500",
        color: "white",
      },
      // sometimes the control is styled via data-* attributes, add selector fallback:
      "&[data-checked]": {
        bg: "primary.500",
        borderColor: "primary.500",
      },
      _disabled: {
        opacity: 0.6,
        cursor: "not-allowed",
      },
    },
    label: {
      fontSize: "sm",
      fontWeight: "medium",
      color: "gray.700",
      _disabled: { color: "gray.400" },
    },
  },
  variants: {
    size: {
      sm: {
        control: { w: "3.5", h: "3.5" },
        label: { fontSize: "xs" },
      },
      md: {
        control: { w: "4", h: "4" },
        label: { fontSize: "sm" },
      },
      lg: {
        control: { w: "5", h: "5" },
        label: { fontSize: "md" },
      },
    },
    variant: {
      solid: {
        control: {
          borderWidth: "1px",
          _checked: {
            bg: "primary.500",
            borderColor: "primary.500",
            color: "white",
          },
        },
      },
      outline: {
        control: {
          borderWidth: "1.5px",
          _checked: {
            borderColor: "primary.500",
            color: "primary.500",
          },
        },
      },
    },
    // you can add more named visual variants
    color: {
      primary: {
        control: {
          "&[data-checked]": { bg: "primary.700", borderColor: "primary.700" },
          _checked: { bg: "primary.700", borderColor: "primary.700" },
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
    color: "primary",
  },
});
