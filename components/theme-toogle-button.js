import { IconButton, useColorMode, useColorModeValue  } from '@chakra-ui/react'
import  { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ThemeToogleButton = () => {
    const { toggleColorMode } = useColorMode()

    return (
        <IconButton aria-label="Toogle theme"
            colorScheme={useColorModeValue('yellow', 'purple')}
            icon={useColorModeValue(<MoonIcon/>, <SunIcon/>)}
            onClick={toggleColorMode}
            mr={3}
        >

        </IconButton>
    )
}

export default ThemeToogleButton