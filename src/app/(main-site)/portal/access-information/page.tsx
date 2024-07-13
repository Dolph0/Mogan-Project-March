import Caraousal from "@/components/HomePage/Caraousal.1";
import ImageOne from "@/public/images/portal/image-1.png";
import ImageTwo from "@/public/images/portal/image-2.png";
import Image from "next/image";
import Link from "next/link";
import Accordion from "@/components/Accordion";
type Props = {};
const page = (props: Props) => {
  return (
    <div className="container mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
      <Caraousal />
      <div className="pt-12 pb-12 sm:pb-20 space-y-12 md:space-y-14 px-3 md:px-0 ">
        <div className="space-y-1">
          <h2 className="font-extrabold text-center text-xl sm:text-3xl lg:text-[42px] text-brand-blue">
            Acceso a la información
          </h2>
        </div>

        <div className="grid gap-14 grid-cols-1 md:grid-cols-2 ">
          <div className="space-y-6 md:space-y-3">
            <h2 className="text-base text-center md:text-left sm:text-lg md:text-xl lg:text-2xl font-extrabold text-brand-blue">
              Ejercicio al Derecho <br /> de Acceso a la Información
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-black">
              Cualquier persona, debidamente identificada, podrá ejercer su
              derecho de acceso a la información pública (artículo 105.(b) de la
              Constitución española, ley 19/2013 de 9 de diciembre BOE núm. 295,
              de 10 de diciembre de 2013 y ley 12/2014, de 26 de diciembre, de
              transparencia y acceso a la información pública de la comunidad
              autónomas de canarias). Se entiende por información pública los
              contenidos o documentos, cualquiera que sea su soporte o formato,
              que obren en poder de la administración de esta empresa y que
              hayan sido elaborados o adquiridos en el ejercicio de sus
              funciones.
              <br /> <br />
              CÓMO PRESENTAR UNA SOLICITUD DE ACCESO A INFORMACIÓN Para hacer
              efectivo este derecho, podrá iniciarse el trámite rellenando el
              modelo de solicitud en las dependencias de la administración de
              esta empresa, en la Avda. de la constitución 10, 35140 Mogán.
            </p>
          </div>
          <div className="space-y-14">
            <div className="space-y-6 md:space-y-3">
              <h2 className="text-base text-center md:text-left sm:text-lg md:text-xl lg:text-2xl font-extrabold text-brand-blue">
                Información sobre el acceso
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-black">
                Acceso a la información pública vía electrónica El procedimiento
                para presentar las solicitudes, los límites de acceso a la
                información, así como el régimen de impugnaciones cuando no se
                dé respuesta a las solicitudes se encuentra recogido en el sitio
                web de la empresa y/o portal de transparencia del Iltre. Ayto.
                de Mogán.
              </p>
            </div>
            <div className="space-y-6 md:space-y-3">
              <h2 className="text-base text-center md:text-left sm:text-lg md:text-xl lg:text-2xl font-extrabold text-brand-blue">
                Estadísticas de Acceso
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-black">
                No se disponen de estadísticas de solicitudes de acceso a la
                información
              </p>
            </div>
          </div>
        </div>
        <div className="grid gap-14 grid-cols-1 md:grid-cols-2 ">
          <div className="md:block hidden">
            <Image src={ImageOne} alt={"image one"} />
          </div>
          <div className="flex justify-center md:justify-start">
            <Image src={ImageOne} alt={"image two"} />
          </div>
        </div>
        <div className="grid gap-10 md:gap-14 grid-cols-1 md:grid-cols-2 ">
          <div className="">
            <h3 className="text-center md:text-left">
              <Link
                href="https://transparenciacanarias.org/"
                target="_blank"
                className="font-extrabold  text-base sm:text-xl lg:text-2xl text-brand-blue"
              >
                Enlace de Comisionado de Transparencia de Canarias
              </Link>
            </h3>
          </div>
          <div className="">
            <h3 className="text-center md:text-left">
              <Link
                href="https://transparenciacanarias.org/como-reclamar/"
                target="_blank"
                className="font-extrabold text-base sm:text-xl lg:text-2xl text-brand-blue"
              >
                Reclamaciones ante el Comisionado de Transparecnia de Canarias
              </Link>
            </h3>
          </div>
        </div>
        <div className="grid gap-10 md:gap-14 grid-cols-1 md:grid-cols-2 ">
          <div className="">
            <Image
              src={ImageTwo}
              className="max-md:mx-auto"
              alt={"image two"}
            />
            <h3 className="text-center md:text-left">
              <Link
                href="https://www.boe.es/buscar/act.php?id=BOE-A-2013-12887"
                target="_blank"
                className="font-extrabold  text-base sm:text-xl lg:text-2xl text-brand-blue"
              >
                Enlace al BOE
              </Link>
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-black  pt-3">
              JEFATURA DEL ESTADO (Ley Estatal de Transparencia) : Ley 19/2013,
              de 9 de diciembre, de transparencia, acceso a la información
              pública y buen gobierno.
            </p>
          </div>
          <div className="">
            <Image
              className="hidden md:block"
              src={ImageTwo}
              alt={"image two"}
            />
            <h3 className="text-center md:text-left">
              <Link
                href="https://www.boe.es/buscar/act.php?id=BOE-A-2013-12887"
                target="_blank"
                className="font-extrabold  text-base sm:text-xl lg:text-2xl text-brand-blue"
              >
                Enlace al BOE
              </Link>
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-black pt-3">
              JEFATURA DEL ESTADO (Ley Estatal de Transparencia) : Ley 19/2013,
              de 9 de diciembre, de transparencia, acceso a la información
              pública y buen gobierno.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-base text-center md:text-left sm:text-lg md:text-xl lg:text-2xl font-extrabold text-brand-blue">
            Informes anual de transparencia
          </h2>
          <div className="border-y divide-y divide-brand-teal border-brand-teal">
            <Accordion title="Año 2021"></Accordion>
            <Accordion title="Año 2022">
              <a
                href="/Informe_Resultado-de-la-evaluacion-del-grado-de-transparencia_2022.pdf"
                download
              >
                <p>
                  Informe_Resultado de la evaluación del grado de
                  transparencia_2022
                </p>
              </a>
              <br />
              <a
                href="/Resumen_Informe_Resultado-de-la-evaluacion-del-grado-de-transparencia2022.pdf"
                download
              >
                <p>
                  Resumen_Informe_Resultado de la evaluación del grado de
                  transparencia2022
                </p>
              </a>
            </Accordion>
          </div>
        </div>

        <div className="pt-4 md:pt-20  md:pb-10">
          <p className="text-[10px] sm:text-base lg:text-lg text-black text-center">
            Fecha de la
            <strong> última modificación del portal de transparencia </strong>
            25/05/24
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
