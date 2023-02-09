/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import AnswerList from './AnswerList.jsx';
import AddAnswer from './AddAnswer.jsx';
import api from './lib/qaRequests.js';

function Question({
  body, helpfulness, id, name, answers, getQuestions, theme,
}) {
  const [helpfulClicked, setHelpfulClicked] = useState(false);
  const [ansOpen, setAnsOpen] = useState(false);

  const handleQHelpful = (e) => {
    e.preventDefault();
    if (!helpfulClicked) {
      api.putQHelpful(id)
        .then(() => {
          getQuestions();
        })
        .then(() => {
          setHelpfulClicked(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const toggleAddAnswer = (e) => {
    e.preventDefault();
    setAnsOpen(true);
  };

  return (
    <div data-testid="question" className={`question ${theme}`}>
      <div className="q-body">
        <span className="q-body-text">Q: {body}</span>
        <span className="q-helpful">Helpful? <span className="q-help" onClick={handleQHelpful}><u>Yes</u> </span>
          ({helpfulness})  |  <u className="add-answer" onClick={toggleAddAnswer}> Add Answer</u>
        </span>
        { ansOpen && (
          <AddAnswer
            key={id}
            id={id}
            name={name}
            body={body}
            setAnsOpen={setAnsOpen}
            getQuestions={getQuestions}
          />
        )}
      </div>
      <AnswerList answerList={answers} getQuestions={getQuestions} theme={theme} />
    </div>
  );
}

export default Question;
