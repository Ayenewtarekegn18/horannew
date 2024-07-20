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

  
export const PartnersSection = () => {
    const logos = [
      { src: '/static/images/partner_1.webp', alt: 'Facebook' },
      { src: '/static/images/partner_2.webp', alt: 'Endurance' },
      { src: '/static/images/partner_3.webp', alt: 'Global Peace' },
      { src: '/static/images/partner_4.webp', alt: 'Red Sea' },
      { src: '/static/images/partner_5.webp', alt: 'Lega' },
      { src: '/static/images/partner_6.webp', alt: 'Zara' },
      { src: '/static/images/partner_7.webp', alt: 'Mudunu' },
      { src: '/static/images/partner_3.webp', alt: 'Global Peace' },
      
      // { src: '/static/images/partner_8.webp', alt: 'Kalhiwot' },
  
    ];
    const logosArray = logos.map((logo, index) => (
      <div key={index} className={styles["logo-container"]}>
        <Image src={logo.src} alt={logo.alt} className={styles.logo} />
      </div>
    ));
  
    return (
      <div className={styles[""]}>
        <Text
          textAlign="center"
          mb="2"
          pt="40"
          /*color="gray.500"*/
          fontFamily={["Inter, Inter Placeholder, sans-serif",null,"Inter, Inter Placeholder, sans-serif"]}
          // fontStyle={['medium', null, 'medium']}
          // fontSize={['md', null, '1.3rem']}
          color="#7d7f78"
          fontSize="17px"
        >
          Trusted by Industry leaders
        </Text>
  
        <div className={styles["partners-section"]}>
          <Marquee
            velocity={60}
            direction={"rtl"}
            onInit={function (): void {}}
            onFinish={function ({ totalTries }: { totalTries: number; }): void {}}
            scatterRandomly={false}
            resetAfterTries={0}
          >
            {logosArray}
          </Marquee>
        </div>
      </div>
    );
  };