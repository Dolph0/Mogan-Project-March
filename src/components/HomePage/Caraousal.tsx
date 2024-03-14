"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

type Props = {};

const Caraousal = (props: Props) => {
  return (
    <Carousel
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      showStatus={false}
      interval={4000}
      className="mx-auto lg:divide-y lg:divide-gray-200 mt-2"
    >
      <div>
        <img src="/BANNER WEB GESTIONA MOGAN .png" />
      </div>
      <div>
        <img src="/Banner 2.png" />
      </div>
      <div>
        <img src="/Banner 3.jpeg" />
      </div>
      <div>
        <img src="/Banner 1.jpeg" />
      </div>
    </Carousel>
  );
};

export default Caraousal;
