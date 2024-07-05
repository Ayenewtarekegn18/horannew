import * as React from 'react'

import {
  Box,
  BoxProps,
  Button,
  Container,
  Flex,
  Spacer,
  useColorModeValue,
  Link
} from '@chakra-ui/react'
import { useScroll } from 'framer-motion'
import { Logo } from './logo'
import Navigation from './navigation'
import ThemeToggle from './theme-toggle'

export interface HeaderProps extends Omit<BoxProps, 'children'> {}

export const Header = (props: HeaderProps) => {
  const ref = React.useRef<HTMLHeadingElement>(null)
  const [y, setY] = React.useState(0)
  const { height = 0 } = ref.current?.getBoundingClientRect() ?? {}

  const { scrollY } = useScroll()
  React.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()))
  }, [scrollY])

  const bg = useColorModeValue('whiteAlpha.700', 'rgba(29, 32, 37, 0.5)')

  return (
    <Box
  
      ref={ref}
      as="header"
      top="0"
      w="full"
      position="fixed"
      // backdropFilter="blur(5px)"
      zIndex="sticky"
      borderColor="whiteAlpha.100"
      transitionProperty="common"
      transitionDuration="normal"
      px="6"
      py="5"
      // bg={y > height ? bg : ''}
      // boxShadow={y > height ? 'md' : ''}
      // borderBottomWidth={y > height ? '1px' : ''}
      {...props}
    >
      <Container maxW="container.2xl" px="8" py="4">
        <Flex width="full" align="center" justify="space-between">
          <Logo
            onClick={(e) => {
              if (window.location.pathname === '/') {
                e.preventDefault()

                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                })
              }
            }}
          />
           
          <Spacer display={{ base: 'none', lg: 'block' }} />

          <Navigation />
          <Spacer display={{ base: 'none', lg: 'block' }} />  
         
          <Flex align="center"
           display={{ base: 'none', lg: 'block' }} >
   

          <ThemeToggle />
          <Button
            bg={bg}
            color="grey.400"
            backdropFilter = "blur(1px)"
            borderRadius="full" 
            borderWidth="0.9px"
            borderColor="#3A3A3AD2"
            _hover={{ boxShadow: "0 0 2px rgba(255,255,255,0.8)" }}
            px={8} 
            py={6}
            
          >
            <Link 
           href = {"contactus"}
           >
             Order Now
           </Link>
    </Button>
</Flex>

        </Flex>
      </Container>
    </Box>
  )
}
