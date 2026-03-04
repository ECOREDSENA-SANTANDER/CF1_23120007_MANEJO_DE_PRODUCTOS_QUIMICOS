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
          p Son aquellos en los que el producto presenta resistencia al movimiento, conservando forma y volumen definidos; sin embargo, es importante tener en cuenta que algunos productos sólidos se encuentran en forma de polvos, los cuales pueden dispersarse en el aire u otros gases para formar aerosoles, facilitando su movilidad y favoreciendo la inhalación por parte del personal. Son ejemplos de sólidos el azúcar, la sal, la urea, el carbonato de sodio, el hidróxido de potasio, entre otros.
      
      .row.justify-content-center.mb-3(data-aos="zoom-in-left")
        .col-md-11.col-lg-12.col-12
          h3.solidos-badge.text-white · Líquidos
      
      .row.justify-content-center.mb-3
        .col-lg-1.col-4.col-md-3
          img.mb-4(src="@/assets/curso/Tema1/img09.svg")
        .col-lg-11
          p Poseen una baja dispersión de las partículas. Las moléculas que constituyen los líquidos obedecen aisladamente a la gravedad y se adaptan al recipiente que las contienen; algunas sustancias sólidas o líquidas pueden ser mezcladas con otros componentes líquidos formando soluciones o dispersiones. Son ejemplos de líquidos la acetona, el etanol, el agua, el ácido sulfúrico, el aceite de cocina, entre otros. 
      
      .row.justify-content-center.mb-3(data-aos="zoom-in-left")
        .col-md-11.col-lg-12.col-12
          h3.solidos-badge.text-white · Aerosoles
      
      .row.justify-content-center.mb-3(data-aos="fade-right")
        .col-lg-1.col-4.col-md-3
          img.mb-4(src="@/assets/curso/Tema1/img10.svg")
        .col-lg-11
          p Son dispersiones (mezclas) de partículas sólidas o líquidas en un medio gaseoso; en muchos casos, el aire. Se clasifican en diferentes tipos según el origen y la naturaleza de las partículas en polvos, humos y nieblas.

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

      TabsC.color-primario(data-aos="zoom-in-left")
        .py-3.py-md-4(titulo="Compuestos inorgánicos")
          .row.justify-content-center
            .col-lg-4.col-10
              img.mb-3(src='@/assets/curso/Tema1/img11.png', alt='')
              p.bg6.p-3 Los compuestos inorgánicos se clasifican de acuerdo con sus funciones químicas, es decir, según el tipo de sustancia y su comportamiento químico, independientemente del número de átomos que contengan. Generalmente, su estructura se deriva de la combinación de metales y no metales con elementos como el oxígeno o el hidrógeno, dando lugar a funciones como óxidos, ácidos, bases y sales.
            .col-lg-6.mb-4.mb-md-0
              ul.lista-ul--color.bg5.p-3
                li.mb-0.d-flex
                  i.fas.fa-solid.fa-flask
                  p.mb-3 #[b Óxidos:] surgen de la combinación del oxígeno con otro elemento de la tabla periódica. Se dividen en óxidos básicos (metal y oxígeno) y óxidos ácidos (no metal y oxígeno).
                li.mb-0.d-flex
                  i.fas.fa-solid.fa-flask
                  p.mb-3 #[b Bases (hidróxidos):] se forman por la reacción de un óxido básico con el agua. Se caracterizan por la presencia del grupo funcional OH en su estructura. También se conocen como bases o álcalis y en solución liberan iones. 
                li.mb-0.d-flex
                  i.fas.fa-solid.fa-flask
                  p.mb-3 #[b Ácidos:] pueden clasificarse en hidrácidos (hidrógeno y no metal) y oxácidos (óxido ácido y agua). Un ejemplo industrial clave es el ácido sulfúrico, un líquido viscoso, aceitoso y altamente corrosivo.
                li.mb-0.d-flex
                  i.fas.fa-solid.fa-flask
                  p.mb-3 #[b Sales:] se forman a partir de la reacción entre un ácido y una base (sal oxisal), o por la combinación de un metal con un no metal (sal haloidea). Un ejemplo común es el cloruro de sodio (NaCl), más conocido como sal de cocina.

        
        .py-3.py-md-4(titulo="Compuestos orgánicos")
          .row.justify-content-center
            .col-lg-4.col-10
              img.mb-3(src='@/assets/curso/Tema1/img12.png', alt='')
              p.bg6.p-3 Están formados principalmente por carbono, caracterizados por la presencia de enlaces carbono-carbono y carbono-hidrógeno. La versatilidad del átomo de carbono le permite formar una gran variedad de compuestos con propiedades físicas y químicas diversas.
            .col-lg-6.mb-4.mb-md-0
              ul.lista-ul--color.bg5.p-3
                li.mb-0.d-flex
                  i.fas.fa-solid.fa-flask
                  p.mb-3 #[b Hidrocarburos:] son compuestos formados únicamente por carbono e hidrógeno. Se clasifican en alcanos (parafinas), alquenos (olefinas), alquinos (acetilenos) y aromáticos. Un ejemplo es el benceno, un hidrocarburo aromático, líquido, volátil e inflamable.
                li.mb-0.d-flex
                  i.fas.fa-solid.fa-flask
                  p.mb-2 #[b Funciones oxigenadas:] son compuestos que contienen oxígeno en su estructura molecular y cuya presencia determina propiedades físicas y químicas específicas. 
                    span
                    br  
                    br
                    | Dentro de este grupo se encuentran los alcoholes, caracterizados por el grupo hidroxilo (–OH); los éteres, que presentan un átomo de oxígeno unido a dos radicales orgánicos (R y R’); y los aldehídos y cetonas, que contienen el grupo carbonilo (C=O). También hacen parte los ácidos carboxílicos, que poseen el grupo carboxilo (–COOH), y los ésteres, derivados de la reacción entre un ácido carboxílico y un alcohol. Estas funciones influyen en la reactividad, polaridad y aplicaciones industriales de los compuestos que las contienen.
                li.mb-0.d-flex
                  i.fas.fa-solid.fa-flask
                  p.mb-3 #[b Funciones nitrogenadas:] son compuestos orgánicos que contienen nitrógeno en su estructura. Entre ellas se encuentran las aminas, derivadas del amoníaco, las amidas, que contienen un grupo carbonilo unido a un nitrógeno, los nitrilos, caracterizados por el grupo ciano (–C≡N) y los nitrocompuestos que poseen el grupo nitro (–NO₂), responsable de propiedades químicas y reactividad particulares. Estas funciones influyen en la polaridad, basicidad y comportamiento químico de los compuestos que las contienen.
    
      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-md-11.col-lg-12.col-12
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
            h3.bg4.py-2.w-card-text Características y usos de los productos químicos

      p Los productos químicos se utilizan para satisfacer las necesidades de múltiples actividades humanas, que abarcan desde la producción de bienes de consumo hasta los servicios de saneamiento, tratamiento de aguas, limpieza y desinfección. En la siguiente tabla se presentan algunos de los productos químicos más comunes, características y usos. 
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Tabla 1.
        span Productos químicos más comunes
      .tabla-a
        table
          thead
            tr.text-white
              th.bg8.text-left Nombre
              th.bg8.text-left Fórmula química
              th.bg8.text-left Función química o grupo funcional
              th.w-25.bg8.text-left Características
              th.w-25.bg8.text-left Usos y riesgos
          tbody
            tr.bg7
              td.text-left Ácido sulfúrico
              td.text-left H₂SO₄
              td.text-left Ácido (oxácido)
              td.text-left Líquido aceitoso, incoloro a ligeramente amarillento, altamente corrosivo, fuerte deshidratante, reacciona violentamente con agua si se mezcla incorrectamente.
              td.text-left #[b Usos:] fertilizantes, refinación de petróleo, baterías. <br> #[b Riesgos:] causa quemaduras graves, corrosivo para metales, reacción exotérmica con agua.
            tr
              td.text-left Hidróxido de sodio
              td.text-left NaOH
              td.text-left Base (hidróxido)
              td.text-left Sólido blanco higroscópico, muy soluble en agua, genera calor al disolverse, altamente alcalino.
              td.text-left #[b Usos:] fabricación de jabones, papel, limpieza industrial. <br> #[b Riesgos:] corrosivo, provoca quemaduras químicas severas.
            tr.bg7
              td.text-left Cloruro de sodio o sal de cocina
              td.text-left NaCl
              td.text-left Sal
              td.text-left Sólido cristalino blanco, soluble en agua, estable químicamente.
              td.text-left #[b Usos:] industria alimentaria, producción de cloro y soda cáustica. <br> #[b Riesgos:] baja toxicidad, pero en altas concentraciones puede afectar ecosistemas acuáticos.
            tr
              td.text-left Hipoclorito de sodio (lejía)
              td.text-left NaClO
              td.text-left Sal derivada del ácido hipocloroso
              td.text-left Solución acuosa de color amarillo verdoso pálido, olor fuerte característico a cloro. Es un agente oxidante fuerte e inestable frente a la luz, el calor y el contacto con ácidos.
              td.text-left #[b Usos:] desinfección de superficies, tratamiento de agua potable y residual, blanqueador textil, saneamiento hospitalario. <br> #[b Riesgos:] corrosivo para piel y ojos, puede liberar gas cloro tóxico al mezclarse con ácidos o amoníaco, irritante respiratorio, peligroso para organismos acuáticos.
            tr.bg7
              td.text-left Hexano
              td.text-left C₆H₁₄
              td.text-left Hidrocarburo alifático (alcano)
              td.text-left Líquido incoloro, volátil, inflamable, insoluble en agua.
              td.text-left #[b Usos:] solvente industrial, extracción de aceites vegetales. <br> #[b Riesgos:] altamente inflamable, efectos neurotóxicos por exposición prolongada.
            tr.text-left
              td.text-left Benceno
              td.text-left C₆H₆
              td.text-left Hidrocarburo aromático
              td.text-left Líquido incoloro, volátil, inflamable, olor dulce característico.
              td.text-left #[b Usos:] materia prima en plásticos, resinas y detergentes. <br> #[b Riesgos:] carcinógeno reconocido, afecta médula ósea.

            tr.text-left.bg7
              td.text-left Etanol
              td.text-left C₂H₅OH
              td.text-left Alcohol
              td.text-left Líquido incoloro, volátil, miscible con agua, inflamable.
              td.text-left #[b Usos:] desinfectantes, solvente, bebidas alcohólicas, biocombustible. <br> #[b Riesgos:]  inflamable, efectos depresores del sistema nervioso central.
      
      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-md-11.col-lg-12.col-12
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema1/ico.svg")
            h3.bg4.py-2.w-card-text Estructura y riesgo

      p La estructura química, dada por la configuración de los grupos funcionales presentes en una sustancia, influye directamente en sus propiedades y en los peligros asociados. En el Sistema Globalmente Armonizado (SGA), los productos se clasifican en tres tipos de peligros derivados de estas propiedades intrínsecas:

      .row.justify-content-center.cursor-pointer.mb-3(data-aos="zoom-in-left")
        .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt(@mouseover="mostrarIndicador = false")
            .indicador--hover(v-if="mostrarIndicador")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/Tema1/1.png", alt="")
            .crd_hover_txt--body
              h4.mb-3.d-flex.align-items-center
                span.icono-circulo.me-2
                  span.flecha
                | Peligros físicos
              p.mb-0 Relacionados con propiedades físicas o químicas que pueden provocar explosiones, inflamabilidad (gases, líquidos o sólidos) o corrosión de metales.
        .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/Tema1/2.png", alt="")
            .crd_hover_txt--body
              h4.mb-3.d-flex.align-items-center
                span.icono-circulo.me-2
                  span.flecha
                | Peligros para la salud
              p.mb-0 Asociados a la toxicidad (aguda o crónica), la capacidad de causar lesiones oculares, irritación cutánea, efectos cancerígenos o mutagénicos, entre otros. 
        .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/Tema1/3.png", alt="")
            .crd_hover_txt--body
              h4.mb-3.d-flex.align-items-center
                span.icono-circulo.me-2
                  span.flecha
                | Peligros ambientales
              p.mb-0 Incluyen la toxicidad para organismos acuáticos y los daños a la capa de ozono.

      p Es fundamental diferenciar entre #[b peligro] (capacidad intrínseca de una sustancia para causar daño, como ser corrosiva) y #[b riesgo] (probabilidad de que el daño ocurra en función de la exposición). Una correcta identificación de la estructura química permite implementar medidas de prevención como el etiquetado, el almacenamiento seguro y el uso de protección personal, con el fin de minimizar los riesgos.

      separador
      #t_1_3.titulo-segundo.mb-5(data-aos="zoom-in-left")
        h2 1.3. Ciclo de vida de los productos químicos

      .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
        .col-lg-5.mb-3.col-11.col-md-8
          img(src='@/assets/curso/Tema1/img14.png', alt='')
        .col-lg-7
          p El ciclo de vida de los productos químicos comprende desde la identificación de necesidades, investigación y diseño, hasta su fabricación mediante materias primas naturales o recicladas. Posteriormente, la gestión abarca el almacenamiento, transporte y distribución, etapas que exigen un cumplimiento riguroso de la normativa de seguridad vigente para prevenir incidentes que afecten la salud humana, las instalaciones o el entorno natural.
          p El proceso concluye con la gestión integral de residuos y la disposición final bajo criterios de sostenibilidad y control de riesgos. En cada fase, resulta indispensable implementar el Sistema Globalmente Armonizado (SGA) para la identificación y comunicación de peligros, garantizando que trabajadores y otros actores cuenten con información clara sobre los riesgos asociados a la manipulación de estas sustancias.

      .fondot1_1(data-aos="zoom-in-left")
        .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
          .col-lg-6.col-11.col-md-7
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 1.
              span Ciclo de vida de un producto químico
            img(src='@/assets/curso/Tema1/fig1.svg', alt='Diagrama circular que muestra las etapas del producto químico: creación, diseño, desarrollo, fabricación, almacenamiento, transporte, venta, uso y eliminación, dispuestas de forma secuencial y continua.')

      h5.mb-4 Las fases del ciclo de vida identificadas son las siguientes:

      .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
        .col-lg-3.col-6.mb-4.col-md-4
          img(src='@/assets/curso/Tema1/img15.png', alt='')
        .col-lg-9
          TabsA.color-acento-botones
            .tarjeta.color-acento-botones--borde.p-4(titulo="Creación, diseño y desarrollo")
              p Salon las etapas iniciales donde se concibe el producto.
            .tarjeta.color-acento-botones--borde.p-4(titulo="Fabricación")
              p En esta etapa se produce la sustancia química utilizando diversas materias primas, las cuales pueden ser materiales naturales o sustancias recicladas provenientes de otros procesos.
            .tarjeta.color-acento-botones--borde.p-4(titulo="Almacenamiento")
              p Una vez fabricado, el producto requiere ser guardado bajo condiciones seguras antes de su distribución.
            .tarjeta.color-acento-botones--borde.p-4(titulo="Transporte")
              p Movilización del producto hacia los puntos de distribución o consumo.
            .tarjeta.color-acento-botones--borde.p-4(titulo="Venta")
              p Comercialización del producto químico.
            .tarjeta.color-acento-botones--borde.p-4(titulo="Uso")
              p La etapa en la que el producto cumple la función para la cual fue creado (ejemplo: limpieza, fertilización, procesos industriales).
            .tarjeta.color-acento-botones--borde.p-4(titulo="Eliminación")
              p Fase final donde se desecha el producto o sus residuos.

      .fondot2(data-aos="fade-right")
        .row.justify-content-center.align-items-center.mb-3.p-3
          .col-lg-1.col-4.mb-3.col-md-2
            img(src="@/assets/curso/Tema1/peligro.png")
          .col-lg-10
            p Es importante destacar que, dependiendo de la etapa en la que se encuentre el producto, se deben aplicar diferentes mecanismos de seguridad (como el etiquetado o las fichas de datos de seguridad) para informar sobre las amenazas y garantizar un manejo adecuado.




































































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
          'Es la unidad básica de la materia. Toda la materia está formada por átomos que, al unirse mediante enlaces químicos, forman moléculas o compuestos con propiedades específicas.',
        imagen: require('@/assets/curso/Tema1/sli1.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Moléculas químicas',
        texto:
          'Son las unidades más pequeñas de una sustancia que conservan sus propiedades físicas y químicas, formadas por dos o más átomos unidos mediante enlaces covalentes.',
        imagen: require('@/assets/curso/Tema1/sli2.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Grupos funcionales',
        texto:
          'Combinación específica de átomos dentro de una molécula, que confiere propiedades físicas y químicas a los compuestos que los contienen.',
        imagen: require('@/assets/curso/Tema1/sli3.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Producto químico',
        texto:
          'Está formado por una sustancia o una mezcla de sustancias; posee características funcionales determinadas por los componentes que lo constituyen y por sus interacciones.',
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

<style lang="sass">
.cursor-pointer.crd_hover_txt
  cursor: pointer
.crd_hover_txt
  position: relative
  padding: 0 !important
  overflow: hidden !important
  &:hover
    .crd_hover_txt--body
      transition: all 0.5s cubic-bezier(0.42, 0, 0.58, 1)
      transform: translateY(0)

  .crd_hover_txt--body
    position: absolute
    padding: 1.5rem
    bottom: 0
    transition: all 0.5s cubic-bezier(0.42, 0, 0.58, 1)
    transform: translateY(calc( 100% - 3.85rem ))
    background-color: #D2E6BD

  @media (min-width:1200px) and (max-width:1400px)
    .crd_hover_txt--body
      p
        font-size: 0.85em
</style>
