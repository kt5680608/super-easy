import styled from "styled-components";
import { motion } from "framer-motion";
export const MainContainer = styled.section`
  margin: 60px auto;
  max-width: 1140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  max-width: 90%;
`;

export const SectionTitle = styled.h1`
  font-size: 24px;
  font-family: R-FLEX-REGULAR;
`;
export const PaletteUlContainer = styled(motion.ul)`
  display: flex;
  height: max-content;
  width: 90%;
  z-index: 1;
  gap: 36px;
  position: relative;
  justify-content: center;
  padding: 18px 36px;
  margin: 6px 0;
  border-radius: 24px;
  flex-wrap: wrap;
  div {
    flex-grow: 0;
  }
`;
export const PaletteContainer = styled.li`
  display: flex;
  flex-direction: column;
  z-index: 0;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 160px;
  gap: 8px;
  font-family: R-FLEX-REGULAR;
`;

export const Palette = styled(motion.div)`
  width: 64px;
  height: 64px;
  position: relative;
  z-index: 999;
  cursor: pointer;
  border-radius: 50%;
  background-color: ${(props) => props.bgColor && props.bgColor};
  filter: ${(props) => props.light && `brightness(${props.light})`};
`;
export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CloseButton = styled(motion.div)`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  position: absolute;
  top: 12px;
  right: 12px;
`;
