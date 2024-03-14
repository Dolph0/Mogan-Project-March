"use client";

import { useRef, useState } from "react";

export default function Accordion({ title, children, rate }: any) {
  const accordion = useRef<HTMLDivElement>(null);
  let [height, setHeight] = useState(0);
  const toggleAccordion = () => {
    setHeight((prev) =>
      prev === 0 ? (accordion.current ? accordion.current.scrollHeight : 0) : 0
    );
  };
  return (
    <>
      <div className="flex flex-col md:flex-row md:gap-2">
        <div
          onClick={toggleAccordion}
          className="flex max-md:cursor-pointer px-6 max-md:py-4 justify-between md:justify-center w-full md:w-[200px] shrink-0 bg-brand-teal  items-center"
        >
          <p className="text-white text-xl font-bold">{title}</p>
          <span className="text-white md:hidden shrink-0">+</span>
        </div>
        <div
          ref={accordion}
          style={{ maxHeight: height }}
          className="w-full flex-col transition-all duration-300 md:flex-row flex md:gap-2 max-h-0 overflow-hidden md:!max-h-full"
        >
          <div className="w-full py-3 md:min-h-[67px] flex items-center px-6 xl:pl-20 xl:pr-6 bg-brand-gray-200">
            <p className="text-sm lg:text-xl text-brand-teal">{children}</p>
          </div>
          <div className="w-full md:w-[200px] max-md:py-3 lg:w-[245px] bg-brand-gray-200 px-6  flex items-center justify-end md:justify-center shrink-0 bg-">
            <p className="text-xl font-bold text-black">{rate}</p>
          </div>
        </div>
      </div>
    </>
  );
}
