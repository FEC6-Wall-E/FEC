/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchQuestions from './SearchQuestions.jsx';
import QuestionList from './QuestionList.jsx';
import AddQuestion from './AddQuestion.jsx';
import api from './lib/qaRequests.js';
import handleInteraction from '../../handleInteraction.js';

function QandA({ product, theme }) {
  const [questionList, setQuestionList] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [noMatch, setNoMatch] = useState(false);
  const [questOpen, setQuestOpen] = useState(false);
  const [questionCount, setQuestionCount] = useState(2);

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
        // alert('No questions matched your search, try again');
        setNoMatch(true);
      } else {
        setFilteredQuestions(searched);
      }
    } else {
      filterByAnswers(questionList);
    }
  };

  const getQuestions = () => {
    api.getQuestionsByID(product.id)
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
    setNoMatch(false);
    filterBySearch();
  }, [searchInput]);

  if (questionList.length === 0) {
    return (
      <div onClick={(e) => handleInteraction(e, 'QANDA')} data-testid="QANDA" className={`q-and-a ${theme}`}>
        <h3 className={`qa-header ${theme}`}>QUESTIONS & ANSWERS</h3>
        <button onClick={toggleAddQuestion}>Add question</button>
        { questOpen && searchInput.length >= 3 && (
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
    <div onClick={(e) => handleInteraction(e, 'QANDA')} data-testid="QANDA" className={`q-and-a ${theme}`}>
      <h3 className={`qa-header ${theme}`}>QUESTIONS & ANSWERS</h3>
      <SearchQuestions setSearchInput={setSearchInput} theme={theme} />
      { noMatch === true && (
        <div className="search-res">No questions matched your search, try again</div>
      )}
      <QuestionList
        questionList={filteredQuestions.length > 0 ? filteredQuestions : questionList}
        getQuestions={getQuestions}
        product={product}
        questionCount={questionCount}
        theme={theme}
      />
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
          key={product.id}
          id={product.id}
          name={product.name}
          setQuestOpen={setQuestOpen}
          getQuestions={getQuestions}
          theme={theme}
        />
      )}
    </div>
  );
}

export default QandA;
