import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MagnifyingGlassIcon, 
  AdjustmentsHorizontalIcon,
  ArrowLongRightIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';
import ProgressSteps from '../components/ProgressSteps';
import SkipCard from '../components/SkipCard';
import { Skip } from '../types/skip';

const mockSkipData: Skip[] = [
  {
    "id": 17933,
    "size": 4,
    "hire_period_days": 14,
    "transport_cost": null,
    "per_tonne_cost": null,
    "price_before_vat": 278,
    "vat": 20,
    "postcode": "NR32",
    "area": "",
    "forbidden": false,
    "created_at": "2025-04-03T13:51:46.897146",
    "updated_at": "2025-04-07T13:16:52.813",
    "allowed_on_road": true,
    "allows_heavy_waste": true
  },
  {
    "id": 17934,
    "size": 6,
    "hire_period_days": 14,
    "transport_cost": null,
    "per_tonne_cost": null,
    "price_before_vat": 305,
    "vat": 20,
    "postcode": "NR32",
    "area": "",
    "forbidden": false,
    "created_at": "2025-04-03T13:51:46.897146",
    "updated_at": "2025-04-07T13:16:52.992",
    "allowed_on_road": true,
    "allows_heavy_waste": true
  },
  {
    "id": 17935,
    "size": 8,
    "hire_period_days": 14,
    "transport_cost": null,
    "per_tonne_cost": null,
    "price_before_vat": 375,
    "vat": 20,
    "postcode": "NR32",
    "area": "",
    "forbidden": false,
    "created_at": "2025-04-03T13:51:46.897146",
    "updated_at": "2025-04-07T13:16:53.171",
    "allowed_on_road": true,
    "allows_heavy_waste": true
  },
  {
    "id": 17936,
    "size": 10,
    "hire_period_days": 14,
    "transport_cost": null,
    "per_tonne_cost": null,
    "price_before_vat": 400,
    "vat": 20,
    "postcode": "NR32",
    "area": "",
    "forbidden": false,
    "created_at": "2025-04-03T13:51:46.897146",
    "updated_at": "2025-04-07T13:16:53.339",
    "allowed_on_road": false,
    "allows_heavy_waste": false
  },
  {
    "id": 17937,
    "size": 12,
    "hire_period_days": 14,
    "transport_cost": null,
    "per_tonne_cost": null,
    "price_before_vat": 439,
    "vat": 20,
    "postcode": "NR32",
    "area": "",
    "forbidden": false,
    "created_at": "2025-04-03T13:51:46.897146",
    "updated_at": "2025-04-07T13:16:53.516",
    "allowed_on_road": false,
    "allows_heavy_waste": false
  }
];

const SkipSelection: React.FC = () => {
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState<'size' | 'price'>('size');
  const [showFilters, setShowFilters] = useState(false);

  const filteredSkips = mockSkipData
    .filter(skip => 
      skip.size.toString().includes(searchQuery) ||
      searchQuery === ''
    )
    .sort((a, b) => {
      if (sortOrder === 'size') {
        return a.size - b.size;
      }
      return a.price_before_vat - b.price_before_vat;
    });

  const handleSkipSelect = (skip: Skip) => {
    setSelectedSkip(skip);
  };

  return (
    <div className="min-h-screen bg-[#f0f0f0]">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-white to-gray-50 shadow-[inset_0_-20px_30px_-20px_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <ProgressSteps currentStep={2} />
          
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center mt-12 mb-8"
          >
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-4">
              Choose Your Skip
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Select the perfect skip size for your project. All skips include delivery and collection.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters */}
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="bg-white rounded-[2rem] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] p-6">
            <div className="flex flex-wrap gap-4">
              {/* Search */}
              <div className="flex-1 min-w-[300px]">
                <div className="relative">
                  <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by skip size..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Sort and Filter */}
              <div className="flex gap-3">
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value as 'size' | 'price')}
                  className="px-6 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-indigo-500 outline-none appearance-none cursor-pointer relative pr-12"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                    backgroundSize: '1.5rem'
                  }}
                >
                  <option value="size">Sort by Size</option>
                  <option value="price">Sort by Price</option>
                </select>
                
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <AdjustmentsHorizontalIcon className="w-6 h-6 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Expandable Filters */}
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="mt-6 pt-6 border-t border-gray-100"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Placement</label>
                    <div className="space-y-1">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded text-indigo-600" />
                        <span className="text-sm text-gray-600">Road Placement</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded text-indigo-600" />
                        <span className="text-sm text-gray-600">Private Land</span>
                      </label>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Skip Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredSkips.map((skip, index) => (
            <motion.div
              key={skip.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <SkipCard
                skip={skip}
                isSelected={selectedSkip?.id === skip.id}
                onSelect={handleSkipSelect}
              />
            </motion.div>
          ))}
        </div>

        {/* Continue Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`group flex items-center space-x-3 px-12 py-5 rounded-2xl font-semibold text-lg shadow-[5px_5px_15px_#bebebe,-5px_-5px_15px_#ffffff] transition-all
              ${selectedSkip
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
            disabled={!selectedSkip}
          >
            <span>Continue to Permit Check</span>
            <ArrowLongRightIcon className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default SkipSelection; 