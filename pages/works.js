import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import work_one from "../public/images/desktop-creditoo.png"
const Works = () => {
    return (
        <Container mt={2}>
            <Heading as="h3" variant="section-title" fontSize={20} mb={4}>
                Works
            </Heading>
            <SimpleGrid column={[1, 1, 2]} gap={6}>
                <Section>
                    <WorkGridItem 
                        id="creditoo"
                        title="Creditoo"
                        thumbnail={work_one}
                    >
                        A Fintech that facilitates the access to the financing business for its clients 
                        offers financing to its clients, increases its sales, expands and diversifies its income...
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Works