import Caraousal from "@/components/HomePage/Caraousal.1";
import TabsTwo from "@/components/Tabs/TabsTwo";
const tabItems = [
  {
    id: 1,
    title: "Documentación",
    content: `
    <p style="text-align: center;"><strong>Aquí se puede descargar toda la información refrentes a contratos, convenios y encomiendas de la empresa<br><br></strong></p><p><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/perfil-del-contratante.pdf">Perfíl del contratante</a><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/perfil-del-contratante.pdf"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a></p>
    `,
  },
];

const contratos = [
  {
    id: 1,
    title: "Año 2023",
    content: `
    <div data-tab="1" role="tabpanel" tabindex="0"><p style="text-align: center;"><strong>Aquí se puede descargar toda la información refrentes a contratos y encomiendas de la empresa del año 2023</strong></p><p><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/LISTADO-CONTRATOS-MENORES-2023.pdf">Contratos menores formalizados 2023</a><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/LISTADO-CONTRATOS-MENORES-2023.pdf"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/LISTADO-CONTRATOS-MENORES-2023.xlsx"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png" alt="" width="18" height="18"></a><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/LISTADO-CONTRATOS-MENORES-2023.ods"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png" alt="" width="18" height="18"></a></p><p><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/2023_Encom_Serv_Lectura_Mante_Aguas.pdf">Encomienda servicio de lectura revisión inspección verificación mantenimiento e instalación de contadores para 2023</a><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/2023_Encom_Serv_Lectura_Mante_Aguas.pdf"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/2023_Encom_Serv_Lectura_Mante_Aguas.docx"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png" alt="" width="18" height="18"></a><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/2023_Encom_Serv_Lectura_Mante_Aguas.odt"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png" alt="" width="18" height="18"></a></p><p><a href="https://www.gestmogan.com/wp-content/uploads/2023/11/Modificacion-encomienda-recaudacion.pdf">Encomienda de recaudación 2023</a><a href="https://www.gestmogan.com/wp-content/uploads/2023/11/Modificacion-encomienda-recaudacion.pdf"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png" alt="" width="18" height="18"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png" alt="" width="18" height="18"></p><p><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/2023_Encom_Serv_Limpieza_Of_Municipales.pdf">Encomienda de limpieza de oficinas 2023</a><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/2023_Encom_Serv_Limpieza_Of_Municipales.pdf"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/2023_Encom_Serv_Limpieza_Of_Municipales.docx"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png" alt="" width="18" height="18"></a><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/2023_Encom_Serv_Limpieza_Of_Municipales.odt"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png" alt="" width="18" height="18"></a><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Presupuesto_aprobado_con_descripcion_de_las_principales_partidas_presupuestarias_2021.docx">&nbsp; </a></p><p><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/2023_Encom_Aparcamiento-subterraneo-Arguineguin.pdf">Encomienda de Aparcamiento Arguineguín 2023</a><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/2023_Encom_Aparcamiento-subterraneo-Arguineguin.pdf"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/2023_Encom_Aparcamiento-subterraneo-Arguineguin.docx"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png" alt="" width="18" height="18"></a><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/2023_Encom_Aparcamiento-subterraneo-Arguineguin.odt"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png" alt="" width="18" height="18"></a></p><p><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/2023_Encom_Serv_Asesoria_Juridica_Tribu.pdf">Encomienda de Asesoria Juridica tributaria 2023</a>&nbsp;<a href="https://www.gestmogan.com/wp-content/uploads/2023/10/2023_Encom_Serv_Asesoria_Juridica_Tribu.pdf"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/2023_Encom_Serv_Asesoria_Juridica_Tribu.docx"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png" alt="" width="18" height="18"></a><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/2023_Encom_Serv_Asesoria_Juridica_Tribu.odt"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png" alt="" width="18" height="18"></a></p><p><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/2023_Encom_Serv_Temporada_Playas.pdf">Encomienda de_Servicios de Temporada_8 playas 2023</a><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/2023_Encom_Serv_Temporada_Playas.pdf"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/2023_Encom_Serv_Temporada_Playas.docx"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png" alt="" width="18" height="18"></a><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/2023_Encom_Serv_Temporada_Playas.odt"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png" alt="" width="18" height="18"></a></p><p><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/2023_Encom_Serv_Adm_Archivo.pdf">Encomienda de Servicio de Archivo Municipal 2023</a><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/2023_Encom_Serv_Adm_Archivo.pdf"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/2023_Encom_Serv_Adm_Archivo.docx"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png" alt="" width="18" height="18"></a><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/2023_Encom_Serv_Adm_Archivo.odt"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png" alt="" width="18" height="18"></a></p><p><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/2021_contrato_de_servicios_de_operaciones_app_lpa_park_firmado.pdf">Contrato de servicios de operaciones App LPA PARK firmado 2023</a></p><p><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/ANEXO-DOCUMENTO-DE-FORMALIZACION_PARKING-ARGUINEGUIN_Firmado2.pdf">ANEXO – DOCUMENTO DE FORMALIZACIÓN[_PARKING</a><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/ANEXO-DOCUMENTO-DE-FORMALIZACION_PARKING-ARGUINEGUIN_Firmado2.pdf"> ARGUINEGUIN_</a><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/ANEXO-DOCUMENTO-DE-FORMALIZACION_PARKING-ARGUINEGUIN_Firmado2.pdf"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/ANEXO-DOCUMENTO-DE-FORMALIZACION_PARKING-ARGUINEGUIN_Firmado2.docx"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png" alt="" width="18" height="18"></a><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/ANEXO-DOCUMENTO-DE-FORMALIZACION_PARKING-ARGUINEGUIN_Firmado2.odt"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png" alt="" width="18" height="18"></a><br><br><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/ANEXO-DOCUMENTO-DE-FORMALIZACION_ARCHIVO-MUNICIPAL_Firmado2.pdf">ANEXO – DOCUMENTO DE FORMALIZACIÓN_ARCHIVO MUNICIPAL </a><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/ANEXO-DOCUMENTO-DE-FORMALIZACION_ARCHIVO-MUNICIPAL_Firmado2.pdf"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/ANEXO-DOCUMENTO-DE-FORMALIZACION_ARCHIVO-MUNICIPAL_Firmado2.docx"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png" alt="" width="18" height="18"></a><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/ANEXO-DOCUMENTO-DE-FORMALIZACION_ARCHIVO-MUNICIPAL_Firmado2.odt"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png" alt="" width="18" height="18"></a><br><br><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/ANEXO-DOCUMENTO-DE-FORMALIZACION_FONTANEROS_Firmado2.pdf">ANEXO – DOCUMENTO DE FORMALIZACIÓN_FONTANEROS_</a><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/ANEXO-DOCUMENTO-DE-FORMALIZACION_FONTANEROS_Firmado2.pdf"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/ANEXO-DOCUMENTO-DE-FORMALIZACION_FONTANEROS_Firmado2.docx"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png" alt="" width="18" height="18"></a><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/ANEXO-DOCUMENTO-DE-FORMALIZACION_FONTANEROS_Firmado2.odt"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png" alt="" width="18" height="18"></a><br><br><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/ANEXO-DOCUMENTO-DE-FORMALIZACION_LIMPIEZA_Firmado2.pdf">ANEXO – DOCUMENTO DE FORMALIZACIÓN_LIMPIEZA</a><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/ANEXO-DOCUMENTO-DE-FORMALIZACION_LIMPIEZA_Firmado2.pdf"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/ANEXO-DOCUMENTO-DE-FORMALIZACION_LIMPIEZA_Firmado2.docx"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png" alt="" width="18" height="18"></a><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/ANEXO-DOCUMENTO-DE-FORMALIZACION_LIMPIEZA_Firmado2.odt"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png" alt="" width="18" height="18"></a><br><br><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/ANEXO-DOCUMENTO-DE-FORMALIZACION_SERVICIOS-TEMPORADA_Firmado2.pdf">ANEXO – DOCUMENTO DE FORMALIZACIÓN_SERVICIOS TEMPORADA</a><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/ANEXO-DOCUMENTO-DE-FORMALIZACION_SERVICIOS-TEMPORADA_Firmado2.pdf"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/ANEXO-DOCUMENTO-DE-FORMALIZACION_SERVICIOS-TEMPORADA_Firmado2.docx"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png" alt="" width="18" height="18"></a><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/ANEXO-DOCUMENTO-DE-FORMALIZACION_SERVICIOS-TEMPORADA_Firmado2.odt"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png" alt="" width="18" height="18"></a><br><br><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/ANEXO-DOCUMENTO-DE-FORMALIZACION_ZONA-AZUL_Firmado2.pdf">ANEXO – DOCUMENTO DE FORMALIZACIÓN_ZONA AZUL</a><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/ANEXO-DOCUMENTO-DE-FORMALIZACION_ZONA-AZUL_Firmado2.pdf"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/ANEXO-DOCUMENTO-DE-FORMALIZACION_ZONA-AZUL_Firmado2.docx"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png" alt="" width="18" height="18"></a><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/ANEXO-DOCUMENTO-DE-FORMALIZACION_ZONA-AZUL_Firmado2.odt"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png" alt="" width="18" height="18"></a><br><br><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/ANEXO-DOCUMENTO-DE-FORMALIZACION_ASESORIA-JCA-TRIBUTARIA_Firmado2.pdf">ANEXO – DOCUMENTO DE FORMALIZACIÓN_ASESORIA JCA TRIBUTARIA</a><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/ANEXO-DOCUMENTO-DE-FORMALIZACION_ASESORIA-JCA-TRIBUTARIA_Firmado2.pdf"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/ANEXO-DOCUMENTO-DE-FORMALIZACION_ASESORIA-JCA-TRIBUTARIA_Firmado2.docx"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png" alt="" width="18" height="18"></a><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/ANEXO-DOCUMENTO-DE-FORMALIZACION_ASESORIA-JCA-TRIBUTARIA_Firmado2.odt"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png" alt="" width="18" height="18"></a></p><p>&nbsp;</p><p><strong>NO Ha habido modificaciones de encomiendas&nbsp; durante le periodo 2023</strong></p><p><strong>Durante el 2023 no han habido modificación alguna de los contratos.</strong></p><p><strong>Durante el 2023 no han habido penalidad alguna de los contratos.</strong></p><p><strong>Durante el 2023 no han habido renuncias ni desestimientos de los contratos</strong>.</p><p class="paragraph" style="margin: 0cm; text-align: justify; line-height: 150%; vertical-align: baseline;"><strong><span lang="ES" style="font-family: 'Arial',sans-serif; mso-no-proof: yes;">No hay cartas de servicio elaboradas ni compromisos asumidos en 2023</span></strong></p><p class="paragraph" style="margin: 0cm; text-align: justify; line-height: 150%; vertical-align: baseline;"><strong><br>NO ha habido subcontrataciones&nbsp; durante el periodo 2023</strong></p></div>
    `,
  },
  {
    id: 2,
    title: "Año 2022",
    content: `
   <div data-tab="2" role="tabpanel" tabindex="0"><p style="text-align: center;"><strong>Aquí se puede descargar toda la información refrentes a contratos y encomiendas de la empresa del año 2022</strong></p><p><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/contratos-menores-formalizados-2022.pdf">Contratos menores formalizados 2022</a><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/contratos-menores-formalizados-2022.pdf"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/contratos-menores-formalizados-2022.docx"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png" alt="" width="18" height="18"></a><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/contratos-menores-formalizados-2022.odt"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png" alt="" width="18" height="18"></a></p><p><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/Cert_Redes-abast-agua-y-lect-contadores.pdf">Encomienda servicio de lectura revisión inspección verificación mantenimiento e instalación de contadores para 2022</a><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/Cert_Redes-abast-agua-y-lect-contadores.pdf"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/Cert_Redes-abast-agua-y-lect-contadores.docx"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png" alt="" width="18" height="18"></a><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/Cert_Redes-abast-agua-y-lect-contadores.odt"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png" alt="" width="18" height="18"></a></p><p><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/Encomienda-Recaudacion_2022.pdf">Encomienda de recaudación 2022</a><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/Encomienda-Recaudacion_2022.pdf"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/Encomienda-Recaudacion_2022.docx"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png" alt="" width="18" height="18"></a><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/Encomienda-Recaudacion_2022.odt"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png" alt="" width="18" height="18"></a></p><p><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/Cert_Limpieza-inst-municipales.pdf">Encomienda de limpieza de oficinas 2022</a><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/Cert_Limpieza-inst-municipales.pdf"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/Cert_Limpieza-inst-municipales.docx"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png" alt="" width="18" height="18"></a><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/Cert_Limpieza-inst-municipales.odt"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png" alt="" width="18" height="18"></a><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Presupuesto_aprobado_con_descripcion_de_las_principales_partidas_presupuestarias_2021.docx">&nbsp; </a></p><p><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/Cert_Aparcamiento-Arguineguin.pdf">Encomienda de Aparcamiento Arguineguín</a><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/Cert_Aparcamiento-Arguineguin.pdf"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/Cert_Aparcamiento-Arguineguin.docx"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png" alt="" width="18" height="18"></a><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/Cert_Aparcamiento-Arguineguin.odt"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png" alt="" width="18" height="18"></a></p><p><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/Cert_Asesoria-Juridica-tributaria.pdf">Encomienda de Asesoria Juridica tributaria 2022</a>&nbsp;<a href="https://www.gestmogan.com/wp-content/uploads/2023/10/Cert_Asesoria-Juridica-tributaria.pdf"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/Cert_Asesoria-Juridica-tributaria.docx"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png" alt="" width="18" height="18"></a><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/Cert_Asesoria-Juridica-tributaria.odt"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png" alt="" width="18" height="18"></a></p><p><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/Cert_Enc_Serv_Temporada_8playas.pdf">Encomienda de_Servicios de Temporada_8 playas 2022</a><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/Cert_Enc_Serv_Temporada_8playas.pdf"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/Cert_Enc_Serv_Temporada_8playas.docx"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png" alt="" width="18" height="18"></a><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/Cert_Enc_Serv_Temporada_8playas.odt"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png" alt="" width="18" height="18"></a></p><p><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/Cert_Servicio-de-Archivo-Municipal.pdf">Encomienda de Servicio de Archivo Municipal 2022</a><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/Cert_Servicio-de-Archivo-Municipal.pdf"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/Cert_Servicio-de-Archivo-Municipal.docx"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png" alt="" width="18" height="18"></a><a href="https://www.gestmogan.com/wp-content/uploads/2023/10/Cert_Servicio-de-Archivo-Municipal.odt"><img loading="lazy" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png" alt="" width="18" height="18"></a></p><p><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/2021_contrato_de_servicios_de_operaciones_app_lpa_park_firmado.pdf">Contrato de servicios de operaciones App LPA PARK firmado 2022</a></p><p><strong>NO Ha habido modificaciones de encomiendas&nbsp; durante le periodo 2022</strong></p><p><strong>Durante el 2022 no han habido modificación alguna de los contratos.</strong></p><p><strong>Durante el 2022 no han habido penalidad alguna de los contratos.</strong></p><p><strong>Durante el 2022 no han habido renuncias ni desestimientos de los contratos</strong>.</p><p><strong>No hay cartas de servicio elaboradas ni compromisos asumidos en 2022</strong></p><p><strong>NO ha habido subcontrataciones&nbsp; durante el periodo 2022</strong></p></div>
    `,
  },
  {
    id: 3,
    title: "Año 2021",
    content: `
   <div data-tab="3" role="tabpanel" tabindex="0"><p style="text-align: center;"><strong>Aquí se puede descargar toda la información refrentes a contratos y encomiendas de la empresa del año 2021</strong></p><p>Contratos formalizados 2021<img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></p><p><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Encomienda_Servicio_de_Lectura_revision_inspeccion_verificacion_mantenimiento_e_instalacion_de_contadores_para_2021.pdf">Encomienda servicio de lectura revisión inspección verificación mantenimiento e instalación de contadores para 2021</a><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Encomienda_Servicio_de_Lectura_revision_inspeccion_verificacion_mantenimiento_e_instalacion_de_contadores_para_2021.pdf"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a></p><p><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Encomienda_Recaudacion_2021.pdf">Encomienda de recaudación 2021</a><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Encomienda_Recaudacion_2021.pdf"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a></p><p><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Encomienda_Limpieza_2021.pdf">Encomienda de limpieza de oficinas 2021</a><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Encomienda_Limpieza_2021.pdf"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Presupuesto_aprobado_con_descripcion_de_las_principales_partidas_presupuestarias_2021.docx">&nbsp; </a></p><p><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Encomienda_zona_azul_2021.pdf"><span dir="ltr" role="presentation">Estacionamiento limitado y controlado en la vía pública bajo control horario 2021 (ZONA AZUL)</span></a><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Encomienda_zona_azul_2021.pdf"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a></p><p><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/2021_contrato_de_servicios_de_operaciones_app_lpa_park_firmado.pdf">Contrato de servicios de operaciones App LPA PARK firmado 2021 </a></p><p><strong>Durante el 2021 no han habido modificación alguna de los contratos.</strong></p><p><strong>Durante el 2021 no han habido penalidad alguna de los contratos.</strong></p><p><strong>Durante el 2021 no han habido renuncias ni desestimientos de los contratos</strong>.</p></div>
    `,
  },
  {
    id: 4,
    title: "Año 2020",
    content: `
  <div data-tab="4" role="tabpanel" tabindex="0"><p style="text-align: center;"><strong>Aquí se puede descargar toda la información refrentes a contratos y encomiendas de la empresa del año 2020<br></strong></p><p><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/contratos_formalizados.pdf">Contratos formalizados 2020</a><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/contratos_formalizados.pdf"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a></p><p><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Encomienda_Servicio_de_Lectura_revision_inspeccion_verificacion_mantenimiento_e_instalacion_de_contadores_para_2020.pdf">Encomienda servicio de lectura revisión inspección verificación mantenimiento e instalación de contadores para 2020</a><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Encomienda_Servicio_de_Lectura_revision_inspeccion_verificacion_mantenimiento_e_instalacion_de_contadores_para_2020.pdf"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a></p><p><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Encomienda_Recaudacion_2020.pdf">Encomienda de recaudación 2020</a><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Encomienda_Recaudacion_2020.pdf"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a></p><p><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Encomienda_Limpieza_2020.pdf">Encomienda de limpieza de oficinas 2020</a><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Encomienda_Limpieza_2020.pdf"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a>&nbsp;</p><p><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Encomienda_zona_azul_2020.pdf"><span dir="ltr" role="presentation">Estacionamiento limitado y controlado en la vía pública bajo control horario 2020 (ZONA AZUL)</span></a><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Encomienda_zona_azul_2020.pdf"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a></p><p><strong>Durante el 2020 no han habido modificación alguna de los contratos.</strong></p><p><strong>Durante el 2020 no han habido penalidad alguna de los contratos.</strong></p><p><strong>Durante el 2020 no han habido renuncias ni desestimientos de los contratos.</strong></p></div>
    `,
  },
];

const programados = [
  {
    id: 1,
    title: "Año 2023",
    content: `
    <div id="elementor-tab-content-1351" class="elementor-tab-content elementor-clearfix elementor-active" data-tab="1" role="tabpanel" aria-labelledby="elementor-tab-title-1351" tabindex="0" style="display: block;"><p style="text-align: left;"><strong>Aquí se puede descargar toda la información refrentes a contratos programados de la empresa del año 2023</strong></p><p style="text-align: left;"><strong><br><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/CONTRATOS-PROGRAMADOS-2023-1.pdf">CONTRATOS PROGRAMADOS 2023</a><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/CONTRATOS-PROGRAMADOS-2023-1.pdf"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/CONTRATOS-PROGRAMADOS-2023-1.docx"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png" alt="" width="18" height="18"></a><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/CONTRATOS-PROGRAMADOS-2023-1.odt"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png" alt="" width="18" height="18"></a></strong></p><p style="text-align: left;">&nbsp;</p><div></div></div>
    `,
  },
  {
    id: 2,
    title: "Año 2022",
    content: `
    <div id="elementor-tab-content-1352" class="elementor-tab-content elementor-clearfix elementor-active" data-tab="2" role="tabpanel" aria-labelledby="elementor-tab-title-1352" tabindex="0" style="display: block;"><p style="text-align: center;"><strong>Aquí se puede descargar toda la información refrentes a contratos programados de la empresa del año&nbsp;2022</strong></p><p><strong><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/CONTRATOS-PROGRAMADOS-2022.pdf">CONTRATOS PROGRAMADOS 2022</a><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/CONTRATOS-PROGRAMADOS-2022.pdf"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/CONTRATOS-PROGRAMADOS-2022.docx"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png" alt="" width="18" height="18"></a><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/CONTRATOS-PROGRAMADOS-2022.odt"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png" alt="" width="18" height="18"></a></strong></p></div>
    `,
  },
  {
    id: 3,
    title: "Año 2021",
    content: `
    <div id="elementor-tab-content-1353" class="elementor-tab-content elementor-clearfix elementor-active" data-tab="3" role="tabpanel" aria-labelledby="elementor-tab-title-1353" tabindex="0" style="display: block;"><p style="text-align: center;"><strong>Aquí se puede descargar toda la información refrentes a contratos programados de la empresa del año 2021</strong></p></div>
    `,
  },
  {
    id: 4,
    title: "Año 2020",
    content: `
    <div id="elementor-tab-content-1354" class="elementor-tab-content elementor-clearfix elementor-active" data-tab="4" role="tabpanel" aria-labelledby="elementor-tab-title-1354" tabindex="0" style="display: block;"><p style="text-align: center;"><strong>Aquí se puede descargar toda la información refrentes a contratos programados de la empresa del año2020</strong></p></div>
    `,
  },
];

const tarifas = [
  {
    id: 1,
    title: "Año 2023",
    content: `
    <div id="elementor-tab-content-1331" class="elementor-tab-content elementor-clearfix elementor-active" data-tab="1" role="tabpanel" aria-labelledby="elementor-tab-title-1331" tabindex="0" style="display: block;"><p style="text-align: left;"><strong>Aquí se puede descargar toda la información refrentes a Tarifas&nbsp;de la empresa del año 2023</strong></p><p style="text-align: left;"><strong><br><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/INFORME-Gerente-Tarifas-MGM-2023.pdf">INFORME Tarifas MGM 2023 </a><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/INFORME-Gerente-Tarifas-MGM-2023.pdf"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/INFORME-TARIFAS-MGM-2023.doc"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png" alt="" width="18" height="18"></a><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/INFORME-TARIFAS-MGM-2023.odt"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png" alt="" width="18" height="18"></a></strong></p><p style="text-align: left;">&nbsp;</p><p>&nbsp;</p></div>
    `,
  },
  {
    id: 2,
    title: "Año 2022",
    content: `
    <div id="elementor-tab-content-1332" class="elementor-tab-content elementor-clearfix elementor-active" data-tab="2" role="tabpanel" aria-labelledby="elementor-tab-title-1332" tabindex="0" style="display: block;"><p style="text-align: center;"><strong>Aquí se puede descargar toda la información refrentes a Tarifas de la empresa del año 2022</strong></p></div>
    `,
  },
  {
    id: 3,
    title: "Año 2021",
    content: `
    <div id="elementor-tab-content-1333" class="elementor-tab-content elementor-clearfix elementor-active" data-tab="3" role="tabpanel" aria-labelledby="elementor-tab-title-1333" tabindex="0" style="display: block;"><p style="text-align: center;"><strong>Aquí se puede descargar toda la información refrentes a Tarifas de la empresa del año 2021</strong></p></div>
    `,
  },
  {
    id: 4,
    title: "Año 2020",
    content: `
    <div id="elementor-tab-content-1334" class="elementor-tab-content elementor-clearfix elementor-active" data-tab="4" role="tabpanel" aria-labelledby="elementor-tab-title-1334" tabindex="0" style="display: block;"><p style="text-align: center;"><strong>Aquí se puede descargar toda la información refrentes a Tarifas la empresa del año 2020</strong></p></div>
    `,
  },
];

const procedimientos = [
  {
    id: 1,
    title: "Año 2023",
    content: `
    <div id="elementor-tab-content-1751" class="elementor-tab-content elementor-clearfix elementor-active" data-tab="1" role="tabpanel" aria-labelledby="elementor-tab-title-1751" tabindex="0" style="display: block;"><p style="text-align: left;"><strong>Aquí se puede descargar toda la información refrentes a los catálogos de procedimientos de la empresa del año 2023</strong></p><p style="text-align: left;"><strong>Catálogo de procedimientos <a href="https://www.gestmogan.com/wp-content/uploads/2024/02/Tramites_sede_electronica_ayuntamiento_Recaudacion.pdf"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/Tramites_sede_electronica_ayuntamiento_Recaudacion.xls"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png" alt="" width="18" height="18"></a><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/INFORME-TARIFAS-MGM-2023.ods"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png" alt="" width="18" height="18"></a></strong></p><p style="text-align: left;">&nbsp;</p></div>
    `,
  },
  {
    id: 2,
    title: "Año 2022",
    content: `
    <div id="elementor-tab-content-1752" class="elementor-tab-content elementor-clearfix elementor-active" data-tab="2" role="tabpanel" aria-labelledby="elementor-tab-title-1752" tabindex="0" style="display: block;"><p style="text-align: center;"><strong>Aquí se puede descargar toda la información refrentes a Tarifas de la empresa del año 2022</strong></p><p><strong>Catálogo de procedimientos <a href="https://www.gestmogan.com/wp-content/uploads/2024/02/Tramites_sede_electronica_ayuntamiento_Recaudacion.pdf"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/Tramites_sede_electronica_ayuntamiento_Recaudacion.xls"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png" alt="" width="18" height="18"></a><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/INFORME-TARIFAS-MGM-2023.ods"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png" alt="" width="18" height="18"></a></strong></p></div>
    `,
  },
  {
    id: 3,
    title: "Año 2021",
    content: `
    <div id="elementor-tab-content-1753" class="elementor-tab-content elementor-clearfix elementor-active" data-tab="3" role="tabpanel" aria-labelledby="elementor-tab-title-1753" tabindex="0" style="display: block;"><p style="text-align: center;"><strong>Aquí se puede descargar toda la información refrentes a Tarifas de la empresa del año 2021</strong></p></div>
    `,
  },
  {
    id: 4,
    title: "Año 2020",
    content: `
    <div id="elementor-tab-content-1334" class="elementor-tab-content elementor-clearfix elementor-active" data-tab="4" role="tabpanel" aria-labelledby="elementor-tab-title-1334" tabindex="0" style="display: block;"><p style="text-align: center;"><strong>Aquí se puede descargar toda la información refrentes a Tarifas la empresa del año 2020</strong></p></div>
    `,
  },
];

const prestan = [
  {
    id: 1,
    title: "Año 2023",
    content: `
    <div id="elementor-tab-content-1531" class="elementor-tab-content elementor-clearfix elementor-active" data-tab="1" role="tabpanel" aria-labelledby="elementor-tab-title-1531" tabindex="0" style="display: block;"><p style="text-align: left;"><strong>Aquí se puede descargar toda la información refrentes a los servicios que se prestan en la empresa del año año 2023</strong></p><p><strong>Servicio de Recaudación<br></strong>Horario de oficina de 8:00 a 14:00<br>Servicios integras de rentas y recaudación de los impuestos, tasas, precios publicos y otros ingresos de derecho publico del ayuntamiento</p><p><strong>Zona Azul</strong></p><p><strong>Servicio lectura de contadores</strong></p><p><strong>Servicio Parking Arguineguin<br></strong>Horario 24H<br>Horario Oficina de 08:00 a 22:00<br>Servicio de Rotación y abonados<br><a href="https://www.gestmogan.com/index.php/parking/precios-publicos/">Tarifas</a></p><p><strong>Servicio de hamacas y mantenimiento:<br></strong>Alquiler de sombrillas y hamacas<br>Mantenimientos varios del servicio de playas<br><a href="https://www.gestmogan.com/index.php/servicios-de-temporada/precios-publicos/">Tarifas</a></p><p><strong>Servicio de Salvamento de playas<br></strong>Vigilancia y asistencias por socorristas en playas</p><p><br><strong>AQUÍ LO TIENEN EN FORMATO REUTILIZABLE <a href="https://www.gestmogan.com/wp-content/uploads/2024/02/Servicios-que-se-prestan.pdf"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/Servicios-que-se-prestan.docx"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png" alt="" width="18" height="18"></a><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/Servicios-que-se-prestan.odt"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png" alt="" width="18" height="18"></a></strong></p><p style="text-align: left;">&nbsp;</p></div>
    `,
  },
  {
    id: 2,
    title: "Año 2022",
    content: `
    <div id="elementor-tab-content-1532" class="elementor-tab-content elementor-clearfix elementor-active" data-tab="2" role="tabpanel" aria-labelledby="elementor-tab-title-1532" tabindex="0" style="display: block;"><p style="text-align: center;"><strong>Aquí se puede descargar toda la información refrentes a los servicios que se prestan en la empresa del año 2022</strong></p><p>&nbsp;</p><p><strong>Servicio de Recaudación<br></strong>Horario de oficina de 8:00 a 14:00<br>Servicios integras de rentas y recaudación de los impuestos, tasas, precios publicos y otros ingresos de derecho publico del ayuntamiento</p><p><strong>Zona Azul</strong></p><p><strong>Servicio lectura de contadores</strong></p><p><strong>Servicio Parking Arguineguin<br></strong>Horario 24H<br>Horario Oficina de 08:00 a 22:00<br>Servicio de Rotación y abonados<br><a href="https://www.gestmogan.com/index.php/parking/precios-publicos/">Tarifas</a></p><p><strong>Servicio de hamacas y mantenimiento:<br></strong>Alquiler de sombrillas y hamacas<br>Mantenimientos varios del servicio de playas<br><a href="https://www.gestmogan.com/index.php/servicios-de-temporada/precios-publicos/">Tarifas</a></p><p><strong>AQUÍ LO TIENEN EN FORMATO REUTILIZABLE <a href="https://www.gestmogan.com/wp-content/uploads/2024/02/Servicios-que-se-prestan_2022.pdf"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/Servicios-que-se-prestan_2022.docx"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png" alt="" width="18" height="18"></a><a href="https://www.gestmogan.com/wp-content/uploads/2024/02/Servicios-que-se-prestan_2022.odt"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png" alt="" width="18" height="18"></a></strong></p><p style="text-align: center;"><strong>&nbsp;</strong></p></div>
    `,
  },
  {
    id: 3,
    title: "Año 2021",
    content: `
    <div id="elementor-tab-content-1533" class="elementor-tab-content elementor-clearfix elementor-active" data-tab="3" role="tabpanel" aria-labelledby="elementor-tab-title-1533" tabindex="0" style="display: block;"><p style="text-align: center;"><strong>Aquí se puede descargar toda la información refrentes a los servicios que se prestan en la empresa del año 2021<br><br></strong></p><p><strong>Servicio de Recaudacion</strong></p><p><strong>Servicio de Limpieza de oficinas</strong></p><p><strong>Zona Azul</strong></p><p><strong>Servicio lectura de contadores</strong></p><p style="text-align: center;"><strong>&nbsp;</strong></p></div>
    `,
  },
  {
    id: 4,
    title: "Año 2020",
    content: `
    <div id="elementor-tab-content-1534" class="elementor-tab-content elementor-clearfix elementor-active" data-tab="4" role="tabpanel" aria-labelledby="elementor-tab-title-1534" tabindex="0" style="display: block;"><p style="text-align: left;"><strong>Aquí se puede descargar toda la información refrentes a los servicios que se prestan en la empresa del año 2020</strong></p><p><strong>Servicio de Recaudacion</strong></p><p><strong>Servicio de Limpieza de oficinas</strong></p><p><strong>Zona Azul</strong></p><p><strong>Servicio lectura de contadores</strong></p></div>
    `,
  },
];

const convenios = [
  {
    id: 1,
    title: "Año 2023",
    content: `
    <div id="elementor-tab-content-1291" class="elementor-tab-content elementor-clearfix elementor-active" data-tab="1" role="tabpanel" aria-labelledby="elementor-tab-title-1291" tabindex="0" style="display: block;"><p style="text-align: center;"><strong>Aquí se puede descargar toda la información refrentes a convenios de la empresa del año 2023</strong></p><p>No hay convenios en el año 2023</p></div>
    `,
  },
  {
    id: 2,
    title: "Año 2022",
    content: `
    <div id="elementor-tab-content-1292" class="elementor-tab-content elementor-clearfix elementor-active" data-tab="2" role="tabpanel" aria-labelledby="elementor-tab-title-1292" tabindex="0" style="display: block;"><p style="text-align: center;"><strong>Aquí se puede descargar toda la información refrentes a convenios de la empresa del año 2022</strong></p><p>No hay convenios en el año 2022</p></div>
    `,
  },
  {
    id: 3,
    title: "Año 2021",
    content: `
    <div id="elementor-tab-content-1293" class="elementor-tab-content elementor-clearfix elementor-active" data-tab="3" role="tabpanel" aria-labelledby="elementor-tab-title-1293" tabindex="0" style="display: block;"><p style="text-align: center;"><strong>Aquí se puede descargar toda la información refrentes a convenios de la empresa del año 2021</strong></p><p>No hay convenios en el año 2021</p></div>
    `,
  },
  {
    id: 4,
    title: "Año 2020",
    content: `
    <div id="elementor-tab-content-1294" class="elementor-tab-content elementor-clearfix elementor-active" data-tab="4" role="tabpanel" aria-labelledby="elementor-tab-title-1294" tabindex="0" style="display: block;"><p style="text-align: center;"><strong>Aquí se puede descargar toda la información refrentes a convenios de la empresa del año 2020<br></strong></p><p><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Convenio_marco_de_colaboracion_entre_SAGULPA_y_Mogan_Gestion_Municipal.pdf">Convenio marco de colaboración entre SAGULPA y Mogán Gestión Municipal 2020</a><a href="https://www.gestmogan.com/wp-content/uploads/2022/10/Convenio_marco_de_colaboracion_entre_SAGULPA_y_Mogan_Gestion_Municipal.pdf"><img loading="lazy" class="alignnone" src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png" alt="" width="20" height="20"></a></p></div>
    `,
  },
];

const licitaciones = [
  {
    id: 1,
    title: "Año 2023",
    content: `
    <div id="elementor-tab-content-2111" class="elementor-tab-content elementor-clearfix elementor-active" data-tab="1" role="tabpanel" aria-labelledby="elementor-tab-title-2111" tabindex="0" style="display: block;"><p style="text-align: center;"><strong>Aquí se puede descargar toda la información refrentes a las licitaciones de la empresa del año 2023</strong></p><p><strong>No hay licictaciones en 2023</strong></p><p>No hay licitaciones y por tanto tampoco pliegos en los diferentes años ni mesas de contratación</p><p><strong>En el 2023 no se ha anulado ninguna licitación </strong></p></div>
    `,
  },
  {
    id: 2,
    title: "Año 2022",
    content: `
    <div id="elementor-tab-content-2112" class="elementor-tab-content elementor-clearfix elementor-active" data-tab="2" role="tabpanel" aria-labelledby="elementor-tab-title-2112" tabindex="0" style="display: block;"><p style="text-align: center;"><strong>Aquí se puede descargar toda la información refrentes a las licitaciones de la empresa del año 2022</strong></p><p><strong>No hay licictaciones en 2022</strong></p><p>No hay licitaciones y por tanto tampoco pliegos en los diferentes años ni mesas de contratación</p><p><strong>En el 2022 no se ha anulado ninguna licitación</strong></p></div>
    `,
  },
  {
    id: 3,
    title: "Año 2021",
    content: `
    <div id="elementor-tab-content-2113" class="elementor-tab-content elementor-clearfix elementor-active" data-tab="3" role="tabpanel" aria-labelledby="elementor-tab-title-2113" tabindex="0" style="display: block;"><p style="text-align: center;"><strong>Aquí se puede descargar toda la información refrentes a las licitaciones de la empresa del año 2021</strong></p><p><strong>No hay licitaciones y por tanto tampoco pliegos en los diferentes años ni mesas de contratación</strong></p><p><strong>En el 2021 no se ha anulado ninguna licitación</strong></p></div>
    `,
  },
  {
    id: 4,
    title: "Año 2020",
    content: `
    <div id="elementor-tab-content-2114" class="elementor-tab-content elementor-clearfix elementor-active" data-tab="4" role="tabpanel" aria-labelledby="elementor-tab-title-2114" tabindex="0" style="display: block;"><p style="text-align: center;"><strong>Aquí se puede descargar toda la información refrentes a las licitaciones de la empresa del año 2020<br></strong></p><h5 class="gutentor-single-item-title">COINPRE (APROBADA)</h5><p class="gutentor-single-item-desc">Servicio de mantenimiento y actualización del software para la gestión integral de ingresos, Desarrollos Adiciones y Atención a Usuarios</p></div>
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
            Contratos, encomiendas y convenios
          </h2>
        </div>

        <div className="space-y-8 lg:space-y-14 lg:pt-10">
          <div className="max-lg:space-y-2">
            <h3 className="text-xl lg:text-2xl font-semibold text-brand-blue">
              Información general de contratación
            </h3>
            <article className="prose max-w-full prose-img:m-0 prose-p:my-4 prose-base prose-strong:text-gray-600 prose-a:font-semibold prose-img:inline-block  prose-p:w-full hover:prose-a:text-brand-blue  prose-a:text-brand-pink-100 prose-a:inline-block prose-a:no-underline prose-a:m-0 ">
              <p>
                <b>
                  <i>«Mogán Gestión Municipal, S.L. con CIF: B35745843</i>
                </b>
                <i>
                  &nbsp;es una Sociedad mercantil constituida el 27 de febrero
                  de 2003, con capital de titularidad exclusiva del Ayuntamiento
                  de Mogán. La misma está inscrita en el registro mercantil de
                  Las Palmas.Tomo: 1641 Libro: 0 Folio: 14 Sección: 8 Hoja: GC
                  29840 y, asimismo, en mérito del artículo 3.3 de la Ley
                  9/2017, de 8 de noviembre, de Contratos del Sector Público,
                  por la que se transponen al ordenamiento jurídico español las
                  Directivas del Parlamento Europeo y del Consejo 2014/23/UE y
                  2014/24/UE, de 26 de febrero de 2014,( en adelante
                  LCSP),&nbsp; ostenta poder adjudicador, recogiéndose en el
                  Preámbulo de la LCSP&nbsp; lo siguiente:
                </i>
              </p>
              <p>
                <i>“</i>
                <i>
                  En el Libro III se recoge la regulación de los contratos de
                  poderes adjudicadores no Administración Pública, en donde la
                  principal novedad es la supresión de las instrucciones de
                  contratación, así como del resto de entes del sector público
                  que no tengan el carácter de poderes adjudicadores,
                  estableciéndose claramente la regulación que les resulta
                  aplicable. En efecto, como se ha dicho antes, se suprimen para
                  los contratos no sujetos a regulación armonizada las
                  instrucciones en el caso de los poderes adjudicadores no
                  Administraciones Públicas, debiendo adjudicar estos contratos
                  por los mismos procedimientos establecidos para dichas
                  Administraciones Públicas, si bien se les permite utilizar de
                  forma indistinta cualesquiera de ellos, a excepción del
                  negociado sin publicidad, que solo se podrá hacer uso de él,
                  en los mismos supuestos que las citadas Administraciones”
                </i>
              </p>
              <p>
                <i>Por consiguiente,&nbsp;</i>
                <b>
                  <i>
                    <u>
                      de acuerdo a la actual LCSP se suprime con carácter
                      general para los contratos de los poderes adjudicadores no
                      Administración Pública la obligación de aprobar las
                      instrucciones de contratación,&nbsp;
                    </u>
                  </i>
                </b>
                <i>
                  debiendo someternos para la adjudicación los contratos no
                  sujetos a regularización armonizada y, con la sola excepción
                  del negociado sin publicidad, a los mismos procedimientos
                  establecidos para las administraciones públicas recogidas en
                  la LCSP».
                </i>
              </p>
              <p>
                <a href="https://www.gestmogan.com/wp-content/uploads/2024/04/instrucciones_internas_de_contratacion.pdf">
                  <img
                    loading="lazy"
                    src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png"
                    alt=""
                    width="20"
                    height="20"
                  />
                </a>
                <a href="https://www.gestmogan.com/wp-content/uploads/2024/04/instrucciones_internas_de_contratacion.docx">
                  <img
                    loading="lazy"
                    src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png"
                    alt=""
                    width="18"
                    height="18"
                  />
                </a>
                <a href="https://www.gestmogan.com/wp-content/uploads/2024/04/instrucciones_internas_de_contratacion.odt">
                  <img
                    loading="lazy"
                    src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png"
                    alt=""
                    width="18"
                    height="18"
                  />
                </a>
              </p>
            </article>
            <TabsTwo items={tabItems} />
          </div>

          <div className="max-lg:space-y-2">
            <h3 className="text-xl lg:text-2xl font-semibold text-brand-blue">
              Contratos y encomiendas
            </h3>
            <TabsTwo items={contratos} />
          </div>

          <div className="max-lg:space-y-2">
            <h3 className="text-xl lg:text-2xl font-semibold text-brand-blue">
              Contratos Programados
            </h3>
            <TabsTwo items={programados} />
          </div>
          <div className="max-lg:space-y-2">
            <h3 className="text-xl lg:text-2xl font-semibold text-brand-blue">
              Tarifas
            </h3>
            <TabsTwo items={tarifas} />
          </div>
          <div className="max-lg:space-y-2">
            <h3 className="text-xl lg:text-2xl font-semibold text-brand-blue">
              Catálogo de procedimientos
            </h3>
            <TabsTwo items={procedimientos} />
          </div>
          <div className="max-lg:space-y-2">
            <h3 className="text-xl lg:text-2xl font-semibold text-brand-blue">
              Servicios que se prestan
            </h3>
            <TabsTwo items={prestan} />
          </div>
          <div className="max-lg:space-y-2">
            <h3 className="text-xl lg:text-2xl font-semibold text-brand-blue">
              Convenios
            </h3>
            <TabsTwo items={convenios} />
          </div>
          <div className="max-lg:space-y-2">
            <h3 className="text-xl lg:text-2xl font-semibold text-brand-blue">
              Licitaciones
            </h3>
            <TabsTwo items={licitaciones} />
          </div>
          <div className="space-y-3">
            <h3 className="text-center">
              <a
                className="text-xl md:text-2xl lg:text-3xl xl:text-4xl w-full font-semibold text-brand-pink-100"
                href="https://www.gestmogan.com/wp-content/uploads/2024/02/contratacion_faqs.pdf"
              >
                ENLACE A PREGUNTAS FRECUENTES Y ACLARACIONES RELATIVAS AL
                CONTENIDO DE LOS CONTRATOS (FAQ)
              </a>
            </h3>
            <p className="flex gap-3 justify-center">
              <a href="https://www.gestmogan.com/wp-content/uploads/2024/02/contratacion_faqs.pdf">
                <img
                  loading="lazy"
                  src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png"
                  alt=""
                  width="48"
                  height="48"
                />
              </a>
              <a href="https://www.gestmogan.com/wp-content/uploads/2024/02/contratacion_faqs.docx">
                <img
                  loading="lazy"
                  src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-microsoft-word-2019-48.png"
                  alt=""
                  width="48"
                  height="48"
                />
              </a>
              <a href="https://www.gestmogan.com/wp-content/uploads/2024/02/contratacion_faqs.odt">
                <img
                  loading="lazy"
                  src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-odt-48.png"
                  alt=""
                  width="48"
                  height="48"
                />
              </a>
            </p>
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
