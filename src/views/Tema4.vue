<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-4
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Riesgos y controles (buenas prácticas de manufactura y buenas prácticas de laboratorio)

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-12
        img.mb-4(src='@/assets/curso/Tema4/img01.png', alt='')
        p Para mejorar la gestión del riesgo químico, es fundamental comprender que este no depende solo de la peligrosidad propia de una sustancia, sino de cómo interactúa con factores externos como la infraestructura, las condiciones del entorno y la forma en que se manipula. Bajo esta visión, el riesgo se entiende como la combinación del peligro y la exposición, lo que exige implementar sistemas de control estandarizados que permitan mitigar las amenazas y asegurar la calidad en cada proceso.

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-10
        .tarjeta--container.row.mb-3
          .col-md.tarjeta.color-primario.p-5
            .row.justify-content-center.mb-4
              .col-4
                figure
                  img(src='@/assets/curso/Tema4/001.svg', alt='Texto que describa la imagen')          
            h3.text-center Buenas Prácticas de Manufactura (BPM)
            p Son un conjunto de principios y procedimientos básicos aplicables a la producción (alimentos, fármacos, químicos) con el objetivo de garantizar que los productos se fabriquen en condiciones sanitarias adecuadas, disminuyendo los riesgos inherentes a la producción y distribución. Este sistema controla aspectos críticos como la infraestructura, los equipos, los procedimientos operativos y la seguridad industrial.
          
          .col-md.tarjeta.color-secundario.p-5
            .row.justify-content-center.mb-4
              .col-4
                figure
                  img(src='@/assets/curso/Tema4/002.svg', alt='Texto que describa la imagen')          
            h2.text-center Buenas Prácticas de Laboratorio (BPL)
            p En el entorno de análisis y ensayo, las BPL establecen lineamientos de trabajo seguro para garantizar la validez y confiabilidad de los resultados y, simultáneamente, la integridad de los trabajadores y el medio ambiente. Se centran en la organización, las instalaciones, el manejo de reactivos y la seguridad del personal.
          
       
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-md-11.col-lg-12.col-12
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
            h3.bg4.py-2.w-card-text Jerarquía de controles tanto en BPM como en BPL

    p.mb-5 La prevención de riesgos debe seguir una jerarquía de controles estricta para ser efectiva:

    .row.justify-content-center.mb-5
        .col-lg-10.position-relative
          .avatar
            figure
              img(src="@/assets/curso/Tema4/img02.svg", alt="alt").img250
          
          .crd.crd--avatarHorizontal.crd--first.py-2
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/Tema4/1.svg", alt="alt").img100
              .col
                h5 Eliminación o sustitución
                p Suprimir el peligro o reemplazar la sustancia por una menos peligrosa (medida más efectiva).
          
          .crd.crd--avatarHorizontal.py-2
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/Tema4/2.svg", alt="alt").img100
              .col
                h5 Controles de ingeniería 
                p Aislar el peligro mediante infraestructura, como el uso de cabinas de extracción, encerramientos o sistemas de ventilación.
          
          .crd.otro.py-2
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/Tema4/2.svg", alt="alt").img100
              .col
                h5 Controles administrativos
                p Implementar procedimientos documentados, señalización, rotación de personal y normas de conducta (ejemplo: prohibición de comer, fumar o usar joyas en áreas de trabajo).
          
          .crd.crd--avatarHorizontal.crd--last.py-2
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/Tema4/3.svg", alt="alt").img100
              .col
                h5 Elementos de Protección Personal (EPP)
                p Se utilizan como la última barrera de protección cuando los riesgos no pueden eliminarse o controlarse totalmente por los medios anteriores.
    separador
    #t_4_1.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 4.1. Toxicología y efectos
    
    .fondot2(data-aos="fade-right").mb-5
      .row.justify-content-center.align-items-center.mb-3.p-3
        .col-lg-1.col-4.mb-3.col-md-2
          img(src="@/assets/curso/Tema4/tapabocas.svg")
        .col-lg-10
          p La toxicología laboral es la disciplina que estudia los efectos nocivos de los agentes químicos en los sistemas biológicos, estableciendo la magnitud del daño en función de la exposición (dosis y tiempo). Para que un agente químico represente un riesgo tóxico, debe ingresar al organismo; la velocidad de absorción y la severidad del daño dependen críticamente de la vía de entrada y las propiedades físicas y químicas de la sustancia.       

    TabsB.color-primario.mb-3
      .py-4.py-md-5(titulo="Vía respiratoria (inhalación)" :icono="require('@/assets/curso/Tema4/01.svg')")
        .row.justify-content-center
          .col-lg-5.col-10
            figure
              img.mb-4(src='@/assets/curso/Tema4/img02.png', alt='')
            p.bg9.p-4 Es considerada la vía de penetración más importante y crítica en el ambiente laboral, debido a que la superficie de absorción pulmonar es extensa y la sustancia ingresa rápidamente al torrente sanguíneo.
          .col-lg-6.mb-4.mb-md-0
            ol.lista-ol--cuadro
              li
              .lista-ol--cuadro__vineta
                span a 
              | #[b Mecanismo de ingreso:] los contaminantes ingresan mezclados con el aire que se respira. Su comportamiento depende de su estado físico:
              .mb-4
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.fas.fa-solid.fa-flask
                  p.mb-3 #[b Gases y vapores:] al ser inhalados, pasan directamente a la sangre a través de los alvéolos por difusión, comportándose según las leyes de los gases (presión y temperatura).
                li.mb-0.d-flex
                  i.fas.fa-solid.fa-flask
                  p.mb-3 #[b Material particulado (aerosoles):] se dividen en polvos, humos y neblinas. El factor técnico crítico aquí es el tamaño de la partícula: 
                li.mb-3.d-flex 
                  i
                  | • 10 micras: generalmente quedan atrapadas en las vías aéreas superiores (nariz, garganta) y pueden ser expulsadas o deglutidas.    
                li.mb-3.d-flex
                  i
                  | • < 10 micras: pueden penetrar más profundamente.
                li.mb-3.d-flex 
                  i   
                  |• < 5 micras (fracción respirable): son las más peligrosas, ya que llegan hasta los alvéolos pulmonares, donde pueden causar daño local severo (fibrosis) o pasar a la sangre.
            ol.lista-ol--cuadro
              li
              .lista-ol--cuadro__vineta
                span b
              | #[b Efectos por zona:] se pueden presentar desde rinitis y ulceración en la zona nasofaríngea, hasta broncoconstricción en la tráquea, o edema pulmonar y enfisema en la zona pulmonar profunda.
          
      .py-4.py-md-5(titulo="Vía digestiva (ingestión)" :icono="require('@/assets/curso/Tema4/02.svg')")
        .row.justify-content-center
          .col-lg-5.col-10
            figure
              img.mb-4(src='@/assets/curso/Tema4/img03.png', alt='')
            
          .col-lg-6.mb-4.mb-md-0
            p.bg9.p-4 También llamada vía oral corresponde a la entrada de sustancias químicas al organismo a través de la boca, pasando por el sistema gastrointestinal. Esta vía es frecuente en entornos laborales cuando hay manos contaminadas, alimentos expuestos, envases sin rotular o prácticas inadecuadas de higiene.
            ol.lista-ol--cuadro
              li.mb-3
                .lista-ol--cuadro__vineta
                  span a 
                | #[b Mecanismo de ingreso:] la sustancia entra por la boca (accidental o intencional) y atraviesa el esófago, el estómago y el intestino delgado. En el intestino ocurre la principal absorción ya que está altamente vascularizado. 
              li.mb-3
                .lista-ol--cuadro__vineta
                  span b
                | #[b Efectos locales:] durante todo el trayecto, la sustancia química puede provocar irritación o quemaduras químicas. Los efectos locales incluyen náuseas y vómitos, dolor abdominal y hemorragias o perforaciones en los tejidos.  
              li.mb-3
                .lista-ol--cuadro__vineta
                  span c
                | #[b Efectos sistémicos:] una vez absorbido y distribuido, el tóxico puede afectar diversos órganos como el hígado (toxicidad hepática), riñones (nefrotoxicidad) o sistema nervioso (neurotoxicidad). 

      .py-4.py-md-5(titulo="Vía dérmica (absorción por la piel)" :icono="require('@/assets/curso/Tema4/03.svg')")
        .row.justify-content-center
          .col-lg-5.col-10
            figure
              img.mb-4(src='@/assets/curso/Tema4/img04.png', alt='')
            p.bg9.p-4 Aunque la piel es una barrera protectora natural, muchas sustancias químicas tienen la capacidad de atravesarla e incorporarse a la sangre para distribuirse por todo el cuerpo.
          .col-lg-6.mb-4.mb-md-0
            ol.lista-ol--cuadro
              li
                .lista-ol--cuadro__vineta
                  span a 
                | #[b Mecanismo de ingreso:] la absorción ocurre principalmente a través de los poros, glándulas sebáceas y folículos pilosos.
              li
                .lista-ol--cuadro__vineta
                  span b
                | #[b Factores que favorecen la absorción:]    
              .mb-4
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.fas.fa-solid.fa-flask
                  p.mb-3 #[b Liposolubilidad:] las sustancias solubles en grasas penetran más fácilmente debido a la naturaleza lipídica de las membranas celulares.
                li.mb-0.d-flex
                  i.fas.fa-solid.fa-flask
                  p.mb-3 #[b Estado de la piel:] heridas, rasguños o enfermedades cutáneas rompen la barrera natural y facilitan el ingreso directo.
                li.mb-0.d-flex
                  i.fas.fa-solid.fa-flask
                  p.mb-3 #[b Tipo de sustancia:] algunos solventes orgánicos y pesticidas son conocidos por su alta capacidad de penetración dérmica sin causar necesariamente una lesión visible inmediata en la superficie (como una quemadura), lo que aumenta el riesgo de intoxicación sistémica inadvertida.
    
    .row.justify-content-center.mb-3(data-aos="zoom-in-left")
      .col-md-11.col-lg-12.col-12
        h3.solidos-badge.text-white · Clasificación de los efectos toxicológicos

    p.mb-3 Una vez la sustancia ingresa, los efectos en la salud no son uniformes. Se clasifican técnicamente según el tiempo de aparición, la localización y el mecanismo de acción.
    
    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-5(data-aos="fade-right")
        .row.justify-content-center.align-items-center(titulo="Según el tiempo de aparición (agudos vs. crónicos)")
          .col-md-12.mb-4.mb-md-0.col-lg-6
            p El riesgo depende de la dosis (cantidad absorbida) y el tiempo de exposición.
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-solid.fa-flask
                p.mb-3 #[b Efectos agudos:] se desarrollan inmediatamente o en un corto tiempo después de una exposición (generalmente una sola dosis alta). Ejemplos: asfixia por inhalación de cloro gaseoso, quemadura química por salpicadura de ácido, vómito y mareo inmediato por contacto con solventes.
              li.mb-0.d-flex
                i.fas.fa-solid.fa-flask
                p.mb-3 #[b Efectos crónicos:] aparecen meses o años después de exposiciones repetidas a bajas concentraciones. Son difíciles de detectar a tiempo sin vigilancia médica. Ejemplos: silicosis (por polvo de sílice acumulado), cáncer (por benceno), dermatitis crónica o sensibilización alérgica.
          .col-md-8.col-lg-5.col-11
            figure
              img(src='@/assets/curso/Tema4/img05.png', alt='')
        
        .row.justify-content-center.align-items-center(titulo="Según la localización del daño (locales vs. sistémicos)")
          .col-md-12.mb-4.mb-md-0.col-lg-6
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-solid.fa-flask
                p.mb-3 #[b Efectos locales:] el daño ocurre en el punto de contacto inicial. Ejemplo: irritación o quemadura en la piel, ojos o vías respiratorias superiores (ácidos, cáusticos).
              li.mb-0.d-flex
                i.fas.fa-solid.fa-flask
                p.mb-3 #[b Efectos sistémicos:] el tóxico ingresa al cuerpo (por pulmones o piel), viaja por la sangre y ataca un órgano específico distante del punto de entrada (órgano diana), como el hígado, los riñones o el sistema nervioso central. Ejemplo: el plomo ingresa por inhalación, pero afecta el sistema nervioso y la sangre; el mercurio afecta los riñones.
          .col-md-8.col-lg-5.col-11
            figure
              img(src='@/assets/curso/Tema4/img06.png', alt='')

    .row.justify-content-center.mb-3(data-aos="zoom-in-left")
      .col-md-11.col-lg-12.col-12
        h3.solidos-badge.text-white · Clasificación fisiológica específica

    p.mb-3 Los documentos técnicos categorizan las sustancias según cómo atacan al organismo:
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-6.col-11.mb-4.col-md-9
        img(src='@/assets/curso/Tema4/img07.png', alt='')
      .col-lg-6
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Irritantes")
            .col-md-12.mb-4.mb-md-0
              p.text-small Inflamación de mucosas (piel, ojos, nariz). Tienen un efecto de advertencia (olor, ardor).
          .row(numero="2" titulo="Asfixiantes")
            .col-md-12.mb-4.mb-md-0
              p.text-small Impiden la llegada de oxígeno a las células. 
              ul.lista-ul--color.text-small
                li.mb-0.d-flex
                  i.fas.fa-solid.fa-flask
                  p.mb-3 Simples: desplazan el oxígeno del aire (ejemplo: dióxido de carbono y nitrógeno).
                li.mb-0.d-flex
                  i.fas.fa-solid.fa-flask
                  p.mb-3 Químicos: bloquean la capacidad de la sangre para transportar oxígeno (ejemplo: monóxido de carbono, cianuro).
          .row(numero="3" titulo="Narcóticos y anestésicos")
            .col-md-12.mb-4.mb-md-0
              p.text-small Actúan sobre el sistema nervioso central causando somnolencia, mareo y pérdida de coordinación (ejemplo: tolueno, xileno, acetona).

          .row(numero="4" titulo="Neumoconióticos")
            .col-md-12.mb-4.mb-md-0
              p.text-small Partículas sólidas que se depositan en los pulmones causando fibrosis y endurecimiento del tejido (ejemplo: sílice, asbesto, polvo de carbón).
          .row(numero="5" titulo="Carcinógenos, mutágenos y teratógenos")
            .col-md-12.mb-4.mb-md-0
              p.text-small Sustancias capaces de inducir cáncer, provocar alteraciones genéticas hereditarias o generar malformaciones en el feto, respectivamente.

    separador
    #t_4_2.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 4.2. Prácticas operativas de seguridad, prohibiciones y jerarquía de controles

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-5.col-11.mb-4.col-md-9
        img(src='@/assets/curso/Tema4/img08.png', alt='')
      .col-lg-7
        p La seguridad en el manejo de productos químicos no depende del azar, sino de la estandarización de procesos y la disciplina operativa. Para garantizar un entorno seguro, las organizaciones implementan Procedimientos Operativos Estandarizados (POE), que son documentos instructivos diseñados para unificar la forma en que se realiza una tarea crítica, asegurando calidad y minimizando errores humanos. Estos procedimientos se refuerzan mediante normas de conducta estrictas (prohibiciones), y se integran dentro de la jerarquía de controles, un esquema que prioriza la eliminación del peligro en la fuente, seguido por controles de ingeniería y administrativos. En este marco, el uso de Equipos de Protección Personal (EPP) constituye la última barrera de defensa, empleándose únicamente cuando el riesgo no puede ser eliminado, sustituido o controlado por medidas de ingeniería más efectivas.

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Tabla 7.
        span Cuadro de gestión operativa y control de riesgos
    .tabla-a.mb-4(data-aos="zoom-in-left")
      table
        thead
          tr.text-white
            th.bg8.w-25 Componente
            th.bg8 Descripción técnica
            th.bg8 Medidas y ejemplos clave
        tbody
          tr.bg7
            td.text-left Prácticas Operativas Estandarizadas (POE)
            td.text-left Documentos descriptivos paso a paso que estandarizan una actividad para garantizar su repetitividad y seguridad. Son vitales en tareas de alto riesgo para evitar que la improvisación genere accidentes.
            td.text-left 
              | Estructura típica de un POE:
              .d-flex.mt-2
                .me-1 •
                div Objetivo y alcance.
              .d-flex
                .me-1 •
                div Elementos de Protección Personal (EPP) requeridos.
              .d-flex
                .me-1 •
                div Descripción secuencial de la tarea.
              .d-flex
                .me-1 •
                div Qué hacer en caso de emergencia, ejemplo: protocolo escrito para el trasvase de ácidos o toma de muestras.
          tr
            td.text-left Prohibiciones (normas de conducta)
            td.text-left Reglas básicas de cumplimiento obligatorio en laboratorios, áreas de producción y almacenamiento para evitar la exposición accidental o la iniciación de siniestros.
            td.text-left 
              .d-flex
                .me-1 •
                div Comer y beber: prohibido para evitar la ingesta accidental de tóxicos contaminando alimentos.
              .d-flex
                .me-1 •
                div Fumar: prohibido por ser fuente de ignición cerca de vapores inflamables.
              .d-flex
                .me-1 •
                div Joyas y accesorios: prohibido usar anillos o pulseras ya que pueden atrapar sustancias, romper guantes o causar enganches mecánicos.
              .d-flex
                .me-1 •
                div Trabajo solitario: no permitir trabajar solo en zonas de riesgo químico.
          tr.bg7
            td.text-left Jerarquía de controles (eliminación de barreras)
            td.text-left Es el orden lógico de intervención sobre el riesgo. Se debe tratar de eliminar el peligro antes de recurrir a proteger al trabajador con barreras físicas.
            td.text-left 
              .d-flex
                .me-1 •
                div Eliminación: suprimir físicamente el peligro (ejemplo: dejar de usar un químico innecesario).
              .d-flex
                .me-1 •
                div Sustitución: reemplazar el material por uno menos peligroso (ejemplo: cambiar un solvente tóxico por uno biodegradable).
              .d-flex
                .me-1 •
                div Controles de ingeniería: aislar el peligro (ejemplo: cabinas extractoras, ventilación localizada).
              .d-flex
                .me-1 •
                div Controles administrativos: señalización, POE, rotación de turnos.
              .d-flex
                .me-1 •
                div EPP: última barrera (guantes, respiradores) cuando lo anterior no es suficiente.






























</template>

<script>
export default {
  name: 'Tema4',
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

<style lang="sass">
.avatar
  position: absolute
  bottom: 0
  right: -4rem
  z-index: 1
  @media (max-width: 1000px)
    display: none
.crd--avatarHorizontal
  position: relative
  padding-right: 12rem
  & > *
    position: relative
  h5
    color: #12263F
  p
    margin-bottom: 0
  &::before
    position: absolute
    content: ''
    top: 0
    right: 0
    width: calc( 100% - 60px)
    height: 100%
    background-color: #EEEEEE
  @media (max-width: 1000px)
    padding-right: 2rem

.crd--first
  &::before
    background-color: #DCBFDC !important
.crd--first
  &::before
    border-top-left-radius: 30px
.otro
  position: relative
  padding-right: 12rem
  & > *
    position: relative
  h5
    color: #12263F
  p
    margin-bottom: 0
  &::before
    position: absolute
    content: ''
    top: 0
    right: 0
    width: calc( 100% - 60px)
    height: 100%
    background-color: #DCBFDC !important
  @media (max-width: 1000px)
    padding-right: 2rem
.crd--last
  &::before
    background-color: #EEEEEE !important
.crd--last
  &::before
    border-bottom-left-radius: 30px
</style>
