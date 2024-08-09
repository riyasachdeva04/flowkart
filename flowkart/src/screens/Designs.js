import React from 'react';
import { Heart, Cloud, ShoppingBag } from 'lucide-react';

const ProductCard = ({ name, image, price }) => (
  <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
    <div className="relative">
      <img src={`/images/designs/${image}`} alt={name} className="w-full h-70 object-cover" />
      <div className="absolute top-2 right-2 bg-white rounded-full p-1.5 transition-transform duration-300 hover:scale-110">
        <Heart className="w-5 h-5 text-blue-500" />
      </div>
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold text-blue-700 mb-2">{name}</h3>
      <div className="flex justify-between items-center">
        <p className="text-md font-bold text-teal-600">{price}</p>
        <button className="bg-sky-500 text-white px-3 py-1 rounded-full text-sm flex items-center transition-colors duration-300 hover:bg-sky-600">
          <ShoppingBag className="w-4 h-4 mr-1" />
          Add to Cart
        </button>
      </div>
    </div>
  </div>
);

const CuteClothingCatalogue = ({ products }) => (
  <div className="container mx-auto px-4 py-8 bg-gradient-to-r from-blue-50 to-cyan-50">
    <h1 className="text-4xl font-bold text-center text-blue-800 mb-8 flex items-center justify-center">
      <Cloud className="inline-block mr-2 text-sky-400" />
      Custom Styled Clothing
      <Cloud className="inline-block ml-2 text-sky-400" />
    </h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  </div>
);

// Use the provided products data
const products = [
  { id: 1, name: 'Custom Styled T-Shirt', image: 'design1.png', price: '$3.00' },
  { id: 2, name: 'Custom Styled Skirt', image: 'design2.png', price: '$3.50' },
  { id: 3, name: 'Custom Styled Jacket', image: 'design3.png', price: '$4.00' },
  { id: 4, name: 'Custom Styled Jeans', image: 'design4.png', price: '$3.25' },
  { id: 5, name: 'Custom Styled Dress', image: 'design5.png', price: '$3.75' },
  { id: 6, name: 'Custom Styled Shorts', image: 'design6.png', price: '$3.10' },
  { id: 7, name: 'Custom Styled Hoodie', image: 'design7.png', price: '$4.00' },
  { id: 8, name: 'Custom Styled Blouse', image: 'design8.png', price: '$3.40' },
  { id: 9, name: 'Custom Styled Leggings', image: 'design9.png', price: '$3.20' }
];

export default function App() {
  return <CuteClothingCatalogue products={products} />;
}