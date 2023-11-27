import React, { useEffect, useState } from 'react';

import MemoryCard from '../../components/Memories/MemoryCard';

const MemoriesPage = () => {
    const [data, setData] = useState([]);

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

    return (
        <div className='container'>
            <MemoryCard data={data} />
        </div>
    );
};

export default MemoriesPage;
