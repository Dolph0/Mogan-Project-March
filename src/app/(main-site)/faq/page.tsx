// import Caraousal from "@/components/HomePage/Caraousal.1";

// export default function Home() {
//   return (
//     <>
//       <div className="container mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
//         <Caraousal />
//         <div className="pt-12 pb-12 sm:pb-28 space-y-8 md:space-y-16 max-sm:px-3">
//           <div className="space-y-0.5 sm:space-y-3">
//             <h2 className="font-extrabold text-center text-xl sm:text-3xl lg:text-[42px] text-brand-blue">
//               ¿Tienes alguna duda?
//             </h2>
//             <p className="text-center text-brand-blue text-base sm:text-xl lg:text-2xl">
//               Pregúntanos, estaremos encantados de atenderte.
//             </p>
//           </div>
//           <form action="">
//             <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-4 md:gap-y-6">
//               <div className="space-y-1">
//                 <label htmlFor="dni" className="block text-brand-blue text-sm">
//                   DNI/NIF/NIE<sup className="text-brand-red">*</sup>
//                 </label>
//                 <input
//                   type="text"
//                   id="dni"
//                   name="dni"
//                   className="w-full px-4 py-2.5 focus:outline-none border-none focus:ring-0 bg-brand-gray-100 text-brand-blue text-sm sm:text-sm "
//                 />
//               </div>
//               <div className="space-y-1">
//                 <label
//                   htmlFor="Nombre"
//                   className="block text-brand-blue text-sm"
//                 >
//                   Nombre<sup className="text-brand-red">*</sup>
//                 </label>
//                 <input
//                   type="text"
//                   id="Nombre"
//                   name="Nombre"
//                   className="w-full px-4 py-2.5 focus:outline-none border-none focus:ring-0 bg-brand-gray-100 text-brand-blue text-sm sm:text-sm "
//                 />
//               </div>
//               <div className="space-y-1">
//                 <label
//                   htmlFor="Nombre2"
//                   className="block text-brand-blue text-sm"
//                 >
//                   Nombre<sup className="text-brand-red">*</sup>
//                 </label>
//                 <input
//                   type="text"
//                   id="Nombre2"
//                   name="Nombre2"
//                   className="w-full px-4 py-2.5 focus:outline-none border-none focus:ring-0 bg-brand-gray-100 text-brand-blue text-sm sm:text-sm "
//                 />
//               </div>
//               <div className="space-y-1">
//                 <label
//                   htmlFor="residente"
//                   className="block text-brand-blue text-sm"
//                 >
//                   Es usted residente<sup className="text-brand-red">*</sup>
//                 </label>
//                 <input
//                   type="text"
//                   id="residente"
//                   name="residente"
//                   className="w-full px-4 py-2.5 focus:outline-none border-none focus:ring-0 bg-brand-gray-100 text-brand-blue text-sm sm:text-sm "
//                 />
//               </div>
//               <div className="space-y-1">
//                 <label
//                   htmlFor="email"
//                   className="block text-brand-blue text-sm"
//                 >
//                   Email<sup className="text-brand-red">*</sup>
//                 </label>
//                 <input
//                   type="text"
//                   id="email"
//                   name="email"
//                   className="w-full px-4 py-2.5 focus:outline-none border-none focus:ring-0 bg-brand-gray-100 text-brand-blue text-sm sm:text-sm "
//                 />
//               </div>
//               <div className="space-y-1">
//                 <label
//                   htmlFor="Teléfono"
//                   className="block text-brand-blue text-sm"
//                 >
//                   Teléfono<sup className="text-brand-red">*</sup>
//                 </label>
//                 <input
//                   type="text"
//                   id="Teléfono"
//                   name="Teléfono"
//                   className="w-full px-4 py-2.5 focus:outline-none border-none focus:ring-0 bg-brand-gray-100 text-brand-blue text-sm sm:text-sm "
//                 />
//               </div>
//               <div className="space-y-1 md:col-span-3">
//                 <label
//                   htmlFor="Mensaje"
//                   className="block text-brand-blue text-sm"
//                 >
//                   Mensaje
//                 </label>
//                 <textarea
//                   name="Mensaje"
//                   id="Mensaje"
//                   cols={30}
//                   rows={6}
//                   className="appearance-none resize-none w-full px-4 py-2.5 focus:outline-none border-none focus:ring-0 bg-brand-gray-100 text-brand-blue text-sm sm:text-sm "
//                 ></textarea>
//               </div>
//               <div className="md:col-span-2 space-y-3">
//                 <div className="flex gap-3 items-start">
//                   <input
//                     type="checkbox"
//                     id="privacy"
//                     name="privacy"
//                     className="accent-brand-blue"
//                   />
//                   <label
//                     htmlFor="privacy"
//                     className="text-brand-blue text-sm cursor-pointer"
//                   >
//                     He leído y acepto la{" "}
//                     <a href="#" className="text-brand-orange hover:underline">
//                       Política de privacidad
//                     </a>{" "}
//                     y las{" "}
//                     <a href="#" className="text-brand-orange hover:underline">
//                       condiciones generales
//                     </a>
//                   </label>
//                 </div>
//                 <div className="flex gap-3 items-start">
//                   <input
//                     type="checkbox"
//                     id="información"
//                     name="information"
//                     className="accent-brand-blue"
//                   />
//                   <label
//                     htmlFor="información"
//                     className="text-brand-blue text-sm cursor-pointer"
//                   >
//                     Quiero recibir información comercial y de novedades de
//                     Gestiona Mogan
//                   </label>
//                 </div>
//               </div>
//               <div className="md:col-span-1 flex justify-center items-start md:justify-end">
//                 <button
//                   type="button"
//                   className="font-bold text-sm text-white bg-brand-blue px-3 py-2.5 w-[175px] text-center rounded  hover:bg-opacity-85 transition-all"
//                 >
//                   Enviar
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import Caraousal from "@/components/HomePage/Caraousal.1";

export default function Home() {
  const [formData, setFormData] = useState({
    dni: "",
    nombre: "",
    nombre2: "",
    residente: "",
    email: "",
    telefono: "",
    mensaje: "",
    privacy: false,
    information: false,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: (e.target as HTMLInputElement).checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const mailtoLink = `mailto:gestionmunicipal@gestmogan.com?subject=Formulario%20de%20Contacto&body=${encodeURIComponent(
      `DNI/NIF/NIE: ${formData.dni}\nNombre: ${formData.nombre}\nSegundo Nombre: ${formData.nombre2}\nEs usted residente: ${formData.residente}\nEmail: ${formData.email}\nTeléfono: ${formData.telefono}\nMensaje: ${formData.mensaje}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <>
      <div className="container mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <Caraousal />
        <div className="pt-12 pb-12 sm:pb-28 space-y-8 md:space-y-16 max-sm:px-3">
          <div className="space-y-0.5 sm:space-y-3">
            <h2 className="font-extrabold text-center text-xl sm:text-3xl lg:text-[42px] text-brand-blue">
              ¿Tienes alguna duda?
            </h2>
            <p className="text-center text-brand-blue text-base sm:text-xl lg:text-2xl">
              Pregúntanos, estaremos encantados de atenderte.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-4 md:gap-y-6">
              <div className="space-y-1">
                <label htmlFor="dni" className="block text-brand-blue text-sm">
                  DNI/NIF/NIE<sup className="text-brand-red">*</sup>
                </label>
                <input
                  type="text"
                  id="dni"
                  name="dni"
                  value={formData.dni}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 focus:outline-none border-none focus:ring-0 bg-brand-gray-100 text-brand-blue text-sm sm:text-sm "
                />
              </div>
              <div className="space-y-1">
                <label
                  htmlFor="nombre"
                  className="block text-brand-blue text-sm"
                >
                  Nombre<sup className="text-brand-red">*</sup>
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 focus:outline-none border-none focus:ring-0 bg-brand-gray-100 text-brand-blue text-sm sm:text-sm "
                />
              </div>
              <div className="space-y-1">
                <label
                  htmlFor="nombre2"
                  className="block text-brand-blue text-sm"
                >
                  Segundo Nombre<sup className="text-brand-red">*</sup>
                </label>
                <input
                  type="text"
                  id="nombre2"
                  name="nombre2"
                  value={formData.nombre2}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 focus:outline-none border-none focus:ring-0 bg-brand-gray-100 text-brand-blue text-sm sm:text-sm "
                />
              </div>
              <div className="space-y-1">
                <label
                  htmlFor="residente"
                  className="block text-brand-blue text-sm"
                >
                  Es usted residente<sup className="text-brand-red">*</sup>
                </label>
                <input
                  type="text"
                  id="residente"
                  name="residente"
                  value={formData.residente}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 focus:outline-none border-none focus:ring-0 bg-brand-gray-100 text-brand-blue text-sm sm:text-sm "
                />
              </div>
              <div className="space-y-1">
                <label
                  htmlFor="email"
                  className="block text-brand-blue text-sm"
                >
                  Email<sup className="text-brand-red">*</sup>
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 focus:outline-none border-none focus:ring-0 bg-brand-gray-100 text-brand-blue text-sm sm:text-sm "
                />
              </div>
              <div className="space-y-1">
                <label
                  htmlFor="telefono"
                  className="block text-brand-blue text-sm"
                >
                  Teléfono<sup className="text-brand-red">*</sup>
                </label>
                <input
                  type="text"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 focus:outline-none border-none focus:ring-0 bg-brand-gray-100 text-brand-blue text-sm sm:text-sm "
                />
              </div>
              <div className="space-y-1 md:col-span-3">
                <label
                  htmlFor="mensaje"
                  className="block text-brand-blue text-sm"
                >
                  Mensaje
                </label>
                <textarea
                  name="mensaje"
                  id="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  cols={30}
                  rows={6}
                  className="appearance-none resize-none w-full px-4 py-2.5 focus:outline-none border-none focus:ring-0 bg-brand-gray-100 text-brand-blue text-sm sm:text-sm "
                ></textarea>
              </div>
              <div className="md:col-span-2 space-y-3">
                <div className="flex gap-3 items-start">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    checked={formData.privacy}
                    onChange={handleChange}
                    className="accent-brand-blue"
                  />
                  <label
                    htmlFor="privacy"
                    className="text-brand-blue text-sm cursor-pointer"
                  >
                    He leído y acepto la{" "}
                    <a href="#" className="text-brand-orange hover:underline">
                      Política de privacidad
                    </a>{" "}
                    y las{" "}
                    <a href="#" className="text-brand-orange hover:underline">
                      condiciones generales
                    </a>
                  </label>
                </div>
                <div className="flex gap-3 items-start">
                  <input
                    type="checkbox"
                    id="información"
                    name="information"
                    checked={formData.information}
                    onChange={handleChange}
                    className="accent-brand-blue"
                  />
                  <label
                    htmlFor="información"
                    className="text-brand-blue text-sm cursor-pointer"
                  >
                    Quiero recibir información comercial y de novedades de
                    Gestiona Mogan
                  </label>
                </div>
              </div>
              <div className="md:col-span-1 flex justify-center items-start md:justify-end">
                <button
                  type="submit"
                  className="font-bold text-sm text-white bg-brand-blue px-3 py-2.5 w-[175px] text-center rounded  hover:bg-opacity-85 transition-all"
                >
                  Enviar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
