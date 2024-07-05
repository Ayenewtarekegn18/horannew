import React from 'react';
import { Flex, Text, Image,ControlBoxProps,Box } from "@chakra-ui/react";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import styles from './PartnersSection.module.css'; // Ensure this is imported correctly
import { Benefits } from './Benefits/Page';
import { Attributes } from './Attributes/Page';
import { Attribute2 } from './Attributes2/Page';
import { Tags } from './Tags/Page';
import { HowItWorks } from './HowItWorks/Page';
import { CustomerStory } from './customerStory/page';
import Reviews from './Reviews/page';
import Faqs from './Faqs/page';
import UpperFotter from './Footer/page';
import { Footer } from 'components/layout/footer';

const AboutUs = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  const video = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: video,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -150]
  );


  React.useEffect(() => {
    const handleResize = () => {
      console.log("resized")
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize()

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Box alignItems = "center" justifyContent = "center" textAlign = "center" >
    <Flex id="aboutus" flexDirection="column" justifyContent="center" alignItems="center" flexWrap="wrap" mt = "2.8rem">
      <Text
        justifyContent={"center"}
        fontFamily="Poppins, sans-serif"  
        fontSize={['md', null, '1.8rem']}
        color="grey"
        textAlign="center"
        margin={isMobile ? "6rem 5rem 5rem 5rem" : "6rem 10rem 5rem 10rem"}
      >
        <span style={{ color: "white" }}>We know what's going on. </span>
        <span style={{ color: "grey" }}>Horan software, an innovative Ethiopian startup,</span>
        <span style={{ color: "grey" }}>revolutionizing the digital landscape. Our name Horan </span>
        <span style={{ color: "white" }}>signifies Productivity and Prosperity through hard work</span>
        <span style={{ color: "grey" }}>in Afaan Oromo. Pioneering Information and Communication technologies,</span>
        <span style={{ color: "white" }}>Horan has created the first Student Social Network app in Ethiopian</span>
        <span style={{ color: "grey" }}> Universities, fostering student connections and knowledge-sharing. With over 4 thousand online communities</span>
        <span style={{ color: "white" }}>For years, we've been the go-to partner for businesses</span>
        <span style={{ color: "grey" }}>seeking to enhance their digital presence.</span>
      </Text>

      <Flex flexDirection="row" justifyContent="center" alignItems="center" mb = {"3rem"}>
        <Image
          src="/static/images/star.png"
          alt="Star"
          height={8}
          width={30}
        />
        <Text
          color="#DDFF00"
          fontFamily="sans-serif"
          fontSize={['md', null, '1.0rem']}
          textTransform="uppercase"
          _dark={{ color: "#DDFF00" }}
          _light={{ color: "#7A852E", fontWeight: "400" }}
          justifyContent="center"
          ml={2} // Adjust spacing as needed
        >
          About Us
        </Text>
      </Flex>
    </Flex>
    <Benefits />

<Attributes />

<Attribute2 /> 

<Tags />

<HowItWorks />
<CustomerStory/>
<Reviews />

<Faqs />


<UpperFotter />

    <Footer />
    </Box>
  );
};

export default AboutUs;
