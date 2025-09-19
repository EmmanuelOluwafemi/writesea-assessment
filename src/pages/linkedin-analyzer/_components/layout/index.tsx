import { DashboardHeader } from "@/components/layout/dashboard-header"
import { Box, Stack, VStack, useBreakpointValue } from "@chakra-ui/react"
import { Outlet } from "react-router"
import { OverviewMenu } from "./overview-menu"

export const AnalyzerWrapper = () => {
  // Determine if we should stack vertically based on screen size
  const direction = useBreakpointValue<'column' | 'row'>({ 
    base: 'column',    // Mobile (0-48em / 0-768px)
    lg: 'row'          // Tablet and up (48em+ / 768px+)
  })

  // Adjust spacing based on screen size
  const spacing = useBreakpointValue({
    base: 4,           // Smaller spacing on mobile
    md: 6              // Default spacing on larger screens
  })

  // Adjust content height based on layout direction
  const contentHeight = useBreakpointValue({
    base: "auto",      // Auto height on mobile for stacked layout
    md: "full"         // Full height on desktop for side-by-side
  })

  // Adjust main container height calculation
  const containerHeight = useBreakpointValue({
    base: "88%",      // Auto height on mobile
    lg: "94%"          // Fixed percentage on desktop
  })

  return (
    <Box w="full" h="full">
      <DashboardHeader />

      <Stack 
        direction={direction}
        mt={spacing}
        h={containerHeight}
        gap={spacing}
      >
        {/* Side menu - will be full width on mobile, sidebar on desktop */}
        <Box 
          w={{ base: "full", md: "auto" }}
          flexShrink={0}  // Prevent shrinking on desktop
        >
          <OverviewMenu />
        </Box>

        {/* Main content area */}
        <VStack 
          alignItems="center" 
          h={contentHeight}
          w="full" 
          overflowY="auto"
          flex={1}
          gap={4}
        >
          <Outlet />
        </VStack>
      </Stack>
    </Box>
  )
}