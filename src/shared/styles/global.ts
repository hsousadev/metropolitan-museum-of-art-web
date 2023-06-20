import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --Max-content-width: 1286px;

    --Gray: #4F4F4F;
    --Orange: #E0A449;
    --White: #F9F9F9;
  }

  html {
    transition: all 0.4s ease-in-out;

    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--White);

    @media(max-width: 1360px) {
      padding: 0 64px;
    }

    @media(max-width: 720px) {
      padding: 0 32px;

      h1 {
        font-weight: 700;
        font-size: 32px;
      }

      h2 {
        font-weight: 400;
        font-size: 24px;
      }

      h3 {
        font-weight: 700;
        font-size: 16px;
      }

      h4 {
        font-weight: 400;
        font-size: 14px;
      }

      p {
        font-weight: 400;
        font-size: 12px;
      }
    }

    @media (max-width: 540px) {
      h1 {
        font-weight: 700;
        font-size: 24px;
      }

      h2 {
        font-weight: 400;
        font-size: 16px;
      }

      h3 {
        font-weight: 700;
        font-size: 14px;
      }

      h4 {
        font-weight: 400;
        font-size: 12px;
      }

      p {
        font-weight: 400;
        font-size: 10px;
      }
    }

    @media(max-width: 425px) {
      padding: 0 16px;
    }

    @media(max-width: 1380px) {
      zoom: 80%;
    }

    @media(max-width: 1232px) {
      zoom: 100%;
    }
  }

  body {
    max-width: var(--Max-content-width);
    width: 100%;
    background: var(--White) !important;
    padding: 0 40px;
    margin: 0;
  }

  h1, h2, h3, h4, p {
    transition: all 0.4s ease-in-out;

    margin: 0;
    font-family: "Inter", sans-serif;
    font-style: normal;
    color: var(--Gray);
  }

  h1 {
    font-weight: 700;
    font-size: 48px;
  }

  h2 {
    font-weight: 400;
    font-size: 32px;
  }

  h3 {
    font-weight: 700;
    font-size: 24px;
  }

  h4 {
    font-weight: 400;
    font-size: 16px;
  }

  p {
    font-weight: 400;
    font-size: 14px;
  }

  button {
    cursor: pointer;
    outline: none;
    appearance: none;
    border: none;
    background: transparent;
    padding: 0;
  }

`;
