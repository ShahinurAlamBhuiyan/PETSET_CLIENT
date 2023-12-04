import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import './StorePage.css';
import Medicine from '../../components/Store/Medicine/Medicine';
import Food from '../../components/Store/Food/Food';
import Toy from '../../components/Store/Toy/Toy';

const StorePage = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className='container mt-5'>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="search-input"
                />
            </div>
            <Tabs
                defaultActiveKey="medicine"
                id="justify-tab-example"
                className="mb-3 custom-tabs"
                justify
                variant='tabs'
            >
                <Tab eventKey="medicine" title="Medicine" >
                    <Medicine />
                </Tab>
                <Tab eventKey="food" title="Food">
                    <Food />
                </Tab>
                <Tab eventKey="toy" title="Toy">
                    <Toy />
                </Tab>
            </Tabs>
        </div>
    );
};

export default StorePage;
