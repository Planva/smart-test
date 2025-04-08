import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, BookOpen, Award, Brain } from 'lucide-react';

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
        About Our IQ Test
      </h1>

      <div className="bg-white rounded-xl shadow-md p-8 mb-8">
        <div className="flex items-center mb-6">
          <GraduationCap className="w-8 h-8 text-indigo-600 mr-4" />
          <h2 className="text-2xl font-semibold">Scientific Foundation</h2>
        </div>
        <p className="text-gray-700 mb-6">
          Our IQ test is based on established psychological research and validated testing methodologies. 
          The questions are inspired by renowned intelligence tests including Stanford-Binet and Raven's 
          Progressive Matrices, ensuring accurate assessment of cognitive abilities.
        </p>
        
        <div className="flex items-center mb-6">
          <BookOpen className="w-8 h-8 text-indigo-600 mr-4" />
          <h2 className="text-2xl font-semibold">Test Methodology</h2>
        </div>
        <p className="text-gray-700 mb-6">
          The test consists of carefully selected questions that evaluate multiple aspects of intelligence:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Pattern Recognition</li>
          <li>Logical Reasoning</li>
          <li>Mathematical Ability</li>
          <li>Verbal Comprehension</li>
          <li>Spatial Visualization</li>
        </ul>

        <div className="flex items-center mb-6">
          <Award className="w-8 h-8 text-indigo-600 mr-4" />
          <h2 className="text-2xl font-semibold">Scoring System</h2>
        </div>
        <p className="text-gray-700 mb-6">
          Our scoring system is calibrated based on extensive research and statistical analysis. 
          The results provide an accurate assessment of cognitive abilities compared to the general population.
        </p>

        <button
          onClick={() => navigate('/test')}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
        >
          Take the Test Now
        </button>
      </div>

      <div className="bg-indigo-50 rounded-xl p-8">
        <div className="flex items-center justify-center mb-6">
          <Brain className="w-12 h-12 text-indigo-600" />
        </div>
        <h3 className="text-xl font-semibold text-center mb-4">
          Professional Standards
        </h3>
        <p className="text-gray-700 text-center">
          While our test provides valuable insights into cognitive abilities, it should be considered 
          for educational purposes. For clinical assessment, please consult with qualified psychological 
          professionals.
        </p>
      </div>
    </div>
  );
}