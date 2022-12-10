const CATEGORIES = [
  {
    type: 'appliances',
    label: 'Appliances',
    img: '/images/categories/appliances.png',
  },
  {
    type: 'gadgets',
    label: 'Phones and tablets',
    img: '/images/categories/gadgets.png',
  },
  {
    type: 'computers',
    label: 'Computers',
    img: '/images/categories/computers.png',
  },
  {
    type: 'services',
    label: 'Services',
    img: '/images/categories/services.png',
  },
  {
    type: 'kids',
    label: 'Children\'s products',
    img: '/images/categories/kids.png',
  },
  {
    type: 'job',
    label: 'Job',
    img: '/images/categories/job.png',
  },
  {
    type: 'clothes',
    label: 'Clothes and shoes',
    img: '/images/categories/clothes.png',
  },
  {
    type: 'tv',
    label: 'TV, audio, video',
    img: '/images/categories/tv.png',
  },
  {
    type: 'photo',
    label: 'Photo, video',
    img: '/images/categories/photo.png',
  },
  {
    type: 'furniture',
    label: 'Furniture, interior',
    img: '/images/categories/furniture.png',
  },
  {
    type: 'sport',
    label: 'Sporting goods',
    img: '/images/categories/sport.png',
  },
  {
    type: 'handmade',
    label: 'Handmade',
    img: '/images/categories/handmade.png',
  },
  {
    type: 'food',
    label: 'Food',
    img: '/images/categories/food.png',
  },
  {
    type: 'health',
    label: 'Beauty and health',
    img: '/images/categories/health.png',
  },
];

const TYPES = CATEGORIES.map(({ type }) => type);

export { CATEGORIES, TYPES };
