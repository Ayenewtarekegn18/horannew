
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
import { size } from "lodash";
  //const CodePanel = dynamic(() => import('components/code-panel/code-panel'))
  const ComponentShowcase = dynamic(() =>
    import('components/component-showcase').then((mod) => mod.ComponentShowcase)
  )


  
const ImageBox = ({ isMobile, video, opacity, translateY, children, size }) => {
    return (
        <motion.div
            className="video"
            ref={video}
            style={{
                translateY,
            }}
        >
            <Box
                position="relative"
                borderRadius="14px"
                overflow="hidden"
                border={isMobile ? "1px solid #DDFF00" : "1px solid var(--token-69a06b4a-447e-422e-9e50-d39672ecdf48, #262626)"}
                background={isMobile ? "#DDFF00" : "#1F1F1F"}
                height={"auto"}
                width={isMobile ? "100%" : "auto"}
                margin={isMobile ? "8px 0" : "8px 10px"}
                mb={isMobile ? "16px" : "0"}
                boxSizing = "border-box"
                flex = "1"
                display = "flex"
                flexDirection = "row"
                justifyContent = "flex-start"
                alignItems = "center"
                padding = "10px 16px 10px 16px"
                backgroundColor = "var(--token-77085c4a-7c60-481b-bb4c-b0e5839e54b1, #161616)"
                alignContent = "center"
                flexWrap = "nowrap"
                >
                {children}
            </Box>
        </motion.div>
    );
};


export const Tags = () => {
    const [isMobile, setIsMobile] = React.useState(false);
    const video = React.useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: video,
      offset: ["start end", "end start"],
    });

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

    const boxes = [
      {
        image: "/static/images/star.png",
        alt: "",
        priority: true,
        description: "Website Development"
      },
      {
        image: "/static/images/star.png",
        alt: "",
        priority: true,
        description: "Mobile App Development"
      },
      {
        image: "/static/images/star.png",
        alt: "",
        priority: true,
        description: "Telegram Bot"
      },
      {
        image: "/static/images/star.png",
        alt: "",
        priority: true,
        description: "Company Branding"
      },
      {
        image: "/static/images/star.png",
        alt: "",
        priority: true,
        description: "Digital Banding"
      },    
      {
        image: "/static/images/star.png",
        alt: "",
        priority: true,
        description: "Server Hosting and Configuration"
      },
      {
        image: "/static/images/star.png",
        alt: "",
        priority: true,
        description: "UI/UX"
      },    
    
      
    ];
    
    return (
      <Flex justifyContent="center" alignItems="center" flexWrap="wrap" mt={4} px={2} gap = "2">
        {boxes.map((box, index) => (
          <ImageBox key={index} isMobile={isMobile} video={video} opacity={opacity} translateY={translateY} size = {size}>
            <Flex alignItems="center" gap="5px">
                <Image
                  src={box.image}
                  height={"2"}
                  width={"25"}
                  alt={box.alt}
                  quality={100}
                  priority={box.priority}
                />
              <Text fontSize={13}textAlign="start" color= "#7A7A7A">
                {box.description}
              </Text>
         
              </Flex>
          </ImageBox>
        ))}
      </Flex>
    );
  };