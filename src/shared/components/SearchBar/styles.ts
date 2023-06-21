import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 16px 24px;
  background: rgba(79, 79, 79, 0.05);
  border-radius: 16px;

  max-width: 762px;

  input {
    appearance: none;
    border: none;
    outline: none;
    background: transparent;

    height: 20px;
    width: 100%;

    font-family: Inter;
    font-size: 14px;
    color: var(--Gray);
  }
`;
