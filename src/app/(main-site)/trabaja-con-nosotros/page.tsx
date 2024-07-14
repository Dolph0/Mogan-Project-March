import Accordion from "@/components/Accordion";
import CountDown from "@/components/CountDown";
import Caraousal from "@/components/HomePage/Caraousal.1";
import PopUp from "@/components/PopUp";
import Link from "next/link";
type Props = {};
const page = (props: Props) => {
  const targetDate = "2024-07-30T23:59:59";
  return (
    <>
      <div className="container mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <Caraousal />
        <div className="pt-12 pb-12 sm:pb-20 space-y-12 md:space-y-14 px-3 md:px-0 ">
          <div className="space-y-1">
            <h2 className="font-extrabold text-center text-xl sm:text-3xl lg:text-[42px] text-brand-blue">
              Procesos de selección activos
            </h2>
            <div className="space-y-12  pt-10">
              <div className="grid gap-10 grid-cols-2">
                <div className="">
                  <Link href="/trabaja-con-nosotros/details">
                    <img
                      className="w-full"
                      src="https://www.gestmogan.com/wp-content/uploads/2021/11/ofertadeempleo-300x157.jpeg"
                      alt="ofertadeempleo"
                    />
                  </Link>
                  <div className="pt-4 space-y-3 lg:pr-6">
                    <div className="space-y-0.5">
                      <Link href="/trabaja-con-nosotros/details">
                        <h2 className="uppercase text-lg font-semibold text-brand-blue leading-normal">
                          PROCEDIMIENTO DE SELECCIÓN DE PERSONAL MANTENIMIENTO 1
                          PLAZA CON PRIORIDAD PARA PERSONAS CON CERTIFICADO DE
                          DISCAPACIDAD*
                        </h2>
                      </Link>
                      <p className="text-sm text-dark/40">
                        junio 24, 2024 /// No hay comentarios
                      </p>
                    </div>
                    <p className="  text-dark/70 text-base">
                      PROCEDIMIENTO DE SELECCIÓN DE PERSONAL LABORAL INDEFINIDO
                      CATEGORÍA “PERSONAL DE MANTENIMIENTO”, CON PRIORIDAD PARA
                      PERSONAS CON CERTIFICADO DE DISCAPACIDAD* * En el caso de
                      que
                    </p>
                    <Link
                      href="/trabaja-con-nosotros/details"
                      className="inline-block text-brand-green hover:underline text-base"
                    >
                      Leer más »
                    </Link>
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="text-brand-blue text-center text-xl  font-semibold">
                    Plazo para presentación de documentación hasta el día 08 de
                    Julio de 2.024
                  </h3>
                  <div className="space-y-6">
                    <CountDown targetDate={targetDate} />
                    <p className="text-dark/80 text-center text-base">
                      El plazo ha sido cerrado, ya no se admitirán mas
                      solicitudes. Muchas gracias
                    </p>
                  </div>
                  <div className="border-y divide-y divide-brand-teal border-brand-teal">
                    <Accordion title="Publicación  lista provisional el los días siguientes al ultimo dia de plazo"></Accordion>
                    <Accordion title="plazo serán 5 diás a contar desde la fecha de publicación de la lista provisional">
                      – Sino se subsana en el tiempo establecido no se tendrá en
                      cuenta la nota del examen.
                    </Accordion>
                    <Accordion title='Publicación lista definitiva "No se concreta"'></Accordion>
                    <Accordion title="Prueba escrita y entrevista personal ">
                      La ENTREVISTA PERSONAL se realizará el mismo día a la
                      <br />
                      finalización de la prueba escrita
                    </Accordion>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PopUp classes="bottom-0 left-0">
        <div className="space-y-3 pt-8">
          <h3 className="text-[28px] font-medium leading-snug text-brand-orange text-center">
            AVISO IMPORTANTE
          </h3>
          <div className="flex justify-center">
            <img
              src="https://www.gestmogan.com/wp-content/uploads/2022/11/MOGAN-MARCA-Y-COMUNICACION-300x300.png"
              alt=""
              width="150"
              height="150"
            />
          </div>
          <h5 className="text-3xl text-brand-orange text-center pb-3">
            Proyecto común de fusión
          </h5>
          <p className="text-center text-base text-dark pb-3">
            Click en en enlace para acceder al documento
          </p>
          <p className="text-center text-base pb-6">
            <a
              className="text-brand-orange  hover:text-brand-maron  transition-all flex items-end gap-1.5 justify-center"
              href="https://www.gestmogan.com/wp-content/uploads/2024/05/InformeFusionTrabajadores.pdf"
            >
              Informe Fusion Trabajadores
              <img
                className="size-10 inline"
                src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png"
                alt="pdf"
              />
            </a>
          </p>
        </div>
      </PopUp>
    </>
  );
};

export default page;
