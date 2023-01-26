import React, { useState } from 'react';
import SearchQuestions from './SearchQuestions.jsx';
import QuestionList from './QuestionList.jsx';
import MoreAnswers from './MoreAnswers.jsx';
import AddQuestion from './AddQuestion.jsx';

function QandA() {
  const [questionList, setQuestionList] = useState([1, 2]);

  return (
    <div>
      <b>Questions and Answers</b>
      <SearchQuestions />
      <QuestionList qList={questionList} />
      <MoreAnswers />
      <AddQuestion />
    </div>
  );
}

export default QandA;
