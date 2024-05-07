import Card from "@/components/HomePage/Card";
import blogImg from "@/public/images/blog/blog-img-1.png";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <div className="container mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <div className="pt-6 md:pt-12">
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

          <div className="space-y-6 lg:space-y-8 pt-4 md:pt-12">
            <h3 className="font-bold text-brand-blue text-xl md:text-[25px]">
              Otras noticias de interés
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-7 lg:grid-cols-3 pb-12 lg:pb-28">
              <Card
                title="Mogán ya gestiona de forma directa las playas que tiene concesionadas"
                subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum harum vel in sequi eveniet accusantium quo nesciunt ut, doloribus obcaecati similique, illum reprehenderit corrupti repellendus, at ipsum repudiandae dolorem ea."
                imgSrc="/1.png"
                slug="mogán-ya-gestiona-de"
              />

              <Card
                title="Onalia Bueno da la bienvenida al nuevo personal de las playas"
                subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum harum vel in sequi eveniet accusantium quo nesciunt ut, doloribus obcaecati similique, illum reprehenderit corrupti repellendus, at ipsum repudiandae dolorem ea."
                imgSrc="/2.png"
                slug="mogán-ya-gestiona-de"
              />
              <Card
                title="Gestiona Mogán estrena oficina virtual tributaria"
                subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum harum vel in sequi eveniet accusantium quo nesciunt ut, doloribus obcaecati similique, illum reprehenderit corrupti repellendus, at ipsum repudiandae dolorem ea."
                imgSrc="/4.png"
                slug="mogán-ya-gestiona-de"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
