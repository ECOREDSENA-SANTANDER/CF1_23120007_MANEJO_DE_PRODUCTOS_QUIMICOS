<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-3(data-aos="fade-left")
      .col-lg-4.col-md-8.mb-3.col-11
        img(src='@/assets/curso/portada/img01.png', alt='')
      .col-lg-8
        .row.justify-content-center
          .col-lg-2.col-md-2.mb-3.col-3
            img(src='@/assets/curso/portada/img02.svg', alt='')
          .col-lg-10
            p El manejo de productos químicos es una actividad fundamental en diversos sectores industriales y productivos, pero también representa un riesgo significativo cuando no se realiza de manera adecuada. La exposición, manipulación incorrecta o desconocimiento de las propiedades de las sustancias químicas, puede generar accidentes laborales, afectaciones en la salud de los trabajadores y daños al entorno. Por esta razón, es indispensable fortalecer las competencias relacionadas con la identificación de peligros y la gestión preventiva de los riesgos químicos en los ambientes de trabajo.
        .bg1.p-2 El manejo inteligente de productos químicos y la prevención de riesgos se orientan al desarrollo de buenas prácticas, basadas en el conocimiento de su naturaleza, posibles interacciones y las condiciones del entorno laboral. A través de la aplicación de normas técnicas y procedimientos establecidos, se busca reducir incidentes, garantizar la seguridad y salud en el trabajo y optimizar los procesos productivos. Este enfoque promueve una cultura de prevención, responsabilidad y control en el uso de estos agentes dentro de las organizaciones.
    .row.justify-content-center.align-items-center(data-aos="fade-left")           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/Hxzk1RjRs8M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Manejo inteligente de químicos y prevención de riesgos

</template>

<script>
export default {
  name: 'Introduccion',
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
