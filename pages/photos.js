import { Container, Heading, SimpleGrid } from "@chakra-ui/react"
import Section from "../components/section"
import { WorkGridItem } from "../components/grid-item"
import fisrt_day from "../public/images/fisrt-day.jpg"



export default function Photos(){
    return (
        <Container mt={2}>
            <Heading as="h3" variant="section-title">My photos</Heading>
            <SimpleGrid column={[1, 1, 2]}>
                <Section>
                     <WorkGridItem 
                        id="first-day"
                        title="My first day of work"
                        thumbnail={fisrt_day}
                    >
                        You can see me eager to get started and know which of your projects I would work on ... 
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}