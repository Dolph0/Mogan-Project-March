import Caraousal from "@/components/HomePage/Caraousal.1";
import Tabs from "@/components/Tabs/Tabs";
const tabItems = [
  {
    id: 1,
    title: "Año 2023",
    content: `
     <p style="text-align: center;"><strong>Aquí se puede descargar toda la información de los empleados en los formatos descritos</strong></p><p style="text-align: left;"><strong><br><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/Numero_de_empleados_encomiendas_2023.pdf">Numero de empleados por encomiendas 2023(PDF) </a><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/Numero_de_empleados_encomiendas_2023.xls">(XLS)</a>&nbsp;<a href="https://www.gestmogan.com/wp-content/uploads/2023/10/Numero_de_empleados_encomiendas_2023.ods">(ODS)</a></strong></p><p><strong><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/Relacion_Nominal_trabajadores2023.pdf">Relación nominal de trabajadores 2023</a><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/Relacion_Nominal_trabajadores2023.ods">&nbsp; </a><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/Relacion_Nominal_trabajadores2023.pdf"><img loading="lazy" class="alignnone wp-image-3013" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="24" height="24"></a><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/Relacion_Nominal_trabajadores2023.xlsx"><img loading="lazy" class="alignnone wp-image-3012" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png" alt="" width="24" height="24"></a><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/Relacion_Nominal_trabajadores2023.ods"><img loading="lazy" class="alignnone wp-image-3011" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png" alt="" width="24" height="24"></a></strong></p><p><strong><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/Delegados_sindicales_2023.pdf">Delegados_sindicales 2023(PDF)</a> <a href="https://www.gestmogan.com/wp-content/uploads/2023/10/Delegados_sindicales_2023.xls">(XLS)</a> <a href="https://www.gestmogan.com/wp-content/uploads/2023/10/Delegados_sindicales_2023.ods">(ODS)</a></strong></p><p><strong>Se ha concedido dos (2) compatibilidad con el ejercicio de su actividad profesional&nbsp;</strong></p> 
    `,
  },
  {
    id: 2,
    title: "Año 2022",
    content: `
    <p style="text-align: center;"><strong>Aquí se puede descargar toda la información de los empleados en los formatos descritos</strong></p><p style="text-align: left;"><strong><br><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/2022_NUMERO-DE-EMPLEADOS-POR-ENCOMIENDA.pdf">Numero de empleados por encomiendas 2022(PDF) </a><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/Numero_de_empleados_encomiendas_2022.xls">(XLS)</a>&nbsp;<a href="https://www.gestmogan.com/wp-content/uploads/2023/10/Numero_de_empleados_encomiendas_2022.ods">(ODS)</a></strong></p><p><strong><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/Relacion_Nominal_trabajadores2022.pdf">Relación nominal de trabajadores 2022 </a><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/Relacion_Nominal_trabajadores2022.pdf"><img loading="lazy" class="alignnone wp-image-3013" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="24" height="24"></a><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/Relacion_Nominal_trabajadores2022.xlsx"><img loading="lazy" class="alignnone wp-image-3012" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png" alt="" width="24" height="24"></a><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/Relacion_Nominal_trabajadores2022.ods"><img loading="lazy" class="alignnone wp-image-3011" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png" alt="" width="24" height="24"></a></strong></p><p><strong><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/Delegados_sindicales_2022.pdf">Delegados_sindicales 2022(PDF)</a> <a href="https://www.gestmogan.com/wp-content/uploads/2023/10/Delegados_sindicales_2022.xls">(XLS)</a> <a href="tps://www.gestmogan.com/wp-content/uploads/2023/10/Delegados_sindicales_2022.ods">(ODS)</a></strong></p><p><strong>Se ha concedido una (1) compatibilidad con el ejercicio de su actividad profesional&nbsp;</strong></p>
    `,
  },
  {
    id: 3,
    title: "Año 2021",
    content: `
    <p style="text-align: center;"><strong>Aquí se puede descargar toda la información de los empleados en los formatos descritos</strong></p><p style="text-align: left;"><strong><br><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Numero_de_empleados_encomiendas_2021.pdf">Numero de empleados por encomiendas 2021(PDF) </a><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Numero_de_empleados_encomiendas_2021.xls">(XLS)</a>&nbsp;<a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Numero_de_empleados_encomiendas_2021.ods">(ODS)</a></strong></p><p><strong><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Relacion_Nominal_2021.pdf">Relación nominal de trabajadores 2021(PDF) </a><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Relacion_Nominal_2021.xlsx">(XLS)</a>&nbsp;<a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Relacion_Nominal_2021.ods">(ODS)</a></strong></p><p><strong><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Delegados_sindicales.pdf">Delegados_sindicales 2021(PDF)</a> <a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Delegados_sindicales-1.ods">(XLS)</a> <a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Delegados_sindicales.ods">(ODS)</a></strong></p><p><strong>Se ha concedido una (1) compatibilidad con el ejercicio de su actividad profesional&nbsp;</strong></p>
    `,
  },
  {
    id: 4,
    title: "Año 2020",
    content: `
    <p style="text-align: center;"><strong>Aquí se puede descargar toda la información de los empleados en los formatos descritos</strong></p><p style="text-align: left;"><strong><br><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Numero_de_empleados_encomiendas_1.pdf">Numero de empleados por encomiendas 2020(PDF) </a><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Numero_de_empleados_encomiendas.xlsx">(XLS)</a>&nbsp;<a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Numero_de_empleados_encomiendas.ods">(ODS)</a></strong></p><p><strong><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Relacion_Nominal.pdf">Relación nominal de trabajadores 2020(PDF) </a><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Relacion_Nominal.xlsx">(XLS)</a>&nbsp;<a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Relacion_Nominal.ods">(ODS)</a></strong></p><p><strong><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Delegados_sindicales.pdf">Delegados_sindicales 2020(PDF)</a> <a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Delegados_sindicales-1.ods">(XLS)</a> <a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Delegados_sindicales.ods">(ODS)</a></strong></p><p>&nbsp;</p>
    `,
  },
  {
    id: 5,
    title: "Compatibilidades",
    content: `
    <p><a href="https://www.gestmogan.com/wp-content/uploads/2023/11/COMPATIBILIDAD.pdf">COMPATIBILIDAD</a><a href="https://www.gestmogan.com/wp-content/uploads/2023/11/COMPATIBILIDAD.pdf"><img loading="lazy" class="alignnone wp-image-3013" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="25" height="25"></a><a href="https://www.gestmogan.com/wp-content/uploads/2023/11/COMPATIBILIDAD.docx"><img loading="lazy" class="alignnone wp-image-3012" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png" alt="" width="25" height="25"></a><a href="https://www.gestmogan.com/wp-content/uploads/2023/11/COMPATIBILIDAD.odt"><img loading="lazy" class="alignnone wp-image-3011" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png" alt="" width="25" height="25"></a></p>
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
