"use client";

import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
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
import styles from "../PartnersSection.module.css";
const CodePanel = dynamic(() => import("components/code-panel/code-panel"));
const ComponentShowcase = dynamic(() =>
  import("components/component-showcase").then((mod) => mod.ComponentShowcase)
);
import HowDoesItWork from "components/how-it-works/how-it-wroks";
export const  HowItWorks = () => {
  
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
  const dataList = [
    {
      title: "Tell us your vision",
      imageUrl: "/static/images/diamond.png",
      description:
        "Choose a plan and show your project detail with us; we are here to listen and bring your vision to life.",
    },
    {
      title: "Receive the magic",
      imageUrl: "/static/images/magic.png",
      description:
        "Sit back and relax while we do the heavy lifting. We will keep you updated on the progress of your project.",
    },
    {
      title: "Get ongoing support",
      imageUrl: "/static/images/ongoing.png",
      description:
        "Benefit from our ongoing support and maintenance services to keep your project running smoothly.",
    },  
    // Add more items as needed
  ];
  return (
    <div className={styles.container}>
      <Text
        textAlign="center"
        mb="2"
        color="#DDFF00" // Change color to #DDFF00
        fontFamily={["sans-serif", null, "sans-serif"]}
        fontStyle={["medium", null, "medium"]}
        fontSize={["md", null, "1.0rem"]}
        _dark={{ color: "#DDFF00" }}
        _light={{
          color: "#7A852E",
          fontWeight: "400",
        }}
      >
        How It works
      </Text>

      {/* Description */}
      <div
        className={styles.description}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Text
          as="h2"
          align="center"
          textAlign="center"
          fontFamily={['sans-serif', null, 'sans-serif']}
          _dark={{ bgGradient: "linear(to-b, #ffffff, #999999CD )" }}
          _light={{ bgGradient: "linear(to-b, #000000, #999999CD )" }}
          bgClip="text"
        >
          Top notch solutions,
          <Br /> delivered at your doorsteps
        </Text>
      </div>

      {/* Steps */}

      <Flex
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "20px",
        }}
        direction={{ base: "column", md: "row" }}
        gap={4}
      >
        {dataList.map((data, index) => (
          <HowDoesItWork
            key={index}
            title={data.title}
            image={data.imageUrl}
            description={data.description}
          />
        ))}
      </Flex>
    </div>
  );
};
