/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Question from './Question.jsx';

function QuestionList({ questionList }) {
  const [questionCount, setQuestionCount] = useState(2);

  if (questionCount >= questionList.length) {
    return (
      <div id="QuestionList">
        {questionList.slice(0, questionCount).map((question) => (
          <Question
            body={question.question_body}
            helpfulness={question.question_helpfulness}
            key={question.question_id}
            answers={question.answers}
          />
        ))}
      </div>
    );
  }
  return (
    <div id="QuestionList">
      {questionList.slice(0, questionCount).map((question) => (
        <Question
          body={question.question_body}
          helpfulness={question.question_helpfulness}
          key={question.question_id}
          answers={question.answers}
        />
      ))}
      <button onClick={(e) => { setQuestionCount(questionCount + 2); }}>
        More Answered Questions
      </button>
    </div>
  );
}

export default QuestionList;
