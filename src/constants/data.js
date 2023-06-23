import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Botella',
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Botella',
  },
  {
    title: 'La Vieillw Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Ron oscuro | Cerveza de Jengibre | Rodaja de Limón',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Ron | Jugo de cítricos | Azúcar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Borbón | Azúcar moreno | Amargos de Angostura',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Ginebra | Vermú dulce | Campari | Guarnición de naranja',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Babero Gourmand',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Estrella Naciente',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'Hospitalidad AA',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Chef destacado',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
