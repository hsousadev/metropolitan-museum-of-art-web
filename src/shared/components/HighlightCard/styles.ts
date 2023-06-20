import styled from "styled-components";

export const Container = styled.div`
  .content {
    transition: all 0.2s ease-in-out;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      cursor: pointer;
      object-fit: cover;
      border-radius: 16px;
    }

    .info-card {
      z-index: 10;
      margin-top: -64px;
    }
  }

  .content:hover {
    .info-card {
      margin-top: -72px;
    }
  }
`;
