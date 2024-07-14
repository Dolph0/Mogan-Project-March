import Accordion from "@/components/Accordion";
import CountDown from "@/components/CountDown";
import Caraousal from "@/components/HomePage/Caraousal.1";
import PopUp from "@/components/PopUp";
import Tabs from "@/components/Tabs/Tabs";
import { datas } from "../../datas";
type Props = {};
const page = ({ params }: { params: { id: number } }) => {
  const data = datas.find((data: any) => data.id === +params.id);

  return (
    <>
      <div className="container mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <Caraousal />
        <div className="pt-12 pb-12 sm:pb-20 space-y-12 md:space-y-14 px-4 md:px-8">
          <div className="space-y-3">
            <h2 className="font-extrabold text-center text-xl sm:text-3xl   text-brand-blue !leading-relaxed">
              {data.title}
            </h2>
            <div className="text-dark/80 text-center text-base">
              <article
                dangerouslySetInnerHTML={{
                  __html: data.details,
                }}
              />
            </div>
            <div className="space-y-12  pt-6">
              <div className="space-y-6">
                <h3 className="text-brand-blue text-center text-xl  font-semibold">
                  {data.counter.title}
                </h3>
                <div className="space-y-6">
                  <CountDown targetDate={data.counter.target_date} />
                </div>
                <div className="py-12">
                  <Tabs items={data?.tabitems} />
                </div>
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
        </div>
      </div>

      <PopUp classes="bottom-0 right-0">
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

          <h3 className="pb-4 text-2xl text-dark text-center">
            PRUEBA ESCRITA del próximo 11 de julio de 2024 <br />
            En el “Edificio Polivalente de Arguineguin” situado en la C/
            Damasco, en la cubierta del Parking subterráneo de Arguineguin.
            <br />
            <br />
            2º.- La PRUEBA ESCRITA será a las 10:00 am., del 11 de julio de
            2024, a la finalización de la misma se realizará la entrevista
            personal.
            <br />
            <br />
            3º.- NOTIFIQUESE la presente resolución al servicio y a la
            administración y publíquese en la página web y en el tablón de
            anuncios de la empresa Mogán Gestión Municipal, S.L (GESTIONA){" "}
          </h3>
        </div>
      </PopUp>
    </>
  );
};

export default page;
