import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import axios from 'axios';
import '../../components/Store/Store.css';
import Medicine from '../../components/Store/Medicine';
import Food from '../../components/Store/Food';
import Toy from '../../components/Store/Toy';
import SearchStoreProduct from '../../components/Store/SearchStoreProduct';
import ProductCard from '../../components/Store/ProductCard';

const StorePage = () => {
    const [searchQuery, setSearchQuery] = useState(null);
    const [searchResults, setSearchResults] = useState([]);

    const handleSearchChange = (value) => {
        setSearchQuery(value);
    };

    const handleSearch = async (query) => {
        try {
            const response = await axios.get(`https://petset-server.vercel.app/api/products/search?query=${query}`);
            setSearchResults(response.data.products);
        } catch (error) {
            console.error('Error searching products:', error);
        }
    };

    const handleClear = () => {
        setSearchQuery('');
        setSearchResults([])
    };
    console.log(searchResults)
    return (
        <div className='container mt-5'>
            <SearchStoreProduct
                handleSearchChange={handleSearchChange}
                handleSearch={handleSearch}
                handleClear={handleClear}
                searchQuery={searchQuery}
                setSearchResults={setSearchResults}
            />

            {searchResults[0] ? (
                <div>
                    <p>Search Results for: {searchQuery}</p>
                    <ul className='centering_items_flex'>
                        {searchResults && searchResults.map((product, index) => (
                            <ProductCard key={index} product={product} />
                        ))}
                    </ul>
                </div>
            ) : (
                <Tabs
                    defaultActiveKey="toy"
                    id="justify-tab-example"
                    className="mb-3 custom-tabs"
                    justify
                    variant='tabs'
                >
                    <Tab eventKey="toy" title="Toy">
                        <Toy />
                    </Tab>
                    <Tab eventKey="medicine" title="Medicine">
                        <Medicine />
                    </Tab>
                    <Tab eventKey="food" title="Food">
                        <Food />
                    </Tab>
                </Tabs>
            )}
        </div>
    );
};

export default StorePage;
