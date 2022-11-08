import React, { useState } from "react";
import { AddTextButton, Popover } from "../../components";
import { useRecoilState } from "recoil";
import {
  InfoContainer,
  MainContainer,
  SectionTitle,
  TextPreview,
  TextUlContainer,
} from "./style";
import { firebaseDataState } from "../../recoil-atom";
import CopyToClipboard from "react-copy-to-clipboard";

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
  let fontSizeToNumber = data?.text;
  fontSizeToNumber = fontSizeToNumber.split("px");

  return (
    <MainContainer>
      <InfoContainer>
        <SectionTitle>Text</SectionTitle>
        <AddTextButton />
      </InfoContainer>
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
                    {item.tag} {Number(fontSizeToNumber[0]) + item.value + "px"}
                  </span>
                </TextPreview>
              </CopyToClipboard>
            );
          })}
        </TextUlContainer>
      )}
      {isPaste && <Popover type="copy" />}
    </MainContainer>
  );
}

export default TextOrganisms;
