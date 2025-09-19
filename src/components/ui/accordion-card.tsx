import { Box, Heading, HStack, Text } from "@chakra-ui/react";
import { ChevronFillIcon } from "../icons/chevron-fill";
import { useState, useRef, useEffect } from "react";
import type { AccordionCardProps } from "@/types";

export const AccordionCard = ({
  children,
  title,
  icon,
  count,
  bg,
  badgeBg,
  isClosable = false,
  defaultOpen = true,
  animationDuration = 300,
}: AccordionCardProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [height, setHeight] = useState<number | undefined>(
    defaultOpen ? undefined : 0
  );
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    if (isOpen) {
      const scrollHeight = contentRef.current.scrollHeight;
      setHeight(scrollHeight);

      const timer = setTimeout(() => setHeight(undefined), animationDuration);
      return () => clearTimeout(timer);
    } else {
      setHeight(contentRef.current.scrollHeight);
      requestAnimationFrame(() => {
        setHeight(0);
      });
    }
  }, [isOpen, animationDuration]);

  const handleToggle = () => {
    if (!isClosable) return;
    setIsOpen((prev) => !prev);
  };

  return (
    <Box
      w="full"
      bgColor={bg ?? "gray.50"}
      p="2"
      rounded="xl"
      transition="all 0.2s ease-in-out"
    >
      <HStack
        onClick={handleToggle}
        alignItems="center"
        justifyContent="space-between"
        cursor={isClosable ? "pointer" : "default"}
        role={isClosable ? "button" : undefined}
        tabIndex={isClosable ? 0 : undefined}
        onKeyDown={(e) => {
          if (isClosable && (e.key === "Enter" || e.key === " ")) {
            e.preventDefault();
            handleToggle();
          }
        }}
        _hover={isClosable ? { opacity: 0.8 } : undefined}
        transition="opacity 0.2s ease-in-out"
      >
        <HStack
          alignItems="center"
          gap="2"
          bgColor={badgeBg ?? "gray.400"}
          rounded="full"
          px="2.5"
          py="0.5"
        >
          {icon}
          <Heading fontSize="sm" fontWeight="semibold" color="black">
            {title}
          </Heading>
          {count !== undefined && count > 0 && (
            <Text
              fontSize="xs"
              fontWeight="bold"
              color="black"
              bg="white"
              rounded="full"
              minW="5"
              h="5"
              display="flex"
              alignItems="center"
              justifyContent="center"
              px="1"
            >
              {count}
            </Text>
          )}
        </HStack>

        {isClosable && (
          <Box
            transform={isOpen ? "rotate(180deg)" : "rotate(0deg)"}
            transition={`transform ${animationDuration}ms ease-in-out`}
          >
            <ChevronFillIcon />
          </Box>
        )}
      </HStack>

      <Box
        ref={contentRef}
        overflow="hidden"
        height={height}
        transition={`height ${animationDuration}ms ease-in-out, opacity ${animationDuration}ms ease-in-out`}
        opacity={isOpen ? 1 : 0}
      >
        <Box mt="2" pt="2">
          {children}
        </Box>
      </Box>
    </Box>
  );
};
