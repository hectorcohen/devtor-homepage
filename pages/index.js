import 
{
Button,
Container, 
Box, 
Heading, 
Image, 
    useColorModeValue,
    ListItem,
    UnorderedList,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Link from 'next/link'
import {ChevronRightIcon} from '@chakra-ui/icons'

import Section from '../components/section'
import Paragraph from '../components/paragraph'

import { BioYear, BioSection } from '../components/bio'

const Page = () => { 
    return (
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} mt={5} mb={6} p={3} align="center">
                Hello, I&apos;m a frontend developer based in Colombia
            </Box>
            <Box display={{mb: 'flex'}}>
                <Box flexGrow={1} mb={5}>
                    <Heading as="h2" variant="page-title">
                        Héctor Cohen
                    </Heading>
                    <p>Digital craftzman ( Artist / Developer / Designer )</p>
                </Box>
                <Box 
                    flexShrink={0} 
                    mt={{base: 4, md: 0}}
                    ml={{md: 6}}
                    align="center"
                >
                    <Image borderColor={useColorModeValue('orange', 'whiteAlpha.800')} borderWidth={3} borderStyle="solid" maxWidth="150px" display="inline-block" borderRadius="full" src='/images/profile.png' alt="profile"/>
                </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>
                    Héctor is a freelancer and a frontend developer based in Colombia with a passion for building digital services/stuff he wants. he has a knack for all things design products, from planning and designing all the way to solve real life problems with code. When not online, loves hanging out with phone camera and recording his place in the world.
                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="https://github.com/hectorcohen">
                        <Button rightIcon={<ChevronRightIcon />} colorScheme={useColorModeValue('yellow', 'teal')}>
                            My portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>
            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio ♥️   
                </Heading> 
                <BioSection>
                    <BioYear>
                        1999
                    </BioYear>
                    Born in Barranquilla, Colombia 
                </BioSection>
                <BioSection>
                    <BioYear>June 2021</BioYear>
                    Graduated as a software developer from  Corporación Universitaria de Salamanca, Barranquilla/Colombia
                </BioSection>
                <BioSection>
                    <BioYear>July 2021</BioYear>
                    Works as a freelancer
                </BioSection>
                <BioSection>
                    <BioYear>September 2021</BioYear>
                    Works in Creditoo, Barranquilla, Colombia
                </BioSection>
            </Section>
            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Skills 💪
                </Heading>
                <UnorderedList>
                    <ListItem><Paragraph>Strong JavaScript skills</Paragraph></ListItem>
                    <ListItem><Paragraph>Strong knowledge of css, preprocessors, BEM, and CSS’s modules.</Paragraph></ListItem>
                    <ListItem><Paragraph>React/Redux experience on commercial projects.</Paragraph></ListItem>
                    <ListItem><Paragraph>Knowledge of Redux, Redux toolkit, React hooks and Context API.</Paragraph></ListItem>
                    <ListItem><Paragraph>Requirements with web visual alignment and structure.</Paragraph></ListItem>
                    <ListItem><Paragraph>Proven experience with implementation and consumption of RESTful web services.</Paragraph></ListItem>

                </UnorderedList>
            </Section>
            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                   Plus ➕ 
                </Heading>
                <UnorderedList>
                    <ListItem><Paragraph>Experience with Node.js, Express.js, Socket.io, MongoDB, PostgresQL, Python, Django.</Paragraph></ListItem>
                    <ListItem><Paragraph>Knowledge of UX/UI/AI.</Paragraph></ListItem>
                    <ListItem><Paragraph>Functional programming.</Paragraph></ListItem>
                    <ListItem><Paragraph>Deployments in: Google Cloud Platform, Vercel , Heroku.</Paragraph></ListItem>
                    <ListItem><Paragraph>Web scraping and automatizations with Python.</Paragraph></ListItem>
                </UnorderedList>
            </Section>
              
            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                   I L❤️ve
                </Heading>
                <Paragraph>
                   <BioSection>
                    <BioYear>Music for code</BioYear>
                    <Link href="https://open.spotify.com/user/12164064307?si=26011dc82f3e43f2">
                        Mar fortune
                    </Link>
                </BioSection> 
                </Paragraph>
            </Section>
        </Container>
    )
}

export default Page
