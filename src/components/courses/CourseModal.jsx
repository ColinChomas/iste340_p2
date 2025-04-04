import { useState } from 'react';
import { Box, Button, Typography, Modal } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const CourseModal = ({ course }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Button onClick={handleOpen}>{course.courseID}</Button>
            <Modal open={open} onClose={handleClose}>
                <Box sx={style}>
                    <Typography variant="h6" component="h2">
                        {course.title}
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                        <strong>Course ID:</strong> {course.courseID}
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                        {course.description}
                    </Typography>
                </Box>
            </Modal>
        </>
    );
};

export default CourseModal;

