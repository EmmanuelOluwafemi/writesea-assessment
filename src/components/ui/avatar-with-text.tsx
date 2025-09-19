import type { AvatarWithTextProps } from "@/types"
import { Center, HStack, Text } from "@chakra-ui/react"

export const AvatarWithText = ({ initial, name, bg, initialColor }: AvatarWithTextProps) => {
  return (
    <HStack w="full" gap="2" alignItems="center" py="1">
      <Center bg={bg} w="8" h="8" rounded="md">
        <Text fontSize="md" color={initialColor}>
          {initial}
        </Text>
      </Center>
      <Text
        fontSize="sm"
        fontWeight="medium"
        maxW={{ base: "24" }}
        truncate
      >
        {name}
      </Text>
    </HStack>
  )
}