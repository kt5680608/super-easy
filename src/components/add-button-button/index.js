import React, { useState } from "react";

import { Modal } from "hoondesign";

import { MdAdd } from "react-icons/md";

import { auth, db } from "../../firebase-config";

import { setDoc, doc, updateDoc } from "firebase/firestore";

import {
  Button,
  ExButton,
  ModalBodyContainer,
  ModalButton,
  ModalInput,
  ModalInputContainer,
  Palette,
} from "./style";
import { useRecoilState } from "recoil";
import { firebaseDataState } from "../../recoil-atom";
import { AiOutlineConsoleSql } from "react-icons/ai";

function AddButtonButton() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [data, setData] = useRecoilState(firebaseDataState);

  const [borderRadius, setBorderRadius] = useState("24px");
  const [border, setBorder] = useState("none");
  const [backgroundColor, setBackgroundColor] = useState("#000000");

  const [color, setColor] = useState("#ffffff");
  const [paddingTb, setPaddingTb] = useState("12px");
  const [paddingLr, setPaddingLr] = useState("24px");
  const [fontSize, setFontSize] = useState("16px");

  const initializeProps = () => {
    setBorderRadius("24px");
    setBorder("none");
    setBackgroundColor("#000000");
    setColor("#ffffff");
    setPaddingTb("12px");
    setPaddingLr("24px");
    setFontSize("16px");
  };

  const handleAddButton = async (e) => {
    e.preventDefault();
    try {
      if (data?.button === null) {
        setData({
          color: data?.color || null,
          button: [
            {
              backgroundColor: backgroundColor,
              color: color,
              border: border,
              borderRadius: borderRadius,
              paddingTb: paddingTb,
              paddingLr: paddingLr,
              fontSize: fontSize,
            },
          ],
          text: data?.text || null,
        });
        await setDoc(doc(db, "users", user.uid), {
          color: data?.color || null,
          button: [
            {
              backgroundColor: backgroundColor,
              color: color,
              border: border,
              borderRadius: borderRadius,
              paddingTb: paddingTb,
              paddingLr: paddingLr,
              fontSize: fontSize,
            },
          ],
          text: data?.text || null,
        });
        document?.getElementById("modal__add__button")?.click();
      } else {
        setData({
          color: data?.color || null,
          button: [
            ...data?.button,
            {
              backgroundColor: backgroundColor,
              color: color,
              border: border,
              borderRadius: borderRadius,
              paddingTb: paddingTb,
              paddingLr: paddingLr,
              fontSize: fontSize,
            },
          ],
          text: data?.text || null,
        });
        await updateDoc(doc(db, "users", user.uid), {
          button: [
            ...data.button,
            {
              backgroundColor: backgroundColor,
              color: color,
              border: border,
              borderRadius: borderRadius,
              paddingTb: paddingTb,
              paddingLr: paddingLr,
              fontSize: fontSize,
            },
          ],
        });
      }
      document?.getElementById("modal__add__button")?.click();
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <Modal id="modal__add__button" modalCloseButton={false} display={false}>
        <ModalBodyContainer>
          <ExButton
            backgroundColor={backgroundColor}
            color={color}
            borderRadius={borderRadius}
            border={border}
            paddingTb={paddingTb}
            paddingLr={paddingLr}
            fontSize={fontSize}
          >
            button
          </ExButton>
          <ModalInputContainer>
            <div>
              background-color:
              <ModalInput
                value={backgroundColor}
                placeholder="#000000"
                onChange={(e) => setBackgroundColor(e.target.value)}
              />
            </div>
            <div>
              color:
              <ModalInput
                value={color}
                placeholder="#FFFFFF"
                onChange={(e) => setColor(e.target.value)}
              />
            </div>

            <div>
              padding-tb:
              <ModalInput
                value={paddingTb}
                placeholder="24px"
                onChange={(e) => setPaddingTb(e.target.value)}
              />
            </div>
            <div>
              padding-lr:
              <ModalInput
                value={paddingLr}
                placeholder="24px"
                onChange={(e) => setPaddingLr(e.target.value)}
              />
            </div>
            <div>
              font-size:
              <ModalInput
                value={fontSize}
                placeholder="16px"
                onChange={(e) => setFontSize(e.target.value)}
              />
            </div>
            <div>
              border:
              <ModalInput
                value={border}
                placeholder="none"
                onChange={(e) => setBorder(e.target.value)}
              />
            </div>
            <div>
              border-radius:
              <ModalInput
                value={borderRadius}
                placeholder="24px"
                onChange={(e) => setBorderRadius(e.target.value)}
              />
            </div>
          </ModalInputContainer>
          <ModalButton type="submit" onClick={handleAddButton}>
            submit
          </ModalButton>
        </ModalBodyContainer>
      </Modal>
      <Button
        onClick={() => {
          document?.getElementById("modal__add__button")?.click();
          initializeProps();
        }}
      >
        <MdAdd color="white" size={40} />
      </Button>
    </>
  );
}

export default AddButtonButton;
