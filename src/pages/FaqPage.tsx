import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HelpCircle } from 'lucide-react';

export default function FaqPage() {
  const navigate = useNavigate();
  
  const faqs = [
    {
      question: "How accurate is this IQ test?",
      answer: "Our test is based on established psychological research and validated testing methodologies, including elements from Stanford-Binet and Raven's Progressive Matrices. While it provides a good indication of cognitive abilities, it should be considered for educational purposes rather than clinical diagnosis."
    },
    {
      question: "How long does the test take?",
      answer: "The test typically takes 15-20 minutes to complete. It consists of 10 questions, and you can take your time to think through each answer carefully."
    },
    {
      question: "Is registration required?",
      answer: "No, you can take the test immediately without any registration or sign-up process. We believe in providing a seamless experience for our users."
    },
    {
      question: "What does the IQ score mean?",
      answer: "IQ scores are designed to provide a measure of cognitive ability compared to the general population. A score of 100 represents the average, with higher scores indicating above-average cognitive abilities."
    },
    {
      question: "Can I retake the test?",
      answer: "Yes, you can retake the test as many times as you like. However, for the most accurate results, we recommend waiting at least a week between attempts."
    },
    {
      question: "How are the questions selected?",
      answer: "Questions are randomly selected from our database of expert-designed problems that test various aspects of cognitive ability, including pattern recognition, logical reasoning, and mathematical thinking."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <HelpCircle className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900">
          Frequently Asked Questions
        </h1>
      </div>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {faq.question}
            </h3>
            <p className="text-gray-700">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button
          onClick={() => navigate('/test')}
          className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors"
        >
          Take the Test Now
        </button>
      </div>
    </div>
  );
}