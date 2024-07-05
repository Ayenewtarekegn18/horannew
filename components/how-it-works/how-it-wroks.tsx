import {
  Card,
  Image,
  CardHeader,
  CardBody,
  Text,
  Heading,
} from "@chakra-ui/react";
import React from "react";

const HowDoesItWork = ({ title, image, description }) => {

  const [isMobile, setIsMobile] = React.useState( false);
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  return (
    <Card style={{ margin: 2 }}
    boxSizing="border-box"
    flex={1}
    width={isMobile?"220px":"400px"}  
    height={isMobile?"50px":"400px"}
    display="flex"
    flexDirection="column"
    justifyContent="flex-start"
    alignItems="flex-start"
    padding="0px 20px 0px 20px"
    backgroundColor="var(--token-77085c4a-7c60-481b-bb4c-b0e5839e54b1, #161616)"
    overflow="visible"
    alignContent="flex-start"
    flexWrap="nowrap"
    gap="10px"
    //perspective="1200px"
   // position="absolute"
    borderRadius="24px"
    border="1px solid #262626"  >
      <Image
        src={image}
        width="60px"
        height="60px"
        alt="image about top notch solution"
        style={{ margin:5}}
      />
      <CardHeader>
        <Heading
       
       textAlign="center"   
       width={isMobile? "150px":"200px"}
       height="auto"
       whiteSpace="pre-wrap"
       wordBreak="break-word"
       fontWeight="400"
       fontStyle="normal"
       fontFamily='"Poppins", "Poppins Placeholder", sans-serif'
       color="#cccccc"
       fontSize={isMobile?"20":"26"}
       letterSpacing="-0.01em"
       lineHeight="100%" 
        >
          {title}
        </Heading>
      </CardHeader>
      <CardBody>
        <Text
          as="div"
          textStyle="subtitle"
          align="center"
          textAlign="start"
          color="gray.800"
          fontFamily={["Inter", null, "sans-serif"]}
          fontStyle={["light", null, "light"]}
          width={["100%", null, "100%"]}
          fontSize={isMobile?"13":"17"}
          _dark={{ color: "gray.500" }}
        >
          {description}

        </Text>
      </CardBody>
    </Card>
    
  );
};

export default HowDoesItWork;
