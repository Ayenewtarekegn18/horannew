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
const CodePanel = dynamic(() => import('components/code-panel/code-panel'))
const ComponentShowcase = dynamic(() =>
  import('components/component-showcase').then((mod) => mod.ComponentShowcase)
)


const codeExamples = {
  form: `
  import axios from 'axios';

  const apiKey = 'your_api_key_here';
  const apiUrl = 'https://api.horansoftware.com/massa/v1/';

  const postData = async () => {
    try {
      const response = await axios.post(apiUrl, {
        data: {
          apiKey: apiKey,
          location: {
            latitude: 9.02497,
            longitude: 38.74689
          },
          size: 2000,
          type: 'bread wheat'
          
        }
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };`,
  styleProps: `<Banner
  bg={useColorModeValue('white', 'gray.900')}
  colorScheme="purple"
  backgroundClip="padding-box"
  borderRadius="full"
  border="2px solid transparent"
  position="relative"
  py="2"
  px="3"
  cursor="pointer"
  overflow="visible"
  transitionProperty="common"
  transitionDuration="normal"
  boxShadow="lg"
  _before={{
    content: \`""\`,
    position: 'absolute',
    zIndex: -1,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 'inherit',
    margin: '-2px',
    bgGradient: 'linear(to-r, purple.500, cyan.500)',
  }}
  _hover={{
    boxShadow: 'sm',
  }}
>
  <BannerIcon boxSize="1" />
  <BannerContent fontSize="sm">
    <BannerTitle>Pre-order Saas UI Pro now!</BannerTitle>
    <BannerDescription display={{ base: 'none', md: 'block' }}>
      50% discount for early adopters.
    </BannerDescription>
  </BannerContent>
  <BannerCloseButton position="absolute" top="2" right="4" />
</Banner>`,
  theme: `export default {
  variants: {
    gradient: (props) => {
      return {
        container: {
          background: mode('white', 'gray.900')(props),
          backgroundClip: 'padding-box',
          borderRadius: 'full',
          border: '2px solid transparent',
          position: 'relative',
          py: 2,
          px: 2,
          cursor: 'pointer',
          overflow: 'visible',
          transitionProperty: 'common',
          transitionDuration: 'normal',
          boxShadow: 'lg'
          _before: {
            content: '""',
            position: 'absolute',
            zIndex: -1,
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            borderRadius: 'inherit',
            margin: '-2px',
            bgGradient: 'linear(to-r, purple.500, cyan.500)'
          }
          _hover: {
            boxShadow: 'sm'
          }
        },
        icon: {
          boxSize: '1'
        },
        content: {
          fontSize: 'sm'
        },
        description: {
          display: { base: 'none', md: 'block' }
        },
        close: {
          position: 'absolute',
          top: 2,
          right: 4
        }
      }
    }
  }
}`,
}

export const IntroducingFreelance = () => {
    return (
      <div className={styles.container}>
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
                    mb="0"
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
  
        <div className={styles.description}>
          <p>
              We know what’s going on.
              <span style={{ color: "#4d4d4d" }}>
              You need top-notch solutions to stand out in the tech world, 
              but hiring traditional agencies can be costly and time-consuming.
            </span> 
            <br/>That’s when Horan comes in.
          </p>
          <br/> <br/> <br/>
        </div>
      </div>
    );
  };