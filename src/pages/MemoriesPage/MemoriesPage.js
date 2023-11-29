import React, { useEffect, useState } from 'react';
import { Spinner, Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';


import MemoryCard from '../../components/Memories/MemoryCard';
import MemoriesForm from '../../components/Memories/MemoriesForm';
import Pagination from '../../components/Pagination/Pagination';

const MemoriesPage = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6);
    const [showForm, setShowForm] = useState(false); // State to control the visibility of the MemoriesForm modal

    // Fetching all memories --->
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

    // Function to show the MemoriesForm modal
    const handleShowForm = () => {
        setShowForm(true);
    };

    // Function to hide the MemoriesForm modal
    const handleCloseForm = () => {
        setShowForm(false);
    };

    return (
        <>
            {!data.length && (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Spinner animation='border' />
                </div>
            )}
            {data.length && (
                <div className='container' style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column' }}>
                    <Button
                        onClick={handleShowForm}
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginTop: '20px' }} variant='outline-primary'
                    >
                        <FontAwesomeIcon className="font-weight-normal text-secondary " icon={faUpload} />
                        SHARE YOUR MEMORY
                    </Button>
                    <Modal show={showForm} onHide={handleCloseForm}>
                        <Modal.Header closeLabel='cancel'>
                            <Modal.Title>Upload Memory</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <MemoriesForm setShowForm={setShowForm} />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseForm}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    <MemoryCard data={data} currentPage={currentPage} itemsPerPage={itemsPerPage} />
                    <Pagination
                        currentPage={currentPage}
                        itemsPerPage={itemsPerPage}
                        setItemsPerPage={setItemsPerPage}
                        totalPages={totalPages}
                        handlePageChange={handlePageChange}
                    />
                </div>
            )}
        </>
    );
};

export default MemoriesPage;
