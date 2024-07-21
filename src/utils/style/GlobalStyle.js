import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    html,
    body {
        margin: 0;
        padding: 0 100px;
        font-family: 'Montserrat', sans-serif;
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
        margin: 0;
        padding: 0;
    }
`

export default GlobalStyle
