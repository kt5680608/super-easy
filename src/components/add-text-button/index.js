import React, { useState } from "react";

import { Modal } from "hoondesign";

import { MdAdd } from "react-icons/md";

import { auth, db } from "../../firebase-config";

import { doc, updateDoc, setDoc } from "firebase/firestore";

import {
  Button,
  ModalBodyContainer,
  ModalButton,
  ModalInput,
  ModalInputContainer,
  TextPreview,
} from "./style";
import { useRecoilState } from "recoil";
import { firebaseDataState } from "../../recoil-atom";

function AddTextButton() {
  const [defaultFontSize, setDefaultFontSize] = useState("16px");
  const [paletteColor, setPaletteColor] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  const [data, setData] = useRecoilState(firebaseDataState);
  const [error, setError] = useState(false);
  const regex = /^#(?:[0-9a-f]{3}){1,2}$/i;

  const handleAddColor = async (e) => {
    e.preventDefault();
    try {
      if (data?.text === null) {
        setData({
          color: data?.color || [],
          button: data?.button || [],
          text: defaultFontSize,
        });
        await setDoc(doc(db, "users", user.uid), {
          color: data?.color || [],
          button: data?.button || [],
          text: defaultFontSize,
        });
      } else {
        await updateDoc(doc(db, "users", user.uid), {
          text: defaultFontSize,
        });
        setData({
          color: data?.color || [],
          button: data?.button || [],
          text: defaultFontSize,
        });
      }
      setError(false);
      setDefaultFontSize("16px");
      document?.getElementById("modal__add__text")?.click();
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <Modal id="modal__add__text" modalCloseButton={false} display={false}>
        <ModalBodyContainer>
          <TextPreview h1 fontSize={defaultFontSize}>
            Typography
          </TextPreview>
          <TextPreview h2 fontSize={defaultFontSize}>
            Typography
          </TextPreview>
          <TextPreview h3 fontSize={defaultFontSize}>
            Typography
          </TextPreview>
          <TextPreview h4 fontSize={defaultFontSize}>
            Typography
          </TextPreview>
          <TextPreview p fontSize={defaultFontSize}>
            Typography
          </TextPreview>
          <ModalInputContainer>
            Text
            <ModalInput
              placeholder="16px"
              onChange={(e) => setDefaultFontSize(e.target.value)}
              value={defaultFontSize}
            />
          </ModalInputContainer>
          {error && <span>not valid font size</span>}
          <ModalButton type="submit" onClick={handleAddColor}>
            submit
          </ModalButton>
        </ModalBodyContainer>
      </Modal>
      <Button
        onClick={() => {
          document?.getElementById("modal__add__text")?.click();
        }}
      >
        <MdAdd color="white" size={40} />
      </Button>
    </>
  );
}

export default AddTextButton;
