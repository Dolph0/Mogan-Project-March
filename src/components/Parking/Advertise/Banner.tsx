import MenuLink from "@/components/Shared/MenuLink";
import banner from "@/public/images/parking/advertise/banner.png";
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
      <div className="bg-banner relative px-8 max-sm:flex items-center max-sm:min-h-[320px]  pt-6 lg:pt-8 xl:pt-10 ">
        <div className="sm:max-w-screen-xl mx-auto w-full ">
          <p className=" text-[30px] sm:text-[65px] lg:text-[96px] font-extrabold leading-none text-white">
            <span className="text-brand-orange">Anúnciate</span> en <br />{" "}
            nuestro Parking
          </p>
        </div>
      </div>
    </section>
  );
}
