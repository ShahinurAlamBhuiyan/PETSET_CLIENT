import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

import MemoryCard from '../../components/Memories/MemoryCard';
import MemoriesForm from '../../components/Memories/MemoriesForm';
import Pagination from '../../components/Pagination/Pagination';
import { AuthContext } from '../../Providers/AuthProvider';

const MemoriesPage = () => {
    const { loggedInUser } = useContext(AuthContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6);
    const [showForm, setShowForm] = useState(false); // State to control the visibility of the MemoriesForm modal
    const [memories, setMemories] = useState([]);

    // Fetching all memories --->
    useEffect(() => {
        const fetchAllMemories = async () => {
            try {
                const res = await axios.get("https://petset-server.vercel.app/api/memories");
                setMemories(res.data.memories);
            } catch (error) {
                console.log(error);
            }
        };
        fetchAllMemories();
        console.log('hit')
    }, [memories.length]);

    // Pagination part --->
    const totalPages = Math.ceil(memories.length / itemsPerPage);
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
        <div className='pb-5'>
            {loggedInUser.id && (
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
                </div>
            )}

            {!memories.length ? (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    No memories found.
                </div>
            ) : (
                <>
                    <MemoryCard memories={memories} currentPage={currentPage} itemsPerPage={itemsPerPage} />
                    <Pagination
                        currentPage={currentPage}
                        itemsPerPage={itemsPerPage}
                        setItemsPerPage={setItemsPerPage}
                        totalPages={totalPages}
                        handlePageChange={handlePageChange}
                    />
                </>
            )}
            {!loggedInUser.id && (
                <p className='mt-4' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <a href="/sign-in">Sign in </a>
                    - for share your own memory!
                </p>
            )}
        </div>
    );
};

export default MemoriesPage;
