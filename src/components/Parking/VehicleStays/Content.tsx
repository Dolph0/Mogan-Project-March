import Accordion from "@/components/Accordion";
import imageOne from "@/public/images/parking/vehicle-stays/image-1.png";
import imageTwo from "@/public/images/parking/vehicle-stays/image-2.png";
import imageThree from "@/public/images/parking/vehicle-stays/image-3.png";
import imageFour from "@/public/images/parking/vehicle-stays/image-4.png";
import Image from "next/image";
export default function Content() {
  return (
    <section className="px-4 py-12 lg:py-24">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-16 lg:gap-14">
          <div className="space-y-3">
            <h3 className="font-bold text-xl lg:text-2xl text-brand-blue">
              Coches
            </h3>
            <Image
              src={imageOne}
              className="object-cover object-center min-h-[330px] rounded-3xl w-full"
              alt={"image one"}
            />
            <div className="border-y divide-y divide-brand-teal border-brand-teal">
              <Accordion title="Reservas">
                Reserva tu plaza y no te preocupes de dónde estacionar cuando
                vayas a realzar tus gestiones, disfrutar de la playa o de
                vacaciones.
              </Accordion>
              <Accordion title="Estancias de rotación">
                Tienes <strong>tarifas para aparcar tu vehículo</strong> desde
                0,0167 €
                <br />
                <br />
                Las tarifas están expuestas de forma visible para toods los
                usuarios del parking.
                <br />
                <br />
                *Consulta nuestras tarifas.
              </Accordion>
              <Accordion title="Abonos">
                Dispones de abonos diarios laborales, noctunos e incluso
                anuales.
                <br />
                <br />
                Las tarifas están expuestas de firma visible para todos los
                usuarios en las instalaciones o en nuestra web.
                <br />
                <br />
                *Consultas nuestras tarifas.
              </Accordion>
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="font-bold text-xl lg:text-2xl text-brand-blue">
              Motos
            </h3>
            <Image
              src={imageTwo}
              className="object-cover object-center min-h-[330px] rounded-3xl w-full"
              alt={"image two"}
            />
            <div className="border-y divide-y divide-brand-teal border-brand-teal">
              <Accordion title="Reservas">
                Puedes reservar plaza de parking para tu moto.
                <br />
                <br />
                Las tarifas están expuestas de firma visibles para todos los
                usuarios del parking.
                <br />
                <br />
                *Consulta nuestras tarifas
              </Accordion>
              <Accordion title="Estancias de rotación">
                Tienes <strong>tarifas para aparcar tu vehículo</strong> desde
                0,0167 €
                <br />
                <br />
                Las tarifas están expuestas de forma visible para toods los
                usuarios del parking.
                <br />
                <br />
                *Consulta nuestras tarifas.
              </Accordion>
              <Accordion title="Abonos">
                Si deseas dejar tu moto resguardada, vigilada y cerca de tu
                trabajo o vivienda, te recomendamos contratar tu abono.
                <br />
                <br />
                *Consulta nuestras tarifas.
              </Accordion>
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="font-bold text-xl lg:text-2xl text-brand-blue">
              Estación de carga
            </h3>
            <Image
              src={imageThree}
              className="object-cover object-center min-h-[330px] rounded-3xl w-full"
              alt={"image three"}
            />
            <div className="border-y divide-y divide-brand-teal border-brand-teal">
              <Accordion title="Punto ECO">
                xxxxxxxxxxxxxxxx
                <br />
                <br />
                *Consulta las tarifas de aparcamiento.
              </Accordion>
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="font-bold text-xl lg:text-2xl text-brand-blue">
              Bicicletas
            </h3>
            <Image
              src={imageFour}
              className="object-cover object-center min-h-[330px] rounded-3xl w-full"
              alt={"image four"}
            />
            <div className="border-y divide-y divide-brand-teal border-brand-teal">
              <Accordion title="Estancias">
                Puedes aparcar tu bicicleta con tu abono.
                <br />
                <br />
                Dispones de una zona habilitada para aparcar tu bicicleta en
                nuestra zona cubierta del parking.
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
