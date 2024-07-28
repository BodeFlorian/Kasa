import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0 100px;
        font-family: 'Montserrat', sans-serif;

        @media screen and (max-width: 1440px) {
            padding: 0 50px;
        }

        @media screen and (max-width: 1024px) {
            padding: 0 20px;
        }
    }

    #root{
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }
    
    li{
        list-style: none;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
        margin: 0 0;
        padding: 0 0;
    }
`

export default GlobalStyle
