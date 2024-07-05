import { Box } from '@chakra-ui/react'

export const BackgroundGradient = ({ hideOverlay, ...props }: any) => {
  const gradientOverlay = `linear-gradient(to bottom, #0D0D0D4D, rgba(13, 13, 13, 0))`

  return (
    <Box
      backgroundImage={gradientOverlay}
      backgroundBlendMode="saturation"
      position="absolute"
      top="0"
      left="0"
      zIndex="0"
      opacity={0.5} // Adjust opacity as needed
      height="100vh"
      width="100%"
      overflow="hidden"
      pointerEvents="none"
      {...props}
    >
      {!hideOverlay && (
        <Box
          backgroundImage={gradientOverlay}
          position="absolute"
          top="0"
          right="0"
          bottom="0"
          left="0"
          zIndex="1"
        />
      )}
    </Box>
  )
}
