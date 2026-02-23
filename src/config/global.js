export default {
  global: {
    Name: 'Manejo inteligente de químicos y prevención de riesgos',
    Description:
      'El componente Manejo inteligente de químicos y prevención de riesgos tiene como propósito fortalecer las competencias para la manipulación segura de productos químicos, mediante la identificación de riesgos según su naturaleza, interacciones y entorno laboral. Promueve la aplicación de procedimientos preventivos basados en normas técnicas, orientados a reducir accidentes, garantizar la seguridad laboral y optimizar procesos en contextos industriales y productivos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos químicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Estados de la materia',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Grupos funcionales, características, usos y riesgos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Ciclo de vida de los productos químicos',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Sistema Globalmente Armonizado de Clasificación y Etiquetado de Productos Químicos (SGA)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Etiquetado de productos químicos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Sistemas complementarios de identificación de riesgos químicos',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Documentos técnicos y de seguridad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Ficha técnica',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Hoja de Datos de Seguridad (HDS)',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Tarjeta de emergencia',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Diferenciación documental',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo:
          'Riesgos y controles (buenas prácticas de manufactura y buenas prácticas de laboratorio)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Toxicología y efectos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo:
              'Prácticas operativas de seguridad, prohibiciones y jerarquía de controles',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Elementos de Protección Personal (EPP) para riesgo residual',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Plan de contingencias y emergencias (Ley 1523 de 2012)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Plan de contingencia: análisis de riesgos y brigadas',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Respuesta ante derrames e incendios',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Marco normativo aplicable',
            hash: 't_6_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [],
  glosario: [
    {
      termino: 'Ácido',
      significado:
        'Sustancia química que puede liberar iones hidrógeno y presentar carácter corrosivo o reactivo según su concentración.',
    },
    {
      termino: 'Aerosol',
      significado:
        'Mezcla de partículas sólidas o líquidas suspendidas en un gas, que puede facilitar la inhalación de sustancias químicas.',
    },
    {
      termino: 'Brigada de emergencia',
      significado:
        'Grupo de personas capacitadas para coordinar y ejecutar acciones iniciales ante situaciones de riesgo.',
    },
    {
      termino: 'Ciclo de vida',
      significado:
        'Conjunto de etapas que atraviesa un producto químico desde su creación hasta su eliminación final.',
    },
    {
      termino: 'Contingencia',
      significado:
        'Situación imprevista que puede generar riesgo para la salud, las instalaciones o el ambiente.',
    },
    {
      termino: 'Elementos de Protección Personal (EPP)',
      significado:
        'Equipos diseñados para reducir la exposición a riesgos cuando las medidas técnicas y administrativas no eliminan el riesgo.',
    },
    {
      termino: 'Hoja de Datos de Seguridad (HDS)',
      significado:
        'Documento técnico que contiene información sobre composición, riesgos, manejo seguro y medidas de emergencia de un producto químico.',
    },
    {
      termino: 'Grupo funcional',
      significado:
        'Conjunto específico de átomos dentro de una molécula que determina sus propiedades químicas y su comportamiento.',
    },
    {
      termino: 'Matriz de riesgo',
      significado:
        'Herramienta que permite evaluar la probabilidad y severidad de un peligro para establecer controles adecuados.',
    },
    {
      termino: 'Peligro',
      significado:
        'Propiedad intrínseca de una sustancia con capacidad de causar daño a la salud, al ambiente o a las instalaciones.',
    },
    {
      termino: 'Riesgo',
      significado:
        'Probabilidad de que un peligro genere daño como resultado de la exposición.',
    },
    {
      termino: 'Sistema Globalmente Armonizado (SGA)',
      significado:
        'Sistema internacional que unifica criterios de clasificación y comunicación de peligros químicos mediante etiquetas estandarizadas.',
    },
    {
      termino: 'Toxicidad',
      significado:
        'Capacidad de una sustancia para producir efectos adversos en la salud tras la exposición.',
    },
    {
      termino: 'Vapores',
      significado:
        'Fase gaseosa originada por la evaporación de un líquido o sólido que puede retornar a su estado inicial según condiciones ambientales.',
    },
    {
      termino: 'Respuesta a emergencias',
      significado:
        'Conjunto de acciones organizadas para controlar un evento como derrames o incendios y reducir sus impactos.',
    },
    {
      termino: 'NTC (Norma Técnica Colombiana)',
      significado:
        'Documento técnico emitido por el ICONTEC que establece requisitos, especificaciones y lineamientos para garantizar calidad, seguridad y buenas prácticas en productos, procesos o servicios en Colombia.',
    },
  ],
  referencias: [
    {
      referencia:
        'ARL SURA. (2015). Elementos de protección personal para riesgo químico . Centro de Información de Sustancias Químicas, Emergencias y Medio Ambiente.',
      link: '',
    },
    {
      referencia:
        'ARP SURA. (2011). Gestión integral aplicada al riesgo químico . Seguros de Riesgos Profesionales Suramericana S.A.',
      link: '',
    },
    {
      referencia:
        'Correa Mahecha, F. (2016). Manejo de productos químicos (R. Bustillo Martínez, Adapt.). Servicio Nacional de Aprendizaje (SENA); Centro de Gestión Industrial y Regional Quindío.',
      link: '',
    },

    {
      referencia:
        'Correa Mahecha, F. (2016). Manejo de productos químicos (R. Bustillo Martínez, Adapt.). Servicio Nacional de Aprendizaje (SENA); Centro de Gestión Industrial y Regional Quindío.',
      link: '',
    },
    {
      referencia:
        'Departamento Nacional de Planeación. (2016). Guía para la elaboración de planes de emergencias (Código: SO-G13, Versión 0). República de Colombia.',
      link: '',
    },
    {
      referencia:
        'Grisales, C. (2013). Elaboración de la ficha técnica de los productos de la empresa G.M.P productos químicos S.A. Caldas, Colombia: Corporación Universitaria Lasallista.',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación (ICONTEC). (2010). Transporte de mercancías. Hojas de datos de seguridad para materiales. Preparación (NTC 4435).',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación (ICONTEC). (2013). Transporte de mercancías peligrosas, definiciones, clasificación, marcado, etiquetado y rotulado (NTC 1692).',
      link: '',
    },
    {
      referencia:
        'Oficina Internacional del Trabajo. (1993). Seguridad en la utilización de productos químicos en el trabajo. Ginebra, Suiza: OIT.',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación (ICONTEC). (2010). Transporte de mercancías peligrosas. Tarjetas de emergencia para transporte de materiales. Elaboración (NTC 4532). ',
      link: '',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje. (2016). Manejo de productos químicos: Prevención de riesgos. Centro de Gestión Industrial. ',
      link: '',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje. (2016). Manejo de productos químicos: Productos químicos, clasificación, etiquetado y riesgos. Centro de Gestión Industrial. ',
      link: '',
    },
    {
      referencia: 'Quimica.es. (s.f.). Producto químico. Quimica.es.',
      link: '',
    },
    {
      referencia:
        'Universidad de Zaragoza. (2014). Procedimiento de control y revisión de duchas de seguridad y fuentes lavaojos en la Universidad de Zaragoza. Unidad de Prevención de Riesgos Laborales. ',
      link: '',
    },
    {
      referencia:
        'Ministerio del Trabajo. (2016). Sistema de Gestión de la Seguridad y Salud en el Trabajo (SG-SST): Guía técnica de implementación para MIPYMES. República de Colombia. ',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Felipe Correa Mahecha',
          cargo: 'Responsable',
          centro: 'Centro de Gestión Industrial – Regional Distrito Capital',
        },
        {
          nombre: 'Nathaly Moreno Betancourt',
          cargo: 'instructor',
          centro: 'Centro de Gestión Industrial – Regional Distrito Capital',
        },
        {
          nombre: 'Cesar Pedraza',
          cargo: 'Metodólogo',
          centro: 'Centro de Gestión Industrial – Regional Distrito Capital',
        },
        {
          nombre: 'Fabio Hernández Rodríguez',
          cargo: 'Subdirector de Centro',
          centro: 'Centro de Gestión Industrial – Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Marcos Yamid Rubiano Avellaneda',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Leonardo Castellanos Rodriguez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Erika Daniela Manrique Rueda',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
