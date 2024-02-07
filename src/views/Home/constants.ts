import _ from 'lodash';

export const BUTTONS_DATA = [
  {
    id: 'all',
    title: 'All',
  },
  {
    id: 'favorites',
    title: 'Favorites',
  },
  {
    id: 'harm',
    title: 'Harm Reduction',
  },
  {
    id: 'integration',
    title: 'Integration',
  },
  {
    id: 'mindfulness',
    title: 'Mindfulness',
  },
  {
    id: 'music',
    title: 'Music',
  },
];

const generateCardData = (
  idPrefix: string,
  image: any,
  title: string,
  titleDescription: string,
  name: string,
) => {
  return _.range(1, 8).map((index: any) => ({
    id: `${idPrefix}${index}`,
    image,
    title,
    titleDescription,
    name,
  }));
};

export const CARDS_VERTICAL_DATA = generateCardData(
  '1',
  require('../../assets/images/svq.webp'),
  'Mindfulness',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  'Janelle Lassalle',
);

export const CARDS_HORIZONTAL_DATA = generateCardData(
  '2',
  require('../../assets/images/el-yoga-que-beneficios-nos-puede-aportar.webp'),
  'Mindfulness',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  'Janelle Lassalle',
);

export const DETAIL_DATA = [
  {
    id: '1',
    image: require('../../assets/images/svq.webp'),
    title: 'Mindfulness',
    titleDescription: 'Music for Expanded Consciouness',
    name: 'Janelle Lassalle',
    description:
      'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',
  },
];
