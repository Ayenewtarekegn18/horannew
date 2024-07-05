import {
  Box,
  BoxProps,
  SimpleGrid,
  Container,
  Text,
  Stack,
  Flex,
  HStack,
  Center,
} from "@chakra-ui/react";

import { Link, LinkProps } from "@saas-ui/react";

import siteConfig from "data/config";

export interface FooterProps extends BoxProps {
  columns?: number;
}

export const Footer: React.FC<FooterProps> = (props) => {
  const { columns = 1, ...rest } = props;
  return (
    <Box  {...rest}>
      <Container maxW="container.2xl">
        <Flex justify='space-around' align='center' wrap="wrap" 
        >
      
         
              <Flex>
                <Box as={siteConfig.logo} height="30px" />
              </Flex>
           
            <Copyright>{siteConfig.footer.copyright}</Copyright>
        
          <Flex justify="flex-end" gap={5} align="center"  wrap="wrap" mt = "10" mb = "5">
            {siteConfig.footer?.links?.map(({ href, label }) => (
              <FooterLink key={href} href={href}>
                {label}
              </FooterLink>
            ))}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export interface CopyrightProps {
  title?: React.ReactNode;
  children: React.ReactNode;
}

export const Copyright: React.FC<CopyrightProps> = ({
  title,
  children,

}: CopyrightProps) => {
  let content;
  if (title && !children) {
    content = `&copy; ${new Date().getFullYear()} - ${title}`;
  }
  return (
    <Text color="muted" fontSize="sm">
      {content || children}
    </Text>
  );
};

export const FooterLink: React.FC<LinkProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <Link
      color="muted"
      fontSize="sm"
      textDecoration="none"
      _hover={{
        color: "white",
        transition: "color .2s ease-in",
      }}
      {...rest}
    >
      {children}
    </Link>
  );
};
