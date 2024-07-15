import Accordion from "@/components/Accordion";
import CountDown from "@/components/CountDown";
import Caraousal from "@/components/HomePage/Caraousal.1";
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
    </>
  );
};

export default page;
