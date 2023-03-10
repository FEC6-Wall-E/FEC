/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import { parseISO, format } from 'date-fns';
import api from './lib/qaRequests.js';
import Photo from './Photo.jsx';

function Answer({
  answer, getQuestions, theme,
}) {
  const [ansHelpfulClicked, setAnsHelpfulClicked] = useState(false);
  const [report, setReport] = useState('Report');
  const handleAHelpful = (e) => {
    e.preventDefault();
    if (!ansHelpfulClicked) {
      api.putAHelpful(answer.id)
        .then(() => {
          getQuestions();
        })
        .then(() => {
          setAnsHelpfulClicked(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const handleAReport = (e) => {
    e.preventDefault();
    api.putAReport(answer.id)
      .then(() => {
        setReport('Reported');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let name;
  if (answer.answerer_name === 'Seller') {
    name = <b>{answer.answerer_name}</b>;
  } else {
    name = answer.answerer_name;
  }

  return (
    <div className={`answer ${theme}`}>
      <span className="a-body"><b>A: </b>{answer.body}</span>
      <br />
      <span className="a-helpful">
        by {name}, {format(parseISO(answer.date), 'MMMM dd, yyyy')}  |
        Helpful? <span className="a-help" onClick={handleAHelpful}><u>Yes</u></span> ({answer.helpfulness}) {'  |  '}
        <span className="a-report" onClick={handleAReport}><u>{report}</u></span>
      </span>
      <br />
      <span className="a-photos">
        {answer.photos.map((photo) => (
          <Photo photo={photo} />
        ))}
      </span>
    </div>
  );
}

export default Answer;
