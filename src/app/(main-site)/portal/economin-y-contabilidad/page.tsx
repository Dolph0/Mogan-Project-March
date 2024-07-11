import Caraousal from "@/components/HomePage/Caraousal.1";
import Tabs from "@/components/Tabs/Tabs";
const tabItems = [
  {
    id: 1,
    title: "Año 2023",
    content: `
     <div ><p style="text-align: center;"><strong>Aquí se puede descargar toda la información económica y contable de la empresa del año 2021<br></strong></p><p><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Capital_Social_MG.pdf">Capital_Social_MG </a><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Capital_Social_MG.pdf"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a>&nbsp; <a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Capital_Social_MG.odt"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png" alt="" width="20" height="20"></a> &nbsp; <a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Capital_Social_MG.doc"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png" alt="" width="20" height="20"></a></p><p><a href="https://www.gestmogan.com/wp-content/uploads/2023/11/Recursos-que-financian-y-Presupuesto-2023.pdf">Recursos que Financian y Presupuesto 2023</a><a href="https://www.gestmogan.com/wp-content/uploads/2023/11/Recursos-que-financian-y-Presupuesto-2023.pdf"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a>&nbsp; <a href="https://www.gestmogan.com/wp-content/uploads/2023/11/Recursos-que-financian-y-Presupuesto-2023.odt"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png" alt="" width="20" height="20"></a> &nbsp; <a href="https://www.gestmogan.com/wp-content/uploads/2023/11/Recursos-que-financian-y-Presupuesto-2023.doc"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png" alt="" width="20" height="20"></a></p><p>Cuentas Anuales Mogán gestión 2023 firmadas<strong>(PROXIMAMENTE)</strong><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></p><p><a href="https://www.gestmogan.com/wp-content/uploads/2023/11/Presupuesto-2023.pdf">Presupuesto aprobado con descripcion de las principales partidas presupuestarias 2023</a><a href="https://www.gestmogan.com/wp-content/uploads/2023/11/Presupuesto-2023.pdf"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a>&nbsp; <a href="https://www.gestmogan.com/wp-content/uploads/2023/11/Presupuesto-2023.odt"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png" alt="" width="20" height="20"></a> &nbsp; <a href="https://www.gestmogan.com/wp-content/uploads/2023/11/Presupuesto-2023.docx"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png" alt="" width="20" height="20"></a></p><p><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/INFORME-DE-AUDITORIA-A-WORD.pdf">Informe auditoria 2023</a><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/INFORME-DE-AUDITORIA-A-WORD.pdf"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/INFORME-DE-AUDITORIA-A-WORD.odt"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png" alt="" width="20" height="20"></a>&nbsp; <a href="https://www.gestmogan.com/wp-content/uploads/2024/02/INFORME-DE-AUDITORIA-A-WORD.docx"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png" alt="" width="20" height="20"></a>&nbsp;</p><p>Balance abreviado 2023<img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png" alt="" width="20" height="20"> &nbsp;<img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png" alt="" width="20" height="20"> <strong>(PROXIMAMENTE)</strong></p><p>Perdidas y Ganancias abreviado 2023<img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png" alt="" width="20" height="20"> &nbsp;<img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png" alt="" width="20" height="20"> <strong>(PROXIMAMENTE)</strong></p><p><strong>Subvenciones y Ayudas:</strong> (Durante el 2023 no se han recibido ni ayudas ni subvenciones)</p><p><strong>Modificaciones de credito:</strong> (No han existido modificaciones de crédito en el 2023)</p></div>
    `,
  },
  {
    id: 2,
    title: "Año 2022",
    content: `
    <div ><p style="text-align: center;"><strong>Aquí se puede descargar toda la información económica y contable de la empresa del año 2021<br></strong></p><p><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Capital_Social_MG.pdf">Capital_Social_MG </a><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Capital_Social_MG.pdf"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a>&nbsp; <a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Capital_Social_MG.odt"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png" alt="" width="20" height="20"></a> &nbsp; <a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Capital_Social_MG.doc"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png" alt="" width="20" height="20"></a></p><p><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/Recursos-que-financian-y-Presupuesto-2022.pdf">Recursos que Financian y Presupuesto 2022</a><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/Recursos-que-financian-y-Presupuesto-2022.pdf"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a>&nbsp; <a href="https://www.gestmogan.com/wp-content/uploads/2023/10/Recursos-que-financian-y-Presupuesto-2022.odt"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png" alt="" width="20" height="20"></a> &nbsp; <a href="https://www.gestmogan.com/wp-content/uploads/2023/10/Recursos-que-financian-y-Presupuesto-2022.docx"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png" alt="" width="20" height="20"></a></p><p><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/CUENTAS-ANUALES-MOGAN-GESTION-2022_firmadas_Comprimir.pdf">Cuentas Anuales Mogán gestión 2022 firmadas</a><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/CUENTAS-ANUALES-MOGAN-GESTION-2022_firmadas_Comprimir.pdf"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a> &nbsp;<a href="https://www.gestmogan.com/wp-content/uploads/2023/10/CUENTAS-ANUALES-MOGAN-GESTION-2022.odt"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png" alt="" width="20" height="20"></a>&nbsp; <a href="https://www.gestmogan.com/wp-content/uploads/2023/10/CUENTAS-ANUALES-MOGAN-GESTION-2022.docx"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png" alt="" width="20" height="20"></a></p><p><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/Presupuesto-2022.pdf">Presupuesto aprobado con descripcion de las principales partidas presupuestarias 2022</a><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/Presupuesto-2022.pdf"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a>&nbsp; <a href="https://www.gestmogan.com/wp-content/uploads/2023/10/Presupuesto-2022.odt"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png" alt="" width="20" height="20"></a> &nbsp; <a href="https://www.gestmogan.com/wp-content/uploads/2023/10/Presupuesto-2022.doc"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png" alt="" width="20" height="20"></a></p><p><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/Informe_Auditoria_Cuentas2022.pdf">Informe auditoria 2022</a><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/Informe_Auditoria_Cuentas2022.pdf"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a></p><p><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/Balance_Abreviado_2022..odt">&nbsp;</a><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/Balance_Abreviado_2022_firmado.pdf">Balance_Abreviado_2022_firmado</a><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"> &nbsp;<a href="https://www.gestmogan.com/wp-content/uploads/2023/10/Balance_Abreviado_2022..odt"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png" alt="" width="20" height="20"></a> &nbsp;<a href="https://www.gestmogan.com/wp-content/uploads/2023/10/Balance_Abreviado_2022..docx"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png" alt="" width="20" height="20"></a></p><p><a href="https://www.gestmogan.com/wp-content/uploads/2023/11/Cuenta-de-Perdidas-y-Ganancias-2022.pdf">Perdidas y Ganancias abreviado 2022</a><a href="https://www.gestmogan.com/wp-content/uploads/2023/11/Cuenta-de-Perdidas-y-Ganancias-2022.pdf"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a></p><p><strong>Subvenciones y Ayudas:</strong> (Durante el 2022 no se han recibido ni ayudas ni subvenciones)</p><p><strong>Modificaciones de credito:</strong> (No han existido modificaciones de crédito en el 2021)</p></div>
    `,
  },
  {
    id: 3,
    title: "Año 2021",
    content: `
   <div ><p style="text-align: center;"><strong>Aquí se puede descargar toda la información económica y contable de la empresa del año 2021<br></strong></p><p><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Capital_Social_MG.pdf">Capital_Social_MG </a><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Capital_Social_MG.pdf"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a>&nbsp; <a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Capital_Social_MG.odt"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png" alt="" width="20" height="20"></a> &nbsp; <a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Capital_Social_MG.doc"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png" alt="" width="20" height="20"></a></p><p><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Recursos-que-Financian-y-Presupuesto-2021.pdf">Recursos que Financian y Presupuesto 2021</a><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Recursos-que-Financian-y-Presupuesto-2021.pdf"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a>&nbsp; <a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Recursos-que-Financian-y-Presupuesto-2021.odt"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png" alt="" width="20" height="20"></a> &nbsp; <a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Recursos-que-Financian-y-Presupuesto-2021.docx"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png" alt="" width="20" height="20"></a></p><p><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/cuentas_anuales_2021.pdf">Cuentas Anuales Mogán gestión 2021 firmadas</a><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/cuentas_anuales_2021.pdf"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a></p><p><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Presupuesto_aprobado_con_descripcion_de_las_principales_partidas_presupuestarias_2021.pdf">Presupuesto aprobado con descripcion de las principales partidas presupuestarias 2021</a><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Presupuesto_aprobado_con_descripcion_de_las_principales_partidas_presupuestarias_2021.pdf"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a>&nbsp; <a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Presupuesto_aprobado_con_descripcion_de_las_principales_partidas_presupuestarias_2021.odt"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png" alt="" width="20" height="20"></a> &nbsp; <a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Presupuesto_aprobado_con_descripcion_de_las_principales_partidas_presupuestarias_2021.docx"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png" alt="" width="20" height="20"></a></p><p><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Informe_audioria_2021.pdf">Informe auditoria 2021</a><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Informe_audioria_2021.pdf"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a></p><p><a href="https://www.gestmogan.com/wp-content/uploads/2023/11/Balance-Abreviado_2021.pdf">Balance abreviado 2021</a><a href="https://www.gestmogan.com/wp-content/uploads/2023/11/Balance-Abreviado_2021.pdf"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a></p><p><a href="https://www.gestmogan.com/wp-content/uploads/2023/11/Balance_PerdidasyGanancias2021.pdf">Perdidas y Ganancias abreviado 2021</a><a href="https://www.gestmogan.com/wp-content/uploads/2023/11/Balance_PerdidasyGanancias2021.pdf"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a></p><p><strong>Subvenciones y Ayudas:</strong> (Durante el 2021 no se han recibido ni ayudas ni subvenciones)</p><p><strong>Modificaciones de credito:</strong> (No han existido modificaciones de crédito en el 2021)</p></div>
    `,
  },
  {
    id: 4,
    title: "Año 2020",
    content: `
   <div  ><p style="text-align: center;"><strong>Aquí se puede descargar toda la información económica y contable de la empresa del año 2020<br></strong></p><p><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Capital_Social_MG.pdf">Capital_Social_MG </a><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Capital_Social_MG.pdf"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a>&nbsp; <a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Capital_Social_MG.odt"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png" alt="" width="20" height="20"></a> &nbsp; <a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Capital_Social_MG.doc"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png" alt="" width="20" height="20"></a></p><p><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Recursos-que-Financian-y-Presupuesto-2020.pdf">Recursos que Financian y Presupuesto 2020</a><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Recursos-que-Financian-y-Presupuesto-2020.pdf"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a>&nbsp; <a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Recursos-que-Financian-y-Presupuesto-2020.odt"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png" alt="" width="20" height="20"></a> &nbsp; <a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Recursos-que-Financian-y-Presupuesto-2020.docx"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png" alt="" width="20" height="20"></a></p><p><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/CUENTAS-ANUALES-MOGAN-GESTION-2020_firmadas.pdf">Cuentas Anuales Mogán gestión 2020 firmadas</a><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/CUENTAS-ANUALES-MOGAN-GESTION-2020_firmadas.pdf"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a></p><p><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Presupuesto_aprobado_con_descripcion_de_las_principales_partidas_presupuestarias_2020.pdf">Presupuesto aprobado con descripcion de las principales partidas presupuestarias 2020</a><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Presupuesto_aprobado_con_descripcion_de_las_principales_partidas_presupuestarias_2020.pdf"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a>&nbsp; <a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Presupuesto_aprobado_con_descripcion_de_las_principales_partidas_presupuestarias_2020.odt"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png" alt="" width="20" height="20"></a> &nbsp; <a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Presupuesto_aprobado_con_descripcion_de_las_principales_partidas_presupuestarias_2020.docx"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png" alt="" width="20" height="20"></a></p><p><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Informe-Auditoria-2020.pdf">Informe auditoria 2020</a><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Informe-Auditoria-2020.pdf"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a></p><p><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/balance_abreviado_2020.pdf">Balance abreviado 2020</a><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/balance_abreviado_2020.pdf"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a></p><p><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/PYG_abreviado_2020.pdf">Perdidas y Ganancias abreviado 2020</a><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/PYG_abreviado_2020.pdf"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a></p><p><strong>Subvenciones y Ayudas: </strong>(Durante el 2020 no se han recibido ni ayudas ni subvenciones)</p><p><strong>Modificaciones de credito: </strong>(No han existido modificaciones de crédito en el 2020)</p></div>
    `,
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
            Información de empleados
          </h2>
        </div>

        <div className="space-y-8 lg:space-y-14">
          <div>
            <Tabs items={tabItems} />
          </div>
          <div>
            <div className="prose max-w-full prose-h3:text-sm prose-img:m-0 pb-4 lg:prose-h3:text-lg prose-img:inline-block">
              <h3>
                <strong>
                  <span lang="ES">El</span>
                  <span lang="ES">
                    gastos de personal y su porcentaje sobre el gasto total
                    desde el 2017 hasta el 2023.
                    <a href="https://www.gestmogan.com/wp-content/uploads/2024/02/Informacion-de-economia-y-contabilidad_V2.pdf">
                      <img
                        loading="lazy"
                        className="alignnone"
                        src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png"
                        alt=""
                        width="20"
                        height="20"
                      />
                    </a>
                    <a href="https://www.gestmogan.com/wp-content/uploads/2024/02/Informacion-de-economia-y-contabilidad_V2.ods">
                      <img
                        loading="lazy"
                        className="alignnone"
                        src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png"
                        alt=""
                        width="20"
                        height="20"
                      />
                    </a>
                    <a href="https://www.gestmogan.com/wp-content/uploads/2024/02/Informacion-de-economia-y-contabilidad_V2.xlsx">
                      <img
                        loading="lazy"
                        className="alignnone"
                        src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png"
                        alt=""
                        width="20"
                        height="20"
                      />
                    </a>
                  </span>
                </strong>
              </h3>
            </div>
            <table className="w-full border border-brand-gray-20 ">
              <thead>
                <tr className="bg-brand-gray-25 divide-x divide-brand-gray-20">
                  <th className="px-4 py-3 text-base font-semibold text-gray-600">
                    AÑO
                  </th>
                  <th className="px-4 py-3 text-base font-semibold text-gray-600">
                    GASTO DEL PERSONAL
                  </th>
                  <th className="px-4 py-3 text-base font-semibold text-gray-600">
                    PORCENTAJE SOBRE EL GASTO
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-gray-20 ">
                <tr className="odd:bg-white even:bg-brand-gray-25 hover:bg-brand-gray-50 divide-x divide-brand-gray-20">
                  <td className="px-4 py-3 text-center">2017 </td>
                  <td className="px-4 py-3 text-center">1.118.931,63 € </td>
                  <td className="px-4 py-3 text-center">67% </td>
                </tr>
                <tr className="odd:bg-white even:bg-brand-gray-25 hover:bg-brand-gray-50 divide-x divide-brand-gray-20">
                  <td className="px-4 py-3 text-center">2018 </td>
                  <td className="px-4 py-3 text-center">1.169.520,23 € </td>
                  <td className="px-4 py-3 text-center">67% </td>
                </tr>
                <tr className="odd:bg-white even:bg-brand-gray-25 hover:bg-brand-gray-50 divide-x divide-brand-gray-20">
                  <td className="px-4 py-3 text-center">2019 </td>
                  <td className="px-4 py-3 text-center">1.193.825,89 € </td>
                  <td className="px-4 py-3 text-center">2019 % </td>
                </tr>
                <tr className="odd:bg-white even:bg-brand-gray-25 hover:bg-brand-gray-50 divide-x divide-brand-gray-20">
                  <td className="px-4 py-3 text-center">2020 </td>
                  <td className="px-4 py-3 text-center"> 1.326.665,33 € </td>
                  <td className="px-4 py-3 text-center">71% </td>
                </tr>
                <tr className="odd:bg-white even:bg-brand-gray-25 hover:bg-brand-gray-50 divide-x divide-brand-gray-20">
                  <td className="px-4 py-3 text-center">2021 </td>
                  <td className="px-4 py-3 text-center">1.389.636,65 € </td>
                  <td className="px-4 py-3 text-center">69% </td>
                </tr>
                <tr className="odd:bg-white even:bg-brand-gray-25 hover:bg-brand-gray-50 divide-x divide-brand-gray-20">
                  <td className="px-4 py-3 text-center">2022 </td>
                  <td className="px-4 py-3 text-center">1.630.933,23 €</td>
                  <td className="px-4 py-3 text-center">65% </td>
                </tr>
                <tr className="odd:bg-white even:bg-brand-gray-25 hover:bg-brand-gray-50 divide-x divide-brand-gray-20">
                  <td className="px-4 py-3 text-center">2023 </td>
                  <td className="px-4 py-3 text-center">2.793.367,43 €</td>
                  <td className="px-4 py-3 text-center">71% </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <div className="prose pb-4 max-w-[885px] prose-p:text-sm prose-h3:p-0  prose-img:m-0 prose-h3:my-2 prose-h3:text-sm lg:prose-h3:text-lg prose-img:inline-block">
              <h3>
                <strong>
                  <span lang="ES">El</span>
                  <span lang="ES">
                    Período medio de pago a proveedores 2017 hasta el 2023
                    <a href="https://www.gestmogan.com/wp-content/uploads/2024/02/Informacion-de-economia-y-contabilidad_V2.pdf">
                      <img
                        loading="lazy"
                        className="alignnone"
                        src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png"
                        alt=""
                        width="20"
                        height="20"
                      />
                    </a>
                    <a href="https://www.gestmogan.com/wp-content/uploads/2024/02/Informacion-de-economia-y-contabilidad_V2.ods">
                      <img
                        loading="lazy"
                        className="alignnone"
                        src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png"
                        alt=""
                        width="20"
                        height="20"
                      />
                    </a>
                    <a href="https://www.gestmogan.com/wp-content/uploads/2024/02/Informacion-de-economia-y-contabilidad_V2.xlsx">
                      <img
                        loading="lazy"
                        className="alignnone"
                        src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png"
                        alt=""
                        width="20"
                        height="20"
                      />
                    </a>
                  </span>
                </strong>
              </h3>
              <p>
                De acuerdo con la Resolución del Instituto de Contabilidad y
                Auditoróa de Cuentas, sobre la información a incorporar en las
                memorias de las cuentas anuales abreviadas en relación con el
                periodo medio de pago a proveedores en operaciones comerciales,
                nos han informado de lo siguiente:
              </p>
            </div>
            <table className="w-full border border-brand-gray-20 ">
              <thead>
                <tr className="bg-brand-gray-25 divide-x divide-brand-gray-20">
                  <th className="px-4 py-1 text-base font-semibold text-gray-600">
                    AÑO
                  </th>
                  <th className="px-4 py-1 text-base font-semibold text-gray-600">
                    PERIODO MEDIO DE <br />
                    PAGO A PROVEEDORES (EN DIAS)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-gray-20 ">
                <tr className="odd:bg-white even:bg-brand-gray-25 hover:bg-brand-gray-50 divide-x divide-brand-gray-20">
                  <td className="px-4 py-2 text-center">2017 </td>
                  <td className="px-4 py-2 text-center">31,14 </td>
                </tr>
                <tr className="odd:bg-white even:bg-brand-gray-25 hover:bg-brand-gray-50 divide-x divide-brand-gray-20">
                  <td className="px-4 py-2 text-center">2018 </td>
                  <td className="px-4 py-2 text-center">27,76 </td>
                </tr>
                <tr className="odd:bg-white even:bg-brand-gray-25 hover:bg-brand-gray-50 divide-x divide-brand-gray-20">
                  <td className="px-4 py-2 text-center">2019 </td>
                  <td className="px-4 py-2 text-center">24,29 </td>
                </tr>
                <tr className="odd:bg-white even:bg-brand-gray-25 hover:bg-brand-gray-50 divide-x divide-brand-gray-20">
                  <td className="px-4 py-2 text-center">2020 </td>
                  <td className="px-4 py-2 text-center">21,29 </td>
                </tr>
                <tr className="odd:bg-white even:bg-brand-gray-25 hover:bg-brand-gray-50 divide-x divide-brand-gray-20">
                  <td className="px-4 py-2 text-center">2021 </td>
                  <td className="px-4 py-2 text-center">17,38 </td>
                </tr>
                <tr className="odd:bg-white even:bg-brand-gray-25 hover:bg-brand-gray-50 divide-x divide-brand-gray-20">
                  <td className="px-4 py-2 text-center">2022 </td>
                  <td className="px-4 py-2 text-center">14,63 </td>
                </tr>
                <tr className="odd:bg-white even:bg-brand-gray-25 hover:bg-brand-gray-50 divide-x divide-brand-gray-20">
                  <td className="px-4 py-2 text-center">2023 </td>
                  <td className="px-4 py-2 text-center">14,13 </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <div className="prose pb-4 max-w-[885px] prose-p:text-sm prose-h3:p-0  prose-img:m-0 prose-h3:my-2 prose-h3:text-sm lg:prose-h3:text-lg prose-img:inline-block">
              <h3>
                <strong>
                  <span lang="ES">El</span>
                  <span lang="ES">
                    Gasto efectuado en concepto de arrendamiento de bienes
                    inmuebles. El gasto en arrendamiento de Mogan Gestión
                    Municipal ha sido de:
                    <a href="https://www.gestmogan.com/wp-content/uploads/2024/02/Informacion-de-economia-y-contabilidad_V2.pdf">
                      <img
                        loading="lazy"
                        className="alignnone"
                        src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png"
                        alt=""
                        width="20"
                        height="20"
                      />
                    </a>
                    <a href="https://www.gestmogan.com/wp-content/uploads/2024/02/Informacion-de-economia-y-contabilidad_V2.ods">
                      <img
                        loading="lazy"
                        className="alignnone"
                        src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png"
                        alt=""
                        width="20"
                        height="20"
                      />
                    </a>
                    <a href="https://www.gestmogan.com/wp-content/uploads/2024/02/Informacion-de-economia-y-contabilidad_V2.xlsx">
                      <img
                        loading="lazy"
                        className="alignnone"
                        src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png"
                        alt=""
                        width="20"
                        height="20"
                      />
                    </a>
                  </span>
                </strong>
              </h3>
            </div>
            <table className="w-full border border-brand-gray-20 max-w-[600px] ">
              <thead>
                <tr className="bg-brand-gray-25 divide-x divide-brand-gray-20">
                  <th className="px-4 py-3 text-base text-left font-semibold text-gray-600 w-8/12">
                    EJERCICIO
                  </th>
                  <th className="px-4 py-3 text-base text-left font-semibold text-gray-600">
                    GASTO
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-gray-20 ">
                <tr className="odd:bg-white even:bg-brand-gray-25 hover:bg-brand-gray-50 divide-x divide-brand-gray-20">
                  <td className="px-4 py-2 text-left">2022 </td>
                  <td className="px-4 py-2 text-left">37.924,56 €</td>
                </tr>
                <tr className="odd:bg-white even:bg-brand-gray-25 hover:bg-brand-gray-50 divide-x divide-brand-gray-20">
                  <td className="px-4 py-2 text-left">2023 </td>
                  <td className="px-4 py-2 text-left">40.086,24 € </td>
                </tr>
              </tbody>
            </table>
          </div>
          <article className="prose max-w-[1100px] prose-sm">
            <p>
              Gasto efectuado en concepto de patrocinio y campañas de publicidad
              institucional.
            </p>
            <p>
              La entidad no ha efectuado gasto alguno en los años
              2020-2021-2022-2023 en concepto de patrocinio ni en campañas de
              publicidad institucional
            </p>
            <p>
              Gasto total efectuado en concepto de ayudas y subvenciones para
              actividades económicas. <br />
              Mogán Gestión Municipal no ha efectuado gastos en concepto de
              ayudas ni subvenciones para actividades económicas durante los
              años 2020-2021-2022-2023
            </p>
          </article>
        </div>
        <div className="pt-4 md:pt-20  md:pb-10">
          <p className="text-[10px] sm:text-base lg:text-lg text-black text-center">
            Fecha de la
            <strong> última modificación del portal de transparencia </strong>
            25/05/24
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
