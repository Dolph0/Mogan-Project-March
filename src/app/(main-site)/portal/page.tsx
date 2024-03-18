import Accordion from "@/components/Accordion";
import Caraousal from "@/components/HomePage/Caraousal";
type Props = {};
const page = (props: Props) => {
  return (
    <div className="container mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
      <Caraousal />
      <div className="pt-12 pb-12 sm:pb-20 space-y-8">
        <div className="space-y-1">
          <h2 className="font-extrabold text-center text-3xl lg:text-[42px] text-brand-blue">
            Portal de transparencia
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-6 lg:pt-16">
          <div className="md:col-span-7  ">
            <p>
              Mogan Gestión Municipal pone a disposición de la ciudadanía este
              Portal de Transparencia para que acceda a la información pública
              de forma fácil y sencilla. La ciudadanía tiene derecho a saber y a
              través de este Portal se garantiza el mismo, fomentando de esta
              forma la participación ciudadana y la colaboración en la gestión
              de los asuntos públicos.
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="border-y divide-y divide-brand-teal border-brand-teal">
              <Accordion title="Constitución">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis illum, exercitationem neque dolores corporis animi
                laudantium modi magnam. Sequi, distinctio! Debitis recusandae
                nesciunt architecto. Perferendis numquam consectetur minima nemo
                asperiores!
              </Accordion>
              <Accordion title="Capital Social">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis illum, exercitationem neque dolores corporis animi
                laudantium modi magnam. Sequi, distinctio! Debitis recusandae
                nesciunt architecto. Perferendis numquam consectetur minima nemo
                asperiores!
              </Accordion>
              <Accordion title="Objetivo Social y funciones">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis illum, exercitationem neque dolores corporis animi
                laudantium modi magnam. Sequi, distinctio! Debitis recusandae
                nesciunt architecto. Perferendis numquam consectetur minima nemo
                asperiores!
              </Accordion>
            </div>
          </div>
        </div>
        <div className="pt-6 lg:pt-14 grid gap-4 sm:gap-8 grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          <div className="rounded-tl-3xl px-6 py-2 min-h-[110px] flex justify-center items-center bg-[#4D74F9]">
            <p className="text-lg lg:text-[22px] text-center leading-[1.3] line-clamp-4 font-extrabold text-white">
              Información Institucional
            </p>
          </div>
          <div className="rounded-tl-3xl px-6 py-2 min-h-[110px] flex justify-center items-center bg-[#4D74F9]">
            <p className="text-lg lg:text-[22px] text-center leading-[1.3] line-clamp-4 font-extrabold text-white">
              Órganos directivos
            </p>
          </div>
          <div className="rounded-tl-3xl px-6 py-2 min-h-[110px] flex justify-center items-center bg-[#4D74F9]">
            <p className="text-lg lg:text-[22px] text-center leading-[1.3] line-clamp-4 font-extrabold text-white">
              Contratos y encomiendas
            </p>
          </div>
          <div className="rounded-tl-3xl px-6 py-2 min-h-[110px] flex justify-center items-center bg-[#5698FB]">
            <p className="text-lg lg:text-[22px] text-center leading-[1.3] line-clamp-4 font-extrabold text-white">
              Empleados
            </p>
          </div>
          <div className="rounded-tl-3xl px-6 py-2 min-h-[110px] flex justify-center items-center bg-[#5698FB]">
            <p className="text-lg lg:text-[22px] text-center leading-[1.3] line-clamp-4 font-extrabold text-white">
              Retribuciones
            </p>
          </div>
          <div className="rounded-tl-3xl px-6 py-2 min-h-[110px] flex justify-center items-center bg-[#5698FB]">
            <p className="text-lg lg:text-[22px] text-center leading-[1.3] line-clamp-4 font-extrabold text-white">
              Economía y contabilidad
            </p>
          </div>
          <div className="rounded-tl-3xl px-6 py-2 min-h-[110px] flex justify-center items-center bg-[#5698FB]">
            <p className="text-lg lg:text-[22px] text-center leading-[1.3] line-clamp-4 font-extrabold text-white">
              Personal libre nombramiento y confianza
            </p>
          </div>
          <div className="rounded-tl-3xl px-6 py-2 min-h-[110px] flex justify-center items-center bg-[#5698FB]">
            <p className="text-lg lg:text-[22px] text-center leading-[1.3] line-clamp-4 font-extrabold text-white">
              Acceso a la información
            </p>
          </div>
          <div className="rounded-tl-3xl px-6 py-2 min-h-[110px] flex justify-center items-center bg-[#5698FB]">
            <p className="text-lg lg:text-[22px] text-center leading-[1.3] line-clamp-4 font-extrabold text-white">
              Informe, mapa e índice de transparencia
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
