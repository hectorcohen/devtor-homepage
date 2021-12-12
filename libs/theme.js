import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global : props => ({
        body: {
            bg: mode('#ffffff', "#202023")(props)
        }
    })
}

const components = {
    Heading: {
        variants : {
            'section-title' : {
                textDecoration : 'underline',
                fontSize: 20,
                textUnderLineOffset: 6,
                TextDecorationColor: '#525252',
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4
            },
            'section-subtitle' : {
                fontSize: 20,
                marginTop: 3,
                marginBottom: 4
            }
        }
    }, 
    Link: {
        baseStyle: props => ({
            color: mode('#3d7aed', '#ff63c3')(props),
            textUnderlineOffset: 3
        })
    }
}


const colors = {
    glassTeal : '#88ccca',
}

const config = {
    initialColorMode : 'dark',
    useSystemColorMode: true
}

const theme = extendTheme({
    config,
    styles,
    colors,
    components,
})

export default theme

