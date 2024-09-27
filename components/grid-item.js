import Image from 'next/image'
import {Box, Text, LinkBox, LinkOverlay, Heading} from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({children, href, title, thumbnail}) => (
    <Box w="100%" align="center">
        <LinkBox cursor="pointer">
            <Image 
                src={thumbnail}
                alt={title}
                className="grid-item-thumbnail"
                placeholder="blur"
                loading="lazy"
             />
             <LinkOverlay href={href} target="_blank">
                <Text mt={2}>{title}</Text>
             </LinkOverlay>
             <Text fontSize={14}>{children}</Text>
        </LinkBox>
    </Box>
)

export const WorkGridItem = ({children, title, thumbnail}) => (
    <Box>
            <LinkBox>
                <Heading my={4} variant="section-title" fontSize={20}>{title}</Heading>
                <Box border='2px solid #EEEE' borderRadius={2}>
                <Image 
                    src={thumbnail}
                    alt={title}
                    className="grid-item-thumbnail"
                    placeholder="blur"
                    loading="lazy"
                    rounded='lg'
                />
                </Box>
             <Text mt={2} fontSize={14}>{children}</Text>
            </LinkBox>
    </Box>
)

export const GridItemStyle = () => {
    return (
        <Global
            styles={`
                .grid-item-thumbnail {
                    border-radius: 12px;
                }
            `}
        />
    )
}