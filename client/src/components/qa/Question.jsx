/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import AnswerList from './AnswerList.jsx';
import AddAnswer from './AddAnswer.jsx';
import api from './lib/qaRequests.js';

function Question({
  question, name, getQuestions, theme,
}) {
  const [helpfulClicked, setHelpfulClicked] = useState(false);
  const [ansOpen, setAnsOpen] = useState(false);
  const [accDisplay, setAccDisplay] = useState(0);
  const [accordion, setAccordion] = useState('+');

  const handleQHelpful = (e) => {
    e.preventDefault();
    if (!helpfulClicked) {
      api.putQHelpful(question.question_id)
        .then(() => {
          getQuestions();
        })
        .then(() => {
          setHelpfulClicked(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const toggleAddAnswer = (e) => {
    e.preventDefault();
    setAnsOpen(true);
  };

  const handleAccordion = (e) => {
    e.preventDefault();
    if (accDisplay) {
      setAccDisplay(0);
      setAccordion('+');
    } else {
      setAccDisplay('50vh');
      setAccordion('-');
    }
  };
  return (
    <div data-testid="question" className={`question ${theme}`}>
      <div className="q-body">
        <span className="q-body-text"><b>Q:</b> {question.question_body}</span>
        <button className="q-accordion" onClick={handleAccordion}>{accordion}</button>
        <span className="q-helpful">Helpful? <span className="q-help" onClick={handleQHelpful}><u>Yes</u> </span>
          ({question.question_helpfulness})  |  <u className="add-answer" onClick={toggleAddAnswer}> Add Answer</u>
        </span>
        { ansOpen && (
          <AddAnswer
            key={question.question_id}
            id={question.question_id}
            name={name}
            body={question.question_body}
            setAnsOpen={setAnsOpen}
            getQuestions={getQuestions}
            theme={theme}
          />
        )}
      </div>
      <div className="q-panel" style={{ 'max-height': `${accDisplay}` }}>
        <AnswerList
          answerList={question.answers}
          getQuestions={getQuestions}
          theme={theme}
        />
      </div>
    </div>
  );
}

export default Question;
