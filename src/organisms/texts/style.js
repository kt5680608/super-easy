import styled from "styled-components";
import { motion } from "framer-motion";
export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

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

export const TextPreview = styled.p`
  font-size: ${(props) =>
    props.h1
      ? `calc(${props.fontSize} + 24px)`
      : props.h2
      ? `calc(${props.fontSize} + 18px)`
      : props.h3
      ? `calc(${props.fontSize} + 12px)`
      : props.h4
      ? `calc(${props.fontSize} + 6px)`
      : props.p
      ? `calc(${props.fontSize})`
      : "24px"};
  font-family: R-FLEX-REGULAR;
  span {
    font-size: ${(props) => props.fontSize && `calc(${props.fontSize} - 6px)`};
  }
`;

export const TextUlContainer = styled(motion.ul)`
  display: flex;
  width: 80%;
  height: max-content;
  flex-direction: column;
  align-items: flex-start;
  gap: 36px;
  position: relative;
  justify-content: center;
  padding: 18px 36px;
  margin: 6px 0;
  border-radius: 24px;
`;
