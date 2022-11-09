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
import { motion } from "framer-motion";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { AddColorButton, Popover } from "../../components";
import { useRecoilState } from "recoil";
import { firebaseDataState } from "../../recoil-atom";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import { addBrightness, hexToRgb } from "../../utils";
function ColorOrganisms() {
  const [data, setData] = useRecoilState(firebaseDataState);
  const [onHover, setOnHover] = useState(false);
  const [hoverId, setHoverId] = useState();
  const [isSelect, setIsSelect] = useState();
  const [isDelete, setIsDelete] = useState(false);
  const [isPaste, setIsPaste] = useState(false);
  const variants = [1.6, 1.4, 1.2, 1, 0.8, 0.6, 0.4];
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

  const pasteColor = (idx) => {
    setIsSelect(idx);
    setIsPaste(true);
    setTimeout(() => {
      setIsPaste(false);
      setIsSelect();
    }, 2000);
  };

  return (
    <MainContainer>
      <InfoContainer>
        <SectionTitle>Colours</SectionTitle>
        <AddColorButton />
      </InfoContainer>
      <motion.div variants={parents} initial="hidden" animate="show">
        {data?.color?.map((item, index) => {
          return (
            <motion.div variants={children}>
              <PaletteUlContainer
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
                  const colorAddBrightness = addBrightness(item, value);
                  return (
                    <div>
                      <CopyToClipboard text={`${colorAddBrightness}`}>
                        <PaletteContainer>
                          <Palette
                            whileHover={{ scale: 1.2 }}
                            bgcolor={colorAddBrightness}
                            onClick={() => {
                              pasteColor();
                            }}
                          />
                          {colorAddBrightness}
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
            </motion.div>
          );
        })}
      </motion.div>
      {isDelete && <Popover type="delete" />}
      {isPaste && <Popover type="copy" />}
    </MainContainer>
  );
}

export default ColorOrganisms;
