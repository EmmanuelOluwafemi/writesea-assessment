import { HStack, Menu, Portal } from "@chakra-ui/react";
import { AvatarWithText } from "../ui/avatar-with-text";
import { DropdownIcon } from "../icons/dropdown";

export const ProfileDropdown = () => {
  return (
    <Menu.Root>
      <Menu.Trigger w="full" focusRing="none">
        <HStack w="full" borderTop="xs" cursor="button" borderTopColor="gray.300" pt="2">
          <AvatarWithText
            initial="MC"
            name="Moremi Chris"
            bg="black"
            initialColor="white"
          />

          <DropdownIcon />
        </HStack>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="account">Account</Menu.Item>
            <Menu.Item value="settings">Settings</Menu.Item>
            <Menu.Item value="logout">Logout</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};
