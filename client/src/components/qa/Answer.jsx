/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import { parseISO, format } from 'date-fns';
import api from './lib/qaRequests.js';

function Answer({
  id, body, helpfulness, name, date, getQuestions, theme,
}) {
  const [ansHelpfulClicked, setAnsHelpfulClicked] = useState(false);
  const handleAHelpful = (e) => {
    e.preventDefault();
    if (!ansHelpfulClicked) {
      api.putAHelpful(id)
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
    api.putAReport(id)
      .then(() => {
        alert('Answer reported!');
        getQuestions();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className={`answer ${theme}`}>
      <span className="a-body"><b>A: </b>{body}</span>
      <br />
      <span className="a-helpful">
        by {name}, {format(parseISO(date), 'MMMM dd, yyyy')}  |
        Helpful? <span className="a-help" onClick={handleAHelpful}><u>Yes</u></span> ({helpfulness}) {'  |  '}
        <span className="a-report" onClick={handleAReport}><u>Report</u></span>
      </span>
    </div>
  );
}

export default Answer;
