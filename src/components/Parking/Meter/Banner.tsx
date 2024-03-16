import banner from "@/public/images/parking/meter/banner.png";
import Image from "next/image";
export default function Banner() {
  return (
    <section className="relative min-h-[470px] lg:min-h-[735px] xl:min-h-[calc(100dvh-80px)]">
      <Image
        src={banner}
        className="object-cover object-center"
        alt={"video imag"}
        fill
      />
      <div className="bg-banner relative px-4 max-sm:flex items-center max-sm:min-h-[470px]  sm:pt-32 pb-20">
        <div className="max-w-screen-xl mx-auto ">
          <p className=" max-[374px]:text-[40px] text-[50px] sm:text-[65px] lg:text-[96px] font-extrabold leading-none text-white">
            Parquímetro
          </p>
        </div>
      </div>
    </section>
  );
}
