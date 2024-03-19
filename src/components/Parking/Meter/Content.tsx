import blogImgOne from "@/public/images/parking/meter/blog-img-1.png";
import blogImgTwo from "@/public/images/parking/meter/blog-img-2.png";
import Image from "next/image";
export default function Content() {
  return (
    <section className="px-8 py-12 sm:py-6">
      <div className="max-w-screen-xl mx-auto space-y-20 md:space-y-12">
        <div className="grid grid-cols-1  md:grid-cols-2">
          <div className="relative">
            <div className="absolute inset-0 w-full h-full bg-brand-teal/40">
              <span className="sr-only">overlay</span>
            </div>
            <Image
              src={blogImgOne}
              className="object-cover h-full object-center w-full"
              alt={"Blog Img"}
            />
          </div>
          <div className="space-y-3 pt-6 sm:pt-8 sm:pl-8 xl:pl-20 sm:pr-8 xl:pr-28">
            <h2 className="font-extrabold max-[400px]:text-xl text-2xl md:text-3xl lg:text-[42px] !leading-[1.3] text-brand-teal">
              Pagos infracciones
            </h2>
            <p className="text-sm text-dark max-[430px]:text-justify min-h-[80px] sm:min-h-[100px]">
              Si te has excedido en tiempo y tienes que pagar una multa de la
              zona azul, puedes hacerlo en el propio parquímetro o directamente
              desde nuestra web ¡Fácil, rápido y cómodo!
            </p>
            <div className="flex justify-end pt-3 sm:pt-4">
              <a
                href="#"
                className="w-[170px] h-[37px] border border-brand-teal-light rounded-md text-white font-bold bg-brand-teal flex justify-center items-center hover:bg-opacity-85 transition-all"
              >
                Pagos
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-2">
          <div className="relative">
            <div className="absolute inset-0 w-full h-full bg-brand-teal/40">
              <span className="sr-only">overlay</span>
            </div>
            <Image
              src={blogImgTwo}
              className="object-cover h-full object-center w-full"
              alt={"Blog Img"}
            />
          </div>
          <div className="space-y-3 pt-6 sm:pt-8 sm:pl-8 xl:pl-20 sm:pr-8 xl:pr-28">
            <h2 className="font-extrabold max-[400px]:text-xl text-2xl md:text-3xl lg:text-[42px] !leading-[1.3] text-brand-teal">
              Publicidad exterior
            </h2>
            <p className="text-sm text-dark max-[430px]:text-justify min-h-[80px] sm:min-h-[100px]">
              ¿Quieres que te vean a pié de calle o en áreas transitables?
              <br />
              <br />
              Coloca tu publicidad en uno de los laterales reservados para este
              espacio en los parquímetros de Mogán y atrapa todas las miradas.
            </p>
            <div className="flex justify-end pt-3 sm:pt-4">
              <a
                href="#"
                className="w-[170px] h-[37px] border border-brand-teal-light rounded-md text-white font-bold bg-brand-teal flex justify-center items-center hover:bg-opacity-85 transition-all"
              >
                Información
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
