import { VStack } from "@chakra-ui/react";
import { SidebarMenuItem } from "./sidebar-menu-item";
import { menuItems } from "@/constants/side-menus";

export const SidebarMenu = () => {
  return (
    <VStack w="full" gap="2">
      {menuItems.map(({ name, href, icon }) => (
        <SidebarMenuItem key={name} name={name} href={href} icon={icon} />
      ))}
    </VStack>
  );
};
