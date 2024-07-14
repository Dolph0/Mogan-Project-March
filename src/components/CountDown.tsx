"use client";

import React, { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: string; // Target date as a string
}

const CountDown: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Effect to update the countdown every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clean up the timer when the component unmounts
    return () => clearInterval(timer);
  }, [targetDate]);
  // Rendering the countdown
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-4 gap-2">
        <div className="h-24 sm:h-28 w-full font-roboto rounded-2xl bg-brand-blue text-white flex justify-center items-center flex-col">
          <h4 className="text-3xl sm:text-4xl lg:text-5xl !leading-none font-bold text-center">
            {timeLeft.days}
          </h4>
          <p className="capitalize text-center font-medium text-base sm:text-lg lg:text-xl">
            Dias
          </p>
        </div>
        <div className="h-24 sm:h-28 w-full font-roboto rounded-2xl bg-brand-blue text-white flex justify-center items-center flex-col">
          <h4 className="text-3xl sm:text-4xl lg:text-5xl !leading-none font-bold text-center">
            {timeLeft.hours}
          </h4>
          <p className="capitalize text-center font-medium text-base sm:text-lg lg:text-xl">
            Horas
          </p>
        </div>
        <div className="h-24 sm:h-28 w-full font-roboto rounded-2xl bg-brand-blue text-white flex justify-center items-center flex-col">
          <h4 className="text-3xl sm:text-4xl lg:text-5xl !leading-none font-bold text-center">
            {timeLeft.minutes}
          </h4>
          <p className="capitalize text-center font-medium text-base sm:text-lg lg:text-xl">
            Minutos
          </p>
        </div>
        <div className="h-24 sm:h-28 w-full font-roboto rounded-2xl bg-brand-blue text-white flex justify-center items-center flex-col">
          <h4 className="text-3xl sm:text-4xl lg:text-5xl !leading-none font-bold text-center">
            {timeLeft.seconds}
          </h4>
          <p className="capitalize text-center font-medium text-base sm:text-lg lg:text-xl">
            segundos
          </p>
        </div>
      </div>
      {timeLeft.days === 0 &&
        timeLeft.hours === 0 &&
        timeLeft.minutes === 0 && (
          <div className="text-black text-left  text-base">
            El plazo ha sido cerrado, ya no se admitirán mas solicitudes. Muchas
            gracias
          </div>
        )}
    </div>
  );
};

export default CountDown;
