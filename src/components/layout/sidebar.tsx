import {
  Box,
  VStack,
  useBreakpointValue,
  Drawer,
  Center,
} from "@chakra-ui/react";
import { useMemo } from "react";
import { SidebarHeader } from "./sidebar-header";
import { SidebarMenu } from "./sidebar-menu";
import { SidebarFooter } from "./sidebar-footer";
import { MenuIcon } from "../icons/menu";

export const Sidebar = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  // const { open, onOpen, onClose } = useDisclosure();

  const SidebarContent = useMemo(() => (
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
  ), []);

  if (isMobile) {
    return (
      <>
        <Drawer.Root>
          <Drawer.Backdrop />
          <Drawer.Trigger pos="fixed" top="7" left="6" zIndex="overlay">
            <Center>
              <MenuIcon />
            </Center>
          </Drawer.Trigger>
          <Drawer.Positioner>
            <Drawer.Content maxW="233px" bgColor="white">
              <Drawer.CloseTrigger />
              <Box h="full" p="2">
                {SidebarContent}
              </Box>
            </Drawer.Content>
          </Drawer.Positioner>
        </Drawer.Root>
      </>
    );
  }

  // Desktop sidebar
  return (
    <Box
      as="aside"
      h="full"
      w="233px"
      pos="fixed"
      top="0"
      left="0"
      bottom="0"
      p="2"
      pr="0"
    >
      {SidebarContent}
    </Box>
  );
};
