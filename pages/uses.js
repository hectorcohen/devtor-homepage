import Image from 'next/image'
import { Container, Box, Heading, Text, LinkBox, LinkOverlay} from '@chakra-ui/react'
import { Development, Productivity } from '../libs/development-images'



export default function Uses(){
    return (
        <Container mt={2} maxW="xl">
             <Heading as="h3" variant="section-title">Software tools.</Heading>
             <Box>
                 <Text mb={10}>
                    This is my list of software tools that I use frequently. I do my best at updating it whenever a change occurs. To see my hardware.
                 </Text>
             </Box>
             <Heading as="h3" variant="section-subtitle">Development</Heading>
             <Box>
                {
                    Development.map(({image, name, description, url}) => {
                        return (
                            <LinkBox as='article'my={2} maxW='xl' p='5' borderWidth='2px' rounded='md' key={name}>
                            <Image src={image} width={50} height={50} alt="apps-development"/>
                            <Heading size='md' my='2'>
                              <LinkOverlay href={url}>
                                {name}
                              </LinkOverlay>
                            </Heading>
                            <Text>
                              {description}
                            </Text>
                          </LinkBox>
                        )
                    })
                }
             </Box>
             <Heading as="h3" variant="section-subtitle">Productivity</Heading>
             <Box>
                {
                    Productivity.map(({image, name, description, url}) => {
                        return (
                            <LinkBox as='article'my={2} maxW='xl' p='5' borderWidth='2px' rounded='md' key={name}>
                            <Image src={image} width={50} height={50} alt="apps-development"/>
                            <Heading size='md' my='2'>
                              <LinkOverlay href={url}>
                                {name}
                              </LinkOverlay>
                            </Heading>
                            <Text>
                              {description}
                            </Text>
                          </LinkBox>
                        )
                    })
                }
             </Box>
        </Container>        
    )
}