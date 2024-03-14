import map from "@/public/images/parking/meter/map.png";
import Image from "next/image";
export default function Map() {
  return (
    <section className="px-8  pb-20 pt-8 sm:py-14">
      <div className="max-w-screen-xl mx-auto space-y-10">
        <h3 className="text-center text-2xl lg:text-[42px] font-extrabold text-brand-teal">
          ¿Dónde aparcar?
        </h3>
        <div>
          <Image
            src={map}
            className="object-cover max-md:h-[230px] object-center w-full"
            alt={"Blog Img"}
          />
        </div>
      </div>
    </section>
  );
}
