import React from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon, TrashIcon, TruckIcon, ClipboardIcon, CalendarIcon, CreditCardIcon } from '@heroicons/react/24/outline';
import { ProgressStepProps } from '../types/skip';

const steps = [
  { label: 'Postcode', icon: MapPinIcon },
  { label: 'Waste Type', icon: TrashIcon },
  { label: 'Select Skip', icon: TruckIcon },
  { label: 'Permit Check', icon: ClipboardIcon },
  { label: 'Choose Date', icon: CalendarIcon },
  { label: 'Payment', icon: CreditCardIcon },
];

const Step: React.FC<ProgressStepProps> = ({ step, currentStep, label, icon: Icon }) => {
  const isCompleted = step < currentStep;
  const isCurrent = step === currentStep;

  return (
    <div className="flex flex-col items-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: step * 0.1 }}
        className={`relative flex items-center justify-center w-12 h-12 rounded-full mb-2
          ${isCompleted ? 'bg-blue-600' : isCurrent ? 'bg-blue-500' : 'bg-gray-200'}`}
      >
        <Icon className={`w-6 h-6 ${isCompleted || isCurrent ? 'text-white' : 'text-gray-500'}`} />
        {isCompleted && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -right-1 -top-1 w-4 h-4 bg-green-500 rounded-full"
          />
        )}
      </motion.div>
      <span className={`text-sm font-medium ${isCurrent ? 'text-blue-600' : 'text-gray-500'}`}>
        {label}
      </span>
    </div>
  );
};

const ProgressSteps: React.FC<{ currentStep: number }> = ({ currentStep }) => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-between items-start relative">
        {steps.map((step, index) => (
          <React.Fragment key={step.label}>
            <Step
              step={index}
              currentStep={currentStep}
              label={step.label}
              icon={step.icon}
            />
            {index < steps.length - 1 && (
              <div className="flex-1 h-0.5 mt-6 mx-2 bg-gray-200" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProgressSteps; 