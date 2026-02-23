<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Fundamentos químicos

      .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
        .col-lg-7
          p Se denomina producto químico a toda sustancia o mezcla de sustancias que posee características físicas y químicas que permiten satisfacer una o varias necesidades en diferentes actividades humanas, industriales o domésticas. Cuando un producto químico está conformado por una mezcla de sustancias, generalmente contiene uno o más principios activos, que son las sustancias responsables de cumplir la función principal del producto, en virtud de sus propiedades (Quimica.es, s.f.).
          .row.justify-content-center
            .col-lg-2.col-4.col-md-3.mb-3
              img(src='@/assets/curso/Tema1/img02.svg', alt='')
            .col-lg-10
              p.bg1.p-3 Los demás componentes del producto reciben el nombre de excipientes. Estos no cumplen una función química directa, pero ayudan a mejorar la estabilidad, la conservación y el correcto funcionamiento de los principios activos (Oficina Internacional del Trabajo, 1993).
        .col-lg-5.col-10.col-md-7
          img(src='@/assets/curso/Tema1/img01.png', alt='')

      .row.justify-content-center.mb-0(data-aos="fade-right")
        .col-lg-9
          .row.justify-content-center.g-0.mb-4(data-aos='fade-right')
            .col-lg-5.pe-lg-0
              .bg1.h-100.d-none.d-lg-block
                img.w-100.h-100(src='@/assets/curso/Tema1/img05.png', alt='')
            .col-lg-7.ps-lg-0
              .bg2.p-4.p-lg-4.h-100
                h4.text-white.col-lg-10.bg3.p-4 Algunos ejemplos de productos químicos de uso cotidiano son:
                ul.lista-ul--color.px-3
                  li.mb-0
                    i.fas.fa-solid.fa-flask
                    |Blanqueadores para ropa.
                  li.mb-0
                    i.fas.fa-solid.fa-flask
                    |Aceite para automóviles.
                  li.mb-0
                    i.fas.fa-solid.fa-flask
                    |Enjuague bucal.
                  li.mb-0
                    i.fas.fa-solid.fa-flask
                    |Pasta dental.
                  li.mb-0
                    i.fas.fa-solid.fa-flask
                    |Jabón.
                  li.mb-0
                    i.fas.fa-solid.fa-flask
                    |Urea utilizada como fertilizante.
          p Desde el punto de vista químico, los compuestos están formados por dos o más átomos unidos entre sí mediante enlaces químicos. Estos átomos pueden organizarse en arreglos específicos dentro de la molécula, dando lugar a grupos funcionales, estructuras responsables de muchas de las propiedades físicas y químicas de las sustancias. La combinación de diferentes grupos funcionales determina características importantes de los compuestos, como su reactividad, solubilidad, inflamabilidad o toxicidad, aspectos clave para su manejo seguro en los ambientes de formación y trabajo.
        .col-lg-3.col-8.col-md-6
          img(src='@/assets/curso/Tema1/img03.png', alt='')

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-md-11.col-lg-12.col-12
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
            h3.bg4.py-2.w-card-text Estructura de los productos químicos     

      SlyderB.mb-5(:datos="datosSlyder").bg1slyder.p-5(data-aos="fade-left") 

      .fondot1
        .row.justify-content-center.align-items-center.mb-3.p-3(data-aos="fade-right")
          .col-lg-1.col-4.mb-3.col-md-2
            img(src="@/assets/curso/Tema1/img06.png")
          .col-lg-10
            p El conocimiento de los conceptos básicos relacionados con los productos químicos, los átomos, las moléculas y los grupos funcionales permite comprender cómo se originan las propiedades físicas y químicas de la materia y su comportamiento en diferentes contextos. Estos fundamentos son esenciales para el uso adecuado, seguro y responsable de dichos productos en ambientes de formación, laborales e industriales, ya que facilitan la identificación de riesgos, la correcta manipulación y la toma de decisiones informadas frente a su aplicación y manejo.

      separador
      #t_1_1.titulo-segundo.mb-5(data-aos="zoom-in-left")
        h2 1.1. Estados de la materia 

      .row.justify-content-center.align-items-center.mb-2(data-aos="fade-right")
        .col-lg-12
          img.mb-4(src="@/assets/curso/Tema1/img07.png")
          P Según Silbergeld (s. f.), los productos químicos pueden presentarse en diferentes estados físicos, dependiendo de su composición, la temperatura y la presión a las que se encuentren. Los estados físicos del producto son de fundamental importancia, ya que algunos proporcionan mayor movilidad a las sustancias químicas que otros, lo que puede facilitar el ingreso de las sustancias al organismo. Se reconocen cuatro estados físicos de la materia: sólido (como la arena), líquido (como el agua en condiciones normales), gaseoso (como el aire en condiciones normales) y plasma (estado en el que se encuentra la materia en las estrellas, como el Sol). Las mezclas de estos estados también se consideran; por lo tanto, los estados y sus combinaciones se dividen en:

      .row.justify-content-center.mb-3(data-aos="zoom-in-left")
        .col-md-11.col-lg-12.col-12
          h3.solidos-badge.text-white · Solidos
      
      .row.justify-content-center.mb-3(data-aos="fade-right")
        .col-lg-1.col-4.col-md-3
          img.mb-4(src="@/assets/curso/Tema1/img08.svg")
        .col-lg-11
          p son aquellos en los que el producto presenta resistencia al movimiento, conservando forma y volumen definidos; sin embargo, es importante tener en cuenta que algunos productos sólidos se encuentran en forma de polvos, los cuales pueden dispersarse en el aire u otros gases para formar aerosoles, facilitando su movilidad y favoreciendo la inhalación por parte del personal. Son ejemplos de sólidos el azúcar, la sal, la urea, el carbonato de sodio, el hidróxido de potasio, entre otros.
      
      .row.justify-content-center.mb-3(data-aos="zoom-in-left")
        .col-md-11.col-lg-12.col-12
          h3.solidos-badge.text-white · Líquidos
      
      .row.justify-content-center.mb-3
        .col-lg-1.col-4.col-md-3
          img.mb-4(src="@/assets/curso/Tema1/img09.svg")
        .col-lg-11
          p poseen una baja dispersión de las partículas. Las moléculas que constituyen los líquidos obedecen aisladamente a la gravedad y se adaptan al recipiente que las contienen; algunas sustancias sólidas o líquidas pueden ser mezcladas con otros componentes líquidos formando soluciones o dispersiones. Son ejemplos de líquidos la acetona, el etanol, el agua, el ácido sulfúrico, el aceite de cocina, entre otros. 
      
      .row.justify-content-center.mb-3(data-aos="zoom-in-left")
        .col-md-11.col-lg-12.col-12
          h3.solidos-badge.text-white · Aerosoles
      
      .row.justify-content-center.mb-3(data-aos="fade-right")
        .col-lg-1.col-4.col-md-3
          img.mb-4(src="@/assets/curso/Tema1/img10.svg")
        .col-lg-11
          p son dispersiones (mezclas) de partículas sólidas o líquidas en un medio gaseoso; en muchos casos, el aire. Se clasifican en diferentes tipos según el origen y la naturaleza de las partículas en polvos, humos y nieblas.

      AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-5(data-aos="fade-right")
        .row.justify-content-center.ali(titulo="Polvos")
          .col-md-6.mb-4.mb-md-0
            p Se forman por suspensión de partículas sólidas en el aire; estas pueden sedimentar bajo la influencia de la gravedad. Dependiendo de la composición y la respuesta del organismo pueden ser inertes, tóxicas (con diversos efectos) o alergénicas. El tamaño de las partículas es un factor determinante: las mayores de 10 micras (µm) generalmente quedan atrapadas en las vías aéreas superiores, las menores de 10 micras pueden llegar a las vías respiratorias profundas, siendo las más peligrosas las menores de 5 micras, ya que pueden alcanzar los alvéolos pulmonares. 
            h5 Propiedades biológicas:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-solid.fa-flask
                p.mb-0 Se forman por suspensión de sólidos finos en el aire.
              li.mb-0.d-flex
                i.fas.fa-solid.fa-flask
                p.mb-0 Los aerosoles de polvo tienen propiedades biológicas que determinan su impacto en organismos vivos, principalmente por toxicidad, alergenicidad y penetración en vías respiratorias.
              li.mb-0.d-flex
                i.fas.fa-solid.fa-flask
                p.mb-0 La composición varía: inertes (inofensivas), tóxicas (dañan órganos) o alergénicas (causan estornudos).  
          .col-md-5
            figure
              img.mb-4(src='@/assets/curso/Tema1/aco1.png', alt='')
            ul.lista-ul--color.bg5.p-3
              h5 Usos comunes:
              li.mb-0.d-flex
                i.fas.fa-solid.fa-flask
                p.mb-0 En agricultura: fumigación para controlar plagas.
              li.mb-0.d-flex
                i.fas.fa-solid.fa-flask
                p.mb-0 Industria: pinturas en #[em spray] o abrasivos para limpiar metales.
              li.mb-0.d-flex
                i.fas.fa-solid.fa-flask
                p.mb-0 Medicina: inhaladores con polvo fino para tratar asma.
        .row.justify-content-center(titulo="Humos")(data-aos="fade-right")
          .col-md-6.mb-4.mb-md-0
            p Son también partículas sólidas finas suspendidas en un gas, generalmente aire; su origen son los procesos de combustión. En comparación con los polvos, las partículas de humo suelen ser de menor tamaño, ya que se forman por la condensación de vapores generados durante la combustión. Los aerosoles de humo están constituidos por partículas diminutas que permanecen flotando en el aire. Cuando su origen se asocia a una combustión incompleta, pueden contener sustancias altamente tóxicas para la salud y el ambiente.
            h5 Propiedades biológicas:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-solid.fa-flask
                p.mb-0 Muy finas (0.1 - 1 µm), penetran hasta los alvéolos pulmonares causando inflamación, cáncer y daños en el cerebro.
              li.mb-0.d-flex
                i.fas.fa-solid.fa-flask
                p.mb-0 Contienen carcinógenos como benceno o metales pesados; irritan mucosas y provocan asma o infecciones.
              li.mb-0.d-flex
                i.fas.fa-solid.fa-flask
                p.mb-0 Contribuyen al calentamiento por absorción de calor (hollín en glaciares que acelera el derretimiento).
          .col-md-5
            figure
              img.mb-4(src='@/assets/curso/Tema1/aco2.png', alt='')
            ul.lista-ul--color.bg5.p-3
              h5 Usos comunes:
              li.mb-0.d-flex
                i.fas.fa-solid.fa-flask
                p.mb-0 Señalización: humos de bengalas en aviación o rescates.
              li.mb-0.d-flex
                i.fas.fa-solid.fa-flask
                p.mb-0 Industria: soldadura o generación controlada de humo para pruebas de ventilación.
              li.mb-0.d-flex
                i.fas.fa-solid.fa-flask
                p.mb-0 Agricultura: quema controlada para limpiar campos o ahuyentar plagas.

        .row.justify-content-center(titulo="Nieblas")
          .col-md-6.mb-4.mb-md-0
            p Son partículas líquidas suspendidas en el aire que resultan de procesos de condensación y atomización. Por ejemplo, las nieblas formadas en procesos de pintura mediante pistolas de pulverización o la neblina que aparece en una mañana fría. Los aerosoles de niebla están constituidos por gotitas líquidas que permanecen flotando en el aire, formadas por enfriamiento o pulverización.
            h5 Propiedades biológicas:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-solid.fa-flask
                p.mb-0 Pueden irritar ojos, nariz y pulmones al depositarse en mucosas; las más finas penetran las vías respiratorias causando tos o asma en personas sensibles.
          .col-md-5
            figure
              img.mb-4(src='@/assets/curso/Tema1/aco3.png', alt='')
            ul.lista-ul--color.bg5.p-3
              h5 Usos comunes:
              li.mb-0.d-flex
                i.fas.fa-solid.fa-flask
                p.mb-0 Pintura industrial en #[em spray], humidificadores para invernaderos, sistemas contra incendios que usan niebla fina para enfriar y sofocar el fuego.

        .row.justify-content-center(titulo="Gases")(data-aos="fade-right")
          .col-md-6.mb-4.mb-md-0
            p Poseen moléculas muy dispersas con una amplia movilidad. Ocupan todo el espacio que los contiene y generalmente no cambian de fase con facilidad; algunos ejemplos son el etileno, el gas natural, el argón y el aire.
            h5 Propiedades biológicas:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-solid.fa-flask
                p.mb-0 Son invisibles e inodoros en muchos casos; algunos irritan los pulmones o asfixian al desplazar el oxígeno (ejemplo: el argón).
              li.mb-0.d-flex
                i.fas.fa-solid.fa-flask
                p.mb-0 Altamente reactivos o inertes según el tipo: etileno acelera la maduración de frutas, pero los altos niveles afectan la respiración.
          .col-md-5
            figure
              img.mb-4(src='@/assets/curso/Tema1/aco4.png', alt='')
            ul.lista-ul--color.bg5.p-3
              h5 Usos comunes:
              li.mb-0.d-flex
                i.fas.fa-solid.fa-flask
                p.mb-0 Calefacción y cocina (gas natural).
              li.mb-0.d-flex
                i.fas.fa-solid.fa-flask
                p.mb-0 Industria alimentaria (etileno para madurar frutas); soldadura (argón).
              li.mb-0.d-flex
                i.fas.fa-solid.fa-flask
                p.mb-0 Globos y luces (helio, similar al argón).

        .row.justify-content-center(titulo="Vapores")(data-aos="fade-right")
          .col-md-6.mb-4.mb-md-0
            p Son la fase gaseosa de sustancias que, en condiciones normales, se encuentran en estado líquido o sólido. Se generan por evaporación o sublimación y se comportan como un gas; sin embargo, pueden retornar a su estado original mediante cambios en la temperatura o la presión. Todos los líquidos producen vapores en mayor o menor proporción, dependiendo de su volatilidad. Ejemplos comunes son el benceno, la acetona y el vapor de agua generado por un líquido caliente.
            h5 Propiedades biológicas:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-solid.fa-flask
                p.mb-0 Pueden irritar ojos, nariz y pulmones; los tóxicos como el benceno causan mareos, cáncer o daño neurológico.
              li.mb-0.d-flex
                i.fas.fa-solid.fa-flask
                p.mb-0 Altamente volátiles, se absorben rápidamente por inhalación o a través de la piel, afectando órganos como el hígado o los riñones.
          .col-md-5
            figure
              img.mb-4(src='@/assets/curso/Tema1/aco5.png', alt='')
            ul.lista-ul--color.bg5.p-3
              h5 Usos comunes:
              li.mb-0.d-flex
                i.fas.fa-solid.fa-flask
                p.mb-0 Industria: solventes en pinturas, limpieza (acetona) y refrigeración.
              li.mb-0.d-flex
                i.fas.fa-solid.fa-flask
                p.mb-0 Hogar: vapor de agua para cocinar, desinfectar o humidificadores.
              li.mb-0.d-flex
                i.fas.fa-solid.fa-flask
                p.mb-0 Medicina: inhalaciones para aliviar la congestión.

      .fondot1(data-aos="fade-right")
        .row.justify-content-center.align-items-center.mb-3.p-3
          .col-lg-1.col-4.mb-3.col-md-2
            img(src="@/assets/curso/Tema1/atencion.png")
          .col-lg-10
            p Es importante tener en cuenta que existen productos que pueden cambiar de estado físico, dependiendo de las condiciones de presión y temperatura, como ocurre con el agua; esta puede encontrarse en estado sólido (hielo) a bajas temperaturas, en estado líquido en condiciones normales y en estado gaseoso (vapor) cuando se evapora. Además, el agua puede presentarse en el aire en forma de aerosol, como ocurre con la nieve fina (partículas sólidas suspendidas) o con la niebla y las nubes (gotas líquidas suspendidas).


      separador
      #t_1_2.titulo-segundo.mb-5(data-aos="zoom-in-left")
        h2 1.2. Grupos funcionales, características, usos y riesgos

      p Un grupo funcional se define como una combinación específica de átomos dentro de una molécula que confiere propiedades químicas y físicas particulares a los compuestos que lo contienen. Estas estructuras determinan la reactividad, solubilidad y comportamiento químico del producto, influyendo tanto en sus aplicaciones (para qué sirve) como en su peligrosidad intrínseca y en su impacto potencial en el ambiente y la salud.



























































































  </template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Átomo',
        texto:
          'es la unidad básica de la materia. Toda la materia está formada por átomos que, al unirse mediante enlaces químicos, forman moléculas o compuestos con propiedades específicas.',
        imagen: require('@/assets/curso/Tema1/sli1.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Moléculas químicas',
        texto:
          'son las unidades más pequeñas de una sustancia que conservan sus propiedades físicas y químicas, formadas por dos o más átomos unidos mediante enlaces covalentes.',
        imagen: require('@/assets/curso/Tema1/sli2.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Grupos funcionales',
        texto:
          'combinación específica de átomos dentro de una molécula, que confiere propiedades físicas y químicas a los compuestos que los contienen.',
        imagen: require('@/assets/curso/Tema1/sli3.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Producto químico',
        texto:
          'está formado por una sustancia o una mezcla de sustancias; posee características funcionales determinadas por los componentes que lo constituyen y por sus interacciones.',
        imagen: require('@/assets/curso/Tema1/sli4.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
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
