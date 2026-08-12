export default {
  global: {
    Name: 'Tendencias del comercio electrónico',
    Description:
      'Este componente desarrolla los fundamentos del comercio electrónico, la comunicación online y el lenguaje web, proporcionando los conocimientos necesarios para comprender los elementos que intervienen en la exhibición de productos dentro de entornos digitales y su relación con los procesos de comercialización electrónica.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.svg',
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
        titulo: 'Comercio electrónico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tendencias',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Tipos',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Herramientas',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Dispositivos',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Aplicaciones',
            hash: 't_1_6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Comunicación <em>online</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Estrategias',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: '<em>Marketplace</em>',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Lenguaje WEB',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Buscadores',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: '<em>Hosting</em>',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Dominio',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Plataformas',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Anatomía',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'SEO',
            hash: 't_3_6',
          },
          {
            numero: '3.7',
            titulo: 'SEM',
            hash: 't_3_7',
          },
          {
            numero: '3.8',
            titulo: '<em>Email marketing</em>',
            hash: 't_3_8',
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
  glosario: [
    {
      termino: 'Aplicaciones',
      significado:
        'Soluciones tecnológicas utilizadas para apoyar actividades dentro de entornos de comercio electrónico.',
    },
    {
      termino: 'Buscadores',
      significado:
        'Sistemas que permiten localizar información disponible en internet mediante consultas específicas.',
    },
    {
      termino: 'Comercio electrónico',
      significado:
        'Intercambio comercial de productos, servicios o información mediante medios digitales.',
    },
    {
      termino: 'Comunicación <em>online</em>',
      significado:
        'Proceso de intercambio de información entre organizaciones y usuarios mediante medios digitales conectados a internet.',
    },
    {
      termino: 'Contenido digital',
      significado:
        'Información presentada en formato electrónico, como textos, imágenes, videos o recursos multimedia, utilizada para comunicar, informar o promocionar productos y servicios.',
    },
    {
      termino: 'Dominio',
      significado:
        'Nombre único que identifica un sitio web dentro de internet.',
    },
    {
      termino: '<em>Email marketing</em>',
      significado:
        'Estrategia de comunicación digital basada en el uso del correo electrónico.',
    },
    {
      termino: '<em>Hosting</em>',
      significado:
        'Servicio que almacena y mantiene disponibles los contenidos de un sitio web.',
    },
    {
      termino: 'Lenguaje web',
      significado:
        'Conjunto de elementos técnicos y estructurales que permiten el funcionamiento, organización y acceso a los contenidos publicados en internet.',
    },
    {
      termino: '<em>Marketplace</em>',
      significado:
        'Plataforma digital que reúne vendedores y compradores en un mismo entorno virtual.',
    },
    {
      termino: 'Mercadeo digital',
      significado:
        'Conjunto de estrategias y acciones desarrolladas mediante canales digitales para promover productos, servicios o marcas y fortalecer su presencia en internet.',
    },
    {
      termino: 'Motores de búsqueda',
      significado:
        'Plataformas tecnológicas que recopilan, organizan y presentan información disponible en internet a partir de consultas realizadas por los usuarios.',
    },
    {
      termino: 'Plataformas',
      significado:
        'Entornos tecnológicos utilizados para gestionar y publicar contenidos digitales.',
    },
    {
      termino: 'Presencia digital',
      significado:
        'Nivel de participación y visibilidad que una organización, marca o producto mantiene en los diferentes canales y entornos digitales.',
    },
    {
      termino: 'SEO (<em>Search Engine Optimization</em>)',
      significado:
        'Estrategia orientada a mejorar el posicionamiento orgánico de un sitio web o de sus contenidos en los resultados de los motores de búsqueda.',
    },
    {
      termino: 'SEM (<em>Search Engine Marketing</em>)',
      significado:
        'Estrategia de <em>marketing</em> basada en campañas publicitarias pagadas en motores de búsqueda para incrementar la visibilidad de productos, servicios o sitios web.',
    },
    {
      termino: 'Sitio web',
      significado:
        'Conjunto de páginas y recursos digitales organizados bajo un mismo dominio, accesibles a través de internet.',
    },
    {
      termino: 'Tienda virtual',
      significado:
        'Plataforma digital diseñada para exhibir productos o servicios y facilitar procesos de consulta y comercialización mediante internet.',
    },
    {
      termino: 'URL',
      significado:
        'Dirección única que permite localizar y acceder a un recurso o página específica dentro de un sitio web.',
    },
    {
      termino: 'Visibilidad digital',
      significado:
        'Grado en que los contenidos, productos o servicios de una organización pueden ser encontrados por los usuarios en los diferentes canales digitales.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cámara Colombiana de Comercio Electrónico. (s.f.). ¿Qué es el comercio electrónico? Cámara Colombiana de Comercio Electrónico.',
      link: 'https://ccce.org.co/noticias/que-es-el-comercio-electronico/',
    },
    {
      referencia:
        'Gómez, R. (2024). Aplicación de estrategias de marketing digital para conocer las mejores políticas de ventas adecuadas al sector de mercado. Revista Venezolana de Gerencia, 29(2).',
      link: 'https://ve.scielo.org/scielo.php?pid=S1316-48212024000200052&script=sci_arttext',
    },
    {
      referencia:
        'Lozano Torres, B. V., Toro Espinoza, M. F., & Calderón Argoti, D. J. (2021). El marketing digital: herramientas y tendencias actuales. Dominio de las Ciencias, 7(6), 907-921.',
      link: 'https://dialnet.unirioja.es/descarga/articulo/8383788.pdf',
    },
    {
      referencia:
        'Membiela-Pollán, M. (2019). Herramientas de marketing digital y competencia empresarial. Universidad de Vigo.',
      link: 'https://www.econstor.eu/bitstream/10419/282274/1/099.pdf',
    },
    {
      referencia:
        'Rodríguez, J. C. (2021). Libro blanco del comercio electrónico. Ministerio TIC de Colombia.',
      link: 'https://colombiatic.mintic.gov.co/679/articles-197363_recurso_1.pdf',
    },
    {
      referencia:
        'Universidad Oberta de Catalunya. (s.f.). Comercio electrónico: guía temática de recursos especializados.',
      link: 'https://biblioteca.uoc.edu/es/biblioguias/biblioguia/Comercio-electronico/',
    },
    {
      referencia:
        'Vela Reyna, J. B. (2024). E-commerce: experiencia, seguridad, confianza y satisfacción del cliente. Investigación Administrativa, 53(133).',
      link: 'https://www.scielo.org.mx/scielo.php?pid=S2448-76782024000100005&script=sci_arttext',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre ',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
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
