import MenuLink from "@/components/Shared/MenuLink";
import banner from "@/public/images/parking/vouchers/banner.png";
import Image from "next/image";
export default function Banner() {
  return (
    <section className="relative min-h-[225px] sm:min-h-[450px] lg:min-h-[680px] xl:min-h-[calc(100dvh-80px)]">
      <MenuLink />
      <Image
        src={banner}
        className="object-cover object-center"
        alt={"video imag"}
        fill
      />
      <div className="bg-banner-two relative px-4 max-sm:flex items-center max-sm:min-h-[470px]  pt-6 lg:pt-8 xl:pt-10 pb-20">
        <div className="max-w-screen-xl mx-auto ">
          <p className=" text-[30px] sm:text-[65px] lg:text-[96px] font-extrabold leading-none text-brand-blue">
            Tus clientes <br /> se merecen
            <span className="text-brand-orange">tiempo</span>
          </p>
        </div>
      </div>
    </section>
  );
}
