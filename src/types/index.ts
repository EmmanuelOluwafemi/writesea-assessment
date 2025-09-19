import type { PropsWithChildren } from "react";
import type { IconComponent } from "./icon";
import type { BoxProps, Tooltip as ChakraTooltip } from "@chakra-ui/react";

export interface SidebarMenuItemProps {
  name: string;
  href: string;
  icon: IconComponent;
  onClose?: () => void;
}

export interface NotFoundProps {
  scope?: "layout" | "linkedin";
}

export interface AccordionCardProps extends PropsWithChildren {
  title: string;
  icon: React.ReactNode;
  count?: number;
  bg?: BoxProps["bgColor"];
  badgeBg?: BoxProps["bgColor"];
  isClosable?: boolean;
  defaultOpen?: boolean;
  animationDuration?: number;
}

export interface AvatarWithTextProps {
  initial: string;
  name: string;
  bg: BoxProps["bg"];
  initialColor: BoxProps["color"];
}

export interface TooltipV3Props extends ChakraTooltip.RootProps {
  content: React.ReactNode;
  showArrow?: boolean;
  portalled?: boolean;
  portalRef?: React.RefObject<HTMLElement | null>;
  contentProps?: ChakraTooltip.ContentProps;
  disabled?: boolean;
}

export interface RecommendedConnect {
  name: string;
  bio: string;
  moreInfo: string;
  imageUrl: string;
  id: number;
}

export interface OverviewMenuItemProps {
  title: string;
  link: string;
  children: {
    title: string;
    link: string;
  }[];
}

export interface OverviewMenuListProps {
  title: string;
  icon: IconComponent;
  items: OverviewMenuItemProps[];
}

export type IconProps = React.SVGProps<SVGSVGElement>;
