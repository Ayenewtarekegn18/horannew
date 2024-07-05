import React from "react";
import {
  Card,
  Image,
  CardHeader,
  CardBody,
  Text,
  Heading,
  Button,
  Link,
} from "@chakra-ui/react";

const Project = ({ title, image, description, refer }) => {
  return (
    <Card
      style={{
        margin: 12,
        background: 'linear-gradient(125deg, #212121 0%, rgb(13, 13, 13) 100%)',
        borderRadius: '15px',
      }}
    >
      <Image
        src={image}
        alt="image about top notch solution"
        borderRadius="15px"
        width="100%"
        height="auto" // This ensures the image scales proportionally
      />
      <CardHeader>
        <Heading
          as="h3"
          size="md"
          fontFamily={["Inter", null, "sans-serif"]}
          fontStyle={["bold", null, "bold"]}
          color="gray.300"
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
          fontSize={["md", null, "lg"]}
          _dark={{ color: "gray.500" }}
          mb="3"
        >
          {description}
        </Text>
        <Button>
          <Text
            textAlign="center"
            color="#DDFF00"
            fontFamily={["sans-serif", null, "sans-serif"]}
            fontStyle={["medium", null, "medium"]}
            fontSize={["md", null, "1.0rem"]}
            _dark={{ color: "#DDFF00" }}
            _light={{
              color: "#7A852E",
              fontWeight: "400",
            }}
          >
            <Link href={refer}>View Project</Link>
          </Text>
        </Button>
      </CardBody>
    </Card>
  );
};

export default Project;
