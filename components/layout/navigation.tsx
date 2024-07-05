import { Box, Container, HStack, useBreakpointValue, useColorModeValue } from "@chakra-ui/react";
import * as React from "react";

import { useRouter } from "next/router";

import siteConfig from "data/config";

import { NavLink } from "components/nav-link";

import { useScrollSpy } from "hooks/use-scrollspy";

import { useDisclosure, useUpdateEffect } from "@chakra-ui/react";
import { MobileNavButton, MobileNavContent } from "components/mobile-nav";

import ThemeToggle from "./theme-toggle";


const Navigation: React.FC = () => {
  const bg = useColorModeValue('whiteAlpha.700', 'rgba(23, 23, 23, 0.5)');

  const borderStyles = useBreakpointValue({
    base: {}, // No border styles for base (mobile) screen size
    lg: {
      borderRadius: "full",
      borderWidth: "0.7px", // Add border width for large screens
      borderColor: "#222222", 
      background: bg,  
      backdropFilter: "blur(7px)",

      px: "10",
      py: "3",
    },
  });

  
  const mobileNav = useDisclosure();
  const router = useRouter();
  const activeId = useScrollSpy(
    siteConfig.header.links
      .filter(({ id }) => id)
      .map(({ id }) => `[id="${id}"]`),
    {
      threshold: 0.75,
    }
  );

  const mobileNavBtnRef = React.useRef<HTMLButtonElement>();

  useUpdateEffect(() => {
    mobileNavBtnRef.current?.focus();
  }, [mobileNav.isOpen]);

  return (
    <Box {...borderStyles}>
    <HStack spacing="2" flexShrink={0}>
      {siteConfig.header.links.map(({ href, id, ...props }, i) => {
        return (
          
          <NavLink
            display={["none", null, "block"]}
            href={href || `/#${id}`}
            key={i}
            isActive={
              !!(
                (id && activeId === id) ||
                (href && !!router.asPath.match(new RegExp(href)))
              )
            }
            {...props}
          >
            {props.label}
          </NavLink>
        );
      })}

{/* show only on mobile */}
<Container display={["block", null, "none"]} maxW="container.sm">
      <ThemeToggle /> 
</Container>

      <MobileNavButton
        ref={mobileNavBtnRef}
        aria-label="Open Menu"
        onClick={mobileNav.onOpen}
      />

      <MobileNavContent isOpen={mobileNav.isOpen} onClose={mobileNav.onClose} />
    </HStack>
    </Box>
  );
};

export default Navigation;
