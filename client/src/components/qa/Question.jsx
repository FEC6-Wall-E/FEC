import React, { useState } from 'react';
// import axios from 'axios';
import AnswerList from './AnswerList.jsx';
import AddAnswer from './AddAnswer.jsx';

function Question({ body, answers }) {
  // eslint-disable-next-line no-unused-vars
  const [answerList, setAnswerList] = useState(answers);
  //  use question ID to make a get request to API on load
  //    setAnswerList to passed in answer list

  // answers already exists in the question object, no need to get again??
  // useEffect(() => {
  //   axios({
  //     method: 'GET',
  //     url: 'http://localhost:3000/qa/329323/answers',
  //   })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log('Error getting answers for this question', err);
  //     });
  // }, []);

  return (
    <div>
      <p>
        <b>Q:</b>
        {' '}
        {body}
      </p>
      <AnswerList list={answerList} />
      <AddAnswer />
    </div>
  );
}

export default Question;
