"use client"

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
  import styles from '../PartnersSection.module.css';
  //const CodePanel = dynamic(() => import('components/code-panel/code-panel'))
  const ComponentShowcase = dynamic(() =>
    import('components/component-showcase').then((mod) => mod.ComponentShowcase)
  )

  export const Benefits = () => {
    return (
      
      <Flex flexDirection="column" mb={70}>
        <Flex flexDirection="row" alignItems="center" justifyContent={"center"}>
                <Image
                    src="/static/images/star.png"
                    alt="Mella website"
                    height={10}
                    width={25}
                    
                />
                <Text
                    className="font-sans"
                    textAlign="left"
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
                >
                    what you will get
                </Text>
            </Flex>
  
        {/* Description */}
       
        <Text
         
        fontFamily={["Poppins,Poppins Placeholder,sans-serif", null, 'Poppins,Poppins Placeholder,sans-serif']}
        fontStyle={['normal', null, 'normal']}
        fontSize={['md', null, '2.2rem']}
        width ={{width: "100%"}}
        height = {{height:"auto"}}
        white-space = "pre-wrap"
        word-wrap ="break-word"
        word-break = "break-word"
        transform-perspective ={1200}
        font-weight = {400}
        color = "var(--token-9ba5df47-566d-4cce-965a-b909bddf5adc, #cccccc)"
        letter-spacing = {-0.03}
        line-height= {110}
        text-align = "center"
        align={"center"}
        _dark={{ bgGradient: "linear(to-b, #ffffff, #999999CD )" }}
    _light={{ bgGradient: "linear(to-b, #000000, #999999CD )" }}
    bgClip="text"
  
        >
            We resolve problems associated with <br/> creative procedures
         </Text>
       </Flex>
    );
  };