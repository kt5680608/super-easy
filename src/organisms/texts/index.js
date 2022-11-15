import React, { useState } from "react";
import { AddTextButton, Popover } from "../../components";
import { useRecoilState } from "recoil";
import { motion } from "framer-motion";
import {
  InfoContainer,
  MainContainer,
  SectionTitle,
  TextPreview,
  TextUlContainer,
} from "./style";
import { firebaseDataState } from "../../recoil-atom";
import CopyToClipboard from "react-copy-to-clipboard";
import { MotionConfig } from "framer-motion";

function TextOrganisms() {
  const [data, setData] = useRecoilState(firebaseDataState);
  const [isPaste, setIsPaste] = useState(false);
  const [onHover, setOnHover] = useState(false);
  const [hoverId, setHoverId] = useState();
  const pasteText = () => {
    setIsPaste(true);
    setTimeout(() => {
      setIsPaste(false);
    }, 2000);
  };
  const variants = [
    { tag: "h1", value: 24 },
    { tag: "h2", value: 18 },
    { tag: "h3", value: 12 },
    { tag: "h4", value: 6 },
    { tag: "p", value: 0 },
  ];

  const parents = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const children = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  let fontSizeToNumber = data?.text;

  if (fontSizeToNumber !== undefined) {
    console.log("Here");
    fontSizeToNumber = fontSizeToNumber?.split("px");
  }

  return (
    <MainContainer>
      <InfoContainer>
        <SectionTitle>Text</SectionTitle>
        <AddTextButton />
      </InfoContainer>
      <motion.div
        style={{ width: "90%" }}
        variants={parents}
        initial="hidden"
        animate="show"
      >
        {data?.text && (
          <TextUlContainer>
            {variants.map((item, index) => {
              return (
                <CopyToClipboard
                  key={item.tag}
                  text={`
              font-size: ${
                item.tag === "h1"
                  ? `calc(${data.text} + 24px)`
                  : item.tag === "h2"
                  ? `calc(${data.text} + 18px)`
                  : item.tag === "h3"
                  ? `calc(${data.text} + 12px)`
                  : item.tag === "h4"
                  ? `calc(${data.text} + 6px)`
                  : item.tag === "p"
                  ? `calc(${data.text})`
                  : "24px"
              };
              `}
                >
                  <TextPreview
                    variants={children}
                    onClick={pasteText}
                    fontSize={data?.text}
                    type={item.tag}
                    onHoverStart={() => {
                      setOnHover(true);
                      setHoverId(index);
                    }}
                    onHoverEnd={() => {
                      setOnHover(true);
                      setHoverId();
                    }}
                    style={{
                      backgroundColor: hoverId === index ? "#efefef" : "white",
                    }}
                  >
                    Typography
                    <span>
                      {" "}
                      {item.tag}{" "}
                      {Number(fontSizeToNumber[0]) + item.value + "px"}
                    </span>
                  </TextPreview>
                </CopyToClipboard>
              );
            })}
          </TextUlContainer>
        )}
      </motion.div>
      {isPaste && <Popover type="copy" />}
    </MainContainer>
  );
}

export default TextOrganisms;
