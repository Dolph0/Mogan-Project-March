"use client";
import Image from "next/image";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

export default function Hero() {
  const [isOpen, setOpen] = useState(false);
  return (
    <section className="relative min-h-[225px] sm:min-h-[450px] lg:min-h-[680px] xl:min-h-screen flex justify-center items-center">
      <Image
        alt="Playa"
        src={"/playa/hero-playa.png"}
        layout="cover"
        className="hidden sm:block object-cover w-full "
        fill
      />
      <Image
        alt="Playa"
        src={"/playa/hero-playa-mobile.png"}
        layout="cover"
        className="block sm:hidden object-cover w-full h-full"
        fill
      />
      <div className="relative">
        <button onClick={() => setOpen(true)}>
          <Image
            alt="play"
            src={"/icons/play.svg"}
            className="  h-[196px] w-[196px] sm:h-[305px] sm:w-[305px]"
            width={305}
            height={305}
          />
        </button>
      </div>

      <ModalVideo
        channel="vimeo"
        isOpen={isOpen}
        videoId={"904049593"}
        onClose={() => setOpen(false)}
      />
    </section>
  );
}
