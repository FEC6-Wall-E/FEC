import React from 'react';
import Overview from './overview/index.jsx';
import QandA from './qa/QandA.jsx';

function App() {
  const test = { name: 'test ' };
  return (
    <div>
      <Overview product={test} />
      Hello World
      <QandA />
    </div>
  );
}

export default App;
