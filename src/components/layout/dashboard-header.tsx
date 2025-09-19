import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { LinkedinFillIcon } from "../icons/linkedin-fill";
import { Button } from "../ui/button";

export const DashboardHeader = () => {
  return (
    <VStack align="stretch" gap={{ base: 3, md: 0 }} w="full">
      <HStack
        align="center"
        justify="space-between"
        flexDir={{ base: "column", lg: "row" }}
        gap={{ base: 3, lg: 6 }}
      >
        {/* Left Section */}
        <HStack
          w="full"
          align="center"
          justifyContent="flex-start"
          gap="2"
          flexWrap="nowrap"
          textAlign="left"
          pl={{ base: "10", md: "0" }}
        >
          <Heading fontWeight="semibold" whiteSpace="nowrap" fontSize={{ base: "xs", sm: "sm" }}>

            Optimized Result for
          </Heading>

          <Box
            as="span"
            p="0.5"
            px="2.5"
            rounded="full"
            border="xs"
            borderColor="gray.300"
            display="inline-flex"
            alignItems="center"
            gap="1"
            maxW={{ base: "full", md: "auto" }}
            overflow="hidden"
          >
            <LinkedinFillIcon />
            <Text fontSize={{ base: "xs", sm: "sm" }} whiteSpace="nowrap" truncate fontWeight="medium">
              linkedin.com/in/inioluwa-chris-271104/
            </Text>
          </Box>
        </HStack>

        {/* Right Section */}
        <HStack gap="2" w={{ base: "full", lg: "auto" }}>
          <Button variant="outline" size="sm" flex="1" textWrap="nowrap">
            Export Report
          </Button>
          <Button variant="solid" size="sm" flex="1" textWrap="nowrap">
            Re-Analyze
          </Button>
        </HStack>
      </HStack>
    </VStack>
  );
};
