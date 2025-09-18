import { Text } from "@chakra-ui/react";
import { Link } from "react-router";

interface OverviewMenuItemProps {
  title: string;
  href: string;
}

export const OverviewMenuItem = ({ title, href }: OverviewMenuItemProps) => {
  return (
    <Link style={{ width: "100%" }} key={title} to={href}>
      <Text w="full">{title}</Text>
    </Link>
  );
};
