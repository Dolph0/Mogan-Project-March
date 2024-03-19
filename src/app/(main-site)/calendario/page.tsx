import Caraousal from "@/components/HomePage/Caraousal";
import Image from "next/image";
type Props = {};
const page = (props: Props) => {
  return (
    <div className="container mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
      <Caraousal />
      <div className="pt-12 pb-12 sm:pb-20 space-y-6">
        <div className="space-y-1">
          <h2 className="font-extrabold text-center text-3xl lg:text-[42px] text-brand-blue">
            Calendario Fiscal 2024
          </h2>
          <p className="text-center text-brand-blue text-xl lg:text-2xl">
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
          <div className="md:col-span-5 max-md:flex justify-center">
            <Image
              src="/calender.png"
              alt={"service icon"}
              height="500"
              width="495"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
