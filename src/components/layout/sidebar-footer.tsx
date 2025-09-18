import { VStack } from "@chakra-ui/react";
import { ProfileDropdown } from "./profile-dropdown";
import { SidebarFooterMenu } from "./sidebar-footer-menu";

export const SidebarFooter = () => {
  return (
    <VStack w="full">
      <SidebarFooterMenu />
      <ProfileDropdown />
    </VStack>
  );
};
