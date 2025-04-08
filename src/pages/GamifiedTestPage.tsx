import React from 'react';
import TestPage from './TestPage';

export default function GamifiedTestPage() {
  return (
    <div>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Gamified Intelligence Test
        </h1>
        <p className="text-lg text-gray-600 text-center mb-8">
          Experience our engaging, game-like approach to intelligence testing
        </p>
      </div>
      <TestPage />
    </div>
  );
}