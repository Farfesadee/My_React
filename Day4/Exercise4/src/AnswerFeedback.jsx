import React from 'react';

function AnswerFeedback({ isCorrect, correctAnswer, onNext, isLast }) {
  return (
    <div style={{ marginTop: '10px' }}>
      <p style={{ color: isCorrect ? 'green' : 'red' }}>
        {isCorrect ? 'Correct!' : `Wrong. The correct answer is ${correctAnswer}.`}
      </p>
      <button onClick={onNext}>{isLast ? 'Finish Quiz' : 'Next Question'}</button>
    </div>
  );
}

export default AnswerFeedback;