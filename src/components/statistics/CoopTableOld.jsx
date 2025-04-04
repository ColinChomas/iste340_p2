import { useState, useEffect } from 'react';
import getData from '../../util/GetData.js';

import {Box, Button, Typography, Modal} from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,

}

const CoopTable = () => {
    //state for data loading
    const [loaded, setLoaded] = useState(false);
    const [stats, setStats] = useState();

    //state for modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //data table page
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 10;

    useEffect(() => {
        getData('employment/')
            .then((json) => {
                setStats(json.coopTable);
                setLoaded(true);
            });
    }, []);

    if (!loaded) return (<h1>...Loading Co-Op Table...</h1>)

    //data info
    const totalRecords = stats.coopInformation.length;
    const totalPages = Math.ceil(totalRecords / recordsPerPage);
    const startIndex = (currentPage - 1) * recordsPerPage;
    const endIndex = Math.min(startIndex + recordsPerPage, totalRecords);
    const currentRecords = stats.coopInformation.slice(startIndex, endIndex);

    // page handler
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    }

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }


    return (
        
        <>
        <div>
            <Button onClick={handleOpen}>Co-Op Table</Button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <h2>{stats.title}</h2>
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Employer</th>
                                <th>Degree</th>
                                <th>City</th>
                                <th>Term</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentRecords.map((d, index) => (
                                <tr key={index}>
                                    <td>{d.employer}</td>
                                    <td>{d.degree}</td>
                                    <td>{d.city}</td>
                                    <td>{d.term}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div>
                        <Button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</Button>
                        <span> Page {currentPage} of {totalPages} </span>
                        <Button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</Button>
                    </div>
                </Box>
            </Modal>
        </div>
            
        </>
    );
};

export default CoopTable;