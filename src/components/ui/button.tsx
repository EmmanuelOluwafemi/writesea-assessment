import { buttonRecipe } from "@/theme/recipe/button"
import { chakra, useSlotRecipe } from "@chakra-ui/react"
import type { ReactNode } from "react"

interface ButtonProps {
  children: ReactNode
  size?: "sm" | "md" | "lg"
  variant?: "solid" | "outline" | "ghost"
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

export const Button = ({
  children,
  size,
  variant,
  leftIcon,
  rightIcon,
  ...rest
}: ButtonProps) => {
  const recipe = useSlotRecipe({ recipe: buttonRecipe })
  const styles = recipe({ size, variant })

  return (
    <chakra.button css={styles.root} {...rest}>
      {leftIcon && <chakra.span css={styles.icon}>{leftIcon}</chakra.span>}
      <chakra.span css={styles.label}>{children}</chakra.span>
      {rightIcon && <chakra.span css={styles.icon}>{rightIcon}</chakra.span>}
    </chakra.button>
  )
}