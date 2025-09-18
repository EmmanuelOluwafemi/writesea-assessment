import { LinkIcon } from "@/components/icons/link";
import { Button } from "@/components/ui/button";
import type { RecommendedConnect } from "@/constants/recommended-connect";
import { Checkbox, Heading, HStack, Icon, Image, Text, VStack } from "@chakra-ui/react";

export const RecommendationCard = (props: RecommendedConnect) => {
  const { name, bio, moreInfo, imageUrl } = props;
  return (
    <HStack
      w="full"
      bg="white"
      border="xs"
      rounded="lg"
      borderColor="gray.200"
      p="3"
      gap="3"
    >
      <Checkbox.Root variant="solid" size="sm" flexShrink={0}>
        <Checkbox.HiddenInput />
        <Checkbox.Control />
      </Checkbox.Root>

      <HStack w="full" alignItems="flex-start">
        <HStack w="full" alignItems="flex-start">
            <Image src={imageUrl} w="11" h="11" />

            <VStack w="full" alignItems="flex-start" gap="0">
                <Heading fontSize="md" fontWeight="semibold" color="black">{name}</Heading>
                <Text fontSize="sm" fontWeight="medium" color="black">{bio}</Text>
                <Text fontSize="sm" fontWeight="medium" color="gray.500">{moreInfo}</Text>
            </VStack>
        </HStack>

        <Button variant="blueOutline" rightIcon={<Icon as={LinkIcon} />} size="sm">Connect</Button>
      </HStack>
    </HStack>
  );
};
