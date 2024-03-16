import barcode from "@/public/images/parking/driving/bar-code.png";
import spotify from "@/public/images/parking/driving/spotify.png";
import Image from "next/image";
export default function Playlist() {
  return (
    <section className="py-14 lg:py-24 xl:py-32 px-8">
      <div className="max-w-[1118px] mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-14 items-center justify-between">
          <div className="space-y-8">
            <div className="max-md:flex justify-center">
              <Image src={spotify} alt={"spotify"} />
            </div>
            <h2 className="text-2xl max-md:text-center md:text-3xl lg:text-[42px] font-extrabold !leading-[1.4] text-brand-blue">
              Con nosotros tienes un Playlist especial para cuando conduzcas
            </h2>
            <p className="text-[13px] sm:text-sm text-brand-blue pr-4">
              Explora una experiencia musical única en tus aventuras por la Gran
              Canaria al escanear el código QR proporcionado o accede a través
              del enlace de Spotify.
              <br />
              <br />
              Aquí tendrás canciones relajantes para disfrutar de los paisajes
              naturales hasta ritmos vibrantes que te acompañarán en tus
              exploraciones urbanas, tendrás la oportunidad de compartir y
              disfrutar de la banda sonora perfecta en cada uno de tus viajes
              por esta hermosa isla.
            </p>
            <div className="pt-10 sm:pt-3 max-md:flex max-md:justify-center ">
              <a
                href="#"
                className="inline-block px-5 py-2 rounded-md bg-brand-green font-extrabold text-white hover:bg-opacity-85 transition-all"
              >
                Accede a la Playlist
              </a>
            </div>
          </div>
          <div className="shrink-0 space-y-3 max-md:flex flex-col items-center">
            <Image className="max-md:w-[220px]" src={barcode} alt={"barcode"} />
            <p className="text-center text-[13px] text-brand-blue md:hidden">
              Escanéa esta QR para redirigirte a Spotify
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
