import React, { useEffect, useState } from 'react';

import MemoryCard from '../../components/Memories/MemoryCard';
import MemoriesForm from '../../components/Memories/MemoriesForm';

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
            <MemoriesForm />

            <MemoryCard data={data}  />
        </div>
    );
};

export default MemoriesPage;
