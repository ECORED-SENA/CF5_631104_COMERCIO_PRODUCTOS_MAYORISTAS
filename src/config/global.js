export default {
  global: {
    componenteFormativo: 'Manejo de información y posventa',
    descripcionCurso:
      'Las empresas están dentro de un mercado cambiante que evoluciona a pasos gigantescos y no basta con entenderlo, es el manejo de toda la información que permitirá estar a la vanguardia y su servicio posventa las mantendrá a través del tiempo, estas son y serán las razones de éxito de las organizaciones.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/flot1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/flot2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/flot3.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Fuentes de información',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Procesamiento de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Características, tipos y técnicas',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Instrumentos de recolección de datos',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Parámetros de calidad',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Normativa y confidencialidad de la información',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Base de datos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Manejo de datos personales',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Mediciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Tipos de mediciones',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Herramientas',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Solicitudes',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Posventa',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Etapas',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Técnicas',
            hash: 't_6_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.3',
            titulo: 'Proceso y procedimiento',
            hash: 't_6_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.4',
            titulo: 'Garantía y normatividad',
            hash: 't_6_4',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Técnicas y resolución de conflictos comerciales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '7.1',
            titulo: 'Niveles de cumplimiento',
            hash: 't_7_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.2',
            titulo: 'Mediciones y tratamiento',
            hash: 't_7_2',
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
  complementario: [
    {
      tema: '3.2 Manejo de datos personales',
      referencia:
        'Superintendencia de Industria y Comercio. (2021). Cuida tu identidad digital y protege tus datos personales.',
      tipo: 'Artículo',
      descarga: '/downloads/cuida_identidad_personal.pdf',
    },
    {
      tema: '3.2 Manejo de datos personales',
      referencia:
        'Escuela de Privacidad. (2020). Legislación en protección de datos personales en Colombia.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=bvAH9ppBbbE',
    },
    {
      tema: '6. Posventa ',
      referencia: 'Canal grupojadisa. (2012). Posventa Mercedes-Ben',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=yqyttSMc7ac',
    },
  ],
  glosario: [
    {
      termino: 'Análisis de datos',
      significado:
        'proceso de recopilación, modelización y análisis de datos para extraer información que sirva de apoyo a la toma de decisiones.',
    },
    {
      termino: 'Base de datos',
      significado:
        'almacén de datos diseñado de forma organizada, que facilita la búsqueda de la información que se necesita.',
    },
    {
      termino: '<em>Buyer</em> persona',
      significado:
        'perfil de los clientes ideales que buscan y a quien van dirigidas las empresas.',
    },
    {
      termino: 'Conflicto',
      significado:
        'situación en la que dos o más personas con intereses diferentes entran en confrontación u oposición.',
    },
    {
      termino: 'CRM',
      significado:
        '(en inglés <em>Customer Relationship Management</em>, o Gestión de las relaciones con clientes) es una solución de gestión de las relaciones con clientes, orientada normalmente a gestionar tres áreas básicas: la gestión comercial, el <em>marketing</em> y el servicio postventa o de atención al cliente.',
    },
    {
      termino: 'Experiencia al cliente',
      significado:
        'relación de una empresa con sus clientes en todos los aspectos del recorrido de compra; en resumen, es la suma total de todas las interacciones que un cliente tiene con la marca.',
    },
    {
      termino: 'Garantía',
      significado:
        'mecanismo para asegurar el cumplimiento de obligaciones y proteger los derechos de alguna de las partes en relaciones comerciales o jurídicas.',
    },
    {
      termino: 'Fidelización',
      significado:
        'concepto de <em>marketing</em> que designa la lealtad de un cliente a una marca, producto o servicio concretos.',
    },
    {
      termino: 'Medición',
      significado:
        'proceso básico para comparar unidad de medida entre sí, a partir de una serie de escalas que sirven como referencia y arroja un resultado final.',
    },
    {
      termino: 'Posventa',
      significado:
        'parte del servicio al cliente reuniendo todas las estrategias pensadas para mejorar la experiencia después de la compra y manteniendo una relación duradera con los clientes',
    },
    {
      termino: 'Solicitud',
      significado:
        'es cualquier requerimiento que llega a la empresa de manera formal.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ministerio de Tecnologías de la Información y las Comunicaciones. (2013). Decreto 1377 de 2013. Por el cual se reglamenta parcialmente la Ley 1581 de 2012',
      link:
        'https://www.mintic.gov.co/arquitecturati/630/articles-9011_documento.pdf',
    },
    {
      referencia:
        'Portafolio. (s. f.). Servicio posventa, tan importante como las características de bienes o servicios ofrecidos al cliente.',
      link:
        'https://www.portafolio.co/economia/finanzas/servicio-posventa-importante-caracteristicas-bienes-servicios-ofrecidos-cliente-243638',
    },
    {
      referencia:
        'Samsing, C. (2021). Principales indicadores de servicio posventa.',
      link:
        'https://blog.nubox.com/empresas/indicadores-de-servicio-post-venta',
    },
    {
      referencia:
        'UIAF. (2008). Ley Estatutaria 1266 de 2008. Por la cual se dictan las disposiciones generales de Habeas Data.',
      link:
        'https://www.uiaf.gov.co/sistema_nacional_ala_cft/normatividad_sistema/leyes/ley_estatutaria_1266_2008',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nelly Parra Guarín',
        cargo: 'Experta temática',
        centro:
          'Centro de la Industria, la empresa y los Servicios - Regional Huila',
      },
      {
        nombre: 'Diana Carolina Jaramillo Rojas',
        cargo: 'Experta temática',
        centro: 'Centro de Comercio y Servicios - Regional Cauca',
      },
      {
        nombre: 'Esperanza Cardona Grisales',
        cargo: 'Experta temática',
        centro: 'Centro de Comercio y Servicios - Regional Cauca',
      },
      {
        nombre: 'Carlos Andrés Otero Cano',
        cargo: 'Experto temático',
        centro: 'Centro de Comercio y Servicios - Regional Cauca',
      },
      {
        nombre: 'Ana Vela Rodríguez Velásquez',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Asesor metodológico',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Natalia Maldonado Delgado',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Miguel Guerrero Gutiérrez',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Eduardo Garavito Parada',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Andrés Díaz Pinto',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Veimar Celis Melendez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
