import banner from "@/public/images/parking/housing/banner.png";
import Image from "next/image";
export default function Banner() {
  return (
    <section className="relative min-h-[330px] lg:min-h-[735px] xl:min-h-screen">
      <div className="absolute top-2 left-2 z-50 p-4 max-sm:top-5">
        <a href="/">
          <img
            src="/logo VPO.png"
            alt="Icono"
            className="h-28 w-28 max-sm:h-16 max-sm:w-16"
          />{" "}
          {/* Ajusta la ruta de la imagen y el tamaño según tus necesidades */}
        </a>
      </div>
      <Image
        src={banner}
        className="object-cover object-center"
        alt={"video imag"}
        fill
      />
      <div className="bg-banner relative px-8 max-sm:flex items-center max-sm:min-h-[330px]  sm:pt-32 pb-20">
        <div className="w-full sm:max-w-screen-xl mx-auto ">
          <p className=" max-[374px]:text-[40px] text-[50px] sm:text-[65px] lg:text-[96px] font-extrabold leading-none text-white">
            Viviendas VPO
          </p>
        </div>
      </div>
    </section>
  );
}
