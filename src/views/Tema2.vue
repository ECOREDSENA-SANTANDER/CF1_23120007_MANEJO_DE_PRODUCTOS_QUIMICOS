<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Sistema Globalmente Armonizado de Clasificación y Etiquetado de Productos Químicos (SGA) 

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/Tema2/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El manejo seguro de cualquier producto químico exige un conocimiento previo sobre su composición, los riesgos que conlleva y su potencial impacto en la salud y el entorno. Para dar respuesta a estos interrogantes, se utiliza un sistema de identificación global que estandariza la comunicación de peligros de forma clara, garantizando que la información sea comprensible en cualquier industria, país o idioma, antes de proceder a su manipulación, almacenamiento o transporte.
          br
          br
         
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-7.bg9.p-4.mb-4
        p.mb-3.mt-2 El SGA, desarrollado bajo el liderazgo de la Organización de las Naciones Unidas (ONU), constituye una iniciativa internacional diseñada para unificar los criterios de clasificación y etiquetado de sustancias químicas. Su implementación sustituye la diversidad de normativas locales que anteriormente generaban confusión, estableciendo un lenguaje común y estandarizado. Gracias a este marco normativo, es posible identificar los riesgos de manera rápida y precisa, optimizando la seguridad y la comunicación de peligros en cualquier contexto industrial o geográfico.
      .col-lg-5.col-10.col-md-8
        img(src='@/assets/curso/Tema2/img02.png', alt='')

    p El sistema clasifica los peligros en tres grandes grupos:
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Peligros físicos")
            p Relacionados con las propiedades físicas y químicas de las sustancias, como inflamabilidad, explosividad o reactividad, que pueden generar incendios, explosiones o reacciones peligrosas durante su manipulación, almacenamiento o transporte.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Peligros para la salud")
            p Asociados a efectos agudos o crónicos en las personas, como toxicidad, irritación, sensibilización o daño a órganos, derivados de la exposición a productos químicos por inhalación, contacto con la piel o ingestión.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Peligros para el medio ambiente")
            p Vinculados a efectos negativos sobre los ecosistemas acuáticos o terrestres, ocasionando contaminación del agua, del suelo o afectaciones a la flora y fauna como consecuencia de la liberación de sustancias químicas peligrosas.

    separador
    #t_2_1.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 2.1. Etiquetado de productos químicos

    .fondot2(data-aos="fade-right")
      .row.justify-content-center.align-items-center.mb-3.p-3
        .col-lg-1.col-4.mb-3.col-md-2
          img(src="@/assets/curso/Tema2/peligro.png")
        .col-lg-10
          p La etiqueta es el principal medio de comunicación del riesgo químico. A través de ella, el producto “habla” y advierte sobre los peligros que representa, incluso antes de ser manipulado.

    p Las etiquetas del SGA incluyen varios elementos clave:

    .row.mb-4(data-aos="fade-right")
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-4.col-md-5
              figure
                img(src='@/assets/curso/Tema2/1.svg', alt='Texto que describa la imagen')
          h4.text-center Identificación del producto
          p.text-small.mb-0.text-left Incluye el nombre del producto químico (según IUPAC, ISO, CAS o nombre técnico) y debe coincidir con lo reportado en la hoja de datos de seguridad. Permite identificación clara y evita confusiones con otras sustancias. 

      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-4.col-md-5
              figure
                img(src='@/assets/curso/Tema2/2.svg', alt='Texto que describa la imagen')
          h4.text-center Identificación del fabricante o proveedor
          p.text-small.mb-0.text-left En la etiqueta deben figurar los datos del fabricante, importador o responsable del producto para garantizar la trazabilidad y el contacto en caso de emergencia o información adicional. 
      
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-4.col-md-5
              figure
                img(src='@/assets/curso/Tema2/3.svg', alt='Texto que describa la imagen')
          h4.text-center Pictogramas
          p.text-small.mb-0.text-left Símbolos gráficos en forma de rombo rojo que representan visualmente el tipo de peligro que presenta un producto químico (clasificación de peligrosidad), permitiendo una identificación rápida y comprensible del riesgo. Es posible encontrar productos con más de un pictograma en su etiqueta. Deben presentarse en los envases o embalajes exteriores. 

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 2.
      span Pictogramas del SGA
    .tabla-a.mb-5(data-aos="fade-right")
      table
        thead
          tr.text-white
            th.bg8.w-10 Pictograma
            th.bg8.w-25 Nombre del peligro
            th.bg8 Descripción
            th.bg8 Ejemplo de sustancia
        tbody
          tr.bg7
            td.text-center
              img(src="@/assets/curso/Tema2/img01.svg", alt="Inflamable", style="width: 70px")
            td.text-left Inflamable
            td.text-left Sustancias que pueden encenderse fácilmente con calor, chispas o llamas. Precaución: evitar fuentes de ignición.
            td.text-left Gasolina, alcohol, acetona.
          tr
            td.text-center
              img(src="@/assets/curso/Tema2/img02.svg", alt="Explosivo", style="width: 70px")
            td.text-left Explosivo
            td.text-left Sustancias inestables que pueden explotar por choque, fricción o calor. Precaución: evitar golpes y sacudidas.
            td.text-left Nitroglicerina, dinamita.
          tr.bg7
            td.text-center
              img(src="@/assets/curso/Tema2/img03.svg", alt="Toxicidad aguda", style="width: 70px")
            td.text-left Toxicidad aguda
            td.text-left Puede ser mortal o causar daños graves por ingestión, inhalación o contacto con la piel (calavera y tibias cruzadas).
            td.text-left Cianuro, plaguicidas.
          tr
            td.text-center
              img(src="@/assets/curso/Tema2/img04.svg", alt="Corrosivo", style="width: 70px")
            td.text-left Corrosivo
            td.text-left Causa daño severo o destrucción en metales y quemaduras en la piel y tejidos.
            td.text-left Ácido sulfúrico, soda cáustica.
          tr.bg7
            td.text-center
              img(src="@/assets/curso/Tema2/img05.svg", alt="Peligro para la salud", style="width: 70px")
            td.text-left Peligro para la salud
            td.text-left Carcinógenos, mutágenos, tóxicos para la reproducción o sensibilizantes respiratorios (silueta humana).
            td.text-left Asbesto, benceno, formol.
          tr
            td.text-center
              img(src="@/assets/curso/Tema2/img06.svg", alt="Daño para el medio ambiente acuático", style="width: 70px")
            td.text-left Daño para el medio ambiente acuático
            td.text-left Provoca efectos nefastos para los organismos del medio acuático (peces, crustáceos, algas y otras plantas acuáticas).
            td.text-left Hipoclorito de sodio (lejía), pesticidas y solventes.
          tr.bg7
            td.text-center
              img(src="@/assets/curso/Tema2/img07.svg", alt="Atención / nocivo", style="width: 70px")
            td.text-left Atención / nocivo
            td.text-left Peligros menos severos: irritación cutánea / ocular, sensibilización cutánea o efectos narcóticos.
            td.text-left Detergentes fuertes, solventes.

    .tarjeta--container.row.mb-4(data-aos="fade-right")
      .col-md.tarjeta.bg11.p-5.text-white
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/Tema2/img08.svg', alt='')          
        h3.text-center Palabras de advertencia
        p Expresiones que indican el nivel de severidad del riesgo asociado a un producto químico, como “Peligro” (más severo) o “Advertencia” (menos severo). Estas palabras alertan sobre la magnitud del daño potencial y permiten identificar rápidamente la gravedad del riesgo.
      
      .col-md.tarjeta.bg12.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/Tema2/img09.svg', alt='')          
        h3.text-center Indicaciones de peligro (frases H) 
        p Frases normalizadas que describen la naturaleza del riesgo asociado a un producto químico, especificando el tipo de daño que puede causar a la salud o al ambiente si no se maneja adecuadamente (ejemplo: líquido y vapores muy inflamables).
      
      .col-md.tarjeta.bg13.text-white.p-5
        .row.justify-content-center.mb-4
          .col-6.col-md-3.col-lg-6
            figure
              img(src='@/assets/curso/Tema2/img10.svg', alt='')          
        h3.text-center Consejos de prudencia (frases P) 
        p Recomendaciones sobre medidas preventivas, acciones de respuesta en caso de emergencia, almacenamiento y disposición segura, con el fin de reducir o controlar los riesgos derivados de la exposición a un producto químico (ejemplo: mantener alejado de fuentes de calor).

    p El conocimiento adecuado del SGA y de los elementos presentes en las etiquetas de los productos químicos es esencial para reconocer los peligros antes de manipular cualquier sustancia. Cada elemento de la etiqueta cumple una función específica y la correcta lectura e interpretación de esta información permite #[b prevenir accidentes y enfermedades laborales], promover una cultura de responsabilidad en el manejo de sustancias químicas y contribuir a la protección de la salud, el ambiente y las instalaciones del entorno.

    
    img(src='@/assets/curso/Tema2/img11.svg', alt='Texto que describa la imagen')
    .row.justify-content-center.g-0(data-aos="fade-right")
      .col-lg-12
        .tarjeta.clr--pink.p-4.rounded-0.h-100.bg11
          .tarjeta.bg-white.p-4
            TarjetaAudio.color-acento-botones.mb-4.p-5.no-cursiva(
            texto="Pódcast: Sistema Globalmente Armonizado (SGA) y la importancia del etiquetado químico"
            :audio="require('@/assets/curso/Tema2/podcast.mp3')"
        )
            .indicador--click(v-if="mostrarIndicadorTarjetaAudio")

        
    separador
    #t_2_2.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 2.2. Sistemas complementarios de identificación de riesgos químicos

    .row.justify-content-center.mb-3
      .col-lg-1.col-4.mb-3.col-md-3
        img(src='@/assets/curso/Tema2/img12.svg', alt='')
      .col-lg-11
        p El Sistema Globalmente Armonizado (SGA) es el marco de referencia internacional para la clasificación y comunicación de peligros de los productos químicos y establece dos herramientas oficiales de comunicación que son las etiquetas SGA y la Hoja de Datos de Seguridad (HDS), organizada en 16 secciones obligatorias con información detallada sobre la sustancia. Sin embargo, en los entornos laborales pueden emplearse sistemas complementarios que permiten reforzar la identificación de riesgos y facilitar su comprensión según las necesidades de cada organización.

    p Entre estos sistemas se encuentran:
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-4.col-9.mb-3.col-md-6
        img(src='@/assets/curso/Tema2/img13.png', alt='')
      .col-lg-8.ps-lg-0
        .bg2.p-4.p-lg-4.h-100
          ul.lista-ul--color.px-3
            li.mb-0.d-flex
              i.fas.fa-solid.fa-flask
              p #[b Sistemas de codificación por colores:] ayudan a reconocer de forma visual los tipos de riesgos (inflamabilidad, toxicidad, corrosividad).
            li.mb-0.d-flex
              i.fas.fa-solid.fa-flask
              p #[b #[em National Fire Protection Association] (NFPA):] permiten identificar de forma inmediata los riesgos y situaciones de incendio y emergencia mediante un rombo dividido en niveles de peligrosidad. 
            li.mb-0.d-flex
              i.fas.fa-solid.fa-flask
              p #[b #[em Hazardous Materials Identification System] (HMIS III):] clasifica riesgos con números y colores aplicados a operaciones rutinarias en ambientes laborales. 
            li.mb-0.d-flex
              i.fas.fa-solid.fa-flask
              p #[b Señalización interna:] diseñada según necesidades específicas de cada entorno laboral. 
            li.mb-0.d-flex
              i.fas.fa-solid.fa-flask
              p #[b Sistemas de transporte de mercancías peligrosas (reglamento modelo de la ONU):] normas que garantizan que los productos químicos sean transportados de manera segura, mediante etiquetas y números reconocidos internacionalmente. 

    p El SGA y el sistema NFPA 704 constituyen herramientas fundamentales para la identificación y comunicación de peligros químicos. La comparación entre ambos permite reconocer sus diferencias en estructura, alcance y aplicación, lo que facilita comprender cómo cada sistema aporta información específica para valorar el riesgo. 

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Tabla 3.
        span SGA vs. sistema NFPA 704

    .tabla-a.mb-5
      table
        thead
          tr.text-white
            th.bg8.w-25 Criterio
            th.bg8 NFPA 704 (rombo de seguridad)
            th.bg8 SGA
        tbody
          tr.bg7
            td.text-left Visualización
            td.text-left Rombo dividido en 4 secciones de colores (azul, rojo, amarillo, blanco).
            td.text-left Pictogramas en forma de rombo con borde rojo y fondo blanco.
          tr
            td.text-left Escala numérica
            td.text-left 0 a 4. Donde 4 es el mayor peligro (mortal / severo) y 0 es sin riesgo.
            td.text-left Categorías 1 a 5. Donde 1 es el mayor peligro y los números altos indican menor peligrosidad.
          tr.bg7
            td.text-left Objetivo
            td.text-left Respuesta rápida a emergencias (bomberos, brigadistas) en instalaciones fijas y tanques.
            td.text-left Comunicación de peligros en el lugar de trabajo, etiquetado de envases y transporte.
          tr
            td.text-left Ejemplo (inflamabilidad)
            td.text-left Rojo 4: se vaporiza y quema rápidamente a temperatura ambiente.
            td.text-left Categoría 1: líquidos y vapores extremadamente inflamables.

    .fondot2(data-aos="fade-right")
      .row.justify-content-center.align-items-center.mb-3.p-3
        .col-lg-1.col-4.mb-3.col-md-2
          img(src="@/assets/curso/Tema2/gota.png")
        .col-lg-10
          p En conjunto, estos sistemas complementan la información del SGA y las HDS, permitiendo que los trabajadores identifiquen rápidamente los riesgos y actúen de forma segura. Su correcta comprensión reduce la probabilidad de accidentes, mejora la respuesta ante emergencias y fortalece la cultura de la prevención en los ambientes laborales y formativos. Por ello, conocer y aplicar estos sistemas es fundamental para cualquier persona que manipule productos químicos en el sector productivo, educativo o industrial.
























</template>

<script>
export default {
  name: 'Tema2',
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
