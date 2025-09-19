import type { SidebarMenuItemProps } from "@/types";
import { Box, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router";

export const SidebarFooterMenuItem = ({
  name,
  href,
  icon,
}: SidebarMenuItemProps) => {
  const Icon = icon;

  return (
    <Link style={{ width: "100%" }} to={href} role="group">
      <HStack
        w="full"
        alignItems="center"
        justifyContent="flex-start"
        gap="2"
        p="1.5"
        rounded="md"
      >
        <Box h="6" w="0.5" rounded="sm" />
        <Box color="gray.500" _groupHover={{ color: "black" }}>
          <Icon />
        </Box>
        <Text
          as="p"
          fontSize="sm"
          fontWeight="medium"
          color="gray.500"
          _groupHover={{ color: "black" }}
        >
          {name}
        </Text>
      </HStack>
    </Link>
  );
};
