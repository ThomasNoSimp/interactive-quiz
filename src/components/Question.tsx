import React from 'react';
import '../styles/components/Question.css';

interface QuestionProps {
  question: string;
  options: string[];
  onAnswer: (answer: string) => void;
}

const Question: React.FC<QuestionProps> = ({ question, options, onAnswer }) => {
  return (
    <div className="question-container">
      <h2>{question}</h2>
      <div className="options">
        {options.map(option => (
          <button key={option} onClick={() => onAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
