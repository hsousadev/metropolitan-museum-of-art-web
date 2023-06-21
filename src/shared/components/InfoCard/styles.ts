import styled from "styled-components";

export const Container = styled.div`
  transition: all 0.2s ease-in-out;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  background: #ffffff;
  box-shadow: 0px 61.4056px 87.7222px -35.0889px rgba(57, 59, 106, 0.08);
  border-radius: 13.1583px;

  padding: 32px 24px;
  margin-bottom: 16px;

  .thumb-image {
    border-radius: 16px;
    overflow: hidden;
  }

  :hover {
    > img {
      transition: all 0.5s;
      transform: scale(1.1);
    }
  }

  img {
    width: 80px;
    height: 80px;
    border-radius: 16px;
    object-fit: cover;
  }

  .info {
    width: 220px;
    cursor: pointer;

    h4,
    p {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    h4 {
      color: var(--Gray);
      margin-bottom: 4px;
    }

    p {
      color: var(--Orange);
      font-size: 16px;
      margin-bottom: 12px;
    }
  }

  .info:hover {
    h4,
    p {
      text-decoration: underline;
    }
  }

  @media (max-width: 540px) {
    flex-direction: column;
    gap: 16px;
  }
`;
