import React, { useEffect, useState } from "react";
import { TimerContainer, TimerTitle, TimerBlock } from "../App.styles";

const Timer = ({ value, title }) => {
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    setAnimate((prev) => !prev);
  }, [value]);

  return (
    <TimerContainer>
      <TimerBlock animate={animate}>
        <span>
          {value?.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })}
        </span>
      </TimerBlock>
      <TimerTitle>{title}</TimerTitle>
    </TimerContainer>
  );
};

export default React.memo(Timer);
