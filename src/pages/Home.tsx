import { Link } from 'react-router-dom';
import { ArrowRight, Truck, ShieldCheck, Clock } from 'lucide-react';
import { categories, products, testimonials } from '../data/mockData';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const featuredProducts = products.filter(p => p.isBestSeller).slice(0, 4);
  const discountedProducts = products.filter(p => p.isDiscounted).slice(0, 4);

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative bg-green-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Fresh Groceries <br />
              <span className="text-green-600">Delivered Daily</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Get the freshest produce, dairy, and everyday essentials delivered straight to your door. Freshness guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/shop" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-center transition-colors flex items-center justify-center">
                Shop Now <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link to="/offers" className="bg-white text-green-600 border border-green-600 hover:bg-green-50 font-bold py-3 px-8 rounded-full text-center transition-colors">
                View Offers
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden lg:block absolute top-0 right-0 w-1/2 h-full">
          <img 
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1000" 
            alt="Fresh groceries" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-transparent"></div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center p-6">
              <div className="bg-green-100 p-4 rounded-full text-green-600 mb-4">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Freshness Guarantee</h3>
              <p className="text-gray-600">We ensure the highest quality and freshness for all our products.</p>
            </div>
            <div className="flex flex-col items-center p-6">
              <div className="bg-green-100 p-4 rounded-full text-green-600 mb-4">
                <Truck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Get your groceries delivered to your door within hours.</p>
            </div>
            <div className="flex flex-col items-center p-6">
              <div className="bg-green-100 p-4 rounded-full text-green-600 mb-4">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Affordable Prices</h3>
              <p className="text-gray-600">Enjoy competitive prices and daily deals on your favorite items.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Shop by Category</h2>
              <p className="text-gray-600">Explore our wide range of fresh products</p>
            </div>
            <Link to="/shop" className="hidden sm:flex text-green-600 font-semibold hover:text-green-700 items-center">
              View All <ArrowRight className="ml-1" size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link key={category.id} to={`/shop?category=${category.id}`} className="group block text-center">
                <div className="relative rounded-2xl overflow-hidden mb-3 aspect-square">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Best Sellers</h2>
              <p className="text-gray-600">Our most popular products this week</p>
            </div>
            <Link to="/shop" className="hidden sm:flex text-green-600 font-semibold hover:text-green-700 items-center">
              View All <ArrowRight className="ml-1" size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Discounted Items */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Fresh Deals</h2>
              <p className="text-gray-600">Grab them before they're gone</p>
            </div>
            <Link to="/offers" className="hidden sm:flex text-green-600 font-semibold hover:text-green-700 items-center">
              View All Offers <ArrowRight className="ml-1" size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {discountedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 p-8 rounded-2xl">
                <div className="flex text-yellow-400 mb-4">
                  {'★'.repeat(testimonial.rating)}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="font-semibold text-gray-900">- {testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
