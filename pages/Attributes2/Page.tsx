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
      translateY,
    }}
  >
    <Box
      position="relative"
      borderRadius={isMobile?"16px":"30px"}
      overflow="hidden"
      border="1px solid var(--token-69a06b4a-447e-422e-9e50-d39672ecdf48, #262626)"
      height={isMobile ? "120px" : " 210px"}
      width={isMobile ? "100%" : "500px"}
      margin={isMobile ? "8px 0px" : "-30px 10px 0px 10px"}
      display="flex"
      alignContent="flex-start"
      flex-wrap="nowrap"
      transform-perspective="1200"
      flexDirection="column"
      justifyContent="Center"
      alignItems="Center"
      padding="10px"
      background="linear-gradient(180deg, #1e1e1e 0%, rgb(20, 20, 20) 100%)"
      flexWrap="nowrap"
    
     >
      {children}

    </Box>
  </motion.div>
);



export const Attribute2 = () => {
  const [isMobile, setIsMobile] = React.useState(false);
    
  React.useEffect(() => {
      const handleResize = () => {
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
      image: "/static/images/work-flow.png",
      alt: "Image 1",
      priority: true,
      text: {
        title: "Workflow Integration",
        subtitle: "Integrate our services into your workflow for enhanced efficiency and productivity",
      },
    },
    {
      image: "/static/images/collaborate-realtime2.png",
      alt: "Image 2",
      priority: true,
      text:{
        title: "Collaborate in    real-time",
        subtitle: "with skilled professionals dedicated to exceeding your expectations.",
      },
    },
  ];

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      mt={5}
      px={4}
    >
      
      {boxes.map((box, index) => (
        <ImageBox
          key={index}
          isMobile={isMobile}
          video={video}
          opacity={opacity}
          translateY={translateY}
        >
          <Box display={"flex"} flexDirection={"row"}>

            <Box width = "50%" >
                <Text
                  textAlign="left"   
                  width={isMobile? "100px":"244px"}
                  height="auto"
                  whiteSpace="pre-wrap"
                  wordBreak="break-word"
                  fontWeight="400"
                  fontStyle="normal"
                  fontFamily='"Poppins", "Poppins Placeholder", sans-serif'
                  color="#cccccc"
                  fontSize={isMobile?"13px":"28px"}
                  letterSpacing="0.02rem"
                  lineHeight="100%" 
                  marginBottom={"6"}                 
                  >
                  {box.text.title}
                </Text>
                <Text
                  textAlign="left"
                  width="100%"
                  height="auto"
                  whiteSpace="pre-wrap"
                  wordBreak="break-word"
                  fontWeight="400"
                  fontStyle="normal"
                  fontFamily='"Inter", "Inter Placeholder", sans-serif'
                  color="var(--token-54c8d112-e98c-4c28-a1c4-62f708e15205, #7a7a7a)"
                 fontSize={isMobile?"12px":"18px"}
                  letterSpacing="-0.01em"
                  lineHeight="140%"
                  >
                  {box.text.subtitle}
                </Text>
              </Box>  
            <Box width = "50%" >
            <Image 
            src={box.image}
            height="100"
            width="70"
            alt={box.alt}
            quality={100}
            priority={box.priority}
            layout="responsive"
            
            /> 
            </Box>         
                  </Box>
            
        </ImageBox>
      ))}
    </Flex>
  );
};
