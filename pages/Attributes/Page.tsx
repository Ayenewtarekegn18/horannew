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
  useDisclosure,
} from "@chakra-ui/react";
import Section from "components/marketing/section-wrapper";
import { SEO } from "components/seo/seo";
import type { NextPage } from "next";
import Image from "next/image";
import * as React from "react";

import { Br } from "@saas-ui/react";
import { Hero } from "components/hero";
import { FallInPlace } from "components/motion/fall-in-place";

import { FocusableElement } from "@saas-ui/react-utils";
import { ButtonLink } from "components/button-link/button-link";
import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import Marquee from "react-marquee-slider";
import styles from "./PartnersSection.module.css";
//const CodePanel = dynamic(() => import("components/code-panel/code-panel"));
const ComponentShowcase = dynamic(() =>
  import("components/component-showcase").then((mod) => mod.ComponentShowcase)
);

const ImageBox = ({ isMobile, video, opacity, translateY, children }) => (
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
      borderRadius="30px"
      background= "linear-gradient(180deg, #1f1f1f 0%, rgb(20, 20, 20) 100%)"
      height={isMobile ? "100%" : "375px"}
      width={isMobile ? "100%" : "370px"}
      margin={isMobile ? "10px 40px" : "0 15px"}
      overflowX={isMobile ? "hidden" : "hidden"}
      box-sizing="border-box"
      flex="1"
      display="flex"
      flex-direction="column"
      justify-content="center"
      align-items="center"
      align-content="start"
      flex-wrap="nowrap"
      transform-perspective={1200}
      gap = "2px"
    >
      {children}
    </Box>
  </motion.div>
);

export const Attributes = () => {
  const [isMobile, setIsMobile] = React.useState(false);
    React.useEffect(() => {
      const handleResize = () => {
        console.log("resized");
        setIsMobile(window.innerWidth <= 768);
      };
      handleResize()
      
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
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -150]);

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

  const boxes = [
    {
      image: "/static/images/growth.png",
      alt: "Image 1",
      priority: true,
      text: {
        title: "Economical alternative",
        subtitle: "We're ready to meet your evolving needs",
      },
    },
    {
      image: "/static/images/latest-design.png",
      alt: "Image 2",
      priority: true,
      text: {
        title: "Custom-crafted layout",
        subtitle: "We've got the expertise to make your vision a reality",
      },
    },
    {
      image: "/static/images/scalable-design.png",
      alt: "Image 3",
      priority: false,
      text: {
        title: "Scable as You Grow",
        subtitle: "We're ready to meet your evolving needs",
      },
    },
  ];

  return (
    <Flex
     // justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      mt={8}
      px={isMobile?0:2}
    >
      {boxes.map((box, index) => (
        <ImageBox 
          key={index}
          isMobile={isMobile}
          video={video}
          opacity={opacity}
          translateY={translateY}
        >
          <Box overflow="hidden" height="100%" width = "100%" alignItems = "center" >
            <Image
              src={box.image}
              height={isMobile?"50":"100"}
              width={isMobile?"50":"100"}
              alt={box.alt}
              quality={75}
              priority={box.priority}
              layout="responsive"
            />
            {box.text && (
              <Box position="absolute" bottom="10" left="8px">
                <Text
                 textAlign="center"   
                 width={isMobile?"50":"260"}
                 height="auto"
                 whiteSpace="pre-wrap"
                 wordBreak="break-word"
                 fontWeight="400"
                 fontStyle="normal"
                 fontFamily='"Poppins", "Poppins Placeholder", sans-serif'
                 color="#cccccc"
                 fontSize={isMobile?"13":"26"}
                 letterSpacing="-0.02em"
                 lineHeight="100%"   
                  
                >
                  {box.text.title}
                </Text>
                <Text
                  textAlign="center"
                  width="100%"
                  height="auto"
                  whiteSpace="pre-wrap"
                  wordBreak="break-word"
                  fontWeight="400"
                  fontStyle="normal"
                  fontFamily='"Inter", "Inter Placeholder", sans-serif'
                  color="var(--token-54c8d112-e98c-4c28-a1c4-62f708e15205, #7a7a7a)"
                  fontSize={isMobile?"12":"18"}
                  letterSpacing="-0.01em"
                  lineHeight="140%"
                >
                  {box.text.subtitle}
                </Text>
              </Box>
            )}
          </Box>
        </ImageBox>
      ))}
    </Flex>
  );
};
