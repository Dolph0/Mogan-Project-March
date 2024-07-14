import Accordion from "@/components/Accordion";
import CountDown from "@/components/CountDown";
import Caraousal from "@/components/HomePage/Caraousal.1";
import PopUp from "@/components/PopUp";
import ProgressBar from "@/components/ProgressBar";
import Tabs from "@/components/Tabs/Tabs";
type Props = {};
const page = (props: Props) => {
  const targetDate = "2024-07-30T23:59:59";
  const tabItems = [
    {
      id: 1,
      title: "Documentación",
      content: `
           <p>Aquí puede encontrar la documentación de este procedimiento:</p>
            <p><a href="https://www.gestmogan.com/wp-content/uploads/2024/06/PROCEDIMIENTO-DE-CONTRATACION_1-PLAZA_PERSONAL-DE-MANTENIMIENTO.pdf">PROCEDIMIENTO DE CONTRATACION_1 PLAZA_PERSONAL DE MANTENIMIENTO</a></p>
            <p><a href="https://www.gestmogan.com/wp-content/uploads/2024/06/RESOLUCION-No-031-24.-BASES-PERSONAL-DE-MANTENIMENTO_preferente-discapacitado.pdf">RESOLUCION Nº 031-24. BASES PERSONAL DE MANTENIMENTO_preferente discapacitado</a></p>
            <p><a href="https://www.gestmogan.com/wp-content/uploads/2024/06/RESOLUCION-No-032-24.CONVOCATORIA-PERSONAL-DE-MANTENIMENTO_preferente-discapacitado.pdf">RESOLUCION Nº 032-24.CONVOCATORIA PERSONAL DE MANTENIMENTO_preferente discapacitado</a></p>
            <p><a href="https://www.gestmogan.com/wp-content/uploads/2024/06/RESOLUCION-No-033-24.-PROC-PERSONAL-DE-MANTENIMENTO_preferente-discapacitado.pdf">RESOLUCION Nº 033-24. PROC PERSONAL DE MANTENIMENTO_preferente discapacitado</a></p>
            <p><a href="https://www.gestmogan.com/wp-content/uploads/2024/06/RESOLUCION-No-034-24.-TEMARIO-PERSONAL-DE-MANTENIMENTO_preferente-discapacitado.pdf">RESOLUCION Nº 034-24. TEMARIO PERSONAL DE MANTENIMENTO_preferente discapacitado</a></p>
            <p><a href="https://www.gestmogan.com/wp-content/uploads/2024/06/ANEXO-2.pdf">ANEXO 2</a></p>
            <p><a href="https://www.gestmogan.com/wp-content/uploads/2024/06/ANEXO-3.pdf">ANEXO 3</a></p>
            <p style="color: #FF0000"><b>NUEVA INFORMACIÓN</b></p>
            <p style="color: #FF0000"><b>AVISO IMPORTANTE:</b></p>
            <p><b><a href="https://www.gestmogan.com/wp-content/uploads/2024/06/RESOLUCION-No-035-24.-LUGARDIA-Y-HORA-PERSONAL-DE-MANTENIMENTO_preferente-discapacitado.pdf">RESOLUCION Nº 035-24. LUGAR,DIA Y HORA PERSONAL DE MANTENIMENTO_preferente discapacitado</a></b></p>
            <p>&nbsp;</p>
          `,
    },
    {
      id: 2,
      title: "Lista provisional de admitidos",
      content: `
         
          `,
    },
    {
      id: 3,
      title: "Lista definitiva de admitidos",
      content: `
         <p><a href="https://www.gestmogan.com/wp-content/uploads/2024/07/LISTA-DEFINITIVA-DE-ADMITIDOS_PERSONAL-MANTENIMIENTO_preferente-discapacitado-1.pdf">LISTA DEFINITIVA DE ADMITIDOS_PERSONAL MANTENIMIENTO_preferente discapacitado</a></p>
          `,
    },
    {
      id: 4,
      title: "Resultados de las pruebas",
      content: `
          
          `,
    },
    {
      id: 5,
      title: "Nombramientos",
      content: `
       
          `,
    },
    {
      id: 6,
      title: "INFORMACIÓN IMPORTANTE",
      content: `
        <p><span style="color: #000000;">1º- Establecer el lugar donde se realizará la PRUEBA ESCRITA del próximo 11 de </span><span style="color: #000000;">julio de 2024, del proceso de selección:<br></span><br><span style="color: #000000;">Personal laboral indefinido de “Personal de Mantenimiento” para la empresa </span><span style="color: #000000;">municipal MOGÁN GESTIÓN MUNICIPAL, S.L. (GESTIONA),</span><br><span style="color: #000000;">En el “Edificio Polivalente de Arguineguin” situado en la C/ Damasco, en </span><span style="color: #000000;">la cubierta del Parking subterráneo de Arguineguin.<br></span><br><span style="color: #000000;">2º.- La PRUEBA ESCRITA será a las 10:00 am., del 11 de julio de 2024, a la </span><span style="color: #000000;">finalización de la misma se realizará la entrevista personal.<br></span><br><span style="color: #000000;">3º.- NOTIFIQUESE la presente resolución al servicio y a la administración y </span><span style="color: #000000;">publíquese en la página web y en el tablón de anuncios de la empresa Mogán</span><br><span style="color: #000000;">Gestión Municipal, S.L (GESTIONA) </span></p>
          `,
    },
  ];
  return (
    <>
      <div className="container mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <Caraousal />
        <div className="pt-12 pb-12 sm:pb-20 space-y-12 md:space-y-14 px-4 md:px-8">
          <div className="space-y-3">
            <h2 className="font-extrabold text-center text-xl sm:text-3xl   text-brand-blue !leading-relaxed">
              PROCEDIMIENTO DE SELECCIÓN DE PERSONAL LABORAL INDEFINIDO
              CATEGORÍA “PERSONAL DE MANTENIMIENTO”, CON PRIORIDAD PARA PERSONAS
              CON CERTIFICADO DE DISCAPACIDAD*
            </h2>
            <p className="text-dark/80 text-center text-base">
              * En el caso de que no se presenten solicitudes por personas que
              acrediten discapacidad igual o superior al 33%, la plaza quedará
              desierta y se entrarán a valorar las solicitudes de personas sin
              discapacidad.
            </p>
            <div className="space-y-12  pt-6">
              <div className="space-y-6">
                <h3 className="text-brand-blue text-center text-xl  font-semibold">
                  Plazo para presentación de documentación hasta el día 08 de
                  Julio de 2.024
                </h3>
                <div className="space-y-6">
                  <CountDown targetDate={targetDate} />
                  <p className="text-dark/80 text-center text-base">
                    El plazo ha sido cerrado, ya no se admitirán mas
                    solicitudes. Muchas gracias{" "}
                  </p>
                </div>
                <div className="py-12">
                  <Tabs items={tabItems} />
                </div>
                <div className="border-y divide-y divide-brand-teal border-brand-teal">
                  <Accordion title="Publicación  lista provisional el los días siguientes al ultimo dia de plazo"></Accordion>
                  <Accordion title="plazo serán 5 diás a contar desde la fecha de publicación de la lista provisional">
                    – Sino se subsana en el tiempo establecido no se tendrá en
                    cuenta la nota del examen.
                  </Accordion>
                  <Accordion title='Publicación lista definitiva "No se concreta"'></Accordion>
                  <Accordion title="Prueba escrita y entrevista personal">
                    1º- Establecer el lugar donde se realizará la PRUEBA ESCRITA
                    del próximo 11 de julio de 2024, del proceso de selección:
                    <br /> <br />
                    Personal laboral indefinido de “Personal de Mantenimiento”
                    para la empresa municipal MOGÁN GESTIÓN MUNICIPAL, S.L.
                    (GESTIONA), En el “Edificio Polivalente de Arguineguin”
                    situado en la C/ Damasco, en la cubierta del Parking
                    subterráneo de Arguineguin.
                    <br /> <br />
                    2º.- La PRUEBA ESCRITA será a las 10:00 am., del 11 de julio
                    de 2024, a la finalización de la misma se realizará la
                    entrevista personal.
                    <br /> <br />
                    3º.- NOTIFIQUESE la presente resolución al servicio y a la
                    administración y publíquese en la página web y en el tablón
                    de anuncios de la empresa Mogán Gestión Municipal, S.L
                    (GESTIONA)
                  </Accordion>
                </div>
                <div className="pt-4">
                  <h1 className="text-lg text-brand-blue font-medium mb-1.5">
                    Estado del proceso{" "}
                  </h1>
                  <ProgressBar percent={75} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PopUp classes="bottom-0 left-0">
        <div className="space-y-3 pt-8">
          <h3 className="text-[28px] font-medium leading-snug text-brand-orange text-center">
            AVISO IMPORTANTE
          </h3>
          <div className="flex justify-center">
            <img
              src="https://www.gestmogan.com/wp-content/uploads/2022/11/MOGAN-MARCA-Y-COMUNICACION-300x300.png"
              alt=""
              width="150"
              height="150"
            />
          </div>
          <h5 className="text-3xl text-brand-orange text-center pb-3">
            Proyecto común de fusión
          </h5>
          <p className="text-center text-base text-dark pb-3">
            Click en en enlace para acceder al documento
          </p>
          <p className="text-center text-base pb-6">
            <a
              className="text-brand-orange  hover:text-brand-maron  transition-all flex items-end gap-1.5 justify-center"
              href="https://www.gestmogan.com/wp-content/uploads/2024/05/InformeFusionTrabajadores.pdf"
            >
              Informe Fusion Trabajadores
              <img
                className="size-10 inline"
                src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png"
                alt="pdf"
              />
            </a>
          </p>
        </div>
      </PopUp>
      <PopUp classes="bottom-0 right-0">
        <div className="space-y-3 pt-8">
          <h3 className="text-[28px] font-medium leading-snug text-brand-orange text-center">
            AVISO IMPORTANTE
          </h3>
          <div className="flex justify-center">
            <img
              src="https://www.gestmogan.com/wp-content/uploads/2022/11/MOGAN-MARCA-Y-COMUNICACION-300x300.png"
              alt=""
              width="150"
              height="150"
            />
          </div>

          <h3 className="pb-4 text-2xl text-dark text-center">
            PRUEBA ESCRITA del próximo 11 de julio de 2024 <br />
            En el “Edificio Polivalente de Arguineguin” situado en la C/
            Damasco, en la cubierta del Parking subterráneo de Arguineguin.
            <br />
            <br />
            2º.- La PRUEBA ESCRITA será a las 10:00 am., del 11 de julio de
            2024, a la finalización de la misma se realizará la entrevista
            personal.
            <br />
            <br />
            3º.- NOTIFIQUESE la presente resolución al servicio y a la
            administración y publíquese en la página web y en el tablón de
            anuncios de la empresa Mogán Gestión Municipal, S.L (GESTIONA){" "}
          </h3>
        </div>
      </PopUp>
    </>
  );
};

export default page;
