import { DashboardHeader } from "@/components/layout/dashboard-header"
import { Box, HStack } from "@chakra-ui/react"
import { Outlet } from "react-router"
import { OverviewMenu } from "./overview-menu"

export const AnalyzerWrapper = () => {
  return (
    <Box w="full" h="full">
        <DashboardHeader />

        <HStack mt="6" style={{ height: "94%" }}>
            {/* Side menu */}
            <OverviewMenu />

            <Box h="full" overflowY="auto">
                <Outlet />
            </Box>
        </HStack>
    </Box>
  )
}
