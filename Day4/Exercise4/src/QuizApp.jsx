import React, { useState } from 'react';
import Question from './Question';
import ScoreBoard from './ScoreBoard';
import AnswerFeedback from './AnswerFeedback';

const questions = [
  {
    id: 1,
    question: 'What is the capital of Lagos State?',
    options: ['Lagos Island', 'Ikeja', 'Victoria Island', 'Lekki'],
    answer: 'Ikeja',
  },
  {
    id: 2,
    question: 'What is the capital of Ogun State?',
    options: ['Abeokuta', 'Ijebu Ode', 'Sagamu', 'Ota'],
    answer: 'Abeokuta',
  },
  {
    id: 3,
    question: 'What is the capital of Kano State?',
    options: ['Kano', 'Zaria', 'Kaduna', 'Katsina'],
    answer: 'Kano',
  },
  {
    id: 4,
    question: 'What is the capital of Rivers State?',
    options: ['Port Harcourt', 'Bonny', 'Yenagoa', 'Uyo'],
    answer: 'Port Harcourt',
  },
  {
    id: 5,
    question: 'What is the capital of Enugu State?',
    options: ['Nsukka', 'Awka', 'Enugu', 'Abakaliki'],
    answer: 'Enugu',
  },
];

function QuizApp() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState('');
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [finished, setFinished] = useState(false);

  const currentQuestion = questions[currentIndex];

  const handleSelect = (option) => {
    setSelected(option);
  };

  const handleSubmit = () => {
    if (!selected) return;
    const correct = selected === currentQuestion.answer;
    setIsCorrect(correct);
    if (correct) setScore((prev) => prev + 1);
    setShowFeedback(true);
  };

  const handleNext = () => {
    setShowFeedback(false);
    setSelected('');
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelected('');
    setScore(0);
    setShowFeedback(false);
    setIsCorrect(null);
    setFinished(false);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Nigerian States Quiz</h2>
      <ScoreBoard score={score} total={questions.length} />
      {finished ? (
        <>
          <h3>🎉 Final Score: {score}/{questions.length}</h3>
          <button onClick={handleRestart}>Restart Quiz</button>
        </>
      ) : (
        <>
          <Question
            question={currentQuestion}
            index={currentIndex}
            selected={selected}
            onSelect={handleSelect}
            onSubmit={handleSubmit}
            disabled={showFeedback}
          />
          {showFeedback && (
            <AnswerFeedback
              isCorrect={isCorrect}
              correctAnswer={currentQuestion.answer}
              onNext={handleNext}
              isLast={currentIndex === questions.length - 1}
            />
          )}
        </>
      )}
    </div>
  );
}

export default QuizApp;