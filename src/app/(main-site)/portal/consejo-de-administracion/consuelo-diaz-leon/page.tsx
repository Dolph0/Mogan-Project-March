import Caraousal from "@/components/HomePage/Caraousal.1";
import AvatarTwo from "@/public/images/portal/avatar-2.png";
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
                Consuelo Díaz León
              </h2>
              <p className="text-2xl text-brand-blue">Vice-Presidenta</p>
            </div>
            <Image
              src={juntos}
              className="max-sm:size-10"
              alt={"juntos-por-mogan"}
            />
          </div>
          <article className="prose max-w-full prose-headings:mb-6  prose-li:my-1 prose-ul:pb-3 prose-p:!leading-[1.6]  prose-li:!leading-[1.6] prose-p:text-sm md:prose-p:text-2xl pt-6 prose-h4:text-base  md:prose-h4:text-2xl prose-li:text-sm md:prose-li:text-2xl  prose-li:marker:text-black text-black">
            <p>
              <strong>Rango:</strong> Concejal delegada.
            </p>
            <p>
              <strong>Cargo:</strong> Patrimonio Cultural, Archivo, Contratación
              y Estadística
            </p>
            <h4>Experiencia Profesional</h4>
            <ul>
              <li>Oficial de notaría.</li>
              <li>Notario José Domingo Fuertes Díaz, (1989 – 1990)</li>
              <li>
                Notario Juan Alfonso Cabello Cascajo, (Febrero 1990 – Julio
                1990)
              </li>
              <li>Notario Luis Moncholí Giner (1990 – 2007)</li>
              <li>Notaria Blanca Fátima Varela Barja (2007 – 2008)</li>
              <li>Notarios de Mogan-1 S.C.P (2008 – 2010)</li>
              <li>Notaria Julia del Carmen Segura Navarro (2010 – 2011)</li>
              <li>Notaría SEYMAD S.C.P (2011 – 2016)</li>
              <li>Notaría SEYMAD C.B (2016 -2019)</li>
            </ul>
            <h4>Formación</h4>
            <ul>
              <li>Bachiller superior, IES Támara (1981 – 1985)</li>
            </ul>
          </article>
        </div>
        <div className="shrink-0 w-[200px] h-[200px] relative">
          <Image
            src={AvatarTwo}
            className="absolute inset-0 w-full h-full"
            alt={"avatar two"}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
