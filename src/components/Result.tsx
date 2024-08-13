import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Result.css';

interface ResultProps {
  score: number;
  total: number;
}

const Result: React.FC<ResultProps> = ({ score, total }) => {
  return (
    <div className="result-container">
      <h2>Your Score</h2>
      <p>
        You answered {score} out of {total} questions correctly.
      </p>
      <div className="download-container">
        <button className="downloadButton">
          <Link className="downloadLinkReact" to="download/ios">Download our application for full features!</Link>
        </button>
      </div>
    </div>
  );
};

export default Result;
