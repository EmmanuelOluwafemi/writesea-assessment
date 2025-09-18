// theme/recipes/button.recipe.ts
import { defineSlotRecipe } from "@chakra-ui/react"

export const buttonRecipe = defineSlotRecipe({
  slots: ["root", "label", "icon"],

  base: {
    root: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "semibold",
      rounded: "lg",
      cursor: "button"
    //   _disabled: {
    //     opacity: "0.6",
    //     cursor: "not-allowed",
    //   },
    },
    label: {
      lineHeight: "normal",
    },
    icon: {
      display: "inline-flex",
      alignItems: "center",
    },
  },

  variants: {
    size: {
      sm: {
        root: { px: "3", h: "8", textStyle: "sm", rounded: "md" },
        icon: { boxSize: "4", pl: "2" },
      },
      md: {
        root: { px: "4", h: "10", textStyle: "md" },
        icon: { boxSize: "5" },
      },
      lg: {
        root: { px: "6", h: "12", textStyle: "lg" },
        icon: { boxSize: "6" },
      },
    },

    variant: {
      solid: {
        root: {
          bg: "primary.700",
          color: "white",
          _hover: { bg: "primary.700" },
          _active: { bg: "primary.700" },
        },
      },
      outline: {
        root: {
            bg: "transparent",
            color: "primary.700",
            border: "sm",
            borderColor: "primary.700",
            _active: { bg: "primary.100" },
        }
      },
      blueOutline: {
        root: {
          bg: "transparent",
          color: "blue.400",
          border: "xs",
          borderColor: "blue.400",
        }
      },
      ghost: {
        root: {
          color: "primary.700",
          _hover: { bg: "gray.50" },
          _active: { bg: "gray.100" },
        },
      },
    },
  },

  defaultVariants: {
    size: "md",
    variant: "solid",
  },
})
