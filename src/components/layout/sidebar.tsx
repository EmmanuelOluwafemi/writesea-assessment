import { Box, VStack } from "@chakra-ui/react";
import { SidebarHeader } from "./sidebar-header";
import { SidebarMenu } from "./sidebar-menu";
import { SidebarFooter } from "./sidebar-footer";

export const Sidebar = () => {
  return (
    <Box
      as="aside"
      h="full"
      style={{ width: "233px" }}
      pos="fixed"
      top="0"
      left="0"
      bottom="0"
      p="2"
      pr="0"
    >
      <VStack
        w="full"
        h="full"
        justifyContent="space-between"
        bgColor="gray.50"
        p="4"
        rounded="lg"
      >
        <VStack w="full" gap="6">
          <SidebarHeader />

          <SidebarMenu />
        </VStack>

        <SidebarFooter />
      </VStack>
    </Box>
  );
};
