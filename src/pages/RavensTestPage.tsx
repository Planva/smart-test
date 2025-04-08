import React from 'react';
import TestPage from './TestPage';

export default function RavensTestPage() {
  return (
    <div>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Raven's Progressive Matrices Style Test
        </h1>
        <p className="text-lg text-gray-600 text-center mb-8">
          Assess your intelligence using questions inspired by Raven's Progressive Matrices methodology
        </p>
      </div>
      <TestPage />
    </div>
  );
}