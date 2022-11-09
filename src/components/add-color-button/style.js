import styled from "styled-components";

import { motion } from "framer-motion";

export const Button = styled.button`
  width: 36px;
  height: 36px;
  background-color: black;
  border: none;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ModalBodyContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 36px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  span {
    font-size: 0.8rem;
    color: red;
  }
`;
export const ModalInput = styled.input`
  border: none;
  padding: 12px;
  border-radius: 24px;
  width: 30%;
`;

export const ModalInputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 12px;
  font-family: R-FLEX-REGULAR;
  font-size: 1.1rem;
`;
export const ModalButton = styled.button`
  border: none;
  font-family: R-FLEX-REGULAR;
  background-color: black;
  color: white;
  cursor: pointer;
  border-radius: 24px;
  padding: 12px;
  font-size: 16px;
`;

export const Palette = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: ${(props) => props.bgcolor && props.bgcolor};
`;
