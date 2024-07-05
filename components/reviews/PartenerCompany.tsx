import React from "react";
import { Flex, Image, Text } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { Br } from "@saas-ui/react";

const PartenerCompany = ({ image, description, owner_name, company_name }) => {
  return (
    <Flex
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "20px",
      }}
      direction={{ base: "column", md: "column" }}
    >
      <Image src={image} alt="partner one image" style={{ width: 150 }} />
      <Text
        as="div"
        textStyle="subtitle"
        align="center"
        textAlign="center"
        color="gray.800"
        fontFamily={["Inter, Inter Placeholder, sans-serif"]}
        fontStyle={["light", null, "light"]}
        width={["100%", null, "100%"]}
        fontSize={["md", null, "lg"]}
        _dark={{ color: "gray.500" }}
        marginBottom={5}
 



      >
        {description.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </Text>

      <Flex direction="row" gap={1}>
        <FaStar color="#FFD700" size={20} />
        <FaStar color="#FFD700" size={20} />
        <FaStar color="#FFD700" size={20} />
        <FaStar color="#FFD700" size={20} />
        <FaStar color="#FFD700" size={20} />
      </Flex>
      <Text
        as="div"
        textStyle="subtitle"
        align="center"
        textAlign="center"
        color="gray.800"
        fontFamily={["Inter, Inter Placeholder, sans-serif"]}
        fontStyle={["light", null, "light"]}
        width={["100%", null, "100%"]}
        fontSize={["md", null, "lg"]}
        _dark={{ color: "gray.500" }}
        marginTop={5}
      >
        {owner_name}
      </Text>
      <Text
        as="div"
        textStyle="subtitle"
        align="center"
        textAlign="center"
        color="gray.800"
        fontFamily={["Inter, Inter Placeholder, sans-serif"]}
        fontStyle={["light", null, "light"]}
        width={["100%", null, "100%"]}
        fontSize={["md", null, "lg"]}
        _dark={{ color: "white" }}
      >
        {company_name}
      </Text>
    </Flex>
  );
};

export default PartenerCompany;
