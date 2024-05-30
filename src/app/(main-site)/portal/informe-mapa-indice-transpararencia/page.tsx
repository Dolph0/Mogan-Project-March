import Caraousal from "@/components/HomePage/Caraousal.1";
type Props = {};
const page = (props: Props) => {
  return (
    <div className="container mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
      <Caraousal />
      <div className="pt-12 pb-12 sm:pb-20 space-y-12 md:space-y-14 px-3 md:px-0 ">
        <div className="space-y-1">
          <h2 className="font-extrabold text-center text-xl sm:text-3xl lg:text-[42px] text-brand-blue">
            Acceso al informe, mapa <br />e índice de transparencia
          </h2>
        </div>

        <div>
          <iframe
            loading="lazy"
            className="w-full min-h-[500px]"
            src="https://transparenciacanarias.org/mapas-transparencia-canarias/"
          ></iframe>
        </div>

        <div className="pt-4 md:pt-20  md:pb-10">
          <p className="text-[10px] sm:text-base lg:text-lg text-black text-center">
            Fecha de la
            <strong> última modificación del portal de transparencia </strong>
            17/10/23
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
