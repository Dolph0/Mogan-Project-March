import Caraousal from "@/components/HomePage/Caraousal";
import AvatarThree from "@/public/images/portal/avatar-3.png";
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
                Josué Hernández Delgado
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
              <strong>Rango:</strong> Concejal delegado
            </p>
            <p>
              <strong>Cargo:</strong> Participación Ciudadana, Universidad
              Popular, Comercio y Embellecimiento.
            </p>
            <h4>Estudios</h4>
            <ul>
              <li>ESO</li>
              <li>Curso en Peluquería y asesoría de imagen personal</li>
              <li>Curso de estilismo masculino con Babera</li>
            </ul>
            <h4>Experiencia Laboral</h4>
            <ul>
              <li>2007-2016: Peluquero por cuenta Ajena</li>
              <li>2016-Actual: Peluquero Autónomo</li>
            </ul>
          </article>
        </div>
        <div className="shrink-0 w-[200px] h-[200px] relative">
          <Image
            src={AvatarThree}
            className="absolute inset-0 w-full h-full"
            alt={"avatar three"}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
