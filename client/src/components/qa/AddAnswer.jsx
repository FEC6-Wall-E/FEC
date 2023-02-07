/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import axios from 'axios';

function AddAnswer({
  id, name, body, setAnsOpen, getQuestions,
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
    axios({
      method: 'post',
      url: `/qa/questions/${id}/answers?${id}`,
      data: {
        body: answerInput,
        name: answerName,
        email: answerEmail,
        photos: images,
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
  const handleImg = (e) => {
    setImages([...images, URL.createObjectURL(e.target.files[0])]);
  };

  const content = new Array(1).fill(
    <div>
      <h1>Submit Your Answer </h1>
      <h2>{name}: {body}</h2>
      <form onSubmit={handleAddAnswer}>
        <h3>Your Answer: </h3>
        <input
          type="text"
          maxLength="1000"
          onChange={(e) => { setAnswerInput(e.target.value); }}
          required
        />
        <h3>What is your nickname?</h3>
        <input
          type="text"
          maxLength="60"
          placeholder="Example: jackson11!"
          onChange={(e) => { setAnswerName(e.target.value); }}
          required
        />
        <h4>For privacy reasons, do not use your full name or email address</h4>
        <input
          type="email"
          maxLength="60"
          placeholder="Example: jack@email.com"
          onChange={(e) => { setAnswerEmail(e.target.value); }}
          required
        />
        <h4>For authentication reasons, you will not be emailed</h4>
        { images.length < 5 && (
          <input type="file" accept="image/*" onChange={handleImg} />
        )}
        <br />
        {images.map((image) => (
          <img
            src={image}
            alt="thumbnail"
            className="ansThumbnail"
          />
        ))}
        <br /> <br />
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

export default AddAnswer;
