import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import './StorePage.css';
import Medicine from '../../components/Store/Medicine';
import Food from '../../components/Store/Food';
import Toy from '../../components/Store/Toy';
import SearchStoreProduct from '../../components/Store/SearchStoreProduct';

const StorePage = () => {

    return (
        <div className='container mt-5'>
            <SearchStoreProduct />
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
