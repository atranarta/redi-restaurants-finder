import React from 'react';

import './Header.scss';

const Search = () => {
  return (
    <div className="searcField">
      <input className="search" type="text" />
      <button><i class="fa fa-search"></i></button>
    </div>
  )
}

export default Search;