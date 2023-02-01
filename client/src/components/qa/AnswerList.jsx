import React from 'react';
import Answer from './Answer.jsx';

function AnswerList({ list }) { // list is an object of objects
  const ansArr = [];
  Object.keys(list).forEach((key) => {
    ansArr.push(list[key]);
  });
  return (
    <div>
      ----------List of answers----------
      {ansArr.map((answer) => (
        <Answer body={answer.body} key={answer.id} />
      ))}
    </div>
  );
}

export default AnswerList;
