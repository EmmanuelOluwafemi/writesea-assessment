import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router";
import { Sidebar } from "./sidebar";

export function Layout() {
  return (
    <Box w="full" h="svh" p="2" pos="relative">
      <Sidebar />
      <Box h="full" ml={{ base: "0", md: "233px" }}>
        <Box
          w="full"
          h="full"
          bgColor="white"
          border="xs"
          borderColor="gray.300"
          rounded="xl"
          py={{ base: "4", md: "7" }}
          px={{ base: "4", md: "6" }}
          shadow="dashboardContent"
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
