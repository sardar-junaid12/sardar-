import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { products } from '../data/mockData';
import { CreditCard, Wallet, Truck, CheckCircle } from 'lucide-react';

export default function Checkout() {
  const { cart, cartTotal, clearCart } = useStore();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const subtotal = cartTotal();
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + shipping;

  if (cart.length === 0 && !orderComplete) {
    navigate('/shop');
    return null;
  }

  const handlePlaceOrder = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setOrderComplete(true);
      clearCart();
    }, 2000);
  };

  if (orderComplete) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 text-green-600 rounded-full mb-6">
          <CheckCircle size={48} />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Order Placed Successfully!</h1>
        <p className="text-lg text-gray-600 mb-8">
          Thank you for shopping with sardarjunaid. Your order #ORD-{Math.floor(Math.random() * 100000)} is being processed.
        </p>
        <div className="flex justify-center gap-4">
          <button onClick={() => navigate('/tracking')} className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-colors">
            Track Order
          </button>
          <button onClick={() => navigate('/shop')} className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-3 px-8 rounded-full transition-colors">
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 space-y-6">
          {/* Step 1: Shipping Details */}
          <div className={`bg-white rounded-2xl shadow-sm border ${step === 1 ? 'border-green-500 ring-1 ring-green-500' : 'border-gray-200'} p-6`}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">1. Shipping Details</h2>
              {step > 1 && <button onClick={() => setStep(1)} className="text-green-600 text-sm font-medium">Edit</button>}
            </div>
            
            {step === 1 && (
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input required type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input required type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  <input required type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                    <input required type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">ZIP Code</label>
                    <input required type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none" />
                  </div>
                </div>
                <div className="pt-4">
                  <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700">Continue</button>
                </div>
              </form>
            )}
          </div>

          {/* Step 2: Payment Method */}
          <div className={`bg-white rounded-2xl shadow-sm border ${step === 2 ? 'border-green-500 ring-1 ring-green-500' : 'border-gray-200'} p-6 ${step < 2 ? 'opacity-50 pointer-events-none' : ''}`}>
            <h2 className="text-xl font-bold text-gray-900 mb-4">2. Payment Method</h2>
            
            {step === 2 && (
              <div className="space-y-4">
                <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input type="radio" name="payment" className="text-green-600 focus:ring-green-500 w-5 h-5" defaultChecked />
                  <CreditCard className="ml-4 mr-3 text-gray-400" />
                  <span className="font-medium text-gray-900">Credit / Debit Card</span>
                </label>
                
                <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input type="radio" name="payment" className="text-green-600 focus:ring-green-500 w-5 h-5" />
                  <Wallet className="ml-4 mr-3 text-gray-400" />
                  <span className="font-medium text-gray-900">Mobile Wallet (Apple Pay / Google Pay)</span>
                </label>

                <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input type="radio" name="payment" className="text-green-600 focus:ring-green-500 w-5 h-5" />
                  <Truck className="ml-4 mr-3 text-gray-400" />
                  <span className="font-medium text-gray-900">Cash on Delivery</span>
                </label>

                <div className="pt-4">
                  <button onClick={() => setStep(3)} className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700">Review Order</button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Order Summary Sidebar */}
        <div className="w-full lg:w-96 flex-shrink-0">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-24">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6 max-h-60 overflow-y-auto pr-2">
              {cart.map(item => {
                const product = products.find(p => p.id === item.productId);
                if (!product) return null;
                return (
                  <div key={item.productId} className="flex justify-between text-sm">
                    <span className="text-gray-600">{item.quantity}x {product.name}</span>
                    <span className="font-medium text-gray-900">${(product.price * item.quantity).toFixed(2)}</span>
                  </div>
                );
              })}
            </div>

            <div className="border-t border-gray-100 pt-4 space-y-3 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span className="font-medium text-gray-900">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span className="font-medium text-gray-900">
                  {shipping === 0 ? <span className="text-green-600">Free</span> : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                <span className="text-lg font-bold text-gray-900">Total</span>
                <span className="text-2xl font-bold text-green-600">${total.toFixed(2)}</span>
              </div>
            </div>

            <button 
              onClick={handlePlaceOrder}
              disabled={step !== 3 || isProcessing}
              className={`w-full font-bold py-4 px-4 rounded-lg transition-colors flex items-center justify-center ${
                step === 3 && !isProcessing 
                  ? 'bg-green-600 hover:bg-green-700 text-white' 
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              {isProcessing ? 'Processing...' : 'Place Order'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
