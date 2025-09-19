import { Heading, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router";
import { Button } from "../ui/button";
import type { NotFoundProps } from "@/types";

export const NotFound = ({ scope = "layout" }: NotFoundProps) => {
  if (scope === "linkedin") {
    return (
      <VStack w="full" h="full" align="center" justify="center" gap={4}>
        <Heading fontSize="2xl" fontWeight="semibold" color="primary.700">
          Page not found in LinkedIn Analyzer
        </Heading>
        <Text fontSize="md" color="gray.600">
          Please choose a valid analyzer section.
        </Text>
        <Link to="/linkedin-analyzer">
          <Button variant="outline">Back to Analyzer</Button>
        </Link>
      </VStack>
    );
  }

  // Default layout-level 404
  return (
    <VStack
      h="100vh"
      align="center"
      justify="center"
      gap={4}
      textAlign="center"
    >
      <Heading fontSize="6xl" fontWeight="bold" color="primary.700">
        404
      </Heading>
      <Text fontSize="lg" color="gray.600">
        Oops! The page you’re looking for doesn’t exist.
      </Text>
      <Link to="/">
        <Button variant="solid">
            Go back home
        </Button>
      </Link>
    </VStack>
  );
};
