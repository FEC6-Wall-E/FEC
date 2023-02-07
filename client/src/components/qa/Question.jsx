/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import axios from 'axios';
import AnswerList from './AnswerList.jsx';
import AddAnswer from './AddAnswer.jsx';

function Question({
  body, helpfulness, id, name, answers, getQuestions,
}) {
  const [helpfulClicked, setHelpfulClicked] = useState(false);
  const [ansOpen, setAnsOpen] = useState(false);

  const handleQHelpful = (e) => {
    e.preventDefault();
    if (!helpfulClicked) {
      axios({
        method: 'put',
        url: `/qa/questions/${id}/helpful`,
      })
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
    <div className="question">
      <div className="q-body">
        <span className="q-body-text">Q: {body}</span>
        <span className="q-helpful">Helpful? <span className="q-help" onClick={handleQHelpful}><u>Yes</u> </span>
          ({helpfulness})  |  <u onClick={toggleAddAnswer} style={{ cursor: 'pointer' }}> Add Answer</u>
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
      <AnswerList answerList={answers} getQuestions={getQuestions} />
    </div>
  );
}

export default Question;
