/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchQuestions from './SearchQuestions.jsx';
import QuestionList from './QuestionList.jsx';
import AddQuestion from './AddQuestion.jsx';
import handleInteraction from '../../handleInteraction.js';

function QandA({ product }) {
  const [questionList, setQuestionList] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [questOpen, setQuestOpen] = useState(false);

  const filterByAnswers = (questions) => {
    const ans = questions.filter((question) => {
      if (Object.keys(question.answers).length > 0) {
        return true;
      }
      return false;
    });
    setFilteredQuestions(ans);
  };

  const filterBySearch = () => {
    if (searchInput.length >= 3) {
      const searched = questionList.filter((question) => question.question_body.toUpperCase()
        .includes(searchInput.toUpperCase()));
      if (searched.length === 0) {
        // eslint-disable-next-line no-alert, no-undef
        alert('No questions matched your search, try again');
      } else {
        setFilteredQuestions(searched);
      }
    } else {
      filterByAnswers(questionList);
    }
  };
  // const productId = 40383;
  const getQuestions = () => {
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
  };
  const toggleAddQuestion = (e) => {
    e.preventDefault();
    setQuestOpen(true);
  };

  useEffect(() => {
    getQuestions();
  }, []);

  useEffect(() => {
    filterBySearch();
  }, [searchInput]);

  if (questionList.length === 0) {
    return (
      <div onClick={(e) => handleInteraction(e, 'QANDA')} id="QandA">
        <h3>Questions and Answers</h3>
        <button onClick={toggleAddQuestion}>Add question</button>
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
  return (
    <div onClick={(e) => handleInteraction(e, 'QANDA')} id="QandA">
      <h3>Questions and Answers</h3>
      <SearchQuestions setSearchInput={setSearchInput} />
      <QuestionList
        questionList={filteredQuestions.length > 0 ? filteredQuestions : questionList}
        getQuestions={getQuestions}
        product={product}
        toggleAddQuestion={toggleAddQuestion}
        questOpen={questOpen}
        setQuestOpen={setQuestOpen}
      />
    </div>
  );
}

export default QandA;
