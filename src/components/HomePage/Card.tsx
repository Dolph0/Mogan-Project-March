import React from "react";

type Props = {
  title: string;
  subtitle: string;
  imgSrc: string;
};

const Card = (props: Props) => {
  return (
    <div className="min-h-60 w-72 bg-[#004870] rounded-2xl flex flex-col justify-between mt-6">
      <div className="">
        <img
          src={props.imgSrc}
          className="pt-3 h-36  w-full object-cover"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-1 text-center pb-10">
        <h1 className=" text-white font-extrabold text-xl font-sans mx-3 mt-3">
          {props.title}
        </h1>
        <p className=" text-white font-normal text-sm font-sans text-center mx-3 mt-3">
          {props.subtitle}
        </p>
      </div>
    </div>
  );
};

export default Card;
