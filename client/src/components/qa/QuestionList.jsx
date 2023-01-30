import React from 'react';
import Question from './Question.jsx';

function QuestionList({ qList }) {
  return (
    <div>
      -----------------List of questions-----------------
      {qList.map((question) => (
        <Question
          body={question.question_body}
          key={question.question_id}
          answers={question.answers}
        />
      ))}
    </div>

  );
}

export default QuestionList;
