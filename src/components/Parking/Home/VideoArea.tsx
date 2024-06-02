"use client";
import MenuLink from "@/components/Shared/MenuLink";
import Image from "next/image";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

export default function VideoArea() {
  const [isOpen, setOpen] = useState(false);
  return (
    <section
      className="relative 
    min-h-[225px] sm:min-h-[450px] lg:min-h-[680px] xl:min-h-screen "
    >
      <MenuLink />

      <div className="relative aspect-video w-full min-w-full p-0 m-0 ">
        <iframe
          className="aspect-video w-screen "
          src="https://player.vimeo.com/video/904053646?autoplay=1&muted=1&controls=0&background=1&loop=1&byline=0&title=0"
        ></iframe>
        <div
          onClick={() => setOpen(true)}
          className="absolute top-0 left-0  w-full h-full cursor-pointer"
          style={{ background: "rgba(0, 0, 0, 0)" }}
        ></div>
      </div>

      <div className="absolute top-2 left-2 z-50 p-4 max-sm:top-5">
        <a href="/">
          <img
            src="/logo gestiona parking.png"
            alt="Icono"
            className="h-28 w-28 max-sm:h-16 max-sm:w-16"
          />{" "}
          {/* Ajusta la ruta de la imagen y el tamaño según tus necesidades */}
        </a>
      </div>

      <ModalVideo
        channel="vimeo"
        isOpen={isOpen}
        videoId={"904053646"}
        onClose={() => setOpen(false)}
      />
    </section>
  );
}
