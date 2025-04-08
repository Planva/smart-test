import React, { useState, useRef } from 'react';
import { Brain, ChevronRight, Award, Timer, Share2, Download } from 'lucide-react';
import { getRandomQuestions, isVisualQuestion } from '../questions';
import { calculateIQ } from '../utils';
import ShareImage from '../components/ShareImage';
import * as htmlToImage from 'html-to-image';

export default function TestPage() {
  const [ageGroup, setAgeGroup] = useState<string>('');
  const [currentQuestions, setCurrentQuestions] = useState<any[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [timeStarted, setTimeStarted] = useState<Date | null>(null);
  const [shareMessage, setShareMessage] = useState('');
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [isImageReady, setIsImageReady] = useState(false);
  const shareImageRef = useRef<HTMLDivElement>(null);

  const handleAgeGroupSelect = (group: string) => {
    setAgeGroup(group);
    setCurrentQuestions(getRandomQuestions(10, group));
    setTimeStarted(new Date());
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
    setShareMessage('');
    setIsImageReady(false);
  };

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);

    if (currentQuestion + 1 < currentQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleShare = async () => {
    if (!isImageReady) {
      setShareMessage('Please wait while we prepare your results...');
      return;
    }

    setIsGeneratingImage(true);
    try {
      if (!shareImageRef.current) return;

      const dataUrl = await htmlToImage.toPng(shareImageRef.current, {
        quality: 1,
        pixelRatio: 2,
        backgroundColor: '#ffffff',
        skipAutoScale: true,
        width: 600,
        height: 800,
        style: {
          transform: 'scale(1)',
        },
      });

      // Create a download link
      const link = document.createElement('a');
      link.download = 'iq-test-results.png';
      link.href = dataUrl;
      link.click();

      setShareMessage('Results image downloaded!');
      setTimeout(() => setShareMessage(''), 3000);
    } catch (error) {
      console.error('Error generating image:', error);
      setShareMessage('Unable to generate image. Please try again.');
      setTimeout(() => setShareMessage(''), 3000);
    }
    setIsGeneratingImage(false);
  };

  const handleImageReady = () => {
    setIsImageReady(true);
  };

  const iqScore = calculateIQ(answers, ageGroup);

  const renderQuestion = (question: any) => {
    // Add validation to ensure we have a valid question
    if (!question) {
      return (
        <div className="text-center text-gray-600">
          <p>Question not available. Please try again.</p>
        </div>
      );
    }

    if (isVisualQuestion(question)) {
      return (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">
            {question.question}
          </h2>
          <div className="rounded-lg overflow-hidden mb-6">
            {question.svg ? (
              <div className="aspect-square w-full max-w-md mx-auto bg-white flex items-center justify-center">
                <div 
                  className="w-full h-full p-8"
                  dangerouslySetInnerHTML={{ __html: question.svg }}
                />
              </div>
            ) : (
              <div className="aspect-square w-full max-w-md mx-auto bg-gray-100 flex items-center justify-center">
                <p className="text-gray-500">Question Visual</p>
              </div>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {question.options.map((option: string, index: number) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className="p-4 border-2 border-gray-200 rounded-lg hover:border-indigo-600 hover:bg-indigo-50 transition-colors text-left"
              >
                {question.optionSvgs ? (
                  <div className="aspect-square w-full bg-white flex items-center justify-center mb-2">
                    <div 
                      className="w-full h-full p-4"
                      dangerouslySetInnerHTML={{ __html: question.optionSvgs[index] }}
                    />
                  </div>
                ) : (
                  <div className="aspect-square w-full bg-gray-50 flex items-center justify-center mb-2">
                    <p className="text-gray-500">Option {index + 1}</p>
                  </div>
                )}
                <p className="text-sm text-gray-700">{option}</p>
              </button>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">
          {question.question}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {question.options.map((option: string, index: number) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className="p-4 border-2 border-gray-200 rounded-lg hover:border-indigo-600 hover:bg-indigo-50 transition-colors text-left"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    );
  };

  if (!timeStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center justify-center mb-6">
            <Brain className="w-12 h-12 text-indigo-600" />
          </div>
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Select Your Age Group
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Choose your age group to get questions tailored to your cognitive level
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <button
              onClick={() => handleAgeGroupSelect('child')}
              className="p-6 border-2 border-indigo-200 rounded-xl hover:border-indigo-600 hover:bg-indigo-50 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2">Children</h3>
              <p className="text-gray-600">Ages 6-12</p>
              <p className="text-sm text-gray-500 mt-2">Age-appropriate cognitive assessment</p>
            </button>
            <button
              onClick={() => handleAgeGroupSelect('teenager')}
              className="p-6 border-2 border-indigo-200 rounded-xl hover:border-indigo-600 hover:bg-indigo-50 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2">Teenagers</h3>
              <p className="text-gray-600">Ages 13-17</p>
              <p className="text-sm text-gray-500 mt-2">Teen-focused cognitive tasks</p>
            </button>
            <button
              onClick={() => handleAgeGroupSelect('adult')}
              className="p-6 border-2 border-indigo-200 rounded-xl hover:border-indigo-600 hover:bg-indigo-50 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2">Adults</h3>
              <p className="text-gray-600">Ages 18-59</p>
              <p className="text-sm text-gray-500 mt-2">Comprehensive cognitive evaluation</p>
            </button>
            <button
              onClick={() => handleAgeGroupSelect('senior')}
              className="p-6 border-2 border-indigo-200 rounded-xl hover:border-indigo-600 hover:bg-indigo-50 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2">Seniors</h3>
              <p className="text-gray-600">Ages 60+</p>
              <p className="text-sm text-gray-500 mt-2">Senior-adapted assessment</p>
            </button>
          </div>
          
          <p className="text-xs text-gray-500 text-center">
            Questions are designed specifically for each age group's cognitive development level
          </p>
        </div>
      </div>
    );
  }

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center justify-center mb-6">
            <Award className="w-16 h-16 text-indigo-600" />
          </div>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
            Your Score: {iqScore}
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Based on age-appropriate cognitive assessment standards
          </p>
          
          <div className="bg-indigo-50 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-lg mb-3">Performance Analysis</h3>
            <p className="text-gray-700 mb-4">
              Your performance indicates {iqScore >= 130 ? 'exceptional' : iqScore >= 110 ? 'above average' : 'average'} cognitive abilities for your age group in:
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Pattern Recognition</li>
              <li>Logical Reasoning</li>
              <li>Problem-Solving Skills</li>
              <li>Memory and Processing</li>
              <li>Visual-Spatial Processing</li>
            </ul>
          </div>

          {shareMessage && (
            <div className="text-center mb-4">
              <p className="text-sm text-indigo-600">{shareMessage}</p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => handleAgeGroupSelect(ageGroup)}
              className="flex-1 bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Take Test Again
            </button>
            <button
              onClick={handleShare}
              disabled={isGeneratingImage}
              className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
            >
              <Download className="w-5 h-5" />
              Download Results
            </button>
          </div>

          {/* Hidden share image container */}
          <div className="hidden">
            <div ref={shareImageRef}>
              <ShareImage score={iqScore} onImageGenerated={handleImageReady} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Timer className="w-5 h-5 text-indigo-600" />
            <span className="text-sm text-gray-600">Question {currentQuestion + 1} of {currentQuestions.length}</span>
          </div>
          <div className="h-2 flex-1 mx-4 bg-gray-200 rounded-full">
            <div
              className="h-2 bg-indigo-600 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / currentQuestions.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="mb-8">
          {renderQuestion(currentQuestions[currentQuestion])}
        </div>
      </div>
    </div>
  );
}