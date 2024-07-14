"use client";

import React, { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: string;
}

const CountDown: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<{ [key: string]: number }>(
    calculateTimeLeft()
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents: JSX.Element[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <div
        key={interval}
        className="h-24 sm:h-28 lg:h-36 w-full font-roboto rounded-2xl bg-brand-green-100 text-white flex justify-center items-center flex-col"
      >
        <h4 className="text-3xl sm:text-5xl lg:text-7xl !leading-none font-bold text-center">
          {timeLeft[interval]}{" "}
        </h4>
        <p className=" capitalize text-center font-medium text-base sm:text-lg lg:text-2xl">
          {" "}
          {interval}
        </p>
      </div>
    );
  });

  return (
    <div className="grid grid-cols-4 gap-2">
      {timerComponents.length ? timerComponents : ""}
    </div>
  );
};

export default CountDown;
