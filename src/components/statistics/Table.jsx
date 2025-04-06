import { useState } from 'react';
import { Box, Button, Modal } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Table = ({ data, datakey }) => {
    if (!data || !data[datakey] || data[datakey].length === 0) {
        return <h3>No data available</h3>;
    }

    // State for modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // State for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 10;

    // Pagination logic
    const totalRecords = data[datakey].length;
    const totalPages = Math.ceil(totalRecords / recordsPerPage);
    const startIndex = (currentPage - 1) * recordsPerPage;
    const endIndex = Math.min(startIndex + recordsPerPage, totalRecords);
    const currentRecords = data[datakey].slice(startIndex, endIndex);

    // Page handlers
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <>
            <div>
                <Button className="btn btn-primary" onClick={handleOpen}>{data.title}</Button>
                <Modal open={open} onClose={handleClose}>
                    <Box sx={style}>
                        <h2>{data.title}</h2>
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    {Object.keys(currentRecords[0]).map((key) => (
                                        <th key={key}>{key}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {currentRecords.map((record, index) => (
                                    <tr key={index}>
                                        {Object.values(record).map((value, i) => (
                                            <td key={i}>{value}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div>
                            <Button onClick={handlePrevPage} disabled={currentPage === 1}>
                                Previous
                            </Button>
                            <span> Page {currentPage} of {totalPages} </span>
                            <Button onClick={handleNextPage} disabled={currentPage === totalPages}>
                                Next
                            </Button>
                        </div>
                    </Box>
                </Modal>
            </div>
        </>
    );
};

export default Table;