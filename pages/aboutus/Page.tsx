
import {
    Box,
    Button,
    Center,
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
  const CodePanel = dynamic(() => import('components/code-panel/code-panel'))
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
      height={isMobile ? "150px" : "370px"}
      width={isMobile ? "100%" : "500px"}
      margin={isMobile ? "px px" : "10px 50px"}
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
  
  export const AboutUs = () => {
    const [isMobile, setIsMobile] = React.useState( window.innerWidth <= 768);
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
  
   
    
      
  
    
    return (
      <Flex id = "aboutus" flexDirection="column" justifyContent="center" alignItems="center" flexWrap="wrap" >
  
            
              
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
          color = "grey"
          textAlign={"center"}
          margin={isMobile ? "0px 0px" :"50px 250px"}
          justifyContent={"center"}
              > 
                  <span style={{color: "white"}}>We know what’s going on. </span> 
                  <span style={{color: "grey"}}>Horan, an innovative Ethiopian startup ,</span>
                  <span style={{color: "grey"}}> revolutionizing the digital landscape. Our name Horan  </span>
                  <span style={{color: "white"}}>signifies Productivity and Prosperity through hard work</span>
                  <span style={{color: "grey"}}> in Afaan Oromo. Pioneering Information and Communication technologies, </span>
                  <span style={{color: "white"}}>Horan has created the first Student Social Network app in Ethiopian </span>
                  <span style={{color: "grey"}}> Universities, fostering student connections and knowledge-sharing. With over 4 thousand online communities </span>
                  <span style={{color: "white"}}>For years, we've been the go-to partner for businesses</span>
                  <span style={{color: "grey"}}>  seeking to enhance their digital presence.</span> 


                </Text>
           <Flex flexDirection="row" justifyContent={"center"}>
                  <Image
                      src="/static/images/star.png"
                      alt="Mella website"
                      height={10}
                      width={25}  
                    />
                  <Text
                      color="#DDFF00" // Change color to #DDFF00
                      fontFamily={['sans-serif', null, 'sans-serif']}
                      fontStyle={['medium', null, 'medium']}
                      fontSize={['md', null, '1.0rem']}
                      textTransform={['uppercase', null, 'uppercase']}
                      _dark={{ color: "#DDFF00" }}
                      _light={{
                          color: "#7A852E",
                          fontWeight: "400"
                      }}  
                    
                      justifyContent={"center"}
                    >
                      About US
                  </Text>
              </Flex>
  
           
           </Flex>
         
    
  
   
    );
  };
  
  