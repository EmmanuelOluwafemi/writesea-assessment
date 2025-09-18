import { NetworkFillIcon } from "@/components/icons/network";
import { AccordionCard } from "@/components/ui/accordion-card";
import { Box, VStack } from "@chakra-ui/react";
import { WorkExperienceCard } from "./work-experience-card";
import { ProposedNetworkBreakdown } from "./proposed-network-breakdown";
import { RecommendedConnect } from "./recommended-connect";

export const NetworkCard = () => {
  return (
    <AccordionCard
      title="Network"
      icon={
        <Box color="blue.500">
          <NetworkFillIcon />
        </Box>
      }
    >
        <VStack w="full" gap="1">
            <WorkExperienceCard />
            <ProposedNetworkBreakdown />
            <RecommendedConnect />
        </VStack>
    </AccordionCard>
  );
};
