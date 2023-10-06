import React, { useState, useEffect } from "react";
import { Text } from "@/components/atoms/Text/Text.styles";

interface TimerProps {
  resetTimer: boolean;
}

const TimerComponent = ({ resetTimer }: TimerProps) => {
  const [seconds, setSeconds] = useState(180);
  const [isActive, setIsActive] = useState(true); // 타이머가 끝났는지

  useEffect(() => {
    if (resetTimer) {
      setSeconds(180);
      setIsActive(true);
    }
  }, [resetTimer]);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      setIsActive(false);
    }

    // useEffect 내에서 setInterval을 사용할 때, 컴포넌트가 unmount될 때 clearInterval을 호출하는 것이 좋다
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, seconds]);

  const formatTime = () => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  return (
    <Text size="small1" color="grey2" style={{ width: "40px" }}>
      {formatTime()}
    </Text>
  );
};

export default TimerComponent;
