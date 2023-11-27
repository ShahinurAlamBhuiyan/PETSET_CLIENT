import React from 'react'
import './Pagination.css'
import { Button } from 'react-bootstrap'

const Pagination = ({ handlePageChange, currentPage, totalPages, itemsPerPage, setItemsPerPage }) => {
    console.log(currentPage)
    return (
        <>
            <div className="pagination">
                <Button variant="outline-primary" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                    Previous
                </Button>
                <span className="page-number">{currentPage}</span>
                <Button
                    variant="outline-primary"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </Button>
            </div>
            {/* <Form.Group controlId="formItemsPerPage">
                <Form.Label>Items per Page</Form.Label>
                <Form.Control
                    type="number"
                    value={itemsPerPage}
                    onChange={(e) => setItemsPerPage(parseInt(e.target.value))}
                />
            </Form.Group> */}

        </>
    )
}

export default Pagination