import Caraousal from "@/components/HomePage/Caraousal";
import Image from "next/image";
type Props = {};

const page = (props: Props) => {
  return (
    <div className="container mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
      <Caraousal />
      <div className="pt-12 pb-12 sm:pb-20 space-y-6">
        <div className="space-y-1">
          <h2 className="font-extrabold text-center text-xl sm:text-3xl lg:text-[42px] text-brand-blue">
            Simulador de Plusvalía
          </h2>
          <p className="text-center text-brand-blue text-base sm:text-xl lg:text-2xl">
            Calculadora Plúsvalía
          </p>
        </div>
        <div className="bg-[#EFEFEF] pt-6 px-4 md:px-6 xl:px-28 pb-12 space-y-10 sm:space-y-16">
          <div className="space-y-6">
            <p className="text-brand-blue text-sm">
              1. Identifique el objeto de la transmisión. Para hacerlo, puede
              utilizar la dirección, la referencia catastral, o el nombre del
              inmueble. Utilice el botón “Continuar” para completar la
              información del inmueble.
            </p>
            <form className="w-full sm:pl-4" action="">
              <div className="grid lg:grid-cols-12 gap-y-5 gap-x-7">
                <div className="lg:col-span-5 space-y-4">
                  <div className="space-y-1">
                    <label htmlFor="" className="block text-sm text-brand-blue">
                      Vía pública
                    </label>
                    <input
                      type="text"
                      className="px-3 py-2 bg-white focus:outline-none focus:ring-0 border-0 w-full"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="" className="block text-sm text-brand-blue">
                      Referencia catastral
                    </label>
                    <input
                      type="text"
                      className="px-3 py-2 bg-white focus:outline-none focus:ring-0 border-0 w-full"
                    />
                  </div>
                </div>
                <div className="lg:col-span-7 grid grid-cols-4 md:grid-cols-5 gap-x-4 sm:gap-x-7 gap-y-5">
                  <div className="space-y-1 col-span-1">
                    <label htmlFor="" className="block text-sm text-brand-blue">
                      Número
                    </label>
                    <input
                      type="text"
                      className="px-3 py-2 bg-white focus:outline-none focus:ring-0 border-0 w-full"
                    />
                  </div>
                  <div className="space-y-1 col-span-1">
                    <label htmlFor="" className="block text-sm text-brand-blue">
                      Letra
                    </label>
                    <input
                      type="text"
                      className="px-3 py-2 bg-white focus:outline-none focus:ring-0 border-0 w-full"
                    />
                  </div>
                  <div className="space-y-1 col-span-1">
                    <label htmlFor="" className="block text-sm text-brand-blue">
                      Escalera
                    </label>
                    <input
                      type="text"
                      className="px-3 py-2 bg-white focus:outline-none focus:ring-0 border-0 w-full"
                    />
                  </div>
                  <div className="space-y-1 col-span-1">
                    <label htmlFor="" className="block text-sm text-brand-blue">
                      Escalera
                    </label>
                    <input
                      type="text"
                      className="px-3 py-2 bg-white focus:outline-none focus:ring-0 border-0 w-full"
                    />
                  </div>
                  <div className="space-y-1 col-span-1">
                    <label htmlFor="" className="block text-sm text-brand-blue">
                      Planta
                    </label>
                    <input
                      type="text"
                      className="px-3 py-2 bg-white focus:outline-none focus:ring-0 border-0 w-full"
                    />
                  </div>
                  <div className="space-y-1 col-span-1">
                    <label htmlFor="" className="block text-sm text-brand-blue">
                      Puerta
                    </label>
                    <input
                      type="text"
                      className="px-3 py-2 bg-white focus:outline-none focus:ring-0 border-0 w-full"
                    />
                  </div>
                  <div className="space-y-1 col-span-1">
                    <label htmlFor="" className="block text-sm text-brand-blue">
                      Cargo
                    </label>
                    <input
                      type="text"
                      className="px-3 py-2 bg-white focus:outline-none focus:ring-0 border-0 w-full"
                    />
                  </div>
                  <div className="space-y-1 col-span-1">
                    <label htmlFor="" className="block text-sm text-brand-blue">
                      CC
                    </label>
                    <input
                      type="text"
                      className="px-3 py-2 bg-white focus:outline-none focus:ring-0 border-0 w-full"
                    />
                  </div>
                  <div className="space-y-1 col-span-2">
                    <label htmlFor="" className="block text-sm text-brand-blue">
                      Número fijo
                    </label>
                    <input
                      type="text"
                      className="px-3 py-2 bg-white focus:outline-none focus:ring-0 border-0 w-full"
                    />
                  </div>
                  <div className="space-y-1 col-span-2">
                    <label htmlFor="" className="block text-sm text-brand-blue">
                      Identificador local
                    </label>
                    <input
                      type="text"
                      className="px-3 py-2 bg-white focus:outline-none focus:ring-0 border-0 w-full"
                    />
                  </div>
                  <div className="col-span-3 flex items-center gap-6 sm:pt-6">
                    <button
                      type="button"
                      className="w-full inline-block py-2.5 rounded-lg bg-brand-blue text-white font-bold text-sm  hover:bg-opacity-85 transition-all"
                    >
                      Continuar
                    </button>
                    <button
                      type="button"
                      className="w-full inline-block py-2.5 rounded-lg bg-brand-red text-white font-bold text-sm  hover:bg-opacity-85 transition-all"
                    >
                      Borrar
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="space-y-6">
            <p className="text-brand-blue text-sm">
              2. Introduzca los datos para el cálculo del valor de la plusvalía.
              Una vez haya completado la información, pulse el botón “Calcular”.
            </p>
            <form className="w-full sm:pl-4" action="">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-5 gap-x-7">
                <div className="space-y-1">
                  <label htmlFor="" className="block text-sm text-brand-blue">
                    Fecha transmisión prevista
                  </label>
                  <input
                    type="text"
                    className="px-3 py-2 bg-white focus:outline-none focus:ring-0 border-0 w-full"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="" className="block text-sm text-brand-blue">
                    Fecha transmisión anterior
                  </label>
                  <input
                    type="text"
                    className="px-3 py-2 bg-white focus:outline-none focus:ring-0 border-0 w-full"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="" className="block text-sm text-brand-blue">
                    Precio total declarado (€)
                  </label>
                  <input
                    type="text"
                    className="px-3 py-2 bg-white focus:outline-none focus:ring-0 border-0 w-full"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="" className="block text-sm text-brand-blue">
                    Precio total de adquisición (€)
                  </label>
                  <input
                    type="text"
                    className="px-3 py-2 bg-white focus:outline-none focus:ring-0 border-0 w-full"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="" className="block text-sm text-brand-blue">
                    Cuota de adquisición (en porcentaje)
                  </label>
                  <input
                    type="text"
                    className="px-3 py-2 bg-white focus:outline-none focus:ring-0 border-0 w-full"
                  />
                </div>
                <div className="space-y-1 pt-6">
                  <button
                    type="button"
                    className="px-12 inline-block py-2.5 rounded-lg bg-brand-blue text-white font-bold text-sm  hover:bg-opacity-85 transition-all"
                  >
                    Calcular
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="flex md:pt-8 pb-4 justify-center">
          <Image
            src="/recanet.png"
            alt={"service icon"}
            height="55"
            width="48"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
