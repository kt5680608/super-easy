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
  Palette,
} from "./style";
import { useRecoilState } from "recoil";
import { firebaseDataState } from "../../recoil-atom";

function AddColorButton() {
  const [paletteColor, setPaletteColor] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  const [data, setData] = useRecoilState(firebaseDataState);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const regex = /^#(?:[0-9a-f]{6}){1,2}$/i;

  const handleAddColor = async (e) => {
    e.preventDefault();

    try {
      if (regex.test(paletteColor)) {
        if (data?.color === undefined) {
          setData({ color: [paletteColor], button: data?.button });
          await setDoc(doc(db, "users", user.uid), {
            color: [paletteColor],
            button: data?.button,
            text: data?.text,
          });
        } else {
          if (data.color.includes(paletteColor)) {
            setErrorMsg("Same color exists");
            console.log(data.color.includes(paletteColor));
          } else {
            await updateDoc(doc(db, "users", user.uid), {
              color: [...data.color, paletteColor],
            });
            setData({
              color: [...data.color, paletteColor],
              button: data?.button,
              text: data?.text,
            });
            document?.getElementById("modal__add__color")?.click();
          }
        }
      } else {
        setError(true);
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <Modal id="modal__add__color" modalCloseButton={false} display={false}>
        <ModalBodyContainer>
          <Palette bgcolor={paletteColor} />
          <ModalInputContainer>
            Colour
            <ModalInput
              placeholder="#000000"
              onChange={(e) => setPaletteColor(e.target.value)}
            />
          </ModalInputContainer>
          {error && <span>not valid color code</span>}
          {errorMsg !== "" && <span>{errorMsg}</span>}
          <ModalButton type="submit" onClick={handleAddColor}>
            submit
          </ModalButton>
        </ModalBodyContainer>
      </Modal>
      <Button
        onClick={() => {
          document?.getElementById("modal__add__color")?.click();
          setError(true);
          setError(false);
          setErrorMsg("");
        }}
      >
        <MdAdd color="white" size={40} />
      </Button>
    </>
  );
}

export default AddColorButton;
