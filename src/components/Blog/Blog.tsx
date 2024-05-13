"use client";
import blogImg from "@/public/images/blog/blog-img-1.png";
import Image from "next/image";
import { useState } from "react";
import EditBlog from "./EditBlog";
export default function Blog() {
  const [isModel, setIsModal] = useState(false);
  const [isCredential, setIsCredential] = useState(false);

  const formSumited = (event: any) => {
    event.preventDefault();
    setIsCredential(true);
  };

  const backToContent = () => {
    setIsModal(false);
    setIsCredential(false);
  };

  return (
    <div className="relative pb-2">
      {!isCredential ? (
        <>
          <Image
            src={blogImg}
            alt={`blog-img`}
            className="w-full  object-center object-cover"
          />
          <article className="prose max-w-full prose-p:text-sm md:prose-p:text-lg py-14 prose-h2:text-center prose-h2:text-xl prose-h2:font-extrabold md:prose-h2:text-[42px]">
            <h2>Oficina virtual tributaria de Mogán</h2>
            <p>
              Cualquier persona, debidamente identificada, podrá ejercer su
              derecho de acceso a la información pública (artículo 105.(b) de la
              Constitución española, ley 19/2013 de 9 de diciembre BOE núm. 295,
              de 10 de diciembre de 2013 y ley 12/2014, de 26 de diciembre, de
              transparencia y acceso a la información pública de la comunidad
              autónomas de canarias). Se entiende por información pública los
              contenidos o documentos, cualquiera que sea su soporte o formato,
              que obren en poder de la administración de esta empresa y que
              hayan sido elaborados o adquiridos en el ejercicio de sus
              funciones.
            </p>
            <p>
              CÓMO PRESENTAR UNA SOLICITUD DE ACCESO A INFORMACIÓN Para hacer
              efectivo este derecho, podrá iniciarse el trámite rellenando el
              modelo de solicitud en las dependencias de la administración de
              esta empresa, en la Avda. de la constitución 10, 35140 Mogán.
            </p>
          </article>
          <div className="flex justify-center">
            <button
              onClick={() => setIsModal(true)}
              className="px-6 font-semibold  py-2 text-sm rounded-md bg-brand-blue text-white uppercase"
            >
              Edit
            </button>
          </div>
          {isModel && (
            <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-white/20 backdrop-blur-sm">
              <div className="w-[460px] max-w-full relative">
                <button
                  type="button"
                  className="absolute right-3 top-3"
                  onClick={() => setIsModal(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="feather feather-x"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 6L6 18"></path>
                    <path d="M6 6L18 18"></path>
                  </svg>
                </button>
                <form
                  action=""
                  onSubmit={formSumited}
                  className="bg-white p-6 rounded-lg shadow-lg space-y-4"
                >
                  <h2 className="text-xl sm:text-3xl font-semibold text-center py-3">
                    Login
                  </h2>
                  <div className="space-y-1">
                    <label htmlFor="email" className="block text-sm">
                      Email
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none bg-white focus:ring-0"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="Password" className="block text-sm">
                      Password
                    </label>
                    <input
                      type="password"
                      id="Password"
                      name="Password"
                      required
                      className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none bg-white focus:ring-0"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-block  text-white bg-brand-blue px-4 py-2.5 rounded-md w-full text-center hover:bg-opacity-85 "
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          )}
        </>
      ) : (
        <EditBlog backToContent={backToContent} />
      )}
    </div>
  );
}
