import info from "@/public/images/parking/meter/info-img.png";
import Image from "next/image";
export default function Info() {
  return (
    <section className="px-8 pb-6 pt-12 lg:pb-12 lg:pt-24">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center">
          <div className="space-y-6">
            <h2 className="  font-extrabold max-[400px]:text-xl text-2xl md:text-[42px] leading-[1.2] text-brand-teal">
              Estacionamiento regulado
            </h2>
            <p className="text-sm text-dark max-[430px]:text-justify">
              En Mogán se pueden encontrar dos zonas principales de
              aparcarmiento, Zona Azul y aparcamiento interior. Ambas están
              claramente identificadas, mediante la pintura del pavimento
              o señales verticales que acotan las zonas reguladas.
              <br />
              <br />
              Con estas zonas lo que se pretende es el aprovechamiento al máximo
              de las plazas de aparcamiento, facilitando la rotación de
              vehículos. 
              <br />
              <br />
              En esta <strong className="text-brand-teal">
                {" "}
                zona azul
              </strong>{" "}
              pueden estacionar todos los vehículos, con el comprobante horario
              correspondiente emitido por el parquímetro, durante el tiempo
              máximo que indique la señal que en el caso de la Zona Azul es de 2
              horas.
            </p>
          </div>
          <div className="">
            <Image
              src={info}
              className="object-cover object-center"
              alt={"Info img"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
