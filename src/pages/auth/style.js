import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const AuthInfoContainer = styled.div`
  width: 360px;
  padding: 24px;
  height: 480px;
  border-radius: 36px;
  box-shadow: rgba(149, 157, 165, 0.4) 0px 8px 24px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  h1 {
    font-family: R-FLEX-BLACK;
    font-size: 48px;
    span {
      color: var(--g-color-highlight);
    }
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    font-family: R-FLEX-REGULAR;
    color: red;
    font-size: 12px;
  }
  input {
    border: none;
    background-color: var(--g-color-lightgrey);
    padding: 12px 24px;
    border-radius: 36px;
    font-family: R-FLEX-REGULAR;
  }
  button {
    cursor: pointer;
    margin-top: 12px;

    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    padding: 12px 24px;
    border-radius: 36px;
    background-color: black;
    color: white;
    font-family: R-FLEX-REGULAR;
  }
  a {
    font-family: R-FLEX-REGULAR;
    color: red;
    font-size: 12px;
    cursor: pointer;
    text-decoration: underline;
  }
`;
