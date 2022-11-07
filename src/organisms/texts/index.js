import React from "react";
import { AddTextButton } from "../../components";
import { useRecoilState } from "recoil";
import {
  InfoContainer,
  MainContainer,
  SectionTitle,
  TextPreview,
  TextUlContainer,
} from "./style";
import { firebaseDataState } from "../../recoil-atom";

function TextOrganisms() {
  const [data, setData] = useRecoilState(firebaseDataState);
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
          <TextPreview fontSize={data?.text} h1>
            h1: Typography
            <span> {Number(fontSizeToNumber[0]) + 24 + "px"}</span>
          </TextPreview>
          <TextPreview fontSize={data?.text} h2>
            h2: Typography
            <span> {Number(fontSizeToNumber[0]) + 18 + "px"}</span>
          </TextPreview>
          <TextPreview fontSize={data?.text} h3>
            h3: Typography
            <span> {Number(fontSizeToNumber[0]) + 12 + "px"}</span>
          </TextPreview>
          <TextPreview fontSize={data?.text} h4>
            h4: Typography<span> {Number(fontSizeToNumber[0]) + 6 + "px"}</span>
          </TextPreview>
          <TextPreview fontSize={data?.text} p>
            p: Typography<span> {Number(fontSizeToNumber[0]) + "px"}</span>
          </TextPreview>
        </TextUlContainer>
      )}
    </MainContainer>
  );
}

export default TextOrganisms;
