import React from 'react';

function Question({ question, index, selected, onSelect, onSubmit, disabled }) {
  return (
    <div>
      <h4>Question {index + 1}:</h4>
      <p>{question.question}</p>
      {question.options.map((opt) => (
        <div key={opt}>
          <label>
            <input
              type="radio"
              name="option"
              value={opt}
              checked={selected === opt}
              onChange={() => onSelect(opt)}
              disabled={disabled}
            />
            {opt}
          </label>
        </div>
      ))}
      <button onClick={onSubmit} disabled={!selected || disabled} style={{ marginTop: '10px' }}>
        Submit Answer
      </button>
    </div>
  );
}

export default Question;