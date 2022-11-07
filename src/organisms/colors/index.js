import React, { Children, useEffect, useState } from "react";
import {
  CloseButton,
  InfoContainer,
  MainContainer,
  Palette,
  PaletteContainer,
  PaletteUlContainer,
  SectionTitle,
} from "./style";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { AddColorButton, Popover } from "../../components";
import { useRecoilState } from "recoil";
import { firebaseDataState } from "../../recoil-atom";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
function ColorOrganisms(props) {
  const [data, setData] = useRecoilState(firebaseDataState);
  const [onHover, setOnHover] = useState(false);
  const [hoverId, setHoverId] = useState();
  const [isDelete, setIsDelete] = useState(false);
  const [isPaste, setIsPaste] = useState(false);
  const variants = [1.6, 1.4, 1.2, 1, 0.8, 0.6, 0.4];

  const deleteColor = async (index) => {
    setIsDelete(true);
    const user = JSON.parse(localStorage.getItem("user"));
    const deleteExample = data.color.filter((item) => {
      return item !== index;
    });
    await updateDoc(doc(db, "users", user.uid), {
      color: deleteExample,
    });
    setData({ color: deleteExample, button: data.button, text: data.text });
    setTimeout(() => {
      setIsDelete(false);
    }, 2000);
  };

  const pasteColor = () => {
    setIsPaste(true);
    setTimeout(() => {
      setIsPaste(false);
    }, 2000);
  };

  return (
    <MainContainer>
      <InfoContainer>
        <SectionTitle>Colours</SectionTitle>
        <AddColorButton />
      </InfoContainer>
      {data?.color?.map((item, index) => {
        return (
          <>
            <PaletteUlContainer
              key={item}
              whileHover={{ y: -4 }}
              style={{
                backgroundColor: hoverId === index ? "#efefef" : "white",
              }}
              onHoverStart={() => {
                setOnHover(true);
                setHoverId(index);
              }}
              onHoverEnd={() => {
                setOnHover(true);
                setHoverId();
              }}
            >
              {variants.map((value) => {
                return (
                  <div>
                    <CopyToClipboard
                      text={`color: ${item}; filter: brightness(${value});`}
                    >
                      <PaletteContainer>
                        <Palette
                          light={value}
                          bgColor={item}
                          onClick={() => {
                            pasteColor();
                          }}
                        />
                        {value === 1 ? item : `brightness(${value})`}
                      </PaletteContainer>
                    </CopyToClipboard>
                  </div>
                );
              })}

              {onHover && index === hoverId && (
                <CloseButton
                  whileHover={{ scale: 1.2 }}
                  onClick={() => deleteColor(item)}
                >
                  <AiOutlineMinusCircle color="red" size={20} />
                </CloseButton>
              )}
            </PaletteUlContainer>
          </>
        );
      })}
      {isDelete && <Popover type="delete" />}
      {isPaste && <Popover type="copy" />}
    </MainContainer>
  );
}

export default ColorOrganisms;
