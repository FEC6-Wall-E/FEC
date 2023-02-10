/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import api from './lib/qaRequests.js';

function AddAnswer({
  id, name, body, setAnsOpen, getQuestions, theme,
}) {
  const [images, setImages] = useState([]);
  const [answerInput, setAnswerInput] = useState('');
  const [answerName, setAnswerName] = useState('');
  const [answerEmail, setAnswerEmail] = useState('');

  const close = () => {
    setAnsOpen(false);
  };
  const handleAddAnswer = (e) => {
    e.preventDefault();
    api.postAnswer(answerInput, answerName, answerEmail, images, id)
      .then(() => {
        console.log('success');
        close();
        getQuestions();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleImg = (e) => {
    api.postImage(e.target.files[0])
      .then((result) => {
        setImages([...images, result.data.secure_url]);
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
            <h1 className="qa-add-title">Submit Your Answer </h1>
            <h2>{name}: {body}</h2>
            <form onSubmit={handleAddAnswer}>
              <h3>Your Answer <span style={{ color: 'red' }}>*</span></h3>
              <textarea
                className="qa-add-input"
                rows="5"
                cols="40"
                maxLength="1000"
                onChange={(e) => { setAnswerInput(e.target.value); }}
              />
              <h3>What is your nickname? <span style={{ color: 'red' }}>*</span></h3>
              <input
                className="qa-add-name"
                type="text"
                maxLength="60"
                placeholder="Example: jackson11!"
                onChange={(e) => { setAnswerName(e.target.value); }}
                required
              />
              <div className="qa-add-subtext">for privacy reasons, do not use your full name or email address</div>
              <h3>Your Email <span style={{ color: 'red' }}>*</span></h3>
              <input
                className="qa-add-email"
                type="email"
                maxLength="60"
                placeholder="Example: jack@email.com"
                onChange={(e) => { setAnswerEmail(e.target.value); }}
                required
              />
              <div className="qa-add-subtext">for authentication reasons, you will not be emailed</div>
              <h3>Upload your photos</h3>
              { images.length < 5 && (
                <input type="file" accept="image/*" onChange={handleImg} />
              )}
              <br />
              {images.map((image) => (
                <img
                  src={image}
                  alt="thumbnail"
                  className="ans-thumbnail"
                />
              ))}
              <br /> <br />
              <button type="submit" className="qa-add-submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddAnswer;
