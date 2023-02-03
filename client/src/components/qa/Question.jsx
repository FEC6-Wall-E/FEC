/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import AnswerList from './AnswerList.jsx';

function Question({ body, answers, helpfulness }) {
  return (
    <div id="Question">
      <div id="qBody">
        <span id="qBodyText"><b>Q: </b>{body}</span><span id="qHelpful">Helpful? <u>Yes</u> ({helpfulness}) | <u>Add Answer</u></span>
      </div>
      <AnswerList answerList={answers} />
    </div>
  );
}

export default Question;
