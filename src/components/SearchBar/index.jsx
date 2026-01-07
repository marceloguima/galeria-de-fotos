import React from 'react'
import "./style.css"

// icones
import { FaSearch } from "react-icons/fa";


const SearchBar = () => {
  return (
    <div className="div-search-bar">
      <input type="text" placeholder="Buscar..." />
      <button className="button-search"><FaSearch />
</button>
    </div>
  )
}

export default SearchBar
