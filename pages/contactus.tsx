"client"

import React from "react";
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

import { Br } from "@saas-ui/react";
import { FocusableElement } from "@saas-ui/react-utils";
import { ButtonLink } from "components/button-link/button-link";
import { Card, CardBody, CardHeader, CardFooter } from "@chakra-ui/react";
import { FallInPlace } from "components/motion/fall-in-place";
const Contact = () => {

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

  return (
    <Container style={{ marginTop: 100 }} mb={10} 
    boxSizing = 'border-box'
    height = {isMobile?"370":"400"}
    width = {isMobile?"80%":"100%"}
    display = "flex"
    flexDirection = "column"
    justifyContent = 'center'
    alignItems = 'center'
    padding = {isMobile?"30px 40px 30px 40px":'60px 80px 60px 80px'}
    background = 'linear-gradient(140.06451559643327deg, #1a1a1a 0%, rgb(13, 13, 13) 100%)'
    overflow = 'hidded'
    alignContent = 'center'
    flexWrap = 'nowrap'
    gap = {isMobile?"5px":"20px"}
    borderRadius = '24px'
    >
      <Text
        align="center"
        justifyContent="center"
        width={isMobile?"120%":"80%"}
        textAlign="center"
        height={isMobile?"30%":"100%"}
        whiteSpace="pre-wrap"
        wordBreak="break-word"
        fontWeight={500}
        fontStyle="normal"
        fontFamily="Poppins, Poppins Placeholder, sans-serif"
        color="var(--token-9ba5df47-566d-4cce-965a-b909bddf5adc, #cccccc)"
        fontSize={isMobile?"1.3rem":"2rem"}
        letterSpacing={0.03}
        //border= "1px solid white"
      >
        Ready to elevate your <Br /> technology game?
      </Text>

      <Text
        alignItems={"center"}
        textAlign="center"
        width={isMobile?"130%":"120%"}
        height={isMobile?"30%":"100%"}
        whiteSpace="pre-wrap"
        wordBreak="break-word"
        fontWeight="400"
        fontStyle="normal"
        fontFamily='"Inter", "Inter Placeholder", sans-serif'
        color="var(--token-54c8d112-e98c-4c28-a1c4-62f708e15205, #7a7a7a)"
        fontSize={isMobile?"0.8rem":"1.4rem"}
        letterSpacing="-0.01em"
        lineHeight="100%"
       // border= "1px solid white"
        >
       Get ready to start producing stunning, efficient technological solutions without frustration. <Br/>
       Contact us today.
      </Text>
        <InputGroup display = "flex" flexDirection={isMobile?"column":"column"} >
        <Input
            variant="outline"
            borderRadius="full"
            borderWidth="1px"
            borderColor="gray.200"
            px="10"
            py="3"
            height={isMobile?"2rem":"3.5rem"}
            placeholder="name"
            _placeholder={{ color: "gray.300" }}
            mb = "2"
            
          />
          <Input
            variant="outline"
            borderRadius="full"
            borderWidth="1px"
            borderColor="gray.200"
            px="10"
            py="3"
            height={isMobile?"2rem":"3.5rem"}
            placeholder="name@emil.com"
            _placeholder={{ color: "gray.300" }}
            
          />
          <InputRightElement >
            <ButtonLink
              pr={isMobile?"7":"6"}
              pl={isMobile?"7":"6"}
              mr={isMobile?"40":"20"}
              mt={isMobile?"10rem":"9.5rem"}
              borderRadius="full"
              colorScheme="#DDFF00"
              background={"#DDFF00"}
              boxShadow={"0 4px 14px 0 rgba(0,0,0,0.39)"}
              dropShadow={"0 4px 14px 0 rgba(0,0,0,0.39)"}
              color={"#000000"}
              fontStyle={"light"}
              href={"/signup"}
              height={isMobile?"1.9rem":"2.8rem"}
            >
              Get Notified
            </ButtonLink>
          </InputRightElement>
        </InputGroup>
    
       
          
    </Container>
  );
};

export default Contact;
