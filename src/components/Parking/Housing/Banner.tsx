import banner from "@/public/images/parking/housing/banner.png";
import Image from "next/image";
export default function Banner() {
  return (
    <section className="relative min-h-[330px] lg:min-h-[735px] xl:min-h-screen">
      <Image
        src={banner}
        className="object-cover object-center"
        alt={"video imag"}
        fill
      />
      <div className="bg-banner relative px-8 max-sm:flex items-center max-sm:min-h-[330px]  sm:pt-32 pb-20">
        <div className="w-full sm:max-w-screen-xl mx-auto ">
          <p className=" max-[374px]:text-[40px] text-[50px] sm:text-[65px] lg:text-[96px] font-extrabold leading-none text-white">
            Viviendas PO
          </p>
        </div>
      </div>
    </section>
  );
}
