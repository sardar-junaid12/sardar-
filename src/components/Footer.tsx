import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold text-green-500 mb-4">sardarjunaid</h3>
            <p className="text-gray-400 mb-4">
              Providing the freshest groceries and daily essentials to your doorstep with care and quality since 1995.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/shop" className="text-gray-400 hover:text-green-400">Shop All</Link></li>
              <li><Link to="/offers" className="text-gray-400 hover:text-green-400">Special Offers</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-green-400">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-green-400">Contact Us</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-green-400">FAQ</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><Link to="/account" className="text-gray-400 hover:text-green-400">My Account</Link></li>
              <li><Link to="/tracking" className="text-gray-400 hover:text-green-400">Track Order</Link></li>
              <li><Link to="/wishlist" className="text-gray-400 hover:text-green-400">Wishlist</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400">Returns Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 Market Street, Foodville, FV 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-green-500 mr-2 flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-green-500 mr-2 flex-shrink-0" />
                <span className="text-gray-400">support@sardarjunaid.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} sardarjunaid Grocery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
