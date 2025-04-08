import React from 'react';
import TestPage from './TestPage';

export default function MensaTestPage() {
  return (
    <div>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Mensa-Style IQ Test Questions
        </h1>
        <p className="text-lg text-gray-600 text-center mb-8">
          Challenge yourself with questions inspired by Mensa's intelligence testing methodology
        </p>
      </div>
      <TestPage />
    </div>
  );
}