import Caraousal from "@/components/HomePage/Caraousal.1";
import AvatarFour from "@/public/images/portal/avatar-4.png";
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
                Juana Teresa Bega Jiménez
              </h2>
              <p className="text-2xl text-brand-blue">Vocal</p>
            </div>
            <Image
              src={juntos}
              className="max-sm:size-10"
              alt={"juntos-por-mogan"}
            />
          </div>
          <article className="prose max-w-full prose-headings:mb-6  prose-li:my-1 prose-ul:pb-3 prose-p:!leading-[1.6]  prose-li:!leading-[1.6] prose-p:text-sm md:prose-p:text-2xl pt-6 prose-h4:text-base  md:prose-h4:text-2xl prose-li:text-sm md:prose-li:text-2xl  prose-li:marker:text-black text-black">
            <p>
              <strong>Rango:</strong> Quinto Teniente de Alcalde
            </p>
            <p>
              <strong>Cargo:</strong> Patrimonio, OAC y Transparencia
            </p>
            <h4>Estudios</h4>
            <ul>
              <li>Curso Informativa 2019-2020</li>
            </ul>
            <h4>Formación Académica</h4>
            <ul>
              <li>
                Formación Profesional 2. Técnico Administrativo Comercial.
                I.F.P. San Nicolás de Tolentino. Año 1993
              </li>
            </ul>
            <h4>Experiencia Laboral</h4>
            <ul>
              <li>1994-2008: Notaria Mogán</li>
              <li>2010-2023: Inmobiliaria Cardenas</li>
            </ul>
          </article>
        </div>
        <div className="shrink-0 w-[200px] h-[200px] relative">
          <Image
            src={AvatarFour}
            className="absolute inset-0 w-full h-full"
            alt={"avatar four"}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
