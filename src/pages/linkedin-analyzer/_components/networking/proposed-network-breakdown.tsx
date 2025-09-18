import { Box, HStack, Text, VStack } from "@chakra-ui/react";

const proposedBreakdowns = [
    {
        title: "Product Designer",
        percentage: 60,
        color: "purple.500"
    },
    {
        title: "Founders",
        percentage: 20,
        color: "orange.500"
    },
    {
        title: "Creators",
        percentage: 10,
        color: "blue.600"
    },
    {
        title: "Others",
        percentage: 10,
        color: "skyblue.500"
    }
]

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
      <Box
        as="span"
        display="inline-block"
        border="xs"
        borderColor="gray.300"
        p="1"
        px="2"
        rounded="full"
      >
        <Text color="black" fontSize="sm" fontWeight="medium">
          Proposed Network Breakdown
        </Text>
      </Box>

      <HStack w="full" pt="3" gap="0.5">
        {
            proposedBreakdowns.map((breakdown) => (
                <VStack style={{ width: `${breakdown.percentage}%` }}>
                    <Box w="full" height="6" rounded="sm" bgColor={breakdown.color} />

                    <HStack w="full" justifyContent="flex-start" gap="1">
                        <Box w="2" h="2" bgColor={breakdown.color} rounded="full" />
                        <Text fontSize="xs" truncate>{breakdown.title} {"-"}</Text>
                        <Text fontSize="xs">{breakdown.percentage + "%"}</Text>
                    </HStack>
                </VStack>
            ))
        }
      </HStack>
    </Box>
  );
};
