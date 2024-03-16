import PlaceFrameTwo from "../../Svg/PlaceFrameTwo";

export default function Info() {
  return (
    <section className="px-7 pb-16 pt-12 md:py-24 xl:py-32">
      <div className="max-w-[980px] mx-auto">
        <div className="flex flex-col-reverse md:flex-row gap-12 lg:gap-24 items-center">
          <div className="w-[280px] shrink-0 grid grid-cols-2 gap-y-7 gap-x-6">
            <div className="">
              <div className="w-[125px] h-[125px] relative">
                <PlaceFrameTwo />
                <div className="absolute left-3 bottom-2">
                  <p className="text-brand-blue text-base font-extrabold !leading-tight">
                    Fideliza a <br /> tus clientes
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="w-[125px] h-[125px] relative">
                <PlaceFrameTwo />
                <div className="absolute left-3 bottom-2">
                  <p className="text-brand-blue text-base font-extrabold !leading-tight">
                    Gestiona <br /> tus vales
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="w-[125px] h-[125px] relative">
                <PlaceFrameTwo />
                <div className="absolute left-3 bottom-2">
                  <p className="text-brand-blue text-base font-extrabold !leading-tight">
                    Sin <br />
                    Comisiones
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="w-[125px] h-[125px] relative">
                <PlaceFrameTwo />
                <div className="absolute left-3 bottom-2">
                  <p className="text-brand-blue text-base font-extrabold !leading-tight">
                    ¡Así de <br />
                    fácil!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4 md:space-y-10 ">
            <h2 className="text-[42px] font-extrabold !leading-none text-brand-blue">
              <span className="text-brand-orange block sm:inline">
                Oro parece,
              </span>{" "}
              parking es...
            </h2>
            <h4 className="text-[15px] md:text-2xl max-sm:font-bold">
              Ofréceles valor añadido para que te escojan.
            </h4>
            <p className="text-sm  text-brand-blue max-md:pt-3">
              Cuidamos de tus clientes. Regala a tus clientes estancias en
              nuestro parking mientras consumen, se alojan, compran en tu
              establecimiento o mientras hacen sus gestiones en Mogán.
              <br />
              <br />
              ¡Todo con ventajas!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
