import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Result.css';

interface ResultProps {
  score: number;
  total: number;
  mistakes: { question: string; correctAnswer: string; givenAnswer: string }[];
}

const Result: React.FC<ResultProps> = ({ score, total, mistakes }) => {
  return (
    <div className="result-container">
      <h2>Your Score</h2>
      <p>
        You answered {score} out of {total} questions correctly.
      </p>

      {/* Display mistakes */}
      {mistakes.length > 0 && (
        <div className="mistakes-container">
          <h3>Review Your Mistakes</h3>
          <ul>
            {mistakes.map((mistake, index) => (
              <li key={index}>
                <p><strong>Question:</strong> {mistake.question}</p>
                <p><strong>Correct Answer:</strong> {mistake.correctAnswer}</p>
                <p><strong>Your Answer:</strong> {mistake.givenAnswer}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="download-container">
        <button className="downloadButton">
          <Link className="downloadLinkReact" to="download">Download our application for full features!</Link>
        </button>
      </div>
    </div>
  );
};

export default Result;
