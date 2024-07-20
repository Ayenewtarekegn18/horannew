
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
  flexbox,
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
    borderRadius="30px"
    overflow="hidden"
    border={isMobile ? "" : "0px"}
    background={isMobile ? "" : ""}
    height={isMobile ? "300px" : "300px"}
    width={isMobile ? "300px" : "400px"}
    margin={isMobile ? "50px 30px" : "20px 30px"}
    display="flex"
    flex-direction="column"
    justify-content="flex-end"
    align-items="flex-start"
    align-content="flex-start"
    flex-wrap="nowrap"
    transform-perspective="1200" 
      >
    {children}
  </Box>
</motion.div>
);

export const CustomerStory = () => {
  

    const [isMobile, setIsMobile] = React.useState(false);
    React.useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
      handleResize();
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

// ...

const [windowDimensions, setWindowDimensions] = React.useState({ width: 0, height: 0 });

React.useEffect(() => {
  function handleResize() {
    setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });
  }

  window.addEventListener('resize', handleResize);
  handleResize();

  return () => window.removeEventListener('resize', handleResize);
}, []);

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
      image: "",
      alt: "Image 1",
      priority: true,
    },
    {
      image: "/static/images/mella_website.webp",
      alt: "Image 2",
      priority: true,
    },
  
    
  ];
  
  return (
    <Flex flexDirection="row" justifyContent="center" alignItems="center" flexWrap="wrap" mt={5} px={4}  height = {isMobile?"20%":"100%"}>

        <ImageBox  isMobile={isMobile} video={video} opacity={opacity} translateY={translateY}>
          
          <Box flexDirection={isMobile?"column":"row"}  mt = {isMobile?"10":"20"} height = {isMobile?"50%  ":"300px"}>  
            <Flex flexDirection="row" alignItems="center"  >
              <Image
                    src="/static/images/star.png"
                    alt="Mella website"
                    height={10}
                    width={25}
                    />
                <Text
                    textAlign="left"
                    mb="0"
                    color="#DDFF00" // Change color to #DDFF00
                    fontFamily={['sans-serif', null, 'sans-serif']}
                    fontStyle={['medium', null, 'medium']}
                    fontSize={['md', null, '1.0rem']}
                    textTransform={['uppercase', null, 'lowercase']}
                    _dark={{ color: "#DDFF00" }}
                    _light={{
                        color: "#7A852E",
                        fontWeight: "400"
                    }}
                >
                    Customer Story
                </Text>
            </Flex>
              <Text
              fontFamily={["Poppins,Poppins Placeholder,sans-serif", null, 'Poppins,Poppins Placeholder,sans-serif']}
              fontStyle={['normal', null, 'normal']}
              fontSize={['md', null, '1.8rem']}
              width ={{width: "100%"}}
              height = {{height:"100%"}}
              white-space = "pre-wrap"
              word-wrap ="break-word"
              word-break = "break-word"
              transform-perspective ={1200}
              font-weight = {400}
              color = "var(--token-9ba5df47-566d-4cce-965a-b909bddf5adc, #cccccc)"
              text-align = "left"
              >
              Scaling Success: How Horan Software
               Solutions Empowered Our Growth Without Hiring More Staff
              </Text>
         </Box>

         
         </ImageBox>
        <Flex height = {isMobile?"150":"300px"} mt={isMobile ? "-9rem" :"0px"}>
        
          <Box mt={isMobile ? "-1rem" :"0px"} height = {isMobile?"50%":"300px"} >
         <Image
          src="/static/images/custmor_story.jpg"
          height={300}
          width={400}
         alt = "hello"
          />
          </Box>
          
         
         </Flex>
       
  

 
    </Flex>
  );
};

