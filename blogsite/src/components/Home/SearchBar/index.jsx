import React from 'react'
import './style.css'
const SearchBar = ({value, handleSearchKey, clearSearch, formSubmit}) => {
  return (
    <div className='searchBar-wrap'>  
    <form onSubmit={formSubmit}>
        <input type="text" onChange={handleSearchKey} placeholder="Search by category" value={value} />
        {value && <span onClick={clearSearch}>X</span>}
        <button type="submit">Go</button>
    </form>
    </div>
  )
}

export default SearchBar