import { atom } from "recoil";

export const firebaseDataState = atom({
  key: "firebaseDataState",
  default: { button: [], color: [], text: "16px" },
});
