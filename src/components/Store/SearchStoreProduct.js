import React, { useState } from 'react'
import './Store.css'

const SearchStoreProduct = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };
    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="search-input"
            />
        </div>
    )
}

export default SearchStoreProduct