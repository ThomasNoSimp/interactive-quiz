import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';
import { questions } from '../data/questions';
import '../styles/components/Quiz.css';

const Quiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [mistakes, setMistakes] = useState<{ question: string; correctAnswer: string; givenAnswer: string }[]>([]);
  
  const handleAnswer = (answer: string) => {
    const currentQuestion = questions[currentQuestionIndex];
    
    if (currentQuestion.correctAnswer === answer) {
      setScore(score + 1);
    } else {
      // Add mistake to the mistakes array
      setMistakes([
        ...mistakes,
        {
          question: currentQuestion.question,
          correctAnswer: currentQuestion.correctAnswer,
          givenAnswer: answer
        }
      ]);
    }
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const totalQuestions = questions.length;

  return (
    <div className="quiz-container">
      {showResult ? (
        <Result score={score} total={totalQuestions} mistakes={mistakes} />
      ) : (
        <Question
          question={questions[currentQuestionIndex].question}
          options={questions[currentQuestionIndex].options}
          onAnswer={handleAnswer}
        />
      )}
    </div>
  );
};

export default Quiz;
