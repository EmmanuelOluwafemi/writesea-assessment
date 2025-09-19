import type { SidebarMenuItemProps } from "@/types";
import { Box, HStack, Text } from "@chakra-ui/react";
import { useMemo } from "react";
import { Link, useLocation } from "react-router";

export const SidebarMenuItem = ({ name, href, icon }: SidebarMenuItemProps) => {
  const location = useLocation();
  const Icon = icon;

  const isCurrentPage = useMemo(() => {
    if (href === "/") {
      // home should only be active on exact "/"
      return location.pathname === "/";
    }
    // for nested routes like /blog and /blog/new
    return location.pathname.startsWith(href);
  }, [location.pathname, href]);

  return (
    <Link style={{ width: "100%" }} to={href}>
      <HStack
        w="full"
        alignItems="center"
        justifyContent="flex-start"
        gap="2"
        bgColor={isCurrentPage ? "primary.100" : "transparent"}
        p="1.5"
        rounded="md"
        role="group"
        _hover={{
          bgColor: "primary.100",
        }}
      >
        <Box
          h="6"
          w="0.5"
          bgColor={isCurrentPage ? "primary.700" : "transparent"}
          rounded="sm"
        />
        <Box color={isCurrentPage ? "primary.700" : "black"}>
          <Icon />
        </Box>
        <Text
          as="p"
          fontSize="sm"
          fontWeight="medium"
          color={isCurrentPage ? "primary.700" : "black"}
        >
          {name}
        </Text>
      </HStack>
    </Link>
  );
};
