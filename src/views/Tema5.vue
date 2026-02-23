<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Elementos de Protección Personal (EPP) para riesgo residual

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/Tema5/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La protección de la integridad física es prioritaria cuando las medidas técnicas y administrativas no logran eliminar por completo los peligros químicos, dando lugar al denominado riesgo residual. En este escenario, los Elementos de Protección Personal (EPP) funcionan como la última barrera de defensa. Su eficacia depende de una elección precisa según el producto y el entorno, recordando siempre que el EPP no reemplaza las medidas de control iniciales, sino que actúa como un complemento esencial para reducir la exposición en actividades críticas.
          br
          br
    
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-md-11.col-lg-12.col-12
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
            h3.bg4.py-2.w-card-text Tipos de EPP 

    p Los EPP utilizados en la manipulación de productos químicos se seleccionan en función del riesgo específico al que se encuentra expuesto el trabajador. Entre los principales tipos se encuentran los siguientes: protección respiratoria, protección ocular, protección de manos y trajes de protección. A continuación, se presenta una tabla que resume los principales tipos de elementos de protección personal utilizados en la manipulación de productos químicos, la parte del cuerpo que protegen y el tipo de riesgo que ayudan a controlar.
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Tabla 8.
        span Tipos de EPP según el riesgo
    .tabla-a.mb-4(data-aos="zoom-in-left")
      table
        thead
          tr.text-white
            th.bg8.w-25 Tipo de EPP
            th.bg8 Parte del cuerpo que protege
            th.bg8 Riesgo controlado
        tbody
          tr.bg7
            td.text-left Protección respiratoria
            td.text-left Vías respiratorias (nariz, faringe, laringe, tráquea, pulmones, bronquios).
            td.text-left Inhalación de gases, vapores, polvos.
          tr
            td.text-left Protección visual y facial
            td.text-left Ojos y cara.
            td.text-left Salpicaduras, vapores, partículas.
          tr.bg7
            td.text-left Protección de las manos
            td.text-left Manos.
            td.text-left Contacto directo con sustancias.
          tr
            td.text-left Trajes de protección
            td.text-left Piel y cuerpo.
            td.text-left Exposición extendida o salpicaduras.
          tr.bg7
            td.text-left Complementarios
            td.text-left Cabeza y pies.
            td.text-left Contaminación del cabello, golpes, descargas eléctricas, deslizamientos.

    p Con el propósito de fortalecer la seguridad operativa, se exponen las especificaciones y la finalidad de cada elemento de protección. Este análisis detallado asegura una comprensión completa sobre su funcionamiento y utilidad antes de proceder con su uso en entornos químicos:

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-3(data-aos="fade-right")
        .row.justify-content-center.align-items-center(titulo="Protección respiratoria")
          .col-md-12.mb-4.mb-md-0.col-lg-6
            p La protección respiratoria se utiliza cuando existe riesgo de inhalación de vapores, gases, polvos o aerosoles peligrosos. Incluye respiradores purificadores de aire (mascarillas y respiradores con filtros o cartuchos) y respiradores con suministro de aire (líneas de aire y autocontenidos), los cuales deben seleccionarse de acuerdo con el tipo de contaminante y su concentración. Por ejemplo, las mascarillas y respiradores se usan para tareas en ambientes con polvos y/o emanación de gases y vapores. Un ajuste adecuado teniendo en cuenta las características faciales y corporales y el cambio oportuno de los filtros o cartuchos son fundamentales para garantizar la efectividad de este tipo de protección.
          .col-md-8.col-lg-5
            figure
              img(src='@/assets/curso/Tema5/img02.png', alt='')
        .row.justify-content-center.align-items-center(titulo="Protección visual  y facial ")
          .col-md-12.mb-4.mb-md-0.col-lg-6
            p La protección ocular con barreras físicas como gafas de seguridad, visores o máscaras full face, se emplea para evitar el contacto de sustancias químicas con los ojos y la cara, previniendo lesiones por salpicaduras, vapores o partículas. Generalmente se recomiendan las máscaras en policarbonato por su resistencia y durabilidad. La clase de protector facial se selecciona de acuerdo al tipo de sustancia química a la que se exponga el individuo, el período de exposición y el ritmo de trabajo. Los protectores oculares y faciales deben ser cómodos, ajustándose a la nariz y la cara, ofreciendo un sellado adecuado y no deben interferir con otros elementos de protección, ni con los movimientos del usuario, además, deben mantenerse limpios y en buen estado para asegurar una visibilidad adecuada y una protección efectiva.
          .col-md-8.col-lg-5
            figure
              img(src='@/assets/curso/Tema5/img03.png', alt='') 
        .row.justify-content-center.align-items-center(titulo="Protección de las manos")
          .col-md-12.mb-4.mb-md-0.col-lg-6
            p Los guantes de protección constituyen una barrera esencial frente al contacto directo con productos químico, ya que las manos son la parte del cuerpo que tiene mayor probabilidad de sufrir lesiones al estar involucradas con el manejo directo de productos químicos. Su selección debe considerar el material del guante y su compatibilidad con la sustancia manipulada, ya que no todos los guantes ofrecen el mismo nivel de resistencia química. 
            p Ejemplos: guantes de neopreno para manipular ácidos fuertes (sulfúrico, nítrico, fluorhídrico) y alcoholes, guantes de nitrilo o látex para el caso de hidróxidos o soluciones alcalinas y guantes de butilo para solventes orgánicos (benceno, acetona). 
          .col-md-8.col-lg-5.mb-3
            figure
              img(src='@/assets/curso/Tema5/img04.png', alt='') 
          .col-md-12
            p Los guantes deben tener la talla adecuada para su uso y estar en perfecto estado; el uso de guantes deteriorados o inadecuados puede incrementar el riesgo de exposición. Deben utilizarse debajo del traje protector para evitar que los escurrimientos se acumulen y no se debe tocar ninguna parte del cuerpo, ni ajustar otros elementos de protección con los guantes contaminados. 
        .row.justify-content-center(titulo="Trajes de protección")
          .col-md-12.mb-4.mb-md-0.col-lg-6
            p Los trajes de protección (batas, delantales, overoles) se utilizan cuando existe riesgo de contacto extendido con sustancias peligrosas. Estos elementos protegen la piel y la ropa de trabajo, reduciendo la posibilidad de contaminación. Su uso debe complementarse con otros EPP y cumplir con las recomendaciones del fabricante y los procedimientos establecidos por la organización.
          .col-md-8.col-lg-5
            figure
              img(src='@/assets/curso/Tema5/img05.png', alt='')
        .row.justify-content-center(titulo="EPP complementarios")
          .col-md-12.mb-4.mb-md-0.col-lg-6
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-solid.fa-flask
                p.mb-3 #[b Protección para la cabeza:] su uso es esencial durante la manipulación de sustancias químicas, ya que evita la contaminación del cabello (gases, vapores o partículas). Estos elementos (cofia o casco) deben emplearse siempre que se ingrese a áreas donde se manejan productos químicos para garantizar la seguridad del trabajador. Se clasifican según el riesgo que se presente en el medio y el daño al que se expone el personal. 
              li.mb-0.d-flex
                i.fas.fa-solid.fa-flask
                p.mb-3 #[b Protección para los pies:] el calzado de seguridad protege los pies frente a sustancias corrosivas, golpes, descargas eléctricas y deslizamientos, utilizando materiales resistentes como caucho butilo, neopreno, nitrilo o PVC. Su selección depende del tipo de sustancia y del riesgo de derrames o salpicaduras, empleándose zapatos de seguridad o botas de caucho según la actividad.
          .col-md-8.col-lg-5
            figure
              img(src='@/assets/curso/Tema5/img06.png', alt='')


    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-md-11.col-lg-12.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
          h3.bg4.py-2.w-card-text Matriz riesgo a partir de los elementos de protección personal
    p La matriz de riesgo es una herramienta que permite identificar, evaluar y priorizar los riesgos presentes en una actividad, considerando la probabilidad de ocurrencia y la severidad de sus consecuencias. Con base en este análisis, se determinan las medidas de control necesarias, incluidos los EPP requeridos.

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 9.
      span Matriz de riesgo de los EPP

    .tabla-a.mb-4(data-aos="zoom-in-left")
      table
        thead
          tr.text-white
            th.bg8.w-25 Índice a protección (Código)
            th.bg8 EPP Requerido
            th.bg8 Escenario de riesgo típtico
        tbody
          tr.bg7
            td.text-left A
            td.text-left Gafas de seguridad.
            td.text-left Manipulación básica, riesgo mínimo de salpicadura.
          tr
            td.text-left B
            td.text-left Gafas y guantes.
            td.text-left Manipulación de sólidos o líquidos no muy agresivos.
          tr.bg7
            td.text-left C
            td.text-left Gafas, guantes y delantal.
            td.text-left Riesgo de salpicadura al cuerpo y manos (líquidos).
          tr
            td.text-left D
            td.text-left Escudo facial, guantes y delantal.
            td.text-left Alto riesgo de salpicadura a la cara y cuerpo.
          tr.bg7
            td.text-left E
            td.text-left Gafas, guantes y mascarilla de polvo.
            td.text-left Presencia de material particulado o polvos irritantes.
          tr
            td.text-left F
            td.text-left Gafas, guantes, delantal y mascarilla de polvo.
            td.text-left Polvos irritantes con riesgo de absorción dérmica.
          tr.bg7
            td.text-left G
            td.text-left Gafas, guantes y respirador para vapores.
            td.text-left Presencia de vapores orgánicos o gases.
          tr
            td.text-left H
            td.text-left Gafas para salpicaduras, guantes, delantal y respirador.
            td.text-left Vapores con riesgo alto de contacto con la piel.
          tr.bg7
            td.text-left K
            td.text-left Traje completo, botas, capucha y equipo de aire asistido.
            td.text-left Entrada a espacios confinados o atmósferas desconocidas.
          tr
            td.text-left X
            td.text-left Consultar al supervisor / HDS.
            td.text-left Situaciones especiales o riesgos no estándar.

    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
      .col-lg-5.col-10.col-md-9
        img.mb-4(src='@/assets/curso/Tema5/img07.png', alt='')
      .col-lg-7
        .row.justify-content-center.mb-1
          .col-lg-2.col-4.col-md-3
            img.mb-4(src='@/assets/curso/Tema5/img08.svg', alt='')
          .col-lg-10
            p En la manipulación de productos químicos, la matriz de riesgo es la herramienta fundamental que relaciona la sustancia, la forma de exposición y la actividad realizada con el nivel de riesgo residual. Esta integración permite una selección precisa de los Elementos de Protección Personal (EPP), asegurando que las decisiones sean coherentes con los protocolos de seguridad para prevenir daños a la salud.
        p Bajo este enfoque, se establece la matriz por niveles de protección, diseñada específicamente para escenarios de emergencia, derrames o alta exposición. Esta clasificación organiza el equipo en cuatro categorías críticas, determinadas por la probabilidad de contacto respiratorio y cutáneo:       

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 10.
      span Niveles de protección
    .tabla-a
      table
        thead
          tr.text-white
            th.bg8.w-10 Nivel
            th.bg8 Protección respiratoria
            th.bg8 Protección dérmica (traje)
            th.bg8 ¿Cuándo se usa? (criterio de riesgo)
        tbody
          tr
            td.text-left Nivel A
            td.text-left
              b Máxima. 
              | Equipo de respiración autónoma o autocontenidos (SCBA) dentro del traje.
            td.text-left
              b Máxima. 
              | Traje totalmente encapsulado y hermético a gases.
            td.text-left Cuando hay probabilidad de contacto con gases, vapores o líquidos altamente tóxicos para la piel y pulmones. El mayor nivel de riesgo.
          tr
            td.text-left Nivel B
            td.text-left
              b Máxima. 
              | Equipo de respiración autónoma (SCBA) fuera del traje.
            td.text-left
              b Alta. 
              | Traje resistente a salpicaduras químicas (no hermético a gases).
            td.text-left Cuando se requiere la máxima protección respiratoria (atmósfera pobre en oxígeno o muy tóxica) pero menor protección cutánea.
          tr
            td.text-left Nivel C
            td.text-left
              b Media. 
              | Respirador purificador de aire (con filtros).
            td.text-left
              b Media. 
              | Traje tipo overol resistente a químicos (Tyvek / Tychem).
            td.text-left Cuando la concentración del contaminante es conocida y los filtros son efectivos. No usar si hay deficiencia de oxígeno.
          tr
            td.text-left Nivel D
            td.text-left
              b Nula/Básica. 
              | No requiere respirador.
            td.text-left
              b Mínima. 
              | Ropa de trabajo normal o uniforme básico.
            td.text-left Solo para contaminación molesta, sin riesgo respiratorio ni cutáneo significativo.
    
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-md-11.col-lg-12.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
          h3.bg4.py-2.w-card-text Inspección y manejo seguro del ciclo de vida de los EPP


    .fondot1.mb-5(data-aos="zoom-in-left")
      .row.justify-content-center.align-items-center.mb-3.p-3(data-aos="fade-right")
        .col-lg-1.col-4.mb-3.col-md-2
          img(src="@/assets/curso/Tema5/img09.svg")
        .col-lg-10
          p El mantenimiento del ciclo de vida de los EPP es un proceso crítico que asegura la integridad de los trabajadores frente a riesgos químicos. Este ciclo se fundamenta en la prevención y la gestión técnica, estructurándose de la siguiente manera:
          p La operatividad de los EPP depende de una supervisión constante antes, durante y después de cada jornada:

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-6.mb-4.col-md-10
        img(src="@/assets/curso/Tema5/img10.png")
      .col-lg-6
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Verificación inicial")
            .col-md-12.mb-4.mb-md-0
              p.text-small se debe realizar un examen visual para detectar perforaciones, cristalización de polímeros o pérdida de elasticidad que invaliden la protección.

          .row(numero="2" titulo="Limpieza técnica")
            .col-md-12.mb-4.mb-md-0
              p.text-small la descontaminación debe ejecutarse según las fichas técnicas del fabricante para evitar que los residuos químicos degraden los materiales del EPP.

          .row(numero="3" titulo="Almacenamiento controlado")
            .col-md-12.mb-4.mb-md-0
              p.text-small es necesario resguardar los EPP en lugares libres de humedad y radiación solar directa, factores que aceleran el deterioro de materiales.

    p.mb-4 Cuando un equipo alcanza el final de su vida útil o sufre una contaminación severa, su tratamiento cambia de un recurso de seguridad a un desecho crítico:

    .tarjeta--container.row.mb-4(data-aos="fade-right")
      .col-md.tarjeta.bg11.p-5.text-white
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/Tema5/1.svg', alt='')          
        h3.text-center Retiro de servicio
        p cualquier EPP que haya superado su fecha de vencimiento o haya perdido su capacidad de barrera debe ser marcado y segregado inmediatamente para evitar su uso accidental.
      
      .col-md.tarjeta.bg12.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/Tema5/2.svg', alt='')          
        h3.text-center Gestión de residuos peligrosos
        p debido a la posible presencia de sustancias nocivas, la eliminación se rige bajo los lineamientos de materiales peligrosos (#[em Hazardous Materials] - HAZMAT). Esto implica que no pueden ser desechados como basura convencional, sino que deben entregarse a gestores autorizados para su incineración o disposición en celdas de seguridad.
      
      .col-md.tarjeta.bg13.text-white.p-5
        .row.justify-content-center.mb-4
          .col-6.col-md-3.col-lg-6
            figure
              img(src='@/assets/curso/Tema5/3.svg', alt='')          
        h3.text-center Responsabilidad ambiental
        p el manejo adecuado garantiza que los contaminantes adheridos a los guantes, respiradores o trajes no se filtren al subsuelo o fuentes hídricas, cumpliendo con la normativa de SST y de gestión ambiental vigente.



















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
