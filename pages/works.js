import { Container, SimpleGrid } from '@chakra-ui/react';
import { WorkGridItem } from '../components/grid-item';
import Section from '../components/section';

import cues from '../public/images/cues.png';
import work_one from "../public/images/desktop-creditoo.png";
import start_left from '../public/images/start-left.png';

const Works = () => {
    return (
        <Container mt={2}>
            <SimpleGrid column={[1, 1, 2]} gap={6}>
            <Section>
                    <WorkGridItem 
                        id="cues"
                        title="CUES (Corporación Universitaria Empresarial de Salamanca)"
                        thumbnail={cues}
                    >
                        University Industry.
                    </WorkGridItem>
                </Section>
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
                <Section>
                    <WorkGridItem 
                        id="start-left"
                        title="StartLeft Security"
                        thumbnail={start_left}
                    >
                        Start Left® embeds AI-driven security into every stage of software product development, empowering teams to proactively manage risks, streamline security practices, and foster a security-first culture—all while accelerating innovation.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Works