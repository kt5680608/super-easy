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
  width: max-content;
  height: max-content;
  gap: 36px;
  position: relative;
  justify-content: center;
  padding: 18px 36px;
  margin: 6px 0;
  border-radius: 24px;
`;
export const PaletteContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px;
  width: 90px;
  height: 160px;
  gap: 8px;
  font-family: R-FLEX-REGULAR;
`;

export const Palette = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: ${(props) => props.bgcolor && props.bgcolor};
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

export const ButtonUlContainer = styled(motion.ul)`
  display: flex;
  width: 100%;
  height: max-content;
  gap: 36px;
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 18px 36px;
  margin: 6px 0;
  border-radius: 24px;
  flex-wrap: wrap;
  div: {
    flex-grow: 0;
  }
`;

export const CustomButton = styled.button`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => props.variants === "disabled" && "0.7"};
  color: ${(props) =>
    props.variants === "ghost" ? props.backgroundColor : props.color};
  background-color: ${(props) =>
    props.variants === "ghost" ? "transparent" : props.backgroundColor};
  padding-top: ${(props) =>
    props.paddingTb
      ? props.variants === "large"
        ? `calc(${props.paddingTb} + 3px)`
        : props.variants === "small"
        ? `calc(${props.paddingTb} - 3px)`
        : props.paddingTb
      : "12px"};
  padding-bottom: ${(props) =>
    props.paddingTb
      ? props.variants === "large"
        ? `calc(${props.paddingTb} + 3px)`
        : props.variants === "small"
        ? `calc(${props.paddingTb} - 3px)`
        : props.paddingTb
      : "12px"};
  padding-left: ${(props) =>
    props.paddingLr
      ? props.variants === "large"
        ? `calc(${props.paddingLr} + 12px)`
        : props.variants === "small"
        ? `calc(${props.paddingLr} - 6px)`
        : props.paddingLr
      : "12px"};
  padding-right: ${(props) =>
    props.paddingLr
      ? props.variants === "large"
        ? `calc(${props.paddingLr} + 12px)`
        : props.variants === "small"
        ? `calc(${props.paddingLr} - 6px)`
        : props.paddingLr
      : "12px"};
  font-size: ${(props) => props.fontSize && props.fontSize};
  border: ${(props) =>
    props.variants === "ghost"
      ? `1px solid ${props.backgroundColor}`
      : props.border};
  border-radius: ${(props) => props.borderRadius && props.borderRadius};
  font-family: R-FLEX-REGULAR;
`;
