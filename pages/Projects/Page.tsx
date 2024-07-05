"use client";

import {
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import * as React from "react";


import dynamic from "next/dynamic";
import styles from "../PartnersSection.module.css";
const CodePanel = dynamic(() => import("components/code-panel/code-panel"));
const ComponentShowcase = dynamic(() =>
  import("components/component-showcase").then((mod) => mod.ComponentShowcase)
);
import Project from "components/projects/Page";
export const Projects = () => {
  const dataList = [
    {
      title: "Halchisa Trading",
      imageUrl: "/static/images/watch.webp",
      description:"Learn about hosting built for scale and reliability.",
      refer: "k",
    },
    {
      title: "Mudnu Trading",
      imageUrl: "/static/images/endurance_web.webp",
      description:"Learn about hosting built for scale and reliability.",
        refer: "",
    
    },
    {
      title: "Halchisa",
      imageUrl: "/static/images/mella_website.webp",
      description:"Learn about hosting built for scale and reliability.",
      refer : "k",
    },
    {
        title: "AASTU Students App",
        imageUrl: "/static/images/mella_website.webp",
        description:"Learn about hosting built for scale and reliability.",
        refer : "k",
      },
      {
        title: "Hotspot",
        imageUrl: "/static/images/mella_website.webp",
        description:"Learn about hosting built for scale and reliability.",
        refer : "k",
      },
      {
        title: "Mela Tour and Travel",
        imageUrl: "/static/images/mella_website.webp",
        description:"Learn about hosting built for scale and reliability.",
        refer : "k",
      }
    // Add more items as needed
  ];
  return (
    <div className={styles.container}>
    <Flex flexDirection="row" justifyContent={"center"}>
    
    <Image
    src="/static/images/star.png"
    alt="Mella website"
    height={10}
    width={25}
    style = {{paddingBottom: "10px"}}
    />
      <Text
        textAlign="center"
        mb="2"
        color="#DDFF00" // Change color to #DDFF00
        fontFamily={["sans-serif", null, "sans-serif"]}
        fontStyle={["medium", null, "medium"]}
        fontSize={["md", null, "1.0rem"]}
        //textTransform={["lowercase", null, "uppercase"]}
        _dark={{ color: "#DDFF00" }}
        _light={{
            color: "#7A852E",
            fontWeight: "400",
        }}
        >
         Our Projects
      </Text>
    </Flex>

     

      {/* Steps */}

      <Flex
        style={{
            display: "flex",
            flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
                }}
        gap={7}
      >
        {dataList.map((data, index) => (
        <Box width={{ base: "100%", md: "30%" }} >
          <Project
            key={index}
            title={data.title}
            image={data.imageUrl}
            description={data.description}
            refer = {data.refer}
            />
        </Box>
        ))}
      </Flex>
    </div>
  );
};
