import { Text } from "@chakra-ui/react";
import { useMemo } from "react";
import { Link, useLocation } from "react-router";

interface OverviewMenuItemProps {
  title: string;
  href: string;
}

export const OverviewMenuItem = ({ title, href }: OverviewMenuItemProps) => {
  const location = useLocation();

  const isCurrentPath = useMemo(() => {
    return href === location.pathname;
  }, [href, location.pathname]);

  return (
    <Link style={{ width: "100%" }} key={title} to={href}>
      <Text
        px="2"
        py="2.5"
        display="inline-block"
        bgColor={isCurrentPath ? "primary.200" : "transparent"}
        fontSize="sm"
        fontWeight="semibold"
        rounded="full"
        _hover={{
            bgColor: "primary.200"
        }}
      >
        {title}
      </Text>
    </Link>
  );
};
