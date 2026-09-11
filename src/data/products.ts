export interface Product {
  id: string;
  name: string;
  flavor: string;
  slug: string;
  weight: string;
  category: string;
  shortDescription: string;
  description: string;
  image: string;
  color: string;
  ingredients: string;
  nutrition: string;
  storage: string;
  shelfLife: string;
  mrp: string;
  marketplaces: {
    amazon: string;
    flipkart: string;
  };
}

export const config = {
  email: 'CONTACT_EMAIL_HERE',
  phone: 'PHONE_NUMBER_HERE',
  address: 'COMPANY_ADDRESS_HERE',
  social: '#',
};

export const products: Product[] = [
  {
    id: 'tangy-tomato',
    name: 'TORNATO Banana Chips',
    flavor: 'Tangy Tomato',
    slug: 'banana-chips-tangy-tomato',
    weight: '200g',
    category: 'Banana Chips',
    shortDescription: 'Crispy banana chips with a bold tangy tomato flavour.',
    description: 'A boldly crunchy banana-chip experience made for flavour-packed snack moments.',
    image: '/assets/products/banana-chips-tangy-tomato-200g.png',
    color: '#E11D1C',
    ingredients: 'Raw Bananas, Edible Vegetable Oil, Tomato Seasoning, Salt [INGREDIENTS_PLACEHOLDER]',
    nutrition: 'NUTRITIONAL_INFORMATION_HERE',
    storage: 'Store in a cool and dry place.',
    shelfLife: '6 Months',
    mrp: '₹ MRP_PLACEHOLDER',
    marketplaces: {
      amazon: 'AMAZON_URL_HERE',
      flipkart: 'FLIPKART_URL_HERE',
    },
  },
  {
    id: 'classic-salted',
    name: 'TORNATO Banana Chips',
    flavor: 'Classic Salted',
    slug: 'banana-chips-classic-salted',
    weight: '200g',
    category: 'Banana Chips',
    shortDescription: 'Light, crispy banana chips with authentic rock salt.',
    description: 'A simple, satisfying crunch for everyday food moments.',
    image: '/assets/products/banana-chips-classic-salted-200g.png',
    color: '#1E824C',
    ingredients: 'Raw Bananas, Edible Vegetable Oil, Rock Salt [INGREDIENTS_PLACEHOLDER]',
    nutrition: 'NUTRITIONAL_INFORMATION_HERE',
    storage: 'Store in a cool and dry place.',
    shelfLife: '6 Months',
    mrp: '₹ MRP_PLACEHOLDER',
    marketplaces: {
      amazon: 'AMAZON_URL_HERE',
      flipkart: 'FLIPKART_URL_HERE',
    },
  },
  {
    id: 'coming-soon',
    name: 'TORNATO Banana Chips',
    flavor: 'Coming Soon',
    slug: 'banana-chips-coming-soon',
    weight: '200g',
    category: 'Banana Chips',
    shortDescription: 'Exciting new flavour coming soon to TORNATO.',
    description: 'Stay tuned for our next exciting snack edition.',
    image: '/assets/products/banana-chips-coming soon-200g.png',
    color: '#D35400',
    ingredients: 'Raw Bananas, Edible Vegetable Oil, Spices [INGREDIENTS_PLACEHOLDER]',
    nutrition: 'NUTRITIONAL_INFORMATION_HERE',
    storage: 'Store in a cool and dry place.',
    shelfLife: '6 Months',
    mrp: '₹ MRP_PLACEHOLDER',
    marketplaces: {
      amazon: 'AMAZON_URL_HERE',
      flipkart: 'FLIPKART_URL_HERE',
    },
  },
];