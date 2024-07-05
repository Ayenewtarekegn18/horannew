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
const CodePanel = dynamic(() => import('components/code-panel/code-panel'))
const ComponentShowcase = dynamic(() =>
  import('components/component-showcase').then((mod) => mod.ComponentShowcase)
)


const Attributes = () => {
    const [isMobile, setIsMobile] = React.useState(false);
    const video = React.useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: video,
      offset: ["start end", "end start"],
    });
    const opacity = useTransform(scrollYProgress, [0, 0.65, 1], [1, 1, 0]);
  
  
    // const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
    const scale = useTransform(
      scrollYProgress,
      [0, 0.6, 0.8, 0.9],
      [1, 0.8, 0.8, 0]
    );
  
    // const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const translateY = useTransform(
      scrollYProgress,
      [0, 1],
      [0, -150]
    );
  
    const plateHeight = 200; // Adjust this value based on your design
  
    const flipTransform = useTransform(
      scrollYProgress,
      [0, 1], // Range of scrollYProgress
      [1, 0.5] // Range of scaleY
    );
  
    const translateYTransform = useTransform(
      scrollYProgress,
      [0, 1], // Range of scrollYProgress
      [0, plateHeight / 2] // Range of translateY
    );
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      mt={8}
      px={4}

    >
      {/* First image */}
      <motion.div
        className="video"
        ref={video}
        style={{
          opacity,
          translateY,
        }}
      >
        <Box
          position="relative"
          borderRadius="10px" // Apply border radius to the image container
          overflow="hidden"
          border={isMobile ? "1px solid #DDFF00" : "0px solid grey"} // Hide any overflowing content
          background={isMobile ? "#DDFF00" : "transparent"} // Set background color for mobile devices
          height={isMobile ? "240px" : "300px"} // Set specific height for the image container based on screen size
          width={isMobile ? "100%" : "270px"} // Set width to full for mobile devices, otherwise fixed width
          margin={isMobile ? "8px 0" : "0 50px"} // Margin between images on large devices
          mb={isMobile ? "16px" : "0"} // Margin bottom for mobile devices
        >
          <Box overflow="hidden" height="100%">
            <Image
              src="/static/images/mella_website.webp"
              layout="fill" // Use fill layout to cover the specified height
              objectFit="cover"
              alt="Image 1" // Provide a meaningful alt text
              quality={75}
              priority
            />
          </Box>
        </Box>
      </motion.div>

      <motion.div
        className="video"
        ref={video}
        style={{
          opacity,
          translateY,
        }}
      >
        <Box
          position="relative"
          borderRadius="10px" // Apply border radius to the image container
          overflow="hidden"
          border={isMobile ? "1px solid #DDFF00" : "0px solid grey"} // Hide any overflowing content
          background={isMobile ? "#DDFF00" : "transparent"} // Set background color for mobile devices
          height={isMobile ? "240px" : "300px"} // Set specific height for the image container based on screen size
          width={isMobile ? "100%" : "270px"} // Set width to full for mobile devices, otherwise fixed width
          margin={isMobile ? "8px 0" : "0 50px"} // Margin between images on large devices
          mb={isMobile ? "16px" : "0"} // Margin bottom for mobile devices
        >
          <Box overflow="hidden" height="100%">
            <Image
              src="/static/images/mella_website.webp"
              layout="fill" // Use fill layout to cover the specified height
              objectFit="cover"
              alt="Image 1" // Provide a meaningful alt text
              quality={75}
              priority
            />
          </Box>
        </Box>
      </motion.div>


      <motion.div
        className="video"
        ref={video}
        style={{
          opacity,
          translateY,
        }}
      >
        <Box
          position="relative"
          borderRadius="10px" // Apply border radius to the image container
          overflow="hidden"
          border={isMobile ? "1px solid #DDFF00" : "0px solid grey"} // Hide any overflowing content
          background={isMobile ? "#DDFF00" : "transparent"} // Set background color for mobile devices
          height={isMobile ? "240px" : "300px"} // Set specific height for the image container based on screen size
          width={isMobile ? "100%" : "270px"} // Set width to full for mobile devices, otherwise fixed width
          margin={isMobile ? "8px 0" : "0 50px"} // Margin between images on large devices
          mb={isMobile ? "16px" : "0"} // Margin bottom for mobile devices
        >
        
          <Box overflow="hidden" height="100%" >
            <Image
              src="/static/images/mella_website.webp"
              layout="fill" // Use fill layout to cover the specified height
              objectFit="cover"
              alt="Image 1" // Provide a meaningful alt text
              quality={75}
            />
            <Box position="absolute" bottom="8px" left="8px" >
              <Text color="white" fontWeight="Bold" textAlign= "center" mt = "10px">
                Scable as You Grow
              </Text>
              <Text color="white" fontWeight="light" textAlign= "center" mb = "-1" >
                We're ready to meet your evolving needs
              </Text>
            </Box>
        
        
          </Box>
        </Box>
      </motion.div>
      </Flex>
  );
};

