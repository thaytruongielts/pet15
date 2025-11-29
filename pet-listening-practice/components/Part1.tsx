import React, { useState } from 'react';
import { PART1_AUDIO_SRC, PART1_DATA } from '../constants';
import AudioPlayer from './AudioPlayer';
import ScoreBanner from './ScoreBanner';
import { CheckCircle, XCircle } from 'lucide-react';

const Part1: React.FC = () => {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSelect = (questionId: number, option: string) => {
    if (isSubmitted) return;
    setAnswers(prev => ({ ...prev, [questionId]: option }));
  };

  const calculateScore = () => {
    let correct = 0;
    PART1_DATA.forEach(q => {
      if (answers[q.id] === q.correctAnswer) correct++;
    });
    return (correct / PART1_DATA.length) * 10;
  };

  const correctCount = PART1_DATA.filter(q => answers[q.id] === q.correctAnswer).length;
  const score = calculateScore();

  const handleReset = () => {
    setAnswers({});
    setIsSubmitted(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-slate-800 mb-2">Part 1: Multiple Choice</h1>
      <p className="text-slate-600 mb-6">Listen to the recordings and select the correct picture (A, B, or C).</p>
      
      <AudioPlayer src={PART1_AUDIO_SRC} />

      {isSubmitted && (
        <ScoreBanner 
          score={score} 
          correctCount={correctCount} 
          totalQuestions={PART1_DATA.length} 
          onReset={handleReset} 
        />
      )}

      <div className="space-y-12">
        {PART1_DATA.map((q) => {
          const isCorrect = answers[q.id] === q.correctAnswer;
          const userSelected = answers[q.id];
          
          return (
            <div key={q.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="p-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
                <span className="font-bold text-slate-700">Question {q.id}</span>
                {isSubmitted && (
                   <span className={`flex items-center gap-2 text-sm font-bold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                     {isCorrect ? (
                       <><CheckCircle size={16} /> Correct</>
                     ) : (
                       <><XCircle size={16} /> Incorrect</>
                     )}
                   </span>
                )}
              </div>
              
              <div className="p-6">
                <p className="text-lg font-medium text-slate-800 mb-6">{q.questionText}</p>
                
                {/* Image Container - The images provided contain A, B, and C options visually */}
                <div className="mb-6 rounded-lg overflow-hidden border border-slate-200">
                  <img src={q.imageUrl} alt={`Question ${q.id}`} className="w-full h-auto object-contain" />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {(['A', 'B', 'C'] as const).map((option) => (
                    <button
                      key={option}
                      onClick={() => handleSelect(q.id, option)}
                      disabled={isSubmitted}
                      className={`
                        py-3 px-4 rounded-lg font-bold text-lg transition-all border-2
                        ${isSubmitted 
                          ? userSelected === option 
                              ? (isCorrect ? 'bg-green-100 border-green-500 text-green-700' : 'bg-red-100 border-red-500 text-red-700')
                              : 'bg-slate-50 border-slate-200 text-slate-400'
                          : userSelected === option
                              ? 'bg-blue-600 border-blue-600 text-white shadow-md transform scale-105'
                              : 'bg-white border-slate-200 text-slate-600 hover:border-blue-300 hover:bg-blue-50'
                        }
                      `}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {!isSubmitted && (
        <div className="mt-12 flex justify-center pb-12">
          <button
            onClick={() => setIsSubmitted(true)}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
          >
            Submit Part 1
          </button>
        </div>
      )}
    </div>
  );
};

export default Part1;