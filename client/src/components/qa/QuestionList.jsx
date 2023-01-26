import React from 'react';
import Question from './Question.jsx';

function QuestionList({ qList }) {
  return (
    <div>
      List of questions
      {qList.map((question) => (
        <Question key={question} />
      ))}
    </div>

  );
}

export default QuestionList;
