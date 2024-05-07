import Accordion from "@/components/Accordion";
import Caraousal from "@/components/HomePage/Caraousal";

import Link from "next/link";
type Props = {};
const page = (props: Props) => {
  return (
    <div className="container mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
      <Caraousal />
      <div className="pt-12 pb-12 sm:pb-20 space-y-8">
        <div className="space-y-1">
          <h2 className="font-extrabold text-center text-xl sm:text-3xl lg:text-[42px] text-brand-blue">
            Portal de transparencia
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-6 lg:pt-16">
          <div className="md:col-span-7  ">
            <p className="text-base lg:text-lg  text-black">
              Mogan Gestión Municipal pone a disposición de la ciudadanía este
              Portal de Transparencia para que acceda a la información pública
              de forma fácil y sencilla. La ciudadanía tiene derecho a saber y a
              través de este Portal se garantiza el mismo, fomentando de esta
              forma la participación ciudadana y la colaboración en la gestión
              de los asuntos públicos.
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="border-y divide-y divide-brand-teal border-brand-teal">
              <Accordion title="Constitución">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis illum, exercitationem neque dolores corporis animi
                laudantium modi magnam. Sequi, distinctio! Debitis recusandae
                nesciunt architecto. Perferendis numquam consectetur minima nemo
                asperiores!
              </Accordion>
              <Accordion title="Capital Social">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis illum, exercitationem neque dolores corporis animi
                laudantium modi magnam. Sequi, distinctio! Debitis recusandae
                nesciunt architecto. Perferendis numquam consectetur minima nemo
                asperiores!
              </Accordion>
              <Accordion title="Objetivo Social y funciones">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis illum, exercitationem neque dolores corporis animi
                laudantium modi magnam. Sequi, distinctio! Debitis recusandae
                nesciunt architecto. Perferendis numquam consectetur minima nemo
                asperiores!
              </Accordion>
            </div>
          </div>
        </div>
        <div className="pt-6 lg:pt-14 grid gap-4 sm:gap-8 grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          <Link
            href="/portal/informacion-institucional"
            className="rounded-tl-3xl max-[400px]:px-4 px-6 py-2 min-h-[110px] flex justify-center items-center bg-[#4D74F9] hover:bg-[#5698FB] hover:scale-105 transition-all"
          >
            <p className="text-lg lg:text-[22px] text-center leading-[1.3] line-clamp-4 font-extrabold text-white">
              Información Institucional
            </p>
          </Link>
          <div className="relative group">
            <div className="select-none rounded-tl-3xl max-[400px]:px-4 px-6 py-2 min-h-[110px] flex justify-center items-center bg-[#4D74F9] hover:bg-[#5698FB] hover:scale-105 transition-all">
              <p className="text-lg lg:text-[22px] text-center leading-[1.3] line-clamp-4 font-extrabold text-white">
                Consejo de Administración
              </p>
            </div>
            <ul className="absolute right-0 w-full max-md:w-[300px] top-full shadow-md opacity-0 group-hover:opacity-100 invisible group-hover:visible rounded p-1 translate-y-10 group-hover:translate-y-0 transition-all duration-300  divide-y bg-white">
              <li>
                <Link
                  className="py-2 inline-block font-medium text-gray-500 px-3 hover:bg-slate-100 text-sm"
                  href="portal/consejo-de-administracion/juan-ernesto-hernandez-cruz-presidente/"
                >
                  Juan Ernesto Hernández Cruz (Presidente)
                </Link>
              </li>
              <li>
                <Link
                  className="py-2 inline-block font-medium text-gray-500 px-3 hover:bg-slate-100 text-sm"
                  href="portal/consejo-de-administracion/consuelo-diaz-leon/"
                >
                  Dª Consuelo Díaz León (Vice-presidenta)
                </Link>
              </li>
              <li>
                <Link
                  className="py-2 inline-block font-medium text-gray-500 px-3 hover:bg-slate-100 text-sm"
                  href="portal/consejo-de-administracion/da-yaiza-de-la-soledad-llovell-hernandezvocal/"
                >
                  Dª Yaiza de la Soledad Llovell Hernández(Vocal)
                </Link>
              </li>
              <li>
                <Link
                  className="py-2 inline-block font-medium text-gray-500 px-3 hover:bg-slate-100 text-sm"
                  href="portal/consejo-de-administracion/do-josue-hernandez-delgado-vocal/"
                >
                  Dº Josué Hernández Delgado (Vocal)
                </Link>
              </li>
              <li>
                <Link
                  className="py-2 inline-block font-medium text-gray-500 px-3 hover:bg-slate-100 text-sm"
                  href="portal/consejo-de-administracion/da-juana-teresa-vega-jimenez-vocal/"
                >
                  Dª Juana Teresa Vega Jiménez (Vocal)
                </Link>
              </li>
              <li>
                <Link
                  className="py-2 inline-block font-medium text-gray-500 px-3 hover:bg-slate-100 text-sm"
                  href="portal/consejo-de-administracion/do-neftali-de-jesus-sabina-deniz-vocal/"
                >
                  Dº Neftalí de Jesús Sabina Déniz (Vocal)
                </Link>
              </li>
            </ul>
          </div>
          <Link
            href="/portal/contratos-encomiendas"
            className="rounded-tl-3xl max-[400px]:px-4 px-6 py-2 min-h-[110px] flex justify-center items-center bg-[#4D74F9] hover:bg-[#5698FB] hover:scale-105 transition-all"
          >
            <p className="text-lg lg:text-[22px] text-center leading-[1.3] line-clamp-4 font-extrabold text-white">
              Contratos y encomiendas
            </p>
          </Link>
          <Link
            href="/portal/empleados"
            className="rounded-tl-3xl max-[400px]:px-4 px-6 py-2 min-h-[110px] flex justify-center items-center bg-[#4D74F9] hover:bg-[#5698FB] hover:scale-105 transition-all"
          >
            <p className="text-lg lg:text-[22px] text-center leading-[1.3] line-clamp-4 font-extrabold text-white">
              Empleados
            </p>
          </Link>
          <Link
            href="/portal/retribuciones"
            className="rounded-tl-3xl max-[400px]:px-4 px-6 py-2 min-h-[110px] flex justify-center items-center bg-[#4D74F9] hover:bg-[#5698FB] hover:scale-105 transition-all"
          >
            <p className="text-lg lg:text-[22px] text-center leading-[1.3] line-clamp-4 font-extrabold text-white">
              Retribuciones
            </p>
          </Link>
          <Link
            href="/portal/economin-y-contabilidad"
            className="rounded-tl-3xl max-[400px]:px-4 px-6 py-2 min-h-[110px] flex justify-center items-center bg-[#4D74F9] hover:bg-[#5698FB] hover:scale-105 transition-all"
          >
            <p className="text-lg lg:text-[22px] text-center leading-[1.3] line-clamp-4 font-extrabold text-white">
              Economía y contabilidad
            </p>
          </Link>
          <Link
            href="/portal/personal-libre-nombramiento-y-confianza"
            className="rounded-tl-3xl max-[400px]:px-4 px-6 py-2 min-h-[110px] flex justify-center items-center bg-[#4D74F9] hover:bg-[#5698FB] hover:scale-105 transition-all"
          >
            <p className="text-lg lg:text-[22px] text-center leading-[1.3] line-clamp-4 font-extrabold text-white">
              Personal libre nombramiento y confianza
            </p>
          </Link>
          <Link
            href="/portal/access-information"
            className="rounded-tl-3xl max-[400px]:px-4 px-6 py-2 min-h-[110px] flex justify-center items-center bg-[#4D74F9] hover:bg-[#5698FB] hover:scale-105 transition-all"
          >
            <p className="text-lg lg:text-[22px] text-center leading-[1.3] line-clamp-4 font-extrabold text-white">
              Acceso a la información
            </p>
          </Link>
          <Link
            href="/portal/informe-mapa-indice-transpararencia"
            className="rounded-tl-3xl max-[400px]:px-4 px-6 py-2 min-h-[110px] flex justify-center items-center bg-[#4D74F9] hover:bg-[#5698FB] hover:scale-105 transition-all"
          >
            <p className="text-lg lg:text-[22px] text-center leading-[1.3] line-clamp-4 font-extrabold text-white">
              Informe, mapa e índice de transparencia
            </p>
          </Link>
        </div>
        <div className="pt-10 md:pt-20 md:pb-10">
          <p className="text-[10px] sm:text-base lg:text-lg text-black text-center">
            Fecha de la{" "}
            <strong>última modificación del portal de transparencia</strong>{" "}
            17/10/23
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
