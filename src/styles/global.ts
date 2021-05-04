import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    body {
        background: #fff;
    }

    h1,h2,h3,h4,h5,h6 {
        font-family: 'Playfair Display', serif;
    }

    p,li,span,input,textarea,button {
        font-family: 'Montserrat', sans-serif;
    }

    a {
        text-decoration: none;
    }
`;
