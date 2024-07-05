"use client";

import Image from "next/image";
import * as React from "react";
import {
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import Project from "components/projects/Page";
import styles from "./PartnersSection.module.css";
import UpperFotter from "./Footer/page";
import { Footer } from "components/layout/footer";

const Projects = () => {
  const dataList = [
    {
      title: "Halchisa Trading",
      imageUrl: "/static/images/watch.webp",
      description: "Learn about hosting built for scale and reliability.",
      refer: "k",
    },
    {
      title: "Kontoma Darimu Alliance",
      imageUrl: "/static/images/endurance_web.webp",
      description: "Webapp for Community Empowering Organization",
      refer: "https://kontomadarimualliance.org.et/",
    },  
    {
      title: "Global Peace Federation",
      imageUrl: "/static/images/mella_website.webp",
      description: "Webapp for Peace making National Organization ",
      refer: "https://www.globalpeacefederation.org.et/",
    },
    {
      title: "Mijubuna Toursim Agency",
      imageUrl: "/static/images/miju.jpg",
      description: "Webapp for Tourism Agency",
      refer: "k",
    },
    {
      title: "Mela Tour and Travel",
      imageUrl: "/static/images/mella_website.webp",
      description: "Webapp for Travel Agency",
      refer: "https://www.melatours.com/",
    },
    {
      title: "AASTU Students App",
      imageUrl: "/static/images/aastu_students_app.jpg",
      description: "A Mobile App for Students in AASTU",
      refer: "k",
    },
    {
      title: "Ethiopian University Information",
      imageUrl: "/static/images/University_app.jpg",
      description: "A Mobile App for a Studens to provide full information about Ethiopian University and Collages.",
      refer: "k",
    },
    {
      title: "Afaan Oromoo Quote App",
      imageUrl: "/static/images/s2.png",
      description: "A mobile app containing hundreds of proverbs spoken by Oromoo Gujii Community.",
      refer: "k",
    },
    {
      title: "AASTU ECSF APP",
      imageUrl: "/static/images/aastu_ecsf.jpg",
      description: "A mobile application for AASTU christian Students to enhance thier participation and engagment in the fellowship",
      refer: "k",
    },
    // Add more items as needed
  ];

  return (
    <Box mt = "7rem ">

    <div className={styles.container}>
      <Flex flexDirection="row" justifyContent="center" alignItems="center" >
        <Image
          src="/static/images/star.png"
          alt="Mella website"
          height={10}
          width={25}
          style={{ paddingBottom: "10px" }}
        />
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
          Our Projects
        </Text>
      </Flex>

      {/* Project cards */}
      <Flex
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        gap={10}
        style={{
          padding: "10px",
        }}
      >
        {dataList.map((data, index) => (
          <Box key={index} width={{ base: "100%", md: "30%" }}>
            <Project
              title={data.title}
              image={data.imageUrl}
              description={data.description}
              refer={data.refer}
            />
          </Box>
        ))}
      </Flex>
    </div>
    <UpperFotter />

         <Footer />
    </Box>
  );
};

export default Projects;