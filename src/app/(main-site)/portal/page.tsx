import Accordion from "@/components/Accordion";
import Caraousal from "@/components/HomePage/Caraousal.1";

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
                Se constituye la empresa como sociedad mercantil el 27 de
                febrero de 2003, con la denominación de Mogán Gestión Tributaria
                Municipal, S.L., con capital de titularidad exclusiva del
                Ayuntamiento de Mogán. Inscrita en el registro mercantil de Las
                Palmas. Tomo: 1641 Libro: 0 Folio: 14 Sección: 8 Hoja: GC 29840.
              </Accordion>
              <Accordion title="Capital Social">
                En la escritura de constitución el capital social es e VEINTE
                MIL EUROS, representados por CIEN participaciones de DOSCIENTOS
                EUROS de valor nominal cada una de ellas, numeradas
                correlativamente del UNO al CIEN, ambas inclusive, suscrita por
                el socio fundador, el Ayuntamiento de Mogán.
              </Accordion>
              <Accordion title="Objetivo Social y funciones">
                OBJETO SOCIAL Y FUNCIONES El objeto social de la sociedad queda
                centrado en la colaboración en la gestión recaudatoria de
                impuestos, tributos, tasas, multas, precios públicos y otras
                exacciones locales en periodo voluntario y/o ejecutivo. Según la
                Encomienda de Gestión, de fecha 6 de febrero de 2003, esta
                actividad estará sometida a la inspección y vigilancia municipal
                y limitada a aquellos servicios y/o actuaciones que no impliquen
                actos de autoridad. El 7 de noviembre de 2003 en Junta General
                -que se corresponde con el Pleno Municipal- y para dar respuesta
                a nuevas necesidades en la gestión de la empresa, se procede a
                la modificación de los Estatutos de la Sociedad, ampliando el
                objeto social y adecuando la denominación social a esta nueva
                realidad. Así se incorporan al objeto social gestiones
                urbanísticas y a titulo general “la promoción, gestión y
                explotación de cualesquiera de los bienes y servicios y
                actividades de competencia municipal”. La empresa pasa a
                denominarse Mogán Gestión Municipal, S.L. Estos acuerdos fueron
                formalizados públicamente el 18 de diciembre de 2003 ante el
                notario Don Eloy Cuesta Pracias. Al amparo de estos acuerdos se
                promueven desde la Corporación Municipal una serie de
                encomiendas entre las que enumeramos la elaboración del Plan
                General de Ordenación Urbana, el Mantenimiento de los Jardines
                Municipales, la construcción de la Guardería del Valle de Mogán
                y la Piscina de Arguineguín, el Bombeo de Aguas desde Playa de
                Mogán, La Reforma del Centro de Día del Barrio del Horno, la
                Ampliación del Centro Ocupacional, la Rehabilitación de la sede
                de la Concejalía de la igualdad de Género, …. Al mismo tiempo se
                adoptan una serie de iniciativas encaminadas a modernizar la
                gestión de la empresa: apertura de nuevas oficinas
                convenientemente equipadas, renovación de los equipos
                informáticos, impulso a los convenios con la Agencia Tributaria
                y Hacienda Canaria para el cobro fuera del término municipal,
                página web, convenios con terceras firmas para la actualización
                de la base de datos y altas catastrales.
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
