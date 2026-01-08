import React from "react";
import "./style.css";

// icones
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onClick, onChange, value }) => {
    return (
        <div className="div-search-bar">
            <input
                type="text"
                placeholder="Buscar..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
            <button className="button-search" onClick={() => onClick(value)}>
                <FaSearch />
            </button>
        </div>
    );
};

export default SearchBar;
