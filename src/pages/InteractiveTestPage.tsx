import React from 'react';
import TestPage from './TestPage';

export default function InteractiveTestPage() {
  return (
    <div>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Interactive Intelligence Assessment
        </h1>
        <p className="text-lg text-gray-600 text-center mb-8">
          Engage with our dynamic, interactive IQ test featuring responsive questions and real-time feedback
        </p>
      </div>
      <TestPage />
    </div>
  );
}