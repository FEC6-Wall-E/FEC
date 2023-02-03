import React from 'react';

function SearchQuestions({ setSearchInput }) {
  return (
    <form id="SearchQuestions" onSubmit={(e) => { e.preventDefault(); }}>
      <input id="SearchBar" type="text" onChange={(e) => { setSearchInput(e.target.value); }} placeholder="Have a question? Search for answers..." />
    </form>
  );
}

export default SearchQuestions;
