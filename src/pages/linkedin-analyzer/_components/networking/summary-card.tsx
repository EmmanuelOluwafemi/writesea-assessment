import { GradeIcon } from "@/components/icons/grade";
import { ListIcon } from "@/components/icons/list";
import { AccordionCard } from "@/components/ui/accordion-card";
import { Box, HStack, Stack, Text } from "@chakra-ui/react";

export const SummaryCard = () => {
  return (
    <AccordionCard title="Summary" icon={<ListIcon color="black" />} isClosable>
      <Stack
        direction={{ base: "column", md: "row" }}
        w="full"
        pos="relative"
        py="6"
      >
        <Box
          pos="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="gradients.greenFade"
          opacity="0.5"
          rounded="lg"
        />
        <Box
          pos="relative"
          borderRight="xs"
          borderRightColor={{ base: "transparent", md: "gray.300" }}
          pr="2"
        >
          <GradeIcon />
        </Box>

        <HStack pos="relative" alignItems="center" px={{ base: "4", md: "7" }}>
          <Text
            fontSize={{ base: "sm", md: "md" }}
            fontWeight="medium"
            color="black"
            lineHeight={{ base: "relaxed" }}
          >
            Strong professional presence with detailed work experience and
            networking indicators. The profile would benefit from a more
            personalized summary and stronger proof through recommendations and
            certifications. This will increases your chances of being seen by
            recruiters.
          </Text>
        </HStack>
      </Stack>
    </AccordionCard>
  );
};
