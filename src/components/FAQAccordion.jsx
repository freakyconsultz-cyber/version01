import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

function FAQAccordion({ faqs }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full space-y-4">
      <div className="flex items-center gap-2 mb-6 text-gray-800">
        <HelpCircle className="w-6 h-6 text-orange-600" />
        <h3 className="text-2xl font-bold">Frequently Asked Questions</h3>
      </div>
      
      {faqs.map((faq, index) => (
        <div 
          key={index} 
          className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none bg-white hover:bg-gray-50 transition-colors"
          >
            <span className="font-semibold text-gray-900 pr-8 text-sm md:text-base">
              {faq.question}
            </span>
            <span className="flex-shrink-0 text-orange-500">
              {activeIndex === index ? (
                <Minus className="w-5 h-5" />
              ) : (
                <Plus className="w-5 h-5" />
              )}
            </span>
          </button>
          
          <AnimatePresence initial={false}>
            {activeIndex === index && (
              <motion.div
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: 'auto' },
                  collapsed: { opacity: 0, height: 0 }
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <div className="px-6 pb-5 pt-0 text-gray-600 text-sm leading-relaxed border-t border-gray-50 bg-gray-50/30">
                  <div className="pt-3">
                    {faq.answer}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export default FAQAccordion;