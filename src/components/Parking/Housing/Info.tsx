import info from "@/public/images/parking/housing/info-img.png";
import Image from "next/image";
export default function Info() {
  return (
    <section className="px-8 py-12 lg:py-20">
      <div className="max-w-screen-xl mx-auto space-y-10 sm:space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center xl:pr-24">
          <div className="space-y-2 sm:space-y-5">
            <h2 className="  font-extrabold max-[400px]:text-xl text-2xl md:text-[42px] leading-[1.2] text-brand-pink">
              Mogán, somos todos
            </h2>
            <h5 className="text-dark font-bold text-[15px] sm:text-xl">
              Próxima promoción, objetivo 2027
            </h5>
            <p className="text-sm text-dark max-[430px]:text-justify max-sm:pt-2">
              El Ayuntamiento de Mogán ha puesto en marcha su primer plan de
              vivienda que contempla la construcción de VPO.
              <br />
              <br />
              En Veneguera, la parcela cuenta con 1.266 metros cuadrados. Se
              ubica en la calle La Cardonera y enella se plantea la construcción
              de 20 viviendas con garaje. Por su parte, en el barrio de Motor
              Grande, concretamente en la calle Zaragoza, el terrero asciende a
              6.000 metros cuadrados, contemplándose 60 viviendas con plazas de
              estacionamiento.
              <br />
              <br />
              Por último, en El Horno, la parcela se encuentra en la calle
              Tajinaste, donde se levantarán 10 viviendas, también con garaje.
            </p>
          </div>
          <div className="">
            <Image
              src={info}
              className="object-cover object-center"
              alt={"Info img"}
            />
          </div>
        </div>
        <p className="sm:font-bold text-sm max-sm:justify-center">
          Proyectamos la construcción en los barrios{" "}
          <a href="#" className="text-brand-pink">
            siguientes barrios
          </a>{" "}
          con el objetivo que todos los vecinos y vecinas de Mogán tengan acceso
          a una vivienda digna.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0.5 sm:gap-4 xl:pr-24">
          <a
            href="#"
            className="w-full inline-block bg-brand-pink text-white font-bold text-xl text-left px-8 sm:text-center py-4 sm:py-6"
          >
            Motor grande
          </a>
          <a
            href="#"
            className="w-full inline-block bg-brand-pink text-white font-bold text-xl text-left px-8 sm:text-center py-4 sm:py-6"
          >
            Veneguera
          </a>
          <a
            href="#"
            className="w-full inline-block bg-brand-pink text-white font-bold text-xl text-left px-8 sm:text-center py-4 sm:py-6"
          >
            Arguineguín
          </a>
          <a
            href="#"
            className="w-full inline-block bg-brand-pink text-white font-bold text-xl text-left px-8 sm:text-center py-4 sm:py-6"
          >
            El Horno
          </a>
        </div>
        {/* <div className="sm:pt-6 space-y-4 xl:pr-24">
          <h2 className="  font-extrabold max-[400px]:text-xl text-2xl md:text-[42px] leading-[1.2] text-brand-pink">
            ¿Quién puede solicitar una vivienda?
          </h2>
          <h5 className="text-dark font-bold text-sm">
            Puedes solicitar una vivienda protegida en el siguiente caso:
          </h5>
          <article className="prose  max-sm:prose-p:text-justify max-w-full prose-li:marker:text-dark prose-ul:mt-0 prose-li:m-0 prose-p:my-4 prose-p:text-dark prose-li:text-dark prose-li:text-sm prose-p:text-sm prose-p:leading-[1.4]">
            <p>Debes ser mayor de edad.</p>
            <p className="!mb-0">
              Los ingresos ponderados de tu unidad familiar deben estar
              comprendidos en los siguientes intervalos de renta:
            </p>
            <ul>
              <li>
                Hasta 1,5 veces el IPREM para viviendas en régimen de alquiler.
              </li>
              <li>
                Hasta 2,5 veces el IPREM para viviendas en régimen de venta.
              </li>
            </ul>
            <p>No ser propietario o arrendatario de una vivienda protegida. </p>
            <p>
              No ser propietario o arrendatario de una vivienda libre, ni
              titular de un derecho real de uso y disfrute, o de opción de
              compra sobre la misma.
            </p>
            <p>
              En este último caso, debe tratarse de un derecho real inscrito en
              el registro correspondiente.
            </p>
            <p>
              El patrimonio de tu unidad familiar no puede superar el 50% del
              precio máximo de venta en primera transmisión de una vivienda
              protegida de promoción pública con una superficie útil de 68 m2.
            </p>
            <p>
              Debes haber residido ininterrumpidamente en la Comunidad Autónoma
              de Canarias con, al menos, siete años de antelación a la fecha de
              publicación del anuncio por el Instituto Canario de la Vivienda
              con las promociones de viviendas protegidas que vayan a ser objeto
              de adjudicación, o bien quince años cuando la residencia hubiese
              sido interrumpida.
            </p>
            <p>
              El titular de la unidad familiar debe residir o trabajar
              ininterrumpidamente en el municipio donde radica la vivienda
              protegida con, al menos, dos años de antelación a la fecha que,
              conforme al correspondiente anuncio, se exija el cumplimiento de
              requisitos.
            </p>
            <p>
              Si, además, entras en alguno de los cupos especiales para
              promoción de viviendas protegidas, que están establecidos
              legalmente, deberás cumplir también los requisitos específicos de
              cada uno de ellos.
            </p>
          </article>
        </div> */}
      </div>
    </section>
  );
}
