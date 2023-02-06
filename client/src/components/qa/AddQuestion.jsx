/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import axios from 'axios';

function AddQuestion({
  name, id, setQuestOpen, getQuestions,
}) {
  const [questionInput, setQuestionInput] = useState('');
  const [nickname, setNickname] = useState('');
  const [emailInput, setEmailInput] = useState('');

  const close = () => {
    setQuestOpen(false);
  };
  const handleAddQuestion = (e) => {
    e.preventDefault();
    axios({
      method: 'post',
      url: '/qa/questions',
      data: {
        body: questionInput,
        name: nickname,
        email: emailInput,
        product_id: id,
      },
    })
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
      {/* <span onClick={close} className="close-button">&times;</span> */}
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
          onChange={(e) => { setNickname(e.target.value); }}
          required
        />
        <h4>For privacy reasons, do not use your full name or email address</h4>
        <input
          type="email"
          maxLength="60"
          placeholder="Example: jack@email.com"
          onChange={(e) => { setEmailInput(e.target.value); }}
          required
        />
        <h4>For authentication reasons, you will not be emailed</h4>
        <button type="submit">Submit</button>
      </form>
    </div>,
  );

  return (
    <div>
      <div className="qaModalShadow" onClick={close} />
      <div className="qaModal">
        <div className="qaModalContent">
          <span onClick={close} className="close-button">&times;</span>
          {content}
        </div>
      </div>
    </div>
  );
}

export default AddQuestion;
