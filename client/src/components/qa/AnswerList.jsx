import React from 'react';
import Answer from './Answer.jsx';

function AnswerList({ aList }) {
  return (
    <div>
      List of answers
      {aList.map((answer) => (
        <Answer key={answer} />
      ))}
    </div>
  );
}

export default AnswerList;
