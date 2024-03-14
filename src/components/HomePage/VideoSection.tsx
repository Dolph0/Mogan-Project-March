import React, { Fragment } from "react";

type Props = {};

const VideoSection = (props: Props) => {
  return (
    <Fragment>
      <div className="flex flex-col md:flex-row justify-center px-4 items-center rounded-[37px] bg-[#004870] mt-12 mb-12 min-h-[331px]">
        <div className="p-10">
          <div className="flex flex-col justify-start text-left">
            <h1 className="font-sans font-extrabold text-white text-3xl text-left">
              El momento es ahora
            </h1>
            <p className="font-sans font-normal text-white text-base text-left break all max-w-[348px]">
              ¡Cuando el tiempo juega a tu favor! Mandé un audio desde el
              parking y, ¡Sorpresa! Sólo tardé 30 segundos en llegar a la playa.
            </p>
          </div>
        </div>
        <div>
          <iframe
            src="https://player.vimeo.com/video/898418686?h=cb3276e934"
            allow="autoplay; fullscreen; picture-in-picture"
            className="lg:h-[218px] lg:w-[383px] m-8 rounded-[37px]"
          ></iframe>
        </div>
      </div>
    </Fragment>
  );
};

export default VideoSection;
