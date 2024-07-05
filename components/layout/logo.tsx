import { Flex, Link, VisuallyHidden, useColorMode } from '@chakra-ui/react';
import siteConfig from 'data/config';
import * as React from 'react';

export interface LogoProps {
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const Logo = ({ href = '/', onClick }: LogoProps) => {
  const { colorMode } = useColorMode();
  let logo;

  if (colorMode === 'dark') {
    logo = (
      <img
        src="/static/logo.png"
        alt="Horan Logo"
        style={{ height: '52px', marginTop: '-4px' }}
      />
    );
  } else {
    logo = (
      <img
        src="/static/logo.png"
        alt="Horan Logo"
        style={{ height: '52px', marginTop: '-4px', filter: 'invert(1)', WebkitFilter: 'invert(1)' }}
      />
    );
  }

  return (
    <Flex h="8" flexShrink="0" alignItems="flex-start">
      <Link href={href} display="flex" p="1" borderRadius="sm" onClick={onClick}>
        {logo}
        <VisuallyHidden>{siteConfig.seo?.title}</VisuallyHidden>
      </Link>
    </Flex>
  );
};
