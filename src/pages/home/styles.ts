import styled from "styled-components";

export const Container = styled.div`
  margin-top: 194px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .hero {
    display: flex;
    flex-direction: column;
    margin-bottom: 128px;

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

  .highlight-cards,
  .other-works-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .highlight-cards {
    margin-bottom: 128px;
  }

  .other-works-list {
    flex-wrap: wrap;
  }

  @media (max-width: 1232px) {
    .highlight-cards {
      overflow-x: scroll;
      gap: 32px;
    }

    .other-works-list {
      justify-content: center;
      gap: 24px;
    }
  }

  @media (max-width: 540px) {
    margin-top: 64px;

    .hero {
      margin-bottom: 48px;

      h1 {
        font-size: 48px;
        margin-bottom: 48px;
      }
    }
  }
`;
