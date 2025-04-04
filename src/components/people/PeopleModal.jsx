import * as React from 'react';
/*import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';*/

import {Box, Button, Typography, Modal} from '@mui/material';

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

export default function PeopleModal({prop}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>{prop.name}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        area-labelledby="modal-modal-sub-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h3" component="h1">
            {prop.name}
          </Typography>
          <img src={prop.imagePath} alt={prop.name} />
          <Typography id="modal-modal-sub-title" variant="h4" component="h2">
            {prop.title}
          </Typography>
          {prop.tagline &&
            <Typography id="modal-modal-sub-title" variant="h5" component="h3">
                {prop.tagline}
            </Typography>
          }
          {prop.username &&
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Username: {prop.username}
            </Typography>
          }
          {prop.interestArea &&
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Interest Area: {prop.interestArea}
            </Typography>
          }
          {prop.office &&
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Office: {prop.office}
            </Typography>
          }
          {prop.twitter &&
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Twitter: <a href={`https://x.com/${prop.twitter}`} target="_blank">@{prop.twitter}</a>
            </Typography>
          }
          {prop.facebook &&
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Facebook: <a href={`https://www.facebook.com/${prop.facebook}/`} target="_blank">{prop.facebook}</a>
            </Typography>
          }
          {prop.website &&
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Personal Website: <a href={prop.website} target="_blank">My Homepage</a>
              </Typography>
          }
          {prop.phone &&
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Phone: {prop.phone}
            </Typography>
          }
          {prop.email &&
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Email: <a href={`mailto:${prop.email}`}>{prop.email}</a>
            </Typography>
          }
        </Box>
      </Modal>
    </div>
  );
}

