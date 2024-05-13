import Caraousal from "@/components/HomePage/Caraousal";
import AvatarOne from "@/public/images/portal/avatar-1.png";
import juntos from "@/public/images/portal/juntos-por-mogan.png";
import Image from "next/image";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="container mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
      <Caraousal />
      <div className="pt-12 pb-12 sm:pb-28 flex flex-col-reverse md:flex-row items-start gap-6  px-3 md:px-0 ">
        <div className="w-full">
          <div className="flex gap-3 items-start justify-between">
            <div className="">
              <h2 className="text-2xl sm:text-3xl lg:text-[42px] !leading-tight text-brand-blue font-extrabold">
                Juán Ernesto Hernández Cruz
              </h2>
              <p className="text-2xl text-brand-blue">Presidente</p>
            </div>
            <Image
              src={juntos}
              className="max-sm:size-10"
              alt={"juntos-por-mogan"}
            />
          </div>
          <article className="prose max-w-full prose-headings:mb-6  prose-li:my-1 prose-ul:pb-3 prose-p:!leading-[1.6]  prose-li:!leading-[1.6] prose-p:text-sm md:prose-p:text-2xl pt-6 prose-h4:text-base  md:prose-h4:text-2xl prose-li:text-sm md:prose-li:text-2xl  prose-li:marker:text-black text-black">
            <p>
              <strong>Rango:</strong> Segundo Teniente de Alcalde
            </p>
            <p>
              <strong>Cargo:</strong> Teniente de Alcalde del Área de Gobierno
              de Medio Ambiente, Servicios Públicos, Obras Públicas y
              Embellecimiento
            </p>
            <h4>Experiencia Profesional</h4>
            <ul>
              <li>
                Concejal Obras Públicas, Festejos, Desarrollo Rural y Medio
                Ambiente.
              </li>
              <li>Ayuntamiento de Mogán 2015- en activo.</li>
              <li>
                Auxiliar Administrativo. Hermanos Santana Cazorla, S.L.
                1997-2003 y 2004-2015.
              </li>
              <li>
                Auxiliar Administrativo. Asesoría Sergio Ramírez Mena.
                “Arguineguin” 1995-1996.
              </li>
              <li>
                Auxiliar Administrativo. Asesoría Seven Island Consulting, S.L..
                “Tablero de Maspalomas” 1994-1995.
              </li>
            </ul>
            <h4>Formación Académica</h4>
            <ul>
              <li>
                Formación Profesional 2. Técnico Administrativo Comercial.
                I.F.P. San Nicolás de Tolentino. Año 1993
              </li>
            </ul>
            <h4>Idiomas:</h4>
            <ul>
              <li> Inglés. Nivel Básico.</li>
            </ul>
            <h4>Otros Datos de Interés</h4>
            <ul>
              <li>Carné de conducir tipo B</li>
              <li> Vehículo propio</li>
            </ul>
          </article>
        </div>
        <div className="shrink-0 w-[200px] h-[200px] relative">
          <Image
            src={AvatarOne}
            className="absolute inset-0 w-full h-full"
            alt={"avatar one"}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
