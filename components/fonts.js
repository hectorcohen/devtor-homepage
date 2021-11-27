import { Global } from "@emotion/react";

const Fonts = () => {
    return (
        <Global
        styles={`
            @import url('https://fonts.googleapis.com/css2?family=M+PLUS+1:wght@300&family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800&family=Montserrat:ital,wght@0,400;0,500;1,400&family=Oswald:wght@400;500;600&display=swap');
        `}
    />
    )
}

export default Fonts