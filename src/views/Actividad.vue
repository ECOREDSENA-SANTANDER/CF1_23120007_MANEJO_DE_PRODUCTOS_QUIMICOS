<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      <Actividad :cuestionario="cuestionario"/>
  
</template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'manejo inteligente de químicos y prevención de riesgos.',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> evaluar el nivel de comprensión de los conceptos fundamentales asociados al manejo inteligente de productos químicos y la implementación de estrategias para la prevención de riesgos laborales y ambientales.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la función principal de la Hoja de Datos de Seguridad (HDS)?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Informar precios y rendimiento comercial del producto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Comunicar los peligros y medidas de prevención obligatorias.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sustituir el etiquetado del producto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Publicitar el producto químico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre el manejo inteligente de químicos y prevención de riesgos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            'El Sistema Globalmente Armonizado (SGA) clasifica los peligros en:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Físicos, comerciales y técnicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Salud, ambiente y transporte.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Físicos, para la salud y para el medio ambiente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Inflamables, tóxicos y eléctricos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre el manejo inteligente de químicos y prevención de riesgos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es el objetivo de un Procedimiento Operativo Estandarizado (POE)?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir costos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Estandarizar actividades para garantizar seguridad y repetitividad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reemplazar la capacitación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir el uso de EPP.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre el manejo inteligente de químicos y prevención de riesgos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto: 'En la jerarquía de controles, el uso de EPP corresponde a:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Primera medida de intervención.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Medida opcional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Última barrera de protección.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Sustitución del riesgo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre el manejo inteligente de químicos y prevención de riesgos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto: 'En caso de derrame químico, la primera acción debe ser:',
          imagen: require('@/assets/actividad/imagen05.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Recoger el producto inmediatamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aislar el área afectada.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Lavar con agua.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Retirar el EPP.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre el manejo inteligente de químicos y prevención de riesgos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            'Los extintores tipo ABC permiten controlar incendios originados por:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo líquidos inflamables.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Material radiactivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Material sólido, líquidos inflamables y equipos eléctricos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Únicamente madera.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre el manejo inteligente de químicos y prevención de riesgos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto: 'El análisis de riesgos en un plan de contingencia permite:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir costos operativos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Identificar posibles escenarios de emergencia.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar todos los peligros.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir la brigada de emergencia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre el manejo inteligente de químicos y prevención de riesgos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: 'Las brigadas de emergencia tienen como función:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reemplazar a las autoridades.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Coordinar la respuesta inicial ante incidentes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Autorizar compras.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Supervisar ventas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre el manejo inteligente de químicos y prevención de riesgos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto: 'En un producto químico, los excipientes se caracterizan por:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ser las sustancias responsables de la función.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Mejorar estabilidad, conservación y funcionamiento del principio activo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sustituir la HDS.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Identificar el pictograma del SGA.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre el manejo inteligente de químicos y prevención de riesgos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: 'Los aerosoles de humo se originan principalmente por:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Condensación de gotículas líquidas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Combustión o procesos de quema.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Neutralización ácido, base.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evaporación de sólidos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre el manejo inteligente de químicos y prevención de riesgos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            'En aerosoles, las partículas menores de 5 micras son especialmente peligrosas porque:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se quedan en la nariz y garganta sin causar daño.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Llegan hasta los alvéolos pulmonares.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Solo afectan la piel.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No ingresan al organismo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre el manejo inteligente de químicos y prevención de riesgos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto: 'La diferencia principal entre gas y vapor es que:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El vapor es siempre más tóxico que un gas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El vapor proviene del cambio de estado de un líquido o sólido y puede condensar.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El gas solo existe en laboratorios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El vapor solo aparece en combustión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre el manejo inteligente de químicos y prevención de riesgos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto: 'En seguridad química, peligro se refiere a:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La probabilidad de que ocurra un daño.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La capacidad intrínseca de una sustancia para causar daño.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El costo del producto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El uso comercial del producto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre el manejo inteligente de químicos y prevención de riesgos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            'En la estructura de una etiqueta SGA, las frases H corresponden a:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Consejos de prudencia (qué hacer).',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Indicaciones de peligro (qué daño puede causar).',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Número ONU (transporte)',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Color del rombo NFPA.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre el manejo inteligente de químicos y prevención de riesgos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            'En la HDS, el bloque de emergencias (secciones 4 a 6) incluye:',
          imagen: require('@/assets/actividad/imagen05.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Identificación del producto y composición.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Transporte, regulación y disposición final.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Primeros auxilios, medidas contra incendios y vertidos accidentales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Propiedades físicas, químicas y reactividad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre el manejo inteligente de químicos y prevención de riesgos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            'La información ecotoxicológica (ecotox) en la HDS se relaciona con:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Efectos en ecosistemas y organismos, especialmente acuáticos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Rendimiento del producto en procesos industriales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Precio por unidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Uso de extintores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre el manejo inteligente de químicos y prevención de riesgos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            'Una medida de control de ingeniería en la jerarquía de controles es:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Rotación de turnos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Señalización y capacitación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Uso de guantes y gafas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cabina extractora o ventilación localizada.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre el manejo inteligente de químicos y prevención de riesgos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            'Las Buenas Prácticas de Manufactura (BPM) se orientan principalmente a:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Garantizar condiciones sanitarias y control en producción para reducir riesgos del proceso.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Validar resultados de ensayo únicamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reemplazar el plan de contingencia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir la HDS.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre el manejo inteligente de químicos y prevención de riesgos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            'Cuando un EPP está contaminado severamente o fuera de vida útil, debe:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Guardarse para reutilizarlo después.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Desecharse como residuo común.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Retirarse de servicio y gestionarse como residuo peligroso con gestor autorizado.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Lavarse con agua y volver a usarse siempre.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre el manejo inteligente de químicos y prevención de riesgos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            'En el ciclo de vida de un producto químico, la etapa de eliminación tiene como finalidad principal:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Comercializar el producto en nuevos mercados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Garantizar la gestión segura de residuos bajo criterios ambientales y normativos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Modificar la composición química del producto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir la ficha técnica por la HDS.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre el manejo inteligente de químicos y prevención de riesgos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
