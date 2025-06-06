import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon, ExclamationTriangleIcon, TruckIcon, ScaleIcon, ClockIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { SkipCardProps } from '../types/skip';

const SkipCard: React.FC<SkipCardProps> = ({ skip, isSelected, onSelect }) => {
  const totalPrice = skip.price_before_vat * (1 + skip.vat / 100);
  
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.02 }}
      onClick={() => onSelect(skip)}
      className={`relative overflow-hidden transition-all duration-300
        ${isSelected 
          ? 'bg-gradient-to-br from-indigo-50 via-white to-indigo-50' 
          : 'bg-white hover:bg-gray-50'}
        rounded-[2.5rem] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]
        ${isSelected ? 'border-2 border-indigo-500' : 'border border-transparent'}
      `}
    >
      {/* Content Container */}
      <div className="relative p-8">
        {/* Top Section */}
        <div className="flex items-start justify-between mb-6">
          {/* Size and Period */}
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <span className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                {skip.size}
              </span>
              <div className="flex flex-col">
                <span className="text-lg font-medium text-gray-600">Yard</span>
                <span className="text-sm text-gray-400">Skip</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-gray-500">
              <ClockIcon className="w-4 h-4" />
              <span className="text-sm">{skip.hire_period_days} days hire</span>
            </div>
          </div>

          {/* Price Tag */}
          <div className="relative">
            <div className="absolute -right-2 -top-2 w-full h-full bg-indigo-100 rounded-2xl transform rotate-6"></div>
            <div className="relative bg-white rounded-2xl p-4 shadow-sm">
              <div className="text-2xl font-bold text-indigo-600">£{totalPrice.toFixed(2)}</div>
              <div className="text-xs text-gray-400">inc. VAT</div>
            </div>
          </div>
        </div>

        {/* Skip Visualization */}
        <div className="relative h-48 mb-8">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl overflow-hidden">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 20px 20px, rgba(99, 102, 241, 0.1) 4px, transparent 0)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          <div className="relative h-full flex items-center justify-center p-6">
            <img
              src={`/skip-${skip.size}.png`}
              alt={`${skip.size} Yard Skip`}
              className="h-full w-auto object-contain transform transition-all duration-500 hover:scale-110"
              onError={(e) => {
                e.currentTarget.src = 'https://via.placeholder.com/400x300/818CF8/FFFFFF?text=Skip';
              }}
            />
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <Feature 
            icon={TruckIcon}
            label="Free Delivery"
            isHighlighted={true}
          />
          <Feature 
            icon={ClockIcon}
            label={`${skip.hire_period_days} Day Hire`}
            isHighlighted={true}
          />
          <Feature 
            icon={ScaleIcon}
            label="Heavy Waste"
            isHighlighted={skip.allows_heavy_waste}
          />
          <Feature 
            icon={ShieldCheckIcon}
            label="Road Placement"
            isHighlighted={skip.allowed_on_road}
            warning={!skip.allowed_on_road ? "Private land only" : undefined}
          />
        </div>

        {/* Action Button */}
        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-4 rounded-2xl font-semibold text-lg transition-all
              ${isSelected 
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
          >
            {isSelected ? 'Selected' : 'Select Skip'}
          </motion.button>
        </div>

        {/* Selected Indicator */}
        {isSelected && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute top-6 right-6 w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg"
          >
            <CheckCircleIcon className="w-6 h-6 text-white" />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const Feature: React.FC<{
  icon: React.ComponentType<any>;
  label: string;
  isHighlighted: boolean;
  warning?: string;
}> = ({ icon: Icon, label, isHighlighted, warning }) => (
  <div className={`flex items-center space-x-2 p-3 rounded-xl transition-all
    ${isHighlighted 
      ? 'bg-gradient-to-br from-indigo-50 to-purple-50 text-indigo-700'
      : 'bg-gray-50 text-gray-500'
    }`}
  >
    <Icon className="w-5 h-5" />
    <div className="flex flex-col">
      <span className="text-sm font-medium">{label}</span>
      {warning && (
        <span className="text-xs text-amber-500">{warning}</span>
      )}
    </div>
  </div>
);

export default SkipCard; 