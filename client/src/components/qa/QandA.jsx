/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchQuestions from './SearchQuestions.jsx';
import QuestionList from './QuestionList.jsx';
import MoreAnswers from './MoreAnswers.jsx';
import AddQuestion from './AddQuestion.jsx';

function QandA({ product }) {
  const [questionList, setQuestionList] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const filterByAnswers = (questions) => {
    const ans = questions.filter((question) => {
      if (Object.keys(question.answers).length > 0) {
        return true;
      }
      return false;
    });
    setFilteredQuestions(ans);
  };

  // const productId = 40383;

  useEffect(() => {
    axios({
      method: 'GET',
      url: `/qa/questions?product_id=${product.id}&page=1&count=200`,
    })
      .then((res) => {
        const sorted = res.data.results.sort((a, b) => b.helpfulness - a.helpfulness);
        setQuestionList(sorted);
        filterByAnswers(sorted);
      })
      .catch((err) => {
        console.error('Error getting questions for this product', err);
      });
  }, []);

  useEffect(() => {
    if (searchInput.length >= 3) {
      const searched = questionList.filter((question) => question.question_body.toUpperCase()
        .includes(searchInput.toUpperCase()));
      setFilteredQuestions(searched);
    } else {
      filterByAnswers(questionList);
    }
  }, [searchInput]);

  if (questionList.length === 0) {
    return (
      <div id="QandA">
        <h3>Questions and Answers</h3>
        <AddQuestion />
      </div>
    );
  }
  return (
    <div id="QandA">
      <h3>Questions and Answers</h3>
      <SearchQuestions setSearchInput={setSearchInput} />
      <QuestionList
        questionList={filteredQuestions.length > 0 ? filteredQuestions : questionList}
      />
      <AddQuestion />
    </div>
  );
}

export default QandA;
