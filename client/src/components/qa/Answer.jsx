/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import axios from 'axios';
import { parseISO, format } from 'date-fns';

function Answer({
  id, body, helpfulness, name, date, getQuestions,
}) {
  const [ansHelpfulClicked, setAnsHelpfulClicked] = useState(false);
  const handleAHelpful = (e) => {
    e.preventDefault();
    if (!ansHelpfulClicked) {
      axios({
        method: 'put',
        url: `/qa/answers/${id}/helpful`,
      })
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
    axios({
      method: 'put',
      url: `/qa/answers/${id}/report`,
    })
      .then(() => {
        alert('Answer reported!');
        getQuestions();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="answer">
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
