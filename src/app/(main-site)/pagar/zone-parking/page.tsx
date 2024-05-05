import Caraousal from "@/components/HomePage/Caraousal";
import invoice from "@/public/images/pagar/image-3.png";
import Image from "next/image";

export default function page() {
  return (
    <div className="container mx-auto max-w-7xl px-4 lg:px-8 md:pb-12 xl:pb-20">
      <Caraousal />
      <div className="pt-12 pb-12 sm:pb-20 space-y-6">
        <div className="space-y-0.5 sm:space-y-3">
          <h2 className="font-extrabold text-center text-xl sm:text-3xl lg:text-[42px] text-brand-blue">
            Introducir datos del recibo
          </h2>
          <p className="text-center text-brand-blue text-base sm:text-xl lg:text-2xl">
            Estacionamiento Zona Azul
          </p>
        </div>
        <div className="bg-brand-gray/15 px-3 sm:px-8 py-7 sm:py-12">
          <div className="grid grid-cols-1  md:grid-cols-2 pb-8 sm:pb-16">
            <div className="">
              <p className="font-black text-sm text-center sm:text-left text-brand-blue">
                Introduzca los datos solicitados que se encuentran en el boletín
                de denuncia.
              </p>
              <form action="" className="py-12 md:py-20   xl:pr-8 ">
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex gap-5 xl:gap-5 xl:items-center flex-col xl:flex-row">
                    <label
                      htmlFor="Reference"
                      className="block xl:w-[285px]  font-semibold shrink-0 text-center sm:text-left xl:text-right text-sm text-brand-blue"
                    >
                      Introduzca el código indicado en su ticket
                    </label>
                    <div className="max-sm:max-w-[240px] max-sm:mx-auto  w-full">
                      <input
                        type="text"
                        id="Reference"
                        name="Reference"
                        className="border border-black shadow-3xl w-full text-sm text-black font-semibold"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col xl:flex-row gap-2 xl:gap-5 xl:items-center">
                    <label
                      htmlFor="Reference"
                      className="block xl:w-[285px]  font-semibold shrink-0 text-center sm:text-left xl:text-right text-sm text-brand-blue"
                    >
                      <span className="sr-only">button</span>
                    </label>
                    <div className="max-sm:max-w-[240px] max-sm:mx-auto w-full">
                      <button
                        type="button"
                        className="w-full font-semibold text-white text-sm bg-brand-blue text-center px-3 py-2.5 hover:bg-opacity-85 transition-all"
                      >
                        ENVIAR
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="space-y-6 lg:space-y-12 lg:pr-8 max-md:px-14 md:pl-24">
              <Image src={invoice} alt={"receipt"} />
            </div>
          </div>
          <div className="pt-6 space-y-14 sm:space-y-16">
            <p className="font-semibold text-[10px] sm:text-sm text-brand-blue  ">
              Cualquiera que sea la modalidad de pago utilizada, podrá solicitar
              la Carta de Pago transcurridas al menos 24 horas desde la
              transacción, en las Oficinas de Recaudación del Ayuntamiento de
              Mogán.
              <br />
              <br />
              Avda. de la Constitución, 14 <br />
              Calle Tamarán 435140 Mogán 35120 <br />
              Arguineguín Telf.: 928 15 88 06 Telf.: 928 56 85 66 Fax.: 928 56
              85 12 Fax.: 928 73 50 04
              <br />
              Correo electrónico:{" "}
              <a
                href="mailto:gestionmunicipal@gestmogan.com"
                className="underline"
              >
                gestionmunicipal@gestmogan.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
