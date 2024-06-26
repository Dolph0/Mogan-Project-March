import iconOne from "@/public/images/parking/home/icon-one.svg";
import iconThree from "@/public/images/parking/home/icon-three.svg";
import iconTwo from "@/public/images/parking/home/icon-two.svg";
import Image from "next/image";
import Link from "next/link";

export default function Articles() {
  return (
    <section className="max-[350px]:px-4 px-8 pt-7 pb-12 lg:pb-20">
      <div className="max-w-screen-xl mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
          <div className="space-y-5">
            <div className="flex gap-3 items-end ">
              <Image src={iconOne} alt={"icon one"} />
              <h3 className="text-2xl font-bold !leading-none text-brand-blue">
                Tarifas por minutos
              </h3>
            </div>
            <p className="text-sm text-brand-blue text-justify">
              Te presentamos nuestras tarifas estándar para estacionar en
              nuestro aparcamiento durante estancias de corta duración, ya sea
              para tus gestiones, actividades de ocio, compras o consultas.
              Hemos diseñado tarifas adaptadas específicamente para estas
              estancias más breves, pensando en tu comodidad y conveniencia.
            </p>
            {/* <Link href={"#"} className="text-xs text-brand-orange inline-block">
              Condiciones tarifas por minutos{" "}
            </Link> */}
            <div className="relative inline-block group">
              <p className="text-xs text-brand-orange inline-block">
                Condiciones tarifas por minutos
              </p>
              <div className="opacity-0 group-hover:opacity-100 absolute bg-[#EB6332] text-white text-xs rounded p-2 mt-2 w-64 transition-opacity duration-300">
                Tarifas aplicadas en el aparcamiento mediante contraraciones de
                bonos dirarios. Consulte al personal del aparcamiento o las
                máquinas automáticas para dicha contratación.
              </div>
            </div>
          </div>
          <div className="space-y-5">
            <div className="flex gap-3 items-end ">
              <Image src={iconTwo} alt={"icon two"} />
              <h3 className="text-2xl font-bold !leading-none text-brand-blue">
                Tarifas por días
              </h3>
            </div>
            <p className="text-sm text-brand-blue text-justify">
              Si planeas quedarte en nuestro estacionamiento por más de un día,
              te recomendamos considerar nuestras tarifas especiales. Ya sea que
              estés de vacaciones, de visita, haciendo turismo o planeando una
              estancia temporal, te resultará beneficioso aprovechar nuestras
              atractivas ofertas económicas al dejar tu vehículo con nosotros.
            </p>
            {/* <Link href={"#"} className="text-xs text-brand-orange inline-block">
              Condiciones tarifas por días
            </Link> */}
            <div className="relative inline-block group">
              <p className="text-xs text-brand-orange inline-block">
                Condiciones tarifas por días
              </p>
              <div className="opacity-0 group-hover:opacity-100 absolute bg-[#EB6332] text-white text-xs rounded p-2 mt-2 w-64 transition-opacity duration-300">
                Tarifas aplicadas directamente en el aparcamiento.
                <br />
                Estas tarifas pueden verse modificadas sin previo aviso.
              </div>
            </div>
          </div>
          <div className="space-y-5">
            <div className="flex gap-3 items-end ">
              <Image src={iconThree} alt={"icon three"} />
              <h3 className="text-2xl font-bold !leading-none text-brand-blue">
                Abonos disponibles
              </h3>
            </div>
            <p className="text-sm text-brand-blue text-justify">
              Si vives, estudias o trabajas en el zona, ser abonado es lo mejor.
              Elige el abono que más se ajuste a tus necesidades de
              aparcamiento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
