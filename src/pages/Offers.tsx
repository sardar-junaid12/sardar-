import { products } from '../data/mockData';
import ProductCard from '../components/ProductCard';
import { Tag, Clock, Gift } from 'lucide-react';

export default function Offers() {
  const discountedProducts = products.filter(p => p.isDiscounted);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Special Offers & Deals</h1>
        <p className="text-lg text-gray-600">Save big on your favorite groceries with our daily and weekly deals.</p>
      </div>

      {/* Banners */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-6 text-white flex flex-col justify-center items-start relative overflow-hidden">
          <Tag size={48} className="absolute -right-4 -bottom-4 text-white/20" />
          <h3 className="text-2xl font-bold mb-2">Daily Deals</h3>
          <p className="mb-4 text-red-100">Up to 50% off on selected fresh produce.</p>
          <button className="bg-white text-red-600 px-4 py-2 rounded-lg font-bold text-sm hover:bg-red-50 transition-colors">Shop Now</button>
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white flex flex-col justify-center items-start relative overflow-hidden">
          <Clock size={48} className="absolute -right-4 -bottom-4 text-white/20" />
          <h3 className="text-2xl font-bold mb-2">Weekend Special</h3>
          <p className="mb-4 text-blue-100">Buy 1 Get 1 Free on all dairy products.</p>
          <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-bold text-sm hover:bg-blue-50 transition-colors">Learn More</button>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white flex flex-col justify-center items-start relative overflow-hidden">
          <Gift size={48} className="absolute -right-4 -bottom-4 text-white/20" />
          <h3 className="text-2xl font-bold mb-2">Bundle Offers</h3>
          <p className="mb-4 text-purple-100">Save 20% when you buy breakfast essentials together.</p>
          <button className="bg-white text-purple-600 px-4 py-2 rounded-lg font-bold text-sm hover:bg-purple-50 transition-colors">View Bundles</button>
        </div>
      </div>

      {/* Discounted Products */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <Tag className="mr-2 text-red-500" /> Currently on Sale
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {discountedProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
