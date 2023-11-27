import React, { useEffect, useState } from 'react';

import MemoryCard from '../../components/Memories/MemoryCard';
import MemoriesForm from '../../components/Memories/MemoriesForm';
import Pagination from '../../components/Pagination/Pagination';

const MemoriesPage = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6);
    
    // fetching all memories--->
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    // Pagination part --->
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };






    return (
        <div className='container'>
            <MemoriesForm />
            <MemoryCard data={data} currentPage={currentPage} itemsPerPage={itemsPerPage} />
            <Pagination currentPage={currentPage} itemsPerPage={itemsPerPage} setItemsPerPage={setItemsPerPage} totalPages={totalPages} handlePageChange={handlePageChange} />
        </div>
    );
};

export default MemoriesPage;
