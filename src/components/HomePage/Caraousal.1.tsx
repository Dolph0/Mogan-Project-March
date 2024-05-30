// "use client";
// import { Carousel } from "react-responsive-carousel";
// import { Props } from "./Caraousal";

// export const Caraousal = (props: Props) => {
//   return (
//     <Carousel
//       showThumbs={false}
//       infiniteLoop={true}
//       autoPlay={true}
//       showStatus={false}
//       interval={4000}
//       className="mx-auto lg:divide-y lg:divide-gray-200 mt-2"
//     >
//       <div>
//         <img src="/BANNER WEB GESTIONA MOGAN1.jpg" />
//       </div>
//       <div>
//         <img src="/WhatsApp Image 2024-03-19 at 14.30.42.jpeg" />
//       </div>
//       <div>
//         <img src="/BANNER WEB PAGOS PLAZOS.jpg" />
//       </div>

//     </Carousel>
//   );
// };

"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

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
        <img src="/BANNER WEB GESTIONA MOGAN1.jpg" />
      </div>
      <div>
        <img src="/WhatsApp Image 2024-03-19 at 14.30.42.jpeg" />
      </div>
      <div>
        <img src="/BANNER WEB PAGOS PLAZOS.jpg" />
      </div>
    </Carousel>
  );
};

export default Caraousal;
