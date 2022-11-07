import styled from "styled-components";

import { motion } from "framer-motion";

export const MainContainer = styled(motion.div)`
  position: fixed;
  padding: 12px 24px;
  bottom: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  border-radius: 48px;
  font-family: R-FLEX-REGULAR;
  z-index: 999;
`;
