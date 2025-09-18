import { Box, Heading, HStack, Text, type BoxProps } from "@chakra-ui/react";
import { ChevronFillIcon } from "../icons/chevron-fill";
import type { PropsWithChildren } from "react";
import type React from "react";

interface AccordionCardProps extends PropsWithChildren {
  title: string;
  icon: React.ReactNode;
  count?: number;
  bg?: BoxProps["bgColor"];
  badgeBg?: BoxProps["bgColor"];
}

export const AccordionCard = ({
  children,
  title,
  icon,
  count,
  bg,
  badgeBg
}: AccordionCardProps) => {
  return (
    <Box w="full" bgColor={bg ?? "gray.50"} p="2" rounded="xl">
      <HStack alignItems="center" justifyContent="space-between">
        <HStack
          alignItems="center"
          gap="2"
          bgColor={badgeBg ?? "gray.400"}
          rounded="full"
          px="2.5"
        >
          {icon}
          <Heading fontSize="sm" fontWeight="semibold" color="black">
            {title}
          </Heading>
          {count ? <Text fontSize="sm" fontWeight="semibold" color="black">{count}</Text> : null}
        </HStack>

        <ChevronFillIcon />
      </HStack>

      <Box mt="2">{children}</Box>
    </Box>
  );
};
