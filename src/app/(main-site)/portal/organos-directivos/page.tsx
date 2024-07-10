import Caraousal from "@/components/HomePage/Caraousal.1";
import Link from "next/link";

type Props = {};
const Page = (props: Props) => {
  return (
    <div className="container mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
      <Caraousal />
      <div className="pt-12 pb-5 sm:pb-8 space-y-6 md:space-y-7 px-3 md:px-0 max-w-[865px] mx-auto">
        <div className="space-y-1 md:pb-3">
          <h2 className="font-extrabold text-center text-xl sm:text-3xl lg:text-[42px] text-brand-blue">
            Órganos directivos
          </h2>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center md:flex-row flex-col my-8 space-y-12 md:space-y-0 md:space-x-12 pb-20">
        <div className="flex flex-col items-center space-y-2">
          <Link
            href="https://transparencia.mogan.es/transparencia-institucional-organ-oldizativa-y-personal/organigrama-del-ayuntamiento/"
            className=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/junta.svg"
              alt="Image 1"
              className="w-32 h-32 sm:w-48 sm:h-48"
            />
            <h4 className="font-extrabold text-center text-sm sm:text-lg lg:text-2xl text-brand-blue pt-3">
              Junta General
            </h4>
          </Link>
          <div className="flex space-x-2 pt-2 z-50">
            <a href="/Juntos-por-Mogan.pdf" download>
              <img src="/pdf.svg" alt="PDF" className="w-12 h-12" />
            </a>
            <a href="/Juntos-por-Mogan.docx" download>
              <img src="/word.svg" alt="Word" className="w-12 h-12" />
            </a>
            <a href="/Juntos-por-Mogan.odt" download>
              <img src="/odt.svg" alt="ODT" className="w-12 h-12" />
            </a>
          </div>
        </div>
        <div className="relative group flex flex-col items-center space-y-2">
          <div className="flex flex-col items-center space-y-2">
            <img
              src="/consejo.svg"
              alt="Image 2"
              className="w-32 h-32 sm:w-48 sm:h-48"
            />
            <h4 className="font-extrabold text-center text-sm sm:text-lg lg:text-2xl text-brand-blue pt-3">
              Consejo de Administración
            </h4>
            <div className="flex space-x-2 pt-2 z-50">
              <a href="/NUESTRO-CONSEJO-DE-ADMINISTRACION.pdf" download>
                <img src="/pdf.svg" alt="PDF" className="w-12 h-12" />
              </a>
              <a href="/NUESTRO-CONSEJO-DE-ADMINISTRACION.docx" download>
                <img src="/word.svg" alt="Word" className="w-12 h-12" />
              </a>
              <a href="/NUESTRO-CONSEJO-DE-ADMINISTRACION.odt" download>
                <img src="/odt.svg" alt="ODT" className="w-12 h-12" />
              </a>
            </div>
          </div>
          <ul className="absolute lg:left-full lg:top-0 lg:mt-0 right-0 w-full max-md:w-[300px] top-full shadow-md opacity-0 group-hover:opacity-100 invisible group-hover:visible rounded p-1 lg:translate-x-10 lg:translate-y-0 translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 divide-y bg-white">
            <li>
              <Link
                className="py-2 inline-block font-medium text-gray-500 px-3 hover:bg-slate-100 text-sm"
                href="/portal/consejo-de-administracion/juan-ernesto-hernandez-cruz-presidente/"
              >
                Juan Ernesto Hernández Cruz (Presidente)
              </Link>
            </li>
            <li>
              <Link
                className="py-2 inline-block font-medium text-gray-500 px-3 hover:bg-slate-100 text-sm"
                href="/portal/consejo-de-administracion/consuelo-diaz-leon/"
              >
                Dª Consuelo Díaz León (Vice-presidenta)
              </Link>
            </li>
            <li>
              <Link
                className="py-2 inline-block font-medium text-gray-500 px-3 hover:bg-slate-100 text-sm"
                href="/portal/consejo-de-administracion/da-yaiza-de-la-soledad-llovell-hernandezvocal/"
              >
                Dª Yaiza de la Soledad Llovell Hernández (Vocal)
              </Link>
            </li>
            <li>
              <Link
                className="py-2 inline-block font-medium text-gray-500 px-3 hover:bg-slate-100 text-sm"
                href="/portal/consejo-de-administracion/do-josue-hernandez-delgado-vocal/"
              >
                Dº Josué Hernández Delgado (Vocal)
              </Link>
            </li>
            <li>
              <Link
                className="py-2 inline-block font-medium text-gray-500 px-3 hover:bg-slate-100 text-sm"
                href="/portal/consejo-de-administracion/da-juana-teresa-vega-jimenez-vocal/"
              >
                Dª Juana Teresa Vega Jiménez (Vocal)
              </Link>
            </li>
            <li>
              <Link
                className="py-2 inline-block font-medium text-gray-500 px-3 hover:bg-slate-100 text-sm"
                href="/portal/consejo-de-administracion/do-neftali-de-jesus-sabina-deniz-vocal/"
              >
                Dº Neftalí de Jesús Sabina Déniz (Vocal)
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <Link
            href="/portal/personal-libre-nombramiento-y-confianza"
            className=""
          >
            <img
              src="/personas.svg"
              alt="Image 3"
              className="w-32 h-32 sm:w-48 sm:h-48"
            />
            <h4 className="font-extrabold text-center text-sm sm:text-lg lg:text-2xl text-brand-blue leading-tight pt-3">
              Personas que <br /> Prestan Servicios
            </h4>
          </Link>
          <div className="flex space-x-2 pt-2 z-50">
            <a href="/PERSONAL-LIBRE-NOMBRAMIENTO-Y-CONFIAZA.pdf" download>
              <img src="/pdf.svg" alt="PDF" className="w-12 h-12" />
            </a>
            <a href="/PERSONAL-LIBRE-NOMBRAMIENTO-Y-CONFIAZA.docx" download>
              <img src="/word.svg" alt="Word" className="w-12 h-12" />
            </a>
            <a href="/PERSONAL-LIBRE-NOMBRAMIENTO-Y-CONFIAZA.odt" download>
              <img src="/odt.svg" alt="ODT" className="w-12 h-12" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
