import Caraousal from "@/components/HomePage/Caraousal";
import Image from "next/image";
type Props = {};

const page = (props: Props) => {
  return (
    <div className="container mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
      <Caraousal />
      <div className="max-w-[576px] mx-auto pt-12 pb-12 sm:pb-20">
        <div className="space-y-1">
          <h2 className="font-extrabold text-center text-3xl lg:text-[42px] text-brand-blue">
            Pagos
          </h2>
          <p className="text-center text-brand-blue text-xl lg:text-2xl">
            Impuestos, tasas y multas.
          </p>
        </div>
        <div className="py-12 sm:py-20 grid gap-8">
          <div className="rounded-tl-3xl bg-[#2FAF7E] py-5 sm:py-6 px-5 sm:px-8 flex gap-4 items-center">
            <Image
              src="/icons/pagos.svg"
              alt={"service icon"}
              height="56"
              width="58"
            />
            <div className="space-y-0.5">
              <h3 className="font-extrabold leading-[1.1] text-lg sm:text-[22px] text-brand-gray-50">
                CON CERTIFICADO
              </h3>
              <p className="text-[#0B5438] text-[15px] ">
                Acceda al pago de sus tributos con Certificado Digital
              </p>
            </div>
          </div>
          <div className="rounded-tl-3xl bg-[#3ED39A] py-5 sm:py-6 px-5 sm:px-8 flex gap-4 items-center">
            <Image
              src="/icons/pagos.svg"
              alt={"service icon"}
              height="56"
              width="58"
            />
            <div className="space-y-0.5">
              <h3 className="font-extrabold leading-[1.1] text-lg sm:text-[22px] text-brand-gray-50">
                SIN CERTIFICADO
              </h3>
              <p className="text-[#0B5438] text-[15px] ">
                Acceda al pago de sus tributos sin Certificado Digital
              </p>
            </div>
          </div>
          <div className="rounded-tl-3xl bg-[#7C71F3] py-5 sm:py-6 px-5 sm:px-8 flex gap-4 items-center">
            <Image
              src="/icons/zona-azul.svg"
              alt={"service icon"}
              height="56"
              width="58"
            />
            <div className="space-y-0.5">
              <h3 className="font-extrabold leading-[1.1] text-lg sm:text-[22px] text-brand-gray-50">
                PAGO ZONA AZUL
              </h3>
              <p className="text-white text-[15px] ">
                Acceda al pago de la zona azul (Estacionamiento regulado)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
