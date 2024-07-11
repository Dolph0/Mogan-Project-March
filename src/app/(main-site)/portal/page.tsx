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

        <div className="space-y-8 pt-6 lg:pt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold" style={{ color: "#004870" }}>
                Mogán Gestión Municipal
              </h3>
              <p>Entidad participada por el Ayuntamiento de Mogán</p>
              <br />
              <p>
                <span className="font-bold" style={{ color: "#004870" }}>
                  Dirección:
                </span>{" "}
                Avda. de la Constitución nº 14. C.P.: 35140. Mogán – Las Palmas
              </p>
              <br />
              <p>
                <span className="font-bold" style={{ color: "#004870" }}>
                  Teléfono:
                </span>{" "}
                <a href="tel:928158806" style={{ color: "#5698FB" }}>
                  928 15 88 06
                </a>
              </p>
              <p>
                <span className="font-bold" style={{ color: "#004870" }}>
                  E-mail:
                </span>{" "}
                <a
                  href="mailto:gestionmunicipal@gestmogan.com"
                  style={{ color: "#5698FB" }}
                >
                  gestionmunicipal@gestmogan.com
                </a>
              </p>
            </div>
            <div>
              <p>
                A través del Portal de Transparencia de la empresa{" "}
                <span className="font-bold" style={{ color: "#004870" }}>
                  Mogán Gestión Municipal S.L
                </span>
                , creado siguiendo las indicaciones del{" "}
                <a
                  href="https://transparenciacanarias.org/"
                  style={{ color: "#5698FB", textDecoration: "none" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Comisionado de Transparencia del Gobierno de Canarias
                </a>
                , podrá acceder a toda la información pública de esta entidad.
                Buscamos ser más transparentes, ponemos a disposición de la
                ciudadanía información sobre la gestión y los servicios
                prestados.
              </p>
              <br />
              <p>
                Este portal se crea para cumplir con la{" "}
                <a
                  href="https://www.boe.es/buscar/act.php?id=BOE-A-2013-12887"
                  style={{ color: "#5698FB", textDecoration: "none" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ley Estatal de Transparencia 19/2013, de 9 de diciembre, de
                  transparencia, acceso a la información pública y buen gobierno
                </a>{" "}
                y más específicamente se rige por la{" "}
                <a
                  href="https://www.boe.es/buscar/doc.php?id=BOE-A-2015-1114"
                  style={{ color: "#5698FB", textDecoration: "none" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ley Canaria 12/2014, de 26 de diciembre, de Transparencia y de
                  Acceso a la Información Pública
                </a>{" "}
                del Gobierno de Canarias.
              </p>
              <br />
              <p>
                Modelo de escrito descargable para facilitar a los ciudadanos el
                poder presentar solicitudes de acceso a la información pública.
              </p>
              <br />
              <p>
                <span className="font-bold" style={{ color: "#004870" }}>
                  AQUI EN FORMATO REUTILIZABLE
                </span>
                <div className="flex space-x-2 mt-2">
                  <a
                    href="/Nomativa-aplicable-Mogan-Gestion-Municipal.pdf"
                    download
                  >
                    <img src="/pdf.svg" alt="PDF" className="w-12 h-12" />
                  </a>
                  <a href="/Nomativa-aplicable-Mogan-Gestion-Municipal.docx">
                    <img src="/word.svg" alt="DOCX" className="w-12 h-12" />
                  </a>
                  <a href="/Nomativa-aplicable-Mogan-Gestion-Municipal.odt">
                    <img src="/odt.svg" alt="ODT" className="w-12 h-12" />
                  </a>
                </div>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="border-y divide-y divide-brand-teal border-brand-teal">
            <Accordion title="Constitución">
              Se constituye la empresa como sociedad mercantil el 27 de febrero
              de 2003, con la denominación de Mogán Gestión Tributaria
              Municipal, S.L., con capital de titularidad exclusiva del
              Ayuntamiento de Mogán. Inscrita en el registro mercantil de Las
              Palmas. Tomo: 1641 Libro: 0 Folio: 14 Sección: 8 Hoja: GC 29840.
            </Accordion>
            <Accordion title="Capital Social">
              En la escritura de constitución el capital social es e VEINTE MIL
              EUROS, representados por CIEN participaciones de DOSCIENTOS EUROS
              de valor nominal cada una de ellas, numeradas correlativamente del
              UNO al CIEN, ambas inclusive, suscrita por el socio fundador, el
              Ayuntamiento de Mogán.
            </Accordion>
            <Accordion title="Objetivo Social y funciones">
              OBJETO SOCIAL Y FUNCIONES El objeto social de la sociedad queda
              centrado en la colaboración en la gestión recaudatoria de
              impuestos, tributos, tasas, multas, precios públicos y otras
              exacciones locales en periodo voluntario y/o ejecutivo. Según la
              Encomienda de Gestión, de fecha 6 de febrero de 2003, esta
              actividad estará sometida a la inspección y vigilancia municipal y
              limitada a aquellos servicios y/o actuaciones que no impliquen
              actos de autoridad. El 7 de noviembre de 2003 en Junta General
              -que se corresponde con el Pleno Municipal- y para dar respuesta a
              nuevas necesidades en la gestión de la empresa, se procede a la
              modificación de los Estatutos de la Sociedad, ampliando el objeto
              social y adecuando la denominación social a esta nueva realidad.
              Así se incorporan al objeto social gestiones urbanísticas y a
              titulo general “la promoción, gestión y explotación de
              cualesquiera de los bienes y servicios y actividades de
              competencia municipal”. La empresa pasa a denominarse Mogán
              Gestión Municipal, S.L. Estos acuerdos fueron formalizados
              públicamente el 18 de diciembre de 2003 ante el notario Don Eloy
              Cuesta Pracias. Al amparo de estos acuerdos se promueven desde la
              Corporación Municipal una serie de encomiendas entre las que
              enumeramos la elaboración del Plan General de Ordenación Urbana,
              el Mantenimiento de los Jardines Municipales, la construcción de
              la Guardería del Valle de Mogán y la Piscina de Arguineguín, el
              Bombeo de Aguas desde Playa de Mogán, La Reforma del Centro de Día
              del Barrio del Horno, la Ampliación del Centro Ocupacional, la
              Rehabilitación de la sede de la Concejalía de la igualdad de
              Género, …. Al mismo tiempo se adoptan una serie de iniciativas
              encaminadas a modernizar la gestión de la empresa: apertura de
              nuevas oficinas convenientemente equipadas, renovación de los
              equipos informáticos, impulso a los convenios con la Agencia
              Tributaria y Hacienda Canaria para el cobro fuera del término
              municipal, página web, convenios con terceras firmas para la
              actualización de la base de datos y altas catastrales.
            </Accordion>
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
          <Link
            href="/portal/organos-directivos"
            className="rounded-tl-3xl max-[400px]:px-4 px-6 py-2 min-h-[110px] flex justify-center items-center bg-[#4D74F9] hover:bg-[#5698FB] hover:scale-105 transition-all"
          >
            <p className="text-lg lg:text-[22px] text-center leading-[1.3] line-clamp-4 font-extrabold text-white">
              Órganos directivos
            </p>
          </Link>

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
            25/05/24
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
