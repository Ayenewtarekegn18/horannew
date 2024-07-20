import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Text,
    VStack,
    useDisclosure
  } from "@chakra-ui/react";
  import Section from 'components/marketing/section-wrapper';
  import { SEO } from "components/seo/seo";
  import type { NextPage } from "next";
  import Image from "next/image";
  import * as React from "react";
  
  import { Br } from "@saas-ui/react";
  import { Hero } from "components/hero";
  import { FallInPlace } from "components/motion/fall-in-place";
  
  import { FocusableElement } from '@saas-ui/react-utils';
  import { ButtonLink } from "components/button-link/button-link";
  import { motion, useScroll, useTransform } from "framer-motion";
  import dynamic from 'next/dynamic';
  import Marquee from "react-marquee-slider";
  import styles from './PartnersSection.module.css';
  //const CodePanel = dynamic(() => import('components/code-panel/code-panel'))
  const ComponentShowcase = dynamic(() =>
    import('components/component-showcase').then((mod) => mod.ComponentShowcase)
  )

export const BoilerplateCode = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const fieldRef = React.useRef<FocusableElement>(null)
  
    return (
      <Section innerWidth="container.xl">
        <Stack spacing="12" direction={['column', null, null, 'row']}>
          <Box py="10" flex="1"> 
            <Heading colorScheme="whiteAlpha" as="h4" size='md' fontSize='44px'mb="8" textStyle="sectionTitle" fontFamily={['sans-serif', null, 'sans-serif']}
              fontStyle={['medium', null, 'medium']}>
            Boosting AI  <Br />  Development Potential
             
            </Heading>
            <VStack spacing="4" alignItems="flex-start">
              <Text fontSize={['xl', null, '2xl']} color="muted" fontFamily={['sans-serif', null, 'sans-serif']}
              >
              We empower researchers, developers, and AgriTech businesses worldwide to utilize well-organized local agricultural & geographical data for the research, development, and implementation of AI models.
              </Text> 
              <Text fontSize="md" color="muted">
              Try it out:
              </Text>
              <Button onClick={onOpen} variant="subtle" colorScheme="purple">
                Pre Order
              </Button>
            </VStack>
  
           
          </Box>
          <Box
            display="flex"
            flex="1"
            py="10"
            alignItems="center"
            justifyContent="center"
            borderRadius="2xl"
            position="relative"
            bg="code-bg"
            _dark={{
              bg: 'transparent',
              bgGradient: 'linear(to-b, code-bg, transparent)',
            }}
            _light={{
              bg: '#231042',
              bgGradient: 'linear(to-b, code-bg, transparent)',
            }}
            _before={{
              content: '""',
              display: 'block',
              pointerEvents: 'none',
              userSelect: 'none',
              position: 'absolute',
              inset: '0px',
              borderRadius: 'inherit',
              padding: '1px',
              bgGradient: `linear(to-b, whiteAlpha.300, transparent)`,
  
              WebkitMask:
                'linear-gradient(black, black) content-box content-box, linear-gradient(black, black)',
              WebkitMaskComposite: 'xor',
            }}
          >
            <Box width="90%" overflowX="auto">
              {/* <CodePanel language="typescript">{codeExamples.form}</CodePanel> */}
            </Box>
          </Box>
        </Stack>
      </Section>
    )
  }