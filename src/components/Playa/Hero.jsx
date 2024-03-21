// "use client";
// import Image from "next/image";
// import { useState } from "react";
// import ModalVideo from "react-modal-video";
// import "react-modal-video/scss/modal-video.scss";

// export default function Hero() {
//   const [isOpen, setOpen] = useState(false);
//   return (
//     <section className="relative min-h-[225px] sm:min-h-[450px] lg:min-h-[680px] xl:min-h-screen flex justify-center items-center">
//       <Image
//         alt="Playa"
//         src={"/playa/hero-playa.png"}
//         layout="cover"
//         className="hidden sm:block object-cover w-full "
//         fill
//       />
//       <Image
//         alt="Playa"
//         src={"/playa/hero-playa-mobile.png"}
//         layout="cover"
//         className="block sm:hidden object-cover w-full h-full"
//         fill
//       />
//       <div className="relative">
//         <button onClick={() => setOpen(true)}>
//           <Image
//             alt="play"
//             src={"/icons/play.svg"}
//             className="  h-[196px] w-[196px] sm:h-[305px] sm:w-[305px]"
//             width={305}
//             height={305}
//           />
//         </button>
//       </div>

//       <ModalVideo
//         channel="vimeo"
//         isOpen={isOpen}
//         videoId={"904049593"}
//         onClose={() => setOpen(false)}
//       />
//     </section>
//   );
// }


"use client";
import Image from "next/image";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

export default function Hero() {
  const [isOpen, setOpen] = useState(false);
  return (
    <section className="relative min-h-[225px] sm:min-h-[450px] lg:min-h-[680px] xl:min-h-screen  ">
      <iframe
        className="aspect-video w-screen "
        src="https://player.vimeo.com/video/925183921?autoplay=1&muted=1&controls=0&background=1&loop=1&byline=0&title=0"
      ></iframe>
      <button onClick={() => setOpen(true)}>
        <Image
          alt="play"
          src={"/icons/play.svg"}
          className="w-10 md:w-[95px] xl:w-auto h-10 md:h-[95px]  absolute left-10 top-10 opacity-20"
          // className="w-20 md:w-[190px] xl:w-auto h-20 md:h-[190px] xl:h-auto absolute left-1/2 -translate-x-1/2 top-[40%] -translate-y-1/2 "
          width={250}
          height={250}
        />
      </button>

      <ModalVideo
        channel="vimeo"
        isOpen={isOpen}
        videoId={"925183921"}
        onClose={() => setOpen(false)}
      />
    </section>
  );
}