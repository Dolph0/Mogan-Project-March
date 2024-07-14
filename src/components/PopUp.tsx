"use client";

import { useEffect, useState } from "react";

export default function PopUp({ classes, children }: any) {
  const [showPopup, setShowPopup] = useState(true);
  const [countdown, setCountdown] = useState(20);

  useEffect(() => {
    if (showPopup) {
      const timer = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown <= 1) {
            setShowPopup(false);
            clearInterval(timer);
            return 15;
          }
          return prevCountdown - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [showPopup]);

  const handleClose = () => {
    setShowPopup(false);
    setCountdown(20);
  };
  return (
    <>
      {showPopup && (
        <div className="">
          <div className="bg-dark/60 w-full h-full inset-0 fixed z-[60]"></div>
          <div className={`${classes} fixed   w-[400px] max-w-full z-[999]`}>
            <div className="bg-white rounded-md relative px-14 py-4">
              <button
                type="button"
                onClick={handleClose}
                className="absolute right-4 top-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="feather feather-x"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 6L6 18"></path>
                  <path d="M6 6L18 18"></path>
                </svg>
              </button>
              <div className="max-h-[470px] overflow-y-auto hide-scrollbar">
                {children}
                <div className="">
                  <p className="text-dark text-center text-base">
                    Esto se cerrará en {countdown} segundos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
