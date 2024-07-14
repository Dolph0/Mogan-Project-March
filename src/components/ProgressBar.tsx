"use client";

import React, { useEffect, useRef, useState } from "react";

interface ProgressBarProps {
  percent: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percent }) => {
  const [isVisible, setIsVisible] = useState(false);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (progressBarRef.current) {
      observer.observe(progressBarRef.current);
    }

    return () => {
      if (progressBarRef.current) {
        observer.unobserve(progressBarRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full">
      <div
        className="w-full h-7 bg-gray-200   overflow-hidden"
        ref={progressBarRef}
      >
        <div
          className={`h-full relative bg-brand-green transition-width duration-1000 ease-out ${
            isVisible ? "w-full" : "w-0"
          }`}
          style={{
            width: `${isVisible ? percent : 0}%`,
            transition: "width 1s ease-out",
          }}
        >
          <div className="text-xs text-white px-3 font-semibold  absolute top-1/2 -translate-y-1/2 left-0">
            Selection procedure
          </div>
          <div className="text-right text-xs text-white  px-3 absolute right-0 top-1/2 -translate-y-1/2">
            {percent}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
