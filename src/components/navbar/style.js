import styled from "styled-components";

import { motion } from "framer-motion";

export const NavMainContainer = styled.nav`
  width: 100vw;
  height: 60px;
  background-color: white;
  transition: background-color 0.2s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  box-shadow: rgba(149, 157, 165, 0.1) 0px 0px 24px;
  position: fixed;
  z-index: 999;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
  }
  h1 {
    color: black;
    font-family: R-FLEX-REGULAR;
    font-size: 24px;
    span {
      color: var(--g-color-highlight);
    }
  }
`;

export const MenuItemLink = styled(motion.a)`
  padding: 12px 10px;
  font-size: 15px;
  line-height: 20px;
  color: black;
  border-radius: 8px;
  border: 0;
  white-space: nowrap;
  cursor: pointer;
  background-color: transparent;
  text-decoration: none;
  text-align: left;
`;

export const LogoutBtn = styled(motion.button)`
  border: none;
  background-color: white;
  color: black;
  font-family: R-FLEX-REGULAR;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 12px;
  border-radius: 24px;
  cursor: pointer;
`;
