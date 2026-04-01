import { useState } from 'react';
import { User, Package, MapPin, Heart, LogOut } from 'lucide-react';

export default function Account() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">My Account</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <User size={40} className="text-green-600" />
              </div>
              <h2 className="font-bold text-gray-900">John Doe</h2>
              <p className="text-sm text-gray-500">john.doe@example.com</p>
            </div>
            <nav className="p-2">
              <button 
                onClick={() => setActiveTab('profile')}
                className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors ${activeTab === 'profile' ? 'bg-green-50 text-green-600 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                <User size={20} className="mr-3" /> Profile Info
              </button>
              <button 
                onClick={() => setActiveTab('orders')}
                className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors ${activeTab === 'orders' ? 'bg-green-50 text-green-600 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                <Package size={20} className="mr-3" /> Order History
              </button>
              <button 
                onClick={() => setActiveTab('addresses')}
                className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors ${activeTab === 'addresses' ? 'bg-green-50 text-green-600 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                <MapPin size={20} className="mr-3" /> Saved Addresses
              </button>
              <button 
                onClick={() => window.location.href = '/wishlist'}
                className="w-full flex items-center px-4 py-3 rounded-lg text-left text-gray-600 hover:bg-gray-50 transition-colors"
              >
                <Heart size={20} className="mr-3" /> Wishlist
              </button>
              <button 
                onClick={() => window.location.href = '/login'}
                className="w-full flex items-center px-4 py-3 rounded-lg text-left text-red-600 hover:bg-red-50 transition-colors mt-4"
              >
                <LogOut size={20} className="mr-3" /> Logout
              </button>
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
            {activeTab === 'profile' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Profile Information</h2>
                <form className="space-y-6 max-w-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                      <input type="text" defaultValue="John" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                      <input type="text" defaultValue="Doe" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input type="email" defaultValue="john.doe@example.com" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input type="tel" defaultValue="+1 (555) 123-4567" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none" />
                  </div>
                  <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
                    Save Changes
                  </button>
                </form>
              </div>
            )}

            {activeTab === 'orders' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Order History</h2>
                <div className="space-y-4">
                  {[1, 2, 3].map((order) => (
                    <div key={order} className="border border-gray-200 rounded-xl p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div>
                        <div className="font-bold text-gray-900 mb-1">Order #ORD-{10000 + order}</div>
                        <div className="text-sm text-gray-500">Placed on Oct {15 - order}, 2023</div>
                      </div>
                      <div className="text-left sm:text-right">
                        <div className="font-bold text-gray-900 mb-1">${(45.99 * order).toFixed(2)}</div>
                        <div className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded inline-block">Delivered</div>
                      </div>
                      <button className="text-green-600 font-medium hover:underline text-sm">View Details</button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'addresses' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Saved Addresses</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="border border-green-500 ring-1 ring-green-500 rounded-xl p-4 relative">
                    <div className="absolute top-4 right-4 text-xs font-bold bg-green-100 text-green-600 px-2 py-1 rounded">Default</div>
                    <h3 className="font-bold text-gray-900 mb-2">Home</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      John Doe<br />
                      123 Main Street, Apt 4B<br />
                      New York, NY 10001<br />
                      United States
                    </p>
                    <div className="flex gap-3 text-sm">
                      <button className="text-green-600 font-medium hover:underline">Edit</button>
                      <button className="text-red-600 font-medium hover:underline">Delete</button>
                    </div>
                  </div>
                  <div className="border border-gray-200 rounded-xl p-4 flex items-center justify-center text-gray-500 hover:bg-gray-50 cursor-pointer transition-colors min-h-[160px]">
                    <div className="text-center">
                      <div className="text-2xl mb-1">+</div>
                      <div className="font-medium">Add New Address</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
