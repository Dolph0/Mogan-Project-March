import Caraousal from "@/components/HomePage/Caraousal";
import avatar from "@/public/images/portal/avatar-7.png";
import Image from "next/image";
type Props = {};
const page = (props: Props) => {
  return (
    <div className="container mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
      <Caraousal />
      <div className="pt-12 pb-12 sm:pb-20 space-y-12 md:space-y-14 px-3 md:px-0 max-w-[865px] mx-auto ">
        <div className="space-y-1 md:pb-6">
          <h2 className="font-extrabold text-center text-xl sm:text-3xl lg:text-[42px] text-brand-blue">
            Personal libre nombramiento y confianza
          </h2>
        </div>

        <div className="md:py-10 lg:space-y-20 flex flex-col-reverse md:flex-row gap-8 lg:gap-12 items-center md:justify-between md:items-start">
          <div className="space-y-1">
            <h3 className="font-extrabold text-center md:text-left text-xl sm:text-3xl lg:text-[42px] text-brand-blue">
              Eduardo Álamo Perera
            </h3>
            <h5 className="text-base md:text-xl lg:text-2xl text-center md:text-left">
              Gerente
            </h5>
            <p className="pt-4 md:pt-10 text-sm text-center md:text-left sm:text-base lg:text-lg max-w-[540px]">
              Escribir palabras del gerente Escribir palabras del
              gerenteEscribir palabras del gerenteEscribir palabras del
              gerenteEscribir palabras del gerenteEscribir palabras del
              gerenteEscribir palabras del gerenteEscribir palabras del
              gerenteEscribir palabras del gerenteEscribir palabras del gerente.
            </p>
          </div>
          <div className="shrink-0 w-[150px] md:w-[250px]">
            <Image src={avatar} alt={"avatar"} />
          </div>
        </div>

        <div className="pt-4 md:pt-20  md:pb-10">
          <p className="text-[10px] sm:text-base lg:text-lg text-black text-center">
            Fecha de la
            <strong> última modificación del portal de transparencia </strong>
            17/10/23
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
