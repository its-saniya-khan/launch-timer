import React, { useEffect, useState } from "react";
import TimerBlock from "./TimerBlock"
import {TimerWrapper} from "../App.styles"

const LAUNCH_DATE = new Date("2022-06-18T17:31:00");
const TIMER_TITLES = ["days","hours","minutes","seconds"]

export default function LaunchTimer({onTimerEnd}) {
  const [days, setDays] = useState(null);
  const [hours, setHours] = useState(null);
  const [minutes, setMinutes] = useState(null);
  const [seconds, setSeconds] = useState(null);

  useEffect(() => {
    const launchDateTime = LAUNCH_DATE.getTime();

    const interval = setInterval(() => {
      const currentDate = Date.now();

      //Time difference in seconds
      const diff = (launchDateTime - currentDate) / 1000;
      if (diff <= 0) {
        clearInterval(interval);
        onTimerEnd();
        return;
      }
      const seconds = Math.floor(diff % 60);
      const minutes = Math.floor((diff / 60) % 60);
      const hours = Math.floor((diff / (60 * 60)) % 24);
      const days = Math.floor(diff / (60 * 60 * 24));

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }, 1000);
  });

  return (
    <TimerWrapper>
      <TimerBlock key={0} value={days} title={TIMER_TITLES[0]} />
      <TimerBlock key={1} value={hours} title={TIMER_TITLES[1]} />
      <TimerBlock key={2} value={minutes} title={TIMER_TITLES[2]} />
      <TimerBlock key={3} value={seconds} title={TIMER_TITLES[3]} />
    </TimerWrapper>
  );
}
