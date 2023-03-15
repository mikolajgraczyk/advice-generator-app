import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: border-box;
    }

    *, ::after, ::before {
    box-sizing: inherit;
    }

    body {
       background: ${({ theme }) => theme.color.darkBlue};
       height: 90vh;
       display: flex;
       justify-content: center;
       align-items: center;
       padding: 16px;
       font-family: Manrope;
    }
`;
