import CanariaTwo from "@/public/images/parking/advertise/Gran-Canaria-Arguineguin-2.png";
import Canaria from "@/public/images/parking/advertise/Gran-Canaria-Arguineguin.png";
import Image from "next/image";
export default function Info() {
  return (
    <section className="py-14 sm:py-24 px-8">
      <div className="max-w-screen-xl mx-auto space-y-12 sm:space-y-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-14  xl:px-10">
          <div className="rounded-tl-3xl rounded-br-3xl overflow-hidden bg-brand-orange">
            <div className="relative min-h-[170px] sm:min-h-[374px] w-full">
              <Image
                src={Canaria}
                className="object-cover object-center"
                alt={"video imag"}
                fill
              />
            </div>
            <div className="pt-5 sm:pt-8 pb-8 sm:pb-12 px-7 xl:px-10 space-y-4 ">
              <h3 className="font-extrabold text-base sm:text-3xl lg:text-[42px] leading-[1.2] text-white ">
                Cartelería Interior
              </h3>
              <h5 className="font-bold text-white text-xs sm:text-sm">
                Maximiza el impacto de tu audiencia anúnciante en nuestro
                parking.
              </h5>
              <p className="text-white text-[11px] sm:text-sm">
                Una solución de cartelería sencilla, rápida y con los mejores
                precios para llegar a tu cliente potencial en zonas
                estrategicamentes transistas de neustro parking. Impacto 100%.
                <br />
                <br />
                Rellena nuestro formulario de contacto para contratar publicidad
                física en el parking de Mogán y contactaremos lo antes posibe
                para darte toda la información.
              </p>
            </div>
          </div>
          <div className="rounded-tl-3xl rounded-br-3xl overflow-hidden bg-brand-orange">
            <div className="relative min-h-[170px] sm:min-h-[374px] w-full">
              <Image
                src={CanariaTwo}
                className="object-cover object-center"
                alt={"video imag"}
                fill
              />
            </div>
            <div className="pt-5 sm:pt-8 pb-8 sm:pb-12 px-7 xl:px-10 space-y-4  ">
              <h3 className="font-extrabold text-base sm:text-3xl lg:text-[42px] leading-[1.2] text-white ">
                QR Ticket Parking
              </h3>
              <h5 className="font-bold text-white text-xs sm:text-sm">
                Conecta con tu audiencia directamente desde su dispositivo.
              </h5>
              <p className="text-white text-[11px] sm:text-sm">
                Amplía la visibilidad de tus anuncios mediante la
                geolocalización y ofrece a tu audiencia la oportunidad de
                explorar tus promociones y obtener descuentos exclusivos al
                escanear el código QR que se encuentra en el ticket de
                estacionamiento.
                <br />
                <br />
                Rellena nuestro formulario de contacto para contratar publicidad
                física en el parking de Mogán y contactaremos lo antes posibe
                para darte toda la información.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-[700px] mx-auto space-y-5">
          <h2 className="text-center font-extrabold text-2xl md:text-[42px] leading-[1.2] text-brand-blue">
            Campañas con impacto
          </h2>
          <p className="text-[11px] sm:text-sm text-dark text-center">
            <strong className="font-extrabold">
              Juntos podemos hacer grandes cosas
            </strong>
            . Alcanza a tu público objetivo en Mogán con la colaboración
            publicitaria de Gestiona Mogán, tanto en nuestra página web como en
            nuestros espacios publicitarios interiores del parking más
            internacional de Gran Canaria.
          </p>
        </div>
      </div>
    </section>
  );
}
