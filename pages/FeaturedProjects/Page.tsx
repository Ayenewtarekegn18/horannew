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
  

  

export const FeaturedProjects = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };  

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
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
            borderRadius="12px" // Apply border radius to the image container
            overflow="hidden" // Hide any overflowing content
            height={isMobile ? "240px" : "240px"} // Set specific height for the image container based on screen size
            width={isMobile ? "230px" : "230px"} // Set width to full for mobile devices, otherwise fixed width
            margin={isMobile ? "" : "0 50px"} // Margin between images on large devices
            mb={isMobile ? "20px" : "0"} // Margin bottom for mobile devices
          >
            
              <Image
                src="/static/images/mella_website.webp"
                layout="fill" // Use fill layout to cover the specified height
                objectFit="cover"
                alt="Image 1" // Provide a meaningful alt text
                quality={75}
                priority
              />
            
          </Box>
        </motion.div>
  
        {/* Second image */}
        <motion.div
  
  
        >
          <Box
            position="relative"
            borderRadius="12px" // Apply border radius to the image container
            overflow="hidden" // Hide any overflowing content
            height={isMobile ? "240px" : "220px"} // Set specific height for the image container based on screen size
            width={isMobile ? "230px" : "230px"} // Set width to full for mobile devices, otherwise fixed width
            margin={isMobile ? "8px 0px" : "0 50px"} // Margin between images on large devices
            mb={isMobile ? "60px" : "0"} // Margin bottom for mobile devices
                        
          >
            <Box overflow="hidden" height="100%">
              <Image
                src="/static/images/horan_banner.webp"
                layout="fill" // Use fill layout to cover the specified height
                objectFit="cover"
                alt="Image 2" // Provide a meaningful alt text
                quality={75}
                priority
              />
            </Box>
          </Box>
        </motion.div>
  
        {/* Third image */}
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
            borderRadius="12px" // Apply border radius to the image container
            overflow="hidden" // Hide any overflowing content
            height={isMobile ? "240px" : "240px"} // Set specific height for the image container based on screen size
            width={isMobile ? "230px" : "230px"} // Set width to full for mobile devices, otherwise fixed width
            margin={isMobile ? "0px" : "0 50px"} // Margin between images on large devices
            mb={isMobile ? "16px" : "0"} // Margin bottom for mobile devices
          >
            <Box overflow="hidden" height="100%">
              <Image
                src="/static/images/horan_app.webp"
                layout="fill" // Use fill layout to cover the specified height
                objectFit="cover"
                alt="Image 3" // Provide a meaningful alt text
                quality={75}
                priority
              />
            </Box>
          </Box>
        </motion.div>
      </Flex>
    );
  
  
  };