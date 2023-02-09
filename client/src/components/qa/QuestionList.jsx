/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Question from './Question.jsx';
import AddQuestion from './AddQuestion.jsx';

function QuestionList({
  questionList, getQuestions, product, toggleAddQuestion, questOpen, setQuestOpen, theme,
}) {
  const [questionCount, setQuestionCount] = useState(2);
  return (
    <div className={`question-list ${theme}`}>
      {questionList.slice(0, questionCount).map((question) => (
        <Question
          key={question.question_id}
          body={question.question_body}
          helpfulness={question.question_helpfulness}
          id={question.question_id}
          name={product.name}
          answers={question.answers}
          getQuestions={getQuestions}
          theme={theme}
        />
      ))}
      { questionCount < questionList.length && (
      <button
        onClick={(e) => { setQuestionCount(questionCount + 2); }}
        className={`more-questions ${theme}`}
        data-testid="more-questions"
      >
        MORE ANSWERED QUESTIONS
      </button>
      )}
      <button
        onClick={toggleAddQuestion}
        className={`add-question ${theme}`}
      >
        ADD QUESTION
      </button>
      { questOpen && (
        <AddQuestion
          name={product.name}
          id={product.id}
          setQuestOpen={setQuestOpen}
          getQuestions={getQuestions}
        />
      )}
    </div>
  );
}

export default QuestionList;
