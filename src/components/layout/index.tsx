import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router";
import { Sidebar } from "./sidebar";

export function Layout() {
  return (
    <Box w="full" h="svh" p="2" pos="relative">
      <Sidebar />
      <Box h="full" style={{ marginLeft: "233px" }}>
        <Box
          w="full"
          h="full"
          bgColor="white"
          border="xs"
          borderColor="gray.300"
          rounded="xl"
          py="7"
          px="6"
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
