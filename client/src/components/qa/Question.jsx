import React, { useState } from 'react';
import AnswerList from './AnswerList.jsx';
import AddAnswer from './AddAnswer.jsx';

function Question() {
  const [answerList, setAnswerList] = useState([3, 4]);

  return (
    <div>
      A question
      <AnswerList aList={answerList} />
      <AddAnswer />
    </div>
  );
}

export default Question;
