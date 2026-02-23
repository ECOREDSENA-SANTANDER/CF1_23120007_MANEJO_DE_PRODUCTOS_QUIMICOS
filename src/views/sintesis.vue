<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La gestión integral de riesgos químicos se fundamenta en el conocimiento de los estados de la materia, la clasificación de grupos funcionales orgánicos e inorgánicos para comprender su estructura y peligrosidad y el ciclo de vida del producto. Esta base técnica se complementa con el cumplimiento de estándares internacionales y nacionales, como el Sistema Globalmente Armonizado (SGA) para el etiquetado preventivo, y el manejo riguroso de documentos técnicos según las normas NTC 1692 y NTC 4532, que incluyen fichas técnicas, hojas de datos de seguridad y tarjetas de emergencia. Asimismo, el control operativo exige la aplicación de buenas prácticas de manufactura y de laboratorio que consideren la toxicología y la jerarquía de controles, apoyándose en el uso e inspección de elementos de protección personal. Finalmente, la preparación ante contingencias se alinea con la Ley 1523 de 2012 y el Decreto 1828 de 2021, estableciendo planes de respuesta ante derrames e incendios que integran brigadas y recursos técnicos para mitigar impactos sobre la salud y el medio ambiente.
    

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Diagrama de flujo sobre el manejo de químicos que organiza en seis columnas los fundamentos técnicos, normatividad de etiquetado y seguridad, medidas de protección personal y planes de contingencia para la prevención de riesgos.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
