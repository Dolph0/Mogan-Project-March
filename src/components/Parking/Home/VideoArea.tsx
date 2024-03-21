// "use client";
// import MenuLink from "@/components/Shared/MenuLink";
// import videoImg from "@/public/images/parking/home/parking-aparcamiento.png";
// import Image from "next/image";
// import { useState } from "react";

// export default function VideoArea() {
//   let [isVideo, setIsVideo] = useState(false);
//   return (
//     <section className="relative  xl:min-h-screen">
//       <MenuLink />
//       {isVideo ? (
//         <div className="vimeo-wrapper">
//           <iframe
//             className="aspect-video w-screen  "
//             src="https://player.vimeo.com/video/347119375?background=1&autoplay=1&loop=1&byline=0&title=0"
//           ></iframe>
//         </div>
//       ) : (
//         <div className="min-h-[450px]">
//           <Image
//             src={videoImg}
//             className="object-cover object-center"
//             alt={"video imag"}
//             fill
//           />

//           <button
//             onClick={() => setIsVideo(true)}
//             type="button"
//             className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 "
//           >
//             <svg
//               className="w-[190px] xl:w-auto h-[190px] xl:h-auto"
//               width="305"
//               height="305"
//               viewBox="0 0 305 305"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M152.5 0C68.2438 0 0 68.2438 0 152.5C0 236.756 68.2438 305 152.5 305C236.756 305 305 236.756 305 152.5C305 68.2438 236.756 0 152.5 0ZM114.375 76.25L228.75 152.5L114.375 228.75V76.25Z"
//                 fill="#EB6332"
//               />
//             </svg>
//           </button>
//         </div>
//       )}
//     </section>
//   );
// }

"use client";
import MenuLink from "@/components/Shared/MenuLink";
import Image from "next/image";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

export default function VideoArea() {
  const [isOpen, setOpen] = useState(false);
  return (
    <section className="relative min-h-[225px] sm:min-h-[450px] lg:min-h-[680px] xl:min-h-screen  ">
      <MenuLink />
      <iframe
        className="aspect-video w-screen "
        src="https://player.vimeo.com/video/904053646?autoplay=1&muted=1&controls=0&background=1&loop=1&byline=0&title=0"
      ></iframe>
      <button onClick={() => setOpen(true)}>
        <Image
          alt="play"
          src={"/icons/play.svg"}
          className="w-10 md:w-[95px] xl:w-auto h-10 md:h-[95px]  absolute left-10 top-10 opacity-20"
          // className="w-20 md:w-[190px] xl:w-auto h-20 md:h-[190px] xl:h-auto absolute left-1/2 -translate-x-1/2 top-[40%] -translate-y-1/2 "
          width={100}
          height={100}
        />
      </button>

      <ModalVideo
        channel="vimeo"
        isOpen={isOpen}
        videoId={"904053646"}
        onClose={() => setOpen(false)}
      />
    </section>
  );
}
