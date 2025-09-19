import {
  Tooltip as ChakraTooltip,
  Portal,
  Box,
} from "@chakra-ui/react"
import * as React from "react"

export interface TooltipV3Props extends ChakraTooltip.RootProps {
  content: React.ReactNode
  showArrow?: boolean
  portalled?: boolean
  portalRef?: React.RefObject<HTMLElement | null>
  contentProps?: ChakraTooltip.ContentProps
  disabled?: boolean
}

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipV3Props>(
  function TooltipV3(props, ref) {
    const {
      showArrow = true,
      children,
      disabled,
      portalled = true,
      content,
      contentProps,
      portalRef,
      ...rest
    } = props

    if (disabled) {
      return <>{children}</>
    }

    return (
      <ChakraTooltip.Root {...rest}>
        <ChakraTooltip.Trigger asChild>
          <Box as="span" display="inline-block">
            {children}
          </Box>
        </ChakraTooltip.Trigger>

        <Portal disabled={!portalled} container={portalRef}>
          <ChakraTooltip.Positioner>
            <ChakraTooltip.Content
              ref={ref}
              whiteSpace="nowrap"
              display="inline-block"
              maxW="fit-content"
              px="2"
              py="1"
              bg="fg.default"
              color="canvas.default"
              rounded="md"
              shadow="recommendedCard"
              lineHeight="short"
              fontSize="sm"
              border="xs"
              borderColor="gray.300"
              {...contentProps}
            >
              {showArrow && (
                <ChakraTooltip.Arrow />
              )}
              {content}
            </ChakraTooltip.Content>
          </ChakraTooltip.Positioner>
        </Portal>
      </ChakraTooltip.Root>
    )
  }
)
