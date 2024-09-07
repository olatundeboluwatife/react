import React from 'react';

const Question = ({ handleTrue, handleFalse }) => {
  return (
    <div className="question-container">
      <p>Are you registered?</p>
      <button className="button" onClick={handleTrue}>
        True
      </button>
      <button className="button" onClick={handleFalse}>
        False
      </button>
    </div>
  );
};

export default Question;
