import MenuLink from "@/components/Shared/MenuLink";
import banner from "@/public/images/parking/driving/banner.png";
import Image from "next/image";
export default function Banner() {
  return (
    <section className="relative px-4 min-h-[225px] sm:min-h-[450px] lg:min-h-[680px] xl:min-h-[calc(100dvh-80px)]">
      <MenuLink />
      <Image
        src={banner}
        className="object-cover object-center"
        alt={"video imag"}
        fill
      />
      <div className="max-w-screen-xl mx-auto relative pt-6 lg:pt-8 xl:pt-10">
        <p className=" text-[30px] sm:text-[65px] lg:text-[96px] font-extrabold leading-none text-brand-blue">
          Conduce <br /> a tu <span className="text-brand-orange">ritmo</span>
        </p>
      </div>
    </section>
  );
}
