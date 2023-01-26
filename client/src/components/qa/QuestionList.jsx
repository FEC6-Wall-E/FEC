import React from 'react';
import Question from './Question.jsx';

function QuestionList({ list }) {
  return (
    <div>
      List of questions
      {list.map((question) => (
        <Question key={question} />
      ))}
    </div>

  );
}

export default QuestionList;
