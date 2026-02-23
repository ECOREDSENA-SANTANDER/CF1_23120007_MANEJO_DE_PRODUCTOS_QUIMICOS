<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Plan de contingencias y emergencias (Ley 1523 de 2012)

    .row.justify-content-center.align-items-center.mb-1(data-aos="zoom-in-left")
      .col-lg-12
        img.mb-4(src='@/assets/curso/Tema6/img01.png', alt='')
        p En las actividades que involucran la manipulación de productos químicos, pueden presentarse situaciones imprevistas que pongan en riesgo a las personas, las instalaciones y el medio ambiente. Estas situaciones se conocen como contingencias y requieren una respuesta organizada, oportuna y segura. En Colombia, la gestión de las contingencias se enmarca en la Ley 1523 de 2012, por la cual se crea el Sistema Nacional de Gestión del Riesgo de Desastres (SNGRD) y establece la responsabilidad de identificar los riesgos, prepararse para atender emergencias y reducir sus impactos mediante planes, recursos y personal capacitado.
    separador
    #t_6_1.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 6.1 Plan de contingencia: análisis de riesgos y brigadas

    p La atención de una contingencia no comienza en el momento en que ocurre la emergencia, sino mucho antes, a través de la planificación. El plan de contingencia permite identificar los riesgos asociados a la manipulación de productos químicos y definir las acciones necesarias para responder de manera organizada y segura ante un evento no deseado.
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 11.
      span Componentes de un plan de contingencia en la manipulación de productos químicos
    
    .tabla-a.mb-2(data-aos="zoom-in-left")
      table(data-aos="zoom-in-left")
        thead
          tr.text-white
            th.w-25.bg8 Componente
            th.bg8 Descripción
        tbody
          tr.bg7
            td.text-bold Análisis de riesgos
            td.text-left Permite identificar sustancias, actividades y posibles emergencias, con el fin de anticipar escenarios y definir medidas de prevención y respuesta.
          tr
            td.text-bold Recursos disponibles
            td.text-left Incluyen equipos y materiales necesarios para atender emergencias, los cuales deben estar en buen estado y ser de fácil acceso.
          tr.bg7
            td.text-bold Brigadas de emergencia
            td.text-left Están conformadas por personal capacitado que coordina y ejecuta la respuesta inicial ante una situación de riesgo.

    separador
    #t_6_2.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 6.2 Respuesta ante derrames e incendios

    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
      .col-lg-5.col-10.col-md-9
        img.mb-4(src='@/assets/curso/Tema6/img02.png', alt='')
      .col-lg-7
        .row.justify-content-center.mb-1
          .col-lg-2.col-4.col-md-3
            img.mb-4(src='@/assets/curso/Tema6/img03.svg', alt='')
          .col-lg-10
            p Para fortalecer la preparación ante contingencias, la respuesta frente a emergencias químicas debe ejecutarse de manera inmediata y estructurada, priorizando en todo momento la integridad del personal y la mitigación del evento. La efectividad de estas acciones se fundamenta en la identificación temprana del tipo de crisis y en la disponibilidad de recursos técnicos específicos, los cuales deben ser operados bajo protocolos de seguridad previamente establecidos.
        p En el caso de derrames, la intervención se centra en la contención y recuperación mediante el uso de materiales absorbentes especializados, diseñados para evitar la dispersión de sustancias hacia drenajes, fuentes hídricas o áreas comunes. Por su parte, la atención de incendios asociados a productos químicos requiere el empleo de extintores de polvo químico seco tipo ABC, cuya versatilidad permite combatir fuegos derivados de combustibles sólidos, líquidos inflamables y equipos eléctricos, asegurando un control eficiente antes de que el siniestro se propague.
    p El procedimiento de respuesta ante derrames de sustancias químicas se organiza en pasos secuenciales que orientan la actuación inmediata y segura frente a este tipo de emergencias. Su correcta aplicación permite minimizar la exposición, contener el riesgo, proteger al personal y asegurar una disposición adecuada de los residuos generados, contribuyendo al restablecimiento de las operaciones.
    
    .row.justify-content-center.mb-3(data-aos="zoom-in-left")
      .col-md-11.col-lg-12.col-12
        h3.solidos-badge.text-white · Procedimiento básico de respuesta ante derrames de sustancias químicas

    .row.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-left")
      .col-lg-10
        PasosA.color-primario.mb-0(tipo="l")
          .row
            .col-md-8.mb-4.mb-md-0
              h3 Aislar el área afectada
              p Se debe delimitar y restringir el acceso al área donde ocurrió el derrame para evitar la exposición de otras personas. Esto incluye señalizar la zona y retirar a quienes no participan en la atención de la emergencia.
            .col-md-4
              figure
                img(src='@/assets/curso/Tema6/paso1.svg', alt='Texto que describa la imagen')
          

          .row
            .col-md-4.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/Tema6/paso2.svg', alt='Texto que describa la imagen')
            .col-md-8
              h3.text-left Usar elementos de protección personal
              p.text-left Antes de intervenir, es obligatorio utilizar los elementos de protección personal adecuados, de acuerdo con el tipo de sustancia derramada. Esto reduce el riesgo de contacto directo o inhalación del producto.

          .row
            .col-md-8.mb-4.mb-md-0
              h3 Aplicar material absorbente
              p Se emplean materiales absorbentes específicos para contener y recoger la sustancia derramada. Esta acción permite evitar que el producto se disperse y cause mayores afectaciones al ambiente o a las personas.
            .col-md-4
              figure
                img(src='@/assets/curso/Tema6/paso3.svg', alt='Texto que describa la imagen')

          .row
            .col-md-4
              figure
                img(src='@/assets/curso/Tema6/paso4.svg', alt='Texto que describa la imagen')
            .col-md-8.mb-4.mb-md-0
              h3.text-left Recolectar y disponer de forma segura
              p.text-left El material absorbente contaminado y los residuos generados deben recolectarse y manejarse como residuos peligrosos, siguiendo los procedimientos establecidos para su disposición final segura.
            
    p.mb-4 La respuesta ante incendios en escenarios con productos químicos requiere acciones inmediatas y coordinadas para evitar la propagación del fuego y proteger la integridad del personal. Esta tabla organiza los pasos básicos de actuación, desde el control inicial hasta la evacuación y notificación, conforme a los protocolos de emergencia establecidos.

    .row.justify-content-center.mb-3(data-aos="zoom-in-left")
      .col-md-11.col-lg-12.col-12
        h3.solidos-badge.text-white · Procedimiento básico de respuesta ante incendios

    .row.justify-content-center.mb-2(data-aos="zoom-in-left")
      .col-lg-6.mb-4.col-md-8
        img(src='@/assets/curso/Tema6/img04.png', alt='Texto que describa la imagen')
      .col-lg-6
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Detectar y notificar")
            .col-md-12.mb-4.mb-md-0
              p.text-small Activar la alarma, avisar a brigadas o personal responsable e informar sobre la emergencia antes de intervenir.

          .row(numero="2" titulo="Evaluar la situación")
            .col-md-12.mb-4.mb-md-0
              p.text-small Identificar la clase de fuego, el material involucrado, la ventilación, la cercanía a rutas de evacuación y si es seguro intervenir.

          .row(numero="3" titulo="Prepararse para la intervención")
            .col-md-12.mb-4.mb-md-0
              p.text-small Colocar EPP básico, cortar energía o fuentes de combustible si es seguro, y mantener siempre una vía de escape.
          
          .row(numero="4" titulo="Seleccionar el extintor adecuado")
            .col-md-12.mb-4.mb-md-0
              p.text-small Los extintores tipo ABC permiten controlar incendios originados por materiales sólidos, líquidos inflamables y equipos eléctricos. Su uso correcto es fundamental para evitar la propagación del fuego.
          
          .row(numero="5" titulo="Atacar el fuego inicial")
            .col-md-12.mb-4.mb-md-0
              p.text-small Cuando el incendio es pequeño y se cuenta con capacitación, se puede realizar un control inicial realizando ráfagas cortas con el extintor y manteniendo la espalda hacia la salida. Esta acción debe ejecutarse solo si no pone en riesgo la integridad de las personas.
          
          .row(numero="6" titulo="Retirarse, evacuar y notificar")
            .col-md-12.mb-4.mb-md-0
              p.text-small Si el incendio no puede ser controlado, se debe evacuar el área de manera ordenada y notificar a las brigadas de emergencia y a los organismos competentes, siguiendo los protocolos establecidos.

    separador
    #t_6_3.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 6.3 Marco normativo aplicable 

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-1.col-4.mb-3.col-md-3
        img(src='@/assets/curso/Tema6/img05.svg', alt='Texto que describa la imagen')
      .col-lg-11
        p La normatividad colombiana en materia de gestión de riesgos y emergencias por sustancias químicas se fundamenta en un marco legal que integra compromisos internacionales y planes de contingencia específicos. A continuación, se detalla la información sobre los puntos solicitados:

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-4(data-aos="fade-right")
        .row.justify-content-center.ali(titulo="Ley 1523 de 2012")
          .col-md-12.mb-4.mb-md-0
            p ley por la cual se adopta la política nacional de gestión del riesgo de desastres y se establece el Sistema Nacional de Gestión del Riesgo de Desastres (SNGRD). Define el riesgo como el daño potencial que puede causarse por amenazas de origen natural o antrópico no intencional sobre la población, bienes y el ambiente. 
        .row.justify-content-center(titulo="Ley 55 de 1993")(data-aos="fade-right")
          .col-md-12.mb-4.mb-md-0
            p Por medio de la cual se aprueba el “Convenio No. 170 y la Recomendación número 177” sobre la seguridad en la utilización de productos químicos en el trabajo, adoptando convenios internacionales de la Organización Internacional del Trabajo (OIT). Obliga a que el transporte, almacenamiento y manipulación de sustancias se realice con pleno conocimiento de sus riesgos y precauciones.
        .row.justify-content-center(titulo="Decreto 1828 de 2021")(data-aos="fade-right")
          .col-md-12.mb-4.mb-md-0
            p por el cual se adopta el Plan Nacional de Contingencia (PNC) frente a pérdidas de contención de hidrocarburos y otras sustancias peligrosas. Su objetivo es proteger el medio ambiente y la salud de los trabajadores mediante la estructuración de planes de emergencia que se enlacen de manera cooperativa con entidades gubernamentales y empresariales.
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-solid.fa-flask
                p.mb-0 #[b Sinergia institucional:] el decreto apoya normas voluntarias como la ISO 14001 y OHSAS 18001 al exigir planes de emergencia estructurados que faciliten una respuesta coordinada ante desastres químicos o ambientales.
        
        .row.justify-content-center(titulo="Plan de contingencia para derrames y sustancias nocivas")(data-aos="fade-right")
          .col-md-12.mb-4.mb-md-0
            p el programa de riesgo químico debe incluir planes de contingencia para emergencias químicas como un requisito fundamental. A continuación se describe el plan de contingencia: 
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-solid.fa-flask
                p.mb-3 #[b Identificación de amenazas:] detectar posibles eventos indeseables (incendios, explosiones, fugas) en cada etapa del proceso productivo.
              li.mb-0.d-flex
                i.fas.fa-solid.fa-flask
                p.mb-3 #[b Atención de derrames y fugas:] requiere equipos especializados (absorbentes inertes, kits de reparación, barreras para desagües) y personal capacitado en el uso de trajes y equipos de respiración autónoma.
              li.mb-0.d-flex
                i.fas.fa-solid.fa-flask
                p.mb-3 #[b Primeros auxilios:] aplicación de medidas específicas orientadas por la hoja de datos de seguridad (HDS) del producto involucrado.

        .row.justify-content-center(titulo="Herramientas de gestión y comunicación del riesgo")(data-aos="fade-right")
          .col-md-12.mb-4.mb-md-0
            p Para el cumplimiento de esta categoría, las empresas deben implementar:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-solid.fa-flask
                p.mb-1 Hojas de Datos de Seguridad (HDS).
              li.mb-0.d-flex
                i.fas.fa-solid.fa-flask
                p.mb-1 Sistemas de clasificación y etiquetado (SGA – NFPA 704): uso de pictogramas, códigos de colores y números para identificar la peligrosidad física y para la salud de las sustancias.
              li.mb-0.d-flex
                i.fas.fa-solid.fa-flask
                p.mb-1 Señalización de tuberías: identificación de fluidos y dirección de flujo mediante códigos de colores según la Resolución 2400 de 1979 o la norma ANSI A13.1.
    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-lg-12
        img(src='@/assets/curso/Tema6/img06.svg', alt='Texto que describa la imagen')









</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
