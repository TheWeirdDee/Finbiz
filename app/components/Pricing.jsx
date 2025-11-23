import React from 'react';
import { Tag } from "lucide-react";

const CheckIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const plans = [
  {
    name: 'Basic',
    price: '499',
    tag: null,
    description: 'Get a professional website designed according to your needs.',
    features: [
      'Get a fully designed Website.',
      'Webflow Development',
      'Limited Support',
    ],
    buttonText: 'Get started',
    buttonClass: 'bg-white text-[#0F0F0F] hover:bg-neutral-600',
    nameColor: 'text-white',
  },
  {
    name: 'Pro',
    price: '499',
    tag: 'Popular',
    description: 'Get a professional website designed according to your needs.',
    features: [
      'Get a fully designed Website.',
      'Webflow Development',
      'Limited Support',
      'Standart integrations',
      'Email support',
      'Email support',  
    ],
    buttonText: 'Get started',
    buttonClass: 'bg-white text-[#0F0F0F] hover:bg-gray-100',
    nameColor: 'text-[#A3DC2F]',
  },
  {
    name: 'Enterprise',
    price: '999',
    tag: null,
    description: 'Get a professional website designed according to your needs.',
    features: [
      'Get a fully designed Website.',
      'Webflow Development',
      'Limited Support',
      'Standart integrations',
      'Email support',
      'Email support',
      'Email support',
    ],
    buttonText: 'Contact Us',
    
    buttonClass: 'bg-[#A3DC2F] text-[#1D1C20] font-semibold hover:bg-lime-400 shadow-xl shadow-lime-800/10',
    nameColor: 'text-[#A3DC2F]',  
  },
];

 
const PricingCard = ({ plan }) => {
  return (
    <div className="flex flex-col p-8 bg-[#161616] rounded-xl shadow-2xl h-full transform transition-all duration-300 hover:scale-[1.02] pt-10">
     
      {plan.tag === 'Popular' && (
        <div className="absolute top-4 right-0  mr-6 px-3 py-1 text-xs font-medium text-lime-500 bg-neutral-900 rounded-full shadow-lg border border-lime-500/50">
          {plan.tag}
        </div>
      )}

   
      <h2 className={`text-3xl font-bold mb-8 text-center ${plan.nameColor}`}>{plan.name}</h2>

     
      <p className="text-gray-400 mb-6 text-sm text-center">{plan.description}</p>

      
  <div className="flex mb-10 mt-10 justify-center border-b border-[#242424] pb-6">
  <span className="text-5xl font-extrabold text-white">${plan.price}</span>
  <span className="text-gray-400 text-lg ml-2">/month</span>
</div>



     
      <ul className="space-y-4 mb-10 flex-grow">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center text-[#FBFBFB]">
            <CheckIcon className="w-4 h-4 text-[#FBFBFB] mr-3 flex-shrink-0" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      
      <button
        className={`w-full py-3 rounded-full transition-colors duration-200 text-sm font-medium ${plan.buttonClass}`}
      >
        {plan.buttonText}
      </button>
    </div>
  );
};

 
const App = () => {
  return (
    
    <div className="bg-[#1D1C20] py-8 px-6 sm:px-16 lg:px-28 font-['Inter']">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12 lg:mb-20">
         
        <div className="inline-flex items-center gap-2 px-4 py-1 text-[14px] font-semibold text-[#A3DC2F] bg-[#171F05] border border-[#364C09] rounded-full mb-4 uppercase tracking-wider">
  <Tag size={12} className="text-[#A3DC2F]" />
  Pricing
</div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Find the right plan
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-[#9B9CA1]">
            Invest in your companys future with our comprehensive financial solution. Contact us for pricing details and see how we can help you streamline your finances and reach your business goals.
          </p>
        </div>

         
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-lg md:max-w-4xl lg:max-w-full mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className="relative">
              <PricingCard plan={plan} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;