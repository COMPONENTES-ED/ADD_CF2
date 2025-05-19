export default {
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
        titulo: 'Definición de variable y clasificación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto de variable en estadística',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Variables cualitativas (categóricas)',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Variables cuantitativas (numéricas)',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Escalas de medición',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Variables dependientes e independientes',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo:
              'Relación entre los tipos de variables y los métodos estadísticos',
            hash: 't_1_6',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Niveles de medición',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Nivel de medición nominal',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Nivel de medición ordinal',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Nivel de medición de intervalo',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Nivel de medición de razón',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo:
              'Importancia de los niveles de medición en el análisis estadístico',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Técnicas de agrupación de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Definición de datos agrupados y no agrupados',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Criterios para agrupar datos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Métodos de agrupación de datos cuantitativos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Métodos de agrupación de datos cualitativos',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Organización de la muestra de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Criterios para organizar datos según el tipo de variable',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Técnicas de agrupación de datos para análisis estadístico',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Importancia de una organización coherente de los datos',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Métodos para evitar errores en la organización de datos',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Organización de datos en estudios con múltiples variables',
            hash: 't_4_5',
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
        download: 'downloads/228117_CF02_DU_V2.pdf',
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
  global: {
    Name: 'Organización de datos y variables estadísticas',
    Description:
      'Este componente orientado al nivel técnico ofrece un enfoque sobre los principios y metodologías para la organización de datos estadísticos, abarcando la clasificación y el agrupamiento de variables cualitativas y cuantitativas. Incluye técnicas específicas para evitar errores y optimizar la precisión de los datos. Proporciona herramientas que mejoran la claridad y confiabilidad de los resultados en análisis estadísticos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [],
  },
}
