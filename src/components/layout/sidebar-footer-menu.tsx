import { VStack } from "@chakra-ui/react";
import { sidebarFooterMenuItems } from "@/constants/side-menus";
import { SidebarFooterMenuItem } from "./sidebar-footer-menu-item";

export const SidebarFooterMenu = () => {
  return (
    <VStack w="full" gap="2">
      {sidebarFooterMenuItems.map(({ name, href, icon }) => (
        <SidebarFooterMenuItem key={name} name={name} href={href} icon={icon} />
      ))}
    </VStack>
  );
};
