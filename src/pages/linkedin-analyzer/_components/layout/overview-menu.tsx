import { ChevrondownIcon } from "@/components/icons/chevron-down";
import { networkMenu } from "@/constants/network-menu";
import {
  Box,
  Collapsible,
  HStack,
  Menu,
  Portal,
  Text,
  VStack,
} from "@chakra-ui/react";
import { OverviewMenuList } from "./overview-menu-list";

export const OverviewMenu = () => {
  return (
    <>
      <Collapsible.Root
        gap="2"
        w="52"
        h="full"
        pr="6"
        borderRight="xs"
        borderRightColor="gray.300"
        py="2"
        display={{ base: "none", lg: "flex" }}
        flexDir="column"
        defaultOpen
        unmountOnExit
      >
        <Collapsible.Trigger>
          <HStack w="full" alignItems="center" gap="1" cursor="button">
            <Text fontSize="sm" fontWeight="semibold">
              Overview
            </Text>
            <ChevrondownIcon />
          </HStack>
        </Collapsible.Trigger>

        <Collapsible.Content>
          <VStack w="full" gap="3">
            {networkMenu.map((section) => (
              <OverviewMenuList
                key={section.title}
                title={section.title}
                icon={section.icon}
                items={section.items}
              />
            ))}
          </VStack>
        </Collapsible.Content>
      </Collapsible.Root>

      <Box display={{ base: "block", lg: "none" }} w="full">
        <Menu.Root>
          <Menu.Trigger w="full" focusRing="none" bgColor="transparent">
            <HStack w="full" alignItems="center" gap="1" cursor="pointer">
              <Text fontSize="sm" fontWeight="semibold">
                Overview
              </Text>
              <ChevrondownIcon />
            </HStack>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content>
                <VStack w="full" gap="3">
                  {networkMenu.map((section) => (
                    <OverviewMenuList
                      key={section.title}
                      title={section.title}
                      icon={section.icon}
                      items={section.items}
                    />
                  ))}
                </VStack>
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
      </Box>
    </>
  );
};
