import React, { useEffect } from "react";

import { MainContainer } from "./style";

import { useAnimationControls } from "framer-motion";

function Popover(props) {
  const animation = useAnimationControls();
  const sequence = async () => {
    await animation.start({
      opacity: 1,
      y: 0,
    });
    await animation.start({
      y: 40,
      opacity: 0,
      transition: {
        delay: 1.6,
      },
    });
  };
  useEffect(() => {
    sequence();
  }, []);
  return (
    <MainContainer initial={{ opacity: 1, y: 40 }} animate={animation}>
      {props.type ? `${props.type} complete!` : "complete!"}
    </MainContainer>
  );
}

export default Popover;
