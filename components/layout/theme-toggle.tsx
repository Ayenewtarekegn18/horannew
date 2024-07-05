import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { FiMoon, FiSun } from 'react-icons/fi';

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const bg = useColorModeValue('whiteAlpha.700', 'rgba(23, 23, 23, 0.65)');

  return (
    <IconButton
      variant="ghost"
      aria-label="theme toggle"
      icon={colorMode === 'light' ? <FiMoon size="20" /> : <FiSun size="20" />}
      borderRadius="md"
      px={3} 
      py={3}  
      onClick={toggleColorMode}
    />
  )
}

export default ThemeToggle
