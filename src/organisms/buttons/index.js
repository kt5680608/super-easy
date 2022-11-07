import { doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { AddButtonButton, Popover } from "../../components";
import { db } from "../../firebase-config";
import { firebaseDataState } from "../../recoil-atom";
import {
  ButtonUlContainer,
  CloseButton,
  CustomButton,
  CustomGhostButton,
  InfoContainer,
  MainContainer,
  SectionTitle,
} from "./style";

function ButtonOrganisms() {
  const [data, setData] = useRecoilState(firebaseDataState);
  const [onHover, setOnHover] = useState(false);
  const [hoverId, setHoverId] = useState();
  const [isDelete, setIsDelete] = useState(false);
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
  return (
    <MainContainer>
      {isDelete && <Popover type="delete" />}
      <InfoContainer>
        <SectionTitle>Buttons</SectionTitle>
        <AddButtonButton />
      </InfoContainer>

      {data?.button?.map((item, index) => {
        return (
          <ButtonUlContainer
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
            <CustomButton
              width={item.width}
              height={item.height}
              backgroundColor={item.backgroundColor}
              color={item.color}
              paddingTb={item.paddingTb}
              paddingLr={item.paddingLr}
              border={item.border}
              borderRadius={item.borderRadius}
              fontSize={item.fontSize}
              large
            >
              large
            </CustomButton>
            <CustomButton
              width={item.width}
              height={item.height}
              backgroundColor={item.backgroundColor}
              color={item.color}
              paddingTb={item.paddingTb}
              paddingLr={item.paddingLr}
              border={item.border}
              borderRadius={item.borderRadius}
              fontSize={item.fontSize}
            >
              solid
            </CustomButton>
            <CustomButton
              width={item.width}
              height={item.height}
              backgroundColor={item.backgroundColor}
              color={item.color}
              paddingTb={item.paddingTb}
              paddingLr={item.paddingLr}
              border={item.border}
              borderRadius={item.borderRadius}
              fontSize={item.fontSize}
              small
            >
              small
            </CustomButton>
            <CustomGhostButton
              width={item.width}
              height={item.height}
              backgroundColor={item.backgroundColor}
              color={item.color}
              paddingTb={item.paddingTb}
              paddingLr={item.paddingLr}
              border={item.border}
              borderRadius={item.borderRadius}
              fontSize={item.fontSize}
            >
              ghost
            </CustomGhostButton>
            <CustomButton
              width={item.width}
              height={item.height}
              backgroundColor={item.backgroundColor}
              color={item.color}
              paddingTb={item.paddingTb}
              paddingLr={item.paddingLr}
              border={item.border}
              borderRadius={item.borderRadius}
              fontSize={item.fontSize}
              hover
            >
              hover
            </CustomButton>
            <CustomButton
              width={item.width}
              height={item.height}
              backgroundColor={item.backgroundColor}
              color={item.color}
              paddingTb={item.paddingTb}
              paddingLr={item.paddingLr}
              border={item.border}
              borderRadius={item.borderRadius}
              fontSize={item.fontSize}
              active
            >
              active
            </CustomButton>
            <CustomButton
              width={item.width}
              height={item.height}
              backgroundColor={item.backgroundColor}
              color={item.color}
              paddingTb={item.paddingTb}
              paddingLr={item.paddingLr}
              border={item.border}
              borderRadius={item.borderRadius}
              fontSize={item.fontSize}
              disable
            >
              disabled
            </CustomButton>
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
    </MainContainer>
  );
}

export default ButtonOrganisms;
