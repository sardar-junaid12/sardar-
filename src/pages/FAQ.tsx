import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What are your delivery hours?",
    answer: "We deliver every day from 8:00 AM to 10:00 PM. You can choose a specific 2-hour delivery window during checkout."
  },
  {
    question: "Do you offer same-day delivery?",
    answer: "Yes! Orders placed before 2:00 PM are eligible for same-day delivery in most areas. A small express fee may apply."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit and debit cards (Visa, MasterCard, American Express), mobile wallets (Apple Pay, Google Pay), and Cash on Delivery."
  },
  {
    question: "What is your return policy?",
    answer: "We have a 100% freshness guarantee. If you are not satisfied with the quality of any item, please contact us within 24 hours of delivery for a full refund or replacement."
  },
  {
    question: "Is there a minimum order amount for delivery?",
    answer: "Yes, the minimum order amount for delivery is $20. Orders over $50 qualify for free standard delivery."
  },
  {
    question: "How can I track my order?",
    answer: "You can track your order in real-time by visiting the 'Track Order' page and entering your Order ID, or by checking the 'Order History' section in your account."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
        <p className="text-lg text-gray-600">Find answers to common questions about our services.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-200"
          >
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-bold text-gray-900">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="text-green-600 flex-shrink-0" size={20} />
              ) : (
                <ChevronDown className="text-gray-400 flex-shrink-0" size={20} />
              )}
            </button>
            
            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 bg-green-50 rounded-2xl p-8 text-center">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Still have questions?</h2>
        <p className="text-gray-600 mb-6">We're here to help. Contact our customer support team.</p>
        <button onClick={() => window.location.href = '/contact'} className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition-colors">
          Contact Support
        </button>
      </div>
    </div>
  );
}
