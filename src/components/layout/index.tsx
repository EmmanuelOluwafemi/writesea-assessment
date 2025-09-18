import { Box, Heading } from "@chakra-ui/react";
import { Outlet } from "react-router";

export function Layout() {
  return (
    <Box w="full" h="full">
        <Heading>Hello</Heading>
      <Outlet />
    </Box>
  );
}
