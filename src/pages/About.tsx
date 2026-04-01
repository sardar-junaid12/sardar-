export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About sardarjunaid</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Providing the freshest groceries and daily essentials to your doorstep with care and quality since 1995.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <img 
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800" 
            alt="Our Store" 
            className="rounded-2xl shadow-lg"
            referrerPolicy="no-referrer"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            sardarjunaid started as a small family-owned grocery store in the heart of the city. Our founder, sardarjunaid, believed that everyone deserves access to fresh, high-quality food at affordable prices.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Over the years, we've grown from a single storefront to a comprehensive online delivery service, but our core values remain the same. We still personally inspect our produce and work directly with local farmers to ensure you get the best.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Today, sardarjunaid is proud to serve thousands of families, bringing the farmer's market experience directly to your kitchen.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="bg-green-50 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
          <p className="text-gray-600">To make fresh, healthy, and high-quality food accessible to everyone through convenient delivery and fair pricing.</p>
        </div>
        <div className="bg-green-50 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
          <p className="text-gray-600">To be the most trusted and loved online grocery destination, known for our commitment to quality and community.</p>
        </div>
        <div className="bg-green-50 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Commitment</h3>
          <p className="text-gray-600">We guarantee 100% freshness. If you're not satisfied with the quality of any item, we'll replace it or refund your money, no questions asked.</p>
        </div>
      </div>
    </div>
  );
}
