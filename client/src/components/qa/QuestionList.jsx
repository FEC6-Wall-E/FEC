/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Question from './Question.jsx';
import AddQuestion from './AddQuestion.jsx';

function QuestionList({ questionList, getQuestions }) {
  const [questionCount, setQuestionCount] = useState(2);

  if (questionCount >= questionList.length) {
    return (
      <div id="QuestionList">
        {questionList.slice(0, questionCount).map((question) => (
          <Question
            body={question.question_body}
            helpfulness={question.question_helpfulness}
            id={question.question_id}
            key={question.question_id}
            answers={question.answers}
            getQuestions={getQuestions}
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
          id={question.question_id}
          key={question.question_id}
          answers={question.answers}
          getQuestions={getQuestions}
        />
      ))}
      <button onClick={(e) => { setQuestionCount(questionCount + 2); }}>
        More Answered Questions
      </button>
      <AddQuestion />
    </div>
  );
}

export default QuestionList;
