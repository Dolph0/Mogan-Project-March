import MenuLink from "@/components/Shared/MenuLink";
import banner from "@/public/images/parking/driving/banner.png";
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
      <div className="bg-banner relative pt-6  max-sm:flex items-center   px-8 max-sm:min-h-[320px]  lg:pt-8 xl:pt-20">
        <div className="w-full sm:max-w-screen-xl mx-auto ">
          <p className=" text-[30px] sm:text-[65px] lg:text-[96px] font-extrabold leading-none text-white sm:text-brand-blue">
            Conduce <br /> a tu <span className="text-brand-orange">ritmo</span>
          </p>
        </div>
      </div>
    </section>
  );
}
