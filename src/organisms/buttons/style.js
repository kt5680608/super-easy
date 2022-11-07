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

export const ButtonUlContainer = styled(motion.ul)`
  display: flex;
  width: 80%;
  height: max-content;
  gap: 36px;
  position: relative;
  justify-content: space-evenly;
  align-items: center;
  padding: 18px 36px;
  margin: 6px 0;
  border-radius: 24px;
`;

export const CustomButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.color && props.color};
  background-color: ${(props) =>
    props.backgroundColor && props.backgroundColor};
  padding-top: ${(props) =>
    props.paddingTb
      ? props.large
        ? `calc(${props.paddingTb} + 3px)`
        : props.small
        ? `calc(${props.paddingTb} - 3px)`
        : props.paddingTb
      : "12px"};
  padding-bottom: ${(props) =>
    props.paddingTb
      ? props.large
        ? `calc(${props.paddingTb} + 3px)`
        : props.small
        ? `calc(${props.paddingTb} - 3px)`
        : props.paddingTb
      : "12px"};
  padding-left: ${(props) =>
    props.paddingLr
      ? props.large
        ? `calc(${props.paddingLr} + 12px)`
        : props.small
        ? `calc(${props.paddingLr} - 6px)`
        : props.paddingLr
      : "12px"};
  padding-right: ${(props) =>
    props.paddingLr
      ? props.large
        ? `calc(${props.paddingLr} + 12px)`
        : props.small
        ? `calc(${props.paddingLr} - 6px)`
        : props.paddingLr
      : "12px"};
  font-size: ${(props) => props.fontSize && props.fontSize};
  border: ${(props) => props.border && props.border};
  border-radius: ${(props) => props.borderRadius && props.borderRadius};
  filter: ${(props) => (props.hover || props.active) && "brightness(1.4)"};
  font-family: R-FLEX-REGULAR;
  opacity: ${(props) => props.disable && "0.7"};
`;

export const CustomGhostButton = styled(CustomButton)`
  border: ${(props) =>
    props.backgroundColor && `1px solid ${props.backgroundColor}`};
  background-color: transparent;
  color: ${(props) => props.backgroundColor && props.backgroundColor};
`;
export const CustomIconButton = styled(CustomButton)`
  justify-content: space-around;
  padding-left: ${(props) => props.paddingLr && props.paddingLr};
  padding-right: ${(props) => props.paddingLr && props.paddingLr};
  padding-top: ${(props) => props.paddingTb && props.paddingTb};
  padding-bottom: ${(props) => props.paddingTb && props.paddingTb};
  min-width: max-content;
`;
