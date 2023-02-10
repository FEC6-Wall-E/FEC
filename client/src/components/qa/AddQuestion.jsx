/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import api from './lib/qaRequests.js';

function AddQuestion({
  name, id, setQuestOpen, getQuestions, theme,
}) {
  const [questionInput, setQuestionInput] = useState('');
  const [questionName, setQuestionName] = useState('');
  const [questionEmail, setQuestionEmail] = useState('');

  const close = () => {
    setQuestOpen(false);
  };
  const handleAddQuestion = (e) => {
    e.preventDefault();
    api.postQuestion(questionInput, questionName, questionEmail, id)
      .then(() => {
        console.log('success');
        close();
        getQuestions();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className={`qa-modal-shadow ${theme}`} onClick={close} />
      <div className={`qa-modal ${theme}`}>
        <div className={`qa-modal-content ${theme}`}>
          <span onClick={close} className={`close-button ${theme}`}>&times;</span>
          <div>
            <h1 className={`qa-add-title ${theme}`}>Ask Your Question </h1>
            <h2>About: {name}</h2>
            <form onSubmit={handleAddQuestion}>
              <span>(<span style={{ color: 'red' }}>*</span>) Mandatory</span>
              <h3>Your question <span style={{ color: 'red' }}>*</span></h3>
              <textarea
                className={`qa-add-input ${theme}`}
                rows="5"
                cols="40"
                maxLength="1000"
                placeholder="Why did you like the product or not?"
                onChange={(e) => { setQuestionInput(e.target.value); }}
              />
              <h3>What is your nickname? <span style={{ color: 'red' }}>*</span></h3>
              <input
                className={`qa-add-name ${theme}`}
                type="text"
                maxLength="60"
                placeholder="Example: jackson11!"
                onChange={(e) => { setQuestionName(e.target.value); }}
                required
              />
              <div className={`qa-add-subtext ${theme}`}>for privacy reasons, do not use your full name or email address</div>
              <h3>Your email <span style={{ color: 'red' }}>*</span></h3>
              <input
                className={`qa-add-email ${theme}`}
                type="email"
                maxLength="60"
                placeholder="Example: jack@email.com"
                onChange={(e) => { setQuestionEmail(e.target.value); }}
                required
              />
              <div className={`qa-add-subtext ${theme}`}>for authentication reasons, you will not be emailed</div>
              <button type="submit" className="qa-add-submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddQuestion;
