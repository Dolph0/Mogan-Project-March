import React, { ReactNode } from "react";

interface MyHeading2Props {
  title: ReactNode;
  paragraph: ReactNode;
}

const MyHeading2: React.FC<MyHeading2Props> = ({ title, paragraph }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-blue-900 text-center sm:text-4xl mt-12">
        {title}
      </h1>
      <p className=" text-blue-900 font-normal text-sm font-sans text-center">
        {paragraph}
      </p>
    </div>
  );
};

export default MyHeading2;
