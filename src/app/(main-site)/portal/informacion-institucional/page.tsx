import Caraousal from "@/components/HomePage/Caraousal";
import Tabs from "@/components/Tabs/Tabs";
const tabItems = [
  {
    id: 1,
    title: "Escritura de constitución",
    content: `
      <p>
        <a
          href="https://www.gestmogan.com/wp-content/uploads/2022/10/MGM-constitucion-022003.pdf"
          >Escritura de constitución (Click aquí)</a
        ><a
          href="https://www.gestmogan.com/wp-content/uploads/2022/10/MGM-constitucion-022003.pdf"
          ><img
            loading="lazy" 
            src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png"
            alt=""
            width="24"
            height="24" /></a
        ><a
          href="https://www.gestmogan.com/wp-content/uploads/2024/02/MGM-constitucion-022003.docx"
          ><img
            loading="lazy" 
            src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png"
            alt=""
            width="24"
            height="24" /></a
        ><a
          href="https://www.gestmogan.com/wp-content/uploads/2024/02/MGM-constitucion-022003.odt"
          ><img
            loading="lazy" 
            src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png"
            alt=""
            width="24"
            height="24"
        /></a>
      </p>
    `,
  },
  {
    id: 2,
    title: "Cambio de denominación y objeto social",
    content: `<p>
     <a
       href="https://www.gestmogan.com/wp-content/uploads/2022/10/MGM-acuerdos-sociales-122003_cambio-de-denominación-y-modificacion-de-objeto-social-y-consecuente-modificación-parcial-de-estatutos.pdf"
       >Escritura cambio de denominación y modificación de objeto social año
       2003(Click aquí)</a
     ><a
       href="https://www.gestmogan.com/wp-content/uploads/2022/10/MGM-acuerdos-sociales-122003_cambio-de-denominación-y-modificacion-de-objeto-social-y-consecuente-modificación-parcial-de-estatutos.pdf"
       ><img
         loading="lazy"
         src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png"
         alt=""
         width="24"
         height="24" /></a
     ><img
       loading="lazy"
       src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png"
       alt=""
       width="24"
       height="24"
     /><img
       loading="lazy"
       src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png"
       alt=""
       width="24"
       height="24"
     />
   </p>`,
  },
  {
    id: 3,
    title: "Escritura de poderes del presidente/gerente",
    content: `  <p>
    <a
      href="https://www.gestmogan.com/wp-content/uploads/2024/02/escritura-Prot_697_2023_Poderes_Presidente.pdf"
      >escritura Prot_697_2023_Poderes_Presidente </a
    ><a
      href="https://www.gestmogan.com/wp-content/uploads/2024/02/escritura-Prot_697_2023_Poderes_Presidente.pdf"
      ><img
        loading="lazy" 
        src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png"
        alt=""
        width="24"
        height="24" /></a
    ><a
      href="https://www.gestmogan.com/wp-content/uploads/2024/02/escritura-Prot_697_2023_Poderes_Presidente.docx"
      ><img
        loading="lazy" 
        src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png"
        alt=""
        width="24"
        height="24" /></a
    ><a
      href="https://www.gestmogan.com/wp-content/uploads/2024/02/escritura-Prot_697_2023_Poderes_Presidente.odt"
      ><img
        loading="lazy" 
        src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png"
        alt=""
        width="24"
        height="24"
    /></a>
  </p>
  <p>
    <a
      href="https://www.gestmogan.com/wp-content/uploads/2024/02/Prot_401_Carmen-Madrigal_poderes_Gerente.pdf"
      >Prot_401_Carmen Madrigal_poderes_Gerente </a
    ><a
      href="https://www.gestmogan.com/wp-content/uploads/2024/02/Prot_401_Carmen-Madrigal_poderes_Gerente.pdf"
      ><img
        loading="lazy"
        src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png"
        alt=""
        width="24"
        height="24" /></a
    ><a
      href="https://www.gestmogan.com/wp-content/uploads/2024/02/Prot_401_Carmen-Madrigal_poderes_Gerente.docx"
      ><img
        loading="lazy"
        src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png"
        alt=""
        width="24"
        height="24" /></a
    ><a
      href="https://www.gestmogan.com/wp-content/uploads/2024/02/Prot_401_Carmen-Madrigal_poderes_Gerente.odt"
      ><img
        loading="lazy"
        src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png"
        alt=""
        width="24"
        height="24"
    /></a>
  </p>`,
  },
  {
    id: 4,
    title: "Modificación de estatutos",
    content: `
    <p>
      <a
        href="https://www.gestmogan.com/wp-content/uploads/2022/10/MGM-acuerdos-sociales-012019_Modificacion-de-Estatutos_Junta-Universal_13_03_17.pdf"
        >Modificación de estatutos en junta universal año 2019(Click aquí)</a
      ><a
        href="https://www.gestmogan.com/wp-content/uploads/2022/10/Prot_616_Designacion-Miembros-Consejo-Administracion.pdf"
        ><img
          loading="lazy" 
          src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png"
          alt=""
          width="24"
          height="24" /></a
      ><a
        href="https://www.gestmogan.com/wp-content/uploads/2022/10/MGM-acuerdos-sociales-012019_Modificacion-de-Estatutos_Junta-Universal_13_03_17.pdf"
        ><img
          loading="lazy"
          src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png"
          alt=""
          width="24"
          height="24" />
        <img
          loading="lazy"
          src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png"
          alt=""
          width="24"
          height="24"
      /></a>
    </p>
    <p>
      <a
        href="https://www.gestmogan.com/wp-content/uploads/2024/02/Prot_200_05_03_2022_Mod-Estatutos-y-Ampliac-Objeto-Social_Sin-Subsanacion-a-word.pdf"
        >Prot_200_05_03_2022_Mod Estatutos y Ampliac Objeto Social_Sin
        Subsanación a word</a
      ><a
        href="https://www.gestmogan.com/wp-content/uploads/2024/02/Prot_200_05_03_2022_Mod-Estatutos-y-Ampliac-Objeto-Social_Sin-Subsanacion-a-word.pdf"
        ><img
          loading="lazy"
          src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png"
          alt=""
          width="24"
          height="24" /></a
      ><a
        href="https://www.gestmogan.com/wp-content/uploads/2024/02/Prot_200_05_03_2022_Mod-Estatutos-y-Ampliac-Objeto-Social_Sin-Subsanacion-a-word.docx"
        ><img
          loading="lazy"
          src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png"
          alt=""
          width="24"
          height="24" /></a
      ><a
        href="https://www.gestmogan.com/wp-content/uploads/2024/02/Prot_200_05_03_2022_Mod-Estatutos-y-Ampliac-Objeto-Social_Sin-Subsanacion-a-word.odt"
        ><img
          loading="lazy"
          src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png"
          alt=""
          width="24"
          height="24"
      /></a>
    </p>`,
  },
  {
    id: 5,
    title: "Designación de órgano de administración",
    content: `<p>
     <a
       href="https://www.gestmogan.com/wp-content/uploads/2022/10/MGM-acuerdos-sociales-122003_cambio-de-denominación-y-modificacion-de-objeto-social-y-consecuente-modificación-parcial-de-estatutos.pdf"
       >Escritura cambio de denominación y modificación de objeto social año
       2003(Click aquí)</a
     ><a
       href="https://www.gestmogan.com/wp-content/uploads/2022/10/MGM-acuerdos-sociales-122003_cambio-de-denominación-y-modificacion-de-objeto-social-y-consecuente-modificación-parcial-de-estatutos.pdf"
       ><img
         loading="lazy"
         src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png"
         alt=""
         width="24"
         height="24" /></a
     ><img
       loading="lazy"
       src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png"
       alt=""
       width="24"
       height="24"
     /><img
       loading="lazy"
       src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png"
       alt=""
       width="24"
       height="24"
     />
   </p>`,
  },
  {
    id: 6,
    title: "Normativa aplicable a la entidad",
    content: ` <ul>
    <li>LEY DE PRESUPUESTOS GENERALES DEL ESTADO</li>
    <li>ESTATUTO DE LOS TRABAJADORES</li>
    <li>
      CONVENIOS COLECTIVOS
      <ul>
        <li>
          Convenio Colectivo del «Sector de oficinas y despachos de la
          Provincia de Las Palmas».-
        </li>
      </ul>
      <ul>
        <li>
          V Convenio Colectivo para el sector de regulación del
          estacionamiento limitado de vehículos en la vía publica mediante
          control horario
        </li>
      </ul>
    </li>
  </ul>
  <ul>
    <li>
      REAL DECRETO LEGISLATIVO 1/2010, DE 2 DE JULIO POR EL QUE SE APRUEBA
      EL TEXTO REFUNDIDO DE LA LEY SOCIEDADES DE CAPITAL
    </li>
    <li>LEY 27/2015 DEL IMPUESTO SOBRE SOCIEDADES</li>
    <li>LEY 9/2017 DE 8 DE NOVIEMBRE DE CONTRATOS DEL SECTOR PÚBLICO</li>
  </ul>`,
  },
  {
    id: 7,
    title: "Organigrama de la sociedad",
    content: ` <p>
    <a
      href="https://www.gestmogan.com/wp-content/uploads/2023/11/2023Organigrama-Mogan-Gestion-Municipal.pdf"
      >2023- Organigrama Mogán Gestión Municipal</a
    ><span dir="ltr">
      <a
        href="https://www.gestmogan.com/wp-content/uploads/2023/11/2023Organigrama-Mogan-Gestion-Municipal.pdf"
        ><img
          loading="lazy" 
          src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png"
          alt=""
          width="20"
          height="20" /></a
      ><a
        href="https://www.gestmogan.com/wp-content/uploads/2023/11/Organigrama-Mogan-Gestion-Municipal.ppt"
        ><img
          loading="lazy" 
          src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png"
          alt=""
          width="18"
          height="18" /></a
      ><a
        href="https://www.gestmogan.com/wp-content/uploads/2023/11/Organigrama-Mogan-Gestion-Municipal.odp"
        ><img
          loading="lazy" 
          src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png"
          alt=""
          width="18"
          height="18" /></a
    ></span>
  </p>
  <p>
    <a
      href="https://www.gestmogan.com/wp-content/uploads/2023/11/Organigrama-Mogan-Gestion-Municipal.pdf"
      >2022-2023 Organigrama Mogán Gestión Municipal </a
    ><a
      href="https://www.gestmogan.com/wp-content/uploads/2023/11/Organigrama-Mogan-Gestion-Municipal.pdf"
      ><img
        loading="lazy" 
        src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png"
        alt=""
        width="20"
        height="20" /></a
    ><a
      href="https://www.gestmogan.com/wp-content/uploads/2023/11/Organigrama-Mogan-Gestion-Municipal.ppt"
      ><img
        loading="lazy" 
        src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png"
        alt=""
        width="18"
        height="18" /></a
    ><a
      href="https://www.gestmogan.com/wp-content/uploads/2023/11/Organigrama-Mogan-Gestion-Municipal.odp"
      ><img
        loading="lazy" 
        src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png"
        alt=""
        width="18"
        height="18"
    /></a>
  </p>
  <p>
    <a
      href="https://www.gestmogan.com/wp-content/uploads/2022/10/Organigrama_Mogan_Gestion.pdf"
      >2020-2021 Organigrama de Mogán Gestión (Click aquí)</a
    ><a
      href="https://www.gestmogan.com/wp-content/uploads/2023/11/2023-LISTADO-CONTRATOS-MENORES.pdf"
      ><img
        loading="lazy"
        class="alignnone"
        src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png"
        alt=""
        width="20"
        height="20" /></a
    ><a
      href="https://www.gestmogan.com/wp-content/uploads/2023/11/2023-LISTADO-CONTRATOS-MENORES.xlsx"
      ><img
        loading="lazy"
        src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png"
        alt=""
        width="18"
        height="18" /></a
    ><a
      href="https://www.gestmogan.com/wp-content/uploads/2023/11/2023-LISTADO-CONTRATOS-MENORES.ods"
      ><img
        loading="lazy"
        src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png"
        alt=""
        width="18"
        height="18"
    /></a>
  </p>`,
  },
];
type Props = {};
const page = (props: Props) => {
  return (
    <div className="container mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
      <Caraousal />
      <div className="pt-12 pb-12 sm:pb-20 space-y-12 md:space-y-14 px-3 md:px-0 ">
        <div className="space-y-1">
          <h2 className="font-extrabold text-center text-xl sm:text-3xl lg:text-[42px] text-brand-blue">
            Información Institucional
          </h2>
        </div>

        <div className="space-y-8 lg:space-y-14">
          <article className="prose prose-p:text-black prose-ul:p-0 prose-ul:mb-8 prose-li:my-1 prose-li:pl-0 prose-p:text-sm md:prose-p:text-lg max-w-full prose-ul:list-none prose-li:text-brand-blue prose-li:text-sm md:prose-li:text-lg prose-li:font-semibold">
            <ul>
              <li>Mogán Gestión Municipal, S.L.</li>
              <li>CIF: B35745843</li>
              <li>Avda. de la Constitución, 14</li>
              <li>35140 Mogán, Las Palmas</li>
            </ul>
            <ul>
              <li>Telf.: 928 15 88 06</li>
              <li>
                Telfax.: 928 56 85 12Inscrita en el registro mercantil de Las
                Palmas
              </li>
              <li>Tomo: 1641 Libro: 0 Folio: 14 Sección: 8 Hoja: GC 29840</li>
            </ul>
            <p>
              Se constituye la empresa como sociedad mercantil el 27 de febrero
              de 2003, con la denominación de Mogán Gestión Tributaria
              Municipal, S.L., con capital de titularidad exclusiva del
              Ayuntamiento de Mogán. El objeto social de la sociedad queda
              centrado en la colaboración en la gestión recaudatoria de
              impuestos, tributos, tasas, multas, precios públicos y otras
              exacciones locales en periodo voluntario y/o ejecutivo.
            </p>
            <p>
              Según la Encomienda de Gestión, de fecha 6 de febrero de 2003,
              esta actividad estará sometida a la inspección y vigilancia
              municipal y limitada a aquellos servicios y/o actuaciones que no
              impliquen actos de autoridad. El 7 de noviembre de 2003 en Junta
              General -que se corresponde con el Pleno Municipal- y para dar
              respuesta a nuevas necesidades en la gestión de la empresa, se
              procede a la modificación de los Estatutos de la Sociedad,
              ampliando el objeto social y adecuando la denominación social a
              esta nueva realidad. Así se incorporan al objeto social gestiones
              urbanísticas y a titulo general «la promoción, gestión y
              explotación de cualesquiera de los bienes y servicios y
              actividades de competencia municipal». La empresa pasa a
              denominarse Mogán Gestión Municipal, S.L.
            </p>
            <p>
              Estos acuerdos fueron formalizados públicamente el 18 de diciembre
              de 2003 ante el notario Don Eloy Cuesta Pracias. Al amparo de
              estos acuerdos se promueven desde la Corporación Municipal una
              serie de encomiendas entre las que enumeramos la elaboración del
              Plan General de Ordenación Urbana, el Mantenimiento de los
              Jardines Municipales, la construcción de la Guardería del Valle de
              Mogán y la Piscina de Arguineguín, el Bombeo de Aguas desde Playa
              de Mogán, La Reforma del Centro de Día del Barrio del Horno, la
              Ampliación del Centro Ocupacional, la Rehabilitación de la sede de
              la Concejalía de la igualdad de Género, ….
            </p>
            <p>
              Al mismo tiempo se adoptan una serie de iniciativas encaminadas a
              modernizar la gestión de la empresa: apertura de nuevas oficinas
              convenientemente equipadas, renovación de los equipos
              informáticos, impulso a los convenios con la Agencia Tributaria y
              Hacienda Canaria para el cobro fuera del término municipal, página
              web, convenios con terceras firmas para la actualización de la
              base de datos y altas catastrales.
            </p>
          </article>
          <div>
            <Tabs items={tabItems} />
          </div>
        </div>
        <div className="pt-4 md:pt-20  md:pb-10">
          <p className="text-[10px] sm:text-base lg:text-lg text-black text-center">
            Fecha de la
            <strong> última modificación del portal de transparencia </strong>
            17/10/23
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
