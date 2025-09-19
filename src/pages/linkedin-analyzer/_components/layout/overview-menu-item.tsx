import { ChevrondownIcon } from "@/components/icons/chevron-down";
import type { OverviewMenuItemProps } from "@/types";
import { Collapsible, Text, VStack } from "@chakra-ui/react";
import { useMemo } from "react";
import { Link, useLocation } from "react-router";

export const OverviewMenuItem = ({
  title,
  link,
  children,
}: OverviewMenuItemProps) => {
  const location = useLocation();

  const isCurrentPath = useMemo(() => {
    return link === location.pathname;
  }, [link, location.pathname]);

  if (!children.length)
    return (
      <Link style={{ width: "100%" }} key={title} to={link}>
        <Text
          px="2"
          py="1.5"
          display="inline-block"
          bgColor={isCurrentPath ? "primary.200" : "transparent"}
          fontSize="sm"
          fontWeight="semibold"
          color="black"
          rounded="full"
          _hover={{
            bgColor: "primary.200",
          }}
        >
          {title}
        </Text>
      </Link>
    );

  return (
    <Collapsible.Root w="full" px="2">
      <Collapsible.Trigger
        paddingY="3"
        display="inline-flex"
        gap="0.5"
        alignItems="center"
      >
        <Text w="full" fontSize="sm" fontWeight="semibold" color="black">
          {title}
        </Text>
        <ChevrondownIcon />
      </Collapsible.Trigger>
      <Collapsible.Content>
        <VStack w="full">
          {children.map(({ title, link }) => (
            <Link style={{ width: "100%" }} key={title} to={link}>
              <Text
                px="2"
                py="1.5"
                display="inline-block"
                bgColor={isCurrentPath ? "primary.200" : "transparent"}
                fontSize="sm"
                fontWeight="semibold"
                color="black"
                rounded="full"
                _hover={{
                  bgColor: "primary.200",
                }}
              >
                {title}
              </Text>
            </Link>
          ))}
        </VStack>
      </Collapsible.Content>
    </Collapsible.Root>
  );
};
