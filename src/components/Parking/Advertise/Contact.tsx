export default function Contact() {
  return (
    <section className="px-4 py-12 sm:py-20 bg-brand-gray-light">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-2 xl:px-16">
          <div>
            <h3 className=" max-w-[280px] font-extrabold text-2xl md:text-[42px] leading-[1.3] text-brand-blue">
              Formulario de contacto
            </h3>
          </div>
          <div className="lg:pl-8">
            <form className="w-full" action="">
              <div className="grid grid-cols-2 gap-x-5 gap-y-7">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm block text-brand-blue "
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="px-4 py-4 w-full text-sm bg-white border-0 appearance-none "
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="Apellidos"
                    className="text-sm block text-brand-blue "
                  >
                    Apellidos
                  </label>
                  <input
                    type="text"
                    name="Apellidos"
                    id="Apellidos"
                    className="px-4 py-4 w-full text-sm bg-white border-0 appearance-none "
                  />
                </div>
                <div className="space-y-2 col-span-2">
                  <label
                    htmlFor="cliente"
                    className="text-sm block text-brand-blue "
                  >
                    Tipo de cliente
                  </label>
                  <select
                    className="px-4 py-4 w-full text-sm bg-white border-0 appearance-none "
                    name="cliente"
                    id="cliente"
                  >
                    <option value="1">Agencia</option>
                    <option value="1">Empresas</option>
                    <option value="1">Otros</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="cliente"
                    className="text-sm block text-brand-blue "
                  >
                    Correo electrónico<sup>*</sup>
                  </label>
                  <input
                    type="text"
                    name="cliente"
                    id="cliente"
                    className="px-4 py-4 w-full text-sm bg-white border-0 appearance-none "
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="cliente"
                    className="text-sm block text-brand-blue "
                  >
                    Teléfono<sup>*</sup>
                  </label>
                  <input
                    type="text"
                    name="cliente"
                    id="cliente"
                    className="px-4 py-4 w-full text-sm bg-white border-0 appearance-none "
                  />
                </div>
                <div className="space-y-2 flex justify-end col-span-2">
                  <button
                    type="button"
                    className="text-white text-sm font-bold bg-brand-orange rounded-md w-[174px] h-[38px] flex justify-center items-center text-center"
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
