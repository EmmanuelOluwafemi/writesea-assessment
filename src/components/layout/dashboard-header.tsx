import { Box, Heading, HStack } from "@chakra-ui/react";
import { LinkedinFillIcon } from "../icons/linkedin-fill";
import { Button } from "../ui/button";

export const DashboardHeader = () => {
  return (
    <HStack alignItems="center" justifyContent="space-between">
      <HStack alignItems="center" gap="2">
        <Heading fontWeight="semibold" fontSize="sm">
          Optimized Result for
        </Heading>

        <Box
          as="span"
          p="0.5"
          px="2.5"
          fontSize="sm"
          fontWeight="medium"
          rounded="full"
          border="xs"
          borderColor="gray.300"
          display="inline-flex"
          alignItems="center"
          gap="1"
        >
          <LinkedinFillIcon />
          linkedin.com/in/inioluwa-chris-271104/
        </Box>
      </HStack>

      <HStack>
        <Button variant="outline">Export Report</Button>
        <Button variant="solid">Re-Analyze</Button>
      </HStack>
    </HStack>
  );
};
