import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, Award, Clock, Share2, CheckCircle } from 'lucide-react';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Smart IQ Test - Professional Intelligence Assessment
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Take Our Professional IQ Test Based on Mensa and Stanford-Binet Methodologies
        </p>
        <button
          onClick={() => navigate('/smart-test')}
          className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors"
          aria-label="Start your free IQ test"
        >
          Start Your Free IQ Test
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <Brain className="w-12 h-12 text-indigo-600 mb-4" aria-hidden="true" />
          <h2 className="text-xl font-semibold mb-2">Professional IQ Test</h2>
          <p className="text-gray-600">Based on established psychological research methodologies</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <Clock className="w-12 h-12 text-indigo-600 mb-4" aria-hidden="true" />
          <h2 className="text-xl font-semibold mb-2">Instant Results</h2>
          <p className="text-gray-600">Get your IQ score and detailed analysis immediately</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <Share2 className="w-12 h-12 text-indigo-600 mb-4" aria-hidden="true" />
          <h2 className="text-xl font-semibold mb-2">Detailed Analysis</h2>
          <p className="text-gray-600">Comprehensive breakdown of your cognitive abilities</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <CheckCircle className="w-12 h-12 text-indigo-600 mb-4" aria-hidden="true" />
          <h2 className="text-xl font-semibold mb-2">Free Assessment</h2>
          <p className="text-gray-600">Professional IQ testing at no cost</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Smart IQ Test?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Scientific Methodology</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1" aria-hidden="true" />
                <span>Based on Mensa testing standards</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1" aria-hidden="true" />
                <span>Aligned with Stanford-Binet Intelligence Scales</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1" aria-hidden="true" />
                <span>Incorporates Raven's Progressive Matrices</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Test Features</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1" aria-hidden="true" />
                <span>Accurate IQ measurement</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1" aria-hidden="true" />
                <span>Age-appropriate questions</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1" aria-hidden="true" />
                <span>Detailed cognitive analysis</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Award className="w-16 h-16 text-indigo-600 mx-auto mb-4" aria-hidden="true" />
        <h2 className="text-3xl font-bold mb-4">Discover Your True IQ Score</h2>
        <p className="text-xl text-gray-600 mb-8">
          Join millions who have measured their intelligence with our professional IQ test
        </p>
        <button
          onClick={() => navigate('/smart-test')}
          className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors"
          aria-label="Take the IQ test now"
        >
          Take the IQ Test Now
        </button>
      </div>
    </div>
  );
}