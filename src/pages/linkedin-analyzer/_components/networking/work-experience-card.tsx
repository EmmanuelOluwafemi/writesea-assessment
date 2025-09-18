import { Box, Highlight, Text } from "@chakra-ui/react";

export const WorkExperienceCard = () => {
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
        <Text color="gray.600" fontSize="sm">
          <Highlight
            query="Google"
            styles={{ fontWeight: "semibold", color: "black" }}
          >
            Work Experience at Google
          </Highlight>
        </Text>
      </Box>

      <Box style={{ maxWidth: "478px" }} pt="3" pl="9" pos="relative">
        <Box
          w="4"
          h="6"
          pos="absolute"
          top="1"
          left="2"
          transform="translateX(50%)"
            borderBottom="sm"
            borderLeft="sm"
            borderBottomColor="gray.300"
            borderLeftColor="gray.300"
            borderBottomLeftRadius="lg"
        />
        <Text color="black" fontSize="sm">
          <Highlight
            query={["company", "location", "skills", "role", "description"]}
            styles={{ color: "red.500" }}
          >
            Your Experience with Google is missing company location, skills, and
            role description
          </Highlight>
        </Text>
      </Box>
    </Box>
  );
};
