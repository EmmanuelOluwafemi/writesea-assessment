import { QuestionIcon } from "@/components/icons/question";
import { Tooltip } from "@/components/ui/tooltip";
import { Box, HStack, Stack, Text } from "@chakra-ui/react";

const proposedBreakdowns = [
  {
    title: "Product Designer",
    percentage: 60,
    color: "purple.500",
  },
  {
    title: "Founders",
    percentage: 20,
    color: "orange.500",
  },
  {
    title: "Creators",
    percentage: 10,
    color: "blue.600",
  },
  {
    title: "Others",
    percentage: 10,
    color: "skyblue.500",
  },
];

export const ProposedNetworkBreakdown = () => {
  return (
    <Box
      w="full"
      p="3"
      border="xs"
      borderColor="gray.200"
      rounded="lg"
      bgColor="white"
    >
      <Tooltip content="See a detailed breakdown of your LinkedIn network by field.">
        <Box
          as="span"
          display="inline-flex"
          border="xs"
          borderColor="gray.300"
          p="1"
          px="2"
          rounded="full"
          alignItems="center"
          gap="1"
        >
          <Text color="black" fontSize="sm" fontWeight="medium">
            Proposed Network Breakdown
          </Text>
          <QuestionIcon />
        </Box>
      </Tooltip>

      <Stack
        direction={{ base: "column", md: "row" }}
        w="full"
        pt="3"
        gap="0.5"
      >
        {proposedBreakdowns.map((breakdown, index) => (
          <Stack
            direction={{ base: "row", md: "column" }}
            w={{ base: "full", md: `${breakdown.percentage}%` }}
            minW={{ base: "auto", md: "80px", xl: index === 1 ? "180px" : "100px" }}
            alignItems={{ base: "center" }}
          >
            <Box
              w={{base: `${breakdown.percentage}%`, md:"full"}}
              maxW={{ base: "150px", md: "full" }}
              height={{base: "2", md: "6"}}
              order={{ base: "2", md: "1" }}
              rounded="sm"
              bgColor={breakdown.color}
            />

            <HStack
              w="full"
              order={{ base: "1", md: "2" }}
              justifyContent="flex-start"
              gap="1"
            >
              <Box w="2" h="2" flexShrink={0} bgColor={breakdown.color} rounded="full" />
              <Text fontSize={{ base: "sm", md:"xs"}} fontWeight="medium" truncate>
                {breakdown.title} {"-"}
              </Text>
              <Text fontSize="xs">{breakdown.percentage + "%"}</Text>
            </HStack>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};
