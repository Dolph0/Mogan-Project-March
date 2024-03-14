export default function MenuLink() {
  return (
    <div className="absolute z-30 top-10 max-sm:left-8 sm:right-20">
      <ul className="space-y-1">
        <li className="relative group ">
          <span className="uppercase cursor-pointer text-white font-bold text-xl lg:text-2xl">
            SERVICIOS
          </span>
          <ul className="px-6 w-[180px] py-4 group-hover:translate-y-0 translate-y-6 group-hover:opacity-100 group-hover:visible invisible opacity-0 transition-all duration-200 bg-brand-gray absolute top-full z-40 max-sm:left-0 sm:right-0">
            <li>
              <a
                href="#"
                className="inline-block text-xs text-brand-blue hover:underline"
              >
                Anúnciate en Mogán
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-block text-xs text-brand-blue hover:underline"
              >
                Vales-tiempo clientes
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-block text-xs text-brand-blue hover:underline"
              >
                Playlist para conducir
              </a>
            </li>
          </ul>
        </li>
        <li className="relative group ">
          <span className="uppercase cursor-pointer text-white font-bold text-xl lg:text-2xl">
            PRODUCTOS
          </span>
          <ul className="px-6 w-[180px] py-4 group-hover:translate-y-0 translate-y-6 group-hover:opacity-100 group-hover:visible invisible opacity-0 transition-all duration-200 bg-brand-gray absolute top-full z-40 max-sm:left-0 sm:right-0">
            <li>
              <a
                href="#"
                className="inline-block text-xs text-brand-blue hover:underline"
              >
                Reservas
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-block text-xs text-brand-blue hover:underline"
              >
                Abonos
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-block text-xs text-brand-blue hover:underline"
              >
                Estancias
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
