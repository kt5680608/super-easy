import { doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { AddButtonButton, Popover } from "../../components";
import { db } from "../../firebase-config";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { firebaseDataState } from "../../recoil-atom";
import { motion } from "framer-motion";
import {
  ButtonUlContainer,
  CloseButton,
  CustomButton,
  InfoContainer,
  MainContainer,
  SectionTitle,
} from "./style";
import { addBrightness } from "../../utils";

function ButtonOrganisms() {
  const [data, setData] = useRecoilState(firebaseDataState);
  const [onHover, setOnHover] = useState(false);
  const [hoverId, setHoverId] = useState();
  const [isDelete, setIsDelete] = useState(false);
  const [isPaste, setIsPaste] = useState(false);
  const variants = [
    "large",
    "solid",
    "small",
    "ghost",
    "hover",
    "active",
    "disabled",
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

  const deleteButton = async (index) => {
    setIsDelete(true);
    const user = JSON.parse(localStorage.getItem("user"));
    const deleteExample = data.button.filter((item) => {
      return item !== index;
    });

    await updateDoc(doc(db, "users", user.uid), {
      button: deleteExample,
    });
    setData({ button: deleteExample, color: data?.color, text: data?.text });
    setTimeout(() => {
      setIsDelete(false);
    }, 2000);
  };

  const pasteButton = () => {
    setIsPaste(true);
    setTimeout(() => {
      setIsPaste(false);
    }, 2000);
  };
  return (
    <MainContainer>
      {isDelete && <Popover type="delete" />}
      {isPaste && <Popover type="copy" />}
      <InfoContainer>
        <SectionTitle>Buttons</SectionTitle>
        <AddButtonButton />
      </InfoContainer>
      <motion.div variants={parents} initial="hidden" animate="show">
        {data?.button?.map((item, index) => {
          return (
            <ButtonUlContainer
              variants={children}
              onHoverStart={() => {
                setOnHover(true);
                setHoverId(index);
              }}
              onHoverEnd={() => {
                setOnHover(true);
                setHoverId();
              }}
              whileHover={{ y: -4 }}
              style={{
                backgroundColor: hoverId === index ? "#efefef" : "white",
              }}
            >
              {variants.map((value) => {
                const brightnessType =
                  value === "active" || value === "hover" ? 1.4 : 1;
                const colorAddBrightness = addBrightness(
                  item.backgroundColor,
                  brightnessType
                );

                return (
                  <div>
                    <CopyToClipboard
                      text={`
                background-color: ${
                  value === "ghost" ? "transparent" : colorAddBrightness
                };
                color: ${value === "ghost" ? item.backgroundColor : item.color};
                padding-top:${
                  value === "large"
                    ? `calc(${item.paddingTb} + 3px)`
                    : value === "small"
                    ? `calc(${item.paddingTb} - 3px)`
                    : item.paddingTb
                };
                padding-bottom:${
                  value === "large"
                    ? `calc(${item.paddingTb} + 3px)`
                    : value === "small"
                    ? `calc(${item.paddingTb} - 3px)`
                    : item.paddingTb
                };
                padding-left:${
                  value === "large"
                    ? `calc(${item.paddingLr} + 12px)`
                    : value === "small"
                    ? `calc(${item.paddingLr} - 6px)`
                    : item.paddingLr
                };
                padding-right:${
                  value === "large"
                    ? `calc(${item.paddingLr} + 12px)`
                    : value === "small"
                    ? `calc(${item.paddingLr} - 6px)`
                    : item.paddingLr
                };
                border: ${
                  value === "ghost"
                    ? `1px solid ${item.backgroundColor}`
                    : item.border
                };
                border-radius: ${item.borderRadius};
                font-size: ${item.fontSize};
                opacity: ${value === "disabled" ? 0.7 : 1};
                `}
                    >
                      <CustomButton
                        onClick={pasteButton}
                        backgroundColor={colorAddBrightness}
                        color={item.color}
                        paddingTb={item.paddingTb}
                        paddingLr={item.paddingLr}
                        border={item.border}
                        borderRadius={item.borderRadius}
                        fontSize={item.fontSize}
                        variants={value}
                      >
                        {value}
                      </CustomButton>
                    </CopyToClipboard>
                  </div>
                );
              })}

              {onHover && index === hoverId && (
                <CloseButton
                  whileHover={{ scale: 1.2 }}
                  onClick={() => deleteButton(item)}
                >
                  <AiOutlineMinusCircle color="red" size={20} />
                </CloseButton>
              )}
            </ButtonUlContainer>
          );
        })}
      </motion.div>
    </MainContainer>
  );
}

export default ButtonOrganisms;
