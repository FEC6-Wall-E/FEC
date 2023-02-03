/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import axios from 'axios';
import AnswerList from './AnswerList.jsx';

function Question({
  body, answers, helpfulness, id, getQuestions,
}) {
  const [helpfulClicked, setHelpfulClicked] = useState(false);
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
  return (
    <div id="Question">
      <div id="qBody">
        <span id="qBodyText"><b>Q: </b>{body}</span>
        <span id="qHelpful">Helpful? <span id="qHelp" onClick={handleQHelpful}><u>Yes</u> </span>
          ({helpfulness})  | <u>Add Answer</u>
        </span>
      </div>
      <AnswerList answerList={answers} getQuestions={getQuestions} />
    </div>
  );
}

export default Question;
