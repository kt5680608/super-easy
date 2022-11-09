import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { useRecoilState } from "recoil";
import { Navbar } from "../../components";
import { db } from "../../firebase-config";
import { ColorOrganism, ButtonOrganism, TextOrganism } from "../../organisms";
import { firebaseDataState } from "../../recoil-atom";
import { MainContainer, SpinnerContainer } from "./style";
import { LoadingSpinner } from "hoondesign";

function MainPage() {
  const [data, setData] = useRecoilState(firebaseDataState);
  const [loading, setLoading] = useState(true);

  const getColorData = async () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user?.uid !== null) {
      const data = await (await getDoc(doc(db, "users", user?.uid))).data();
      await setData(data);
    }
    setTimeout(() => {
      setLoading(false);
    }, 800);
  };

  useEffect(() => {
    getColorData();
  }, []);
  return (
    <MainContainer>
      <Navbar />
      {loading ? (
        <SpinnerContainer>
          <LoadingSpinner />
        </SpinnerContainer>
      ) : (
        <>
          <ColorOrganism />
          <ButtonOrganism />
          <TextOrganism />
        </>
      )}
    </MainContainer>
  );
}

export default MainPage;
