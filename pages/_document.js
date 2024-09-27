import { ColorModeScript } from '@chakra-ui/react'
import NextDocument,  {Html, Main, Head, NextScript} from 'next/document'
import theme from '../libs/theme'

export default class Document extends NextDocument {
    render () {
        return(
            <Html lang="en">
                <Head>
                    <script defer data-domain="devtor-homepage.vercel.app" src="https://plausible.io/js/plausible.js"></script>
                    <script src="https://feedback-widtget.vercel.app//widget.umd.js"></script>
                </Head>
                <body>
                    <ColorModeScript  initialColorMode={theme.config.initialColorMode} />
                    <Main />
                    <NextScript />
                    <my-widget project-id="4"></my-widget>
                </body>
            </Html>
        )
    }
}
