import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    html,
    body {
        padding: 0 100px;
        margin: auto;
        font-family: 'Montserrat', sans-serif;
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
    }
`

export default GlobalStyle
