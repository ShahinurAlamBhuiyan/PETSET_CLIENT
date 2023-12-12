import React, { useState } from 'react';
import './Store.css';

const SearchStoreProduct = ({ handleSearch, handleClear, searchQuery, setSearchResults }) => {
    const [localSearchQuery, setLocalSearchQuery] = useState('');

    const handleLocalSearchChange = (event) => {
        setLocalSearchQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleSearch(localSearchQuery);
    };

    return (
        <div className="container mt-2 mb-2">
            <form onSubmit={handleSubmit} className="search-form">
                <input
                    type="text"
                    placeholder="Search Product..."
                    value={localSearchQuery}
                    onChange={handleLocalSearchChange}
                    className="search-input"
                />
                <button type="submit" className="search-button">
                    Search
                </button>
                <button type="button" onClick={handleClear} className="clear-button">
                    Clear
                </button>
            </form>
        </div>
    );
};

export default SearchStoreProduct;
