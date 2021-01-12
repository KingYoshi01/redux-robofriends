import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <div className='pa2'>
      <input 
        aria-label="Search RoboFriends"
        className="pa3 ba b--green bg-lightest-blue"
        type="search" 
        placeholder="Search Robot Friends"
        onChange={searchChange} 
      />
    </div>
  );
}

export default SearchBox;