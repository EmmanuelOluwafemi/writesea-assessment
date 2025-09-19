import { StarIcon } from "@/components/icons/star";
import { recommendedConnects } from "@/constants/recommended-connect";
import { Box, Icon, Text, VStack } from "@chakra-ui/react";
import { RecommendationCard } from "./recommendation-card";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "@/components/icons/chevron-right";

export const RecommendedConnect = () => {
  return (
    <Box w="full" p="3" rounded="lg" bg="gradients.purpleFade">
      <Box
        as="span"
        display="inline-flex"
        p="1"
        px="2"
        rounded="full"
        bg="gradients.white60"
        gap="2"
        mb="2"
      >
        <StarIcon />
        <Text color="primary.500" fontSize="sm" fontWeight="semibold">
          Recommended Connects
        </Text>
        <Text color="black" fontSize="sm" fontWeight="semibold">
          20
        </Text>
      </Box>

      <VStack w="full" gap="2">
        {recommendedConnects.map(({ name, bio, moreInfo, imageUrl, id }) => (
          <RecommendationCard
            key={id}
            name={name}
            bio={bio}
            moreInfo={moreInfo}
            imageUrl={imageUrl}
            id={id}
          />
        ))}

        <Box w="full">
          <Button variant="grayOutline" size="sm" rightIcon={<Icon as={ChevronRightIcon} />}>Show all 18</Button>
        </Box>
      </VStack>
    </Box>
  );
};
