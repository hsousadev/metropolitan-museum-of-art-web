import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 40px;

  .options {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      transition: all 0.2s ease-in-out;

      display: flex;
      align-items: center;
      justify-content: space-between;

      gap: 4px;
    }
  }
`;
