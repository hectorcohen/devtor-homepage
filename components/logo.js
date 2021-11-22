import Link from 'next/link'
import Image from 'next/image'
import styled from '@emotion/styled'
import { Text, useColorModeValue } from '@chakra-ui/react'
import logoDark from '../public/logo-dark.png'
import logoLight from '../public/logo-light.png'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;
`


const Logo = ( ) => {

    
    return (
        <Link href='/'>
            <a>
                <LogoBox>
                    <Image src={useColorModeValue(logoDark, logoLight )} width={30} height={30} alt="logo" />
                    <Text 
                        color={useColorModeValue('gray.800', 'whiteApha.900')}
                        fontFamily='M PLUS Rounded 1c'
                        fontWeight='bold'
                        ml={3}
                    >
                    Héctor Cohen
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo