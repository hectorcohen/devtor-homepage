import {Container, Box, Heading} from '@chakra-ui/react'

const Page = () => { 
    return (
        <Container>
            <Box borderRadius="lg" bg="red" mb={6} p={3} align="center">
                Hello, I&apos;m a frontend developer based in Colombia
            </Box>
            <Box display={{mb: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Héctor Cohen
                    </Heading>
                    <p>Digital craftzman ( Artist / Devloper / Designer )</p>
                </Box>
            </Box>
        </Container>
    )
}

export default Page