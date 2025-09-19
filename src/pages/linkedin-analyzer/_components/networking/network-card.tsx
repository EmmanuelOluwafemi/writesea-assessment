import { NetworkFillIcon } from "@/components/icons/network";
import { AccordionCard } from "@/components/ui/accordion-card";
import { Box, VStack } from "@chakra-ui/react";
import { Suspense, lazy } from "react";
import { WorkExperienceCard } from "./work-experience-card";
import { ProposedNetworkBreakdown } from "./proposed-network-breakdown";

// Lazy load the heaviest component that's typically below the fold
const RecommendedConnect = lazy(() => import("./recommended-connect").then(m => ({ default: m.RecommendedConnect })));

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
            <Suspense fallback={<Box p="4" textAlign="center">Loading recommendations...</Box>}>
              <RecommendedConnect />
            </Suspense>
        </VStack>
    </AccordionCard>
  );
};
