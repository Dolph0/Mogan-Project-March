import MenuLink from "@/components/Shared/MenuLink";
import banner from "@/public/images/parking/vehicle-stays/banner.png";
import Image from "next/image";
export default function Banner() {
  return (
    <section className="relative min-h-[225px] sm:min-h-[450px] lg:min-h-[680px] xl:min-h-screen">
      <MenuLink />
      <Image
        src={banner}
        className="object-cover object-center"
        alt={"video imag"}
        fill
      />
      <div className="bg-banner-two relative px-8  max-sm:min-h-[330px]  pt-14 lg:pt-8 xl:pt-10 sm:pb-20">
        <div className="w-full sm:max-w-screen-xl mx-auto ">
          <p className=" text-[30px] sm:text-[65px] lg:text-[96px] font-extrabold leading-none text-white">
            Estancias <br />
            para vehículos
          </p>
        </div>
      </div>
    </section>
  );
}
