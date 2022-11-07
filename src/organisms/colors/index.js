import React, { useEffect, useState } from "react";
import {
  CloseButton,
  InfoContainer,
  MainContainer,
  Palette,
  PaletteContainer,
  PaletteUlContainer,
  SectionTitle,
} from "./style";

import { AiOutlineMinusCircle } from "react-icons/ai";
import { AddButton, AddColorButton, Popover } from "../../components";
import { useRecoilState } from "recoil";
import { firebaseDataState } from "../../recoil-atom";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
function ColorOrganisms(props) {
  const [data, setData] = useRecoilState(firebaseDataState);
  const [onHover, setOnHover] = useState(false);
  const [hoverId, setHoverId] = useState();
  const [isDelete, setIsDelete] = useState(false);

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
              <PaletteContainer>
                <Palette light={1.6} bgColor={item} />
                brightness(1.6)
              </PaletteContainer>
              <PaletteContainer>
                <Palette light={1.4} bgColor={item} />
                brightness(1.4)
              </PaletteContainer>
              <PaletteContainer>
                <Palette light={1.2} bgColor={item} />
                brightness(1.2)
              </PaletteContainer>
              <PaletteContainer>
                <Palette light={1.0} bgColor={item} />
                {item}
              </PaletteContainer>
              <PaletteContainer>
                <Palette light={0.8} bgColor={item} />
                brightness(0.8)
              </PaletteContainer>
              <PaletteContainer>
                <Palette light={0.6} bgColor={item} />
                brightness(0.6)
              </PaletteContainer>
              <PaletteContainer>
                <Palette light={0.4} bgColor={item} />
                brightness(0.4)
              </PaletteContainer>
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
    </MainContainer>
  );
}

export default ColorOrganisms;
