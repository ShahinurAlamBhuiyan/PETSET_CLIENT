import React from 'react'
import './Pagination.css'
import { Button } from 'react-bootstrap'

const Pagination = ({ handlePageChange, currentPage, totalPages }) => {
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
        </>
    )
}

export default Pagination