import { ListIcon } from "@/components/icons/list";
import { AccordionCard } from "@/components/ui/accordion-card";
import { Box, HStack, Text } from "@chakra-ui/react";

const missingSections = [
  "Certifications",
  "Recommendations",
  "Volunteer Experience",
];

export const MissingSectionCard = () => {
  return (
    <AccordionCard
      title="Missing Sections"
      count={3}
      icon={
        <Box color="blue.500">
          <ListIcon />
        </Box>
      }
      badgeBg="blue.100"
      bg="blue.50"
    >
      <Box px="1" py="1">
        <Text color="black" fontSize="sm" fontWeight="medium">
          Your LinkedIn is missing the following sections:
        </Text>

        <HStack mt="2" flexWrap="wrap">
          {missingSections.map((section) => (
            <Box
              as="span"
              display="inline-block"
              bg="white"
              rounded="full"
              px="6"
              py="1"
              key={section}
            >
              <Text fontSize="sm" fontWeight="medium">{section}</Text>
            </Box>
          ))}
        </HStack>
      </Box>
    </AccordionCard>
  );
};
