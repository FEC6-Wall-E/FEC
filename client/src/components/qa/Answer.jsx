/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { parseISO, format } from 'date-fns';

function Answer({
  body, helpfulness, name, date,
}) {
  return (
    <div id="Answer">
      <span id="aBody"><b>A: </b>{body}</span>
      <br />
      <span id="aHelpful">
        by {name}, {format(parseISO(date), 'MMMM dd, yyyy')}  |
        Helpful? <u>Yes</u> ({helpfulness})  |  <u>Report</u>
      </span>
    </div>
  );
}

export default Answer;
