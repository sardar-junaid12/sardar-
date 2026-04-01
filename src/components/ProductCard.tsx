import { Link } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';
import { useStore } from '../store/useStore';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    weight: string;
    isDiscounted?: boolean;
    rating: number;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const addToCart = useStore(state => state.addToCart);
  const toggleWishlist = useStore(state => state.toggleWishlist);
  const wishlist = useStore(state => state.wishlist);
  
  const isWishlisted = wishlist.includes(product.id);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group relative">
      {product.isDiscounted && product.originalPrice && (
        <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md z-10">
          Sale
        </div>
      )}
      <button 
        onClick={(e) => {
          e.preventDefault();
          toggleWishlist(product.id);
        }}
        className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-400 hover:text-red-500 hover:bg-white z-10 transition-colors"
      >
        <Heart size={18} className={isWishlisted ? "fill-red-500 text-red-500" : ""} />
      </button>

      <Link to={`/product/${product.id}`} className="block relative aspect-square overflow-hidden bg-gray-50">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          referrerPolicy="no-referrer"
        />
      </Link>

      <div className="p-4">
        <div className="text-xs text-gray-500 mb-1">{product.weight}</div>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-gray-900 mb-1 hover:text-green-600 line-clamp-1">{product.name}</h3>
        </Link>
        <div className="flex items-center mb-3">
          <div className="flex items-center text-yellow-400 text-sm">
            {'★'.repeat(Math.floor(product.rating))}
            <span className="text-gray-300">{'★'.repeat(5 - Math.floor(product.rating))}</span>
          </div>
          <span className="text-xs text-gray-500 ml-1">{product.rating}</span>
        </div>
        
        <div className="flex items-center justify-between mt-auto">
          <div>
            <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through ml-2">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>
          <button 
            onClick={(e) => {
              e.preventDefault();
              addToCart(product.id);
            }}
            className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-full transition-colors"
            aria-label="Add to cart"
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
