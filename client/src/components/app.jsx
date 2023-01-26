import React from 'react';
import Overview from './overview/index.jsx';

function App(props) {
  const test = { name: 'test ' };
  return (
    <div>
      <Overview product={test} />
      Hello World
    </div>
  );
}

export default App;
