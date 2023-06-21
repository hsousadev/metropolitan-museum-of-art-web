import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 40px;
  width: 100%;

  .options {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;

    button {
      transition: all 0.2s ease-in-out;

      display: flex;
      align-items: center;
      justify-content: space-between;

      gap: 4px;
    }
  }

  @media (max-width: 540px) {
    flex-direction: column;
    gap: 32px;
  }
`;
