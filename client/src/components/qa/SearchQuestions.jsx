import React from 'react';

function SearchQuestions({ setSearchInput }) {
  return (
    <form id="search-questions" onSubmit={(e) => { e.preventDefault(); }}>
      <input
        id="search-bar"
        type="text"
        onChange={(e) => { setSearchInput(e.target.value); }}
        onFocus={(e) => { e.target.value = ''; }}
        placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
      />
    </form>
  );
}

export default SearchQuestions;
