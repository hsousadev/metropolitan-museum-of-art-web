import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  /* Track */
    ::-webkit-scrollbar {
    width: 10px; /* Width of the entire scrollbar */
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgba(224, 164, 73, 0.3); /* Color of the scrollbar handle */
    border-radius: 5px; /* Rounded corners */
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--Orange); /* Color on hover */
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #D9D9D9; /* Color of the track */
  }

  /* Track on hover */
  ::-webkit-scrollbar-track:hover {
    background: #D9D9D9; /* Color on hover */
  }

  &:-internal-autofill-selected {
    background-color: transparent !important;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover, 
  &:-webkit-autofill:focus, 
  &:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: var(--White) !important;
  }

  :root {
    --Max-content-width: 1286px;

    --Gray: #4F4F4F;
    --Orange: #E0A449;
    --White: #F9F9F9;
  }

  html {
    transition: all 0.2s ease-in-out;

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
    margin: 0;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, p, strong {
    transition: all 0.2s ease-in-out;

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
