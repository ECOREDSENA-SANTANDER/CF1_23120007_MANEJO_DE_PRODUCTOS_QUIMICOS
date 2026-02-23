<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Documentos técnicos y de seguridad 

    .row.justify-content-center(data-aos="fade-down").bg6.mb-4
      .col-lg-5.pe-lg-0.h-100.izq.d-none.d-lg-block
        img(src="@/assets/curso/Tema3/img01.png")
      .col-lg-7.ps-lg-0
        .bg6.p-4.p-lg-4.h-100
            .row.mb-2
              .col-lg-2.col-3.col-md-2
                img(src="@/assets/curso/Tema3/ico.svg")
            p El manejo seguro de productos químicos es un aspecto fundamental en la prevención de riesgos laborales y ambientales. La legislación colombiana (Ley 55 de 1993) y los estándares internacionales exigen que todo producto químico sea manipulado con pleno conocimiento de sus riesgos intrínsecos. El desconocimiento de propiedades, dosis y tiempos de exposición es una causa frecuente de accidentes. Por tanto, es necesario que el aprendiz logre diferenciar y utilizar adecuadamente los principales instrumentos de comunicación de peligros que existen además de las etiquetas de los productos: la ficha técnica, la hoja de datos de seguridad y la tarjeta de emergencia, entendiendo que la seguridad química depende de la interacción entre los peligros del producto y las condiciones reales durante la manipulación.
     
    separador
    #t_3_1.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 3.1. Ficha técnica

    .row.justify-content-center.align-items-center.mb-2
      .col-lg-5.col-10.mb-3.col-md-9
        img(src="@/assets/curso/Tema3/img02.png")
      .col-lg-7
        p La ficha técnica de un producto químico o una materia prima se define como un documento enfocado en la descripción de las características técnicas (funcionales y comerciales), composición general y comportamiento en condiciones de uso especificas; al igual que la etiqueta son consideradas instrumentos esenciales ya que contienen y garantizan información clave y relevante del producto (Grisales, 2013). A diferencia de las hojas de datos de seguridad, las fichas técnicas no están reguladas por un marco normativo estandarizado y su contenido puede variar según la empresa o el fabricante. 
        p.bg12.p-4 Su finalidad principal es presentar información operativa y de desempeño del producto para apoyar su selección y aplicación en procesos industriales o comerciales. La estructura suele incluir secciones como descripción general, propiedades físicas y químicas, componentes principales, métodos de aplicación, condiciones de almacenamiento, requisitos de rendimiento y certificaciones técnicas. 
    
    separador
    #t_3_2.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 3.2. Hoja de Datos de Seguridad (HDS)

    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
      .col-lg-1.col-4.col-md-3.mb-3
        img(src="@/assets/curso/Tema3/img03.svg")
      .col-lg-11
        p Denominada internacionalmente #[em Safety Data Sheet] (SDS), es un documento normativo diseñado para comunicar de manera completa, clara, detallada y estandarizada los peligros asociados a una sustancia química y orientar su manejo seguro. El SGA establece que la HDS es un elemento esencial de la comunicación de peligros de un producto químico que proporciona datos sobre efectos en la salud, riesgos físicos y químicos, impactos ambientales y medidas de prevención.
    p La Norma Técnica Colombiana NTC 4435 establece los requisitos para la preparación de las HDS y define un formato estándar de 16 secciones que pueden ser agrupadas en 4 bloques:

    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-5(data-aos="fade-right")
          .row.justify-content-center.align-items-center(titulo="Bloque de identificación (secciones 1-3) ")
            .col-md-12.mb-4.mb-md-0.col-lg-12
              p identificación del producto (sustancia o mezcla) y de la compañía, identificación de peligros (SGA) y composición de los ingredientes.
    
          .row.justify-content-center.align-items-center(titulo="Bloque de emergencias (secciones 4-6) ")
            .col-md-12.mb-4.mb-md-0.col-lg-12
              p medidas vitales de primeros auxilios, control de incendios y respuesta ante vertidos accidentales.
          .row.justify-content-center.align-items-center(titulo="Bloque de manejo y precaución (secciones 7-10) ")
            .col-md-12.mb-4.mb-md-0.col-lg-12
              p manipulación, almacenamiento, medidas de lucha contra incendios y vertido accidental, controles de exposición (protección individual) y propiedades físicas y químicas (estabilidad y reactividad).
          .row.justify-content-center.align-items-center(titulo="Bloque complementario (secciones 11-16) ")
            .col-md-12.mb-4.mb-md-0.col-lg-12
              p información toxicológica, ecológica (ecotox), disposición final, transporte y regulación.
      .col-lg-4.col-8.mb-4.col-md-6
        img(src="@/assets/curso/Tema3/img04.png")

      p Es importante comprender que la HDS es obligatoria para comunicar peligros a trabajadores y empleadores, sirviendo de base para elaborar programas de protección y planes de emergencia. Además, interpretar etiquetas, pictogramas y palabras de advertencia es fundamental para vincular directamente la información visual con la información técnica detallada en una HDS.


    separador
    #t_3_3.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 3.3. Tarjeta de emergencia

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-lg-3.col-8.mb-3.col-md-6
        img(src="@/assets/curso/Tema3/img05.png")
      .col-lg-6
        p La gestión técnica del riesgo químico se sustenta mediante una estructura documental estandarizada, donde la Hoja de Datos de Seguridad (HDS) actúa como el pilar preventivo, suministrando información técnica detallada para el manejo seguro de una sustancia química. Sin embargo, para garantizar la seguridad en entornos operativos y de transporte, esta estructura se complementa con las tarjetas de emergencia, establecidas en la NTC 4532, y que priorizan la respuesta inmediata ante incidentes críticos. 
        p La tarjeta de emergencia es un documento corto y de fácil acceso, con información clara y concisa, diseñado para una lectura rápida en situaciones críticas. Su elaboración es de cumplimiento obligatorio bajo el Decreto 1609 de 2002 para el transporte de mercancías peligrosas. A diferencia de la HDS detallada, esta tarjeta resume la identificación del peligro y los controles inmediatos para proteger la vida y el medio ambiente en la "zona caliente" de un incidente.
      .col-lg-3.col-8.col-md-6
        img(src="@/assets/curso/Tema3/img06.svg")
    
    .row.justify-content-center.mb-3(data-aos="zoom-in-left")
      .col-md-11.col-lg-12.col-12
        h3.solidos-badge.text-white · Obligatoriedad

    p según el Decreto 1609 de 2002, la elaboración de este documento siguiendo la Norma Técnica NTC 4532 es de obligatorio cumplimiento para el transporte de mercancías peligrosas en Colombia.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        img(src="@/assets/curso/Tema3/img07.png")
    .row.justify-content-center.mb-3(data-aos="zoom-in-left")
      .col-md-11.col-lg-12.col-12
        h3.solidos-badge.text-white · Función
    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-lg-12
        p.mb-4 brindar datos inmediatos a los primeros respondientes (conductores, bomberos, brigadistas) sobre cómo identificar el peligro, qué hacer y qué no hacer en los primeros minutos críticos. la norma exige que la información se estructure de manera lógica para facilitar la toma de decisiones. 
        img(src="@/assets/curso/Tema3/img08.png")
    .row.justify-content-center.mb-3(data-aos="zoom-in-left")
      .col-md-11.col-lg-12.col-12
        h3.solidos-badge.text-white · Estructura

    p.mb-3 los puntos clave que incluye la tarjeta de emergencia se desglosan así:

    .fondot3.p-5(data-aos="zoom-in-left")
      .tarjeta.bg14.p-4
        PasosB.color-acento-botones
          .row.justify-content-center(titulo="")
            .col-lg-5.col-md-8.mb-3
              img(src='@/assets/curso/Tema3/sli1.png', alt='')
            .col-lg-5.mb-4.mb-md-0
              h5 Identificación del producto 
              p nombre comercial, químico y el número de Naciones Unidas (UN) para asegurar que se está consultando la tarjeta correcta.
          
          .row.justify-content-center(titulo="")
            .col-lg-5.col-md-8.mb-3
              img(src='@/assets/curso/Tema3/sli2.png', alt='')
            .col-lg-5.mb-4.mb-md-0
              h5 Identificación de peligros
              p peligros inminentes, como riesgo de incendio, explosión, toxicidad aguda o corrosividad. utiliza la clasificación y el etiquetado del sistema (como los rombos de la ONU o pictogramas del SGA) para alertar visualmente sobre la severidad.
          
          .row.justify-content-center(titulo="")
            .col-lg-5.col-md-8.mb-3
              img(src='@/assets/curso/Tema3/sli3.png', alt='')
            .col-lg-5.mb-4.mb-md-0
              h5 Controles de exposición y protección personal
              p detalla el equipo mínimo requerido para acercarse al incidente de forma segura, como el tipo de guantes, traje de protección y protección respiratoria específica.
          
          .row.justify-content-center(titulo="")
            .col-lg-5.col-md-8.mb-3
              img(src='@/assets/curso/Tema3/sli4.png', alt='')
            .col-lg-5.mb-4.mb-md-0
              h5 Estabilidad y reactividad
              p advierte si el producto puede reaccionar violentamente con el agua, el aire u otras sustancias cercanas, generando gases tóxicos o explosiones.
          
          .row.justify-content-center(titulo="")
            .col-lg-5.col-md-8.mb-3
              img(src='@/assets/curso/Tema3/sli5.png', alt='')
            .col-lg-5.mb-4.mb-md-0
              h5 Medidas de primeros auxilios
              p instrucciones básicas de estabilización para víctimas afectadas por inhalación, ingestión o contacto dérmico / ocular (ejemplo: no inducir el vómito, lavar con abundante agua) mientras llega ayuda médica especializada.
          
          .row.justify-content-center(titulo="")
            .col-lg-5.col-md-8.mb-3
              img(src='@/assets/curso/Tema3/sli6.png', alt='')
            .col-lg-5.mb-4.mb-md-0
              h5 Medidas contra incendios
              p especifica qué agentes extintores usar (ejemplo: polvo químico, CO2) y cuáles están prohibidos (ejemplo: no usar agua a chorro, si el químico reacciona con ella).
          
          .row.justify-content-center(titulo="")
            .col-lg-5.col-md-8.mb-3
              img(src='@/assets/curso/Tema3/sli7.png', alt='')
            .col-lg-5.mb-4.mb-md-0
              h5 Medidas en caso de vertido accidental (derrames)
              p instrucciones para contener la fuga, materiales absorbentes recomendados (inertes) y distancias de aislamiento inicial para proteger a la comunidad y al medio ambiente.

    separador
    #t_3_4.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 3.4. Diferenciación documental 

    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
      .col-lg-1.col-4.col-md-3.mb-3
        img(src="@/assets/curso/Tema3/img08.svg")
      .col-lg-11
        p El análisis de los principales elementos que conforman la hoja de datos de seguridad y otros documentos asociados a la comunicación del riesgo químico, permite diferenciar la función de cada instrumento, interpretar la información técnica y de seguridad contenida en ellos y aplicarla en la prevención y respuesta ante incidentes. 
 
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Tabla 4.
        span Ejemplo del uso de documentación técnica y de seguridad

    .tabla-a.mb-4(data-aos="zoom-in-left")
      table
        thead
          tr.text-white
            th.bg8.w-25 Aspecto
            th.bg8 Descripción
        tbody
          tr.bg7
            td.text-left.fw-bold Discriminar
            td.text-left Diferenciar entre una ficha técnica comercial y una HDS normativa, reconociendo el alcance legal de cada una.
          tr
            td.text-left.fw-bold Interpretar
            td.text-left 
              .d-flex
                div Localizar información crítica en las 16 secciones de una HDS (como primeros auxilios o medidas contra incendios) para tomar decisiones informadas.
          tr.bg7
            td.text-left.fw-bold Aplicar
            td.text-left 
              .d-flex
                div Utilizar la información de la documentación para seleccionar el elemento de protección personal adecuado y establecer medidas de almacenamiento seguro (evitando incompatibilidades químicas).
          tr
            td.text-left.fw-bold Responder
            td.text-left 
              .d-flex
                div Identificar los protocolos de actuación rápida mediante la lectura de tarjetas de emergencia conforme a la NTC 4532.
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-lg-7
        p Los documentos clave utilizados en la gestión de productos químicos permiten identificar su enfoque, contenido y marco normativo, diferenciando claramente la función comercial de la ficha técnica y la función preventiva de la Hoja de Datos de Seguridad. Reconocer esta distinción es fundamental, ya que cada documento cumple un propósito específico dentro de la comunicación de peligros. Esta claridad facilita su correcta aplicación en contextos formativos y laborales, fortaleciendo la toma de decisiones y promoviendo prácticas seguras en el manejo de sustancias químicas.
      .col-lg-5
        img(src="@/assets/curso/Tema3/img09.svg")

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Tabla 5.
        span Ficha técnica vs. Hoja de Datos de Seguridad (HDS) 

    .tabla-a.mb-4(data-aos="zoom-in-left")
      table
        thead
          tr.text-white
            th.bg8 Característica
            th.bg8 Ficha técnica
            th.bg8 HDS
        tbody
          tr.bg7
            td.text-left.fw-bold Enfoque principal
            td.text-left 
              .d-flex
                div Comercial y funcional. Describe para qué sirve el producto y cómo rinde.
            td.text-left 
              .d-flex
                div Seguridad y salud. Describe los peligros intrínsecos y cómo protegerse.
          tr
            td.text-left.fw-bold Contenido clave
            td.text-left 
              .d-flex
                div Especificaciones de calidad, pureza, rendimiento y modo de uso técnico.
            td.text-left 
              .d-flex
                div Identificación de peligros (SGA), primeros auxilios, toxicología, reactividad y gestión ambiental.
          tr.bg7
            td.text-left.fw-bold Normativa en Colombia
            td.text-left 
              .d-flex
                div No normalizada. Es un documento elaborado libremente por el fabricante para la venta.
            td.text-left 
              .d-flex
                div Obligatoria. Debe seguir estándares para comunicar riesgos a trabajadores y equipos de emergencia.
          tr
            td.text-left.fw-bold Uso principal
            td.text-left 
              .d-flex
                div Decisión de compra, control de calidad y aplicación del producto.
            td.text-left 
              .d-flex
                div Elaboración de planes de emergencia, selección de EPP y almacenamiento seguro.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-md-11.col-lg-12.col-12
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
            h3.bg4.py-2.w-card-text Características de la documentación técnica y de seguridad 

    p.mb-4 La gestión documental en seguridad química integra instrumentos con funciones específicas para la comunicación del riesgo. Esta matriz comparativa permite identificar el objetivo, la estructura, la normativa aplicable y el ámbito de uso de documentación técnica y de seguridad de los productos químicos, facilitando su correcta diferenciación y aplicación en contextos formativos y laborales.

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 6.
      span Matriz de documentos técnicos y de seguridad

    .tabla-a.mb-4(data-aos="zoom-in-left")
      table
        thead
          tr.text-white
            th.bg8 Documento / instrumento
            th.bg8 Objetivo principal
            th.bg8 Estructura y contenido clave a identificar
            th.bg8 Normativa / referencia
            th.bg8 Ámbito de uso principal
        tbody
          tr.bg7
            td.text-left.fw-bold Ficha técnica
            td.text-left Garantizar la calidad y funcionalidad del producto mediante la definición clara de sus especificaciones técnicas y criterios de desempeño.
            td.text-left 
              .d-flex
                .me-1 •
                div Descripción del producto.
              .d-flex
                .me-1 •
                div Especificaciones físicas (color, densidad).
              .d-flex
                .me-1 •
                div Rendimiento y dosis de aplicación.
              .d-flex
                .me-1 •
                div Nota: poca información de seguridad.
            td.text-left No normalizada (criterio del fabricante).
            td.text-left 
              .d-flex
                .me-1 •
                div Compras.
              .d-flex
                .me-1 •
                div Control de calidad.
              .d-flex
                .me-1 •
                div Procesos de producción.
          tr
            td.text-left.fw-bold Hoja de Datos de Seguridad (HDS)
            td.text-left Comunicar de manera integral los peligros asociados a sustancias químicas, con el fin de prevenir riesgos y proteger la salud humana y el medio ambiente.
            td.text-left 
              | Las 16 secciones obligatorias:
              .d-flex
                .me-1 •
                div Identificación de peligros.
              .d-flex
                .me-1 •
                div Primeros auxilios.
              .d-flex
                .me-1 •
                div Controles de exposición / protección individual.
              .d-flex
                .me-1 •
                div Estabilidad y reactividad.
              .d-flex
                .me-1 •
                div Información toxicológica y ecológica.
            td.text-left 
              .d-flex
                .me-1 •
                div NTC 4435.
              .d-flex
                .me-1 •
                div SGA.
            td.text-left 
              .d-flex
                .me-1 •
                div Almacenamiento.
              .d-flex
                .me-1 •
                div Salud y Seguridad en el Trabajo.
              .d-flex
                .me-1 •
                div Gestión ambiental.
              .d-flex
                .me-1 •
                div Uso en laboratorio.
          tr.bg7
            td.text-left.fw-bold Tarjeta de emergencia
            td.text-left Proporcionar información inmediata y precisa para orientar la actuación en situaciones de emergencia durante el transporte o manejo de sustancias peligrosas.
            td.text-left 
              .d-flex
                .me-1 •
                div Identificación de la mercancía y la compañía.
              .d-flex
                .me-1 •
                div Riesgos inminentes (fuego, explosión, salud).
              .d-flex
                .me-1 •
                div Controles inmediatos (evacuación, medios de extinción).
            td.text-left 
              .d-flex
                .me-1 •
                div NTC 4532.
              .d-flex
                .me-1 •
                div Decreto 1609 de 2002.
            td.text-left 
              .d-flex
                .me-1 •
                div Transporte de carga.
              .d-flex
                .me-1 •
                div Brigadas de emergencia.
              .d-flex
                .me-1 •
                div Primer respondiente.
          tr
            td.text-left.fw-bold Etiquetado (SGA)
            td.text-left Advertir de forma clara y visible sobre los peligros principales de un producto químico, mediante elementos estandarizados que permitan una identificación rápida y segura antes de su uso.
            td.text-left 
              .d-flex
                .me-1 •
                div Pictogramas de peligro.
              .d-flex
                .me-1 •
                div Palabra de advertencia (peligro / atención).
              .d-flex
                .me-1 •
                div Indicaciones de peligro (frases H).
              .d-flex
                .me-1 •
                div Consejos de prudencia (frases P).
            td.text-left SGA.
            td.text-left 
              .d-flex
                .me-1 •
                div Envases y contenedores.
              .d-flex
                .me-1 •
                div Manipulación diaria.
              .d-flex
                .me-1 •
                div Trasvase de productos.

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-12
        p La integración de estos instrumentos no solo asegura el cumplimiento normativo, sino que fortalece un sistema de control de amenazas orientado a la protección de la salud humana y la preservación del ecosistema a lo largo del ciclo de vida de los productos químicos. 
        p El siguiente video explora los peligros químicos y su impacto en la seguridad y salud en el trabajo, un tema clave para comprender cómo prevenir riesgos y proteger el entorno laboral.

    .row.justify-content-center.align-items-center(data-aos="fade-left")           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/8ZJrCtxYFcY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Peligros químicos.



















</template>

<script>
export default {
  name: 'Tema3',
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
