import React from 'react';

function SearchQuestions({ setSearchInput, theme }) {
  return (
    <form data-testid="SEARCHQUESTIONS" className={`search-questions ${theme}`} onSubmit={(e) => { e.preventDefault(); }}>
      <input
        data-testid="SEARCHBAR"
        className={`search-bar ${theme}`}
        type="text"
        onChange={(e) => { setSearchInput(e.target.value); }}
        onFocus={(e) => { e.target.value = ''; }}
        placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
      />
    </form>
  );
}

export default SearchQuestions;
