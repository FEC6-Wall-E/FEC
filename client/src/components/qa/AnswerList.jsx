/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Answer from './Answer.jsx';

function AnswerList({ answerList }) {
  const [answerCount, setAnswerCount] = useState(2);
  const [moreAnswers, setMoreAnswers] = useState('See More Answers');

  const ansArr = [];
  Object.keys(answerList).forEach((key) => {
    ansArr.push(answerList[key]);
  });
  ansArr.sort((a, b) => b.helpfulness - a.helpfulness);

  const handleMoreAnswers = (e) => {
    e.preventDefault();
    if (answerCount === 2) {
      setAnswerCount(ansArr.length);
      setMoreAnswers('Collapse Answers');
    } else if (answerCount === ansArr.length) {
      setAnswerCount(2);
      setMoreAnswers('See More Answers');
    }
  };

  if (ansArr.length > 2) {
    return (
      <div id="AnswerList">
        {ansArr.slice(0, answerCount).map((answer) => (
          <Answer
            key={answer.id}
            body={answer.body}
            helpfulness={answer.helpfulness}
            name={answer.answerer_name}
            date={answer.date}
          />
        ))}
        <form onClick={handleMoreAnswers}>
          <span id="moreAnswers"><b>{moreAnswers}</b></span>
        </form>
      </div>
    );
  }
  return (
    <div id="AnswerList">
      {ansArr.slice(0, answerCount).map((answer) => (
        <Answer
          key={answer.id}
          body={answer.body}
          helpfulness={answer.helpfulness}
          name={answer.answerer_name}
          date={answer.date}
        />
      ))}
    </div>
  );
}

export default AnswerList;
