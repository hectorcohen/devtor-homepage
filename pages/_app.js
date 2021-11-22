import { ChakraProvider} from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import theme from '../libs/theme'

const Website = ({Component, pageProp, router}) => {
    return (
        <ChakraProvider theme={theme}>
            <Layout router={router}>
                <Component  {...pageProp} key={router.route}/>
            </Layout>
        </ChakraProvider>
    )
}

export default Website

