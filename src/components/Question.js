import React, { useEffect } from "react";

function Question({ question, timeRemaining, onAnswered }) {
  useEffect(() => {
    if (timeRemaining === 0) {
      // Time ran out: submit a wrong answer and reset timer
      setTimeRemaining(10);
      onAnswered(false);
      return;
    }

    const timeoutId = setTimeout(() => {
    }, 1000);

    return () => clearTimeout(timeoutId); // cleanup
  }, [timeRemaining, setTimeRemaining, onAnswered]);

  return (
    <div>
      <h2>{question.prompt}</h2>
      <ul>
        {question.answers.map((answer, index) => (
          <li key={index}>
            <button onClick={() => {
              setTimeRemaining(10); // reset timer after user answers
              onAnswered(index === question.correctIndex);
            }}>
              {answer}
            </button>
          </li>
        ))}
      </ul>
      <p>{timeRemaining} seconds remaining</p>
    </div>
  );
}

export default Question;
