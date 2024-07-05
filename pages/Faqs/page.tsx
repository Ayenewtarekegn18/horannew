import React, { useState } from "react";
import CustomDropDown from "components/custom-dropdown/custom-drop-down";

import {
  Text,
  flexbox,
  Box,
  Flex,
  Button,
  Collapse,
  useDisclosure,
} from "@chakra-ui/react";

const   Faqs = () => {
  const faqData = [
    {
      title: "What Services does Horan Software Solutions offer",
      description:
     " Horan Software Solutions provides a range of services including software development, web development, mobile app development, digital markating, company branding, IT consulting and more."},
    {
      title: "How can I request a quote for my project?",
      description:
        "You can request a quote by filling out the contact form on our website or by reaching out to our sales team directly via email or phone.",
    },
    {
      title: "Is Horan Software Solutions experienced in handling large-scale projects?",
      description:
        "Yes, we have extensive experience in handling large-scale projects for enterprise clients.",
    },
    {
      title: "Does Horan Software Solutions provide ongoing support and maintainance?",
      description:
        "Yes, we offer ongoing support and maintenance services to ensure the smooth functioning of your software solutions.",
    },
    {
      title: "Can I see examples of projects Horan Software Solutions has completed? ",
      description:
        "Yes, we have a portfolio showcasing our past projects. Contact our sales team, and they will be happy to provide you with relevant examples.",
    },
    {
      title: "How long does it typically take for Horan Software Solutions to complete a project?",
      description:
        'The timeline for a project depends on its complexity and scope. We work closely with our clients to establish realistic timelines and deliver high-quality results within the agreed-upon timeframe.',
    },
  ];
  return (
    <div style={{ marginTop: "50px" , marginBottom: "20px"}}>
      <Text
        textAlign="center"
        color="#DDFF00" // Change color to #DDFF00
        fontFamily={["Poppins,Poppins Placeholder,sans-serif", null, 'Poppins,Poppins Placeholder,sans-serif']}
        fontStyle={["light", null, "light"]}
        fontSize={["md", null, "1.0rem"]}
        // textTransform={["uppercase", null, "lowercase"]}
        _dark={{ color: "#DDFF00" }}
        _light={{
          color: "#7A852E",
          fontWeight: "400",
        }}
      >
        FaQs
      </Text>
      <Text
        fontFamily={["Poppins,Poppins Placeholder,sans-serif", null, 'Poppins,Poppins Placeholder,sans-serif']}
              fontStyle={['normal', null, 'normal']}
              fontSize={['md', null, '1.8rem']}
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
        {" "}
        We&apos;ve got the answers
      </Text>
      <div 
>
        {faqData.map((item, index) => (
          <CustomDropDown 

            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Faqs;
