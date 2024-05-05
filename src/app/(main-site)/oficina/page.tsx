import Caraousal from "@/components/HomePage/Caraousal";
import Image from "next/image";
import Link from "next/link";
type Props = {};
const page = (props: Props) => {
  return (
    <div className="container mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
      <Caraousal />
      <div className="pt-12 pb-12 sm:pb-20 space-y-6">
        <div className="space-y-1">
          <h2 className="font-extrabold text-center text-xl sm:text-3xl lg:text-[42px] text-brand-blue">
            Oficina Tributaria
          </h2>
          <p className="text-center text-brand-blue text-base sm:text-xl lg:text-2xl">
            Oficina Virtual Tributaria
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 pt-8  lg:pt-14 pb-10 sm:pb-16 xl:pb-20">
          <Link
            href="/pagar"
            className="rounded-tl-3xl bg-[#FABD05] py-5 sm:py-6 px-5 sm:px-8 flex gap-4 items-center hover:scale-105 transition-all duration-300"
          >
            <Image
              src="/icons/pagos.svg"
              alt={"pagar"}
              height="56"
              width="58"
            />
            <div className="space-y-0.5">
              <h3 className="font-extrabold leading-[1.1] text-lg sm:text-[22px] text-brand-gray-50">
                PAGAR
              </h3>
              <p className="text-[#0B5438] text-[15px] ">Sin Certificado</p>
            </div>
          </Link>
          <Link
            href="#"
            className="rounded-tl-3xl bg-[#FABD05] py-5 sm:py-6 px-5 sm:px-8 flex gap-4 items-center hover:scale-105 transition-all duration-300"
          >
            <Image
              src="/icons/file-icon.svg"
              alt={"pagar"}
              height="60"
              width="55"
            />
            <div className="space-y-0.5">
              <h3 className="font-extrabold leading-[1.1] text-lg sm:text-[22px] text-brand-gray-50">
                PAGAR | CONSULTAR RECIBOS
              </h3>
              <p className="text-[#0B5438] text-[15px] ">Con Certificado</p>
            </div>
          </Link>
          <Link
            href="#"
            className="rounded-tl-3xl bg-[#FABD05] py-5 sm:py-6 px-5 sm:px-8 flex gap-4 items-center hover:scale-105 transition-all duration-300"
          >
            <Image
              src="/icons/home-icon.svg"
              alt={"pagar"}
              height="54"
              width="60"
            />
            <div className="space-y-0.5">
              <h3 className="font-extrabold leading-[1.1] text-lg sm:text-[22px] text-brand-gray-50">
                INMUEBLES
              </h3>
            </div>
          </Link>
          <Link
            href="#"
            className="rounded-tl-3xl bg-[#FABD05] py-5 sm:py-6 px-5 sm:px-8 flex gap-4 items-center hover:scale-105 transition-all duration-300"
          >
            <Image
              src="/icons/car-icon.svg"
              alt={"pagar"}
              height="46"
              width="82"
            />
            <div className="space-y-0.5">
              <h3 className="font-extrabold leading-[1.1] text-lg sm:text-[22px] text-brand-gray-50">
                VEHÍCULOS
              </h3>
            </div>
          </Link>
          <Link
            href="#"
            className="rounded-tl-3xl bg-[#FABD05] py-5 sm:py-6 px-5 sm:px-8 flex gap-4 items-center hover:scale-105 transition-all duration-300"
          >
            <Image
              src="/icons/domic.svg"
              alt={"pagar"}
              height="60"
              width="70"
            />
            <div className="space-y-0.5">
              <h3 className="font-extrabold leading-[1.1] text-lg sm:text-[22px] text-brand-gray-50">
                DOMICILIACIONES
              </h3>
            </div>
          </Link>
          <Link
            href="#"
            className="rounded-tl-3xl bg-[#FABD05] py-5 sm:py-6 px-5 sm:px-8 flex gap-4 items-center hover:scale-105 transition-all duration-300"
          >
            <Image
              src="/icons/card-address.svg"
              alt={"card-address"}
              height="44"
              width="62"
            />
            <div className="space-y-0.5">
              <h3 className="font-extrabold leading-[1.1] text-lg sm:text-[22px] text-brand-gray-50">
                DATOS PERSONALES
              </h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
