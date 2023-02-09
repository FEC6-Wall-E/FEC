/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import api from './lib/qaRequests.js';

function AddQuestion({
  name, id, setQuestOpen, getQuestions,
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
  const content = new Array(1).fill(
    <div>
      <h1>Ask Your Question </h1>
      <h2>About the {name}</h2>
      <form onSubmit={handleAddQuestion}>
        <h3>Your question: </h3>
        <input
          type="text"
          maxLength="1000"
          placeholder="Why did you like the product or not?"
          onChange={(e) => { setQuestionInput(e.target.value); }}
          required
        />
        <h3>What is your nickname?</h3>
        <input
          type="text"
          maxLength="60"
          placeholder="Example: jackson11!"
          onChange={(e) => { setQuestionName(e.target.value); }}
          required
        />
        <h4>For privacy reasons, do not use your full name or email address</h4>
        <input
          type="email"
          maxLength="60"
          placeholder="Example: jack@email.com"
          onChange={(e) => { setQuestionEmail(e.target.value); }}
          required
        />
        <h4>For authentication reasons, you will not be emailed</h4>
        <button type="submit">Submit</button>
      </form>
    </div>,
  );

  return (
    <div>
      <div className="qa-modal-shadow" onClick={close} />
      <div className="qa-modal">
        <div className="qa-modal-content">
          <span onClick={close} className="close-button">&times;</span>
          {content}
        </div>
      </div>
    </div>
  );
}

export default AddQuestion;
