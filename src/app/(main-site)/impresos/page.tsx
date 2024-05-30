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
            Descarga
          </h2>
          <p className="text-center text-brand-blue text-base sm:text-xl lg:text-2xl">
            Modelos e impresos
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-x-14 gap-y-12 sm:gap-y-28 pt-8  lg:pt-10 pb-10 sm:pb-20 xl:pb-40">
          <div className="flex justify-center items-center flex-col gap-3">
            <a href="/instancia_solicitud.pdf" download>
              <Image src="/pdf.png" alt={"pdf icon"} height="68" width="80" />
            </a>
            <p className="text-center text-[15px] text-brand-blue">
              Instancia solicitud
            </p>
          </div>
          <div className="flex justify-center items-center flex-col gap-3">
            <a href="/ModeloDeclaracion.pdf" download>
              <Image src="/pdf.png" alt={"pdf icon"} height="68" width="80" />
            </a>
            <p className="text-center text-[15px] text-brand-blue">
              Modelo de declaración-IIVTNU (Plusvalias)
            </p>
          </div>

          <div className="flex justify-center items-center flex-col gap-3">
            <a href="/correccióndedatos.pdf" download>
              <Image src="/pdf.png" alt={"pdf icon"} height="68" width="80" />
            </a>
            <p className="text-center text-[15px] text-brand-blue">
              Solicitud de corrección de datos
            </p>
          </div>
          <div className="flex justify-center items-center flex-col gap-3">
            <a href="/Formulario-domiciliacion-modificado.pdf" download>
              <Image src="/pdf.png" alt={"pdf icon"} height="68" width="80" />
            </a>
            <p className="text-center text-[15px] text-brand-blue">
              Formulario de domiciliación editable
            </p>
          </div>
          <div className="flex justify-center items-center flex-col gap-3">
            <a href="/OVTsolicitudadhesion.docx" download>
              <Image src="/pdf.png" alt={"pdf icon"} height="68" width="80" />
            </a>
            <p className="text-center text-[15px] text-brand-blue">
              OVT - Solicitud adhesión notificación electrónica
            </p>
          </div>
          <div className="flex justify-center items-center flex-col gap-3">
            <a href="/OVT-solicitud-renuncia.docx" download>
              <Image src="/pdf.png" alt={"pdf icon"} height="68" width="80" />
            </a>
            <p className="text-center text-[15px] text-brand-blue">
              OVT - Solicitud renuncia notificación electrónica
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
