import Logo from './logo'
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToogleButton from './theme-toogle-button'

const LinkItem = ({href, path, children}) => {
    const active = path === href
    const inactiveColor = useColorModeValue('grey.200', 'whiteAlpha.900')

    return (
        <NextLink href={href}>
            <Link 
                p={2}
                bg={active ? 'gray.200' : undefined}
                rounded="lg"
                color={active ? '#202023' : inactiveColor}
            >
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {

    const { path } = props;

    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('whiteAlpha.600', '#202023')}
            style={{backdropFilter: 'blur(10px'}}
            zIndex={1}
            {...props}
        >
            <Container
                display="flex"
                p={2}
                maxW="container.md"
                wrap="wrap"
                align="center"
                justify="space-between"
            >
                <Flex 
                    align="center"
                    mr={5}
                >
                    <Heading 
                        as="h1" 
                        size="lg"
                        letterSpacing="tighter"
                    >
                        <Logo/>
                    </Heading>
                </Flex>
                <Stack
                    direction={{base: 'column', md: 'row'}}
                    display={{base: 'none', md: 'flex'}}
                    width={{base: 'full', md: 'auto'}}
                    alignItems="center"
                    mt={{base: 4, nmt: 0}}
                >
                    <LinkItem href='/works' path={path}>
                        Works 
                    </LinkItem>
                    <LinkItem href='/photos' path={path}>
                        Photos
                    </LinkItem>
                </Stack>
                <Box flex={1} align="right">    
                    <Box ml={2} display={{base: 'inline-block', mb: 'none'}}>
                        <ThemeToogleButton />
                        <Menu>
                            <MenuButton 
                                as={IconButton} 
                                icon={<HamburgerIcon/>}
                                variant="outline"
                                aria-label="Options"
                            />
                            <MenuList>
                                <NextLink href="/" passHref>
                                    <MenuItem as={Link}>About</MenuItem>
                                </NextLink>
                                <NextLink href="/works" passHref>
                                    <MenuItem as={Link}>Works</MenuItem> 
                                </NextLink>
                                <NextLink href="/photos" passHref>
                                    <MenuItem as={Link}>Photos</MenuItem> 
                                </NextLink>
                                <NextLink href="/uses" passHref>
                                    <MenuItem as={Link}>Uses</MenuItem> 
                                </NextLink>
                                <MenuItem as={Link} href="https://github.com/hectorcohen/devtor-homepage">View Source ❤️</MenuItem> 
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar

