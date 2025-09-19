import { defineSlotRecipe } from "@chakra-ui/react";

export const menuRecipe = defineSlotRecipe({
  className: "menu",
  slots: ["root", "trigger", "content", "item", "divider", "groupTitle"],

  base: {
    root: {
      w: "fit-content",
    },
    trigger: {
      cursor: "pointer",
      bg: "transparent",
      _hover: { bg: "transparent" },
      _expanded: { bg: "transparent" },
    },
    content: {
      rounded: "md",
      shadow: "soft",
      borderWidth: "1px",
      borderColor: "gray.200",
      py: "2",
      bg: "white",
      minW: "200px",
    },
    item: {
      px: "3",
      py: "2",
      rounded: "md",
      cursor: "pointer",
      fontSize: "sm",
      color: "gray.700",
      _hover: { bg: "gray.100", color: "black" },
      _focus: { bg: "gray.50" },
    },
    divider: {
      my: "2",
      borderColor: "gray.200",
    },
    groupTitle: {
      px: "3",
      py: "1",
      fontSize: "xs",
      textTransform: "uppercase",
      color: "gray.500",
      fontWeight: "semibold",
    },
  },

  variants: {
    variant: {
      solid: {
        trigger: {
          bg: "blue.500",
          color: "white",
          _hover: { bg: "blue.600" },
          _expanded: { bg: "blue.700" },
        },
        item: {
          _hover: { bg: "blue.50", color: "blue.700" },
        },
      },
      subtle: {
        trigger: {
          bg: "gray.50",
          color: "gray.700",
          _hover: { bg: "gray.100" },
        },
      },
    },
  },

  defaultVariants: {
    variant: "subtle",
  },
});
