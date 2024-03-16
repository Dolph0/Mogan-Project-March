import React from "react";
import Caraousal from "@/components/HomePage/Caraousal";
import MyHeading2 from "@/components/HomePage/MyHeading2";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <div className="container mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <Caraousal />
        <MyHeading2
          title={<span>Pagos</span>}
          paragraph={<span>Impuestos, tasas y multas.</span>}
        />

        <h1>new stuff here </h1>
      </div>
    </>
  );
};

export default page;
