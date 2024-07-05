import { Container, Flex, FlexProps, Text, VStack } from '@chakra-ui/react'

interface HeroProps extends Omit<FlexProps, 'title'> {
  title: string | React.ReactNode
  description?: string | React.ReactNode
}

export const Hero = ({ title, description, children, ...rest }: HeroProps) => {
  return (
    <Flex py="10" alignItems="center" {...rest}>
      <Container>
        <VStack spacing={[4, null, 8]} alignItems="center">
          <Text as="h1" textStyle="h1"
            align="center"
            textAlign="center"

            fontFamily={['Poppins', null, 'Poppins']}
            fontStyle={['extrabold', null, 'extrabold']}
            _dark={{   bgGradient:"linear(to-b, #ffffff, #999999CD )" }}
            _light={{   bgGradient:"linear(to-b, #000000, #999999CD )"} }


            bgClip="text">
            {title}
          </Text>
          <Text
            as="div"
            textStyle="subtitle"
            align="center"
            textAlign="center"
            color="gray.800"
            fontFamily={['Poppins', null, 'Poppins']}
            fontStyle={['light', null, 'light']}
            width={['80%', null, '80%']}
            fontSize={['md', null, 'lg']}
            _dark={{ color: 'gray.500', 
            }}
          >
            {description}
          </Text>
        </VStack>
        {children}
      </Container>
    </Flex>
  )
}
