import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;

  .hero,
  .overview,
  .descriptions {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .hero {
    width: 100%;
    margin-top: 96px;
    border-bottom: 1px solid #d9d9d9;
    padding-bottom: 52px;

    .thumb-image {
      overflow: hidden;
      border-radius: 16px;

      margin-bottom: 32px;

      img {
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        width: 400px;
        height: 460px;

        object-fit: cover;
        border-radius: 16px;
      }

      img:hover {
        transform: scale(1.1);
      }
    }

    h2 {
      margin-bottom: 32px;
    }

    h3 {
      color: var(--Orange);
      font-weight: normal;
    }

    h4 {
      font-weight: bold;
      margin-bottom: 52px;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 4px;
    }

    button:hover {
      transition: all 0.2s ease-in-out;
      opacity: 70%;
    }
  }

  .overview {
    padding-top: 52px;
    width: 100%;

    h2 {
      margin-bottom: 24px;
    }
  }

  .descriptions {
    text-align: center;
    gap: 16px;
  }

  @media (max-width: 540px) {
    .hero {
      margin-top: 48px;
      padding-bottom: 32px;

      .thumb-image {
        img {
          width: 100%;
          height: 40%;
        }
      }
    }

    .overview {
      padding-top: 32px;
    }
  }
`;

export default Container;
