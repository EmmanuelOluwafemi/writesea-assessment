import { buttonRecipe } from "@/theme/recipe/button"
import { chakra, useSlotRecipe } from "@chakra-ui/react"
import type { ReactNode } from "react"
import { useMemo } from "react"

interface CustomButtonProps {
  children: ReactNode
  size?: "sm" | "md" | "lg"
  variant?: "solid" | "outline" | "ghost" | "blueOutline" | "grayOutline"
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  flex?: string
  textWrap?: string
}

export const Button = ({
  children,
  size,
  variant,
  leftIcon,
  rightIcon,
  flex,
  textWrap,
  ...rest
}: CustomButtonProps) => {
  const recipe = useSlotRecipe({ recipe: buttonRecipe })
  const styles = useMemo(() => recipe({ size, variant }), [recipe, size, variant])

  return (
    <chakra.button css={styles.root} flex={flex} textWrap={textWrap} {...rest}>
      {leftIcon && <chakra.span css={styles.icon}>{leftIcon}</chakra.span>}
      <chakra.span css={styles.label}>{children}</chakra.span>
      {rightIcon && <chakra.span css={styles.icon}>{rightIcon}</chakra.span>}
    </chakra.button>
  )
}