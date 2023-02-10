/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Question from './Question.jsx';
import AddQuestion from './AddQuestion.jsx';

function QuestionList({
  questionList, getQuestions, product, questionCount, theme,
}) {
  return (
    <div className={`question-list ${theme}`}>
      {questionList.slice(0, questionCount).map((question) => (
        <Question
          key={question.question_id}
          name={product.name}
          question={question}
          getQuestions={getQuestions}
          theme={theme}
        />
      ))}
    </div>
  );
}

export default QuestionList;
