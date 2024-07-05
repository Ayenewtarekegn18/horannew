import React, { useState } from "react";
import {
  Text,
  flexbox,
  Box,
  Flex,
  Button,
  Collapse,
  useDisclosure,
} from "@chakra-ui/react";

import { FaPlus, FaTimes } from "react-icons/fa";
const CustomDropDown = ({ title, description}) => {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);
 
  return (
    <Box
      style={{
        width: "50%",
        margin: "auto",
        marginTop: "5px",
        padding: "10px",
      }}
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Text
          as="div"
          textStyle="subtitle"
          align="center"
          textAlign="start"
          color="gray.800"
          width={["100%", null, "100%"]}
          fontSize={["md", null, "lg"]}
          _dark={{ color: "gray.300" }}
          fontFamily={["Poppins,Poppins Placeholder,sans-serif", null, 'Poppins,Poppins Placeholder,sans-serif']}
              fontStyle={['normal', null, 'normal']}
              height = {{height:"auto"}}
              white-space = "pre-wrap"
              word-wrap ="break-word"
              word-break = "break-word"
              transform-perspective ={1200}
              font-weight = {400}
              letter-spacing = {-0.03}
              line-height= {110}
              text-align = "center"
        >
          {title}
        </Text>
        <Button onClick={handleToggle}>
          {show ? <FaTimes /> : <FaPlus />}
        </Button>
      </Flex>
      <Collapse in={show}>
        <Box
          p="10px"
          color="white"
          mt="4"
          bg="gray.900"
          rounded="md"
          shadow="md"
        >
          <Text
            as="div"
            textStyle="subtitle"
            align="center"
            textAlign="start"
            color="gray.800"
            fontFamily={["Poppins,Poppins Placeholder,sans-serif", null, 'Poppins,Poppins Placeholder,sans-serif']}

            fontStyle={["light", null, "light"]}
            width={["100%", null, "100%"]}
            fontSize={["md", null, "lg"]}
            _dark={{ color: "gray.500" }}
          >
            {description}
          </Text>
        </Box>
      </Collapse>
    </Box>
  );
};

export default CustomDropDown;
