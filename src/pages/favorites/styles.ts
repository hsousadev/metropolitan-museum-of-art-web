import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-top: 128px;
    width: 100%;

    h1 {
      font-size: 64px;
      text-align: center;
      max-width: 648px;
      width: 100%;
      margin-bottom: 96px;

      strong {
        color: var(--Orange);
      }
    }
  }

  .favorite-list {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;

    flex-wrap: wrap;
    column-gap: 6px;
  }

  @media (max-width: 540px) {
    .hero {
      margin-bottom: 48px;
      margin-top: 64px;

      h1 {
        font-size: 48px;
        margin-bottom: 48px;
      }
    }

    .favorite-list {
      justify-content: center;
    }
  }
`;
