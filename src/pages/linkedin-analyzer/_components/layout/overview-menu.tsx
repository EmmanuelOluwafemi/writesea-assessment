import { ChevrondownIcon } from "@/components/icons/chevron-down";
import { networkMenu } from "@/constants/network-menu";
import { HStack, Text, VStack } from "@chakra-ui/react";
import { OverviewMenuList } from "./overview-menu-list";

export const OverviewMenu = () => {
  return (
    <VStack
      gap="2"
      w="full"
      h="full"
      maxW="52"
      pr="6"
      borderRight="xs"
      borderRightColor="gray.300"
      py="2"
    >
      <HStack w="full" alignItems="center" gap="1" cursor="button">
        <Text fontSize="sm" fontWeight="semibold">
          Overview
        </Text>
        <ChevrondownIcon />
      </HStack>

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
    </VStack>
  );
};
