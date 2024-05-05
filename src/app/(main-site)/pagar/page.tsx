import Caraousal from "@/components/HomePage/Caraousal";
import Image from "next/image";
import Link from "next/link";
export default function page() {
  return (
    <div className="container mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
      <Caraousal />
      <div className="pt-12 pb-12 sm:pb-20 space-y-6">
        <div className="space-y-0.5 sm:space-y-3">
          <h2 className="font-extrabold text-center text-xl sm:text-3xl lg:text-[42px] text-brand-blue">
            Pagar
          </h2>
          <p className="text-center text-brand-blue text-base sm:text-xl lg:text-2xl">
            Oficina Virtual Tributaria
          </p>
        </div>
        <div className="max-w-[580px] mx-auto">
          <div className="grid grid-cols-1 gap-5 sm:gap-8 pt-8  lg:pt-14 pb-10 sm:pb-16 xl:pb-20">
            <Link
              href="/pagar/virtual-tax"
              className="rounded-tl-3xl bg-[#FABD05] py-5 sm:py-6 px-5 sm:px-8 flex gap-4 items-center hover:scale-105 transition-all duration-300"
            >
              <Image
                src="/icons/virtual-tax.svg"
                alt={"  INTRODUCIR DATOS DE RECIBO"}
                height="56"
                width="58"
              />
              <div className="space-y-0.5">
                <h3 className="font-extrabold leading-[1.1] text-lg sm:text-[22px] text-brand-gray-50">
                  INTRODUCIR DATOS DE RECIBO
                </h3>
              </div>
            </Link>
            <Link
              href="/pagar/zone-parking"
              className="rounded-tl-3xl bg-[#FABD05] py-5 sm:py-6 px-5 sm:px-8 flex gap-4 items-center hover:scale-105 transition-all duration-300"
            >
              <Image
                src="/icons/zone-parking.svg"
                alt={"ESTACIONAMIENTO ZONA AZUL"}
                height="60"
                width="55"
              />
              <div className="space-y-0.5">
                <h3 className="font-extrabold leading-[1.1] text-lg sm:text-[22px] text-brand-gray-50">
                  ESTACIONAMIENTO ZONA AZUL
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
