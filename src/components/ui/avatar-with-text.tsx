import type { AvatarWithTextProps } from "@/types"
import { Center, Heading, HStack } from "@chakra-ui/react"

export const AvatarWithText = ({ initial, name, bg, initialColor }: AvatarWithTextProps) => {
  return (
    <HStack w="full" gap="2" alignItems="center" py="1">
      <Center bg={bg} w="8" h="8" rounded="md">
        <Heading fontSize="md" color={initialColor}>
          {initial}
        </Heading>
      </Center>
      <Heading
        fontSize="sm"
        fontWeight="normal"
        truncate
      >
        {name}
      </Heading>
    </HStack>
  )
}