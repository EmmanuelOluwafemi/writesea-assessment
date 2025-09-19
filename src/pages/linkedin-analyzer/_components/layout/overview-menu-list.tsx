import type { IconComponent } from "@/types/icon";
import { Heading, HStack, VStack } from "@chakra-ui/react";
import { OverviewMenuItem } from "./overview-menu-item";

interface OverviewMenuListProps {
  title: string;
  icon: IconComponent;
  items: {
    title: string;
    link: string;
    children: {
      title: string;
      link: string;
    }[];
  }[];
}

export const OverviewMenuList = (props: OverviewMenuListProps) => {
  const { title, icon, items } = props;
  const Icon = icon;
  return (
    <VStack w="full" pt="3">
      <HStack w="full">
        <Icon />
        <Heading
          fontSize="sm"
          fontWeight="medium"
          color="gray.40"
          textTransform="uppercase"
        >
          {title}
        </Heading>
      </HStack>

      <VStack w="full" gap="0.5">
        {items.map((item) => (
          <OverviewMenuItem
            key={item.title}
            href={item.link}
            title={item.title}
            children={item.children}
          />
        ))}
      </VStack>
    </VStack>
  );
};
