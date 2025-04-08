import React from 'react';
import TestPage from './TestPage';

export default function QuickTestPage() {
  return (
    <div>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Quick Online IQ Test - Results in 5 Minutes
        </h1>
        <p className="text-lg text-gray-600 text-center mb-8">
          Get a rapid assessment of your cognitive abilities with our streamlined IQ test
        </p>
      </div>
      <TestPage />
    </div>
  );
}