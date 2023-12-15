import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Spinner, Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

import AdaptationCard from '../../components/Adaptation/AdaptationCard';
import AdaptationForm from '../../components/Adaptation/AdaptationForm';
import Pagination from '../../components/Pagination/Pagination';
import { AuthContext } from '../../Providers/AuthProvider'

const AdaptationPage = () => {
  const { loggedInUser } = useContext(AuthContext);
  const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6);
    const [showForm, setShowForm] = useState(false); // State to control the visibility of the adaptationPostsForm modal
    const [adaptationPosts, setAdaptationPosts] = useState([]);


    // Fetching all adaptation posts --->
    useEffect(() => {
        const fetchAllAdaptationPosts = async () => {
            try {
                const res = await axios.get("http://localhost:8800/adaptions")
                setAdaptationPosts(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchAllAdaptationPosts()
    }, [adaptationPosts.length])

    // Pagination part --->
    const totalPages = Math.ceil(adaptationPosts.length / itemsPerPage);
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    // Function to show the adaptationPostsForm modal
    const handleShowForm = () => {
        setShowForm(true);
    };

    // Function to hide the adaptationPostsForm modal
    const handleCloseForm = () => {
        setShowForm(false);
    };
  return (
    <>
            {!adaptationPosts.length && (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Spinner animation='border' />
                </div>
            )}
            {adaptationPosts.length && (
                <div className='container' style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column' }}>
                    {loggedInUser.u_id &&
                        <Button
                            onClick={handleShowForm}
                            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginTop: '20px' }} variant='outline-primary'
                        >
                            <FontAwesomeIcon className="font-weight-normal text-secondary " icon={faUpload} />
                            SHARE YOUR ADOPTION POST
                        </Button>
                    }

                    <Modal show={showForm} onHide={handleCloseForm}>
                        <Modal.Header closeLabel='cancel'>
                            <Modal.Title>Upload adoption post</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <AdaptationForm setShowForm={setShowForm} />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseForm}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    <AdaptationCard adaptationPosts={adaptationPosts} currentPage={currentPage} itemsPerPage={itemsPerPage} />
                    <Pagination
                        currentPage={currentPage}
                        itemsPerPage={itemsPerPage}
                        setItemsPerPage={setItemsPerPage}
                        totalPages={totalPages}
                        handlePageChange={handlePageChange}
                    />
                    {!loggedInUser.u_id && <p className='mt-2'><a href="/sign-in">Sign in</a> for share your own adoption post!</p>}
                </div>
            )}
        </>
  );
};

export default AdaptationPage