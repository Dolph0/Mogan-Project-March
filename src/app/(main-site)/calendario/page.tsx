import Caraousal from "@/components/HomePage/Caraousal.1";
import Image from "next/image";
type Props = {};
const page = (props: Props) => {
  return (
    <div className="container mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
      <Caraousal />
      <div className="pt-12 pb-12 sm:pb-20 space-y-6">
        <div className="space-y-1">
          <h2 className="font-extrabold text-center text-xl sm:text-3xl lg:text-[42px] text-brand-blue">
            Calendario Fiscal 2024
          </h2>
          <p className="text-center text-brand-blue text-base sm:text-xl lg:text-2xl">
            Consulta plazos de pagos voluntarios
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8  lg:pt-8">
          <div className="md:col-span-7 pt-6">
            <p>
              Asegúrate de tener toda la información necesaria sobre los plazos
              de pagos voluntarios para planificar tus finanzas de manera
              efectiva. La consulta de estos plazos te permitirá gestionar tus
              pagos de manera oportuna y evitar posibles inconvenientes.
              <br />
              <br />
              <strong>Consulta ahora mismo ¡Fácil, rápido y cómodo!</strong>
            </p>
          </div>
          {/* <div className="md:col-span-5 max-md:flex justify-center">
            <Image
              src="/calender.png"
              alt={"service icon"}
              height="500"
              width="495"
            />
          </div> */}

          <div className="relative md:col-span-5 max-md:flex justify-center">
            <div className="relative">
              <Image
                src="/calender.png"
                alt="service icon"
                height="500"
                width="495"
              />
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
                <a
                  href="/Calendario-Fiscal-2022.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className=" w-full h-full">
                    <span className="sr-only">Open Document 1</span>
                  </button>
                </a>
                <a
                  href="/Calendario-fiscal-2023.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className=" w-full h-full">
                    <span className="sr-only">Open Document 2</span>
                  </button>
                </a>
                <a
                  href="/CALENDARIO-FISCAL-2024.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className=" w-full h-full">
                    <span className="sr-only">Open Document 3</span>
                  </button>
                </a>
                <a
                  href="/document4.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className=" w-full h-full">
                    <span className="sr-only">Open Document 4</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
