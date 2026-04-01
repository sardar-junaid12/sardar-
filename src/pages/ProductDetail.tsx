import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Heart, ArrowLeft, Truck, ShieldCheck, Star } from 'lucide-react';
import { products } from '../data/mockData';
import { useStore } from '../store/useStore';
import ProductCard from '../components/ProductCard';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);
  const [quantity, setQuantity] = useState(1);
  
  const addToCart = useStore(state => state.addToCart);
  const toggleWishlist = useStore(state => state.toggleWishlist);
  const wishlist = useStore(state => state.wishlist);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <Link to="/shop" className="text-green-600 hover:underline">Return to Shop</Link>
      </div>
    );
  }

  const isWishlisted = wishlist.includes(product.id);
  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product.id, quantity);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button 
        onClick={() => navigate(-1)} 
        className="flex items-center text-gray-500 hover:text-green-600 mb-6 transition-colors"
      >
        <ArrowLeft size={20} className="mr-2" /> Back
      </button>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          {/* Product Image */}
          <div className="relative aspect-square bg-gray-50 rounded-xl overflow-hidden">
            {product.isDiscounted && product.originalPrice && (
              <div className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-md z-10">
                Sale
              </div>
            )}
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-2 text-sm text-green-600 font-semibold uppercase tracking-wider">
              {product.category.replace('-', ' ')}
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex items-center text-yellow-400 text-sm">
                {'★'.repeat(Math.floor(product.rating))}
                <span className="text-gray-300">{'★'.repeat(5 - Math.floor(product.rating))}</span>
              </div>
              <span className="text-sm text-gray-500 ml-2">({product.reviews} reviews)</span>
            </div>

            <div className="text-3xl font-bold text-gray-900 mb-6">
              ${product.price.toFixed(2)}
              {product.originalPrice && (
                <span className="text-xl text-gray-400 line-through ml-3 font-normal">${product.originalPrice.toFixed(2)}</span>
              )}
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              {product.description}
            </p>

            <div className="mb-6">
              <span className="block text-sm font-medium text-gray-700 mb-2">Weight / Quantity</span>
              <div className="inline-block bg-gray-100 px-4 py-2 rounded-lg text-gray-800 font-medium">
                {product.weight}
              </div>
            </div>

            <div className="mb-8">
              <span className="block text-sm font-medium text-gray-700 mb-2">Stock Status</span>
              <div className="flex items-center text-green-600 font-medium">
                <ShieldCheck size={20} className="mr-2" /> In Stock ({product.stock} available)
              </div>
            </div>

            <div className="flex items-center gap-4 mt-auto">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-l-lg transition-colors"
                >
                  -
                </button>
                <span className="px-4 py-3 font-medium text-gray-900 w-12 text-center">{quantity}</span>
                <button 
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  className="px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-r-lg transition-colors"
                >
                  +
                </button>
              </div>
              
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
              >
                <ShoppingCart size={20} className="mr-2" /> Add to Cart
              </button>
              
              <button 
                onClick={() => toggleWishlist(product.id)}
                className={`p-3 border rounded-lg transition-colors ${
                  isWishlisted ? 'border-red-500 text-red-500 bg-red-50' : 'border-gray-300 text-gray-400 hover:text-red-500 hover:border-red-500'
                }`}
              >
                <Heart size={24} className={isWishlisted ? "fill-red-500" : ""} />
              </button>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4">
              <div className="flex items-center text-sm text-gray-600">
                <Truck size={18} className="mr-2 text-green-600" /> Same-day delivery available
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <ShieldCheck size={18} className="mr-2 text-green-600" /> 100% Freshness Guarantee
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
