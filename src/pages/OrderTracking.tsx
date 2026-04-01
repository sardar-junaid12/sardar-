import React, { useState } from 'react';
import { Search, Package, Truck, CheckCircle, Clock } from 'lucide-react';

export default function OrderTracking() {
  const [orderId, setOrderId] = useState('');
  const [isTracking, setIsTracking] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderId.trim()) {
      setIsTracking(true);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Track Your Order</h1>
        <p className="text-gray-600">Enter your order ID below to see real-time status updates.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 mb-8">
        <form onSubmit={handleTrack} className="flex gap-4">
          <div className="flex-1 relative">
            <input 
              type="text" 
              placeholder="e.g. ORD-12345" 
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          </div>
          <button 
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Track
          </button>
        </form>
      </div>

      {isTracking && (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
          <div className="flex justify-between items-center mb-8 pb-6 border-b border-gray-100">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Order #{orderId}</h2>
              <p className="text-gray-500 text-sm mt-1">Estimated Delivery: Today, 2:00 PM - 4:00 PM</p>
            </div>
            <div className="text-green-600 font-bold bg-green-50 px-3 py-1 rounded-full">
              Out for Delivery
            </div>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gray-200"></div>
            <div className="absolute left-6 top-6 h-1/2 w-0.5 bg-green-500"></div>

            <div className="space-y-8 relative">
              {/* Step 1 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center flex-shrink-0 relative z-10">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Order Confirmed</h3>
                  <p className="text-gray-500 text-sm">Your order has been received and confirmed.</p>
                  <p className="text-xs text-gray-400 mt-1">10:30 AM</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center flex-shrink-0 relative z-10">
                  <Package size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Processing</h3>
                  <p className="text-gray-500 text-sm">Your items are being picked and packed.</p>
                  <p className="text-xs text-gray-400 mt-1">11:15 AM</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 border-2 border-green-500 flex items-center justify-center flex-shrink-0 relative z-10">
                  <Truck size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Out for Delivery</h3>
                  <p className="text-gray-500 text-sm">Your driver is on the way.</p>
                  <p className="text-xs text-gray-400 mt-1">1:45 PM</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start gap-4 opacity-50">
                <div className="w-12 h-12 rounded-full bg-gray-100 text-gray-400 border-2 border-gray-200 flex items-center justify-center flex-shrink-0 relative z-10">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Delivered</h3>
                  <p className="text-gray-500 text-sm">Your order has been delivered.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
