import Accordion from "@/components/Accordion";
import CountDown from "@/components/CountDown";
import Caraousal from "@/components/HomePage/Caraousal.1";
import PopUp from "@/components/PopUp";
import Link from "next/link";
import { datas } from "./datas";
type Props = {};
const page = (props: Props) => {
  return (
    <>
      <div className="container mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <Caraousal />
        <div className="pt-12 pb-12 sm:pb-20 space-y-12 md:space-y-14 max-w-[1000px] mx-auto">
          <div className="space-y-1">
            <div className="space-y-2">
              <h2 className="font-extrabold text-center text-xl sm:text-3xl lg:text-[42px] text-brand-blue">
                Portal de empleo Mogán
              </h2>
              <p className="text-center text-2xl text-brand-blue">
                Procesos de selección activos
              </p>
            </div>
            <div className="space-y-12  pt-10">
              {datas.map((data) => (
                <div className="grid gap-10 grid-cols-2">
                  <div className="space-y-6">
                    <Link href={`/trabaja-con-nosotros/details/${data.id}`}>
                      <img
                        className="w-full rounded-3xl"
                        src={data.img_url}
                        alt="ofertadeempleo"
                      />
                    </Link>
                    <div className="space-y-5">
                      <CountDown targetDate={data.counter.target_date} />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-brand-blue text-left text-lg">
                      {data.counter.title}
                    </h3>
                    <div className="space-y-2">
                      <Link
                        href={`/trabaja-con-nosotros/details/${data.id}`}
                        className="inline-block"
                      >
                        <h2 className="uppercase text-2xl font-bold text-brand-blue leading-normal">
                          {data.title}
                        </h2>
                      </Link>
                      <p>
                        <Link
                          href={`/trabaja-con-nosotros/details/${data.id}`}
                          className="inline-block text-brand-blue hover:underline"
                        >
                          Leer más »
                        </Link>
                      </p>
                    </div>
                    <div className="bg-white pt-1">
                      <div className="border-y divide-y divide-brand-teal border-brand-teal">
                        {data.accordions.map((accordion) => (
                          <Accordion title={accordion.title}>
                            <article
                              dangerouslySetInnerHTML={{
                                __html: accordion.details,
                              }}
                            />
                          </Accordion>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
