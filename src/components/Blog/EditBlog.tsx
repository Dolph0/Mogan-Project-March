import blogImg from "@/public/images/blog/blog-img-1.png";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });

type Props = {
  backToContent: any;
};
export default function EditBlog(props: Props) {
  const [content, setContent] =
    useState(` <h2>Oficina virtual tributaria de Mogán</h2>
    <p>Cualquier persona, debidamente identificada, podrá ejercer su derecho de acceso a la información pública (artículo 105.(b) de la Constitución española, ley 19/2013 de 9 de diciembre BOE núm. 295, de 10 de diciembre de 2013 y ley 12/2014, de 26 de diciembre, de transparencia y acceso a la información pública de la comunidad autónomas de canarias). Se entiende por información pública los contenidos o documentos, cualquiera que sea su soporte o formato, que obren en poder de la administración de esta empresa y que hayan sido elaborados o adquiridos en el ejercicio de sus funciones.</p>

    <p>CÓMO PRESENTAR UNA SOLICITUD DE ACCESO A INFORMACIÓN Para hacer efectivo este derecho, podrá iniciarse el trámite rellenando el modelo de solicitud en las dependencias de la administración de esta empresa, en la Avda. de la constitución 10, 35140 Mogán.</p>`);
  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ align: [] }],
      [{ color: [] }],
      ["code-block"],
      ["clean"],
    ],
  };

  const quillFormats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
    "align",
    "color",
    "code-block",
  ];
  const handleEditorChange = (newContent: any) => {
    setContent(newContent);
  };

  return (
    <div>
      <div className="space-y-5 pb-5">
        <div className="flex justify-between flex-wrap gap-4 items-start">
          <div className="max-w-[400px]  space-y-3">
            <div className="space-y-1">
              <label
                htmlFor="upload"
                className="text-base text-black font-medium"
              >
                Upload an Image
              </label>
              <input
                type="file"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none bg-white focus:ring-0"
              />
            </div>
            <Image
              src={blogImg}
              alt={`blog-img`}
              className="w-full  object-center object-cover"
            />
          </div>
          <button
            type="button"
            onClick={() => props.backToContent()}
            className=" inline-block text-white bg-brand-blue px-8 py-2.5 rounded-md w-auto text-center hover:bg-opacity-85 "
          >
            Back
          </button>
        </div>
        <div className="w-full pb-14 pt-4 space-y-2">
          <label htmlFor="updatecontent" className="block font-medium">
            Description:
          </label>
          <QuillEditor
            value={content}
            onChange={handleEditorChange}
            modules={quillModules}
            formats={quillFormats}
            className="w-full h-[400px]  bg-white"
          />
        </div>
        <div>
          <button
            type="button"
            className=" inline-block text-white bg-brand-blue px-8 py-2.5 rounded-md w-auto text-center hover:bg-opacity-85 "
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
