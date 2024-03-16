export default function Demo() {
  return (
    <section className="relative md:px-8">
      <div className="absolute right-0 hidden md:block bottom-0 top-0 w-1/3 bg-brand-gray-light">
        <span className="sr-only">Right side bg</span>
      </div>
      <div className="absolute left-0 bottom-0 hidden md:block top-0 w-1/3 bg-brand-orange">
        <span className="sr-only">Right side bg</span>
      </div>
      <div className="max-w-screen-xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-brand-orange pb-12 pt-10 sm:py-14 md:py-20 max-md:flex justify-center">
            <div className="w-[230px] sm:w-[300px] lg:ml-10 xl:ml-32">
              <h4 className="-mb-7 text-center text-white text-[42px] font-light">
                Te damos
              </h4>
              <h2 className="text-[150px] sm:text-[200px] leading-[150px] sm:leading-[180px] text-center font-extrabold text-white">
                40
              </h2>
              <h3 className="text-center text-[32px] sm:text-[42px] leading-[1.2] pt-2 sm:pt-3 font-extrabold text-white">
                vales-tiempo de una hora
              </h3>
            </div>
          </div>
          <div className="px-6 md:pl-8 lg:pl-14 bg-brand-gray-light space-y-2 sm:space-y-3 pb-12 pt-10 sm:py-14 md:py-24 lg:py-32">
            <h2 className="font-extrabold max-md:text-center leading-[1.2] text-[32px] sm:text-[42px] text-brand-blue">
              Promo bienvenida
            </h2>
            <p className="text-sm text-brand-blue max-md:text-center">
              Rellena el formulario y empieza a fidelizar a tus clientes dándote
              valor.
            </p>
            <ul className="text-brand-blue text-sm space-y-0.5 pt-6 pb-4 sm:py-2 max-md:flex max-md:flex-col items-center">
              <li>Podrás gestionar tu vales-tiempo.</li>
              <li>Podrás comprar los packs que necesites.</li>
              <li>Podrás gestionar las facturas de los vales.</li>
            </ul>
            <div className="pt-2 max-md:flex justify-center">
              <a
                href="#"
                className="w-[174px] text-center text-white bg-brand-orange font-bold text-sm flex justify-center items-center h-[38px] rounded-md"
              >
                Darme de alta
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
