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
  

export const HeroSection: React.FC = () => {
    return (
      <Box position="relative" overflow="hidden">
        {/* <BackgroundGradient height="100%" /> */}
  
        <Container
          maxWidth="container.xl"
          // center the container and everything inside it
          display="flex"
          flexDirection="column"
          justifyContent="center"
          pt={{ base: 40, lg: 40 }}
          pb="10"
  
        >
          <Stack direction={{ base: "column", lg: "column" }}>
  
            <Hero
              id="home"
              alignItems={{ base: "left", lg: "center" }}
              textAlign={{ base: "left", lg: "center" }}
  
              title={
                <FallInPlace
                  delay={0.4}
                  fontFamily="Poppins,sans-serif"
                  fontStyle=""
                  fontSize={{ base: "3.5rem", lg: "4.7rem" }}
                  fontWeight={{ base: "bold", lg: "medium" }}
                  
                  width = "auto"
                  font-family = "Poppins, Poppins Placeholder, sans-serif"
                  color =  "var(--token-9ba5df47-566d-4cce-965a-b909bddf5adc, #cccccc);"
                  >
                  Magic is
                  <Br /> Born her
                </FallInPlace>
  
              }
              description={
                <FallInPlace 
                delay={0.3}
                  fontWeight="medium"
                  fontFamily = "Inter, Inter Placeholder, sans-serif"
                  color = "#7d7f78"
        textStyle="subtitle"
        //align="center"
        textAlign="center"
        //fontFamily={["Poppins", null, "Poppins"]}
        fontStyle={["light", null, "light"]}
        width={["80%", null, "80%"]}
        fontSize={["md", null, "lg"]}
        _dark={{ color: "gray.500" }}
        margin="auto"
                  
  
                >
                  {/* Saas UI is a <Em>React component library</Em>
                that doesn&apos;t get in your way and helps you  {" "}
                build intuitive SaaS products with speed. */}
                  Innovative solutions for technology companies and rising businesses tired of traditional methodologies. < br /> Horan got your back!
                </FallInPlace>
              }
            >
  
              <FallInPlace delay={0.3}
                pt="10"
                pl="20"
                pr="20"
              >
  
                <InputGroup>
                  <Input
                    variant="outline"
                    borderRadius="full"
                    borderWidth="1px"
                    borderColor="gray.200"
                    px="10"
                    py="7"
                    placeholder="name@email.com"
                    _placeholder={{ color: "gray.300" }}
                  />
                  <InputRightElement>
                    <ButtonLink
                      pr="4"
                      pl="4"
                      mr="24"
                      mt="5"
  
                      borderRadius="full"
                      colorScheme="#DDFF00"
                      background={"#DDFF00"}
                      boxShadow={"0 4px 14px 0 rgba(0,0,0,0.39)"}
                      dropShadow={"0 4px 14px 0 rgba(0,0,0,0.39)"}
                      color={"#000000"}
                      fontStyle={"light"}
                      size="md"
                      href={"/signup"}>
                      Get Notified
                    </ButtonLink>
                  </InputRightElement>
                </InputGroup>
              </FallInPlace>
  
  
            </Hero>
            {/* Right Pointer  */}
            <Box
              height="100px"
              position="absolute"
              display={{ base: "none", lg: "block" }}
              left={{ lg: "60%", xl: "55%" }}
              width="30vw"
              maxW="90px"
              margin="0 auto"
              mt="220"
              alignItems={{ base: "right", lg: "right" }}
              alignContent={{ base: "right", lg: "right" }}
              justifyContent={{ base: "right", lg: "right" }}
              ml="200"
            >
              <FallInPlace delay={1}>
                <Box overflow="hidden" height="100%">
                  <Image
                    src="/static/images/pointerr_svg.png"
                    layout="fixed"
                    width={400}
                    height={362}
                    alt="APp Logo"
                    quality={75}
                    priority
                  />
                </Box>
              </FallInPlace>
            </Box>
  
            {/* Right Image   */}
            <Box
              height="100px"
              position="absolute"
              display={{ base: "none", lg: "block" }}
              left={{ lg: "60%", xl: "55%" }}
              width="30vw"
              maxW="300px"
              margin="0 auto"
              mt="220"
              alignItems={{ base: "right", lg: "right" }}
              alignContent={{ base: "right", lg: "right" }}
              justifyContent={{ base: "right", lg: "right" }}
              ml="260"
            >
              <FallInPlace delay={1}>
                <Box overflow="hidden" height="100%">
                  <Image
                    src="/static/images/watch.webp"
                    layout="fixed"
                    width={400}
                    height={362}
                    alt="APp Logo"
                    quality={75}
                    priority
                  />
                </Box>
              </FallInPlace>
            </Box>
  
            {/* Left Image */}
  
            <Box
              borderRadius="12" // Apply border radius to the image container
              overflow="hidden" // Hide any overflowing content
              height="200px" // Set specific height for the image container
              //width="30vw"
              position="absolute"
              display={{ base: "none", lg: "block" }}
              right={{ lg: "60%", xl: "55%" }}
             width="240px"
              margin="0 auto"
              mt="240"
              alignItems="center" // Align the image horizontally to the center
              justifyContent="center" // Align the image vertically to the center
              mr="280"
            >
              <FallInPlace delay={1}>
                <Box overflow="hidden" height="100%"  >
                  {/* Use next/image component */}
  
                  <Image
                    src="/static/images/endurance_web.webp"
                    layout="fixed" // Use fill layout to cover the specified height
                    objectFit="cover"
                    // add border radius
                    width={400}
                    height={362}
                    alt="Endurance Logo"
                    quality={75}
                    priority
  
                  />
  
                </Box>
              </FallInPlace>
            </Box>
  
            {/* Left Pointer */}
            <Box
              height="100px"
              position="absolute"
              display={{ base: "none", lg: "block" }}
              right={{ lg: "60%", xl: "55%" }}
              width="30vw"
              maxW="90px"
              margin="0 auto"
              mt="270"
              alignItems={{ base: "right", lg: "right" }}
              alignContent={{ base: "right", lg: "right" }}
              justifyContent={{ base: "right", lg: "right" }}
              mr="180"
            >
              <FallInPlace delay={1}>
                <Box overflow="hidden" height="100%">
                  <Image
                    src="/static/images/pointerl_svg.png"
                    layout="fixed"
                    width={400}
                    height={362}
                    alt="APp Logo"
                    quality={75}
                    priority
                  />
                </Box>
              </FallInPlace>
            </Box>
          </Stack>
        </Container>

      </Box>
    );
  };