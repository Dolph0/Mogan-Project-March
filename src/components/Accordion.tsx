"use client";

import { useRef, useState } from "react";

export default function Accordion({ title, children }: any) {
  const accordion = useRef<HTMLDivElement>(null);
  let [height, setHeight] = useState(0);
  const toggleAccordion = () => {
    setHeight((prev) =>
      prev === 0 ? (accordion.current ? accordion.current.scrollHeight : 0) : 0
    );
  };
  return (
    <>
      <div className="">
        <button
          onClick={toggleAccordion}
          type="button"
          className="w-full px-4 font-bold text-brand-teal py-3 items-center flex justify-between"
        >
          <span>{title}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className={height ? "rotate-180" : ""}
            viewBox="0 0 24 24"
          >
            <path d="M18 15L12 9 6 15"></path>
          </svg>
        </button>
        <div
          className="px-3   max-h-0 overflow-hidden  transition-all duration-300"
          ref={accordion}
          style={{ maxHeight: height }}
        >
          <p className="pb-3 text-dark text-sm">{children}</p>
        </div>
      </div>
    </>
  );
}
