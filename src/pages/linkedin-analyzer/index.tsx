import { VStack } from "@chakra-ui/react";
import { SummaryCard } from "./_components/networking/summary-card";
import { MissingSectionCard } from "./_components/networking/missing-section-card";
import { NetworkCard } from "./_components/networking/network-card";

export const Networking = () => {
  return (
    <VStack
      w="full"
      h="full"
      style={{ maxWidth: "849px" }}
      gap="4"
    >
      <SummaryCard />
      <MissingSectionCard />
      <NetworkCard />
    </VStack>
  );
};
