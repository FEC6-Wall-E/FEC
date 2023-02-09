/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Answer from './Answer.jsx';

function AnswerList({ answerList, getQuestions, theme }) {
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

  return (
    <div className={`answer-list ${theme}`}>
      {ansArr.slice(0, answerCount).map((answer) => (
        <Answer
          key={answer.id}
          answer={answer}
          getQuestions={getQuestions}
          theme={theme}
        />
      ))}
      { ansArr.length > 2
      && (
      <form>
        <span onClick={handleMoreAnswers} className={`more-answers ${theme}`}>{moreAnswers}</span>
      </form>
      )}
    </div>
  );
}

export default AnswerList;
