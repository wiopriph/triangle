const CATEGORIES = [
  {
    type: 'realty',
    img: 'https://api.youla.io/files/icons/icon-cat-realty-rotator.png',
    label: 'Недвижимость',
  },
  {
    type: 'auto',
    img: 'https://api.youla.io/files/icons/icon-cat-automobiles-rotator.png',
    label: 'Легковые автомобили',
  },
  {
    type: 'services',
    img: 'https://api.youla.io/files/icons/icon-cat-services-rotator.png',
    label: 'Услуги исполнителей',
  },
  {
    type: 'application',
    img: 'https://api.youla.io/files/icons/icon-application-280x224.png',
    label: 'Заявки на услуги',
  },
  {
    type: 'womenswear',
    img: 'https://api.youla.io/files/icons/icon-cat-wclothes-rotator.png',
    label: 'Женский гардероб',
  },
  {
    type: 'gadgets',
    img: 'https://api.youla.io/files/icons/icon-cat-gadgets-rotator.png',
    label: 'Телефоны и планшеты',
  },
  {
    type: 'spares',
    img: 'https://api.youla.io/files/icons/icon-cat-automoto-rotator.png',
    label: 'Запчасти и автотовары',
  },
  {
    type: 'kidswear',
    img: 'https://api.youla.io/files/icons/icon-cat-kidswear-rotator.png',
    label: 'Детский гардероб',
  },
  {
    type: 'vacancies',
    img: 'https://api.youla.io/files/icons/icon-cat-vacancies-rotator.png',
    label: 'Вакансии',
  },
  {
    type: 'motorcycles',
    img: 'https://api.youla.io/files/icons/icon-cat-motorcycles-rotator.png',
    label: 'Спецтехника и мотоциклы',
  },
  {
    type: 'menswear',
    img: 'https://api.youla.io/files/icons/icon-cat-mclothes-rotator.png',
    label: 'Мужской гардероб',
  },
  {
    type: 'kids',
    img: 'https://api.youla.io/files/icons/icon-cat-kids-rotator.png',
    label: 'Детские товары',
  },
  {
    type: 'handmade',
    img: 'https://api.youla.io/files/icons/icon-cat-handmade-rotator.png',
    label: 'Хэндмейд',
  },
  {
    type: 'photo',
    img: 'https://api.youla.io/files/icons/icon-cat-photo-rotator.png',
    label: 'Фото- и видеокамеры',
  },
];

const TYPES = CATEGORIES.map(({ type }) => type);

export { CATEGORIES, TYPES };
