import Link from "next/link";
export default function MenuLink() {
  return (
    <div className="absolute z-30 top-10 max-sm:left-8 sm:right-20">
      <ul className="space-y-1">
        <li className="relative group ">
          <span className="uppercase cursor-pointer text-white font-bold text-lg sm:text-xl lg:text-2xl">
            SERVICIOS
          </span>
          <ul className="px-6 w-[180px] py-4 group-hover:translate-y-0 translate-y-6 group-hover:opacity-100 group-hover:visible invisible opacity-0 transition-all duration-200 bg-brand-gray absolute top-full z-40 max-sm:left-0 sm:right-0">
            <li>
              <Link
                href="/parking/advertise"
                className="inline-block text-xs text-brand-blue hover:underline"
              >
                Anúnciate en Mogán
              </Link>
            </li>
            <li>
              <Link
                href="/parking/time-vouchers"
                className="inline-block text-xs text-brand-blue hover:underline"
              >
                Vales-tiempo clientes
              </Link>
            </li>
            <li>
              <Link
                href="/parking/driving"
                className="inline-block text-xs text-brand-blue hover:underline"
              >
                Playlist para conducir
              </Link>
            </li>
          </ul>
        </li>
        <li className="relative group ">
          <span className="uppercase cursor-pointer text-white font-bold text-lg sm:text-xl lg:text-2xl">
            PRODUCTOS
          </span>
          <ul className="px-6 w-[180px] py-4 group-hover:translate-y-0 translate-y-6 group-hover:opacity-100 group-hover:visible invisible opacity-0 transition-all duration-200 bg-brand-gray absolute top-full z-40 max-sm:left-0 sm:right-0">
            <li>
              <Link
                href="/parking#reservas"
                className="inline-block text-xs text-brand-blue hover:underline"
              >
                Reservas
              </Link>
            </li>
            <li>
              <Link
                href="/parking#abonos"
                className="inline-block text-xs text-brand-blue hover:underline"
              >
                Abonos
              </Link>
            </li>
            <li>
              <Link
                href="/parking/vehicle-stays"
                className="inline-block text-xs text-brand-blue hover:underline"
              >
                Estancias
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
