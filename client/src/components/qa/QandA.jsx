import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchQuestions from './SearchQuestions.jsx';
import QuestionList from './QuestionList.jsx';
import MoreAnswers from './MoreAnswers.jsx';
import AddQuestion from './AddQuestion.jsx';

function QandA() {
  // eslint-disable-next-line no-unused-vars
  const [questionList, setQuestionList] = useState([]);

  //  product ID will get passed in as a prop to QandA
  //    on page load, get question list from API using product ID
  //    setQuestionList to passed in question list
  //  for now using hardcoded url: http://localhost:3000/qa/questions?product_id=40383

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'http://localhost:3000/qa/questions?product_id=40383',
    })
      .then((res) => {
        setQuestionList(res.data.results);
      })
      .catch((err) => {
        console.log('Error getting questions for this product', err);
      });
  }, []);

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
